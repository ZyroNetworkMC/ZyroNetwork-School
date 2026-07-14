---
title: "stat - Display File or File System Status"
description: "Learn how to view detailed file and filesystem statistics using the stat command."
---

# stat (Status)

## Explanation
The `stat` command displays detailed information about a file or file system. It provides much more information than `ls -l`, including access, modify, and change timestamps, file size, blocks allocated, inode number, and permissions.

## Basic Syntax
```bash
stat [OPTION]... FILE...
```

## Common Flags and Options

| Flag | Description |
|---|---|
| `-L`, `--dereference` | Follow links (display info for target, not the link itself). |
| `-f`, `--file-system` | Display file system status instead of file status. |
| `-c`, `--format=FORMAT`| Use the specified FORMAT instead of the default. |
| `--printf=FORMAT` | Like `--format`, but interpret backslash escapes. |

## Real-world Examples

1. **View standard file statistics:**
   ```bash
   stat myfile.txt
   ```

2. **View filesystem information instead of file info:**
   ```bash
   stat -f /
   ```

3. **Output only the file permissions in octal format:**
   ```bash
   stat -c "%a" myfile.txt
   ```
