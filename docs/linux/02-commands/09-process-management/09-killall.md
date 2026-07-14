---
title: killall
description: Learn how to use the killall command to kill processes by name.
---

# `killall`

The `killall` command sends a signal to all processes running any of the specified commands. It is very similar to `pkill`, but differs in its default matching behavior and origin (it's part of the `psmisc` package). 

*Note: On Solaris systems, `killall` kills absolutely every process on the system, bringing it down. On Linux, it only kills processes matching the name. Always be careful!*

## Basic Syntax

```bash
killall [OPTIONS] COMMAND_NAME...
```

## Common Flags/Options

By default, `killall` sends `SIGTERM` (15).

| Option | Description |
|---|---|
| `-SIGNAL` | Send a specific signal (e.g., `-9` or `-SIGKILL`). |
| `-u USER` | Kill only processes the specified user owns. |
| `-e`, `--exact` | Require an exact match for very long names. |
| `-I`, `--ignore-case` | Do case-insensitive process name matching. |
| `-i`, `--interactive` | Ask for confirmation before killing each process. |
| `-y`, `--younger-than TIME` | Kill processes younger than a specified time (e.g., `5m` for 5 minutes). |
| `-o`, `--older-than TIME` | Kill processes older than a specified time. |

## Real-world Examples

### 1. Kill all instances of a program
If you have multiple Nginx worker processes and want to stop all of them:

```bash
sudo killall nginx
```

### 2. Ask for confirmation (Interactive mode)
If you are unsure how many processes might be affected and want to be safe, use `-i`.

```bash
killall -i bash
```
**Output:**
```
Kill bash(1054) ? (y/N) n
Kill bash(2098) ? (y/N) y
```

### 3. Kill processes older than a certain time
This is incredibly useful for cleaning up hung scripts or old connections. For example, to kill all `php-fpm` processes that have been running for more than 2 hours:

```bash
sudo killall -o 2h php-fpm
```

### 4. Send a specific signal
To forcefully terminate all instances of a crashing program:

```bash
killall -9 chrome
```
