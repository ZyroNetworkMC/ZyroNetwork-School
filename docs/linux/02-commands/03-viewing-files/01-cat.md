---
title: "cat - Concatenate and Print Files"
description: "Learn how to view file contents and concatenate files in Linux using the cat command."
---

# cat (Concatenate)

## Explanation
The `cat` command is one of the most frequently used commands in Linux. It reads files sequentially, writing them to standard output. It's commonly used to view the contents of short files, combine multiple files into one, or create new files.

## Basic Syntax
```bash
cat [OPTION]... [FILE]...
```

## Common Flags and Options

| Flag | Description |
|---|---|
| `-n`, `--number` | Number all output lines. |
| `-b`, `--number-nonblank`| Number nonempty output lines, overrides -n. |
| `-E`, `--show-ends` | Display `$` at end of each line. |
| `-T`, `--show-tabs` | Display TAB characters as `^I`. |

## Real-world Examples

1. **View the contents of a file:**
   ```bash
   cat file.txt
   ```

2. **Concatenate two files into a new file:**
   ```bash
   cat file1.txt file2.txt > newfile.txt
   ```

3. **Append the contents of one file to another:**
   ```bash
   cat new_data.txt >> existing_file.txt
   ```
