---
title: "tail - Output the Last Part of Files"
description: "Learn how to view the end of files and monitor logs in real-time using the tail command."
---

# tail

## Explanation
The `tail` command prints the last part (usually the last 10 lines) of files to standard output. It is frequently used to view the most recent entries in log files. It also has a powerful feature (`-f`) to monitor a file for changes and display new lines as they are added.

## Basic Syntax
```bash
tail [OPTION]... [FILE]...
```

## Common Flags and Options

| Flag | Description |
|---|---|
| `-n`, `--lines=[+]NUM` | Print the last NUM lines instead of the last 10. (If NUM is prefixed with '+', start printing with line NUM.) |
| `-f`, `--follow[=name\|descriptor]` | Output appended data as the file grows. |
| `-c`, `--bytes=[+]NUM` | Print the last NUM bytes. |

## Real-world Examples

1. **View the last 10 lines of a log file:**
   ```bash
   tail /var/log/syslog
   ```

2. **View the last 50 lines:**
   ```bash
   tail -n 50 /var/log/nginx/access.log
   ```

3. **Follow a log file in real-time (press Ctrl+C to stop):**
   ```bash
   tail -f /var/log/apache2/error.log
   ```
