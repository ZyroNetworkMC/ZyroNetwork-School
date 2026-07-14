---
title: gunzip
description: Compress or expand files.
---

# `gunzip`

The `gunzip` command is used to decompress files created by `gzip`, `zip`, `compress`, or `pack`. It is functionally equivalent to `gzip -d`.

## Basic Syntax

```bash
gunzip [OPTION]... [FILE]...
```

## Common Options

| Option | Description |
|---|---|
| `-k`, `--keep` | Keep (don't delete) input files during decompression. |
| `-r`, `--recursive` | Operate recursively on directories. |
| `-c`, `--stdout` | Write output on standard output; keep original files unchanged. |
| `-v`, `--verbose` | Verbose output. |

## Real-world Examples

1. **Decompress a `.gz` file:**
   ```bash
   gunzip archive.txt.gz
   ```
   *(This replaces `archive.txt.gz` with `archive.txt`)*

2. **Decompress and keep the original compressed file:**
   ```bash
   gunzip -k archive.txt.gz
   ```

3. **View the contents of a compressed file without decompressing:**
   ```bash
   gunzip -c logfile.gz | less
   ```
   *(Alternatively, use `zcat logfile.gz`)*
