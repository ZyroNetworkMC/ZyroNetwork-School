---
title: "touch - Change File Timestamps"
description: "Learn how to create empty files and modify file timestamps using the touch command."
---

# touch

## Explanation
The `touch` command is primarily used to update the access and modification times of a file to the current time. If the file does not exist, `touch` creates an empty file, which is its most common use case for beginners.

## Basic Syntax
```bash
touch [OPTION]... FILE...
```

## Common Flags and Options

| Flag | Description |
|---|---|
| `-a` | Change only the access time. |
| `-m` | Change only the modification time. |
| `-c`, `--no-create` | Do not create any files if they don't exist. |
| `-d`, `--date=STRING` | Parse string and use it instead of current time. |
| `-r`, `--reference=FILE` | Use this file's times instead of current time. |

## Real-world Examples

1. **Create an empty file:**
   ```bash
   touch newfile.txt
   ```

2. **Create multiple empty files:**
   ```bash
   touch file1.txt file2.txt file3.txt
   ```

3. **Update timestamps of an existing file:**
   ```bash
   touch existingfile.txt
   ```
