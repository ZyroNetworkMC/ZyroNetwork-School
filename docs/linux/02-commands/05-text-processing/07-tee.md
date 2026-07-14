---
title: tee
description: Read from standard input and write to standard output and files.
---

# `tee`

The `tee` command reads from standard input and writes to standard output and one or more files simultaneously. It is useful for logging the output of a command while still viewing it on the terminal.

## Basic Syntax

```bash
tee [OPTION]... [FILE]...
```

## Common Options

| Option | Description |
|---|---|
| `-a`, `--append` | Append to the given files, do not overwrite. |
| `-i`, `--ignore-interrupts` | Ignore interrupt signals. |

## Real-world Examples

1. **Save command output to a file and display it:**
   ```bash
   ls -l | tee output.txt
   ```

2. **Append to a file instead of overwriting:**
   ```bash
   echo "New log entry" | tee -a logfile.txt
   ```

3. **Write output to multiple files:**
   ```bash
   echo "Test" | tee file1.txt file2.txt file3.txt
   ```

4. **Use with `sudo` to write to a protected file:**
   ```bash
   echo "127.0.0.1 mysite.local" | sudo tee -a /etc/hosts
   ```
