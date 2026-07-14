---
title: "mkdir - Make Directories"
description: "Learn how to create directories in Linux using the mkdir command."
---

# mkdir (Make Directories)

## Explanation
The `mkdir` command is used to create one or more new directories in Linux. It's an essential file management command used to organize files into folders.

## Basic Syntax
```bash
mkdir [OPTION]... DIRECTORY...
```

## Common Flags and Options

| Flag | Description |
|---|---|
| `-p`, `--parents` | Create parent directories as needed. No error if existing. |
| `-v`, `--verbose` | Print a message for each created directory. |
| `-m`, `--mode=MODE` | Set file mode (permissions), similar to `chmod`. |

## Real-world Examples

1. **Create a single directory:**
   ```bash
   mkdir new_folder
   ```

2. **Create multiple directories:**
   ```bash
   mkdir dir1 dir2 dir3
   ```

3. **Create nested directories:**
   ```bash
   mkdir -p parent/child/grandchild
   ```
