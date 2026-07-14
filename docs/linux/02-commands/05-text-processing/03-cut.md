---
title: cut
description: Remove sections from each line of files.
---

# `cut`

The `cut` command extracts sections from each line of a file or standard input. It is commonly used to extract columns from a delimited text file like a CSV or `/etc/passwd`.

## Basic Syntax

```bash
cut OPTION... [FILE]...
```

## Common Options

| Option | Description |
|---|---|
| `-d`, `--delimiter=DELIM` | Use `DELIM` instead of TAB for field delimiter. |
| `-f`, `--fields=LIST` | Select only these fields; also print any line that contains no delimiter character, unless the `-s` option is specified. |
| `-c`, `--characters=LIST` | Select only these characters. |
| `-b`, `--bytes=LIST` | Select only these bytes. |
| `--complement` | Complement the set of selected bytes, characters or fields (select everything EXCEPT the specified parts). |

## Real-world Examples

1. **Extract the first field from a CSV file:**
   ```bash
   cut -d ',' -f 1 data.csv
   ```

2. **Extract the username (field 1) from `/etc/passwd`:**
   ```bash
   cut -d ':' -f 1 /etc/passwd
   ```

3. **Extract characters 1 through 5 of each line:**
   ```bash
   cut -c 1-5 file.txt
   ```

4. **Extract multiple fields (1st and 3rd):**
   ```bash
   cut -d ',' -f 1,3 data.csv
   ```
