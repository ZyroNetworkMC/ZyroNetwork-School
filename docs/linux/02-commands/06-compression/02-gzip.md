---
title: gzip
description: Compress or expand files.
---

# `gzip`

The `gzip` command is used to compress files, replacing the original file with a compressed version ending in `.gz`. It is one of the most common compression formats in Linux.

## Basic Syntax

```bash
gzip [OPTION]... [FILE]...
```

## Common Options

| Option | Description |
|---|---|
| `-d`, `--decompress` | Decompress the file (equivalent to `gunzip`). |
| `-k`, `--keep` | Keep (don't delete) input files. |
| `-r`, `--recursive` | Operate recursively on directories. |
| `-v`, `--verbose` | Print name and percentage reduction for each file. |
| `-1` to `-9` | Regulate the speed of compression (`-1` is fastest, `-9` is best compression). |

## Real-world Examples

1. **Compress a file:**
   ```bash
   gzip file.txt
   ```
   *(This replaces `file.txt` with `file.txt.gz`)*

2. **Compress a file and keep the original:**
   ```bash
   gzip -k file.txt
   ```

3. **Compress with maximum compression ratio:**
   ```bash
   gzip -9 large_file.bin
   ```

4. **Compress all files in a directory recursively:**
   ```bash
   gzip -r /path/to/directory
   ```
