The “instructions” that CPUs execute are just binary data: a byte or two to represent what instruction is being run (the opcode), followed by whatever data is needed to run the instruction.

What we call _machine code_ is nothing but a series of these binary instructions in a row.

![[Pasted image 20240709225143.png]]

RAM is your computer’s main memory bank, a large multi-purpose space which stores all the data used by programs running on your computer. 
- That includes the program code itself as well as the code at the core of the operating system. 
- The CPU always reads machine code directly from RAM, and code **can’t be run** if it isn’t loaded into RAM.

The CPU stores an _instruction pointer_ which points to the location in RAM where it’s going to fetch the next instruction.
- After executing each instruction, the CPU moves the pointer and repeats. This is the _fetch-execute cycle_.

After executing an instruction, the pointer moves forward to immediately after the instruction in RAM so that it now points to the next instruction.
That’s why code runs! The instruction pointer just keeps chugging forward, executing machine code in the order in which it has been stored in memory.

This instruction pointer is stored in a register.
- Registers are small storage buckets that are extremely fast for the CPU to read and write to.
- Each CPU architecture has a fixed set of registers, used for everything from storing temporary values during computations to configuring the processor.
- Some registers are directly accessible from machine code
- Other registers are only used internally by the CPU, but can often be updated or read using specialized instructions.

The operating system loads this into RAM and instructs the CPU to jump the instruction pointer to that position in RAM. 
The CPU runs its *fetch-execute* cycle so the program begins running!

It turns out CPUs have a super basic worldview; they only see the current instruction pointer and a bit of internal state. 

![[Pasted image 20240709225810.png]]

Processes are entirely operating system abstractions, not something CPUs natively understand or keep track of.

## What Even is a Syscall?

Programs run in user mode because they can’t be trusted with full access to the computer. 
- User mode does its job, preventing access to most of the computer — but programs need to be able to access I/O, allocate memory, and interact with the operating system _somehow_!

To do so, software running in user mode has to ask the operating system kernel for help. The OS can then implement its own security protections to prevent programs from doing anything malicious.

A system call is a special procedure that lets a program start a transition from user space to kernel space, jumping from the program’s code into OS code.
- User space to kernel space control transfers are accomplished using a processor feature called **software interrupts:**

During the boot process, the operating system stores a table called an interrupt vector table in RAM and registers it with the CPU. 
- The IVT maps interrupt numbers to handler code pointers.

![[Pasted image 20240709230504.png]]

Then, userland programs can use an instruction like INT (which tells the processor to look up the given interrupt number in the IVT) switch to kernel mode, and then jump the instruction pointer to the memory address stored in the IVT.

When this kernel code finishes, it uses an instruction like IRET to tell the CPU to switch back to user mode and return the instruction pointer to where it was when the interrupt was triggered.

Programs need to pass data to the operating system when triggering a syscall; the OS needs to know which specific system call to execute alongside any data the syscall itself needs, for example, what filename to open. 

- The mechanism for passing this data varies by operating system and architecture, but it’s usually done by placing data in certain registers or on the stack before triggering the interrupt.

The variance in how system calls are called across devices means it would be wildly impractical for programmers to implement system calls themselves for every program.
- This would also mean operating systems couldn’t change their interrupt handling for fear of breaking every program that was written to use the old system.

Finally, we typically don’t write programs in raw assembly anymore — programmers can’t be expected to drop down to assembly any time they want to read a file or allocate memory.

![[Pasted image 20240709231200.png]]

So, operating systems provide an abstraction layer on top of these interrupts. Reusable higher-level library functions that wrap the necessary assembly instructions are provided by [libc](https://www.gnu.org/software/libc/) on Unix-like systems and part of a library called [ntdll.dll](https://learn.microsoft.com/en-us/windows-hardware/drivers/kernel/libraries-and-headers) on Windows.

Calls to these library functions themselves don’t cause switches to kernel mode, they’re just standard function calls. Inside the libraries, assembly code does actually transfer control to the kernel, and is a lot more platform-dependent than the wrapping library subroutine.



---

## Key notes

Processes are entirely operating system abstractions, not something CPUs natively understand or keep track of.

The CPU always reads machine code directly from RAM, and code **can’t be run** if it isn’t loaded into RAM.

User mode programs can’t access I/O or memory directly. They have to ask the OS for help interacting with the outside world.

Programs can delegate control to the OS with special machine code instructions like INT and IRET.

Software interrupts are safe because the processor has been pre-configured _by the OS_ with where in the OS code to jump to.

Processors execute instructions in an infinite fetch-execute loop and don’t have any concept of operating systems or programs.

The processor’s mode, usually stored in a register, determines what instructions may be executed. Operating system code runs in kernel mode and switches to user mode to run programs.

System calls are a standardized way for programs to switch from user mode to kernel mode and into OS code.
- Programs typically use these syscalls by calling shared library functions.