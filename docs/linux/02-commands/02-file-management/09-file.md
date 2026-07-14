---
title: "file - Determine File Type"
description: "Learn how to determine the type of a file in Linux using the file command."
---

# file

## Explanation
The `file` command is used to determine the file type. Linux does not rely heavily on file extensions to determine what a file is; instead, `file` examines the contents of a file (looking for "magic numbers") to identify its type (e.g., ASCII text, JPEG image, ELF executable).

## Basic Syntax
```bash
file [OPTION]... FILE...
```

## Common Flags and Options

| Flag | Description |
|---|---|
| `-b`, `--brief` | Do not prepend filenames to output lines. |
| `-i`, `--mime` | Output mime type strings instead of human-readable descriptions. |
| `-L`, `--dereference` | Causes symlinks to be followed. |
| `-z`, `--uncompress` | Try to look inside compressed files. |

## Real-world Examples

1. **Determine the type of a file:**
   ```bash
   file image.jpg
   ```

2. **Check a file without extension:**
   ```bash
   file unknown_file
   ```

3. **Get the MIME type of a file:**
   ```bash
   file -i document.pdf
   ```
