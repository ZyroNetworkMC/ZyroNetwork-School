---
title: "fgrep - Print Lines Matching Fixed Strings"
description: "Learn how to search for exact string matches quickly using the fgrep command."
---

# fgrep

## Explanation
The `fgrep` command is equivalent to `grep -F`. It treats the pattern as a list of fixed strings, separated by newlines, rather than regular expressions. This makes it faster than standard `grep` when you need to search for exact strings that might contain characters that would normally be interpreted as regex metacharacters (like `*`, `[`, `.`). Note that `fgrep` is deprecated in favor of `grep -F`.

## Basic Syntax
```bash
fgrep [OPTION]... PATTERNS [FILE]...
```

## Common Flags and Options
(Shares most options with standard `grep`)

| Flag | Description |
|---|---|
| `-i`, `--ignore-case` | Ignore case distinctions. |
| `-v`, `--invert-match`| Select non-matching lines. |

## Real-world Examples

1. **Search for an exact string containing special characters:**
   ```bash
   fgrep "if [ \$a == 1 ]; then" script.sh
   ```
   *(With standard grep, the brackets and dollar sign would be treated as regex characters unless escaped.)*

2. **Search for multiple fixed strings (if pattern contains newlines):**
   ```bash
   fgrep -f words_to_find.txt large_log_file.txt
   ```
