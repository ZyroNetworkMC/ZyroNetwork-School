---
title: tar
description: An archiving utility.
---

# `tar`

The `tar` (tape archive) command is used to combine multiple files and directories into a single archive file, often called a tarball. It can also integrate with compression tools like `gzip` and `bzip2` to compress the archive.

## Basic Syntax

```bash
tar [OPTION...] [FILE]...
```

## Common Options

| Option | Description |
|---|---|
| `-c`, `--create` | Create a new archive. |
| `-x`, `--extract` | Extract files from an archive. |
| `-t`, `--list` | List the contents of an archive. |
| `-v`, `--verbose` | Verbosely list files processed. |
| `-f`, `--file=ARCHIVE` | Use archive file or device `ARCHIVE`. |
| `-z`, `--gzip` | Filter the archive through `gzip`. |
| `-j`, `--bzip2` | Filter the archive through `bzip2`. |
| `-J`, `--xz` | Filter the archive through `xz`. |

## Real-world Examples

1. **Create an uncompressed archive of a directory:**
   ```bash
   tar -cvf backup.tar /path/to/directory
   ```

2. **Create a gzip-compressed archive:**
   ```bash
   tar -czvf backup.tar.gz /path/to/directory
   ```

3. **Extract a gzip-compressed archive:**
   ```bash
   tar -xzvf archive.tar.gz
   ```

4. **List contents of an archive without extracting:**
   ```bash
   tar -tzvf archive.tar.gz
   ```
