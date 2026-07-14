---
title: column
description: Columnate lists.
---

# `column`

The `column` command is a utility that formats its input into multiple columns. It's particularly useful for creating well-aligned, readable tables out of text files that use delimited structures, like CSV files or `/etc/passwd`.

## Basic Syntax

```bash
column [options] [file...]
```

## Common Options

| Option | Description |
|---|---|
| `-t`, `--table` | Determine the number of columns the input contains and create a table. |
| `-s`, `--separator=SEP` | Specify the possible input item delimiters (default is whitespace). |
| `-o`, `--output-separator=SEP` | Specify the columns delimiter for table output (default is two spaces). |

## Real-world Examples

1. **Format a comma-separated file into a neat table:**
   ```bash
   cat data.csv | column -s ',' -t
   ```

2. **Format `/etc/passwd` to make it readable:**
   ```bash
   column -s ':' -t /etc/passwd
   ```

3. **Format mount output into a table:**
   ```bash
   mount | column -t
   ```
