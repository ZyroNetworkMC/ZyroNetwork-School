---
title: sar
description: A detailed guide to using sar for system activity reporting.
---

# sar (System Activity Reporter)

`sar` is a powerful, multifaceted tool included in the `sysstat` package. It can report on almost every aspect of system performance, both in real-time and by querying historical data.

## Real-time vs. Historical Data

*   **Real-time:** You can run `sar` with an interval and count (e.g., `sar 1 5`) to view current system activity, similar to `vmstat` or `iostat`.
*   **Historical:** When the `sysstat` service is running, it continuously collects data and saves it in binary files under `/var/log/sysstat/` (usually named `saDD`, where DD is the day of the month). `sar` can read these files to show past performance.

## Common sar Commands

### CPU Utilization

*   `sar -u`: Shows CPU usage for the current day.
*   `sar -u 2 5`: Shows real-time CPU usage every 2 seconds, 5 times.

Key metrics:
*   `%user`: Time executing at the user level.
*   `%system`: Time executing at the system level.
*   `%iowait`: Time waiting for I/O completion. High values indicate disk bottlenecks.
*   `%idle`: Time the CPU was idle.

### Memory Utilization

*   `sar -r`: Shows memory statistics.

Key metrics:
*   `kbmemfree`: Amount of free memory.
*   `kbmemused`: Amount of used memory.
*   `%memused`: Percentage of memory used.
*   `kbbuffers`: Memory used for buffers.
*   `kbcached`: Memory used for cache.

### Paging and Swapping

*   `sar -B`: Shows paging statistics (page faults, etc.).
*   `sar -W`: Shows swapping statistics. High values of `pswpin/s` and `pswpout/s` indicate the system is thrashing (actively swapping), which severely degrades performance.

### Disk I/O

*   `sar -d -p`: Shows activity for block devices. The `-p` flag pretty-prints the device names (e.g., `sda` instead of `dev8-0`).

Key metrics:
*   `tps`: Transfers per second (IOPS).
*   `rkB/s`: Read kilobytes per second.
*   `wkB/s`: Write kilobytes per second.
*   `%util`: Percentage of CPU time during which I/O requests were issued to the device. A value close to 100% indicates device saturation.

### Network Activity

*   `sar -n DEV`: Shows network statistics per interface.

Key metrics:
*   `rxpck/s`: Received packets per second.
*   `txpck/s`: Transmitted packets per second.
*   `rxkB/s`: Received kilobytes per second.
*   `txkB/s`: Transmitted kilobytes per second.

## Querying Historical Data

To query data from a specific day, use the `-f` flag pointing to the appropriate data file:

```bash
sar -u -f /var/log/sysstat/sa14
```

You can also specify a time range using `-s` (start) and `-e` (end):

```bash
sar -r -f /var/log/sysstat/sa14 -s 08:00:00 -e 12:00:00
```
