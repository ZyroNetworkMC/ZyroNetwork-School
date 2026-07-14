---
title: Memory Management
description: How the Linux kernel manages physical RAM, swap space, and virtual memory.
---

# Memory Management

Effective memory management is crucial for system performance. The Linux kernel uses a sophisticated system to allocate memory to processes while ensuring the system remains responsive.

## Virtual Memory

Linux uses **virtual memory**. This means that processes do not directly access physical RAM. Instead, the kernel provides each process with its own continuous virtual address space.

The kernel maps these virtual addresses to actual physical addresses in RAM. This abstraction provides several benefits:
1.  **Isolation**: Processes cannot read or write to each other's memory, enhancing security and stability.
2.  **More apparent memory**: The system can use swap space on the hard drive to simulate having more RAM than physically exists.

Memory is managed in chunks called **pages** (typically 4KB in size).

## Swap Space

Swap space is an area on the hard drive (a swap partition or a swap file) used as virtual memory.

*   **Paging out**: When physical RAM gets full, the kernel identifies memory pages that haven't been used recently and moves them from RAM to the swap space.
*   **Paging in**: When a process needs data that was swapped out, the kernel moves it back from swap into RAM.

**Important Note**: Disk access is orders of magnitude slower than RAM. If a system constantly moves data between RAM and swap (a condition known as "thrashing"), performance will severely degrade. Swap is a safety net to prevent out-of-memory crashes, not a replacement for insufficient RAM.

## The OOM (Out Of Memory) Killer

If physical RAM is exhausted and the swap space is full, the system is in a critical state. To prevent a complete system lockup, the kernel invokes the **OOM Killer**.

The OOM Killer evaluates running processes and assigns them a score based on memory usage and priority. It then forcefully terminates (kills) the process with the highest score to free up memory and save the system. Often, the victim is a memory-hungry application like a database or a Java game server.

## Checking Memory Usage

Administrators need tools to monitor memory:

*   **`free -h`**: The standard command to check memory. It shows total, used, free, shared, buffer/cache, and available memory in a human-readable format.
    *   *Note*: The "available" column is the most important metric. It estimates how much memory is available for starting new applications without swapping.
*   **`top` / `htop`**: Interactive tools showing real-time memory and CPU usage per process.
*   **`vmstat`**: Reports virtual memory statistics, useful for detecting thrashing.

## Buffers and Cache

When you run `free -h`, you will see a large chunk of memory assigned to "buff/cache".

Linux is designed to use unused RAM efficiently. Instead of leaving RAM sitting idle, the kernel uses it to cache disk reads and buffer disk writes. This dramatically speeds up file access.

If an application suddenly requires memory, the kernel instantly discards the cached data and hands the memory to the application. Therefore, high cache usage is a sign of a healthy, optimized system, not a memory leak.

## Best Practices

*   **Always configure Swap**: Even on systems with plenty of RAM, a small amount of swap space is recommended. It allows the kernel to swap out rarely used background processes, freeing up more RAM for the disk cache.
*   **Monitor OOM events**: Check system logs (`dmesg` or `journalctl`) if applications unexpectedly crash; they may have been terminated by the OOM Killer.
*   **Tune Swappiness**: The `vm.swappiness` kernel parameter (0-100) dictates how aggressively the kernel uses swap. A lower value (e.g., 10) tells the kernel to avoid swapping as much as possible, which is often preferred for database or game servers where latency matters.
