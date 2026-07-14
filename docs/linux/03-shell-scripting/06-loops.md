---
title: Loops in Shell Scripting
description: Automate repetitive tasks using for, while, and until loops in Bash.
---

# Loops in Shell Scripting

Loops execute a block of code repeatedly until a certain condition is met. Bash supports three main types of loops: `for`, `while`, and `until`.

## The `for` Loop

The `for` loop iterates over a list of items (like words in a string, files in a directory, or numbers in a sequence).

### Iterating over a list

```bash
for COLOR in red green blue; do
    echo "The color is $COLOR"
done
```

### Iterating over files

```bash
for FILE in *.txt; do
    echo "Found text file: $FILE"
done
```

### C-style `for` loop

```bash
for (( i=1; i<=5; i++ )); do
    echo "Iteration number $i"
done
```

## The `while` Loop

The `while` loop executes as long as the condition remains true.

```bash
COUNTER=1

while [ "$COUNTER" -le 5 ]; do
    echo "Counter is $COUNTER"
    ((COUNTER++))
done
```

### Reading a file line by line

A very common use case for `while` loops is processing text files.

```bash
while read -r LINE; do
    echo "Processing line: $LINE"
done < input.txt
```

## The `until` Loop

The `until` loop is the opposite of the `while` loop. It executes *until* the condition becomes true (i.e., it runs while the condition is false).

```bash
COUNT=1

until [ "$COUNT" -gt 5 ]; do
    echo "Count is $COUNT"
    ((COUNT++))
done
```

## Loop Control: `break` and `continue`

- **`break`**: Exits the loop entirely.
- **`continue`**: Skips the rest of the current iteration and moves to the next one.

```bash
for i in {1..10}; do
    if [ "$i" -eq 5 ]; then
        continue # Skip 5
    fi
    if [ "$i" -eq 8 ]; then
        break # Stop at 8
    fi
    echo "Number $i"
done
```

## Best Practices

- Always update the loop control variable in `while` or `until` loops to prevent infinite loops.
- Use `while read -r` to read files, as it prevents backslash escaping issues.
- Be careful with `for var in $(command)` as it breaks on spaces; prefer a `while read` loop for parsing lines.
