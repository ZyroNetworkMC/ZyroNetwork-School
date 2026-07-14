---
title: chmod
description: Change file mode bits (permissions).
---

# `chmod`

The `chmod` (change mode) command changes the access permissions of file system objects (files and directories). Permissions can be specified using symbolic mode (letters) or numeric/octal mode (numbers).

## Basic Syntax

```bash
chmod [OPTION]... MODE[,MODE]... FILE...
chmod [OPTION]... OCTAL-MODE FILE...
```

## Common Options

| Option | Description |
|---|---|
| `-R`, `--recursive` | Change files and directories recursively. |
| `-v`, `--verbose` | Output a diagnostic for every file processed. |
| `-c`, `--changes` | Like verbose but report only when a change is made. |

## Permission Modes

**Symbolic Mode:**
- Classes: `u` (user/owner), `g` (group), `o` (others), `a` (all)
- Operators: `+` (add), `-` (remove), `=` (set exact)
- Permissions: `r` (read), `w` (write), `x` (execute)

**Numeric Mode:**
- `4` (read)
- `2` (write)
- `1` (execute)
- `0` (no permission)
*(Add these values for combinations: 7 = rwx, 6 = rw-, 5 = r-x)*

## Real-world Examples

1. **Make a script executable for the owner:**
   ```bash
   chmod u+x script.sh
   ```

2. **Give read and write permissions to everyone:**
   ```bash
   chmod a+rw file.txt
   ```

3. **Set permissions to `rwxr-xr-x` using numeric mode:**
   ```bash
   chmod 755 script.sh
   ```

4. **Change permissions of a directory recursively:**
   ```bash
   chmod -R 644 /var/www/html/
   ```
