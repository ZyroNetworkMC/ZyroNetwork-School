---
title: "locate - Find Files by Name Quickly"
description: "Learn how to instantly find files by name using the locate command."
---

# locate

## Explanation
The `locate` command reads one or more databases prepared by `updatedb` and writes file names matching at least one of the patterns to standard output. Because it queries a pre-built database rather than searching the live filesystem like `find`, it is incredibly fast. However, it will not find files created after the last database update.

## Basic Syntax
```bash
locate [OPTION]... PATTERN...
```

## Common Flags and Options

| Flag | Description |
|---|---|
| `-i`, `--ignore-case` | Ignore case distinctions when matching patterns. |
| `-c`, `--count` | Instead of printing matched filenames, just print the number of matches. |
| `-l`, `--limit`, `-n LIMIT`| Limit output (or counting) to LIMIT matches. |
| `-e`, `--existing` | Print only entries that refer to files existing at the time `locate` is run. |

## Real-world Examples

1. **Find a file by part of its name:**
   ```bash
   locate sshd_config
   ```

2. **Find a file case-insensitively:**
   ```bash
   locate -i readme.txt
   ```

3. **Count the number of MP3 files on the system:**
   ```bash
   locate -c "*.mp3"
   ```
