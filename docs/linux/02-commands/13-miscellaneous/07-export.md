---
title: export
description: Set the export attribute for variables.
---

# `export` command

## Detailed Explanation
`export` is a shell built-in command used to mark variables to be passed to child processes. By default, variables created in a shell are local to that shell. Using `export` ensures that if you start another program (like a script or a text editor) from that shell, the program will inherit that variable.

## Basic Syntax
```bash
export [name[=value]] ...
```

## Common Usage
| Usage | Description |
|---|---|
| `export` | Display a list of all exported variables in the current shell. |
| `export VAR=value` | Assign a value to a variable and export it in one step. |
| `export -p` | List all exported variables in a format that can be reused as input. |

## Real-world Examples

**Set a variable and export it:**
```bash
export PATH=$PATH:/home/user/custom/bin
```

**Export an already existing local variable:**
```bash
MY_VAR="hello"
export MY_VAR
```

**View all exported variables:**
```bash
export -p
```
*(Note: Variables exported in the terminal are lost when the session ends. To make them permanent, add the `export` command to `~/.bashrc` or `~/.profile`.)*
