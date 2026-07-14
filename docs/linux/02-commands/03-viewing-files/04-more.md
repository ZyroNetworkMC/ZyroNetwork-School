---
title: "more - File Paging Filter for CRT Viewing"
description: "Learn how to view text files one page at a time in Linux using the more command."
---

# more

## Explanation
The `more` command is a basic pager that displays text one screen at a time. While similar to `less`, it is more primitive. The primary limitation of `more` is that you can generally only navigate forward through a file, not backward (though some modern versions offer limited backward movement). `less` is generally preferred over `more`.

## Basic Syntax
```bash
more [OPTION]... FILE...
```

## Common Flags and Options

| Flag | Description |
|---|---|
| `-d` | Prompt with "Press space to continue, 'q' to quit". |
| `-c` | Do not scroll. Instead, clear the whole screen and then display the text. |
| `+NUM` | Start at line number NUM. |

## Real-world Examples

1. **View a file one page at a time:**
   ```bash
   more /etc/passwd
   ```

2. **Start viewing from line 100:**
   ```bash
   more +100 large_file.txt
   ```
