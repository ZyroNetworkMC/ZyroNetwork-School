---
title: pkill
description: Learn how to use the pkill command to send signals to processes based on name and other attributes.
---

# `pkill`

The `pkill` command allows you to send signals to processes by matching their name or other attributes, rather than requiring their exact Process ID (PID). This makes it incredibly useful for terminating processes quickly without having to run `ps` or `pgrep` first.

## Basic Syntax

```bash
pkill [OPTIONS] PATTERN
```

## Common Flags/Options

`pkill` uses the same signal system as `kill`. By default, it sends `SIGTERM` (15).

| Option | Description |
|---|---|
| `-SIGNAL` | Send a specific signal (e.g., `-9` for SIGKILL). |
| `-u USER` | Match only processes owned by the specified user. |
| `-f` | Match against the full command line, not just the process name. |
| `-x` | Require an exact match of the process name (prevents accidental matches). |
| `-c` | Do not kill; just count the number of matching processes. |

## Real-world Examples

### 1. Kill a process by name
If you have a runaway Firefox instance, you can terminate all processes named "firefox".

```bash
pkill firefox
```

### 2. Force kill a stubborn application
Send the `SIGKILL` (9) signal to a process name.

```bash
pkill -9 java
```

### 3. Match against the full command line
Sometimes the process name isn't enough. For example, if you run a python script like `python3 data_cruncher.py`, the process name is just `python3`. To target the specific script:

```bash
pkill -f data_cruncher.py
```

### 4. Kill processes belonging to a specific user
If a user left multiple processes running and you want to clean them up:

```bash
sudo pkill -u alice
```
*(This sends SIGTERM to all processes owned by alice).*

### 5. Require an exact match
Using just `pkill ssh` might kill `ssh` client connections, `sshd` the server, and `ssh-agent`. To target *only* the process named exactly "ssh":

```bash
pkill -x ssh
```
