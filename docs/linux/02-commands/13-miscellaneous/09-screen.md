---
title: screen
description: Screen manager with VT100/ANSI terminal emulation.
---

# `screen` command

## Detailed Explanation
`screen` is a full-screen window manager that multiplexes a physical terminal between several processes, typically interactive shells. It allows you to start a process, detach from it, and then reattach to it later, even from a different physical terminal or SSH connection. This is invaluable for running long tasks remotely.

## Basic Syntax
```bash
screen [ -options ] [ cmd [ args ] ]
```

## Common Flags/Options
| Option | Description |
|---|---|
| `-S <name>` | Create a new session with a descriptive name. |
| `-ls`, `-list` | List currently running screen sessions. |
| `-r [name]` | Reattach to a detached screen session. |
| `-d [name]` | Detach a running screen session. |

## Common Interactive Commands (Keyboard Shortcuts)
Inside a screen session, commands start with `Ctrl+A` (`C-a`):
*   `C-a d`: Detach from the session (leaves it running in the background).
*   `C-a c`: Create a new window within the session.
*   `C-a n` / `C-a p`: Switch to the next/previous window.
*   `C-a "`: List all windows to select one.

## Real-world Examples

**Start a new screen session named "compile":**
```bash
screen -S compile
```

**List active screen sessions:**
```bash
screen -ls
```

**Reattach to a session named "compile":**
```bash
screen -r compile
```
