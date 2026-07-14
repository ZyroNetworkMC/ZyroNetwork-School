---
title: whoami
description: Learn how to use the whoami command to print the effective user name.
---

# `whoami`

The `whoami` command is a simple utility used to print the effective user name associated with the current session. It is extremely useful when you are working on a system with multiple users, when you've switched users using `su` or `sudo`, or in shell scripts to determine which user is executing the script.

## Basic Syntax

```bash
whoami [OPTION]
```

## Common Flags/Options

| Option | Description |
|---|---|
| `--help` | Display a help message and exit. |
| `--version` | Output version information and exit. |

*Note: `whoami` typically does not require any flags.*

## Real-world Examples

### 1. Check your current user
Simply run the command without any options to see your effective username.

```bash
whoami
```
**Output:**
```
john_doe
```

### 2. Verify root access
If you have used `sudo su` or logged in as root, you can verify your privileges.

```bash
whoami
```
**Output:**
```
root
```

### 3. Use in shell scripts
You can use `whoami` in shell scripts to ensure a script is run by a specific user (like root).

```bash
#!/bin/bash
if [ "$(whoami)" != "root" ]; then
    echo "This script must be run as root!"
    exit 1
fi
echo "Running administrative tasks..."
```
