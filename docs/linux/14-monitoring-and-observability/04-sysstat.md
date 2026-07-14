---
title: sysstat
description: An overview of the sysstat package and its system performance tools.
---

# sysstat

The `sysstat` package is a collection of performance monitoring tools for Linux. It provides comprehensive statistics about system usage, including CPU, memory, disk I/O, network, and more.

## Core Tools in sysstat

The sysstat package includes several important utilities:

*   **`sar` (System Activity Reporter):** Collects, reports, and saves system activity information. It is arguably the most powerful tool in the suite.
*   **`iostat`:** Reports Central Processing Unit (CPU) statistics and input/output statistics for devices and partitions.
*   **`mpstat`:** Reports individual or combined processor related statistics.
*   **`pidstat`:** Reports statistics for Linux tasks (processes) : I/O, CPU, memory, etc.
*   **`nfsiostat`:** Reports input/output statistics for network file systems (NFS).
*   **`cifsiostat`:** Reports statistics for CIFS filesystems.

## Installation and Configuration

The `sysstat` package is available in most Linux distributions' standard repositories.

### Installation

*   **Debian/Ubuntu:** `apt-get install sysstat`
*   **RHEL/CentOS:** `yum install sysstat`

### Configuration

To enable data collection for historical reporting (used by `sar`), you must configure and start the sysstat service.

1.  Edit `/etc/default/sysstat` (on Debian/Ubuntu) and set `ENABLED="true"`.
2.  Start the service: `systemctl start sysstat`
3.  Enable it on boot: `systemctl enable sysstat`

Data collection is managed by cron jobs or systemd timers, typically gathering data every 10 minutes and storing it in `/var/log/sysstat/`.

## Using iostat

`iostat` is primarily used for monitoring system input/output device loading.

*   `iostat`: Shows a brief overview of CPU and disk I/O.
*   `iostat -x 2 5`: Displays extended statistics (`-x`), every 2 seconds, 5 times.
*   `iostat -p sda`: Displays statistics for block device `sda` and all its partitions.

## Using mpstat

`mpstat` is used to monitor CPU utilization on multiprocessor systems.

*   `mpstat`: Shows overall CPU statistics.
*   `mpstat -P ALL`: Shows statistics for all individual processors.
*   `mpstat 1 3`: Shows overall CPU statistics every 1 second, 3 times.

## Using pidstat

`pidstat` is useful for monitoring specific processes.

*   `pidstat -u`: CPU statistics for active processes.
*   `pidstat -r`: Memory statistics for active processes.
*   `pidstat -d`: I/O statistics for active processes.
*   `pidstat -p 1234 1 5`: Shows statistics for process ID 1234 every 1 second, 5 times.
