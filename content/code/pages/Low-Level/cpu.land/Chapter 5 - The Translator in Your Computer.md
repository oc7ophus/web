
Up until now, every time I’ve talked about reading and writing memory was a little wishy-washy. For example, ELF files specify specific memory addresses to load data into, so why aren’t there problems with different processes trying to use conflicting memory? Why does each process seem to have a different memory environment?

Also, how exactly did we get here? We understand that `execve` is a syscall that _replaces_ the current process with a new program, but this doesn’t explain how multiple processes can be started. It definitely doesn’t explain how the very first program runs — what chicken (process) lays (spawns) all the other eggs (other processes)?

We’re nearing the end of our journey. After these two questions are answered, we’ll have a mostly complete understanding of how your computer got from bootup to running the software you’re using right now.

## Memory is Fake

So… about memory. It turns out that when the CPU reads from or writes to a memory address, it’s not actually referring to that location in _physical_ memory (RAM). Rather, it’s pointing to a location in _virtual_ memory space.

The CPU talks to a chip called a [_memory management unit_](https://en.wikipedia.org/wiki/Memory_management_unit) (MMU). The MMU works like a translator with a dictionary that translates locations in virtual memory to locations in RAM. When the CPU is given an instruction to read from memory address `0xfffaf54834067fe2`, it asks the MMU to translate that address. The MMU looks it up in the dictionary, discovers that the matching physical address is `0x53a4b64a90179fe2`, and sends the number back to the CPU. The CPU can then read from that address in RAM.

![[Pasted image 20240710010844.png]]

When the computer first boots up, memory accesses go directly to physical RAM. Immediately after startup, the OS creates the translation dictionary and tells the CPU to start using the MMU.

This dictionary is actually called a _page table_, and this system of translating every memory access is called _paging_. Entries in the page table are called _pages_ and each one represents how a certain chunk of virtual memory maps to RAM. These chunks are always a fixed size, and each processor architecture has a different page size. x86-64 has a default 4 KiB page size, meaning each page specifies the mapping for a block of memory 4,096 bytes long.

x86-64 also allows operating systems to enable larger 2 MiB or 4 GiB pages, which can improve address translation speed but increase memory fragmentation and waste. The larger the page size, the smaller the portion of the address that’s translated by the MMU.

![[Pasted image 20240710011805.png]]

The page table itself just resides in RAM. While it can contain millions of entries, each entry’s size is only on the order of a couple bytes, so the page table doesn’t take up too much space.

To enable paging at boot, the kernel first constructs the page table in RAM. Then, it stores the physical address of the start of the page table in a register called the page table base register (PTBR). Finally, the kernel enables paging to translate all memory accesses with the MMU. On x86-64, the top 20 bits of control register 3 (CR3) function as the PTBR. Bit 31 of CR0, designated PG for Paging, is set to 1 to enable paging.

The magic of the paging system is that the page table can be edited while the computer is running. This is how each process can have its own isolated memory space — when the OS switches context from one process to another, an important task is remapping the virtual memory space to a different area in physical memory. Let’s say you have two processes: process A can have its code and data (likely loaded from an ELF file!) at `0x0000000000400000`, and process B can access its code and data from the very same address. Those two processes can even be instances of the same program, because they aren’t actually fighting over that address range! The data for process A is somewhere far from process B in physical memory, and is mapped to `0x0000000000400000` by the kernel when switching to the process.

![[Pasted image 20240710012012.png]]

> [!info] **Aside: cursed ELF fact**
> 
> In certain situations, `binfmt_elf` has to map the first page of memory to zeroes. Some programs written for UNIX System V Release 4.0 (SVr4), an OS from 1988 that was the first to support ELF, rely on null pointers being readable. And somehow, some programs still rely on that behavior.
> 
> It seems like the Linux kernel dev implementing this was [a little disgruntled](https://github.com/torvalds/linux/blob/22b8cc3e78f5448b4c5df00303817a9137cd663f/fs/binfmt_elf.c#L1322-L1329):
> 
> _“Why this, you ask??? Well SVr4 maps page 0 as read-only, and some applications ‘depend’ upon this behavior. Since we do not have the power to recompile these, we emulate the SVr4 behavior. Sigh.”_
> 
> Sigh.

