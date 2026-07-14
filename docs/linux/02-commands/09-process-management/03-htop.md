---
title: htop
description: Learn how to use the htop command, an interactive and visually appealing process viewer.
---

# `htop`

`htop` is an interactive, text-based process viewer for Linux. It is frequently preferred over `top` because it offers a much more user-friendly, colorful interface, allows vertical and horizontal scrolling to see all processes and full command lines, and supports mouse interactions in modern terminal emulators.

*Note: `htop` is often not installed by default on many minimal Linux distributions. You may need to install it via your package manager (e.g., `apt install htop` or `yum install htop`).*

## Basic Syntax

```bash
htop [OPTIONS]
```

## Common Flags/Options

| Option | Description |
|---|---|
| `-d DECISECONDS` | Delay between updates, in tenths of seconds. |
| `-u USERNAME` | Show only processes owned by a specific user. |
| `-p PID,PID...` | Show only the given PIDs. |
| `-C` | Disable color output. |

## Interactive Commands (While `htop` is running)

The bottom of the `htop` screen displays the function keys for common actions:

| Key | Action |
|---|---|
| `F1` / `h` | Help menu. |
| `F2` / `S` | Setup menu (configure meters, display options, and colors). |
| `F3` / `/` | Search for a process by name. |
| `F4` / `\` | Filter processes by name. |
| `F5` / `t` | Toggle tree view (shows parent/child relationships). |
| `F6` / `<` `>` | Select the sort column (CPU, Memory, User, etc.). |
| `F7` / `]` | Decrease the priority (nice value) of the selected process. |
| `F8` / `[` | Increase the priority (nice value) of the selected process. |
| `F9` / `k` | Send a signal (usually SIGTERM or SIGKILL) to the selected process. |
| `F10` / `q` | Quit `htop`. |
| `Space` | Tag a process (allows you to apply actions to multiple processes at once). |

## Real-world Examples

### 1. Launching `htop`
Simply running the command gives you the full interactive dashboard.

```bash
htop
```

### 2. Searching and Filtering
When you have hundreds of processes, finding one can be hard.
- Press `F4`, type "nginx", and press Enter. Now you will *only* see nginx processes.
- Press `F5` to see the hierarchy of those nginx master and worker processes.

### 3. Killing a misbehaving process easily
1. Open `htop`.
2. Use the arrow keys (or click with your mouse) to highlight the frozen process.
3. Press `F9`.
4. A menu of signals will appear on the left. Press Enter to send the default `SIGTERM` (15), or select `SIGKILL` (9) if it refuses to close.
