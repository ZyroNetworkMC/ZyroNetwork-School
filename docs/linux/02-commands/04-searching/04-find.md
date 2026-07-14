---
title: "find - Search for Files in a Directory Hierarchy"
description: "Learn how to powerfully search for files and directories based on various criteria using the find command."
---

# find

## Explanation
The `find` command is a powerful tool for searching files and directories within a directory hierarchy based on user-specified criteria like name, size, type, permissions, or timestamps. It can also execute actions (like deleting or moving) on the files it finds.

## Basic Syntax
```bash
find [starting-point] [expression]
```

## Common Flags and Expressions

| Expression | Description |
|---|---|
| `-name PATTERN` | Base of file name matches shell pattern PATTERN. |
| `-iname PATTERN`| Like `-name`, but case-insensitive. |
| `-type c` | File is of type c: `f` (regular file), `d` (directory), `l` (symlink). |
| `-size n` | File uses n units of space (e.g., `+100M` for greater than 100 Megabytes). |
| `-mtime n` | Data was last modified n*24 hours ago. |
| `-exec COMMAND ;`| Execute COMMAND; true if 0 status is returned. `{}` is replaced by the file name. |

## Real-world Examples

1. **Find files by exact name:**
   ```bash
   find /home -name "document.txt"
   ```

2. **Find all directories in the current path:**
   ```bash
   find . -type d
   ```

3. **Find files larger than 50MB and delete them:**
   ```bash
   find /var/log -type f -size +50M -exec rm -f {} +
   ```

4. **Find files modified in the last 7 days:**
   ```bash
   find /etc -mtime -7
   ```
