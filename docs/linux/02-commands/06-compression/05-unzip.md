---
title: unzip
description: List, test and extract compressed files in a ZIP archive.
---

# `unzip`

The `unzip` command extracts files from a `.zip` archive. It can also be used to list the contents of an archive or test it for errors without actually extracting it.

## Basic Syntax

```bash
unzip [OPTIONS] zipfile [file...] [-x xfile...] [-d exdir]
```

## Common Options

| Option | Description |
|---|---|
| `-l` | List archive files (short format). |
| `-d exdir` | Extract files into the specified directory `exdir`. |
| `-t` | Test archive files. |
| `-o` | Overwrite existing files without prompting. |
| `-n` | Never overwrite existing files. |

## Real-world Examples

1. **Extract all files from a zip archive:**
   ```bash
   unzip archive.zip
   ```

2. **Extract files to a specific directory:**
   ```bash
   unzip archive.zip -d /path/to/destination/
   ```

3. **List the contents of a zip archive:**
   ```bash
   unzip -l archive.zip
   ```

4. **Test an archive to ensure it is not corrupted:**
   ```bash
   unzip -t archive.zip
   ```
