---
title: nice
description: Learn how to use the nice command to run programs with modified scheduling priority.
---

# `nice`

The `nice` command allows you to execute a program with a modified scheduling priority. In Linux, CPU scheduling is determined by a priority value called "niceness." 

- **Niceness Range:** -20 (highest priority) to 19 (lowest priority). 
- **Default:** Most processes start with a nice value of 0.
- Being "nice" means giving up CPU time to other processes. Therefore, a *higher* nice number means *lower* priority.

*Note: Regular users can only increase the nice value (make a process lower priority, 0 to 19). Only root/sudo can assign negative nice values (higher priority).*

## Basic Syntax

```bash
nice [OPTIONS] [COMMAND [ARGUMENTS...]]
```

## Common Flags/Options

| Option | Description |
|---|---|
| `-n, --adjustment=N` | Add N to the niceness (default is 10 if no value is specified). |

## Real-world Examples

### 1. Start a task with lower priority (default behavior)
If you want to run a heavy data backup script but don't want it to slow down the web server running on the same machine, run it with `nice`. By default, it adds 10 to the priority.

```bash
nice ./backup.sh
```

### 2. Start a task with a specific lower priority
You can specify exactly how "nice" the process should be. 19 is the lowest possible priority.

```bash
nice -n 15 tar -czvf archive.tar.gz /large_data_folder
```

### 3. Start a task with higher priority (Root only)
If a critical system task needs immediate and sustained CPU time, a system administrator can give it a negative nice value.

```bash
sudo nice -n -10 ./critical_process
```

### 4. Check the nice value of running processes
You can use `top`, `htop`, or `ps` to see nice values. In `ps`, it's usually under the `NI` column.

```bash
ps -l
```
