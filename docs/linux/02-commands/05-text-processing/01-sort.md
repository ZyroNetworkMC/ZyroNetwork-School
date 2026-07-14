---
title: sort
description: Sort lines of text files.
---

# `sort`

The `sort` command is used to sort the lines of text files. It can sort alphabetically, numerically, in reverse order, and can sort by specific columns or fields.

## Basic Syntax

```bash
sort [OPTION]... [FILE]...
```

## Common Options

| Option | Description |
|---|---|
| `-r`, `--reverse` | Sort in reverse (descending) order. |
| `-n`, `--numeric-sort` | Sort numerically instead of alphabetically. |
| `-k`, `--key=KEYDEF` | Sort via a key; `KEYDEF` gives location and type. Sort by a specific column. |
| `-t`, `--field-separator=SEP` | Use `SEP` instead of non-blank to blank transition as field separator. |
| `-u`, `--unique` | Output only the first of an equal run (remove duplicates). |
| `-f`, `--ignore-case` | Fold lower case to upper case characters (case-insensitive sort). |

## Real-world Examples

1. **Sort a file alphabetically:**
   ```bash
   sort names.txt
   ```

2. **Sort numerically:**
   Useful when sorting a list of numbers or file sizes.
   ```bash
   sort -n numbers.txt
   ```

3. **Sort by the second column (comma-separated):**
   ```bash
   sort -t ',' -k 2 data.csv
   ```

4. **Sort and remove duplicates:**
   ```bash
   sort -u list.txt
   ```
