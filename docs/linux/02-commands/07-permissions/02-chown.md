---
title: chown
description: Change file owner and group.
---

# `chown`

The `chown` (change owner) command is used to change the user owner and/or the group owner of a given file, directory, or symbolic link. Typically, only the root user can change the ownership of a file to another user.

## Basic Syntax

```bash
chown [OPTION]... [OWNER][:[GROUP]] FILE...
```

## Common Options

| Option | Description |
|---|---|
| `-R`, `--recursive` | Operate on files and directories recursively. |
| `-v`, `--verbose` | Output a diagnostic for every file processed. |
| `-c`, `--changes` | Like verbose but report only when a change is made. |
| `--reference=RFILE` | Use RFILE's owner and group rather than specifying them. |

## Real-world Examples

1. **Change the owner of a file:**
   ```bash
   sudo chown john document.txt
   ```

2. **Change both the owner and group of a file:**
   ```bash
   sudo chown john:developers project.zip
   ```

3. **Change only the group of a file:**
   ```bash
   sudo chown :developers shared_folder
   ```
   *(Similar to `chgrp`)*

4. **Change ownership recursively for a directory:**
   ```bash
   sudo chown -R www-data:www-data /var/www/html/
   ```
