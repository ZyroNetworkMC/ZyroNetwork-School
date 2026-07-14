---
title: "strings - Find Printable Strings in a File"
description: "Learn how to extract human-readable text from binary files using the strings command."
---

# strings

## Explanation
The `strings` command looks for printable strings in a file. It is primarily used to extract human-readable text from binary files (like compiled programs or core dumps), but it can be run on any file. A string is defined as a sequence of 4 or more printable characters ending with a newline or null character.

## Basic Syntax
```bash
strings [OPTION]... [FILE]...
```

## Common Flags and Options

| Flag | Description |
|---|---|
| `-a`, `--all` | Scan the entire file, not just the initialized data sections of object files. |
| `-n`, `--bytes=MIN-LEN`| Print sequences of characters that are at least MIN-LEN characters long, instead of the default 4. |
| `-t`, `--radix=RADIX` | Print the offset within the file before each string (`o` for octal, `d` for decimal, `x` for hex). |

## Real-world Examples

1. **Extract strings from a binary executable:**
   ```bash
   strings /bin/ls
   ```

2. **Find strings of at least 10 characters long:**
   ```bash
   strings -n 10 /bin/bash
   ```

3. **Find strings and show their decimal offset in the file:**
   ```bash
   strings -t d unknown_binary
   ```
