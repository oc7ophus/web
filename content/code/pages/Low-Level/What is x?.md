Start by learning about dynamic memory + stacks + heaps => learn C

Little endian
opcode
How do Kernels work?
How is memory allocated?
	What are heaps?
What are handler code pointers?
	context: interrupt vector table
What is libc?
	and ntdll.dll (for windows)
RISC and CISC
binaries (linux)
null pointer
	null-terminated
Law of Demeter (Principle of Least Knowledge)
Fail Fast
	Make the system fail as soon as an error is detected.
Node interpreter
	kernel thing
POSIX
Keyring
	yay
How are packages actually installed on linux?

> [!question]- What is a CPU page table?
> 
> A page table is a data structure used by a virtual memory system in a computer to store mappings between virtual addresses and physical addresses. Virtual addresses are used by the program executed by the accessing process, while physical addresses are used by the hardware, or more specifically, by the random-access memory subsystem. The page table is a key component of virtual address translation that is necessary to access data in memory. The page table is set up by the computer's operating system, and may be read and written during the virtual address translation process by the memory management unit or by low-level system software or firmware.

> [!info]- Magic number (programming)
> 
> In computer programming, a magic number is any of the following: 
> 
> - A unique value with unexplained meaning or multiple occurrences which could (preferably) be replaced with a named constant
> - A constant numerical or text value used to identify a file format or protocol (for files, see List of file signatures)
> - A distinctive unique value that is unlikely to be mistaken for other meanings (e.g., Globally Unique Identifiers)
> 
> The term _**magic number**_ or _**magic constant**_ refers to the [anti-pattern](https://en.wikipedia.org/wiki/Anti-pattern "Anti-pattern") of using numbers directly in source code. This has been referred to as breaking one of the oldest rules of programming, dating back to the [COBOL](https://en.wikipedia.org/wiki/COBOL "COBOL"), [FORTRAN](https://en.wikipedia.org/wiki/FORTRAN "FORTRAN") and [PL/1](https://en.wikipedia.org/wiki/PL/1 "PL/1") manuals of the 1960s.
> 
> The use of unnamed magic numbers in code obscures the developers' intent in choosing that number, increases opportunities for subtle errors (e.g. is every digit correct in 3.14159265358979323846 and can be rounded to 3.14159? and makes it more difficult for the program to be adapted and extended in the future.
> 
> Replacing all significant magic numbers with named [constants](https://en.wikipedia.org/wiki/Constant_(programming) "Constant (programming)") (also called explanatory variables) makes programs easier to read, understand and maintain.
> 
> Names chosen to be meaningful in the context of the program can result in code that is more easily understood by a maintainer who is not the original author (or even by the original author after a period of time). 
> 
> An example of an uninformatively named constant is `int SIXTEEN = 16`, while `int NUMBER_OF_BITS = 16` is more descriptive.
> 
> The problems associated with magic 'numbers' described above are not limited to numerical types and the term is also applied to other data types where declaring a named constant would be more flexible and communicative.
> 
> Thus, declaring `const string testUserName = "John"` is better than several occurrences of the 'magic value' `"John"` in a [test suite](https://en.wikipedia.org/wiki/Test-driven_development "Test-driven development").



