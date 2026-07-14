---
title: sed
description: Stream editor for filtering and transforming text.
---

# `sed`

The `sed` (stream editor) command is used to perform basic text transformations on an input stream (a file or input from a pipeline). It is most commonly used for finding and replacing text using regular expressions.

## Basic Syntax

```bash
sed [OPTION]... {script-only-if-no-other-script} [input-file]...
```

## Common Options

| Option | Description |
|---|---|
| `-e script` | Add the script to the commands to be executed. |
| `-i[SUFFIX]` | Edit files in place (makes backup if `SUFFIX` supplied). |
| `-n`, `--quiet`, `--silent` | Suppress automatic printing of pattern space. |
| `-E`, `-r` | Use extended regular expressions in the script. |

## Real-world Examples

1. **Basic find and replace (first occurrence per line):**
   ```bash
   sed 's/apple/orange/' fruits.txt
   ```

2. **Global find and replace (all occurrences):**
   ```bash
   sed 's/apple/orange/g' fruits.txt
   ```

3. **In-place find and replace (modifies the file directly):**
   ```bash
   sed -i 's/foo/bar/g' config.txt
   ```

4. **Delete lines matching a pattern:**
   ```bash
   sed '/delete_me/d' file.txt
   ```
