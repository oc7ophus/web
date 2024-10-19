If `execve` starts a new program by replacing the current process, how do you start a new program separately, in a new process? This is a pretty important ability if you want to do multiple things on your computer; when you double-click an app to start it, the app opens separately while the program you were previously on continues running.

The answer is another system call: `fork`, the system call fundamental to all multiprocessing. `fork` is quite simple, actually — it clones the current process and its memory, leaving the saved instruction pointer exactly where it is, and then allows both processes to proceed as usual. Without intervention, the programs continue to run independently from each other and all computation is doubled.

The newly running process is referred to as the “child,” with the process originally calling `fork` the “parent.” Processes can call `fork` multiple times, thus having multiple children. Each child is numbered with a _process ID_ (PID), starting with 1.

Cluelessly doubling the same code is pretty useless, so `fork` returns a different value on the parent vs the child. On the parent, it returns the PID of the new child process, while on the child it returns 0. This makes it possible to do different work on the new process so that forking is actually helpful.

```c
pid_t pid = fork();

// Code continues from this point as usual, but now across
// two "identical" processes.
//
// Identical... except for the PID returned from fork!
//
// This is the only indicator to either program that they
// are not one of a kind.

if (pid == 0) {
	// We're in the child.
	// Do some computation and feed results to the parent!
} else {
	// We're in the parent.
	// Probably continue whatever we were doing before.
}
```

Anyways, Unix programs launch new programs by calling `fork` and then immediately running `execve` in the child process. This is called the _fork-exec pattern_. When you run a program, your computer executes code similar to the following:

