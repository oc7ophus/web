## Hardware Interrupts

Earlier, we talked about how software interrupts are used to hand control from a userland program to the OS. These are called “software” interrupts because they’re voluntarily triggered by a program — machine code executed by the processor in the normal fetch-execute cycle tells it to switch control to the kernel.

OS schedulers use _timer chips_ like [PITs](https://en.wikipedia.org/wiki/Programmable_interval_timer) to trigger hardware interrupts for multitasking:

1. Before jumping to program code, the OS sets the timer chip to trigger an interrupt after some period of time.
2. The OS switches to user mode and jumps to the next instruction of the program.
3. When the timer elapses, it triggers a hardware interrupt to switch to kernel mode and jump to OS code.
4. The OS can now save where the program left off, load a different program, and repeat the process.

This is called _preemptive multitasking_; the interruption of a process is called [_preemption_](https://en.wikipedia.org/wiki/Preemption_(computing)). If you’re, say, reading this article on a browser and listening to music on the same machine, your very own computer is probably following this exact cycle thousands of times a second.

## Timeslice Calculation

A _timeslice_ is the duration an OS scheduler allows a process to run before preempting it. The simplest way to pick timeslices is to give every process the same timeslice, perhaps in the 10 ms range, and cycle through tasks in order. This is called _fixed timeslice round-robin_ scheduling.

Timeslices are calculated by dividing the target latency by the total number of tasks; this is better than fixed timeslice scheduling because it eliminates wasteful task switching with fewer processes. With a target latency of 15 ms and 10 processes, each process would get 15/10 or 1.5 ms to run. With only 3 processes, each process gets a longer 5 ms timeslice while still hitting the target latency.

Process switching is computationally expensive because it requires saving the entire state of the current program and restoring a different one. Past a certain point, too small a timeslice can result in performance problems with processes switching too rapidly. It’s common to give the timeslice duration a lower bound (_minimum granularity_). This does mean that the target latency is exceeded when there are enough processes for the minimum granularity to take effect.

At the time of writing this article, Linux’s scheduler uses a target latency of 6 ms and a minimum granularity of 0.75 ms.

![[Pasted image 20240709232450.png]]

Round-robin scheduling with this basic timeslice calculation is close to what most computers do nowadays. It’s still a bit naive; most operating systems tend to have more complex schedulers which take process priorities and deadlines into account. Since 2007, Linux has used a scheduler called [Completely Fair Scheduler](https://docs.kernel.org/scheduler/sched-design-CFS.html). CFS does a bunch of very fancy computer science things to prioritize tasks and divvy up CPU time.

Every time the OS preempts a process it needs to load the new program’s saved execution context, including its memory environment. This is accomplished by telling the CPU to use a different _page table_, the mapping from “virtual” to physical addresses. This is also the system that prevents programs from accessing each other’s memory

--- 

## Key notes

A _timeslice_ is the duration an OS scheduler allows a process to run before preempting it.

Target latency is the time it takes for a process to resume execution after being preempted, assuming a reasonable number of processes.

Timeslices are calculated by dividing the target latency by the total number of tasks; With a target latency of 15 ms and 10 processes, each process would get 15/10 or 1.5 ms to run. With only 3 processes, each process gets a longer 5 ms timeslice while still hitting the target latency.




