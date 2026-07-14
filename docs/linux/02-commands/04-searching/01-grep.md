---
title: "grep - Print Lines Matching a Pattern"
description: "Learn how to search for text patterns within files in Linux using the grep command."
---

# grep

## Explanation
The `grep` command searches for patterns in each file. Patterns can be simple strings or complex regular expressions. It prints each line that matches a pattern. `grep` is an essential tool for parsing logs, finding specific code, or filtering output from other commands.

## Basic Syntax
```bash
grep [OPTION]... PATTERNS [FILE]...
```

## Common Flags and Options

| Flag | Description |
|---|---|
| `-i`, `--ignore-case` | Ignore case distinctions in patterns and input data. |
| `-v`, `--invert-match`| Select non-matching lines. |
| `-r`, `-R`, `--recursive`| Read all files under each directory, recursively. |
| `-n`, `--line-number` | Prefix each line of output with the 1-based line number. |
| `-l`, `--files-with-matches`| Print only names of FILEs containing matches. |
| `-c`, `--count` | Print only a count of selected lines per FILE. |

## Real-world Examples

1. **Search for a string in a file:**
   ```bash
   grep "error" /var/log/syslog
   ```

2. **Search case-insensitively for a pattern:**
   ```bash
   grep -i "warning" mylog.txt
   ```

3. **Search for a pattern recursively in a directory:**
   ```bash
   grep -r "TODO" src/
   ```
