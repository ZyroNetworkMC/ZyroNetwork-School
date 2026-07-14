---
title: "rmdir - Remove Empty Directories"
description: "Learn how to remove empty directories in Linux using the rmdir command."
---

# rmdir (Remove Directory)

## Explanation
The `rmdir` command is used to remove empty directories. If a directory contains any files or other directories, `rmdir` will fail and display an error. To remove non-empty directories, use `rm -r`.

## Basic Syntax
```bash
rmdir [OPTION]... DIRECTORY...
```

## Common Flags and Options

| Flag | Description |
|---|---|
| `-p`, `--parents` | Remove DIRECTORY and its ancestors (if they become empty). |
| `-v`, `--verbose` | Output a diagnostic for every directory processed. |

## Real-world Examples

1. **Remove an empty directory:**
   ```bash
   rmdir empty_folder
   ```

2. **Remove multiple empty directories:**
   ```bash
   rmdir dir1 dir2 dir3
   ```

3. **Remove a directory structure if all are empty:**
   ```bash
   rmdir -p parent/child/grandchild
   ```
