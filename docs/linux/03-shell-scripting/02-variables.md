---
title: Variables in Shell Scripting
description: A comprehensive guide on how to declare, use, and manage variables in bash scripts.
---

# Variables in Shell Scripting

Variables are used to store data, such as numbers, text strings, or command outputs, so they can be referenced and manipulated throughout your script.

## Defining Variables

In Bash, you define a variable without any spaces around the equals sign `=`.

```bash
#!/bin/bash

# Correct variable definition
NAME="John Doe"
AGE=30

# Incorrect (will cause an error)
# NAME = "John Doe"
```

## Accessing Variables

To access the value stored in a variable, prefix the variable name with a dollar sign `$`.

```bash
echo "My name is $NAME and I am $AGE years old."
```

For better safety, especially when concatenating strings, you can use curly braces inside code blocks:

```bash
WORD="script"
echo "I am writing multiple ${WORD}s."
```

*Note: In the markdown text of these docs, we avoid using curly braces outside code blocks, but they are essential inside Bash scripts for variable expansion!*

## Types of Variables

1. **Local Variables:** Created within a script and only available within that script.
2. **Environment Variables:** Available to the shell and any child processes (e.g., `$PATH`, `$USER`, `$HOME`).
3. **Special Variables:** Built-in variables holding specific state data.
   - `$0` - The name of the script.
   - `$1` to `$9` - The first 9 arguments to the script.
   - `$#` - The number of arguments passed to the script.
   - `$?` - The exit status of the last executed command.

## Command Substitution

You can store the output of a command in a variable using command substitution `$()` or backticks.

```bash
CURRENT_DATE=$(date +%Y-%m-%d)
echo "Today is $CURRENT_DATE"
```

## Best Practices

- **UPPERCASE vs lowercase:** Conventionally, environment variables are uppercase (`PATH`), and script-local variables are lowercase (`my_var`).
- **Quoting:** Always quote your variables when using them (e.g., `"$MY_VAR"`) to prevent word splitting and globbing issues.
- **Read-only Variables:** Use the `readonly` command for variables that shouldn't change.

```bash
readonly PI=3.14159
```
