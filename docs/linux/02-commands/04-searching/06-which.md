---
title: "which - Locate a Command"
description: "Learn how to find the path of an executable command using the which command."
---

# which

## Explanation
The `which` command returns the pathnames of the files (or links) which would be executed in the current environment had its arguments been given as commands. It does this by searching the directories listed in the `PATH` environment variable.

## Basic Syntax
```bash
which [options] [--] programname [...]
```

## Common Flags and Options

| Flag | Description |
|---|---|
| `-a` | Print all matching pathnames of each argument. |

## Real-world Examples

1. **Find the location of the `ls` executable:**
   ```bash
   which ls
   ```
   *(Output might be `/bin/ls`)*

2. **Find the location of Python:**
   ```bash
   which python3
   ```

3. **Find all executables named 'gcc' in your PATH:**
   ```bash
   which -a gcc
   ```
