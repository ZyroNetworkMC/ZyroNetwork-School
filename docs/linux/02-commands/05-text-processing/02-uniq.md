---
title: uniq
description: Report or omit repeated lines.
---

# `uniq`

The `uniq` command filters out adjacent, repeated lines in a file. It is often used in combination with the `sort` command since `uniq` only detects duplicates that are next to each other.

## Basic Syntax

```bash
uniq [OPTION]... [INPUT [OUTPUT]]
```

## Common Options

| Option | Description |
|---|---|
| `-c`, `--count` | Prefix lines by the number of occurrences. |
| `-d`, `--repeated` | Only print duplicate lines, one for each group. |
| `-u`, `--unique` | Only print unique lines (lines that do not have duplicates). |
| `-i`, `--ignore-case` | Ignore differences in case when comparing. |
| `-f`, `--skip-fields=N` | Avoid comparing the first `N` fields. |

## Real-world Examples

1. **Remove adjacent duplicate lines:**
   ```bash
   uniq items.txt
   ```

2. **Count occurrences of each line:**
   ```bash
   sort items.txt | uniq -c
   ```

3. **Show only duplicate lines:**
   ```bash
   sort items.txt | uniq -d
   ```

4. **Show only unique lines:**
   ```bash
   sort items.txt | uniq -u
   ```
