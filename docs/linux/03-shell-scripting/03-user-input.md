---
title: User Input in Shell Scripts
description: Learn how to read and process input from the user in your Bash scripts.
---

# User Input in Shell Scripts

Interactive scripts often require input from the user. Bash provides the `read` command for this purpose.

## The `read` Command

The basic syntax of `read` takes input from standard input and assigns it to a variable.

```bash
#!/bin/bash

echo "What is your name?"
read USER_NAME
echo "Hello, $USER_NAME!"
```

### Using Prompts

Instead of using `echo` before `read`, you can use the `-p` flag to display a prompt directly.

```bash
read -p "Enter your age: " USER_AGE
echo "You are $USER_AGE years old."
```

### Hiding Input (Silent Mode)

For sensitive information like passwords, use the `-s` flag to prevent the input from being echoed to the terminal.

```bash
read -sp "Enter your password: " USER_PASS
echo
echo "Password securely received."
```
*(The empty `echo` is used to move to a new line after the silent input).*

### Limiting Input Length

Use the `-n` flag to specify the maximum number of characters to read. The script continues automatically once the limit is reached.

```bash
read -n 1 -p "Press Y or N to continue: " USER_CHOICE
echo
echo "You chose $USER_CHOICE"
```

### Setting a Timeout

To prevent a script from waiting indefinitely, you can set a timeout using the `-t` flag (in seconds).

```bash
if read -t 5 -p "Enter your choice within 5 seconds: " CHOICE; then
    echo "You entered: $CHOICE"
else
    echo -e "\nTimeout reached! Moving on."
fi
```

## Best Practices

- Always validate user input to ensure it meets expectations (e.g., checking if a number is actually a number).
- Provide clear and concise prompts.
- Use default values if the user presses enter without typing anything.

```bash
read -p "Enter port [default 8080]: " PORT
PORT=${PORT:-8080}
echo "Using port $PORT"
```
