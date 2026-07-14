---
title: tmux
description: Terminal multiplexer.
---

# `tmux` command

## Detailed Explanation
`tmux` is a modern terminal multiplexer, similar to `screen`. It allows multiple terminal sessions to be accessed simultaneously in a single window. It is useful for running more than one command-line program at the same time and keeping sessions alive in the background after disconnecting from an SSH session. `tmux` is generally considered more feature-rich and easier to configure than `screen`.

## Basic Syntax
```bash
tmux [command]
```

## Common Commands (CLI)
| Command | Description |
|---|---|
| `new -s <name>` | Create a new session with a specific name. |
| `ls` | List all running tmux sessions. |
| `attach -t <name>`| Attach to an existing session by name. |
| `kill-session -t <name>`| Kill a specific session. |

## Common Interactive Commands (Keyboard Shortcuts)
Inside a tmux session, the default prefix is `Ctrl+B` (`C-b`):
*   `C-b d`: Detach from the session.
*   `C-b c`: Create a new window.
*   `C-b n` / `C-b p`: Switch to the next/previous window.
*   `C-b %`: Split the current pane vertically.
*   `C-b "`: Split the current pane horizontally.
*   `C-b <arrow_key>`: Navigate between panes.

## Real-world Examples

**Start a new tmux session named "workspace":**
```bash
tmux new -s workspace
```

**List active tmux sessions:**
```bash
tmux ls
```

**Reattach to the "workspace" session:**
```bash
tmux attach -t workspace
```
