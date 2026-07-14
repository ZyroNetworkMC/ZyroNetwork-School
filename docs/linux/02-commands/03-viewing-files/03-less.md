---
title: "less - Opposite of More"
description: "Learn how to view large files efficiently in Linux using the less command."
---

# less

## Explanation
The `less` command is a terminal pager program used to view the contents of a text file one screen at a time. It is faster than `cat` for large files because it does not need to read the entire file before starting. It also allows both forward and backward navigation.

## Basic Syntax
```bash
less [OPTION]... FILE...
```

## Common Flags and Options

| Flag | Description |
|---|---|
| `-N`, `--LINE-NUMBERS` | Display a line number at the beginning of each line. |
| `-S`, `--chop-long-lines`| Truncate long lines rather than wrapping them. |
| `-I`, `--IGNORE-CASE` | Ignore case in searches. |

## Keyboard Shortcuts in less

- `Space` or `Page Down`: Scroll forward one screen.
- `b` or `Page Up`: Scroll backward one screen.
- `Enter` or `Down Arrow`: Scroll forward one line.
- `Up Arrow`: Scroll backward one line.
- `/pattern`: Search forward for a pattern.
- `?pattern`: Search backward for a pattern.
- `n`: Repeat previous search.
- `q`: Quit.

## Real-world Examples

1. **View a large file:**
   ```bash
   less /var/log/auth.log
   ```

2. **View a file with line numbers:**
   ```bash
   less -N myfile.txt
   ```

3. **Pipe output to less for easy viewing:**
   ```bash
   dmesg | less
   ```
