---
title: "watch - Execute a Program Periodically"
description: "Learn how to repeatedly run a command and monitor its output using the watch command."
---

# watch

## Explanation
The `watch` command runs a specified command repeatedly and displays its output and errors (the first screenfull). This allows you to watch the program output change over time. By default, the command is run every 2 seconds.

## Basic Syntax
```bash
watch [OPTION]... COMMAND
```

## Common Flags and Options

| Flag | Description |
|---|---|
| `-n`, `--interval=SECS`| Specify update interval in seconds. |
| `-d`, `--differences[=PERMANENT]`| Highlight the differences between successive updates. |
| `-t`, `--no-title` | Turn off the header showing the interval, command, and current time. |

## Real-world Examples

1. **Monitor disk space usage, updating every 2 seconds:**
   ```bash
   watch df -h
   ```

2. **Watch the output of `ls` to see a file being downloaded:**
   ```bash
   watch -n 1 ls -l largefile.iso
   ```

3. **Monitor memory usage and highlight changes:**
   ```bash
   watch -d free -m
   ```
