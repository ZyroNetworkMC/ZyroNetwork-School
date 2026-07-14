---
title: Linux Commands Interview Questions
description: Common interview questions focused on Linux command-line utilities.
---

# Linux Commands Interview Questions

Command-line proficiency is arguably the most critical skill for any Linux professional. These questions test your knowledge of common utilities.

## Core Questions

### 1. How do you find a file by name?
The `find` command is the most robust tool for this.
```bash
find / -name "filename.txt"
```
To find files modified in the last 7 days:
```bash
find /path -mtime -7
```

### 2. How do you check memory and disk usage?
- **Memory:** `free -m` or `free -h`
- **Disk Usage:** `df -h` (filesystem level) and `du -sh /path` (directory level).

### 3. What is the difference between `grep`, `awk`, and `sed`?
- **grep:** Used for searching text patterns within files.
- **awk:** A powerful text processing language used for column-based data extraction and reporting.
- **sed:** A stream editor used for modifying text on the fly (e.g., find and replace).

## Practical Examples

**Using grep and awk together:**
Find all processes owned by a specific user and print their PIDs:
```bash
ps aux | grep username | awk '[print $2]'
```
*(Note: brackets used instead of literal braces for documentation compatibility)*

## Best Practices
- Always mention flags like `-h` (human-readable) as it shows practical experience.
- When explaining tools like `sed` or `awk`, provide a simple example of how you've used them in a script.
