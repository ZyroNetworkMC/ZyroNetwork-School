---
title: awk
description: Pattern scanning and text processing language.
---

# `awk`

`awk` is a powerful programming language designed for text processing and typically used as a data extraction and reporting tool. It processes text line by line and can perform complex logic, arithmetic, and string manipulation.

## Basic Syntax

```bash
awk [options] 'program' [file...]
```

## Common Options

| Option | Description |
|---|---|
| `-F fs` | Use `fs` for the input field separator (the value of the `FS` predefined variable). |
| `-v var=val` | Assign the value `val` to the variable `var` before execution of the program begins. |
| `-f progfile` | Read the AWK program source from the file `progfile`. |

## Real-world Examples

1. **Print specific columns (e.g., 1st and 3rd):**
   ```bash
   awk '{print $1, $3}' file.txt
   ```

2. **Use a custom field separator (e.g., comma):**
   ```bash
   awk -F ',' '{print $2}' data.csv
   ```

3. **Print lines matching a pattern:**
   ```bash
   awk '/error/ {print $0}' /var/log/syslog
   ```

4. **Sum the values in the first column:**
   ```bash
   awk '{sum += $1} END {print sum}' numbers.txt
   ```
