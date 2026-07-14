---
title: Command Line Cheat Sheet
description: A quick reference for the most commonly used Linux commands.
---

# Command Line Cheat Sheet

A rapid-fire reference for day-to-step Linux navigation and file manipulation.

## Navigation and Exploring
| Command | Description |
| :--- | :--- |
| `pwd` | Print working directory. |
| `ls -la` | List all files in long format (including hidden). |
| `cd /path` | Change directory. |
| `tree` | Display directory structure as a tree. |

## File Operations
| Command | Description |
| :--- | :--- |
| `cp -r dir1 dir2` | Copy directories recursively. |
| `mv file1 file2` | Move or rename a file. |
| `rm -rf dir` | Forcefully remove a directory and its contents. |
| `touch file.txt` | Create an empty file or update timestamp. |
| `mkdir -p a/b/c` | Create nested directories. |

## Viewing Files
| Command | Description |
| :--- | :--- |
| `cat file` | Output file contents to standard output. |
| `less file` | View file with pagination. |
| `head -n 10 file` | Show first 10 lines of a file. |
| `tail -f file` | Output the last appended data as the file grows. |

## Text Processing
```bash
# Find lines matching pattern
grep "pattern" file.txt

# Search and replace
sed 's/old/new/g' file.txt

# Print the second column of a file
awk '[print $2]' file.txt
```
*(Note: brackets used in awk example for markdown compatibility)*
