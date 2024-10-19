### Format Highlight: Scripts

Of the many formats Linux supports, `binfmt_script` is the first I want to specifically talk about.

Have you ever read or written a [shebang](https://en.wikipedia.org/wiki/Shebang_(Unix))? That line at the start of some scripts that specifies the path to the interpreter?

```
#!/bin/bash
```

I always just assumed these were handled by the shell, but no! Shebangs are actually a feature of the kernel, and scripts are executed with the same syscalls as every other program. Computers are _so cool_.

Take a look at how `fs/binfmt_script.c` checks if a file starts with a shebang:

```c
/* load_script @ fs/binfmt_script.c */

	/* Not ours to exec if we don't start with "#!". */
	if ((bprm->buf[0] != '#') || (bprm->buf[1] != '!'))
		return -ENOEXEC;
```

If the file does start with a shebang, the binfmt handler then reads the interpreter path and any space-separated arguments after the path. It stops when it hits either a newline or the end of the buffer.

Since shebangs are handled by the kernel, and pull from `buf` instead of loading the whole file, they’re _always_ truncated to the length of `buf`. Apparently, 4 years ago, someone got annoyed by the kernel truncating their >128-character paths, and their solution was to double the truncation point by doubling the buffer size! Today, on your very own Linux machine, if you have a shebang line more than 256 characters long, everything past 256 characters will be _completely lost_.

An exec syscall will always end up in one of two paths:

- It will eventually reach an executable binary format that it understands, perhaps after several layers of script interpreters, and run that code. At this point, the old code has been replaced.
- … or it will exhaust all its options and return an error code to the calling program, tail between its legs.

If you’ve ever used a Unix-like system, you might’ve noticed that shell scripts run from a terminal still execute if they don’t have a shebang line or `.sh` extension. You can test this out right now if you have a non-Windows terminal handy:

```bash
$ echo "echo hello" > ./file
$ chmod +x ./file
$ ./file
hello
```

So, why does the shell script run as a shell script? The kernel’s format handlers should have no clear way of detecting shell scripts without any discernible label!

Well, it turns out that this behaviour isn’t part of the kernel. It’s actually a common way for your _shell_ to handle a failure case.

When you execute a file using a shell and the exec syscall fails, most shells will _retry executing the file as a shell script_ by executing a shell with the filename as the first argument. Bash will typically use itself as this interpreter, while ZSH uses whatever `sh` is, usually [Bourne shell](https://en.wikipedia.org/wiki/Bourne_shell).

---

## Key notes

Shebangs are handled by the kernel, not the shell.
- They also have to be one of the first things in a bash script, this is because the kernel buffer truncates to 256 bytes
- This also means character paths can't be longer than 256 characters

I'm gonna be honest, a lot of this chapter went over my head