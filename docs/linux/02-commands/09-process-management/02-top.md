---
title: top
description: Learn how to use the top command to view dynamic, real-time information about running processes.
---

# `top`

The `top` command provides a dynamic, real-time view of a running Linux system. It displays a summary of system information (uptime, load average, CPU/Memory usage) followed by a list of processes currently managed by the Linux kernel, constantly updating.

## Basic Syntax

```bash
top [OPTIONS]
```

## Common Flags/Options

| Option | Description |
|---|---|
| `-d SECONDS` | Specify the delay between screen updates (default is typically 3 seconds). |
| `-u USERNAME` | Monitor only processes owned by a specific user. |
| `-p PID` | Monitor only specific Process IDs (comma-separated). |
| `-c` | Toggle displaying the full command line instead of just the command name. |

## Interactive Commands (While `top` is running)

Once `top` is open, you can press various keys to change its behavior:

| Key | Action |
|---|---|
| `h` | Show help for interactive commands. |
| `k` | Kill a process (prompts for PID and signal). |
| `r` | Renice a process (change priority). |
| `u` | Filter by user (prompts for username). |
| `P` | Sort by CPU usage (default). |
| `M` | Sort by Memory usage. |
| `N` | Sort by PID. |
| `q` | Quit `top`. |

## Real-world Examples

### 1. Basic system monitoring
Simply type `top` to start monitoring the system. It will take over your terminal window until you press `q`.

```bash
top
```

### 2. Monitor processes for a specific user
If you suspect a particular user's applications are using too many resources:

```bash
top -u nginx
```

### 3. Change the update interval
If you want the screen to update more slowly to make it easier to read (e.g., every 5 seconds):

```bash
top -d 5
```

### 4. Troubleshooting high CPU
1. Run `top`.
2. Ensure it is sorted by CPU (it is by default, or press `P`).
3. Identify the PID of the offending process.
4. Press `k`, enter the PID, and press Enter to terminate it.
