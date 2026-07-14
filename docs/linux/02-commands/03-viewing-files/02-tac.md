---
title: "tac - Concatenate and Print Files in Reverse"
description: "Learn how to view file contents in reverse order in Linux using the tac command."
---

# tac

## Explanation
The `tac` command is the reverse of `cat`. It reads files and prints them to standard output, but it reverses the order of the lines. The last line of the file is printed first, and the first line is printed last. This is particularly useful for reading log files where the most recent entries are at the bottom.

## Basic Syntax
```bash
tac [OPTION]... [FILE]...
```

## Common Flags and Options

| Flag | Description |
|---|---|
| `-b`, `--before` | Attach the separator before instead of after. |
| `-r`, `--regex` | Interpret the separator as a regular expression. |
| `-s`, `--separator=STRING`| Use STRING as the separator instead of newline. |

## Real-world Examples

1. **View a file in reverse order:**
   ```bash
   tac log.txt
   ```

2. **View recent log entries first (often piped to head):**
   ```bash
   tac /var/log/syslog | head -n 10
   ```
