---
title: xargs
description: Build and execute command lines from standard input.
---

# `xargs`

The `xargs` command reads items from standard input (such as output from another command) and executes a specified command using those items as arguments. It helps bridge commands that produce lists with commands that expect arguments.

## Basic Syntax

```bash
xargs [OPTION]... COMMAND [INITIAL-ARGS]...
```

## Common Options

| Option | Description |
|---|---|
| `-0`, `--null` | Input items are terminated by a null character instead of whitespace (useful with `find -print0`). |
| `-n MAX-ARGS` | Use at most `MAX-ARGS` arguments per command line. |
| `-I REPLACE-STR` | Replace occurrences of `REPLACE-STR` in the initial arguments with names read from standard input. |
| `-p`, `--interactive` | Prompt the user about whether to run each command line. |

## Real-world Examples

1. **Delete all `.tmp` files found by `find`:**
   ```bash
   find . -name "*.tmp" | xargs rm
   ```

2. **Handle filenames with spaces safely:**
   ```bash
   find . -name "*.log" -print0 | xargs -0 rm
   ```

3. **Pass arguments to a specific position using `-I`:**
   ```bash
   cat urls.txt | xargs -I {} wget {}
   ```

4. **Process files in batches of 3:**
   ```bash
   ls | xargs -n 3 echo "Batch:"
   ```
