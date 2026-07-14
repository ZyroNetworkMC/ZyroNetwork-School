---
title: history
description: Display the command history list.
---

# `history` command

## Detailed Explanation
The `history` command is a shell built-in that displays a list of previously executed commands in the current session and previous sessions (read from the history file, typically `~/.bash_history` for bash). It is invaluable for recalling long commands or seeing what actions were taken previously.

## Basic Syntax
```bash
history [n]
history -c
history -d offset
```

## Common Flags/Options
| Option | Description |
|---|---|
| `n` | Display the last `n` commands. |
| `-c` | Clear the history list. |
| `-d <offset>`| Delete the history entry at position `<offset>`. |
| `-w` | Write the current history to the history file. |

## Real-world Examples

**Show the entire command history:**
```bash
history
```

**Show the last 10 commands:**
```bash
history 10
```

**Execute a command from history by its number (e.g., command #150):**
```bash
!150
```

**Search history for a specific command (e.g., finding the last `grep` command):**
```bash
history | grep grep
```
*(Alternatively, use `Ctrl+R` for an interactive reverse search).*

**Clear the current session's history:**
```bash
history -c
```
