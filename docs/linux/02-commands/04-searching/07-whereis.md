---
title: "whereis - Locate the Binary, Source, and Manual Page Files"
description: "Learn how to find binary, source, and manual files for a command using whereis."
---

# whereis

## Explanation
The `whereis` command locates the binary, source, and manual page files for a command. It is more specialized than `locate` or `find` as it specifically searches in standard Linux directories for these three types of files associated with a given program name.

## Basic Syntax
```bash
whereis [options] [-BMS directory... -f] name...
```

## Common Flags and Options

| Flag | Description |
|---|---|
| `-b` | Search for binaries only. |
| `-m` | Search for manuals only. |
| `-s` | Search for sources only. |

## Real-world Examples

1. **Find the binary, source, and man pages for `bash`:**
   ```bash
   whereis bash
   ```
   *(Output might look like: `bash: /bin/bash /etc/bash.bashrc /usr/share/man/man1/bash.1.gz`)*

2. **Find only the binary for `python`:**
   ```bash
   whereis -b python
   ```

3. **Find only the manual page for `ls`:**
   ```bash
   whereis -m ls
   ```
