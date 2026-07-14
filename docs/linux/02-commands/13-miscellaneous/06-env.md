---
title: env
description: Run a program in a modified environment.
---

# `env` command

## Detailed Explanation
The `env` command is used to either display the current environment variables or to run a specified command in a modified environment without permanently changing the environment variables of the current shell.

## Basic Syntax
```bash
env [OPTION]... [-] [NAME=VALUE]... [COMMAND [ARG]...]
```

## Common Flags/Options
| Option | Description |
|---|---|
| `-i`, `--ignore-environment`| Start with an empty environment. |
| `-u <name>`, `--unset=<name>`| Remove variable `<name>` from the environment. |

## Real-world Examples

**Display all current environment variables:**
```bash
env
```

**Run a script with a specific environment variable set temporarily:**
```bash
env MY_VAR="testing" ./my_script.sh
```

**Run a command in a completely clean/empty environment:**
```bash
env -i bash --noprofile --norc
```
