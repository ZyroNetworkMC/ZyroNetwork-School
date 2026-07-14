---
title: Conditionals in Shell Scripting
description: Control the flow of your script using if-else statements and case structures.
---

# Conditionals in Shell Scripting

Conditionals allow your scripts to make decisions and execute different code blocks based on specific conditions.

## The `if-else` Statement

The `if` statement evaluates a condition. If it is true, it executes a block of code.

### Basic `if`

```bash
if [ condition ]; then
    # commands to run if true
fi
```

### `if-else`

```bash
AGE=18

if [ "$AGE" -ge 18 ]; then
    echo "You are an adult."
else
    echo "You are a minor."
fi
```

### `elif` (Else If)

Used for evaluating multiple conditions.

```bash
SCORE=85

if [ "$SCORE" -ge 90 ]; then
    echo "Grade: A"
elif [ "$SCORE" -ge 80 ]; then
    echo "Grade: B"
else
    echo "Grade: C or lower"
fi
```

## File Test Operators

Conditionals are frequently used to check file states.

- `-e file` : Exists
- `-f file` : Is a regular file
- `-d dir`  : Is a directory
- `-r file` : Is readable
- `-w file` : Is writable
- `-x file` : Is executable

```bash
FILE="/etc/passwd"

if [ -f "$FILE" ]; then
    echo "$FILE exists and is a regular file."
fi
```

## The `case` Statement

The `case` statement is an elegant alternative to deeply nested `if-elif` blocks, especially when checking a variable against a set of fixed values.

```bash
read -p "Enter start, stop, or restart: " ACTION

case "$ACTION" in
    start)
        echo "Starting service..."
        ;;
    stop)
        echo "Stopping service..."
        ;;
    restart)
        echo "Restarting service..."
        ;;
    *)
        echo "Invalid action. Use start, stop, or restart."
        ;;
esac
```

## Best Practices

- Terminate `if` statements with `fi`.
- Terminate each `case` block with `;;` and the entire case statement with `esac`.
- Use the `*` wildcard in a `case` statement as a default/catch-all handler.
- Remember to quote variables inside `[ ]` brackets.
