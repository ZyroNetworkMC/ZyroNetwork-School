---
title: "head - Output the First Part of Files"
description: "Learn how to view the beginning of files in Linux using the head command."
---

# head

## Explanation
The `head` command prints the first part (usually the first 10 lines) of files to standard output. It's incredibly useful for quickly checking the structure of a file, verifying column headers, or looking at the initial contents without opening the entire file.

## Basic Syntax
```bash
head [OPTION]... [FILE]...
```

## Common Flags and Options

| Flag | Description |
|---|---|
| `-n`, `--lines=[-]NUM` | Print the first NUM lines instead of the first 10. (If NUM is prefixed with '-', print all but the last NUM lines.) |
| `-c`, `--bytes=[-]NUM` | Print the first NUM bytes. |
| `-q`, `--quiet`, `--silent` | Never print headers giving file names. |

## Real-world Examples

1. **View the first 10 lines of a file (default):**
   ```bash
   head file.txt
   ```

2. **View the first 20 lines:**
   ```bash
   head -n 20 file.txt
   ```

3. **View the first 50 bytes:**
   ```bash
   head -c 50 file.txt
   ```
