We pretty thoroughly understand `execve` now. At the end of most paths, the kernel will reach a final program containing machine code for it to launch. Typically, a setup process is required before actually jumping to the code — for example, different parts of the program have to be loaded into the right places in memory. Each program needs different amounts of memory for different things, so we have standard file formats that specify how to set up a program for execution. While Linux supports many such formats, the most common format by far is _ELF_ (executable and linkable format).

> [!question] **Aside: are elves everywhere?**
> 
> When you run an app or command-line program on Linux, it’s exceedingly likely that it’s an ELF binary. However, on macOS the de-facto format is [Mach-O](https://en.wikipedia.org/wiki/Mach-O) instead. Mach-O does all the same things as ELF but is structured differently. On Windows, .exe files use the [Portable Executable](https://en.wikipedia.org/wiki/Portable_Executable) format which is, again, a different format with the same concept.

In the Linux kernel, ELF binaries are handled by the `binfmt_elf` handler, which is more complex than many other handlers and contains thousands of lines of code. It’s responsible for parsing out certain details from the ELF file and using them to load the process into memory and execute it.

## File Structure

Before looking more deeply at how `binfmt_elf` executes ELF files, let’s take a look at the file format itself. ELF files are typically made up of four parts:

![[Pasted image 20240710002754.png]]

### ELF Header

Every ELF file has an [ELF header](https://refspecs.linuxfoundation.org/elf/gabi4+/ch4.eheader.html). It has the very important job of conveying basic information about the binary such as:

- What processor it’s designed to run on. ELF files can contain machine code for different processor types, like ARM and x86.
- Whether the binary is meant to be run on its own as an executable, or whether it’s meant to be loaded by other programs as a “dynamically linked library.”
- The entry point of the executable. Later sections specify exactly where to load data contained in the ELF file into memory. The entry point is a memory address pointing to where the first machine code instruction is in memory after the entire process has been loaded.

The ELF header is always at the start of the file. It specifies the locations of the program header table and section header, which can be anywhere within the file. Those tables, in turn, point to data stored elsewhere in the file.

### Program Header Table

The [program header table](https://refspecs.linuxbase.org/elf/gabi4+/ch5.pheader.html) is a series of entries containing specific details for how to load and execute the binary at runtime. Each entry has a type field that says what detail it’s specifying — for example, `PT_LOAD` means it contains data that should be loaded into memory, but `PT_NOTE` means the segment contains informational text that shouldn’t necessarily be loaded anywhere.

![[Pasted image 20240710002947.png]]

Each entry specifies information about where its data is in the file and, sometimes, how to load the data into memory:

- It points to the position of its data within the ELF file.
- It can specify what virtual memory address the data should be loaded into memory at. This is typically left blank if the segment isn’t meant to be loaded into memory.
- Two fields specify the length of the data: one for the length of the data in the file, and one for the length of the memory region to be created. If the memory region length is longer than the length in the file, the extra memory will be filled with zeroes. This is beneficial for programs that might want a static segment of memory to use at runtime; these empty segments of memory are typically called [BSS](https://en.wikipedia.org/wiki/.bss) segments.
- Finally, a flags field specifies what operations should be permitted if it’s loaded into memory: `PF_R` makes it readable, `PF_W` makes it writable, and `PF_X` means it’s code that should be allowed to execute on the CPU.

### Section Header Table

The [section header table](https://refspecs.linuxbase.org/elf/gabi4+/ch4.sheader.html) is a series of entries containing information about _sections_. This section information is like a map, charting the data inside the ELF file. It makes it easy for [programs like debuggers](https://www.sourceware.org/gdb/) to understand the intended uses of different portions of the data.

![[Pasted image 20240710003232.png]]

For example, the program header table can specify a large swath of data to be loaded into memory together. That single `PT_LOAD` block might contain both code and global variables! There’s no reason those have to be specified separately to _run_ the program; the CPU just starts at the entry point and steps forward, accessing data when and where the program requests it. However, software like a debugger for _analyzing_ the program needs to know exactly where each area starts and ends, otherwise it might try to decode some text that says “hello” as code (and since that isn’t valid code, explode). This information is stored in the section header table.

Each section has a name, a type, and some flags that specify how it’s intended to be used and decoded. Standard names usually start with a dot by convention. The most common sections are:

- `.text`: machine code to be loaded into memory and executed on the CPU. `SHT_PROGBITS` type with the `SHF_EXECINSTR` flag to mark it as executable, and the `SHF_ALLOC` flag which means it’s loaded into memory for execution. (Don’t get confused by the name, it’s still just binary machine code! I always found it somewhat strange that it’s called `.text` despite not being readable “text.“)
- `.data`: initialized data hardcoded in the executable to be loaded into memory. For example, a global variable containing some text might be in this section. If you write low-level code, this is the section where statics go. This also has the type `SHT_PROGBITS`, which just means the section contains “information for the program.” Its flags are `SHF_ALLOC` and `SHF_WRITE` to mark it as writable memory.
- `.bss`: I mentioned earlier that it’s common to have some allocated memory that starts out zeroed. It would be a waste to include a bunch of empty bytes in the ELF file, so a special segment type called BSS is used. It’s helpful to know about BSS segments during debugging, so there’s also a section header table entry that specifies the length of the memory to be allocated. It’s of type `SHT_NOBITS`, and is flagged `SHF_ALLOC` and `SHF_WRITE`.
- `.rodata`: this is like `.data` except it’s read-only. In a very basic C program that runs `printf("Hello, world!")`, the string “Hello world!” would be in a `.rodata` section, while the actual printing code would be in a `.text` section.
- `.shstrtab`: this is a fun implementation detail! The names of sections themselves (like `.text` and `.shstrtab`) aren’t included directly in the section header table. Instead, each entry contains an offset to a location in the ELF file that contains its name. This way, each entry in the section header table can be the same size, making them easier to parse — an offset to the name is a fixed-size number, whereas including the name in the table would use a variable-size string. All of this name data is stored in its own section called `.shstrtab`, of type `SHT_STRTAB`.

## A Brief Explanation of Linking

Back to the `binfmt_elf` code: the kernel cares about two types of entries in the program header table.

`PT_LOAD` segments specify where all the program data, like the `.text` and `.data` sections, need to be loaded into memory. The kernel reads these entries from the ELF file to load the data into memory so the program can be executed by the CPU.

The other type of program header table entry that the kernel cares about is `PT_INTERP`, which specifies a “dynamic linking runtime.”

Before we talk about what dynamic linking is, let’s talk about “linking” in general. Programmers tend to build their programs on top of libraries of reusable code — for example, libc, which we talked about earlier. When turning your source code into an executable binary, a program called a linker resolves all these references by finding the library code and copying it into the binary. This process is called _static linking_, which means external code is included directly in the file that’s distributed.

However, some libraries are super common. You’ll find libc is used by basically every program under the sun, since it’s the canonical interface for interacting with the OS through syscalls. It would be a terrible use of space to include a separate copy of libc in every single program on your computer. Also, it might be nice if bugs in libraries could be fixed in one place rather than having to wait for each program that uses the library to be updated. Dynamic linking is the solution to these problems.

If a statically linked program needs a function `foo` from a library called `bar`, the program would include a copy of the entirety of `foo`. However, if it’s dynamically linked it would only include a reference saying “I need `foo` from library `bar`.” When the program is run, `bar` is hopefully installed on the computer and the `foo` function’s machine code can be loaded into memory on-demand. If the computer’s installation of the `bar` library is updated, the new code will be loaded the next time the program runs without needing any change in the program itself.

![[Pasted image 20240710004132.png]]

## Dynamic Linking in the Wild

On Linux, dynamically linkable libraries like `bar` are typically packaged into files with the .so (Shared Object) extension. These .so files are ELF files just like programs — you may recall that the ELF header includes a field to specify whether the file is an executable or a library. In addition, shared objects have a `.dynsym` section in the section header table which contains information on what symbols are exported from the file and can be dynamically linked to.

On Windows, libraries like `bar` are packaged into .dll (**d**ynamic **l**ink **l**ibrary) files. macOS uses the .dylib (**dy**namically linked **lib**rary) extension. Just like macOS apps and Windows .exe files, these are formatted slightly differently from ELF files but are the same concept and technique.

An interesting distinction between the two types of linking is that with static linking, only the portions of the library that are used are included in the executable and thus loaded into memory. With dynamic linking, the _entire library_ is loaded into memory. This might initially sound less efficient, but it actually allows modern operating systems to save _more_ space by loading a library into memory once and then sharing that code between processes. Only code can be shared as the library needs different state for different programs, but the savings can still be on the order of tens to hundreds of megabytes of RAM.

