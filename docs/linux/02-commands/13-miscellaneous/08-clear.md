---
title: clear
description: Clear the terminal screen.
---

# `clear` command

## Detailed Explanation
The `clear` command simply clears your terminal's screen if this is possible. It looks in the environment for the terminal type and then in the `terminfo` database to figure out how to clear the screen. It is equivalent to the `Ctrl+L` keyboard shortcut in many shells.

## Basic Syntax
```bash
clear
```

## Common Flags/Options
Usually, `clear` is used without any flags.

| Option | Description |
|---|---|
| `-x` | Do not attempt to clear the scrollback buffer. |

## Real-world Examples

**Clear the terminal screen:**
```bash
clear
```

**Clear the screen but keep the scrollback buffer intact:**
```bash
clear -x
```
