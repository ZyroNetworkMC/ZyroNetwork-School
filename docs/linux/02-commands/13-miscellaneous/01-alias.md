---
title: alias
description: Define or display aliases.
---

# `alias` command

## Detailed Explanation
The `alias` command in Linux is a shell built-in that allows users to create shortcuts or custom names for longer or frequently used commands. It helps in saving time and reducing typing errors. If run without arguments, it displays all currently defined aliases.

## Basic Syntax
```bash
alias [name=['command']]
```

## Common Usage
| Usage | Description |
|---|---|
| `alias` | Display a list of all currently defined aliases. |
| `alias name='command'` | Create a new alias where `name` executes `command`. |
| `unalias name` | Remove a previously defined alias. |

## Real-world Examples

**Create a shortcut for updating the system (Debian/Ubuntu):**
```bash
alias update='sudo apt update && sudo apt upgrade'
```

**Create a shortcut for a complex `ls` command:**
```bash
alias ll='ls -alF'
```

**List all active aliases:**
```bash
alias
```

**Remove an alias:**
```bash
unalias ll
```
*(Note: To make aliases permanent, they must be added to your shell's configuration file, such as `~/.bashrc` or `~/.zshrc`.)*
