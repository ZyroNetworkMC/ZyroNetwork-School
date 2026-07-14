---
title: "egrep - Print Lines Matching an Extended Pattern"
description: "Learn how to use extended regular expressions with the egrep command."
---

# egrep

## Explanation
The `egrep` command is equivalent to `grep -E`. It treats the pattern as an extended regular expression (ERE). This allows for more advanced pattern matching using metacharacters like `+`, `?`, `|`, and `()` without needing to escape them with backslashes as you would in standard `grep`. Note that `egrep` is deprecated in favor of `grep -E` on modern systems, but it's still widely used.

## Basic Syntax
```bash
egrep [OPTION]... PATTERNS [FILE]...
```

## Common Flags and Options
(Shares most options with standard `grep`)

| Flag | Description |
|---|---|
| `-i`, `--ignore-case` | Ignore case distinctions. |
| `-v`, `--invert-match`| Select non-matching lines. |
| `-r`, `--recursive` | Read all files under each directory recursively. |

## Real-world Examples

1. **Search for multiple alternative words (OR operator):**
   ```bash
   egrep "error|warning|critical" /var/log/syslog
   ```

2. **Match patterns using extended metacharacters:**
   ```bash
   egrep "go+d" file.txt  # Matches "god", "good", "goood", etc.
   ```
