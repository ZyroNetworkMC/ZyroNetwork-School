---
title: "System and Library Call Tracing: strace and ltrace"
description: "Deep dive into strace and ltrace for debugging application behavior and interactions with the kernel."
---

# System and Library Call Tracing

When an application fails and the logs offer no clues, you need to see exactly what the application is asking the operating system to do. This is where `strace` and `ltrace` come in.

## `strace`: System Call Tracer

`strace` intercepts and records the system calls which are called by a process and the signals which are received by a process. A system call is how a program requests a service from the kernel (e.g., reading a file, opening a network connection, allocating memory).

### Practical `strace` Examples

- **Trace a simple command:**
  ```bash
  strace ls
  ```
  *(This will output a massive amount of text showing every file `ls` opens and reads.)*

- **Attach to an already running process:**
  ```bash
  strace -p [PID]
  ```

- **Summarize system calls:** This is incredibly useful for finding performance bottlenecks.
  ```bash
  strace -c -p [PID]
  ```

- **Filter by specific system calls:** If you only care about files being opened:
  ```bash
  strace -e trace=open,openat -p [PID]
  ```

### Real-World Use Case: "Permission Denied" without logs

If an application fails to start but logs nothing, you can use `strace` to see exactly which file it's trying (and failing) to open:

```bash
strace -e openat ./my_broken_app
```
Look for lines ending in `EACCES (Permission denied)` or `ENOENT (No such file or directory)`.

## `ltrace`: Library Call Tracer

While `strace` looks at calls to the kernel, `ltrace` intercepts and records dynamic library calls (e.g., functions provided by `glibc` like `malloc`, `printf`, `strcmp`).

### Practical `ltrace` Examples

- **Trace library calls of a program:**
  ```bash
  ltrace ./my_program
  ```

- **Trace both library and system calls:**
  ```bash
  ltrace -S ./my_program
  ```

## Best Practices and Warnings

- **Performance Overhead:** Both `strace` and `ltrace` severely slow down the target process. Use them cautiously on production systems.
- **Security:** You need root privileges or the `CAP_SYS_PTRACE` capability to trace processes owned by other users.
- **Focus:** The output is usually overwhelming. Always use output redirection (e.g., `-o trace.log`) or filters (`-e`) to make the data manageable.
