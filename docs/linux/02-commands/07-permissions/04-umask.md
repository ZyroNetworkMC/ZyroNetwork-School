---
title: umask
description: Set file mode creation mask.
---

# `umask`

The `umask` (user file-creation mode mask) command determines the default permissions for newly created files and directories. It subtracts its value from the system defaults (usually `666` for files and `777` for directories).

## Basic Syntax

```bash
umask [-p] [-S] [mode]
```

## Common Options

| Option | Description |
|---|---|
| `-S` | Output the mask in a symbolic format rather than octal. |
| `-p` | Output in a format that may be reused as input. |

## Understanding Umask Calculation

If default file permission is `666` (rw-rw-rw-) and umask is `022`:
- `666 - 022 = 644` (rw-r--r--)

If default directory permission is `777` (rwxrwxrwx) and umask is `022`:
- `777 - 022 = 755` (rwxr-xr-x)

## Real-world Examples

1. **Display the current umask value:**
   ```bash
   umask
   ```

2. **Display the umask in symbolic format:**
   ```bash
   umask -S
   ```

3. **Set umask to 022 (default for most systems):**
   ```bash
   umask 022
   ```

4. **Set a more restrictive umask (e.g., 077, meaning only the owner has access):**
   ```bash
   umask 077
   ```
