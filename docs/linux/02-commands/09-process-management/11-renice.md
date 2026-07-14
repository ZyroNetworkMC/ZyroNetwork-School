---
title: renice
description: Learn how to use the renice command to alter the priority of running processes.
---

# `renice`

While `nice` is used to set the priority of a process *when it starts*, `renice` is used to alter the scheduling priority (niceness) of one or more *already running* processes.

- **Niceness Range:** -20 (highest priority) to 19 (lowest priority).
- As with `nice`, normal users can only increase the niceness (lower the priority) of their own processes. Only root can decrease the niceness (raise the priority) or change the niceness of other users' processes.

## Basic Syntax

```bash
renice [-n] PRIORITY [OPTIONS] TARGET...
```
*(Unlike `nice` where you provide an adjustment, `renice` takes the absolute priority value you want to set).*

## Common Flags/Options

| Option | Description |
|---|---|
| `-p`, `--pid` | Interpret targets as Process IDs (PIDs). This is the default. |
| `-u`, `--user` | Interpret targets as usernames. Changes priority for all processes owned by the user. |
| `-g`, `--pgrp` | Interpret targets as process group IDs. |

## Real-world Examples

### 1. Lower the priority of a running process
Suppose you started a rendering job (PID 3405) normally, but now realize it's making your system sluggish. You can lower its priority by setting its nice value to 10.

```bash
renice 10 -p 3405
```

### 2. Raise the priority of a critical process (Root only)
If a database process (PID 892) is struggling to keep up with queries, an admin can give it higher priority (a negative nice value).

```bash
sudo renice -5 -p 892
```

### 3. Change priority for all processes of a specific user
If a specific user (e.g., a data analyst) is running multiple heavy jobs, you can lower the priority of *all* their processes at once.

```bash
sudo renice 15 -u alice
```

### 4. Using renice interactively in `top` or `htop`
While `renice` is a command-line tool, it's often easier to change priorities interactively.
- In `top`, press `r`, enter the PID, then enter the nice value.
- In `htop`, select the process and press `F7` (decrease priority/increase nice) or `F8` (increase priority/decrease nice).
