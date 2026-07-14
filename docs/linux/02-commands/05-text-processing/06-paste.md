---
title: paste
description: Merge lines of files.
---

# `paste`

The `paste` command merges lines of multiple files side-by-side, separated by tabs. It is the horizontal equivalent of the `cat` command which appends files vertically.

## Basic Syntax

```bash
paste [OPTION]... [FILE]...
```

## Common Options

| Option | Description |
|---|---|
| `-d`, `--delimiters=LIST` | Reuse characters from `LIST` instead of TABs. |
| `-s`, `--serial` | Paste one file at a time instead of in parallel. |

## Real-world Examples

1. **Merge two files side-by-side:**
   ```bash
   paste names.txt numbers.txt
   ```

2. **Merge files using a comma delimiter:**
   ```bash
   paste -d ',' names.txt numbers.txt
   ```

3. **Merge all lines of a file into a single line:**
   ```bash
   paste -s -d ' ' lines.txt
   ```
