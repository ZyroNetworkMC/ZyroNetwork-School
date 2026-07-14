---
title: Functions in Shell Scripting
description: Learn how to structure your scripts using functions to make them modular and reusable.
---

# Functions in Shell Scripting

Functions allow you to break down your script into smaller, logical, and reusable blocks of code. They help in keeping your scripts organized and easy to maintain.

## Defining a Function

You can define a function using the `function` keyword or simply by adding parentheses `()` after the function name. 

```bash
# Method 1
function greet() {
    echo "Hello, this is a function!"
}

# Method 2
say_hello() {
    echo "Hello again from another function!"
}
```

*Note: The code inside the function isn't executed until the function is explicitly called.*

## Calling a Function

To execute a function, just type its name.

```bash
#!/bin/bash

# Define the function
print_date() {
    echo "Current date and time:"
    date
}

# Call the function
print_date
```

## Passing Arguments to Functions

Functions can accept arguments similarly to how scripts accept command-line arguments. Inside a function, `$1` represents the first argument, `$2` the second, and so on. `$#` gives the total number of arguments.

```bash
add_numbers() {
    local SUM=$(($1 + $2))
    echo "The sum is $SUM"
}

add_numbers 10 20
```

## Local Variables

By default, all variables in a script are global. If you define a variable inside a function without the `local` keyword, it can overwrite variables outside the function. Always use `local` for variables that should only exist within the function's scope.

```bash
NAME="Alice"

change_name() {
    local NAME="Bob"
    echo "Inside function, name is $NAME"
}

echo "Before function, name is $NAME"
change_name
echo "After function, name is $NAME"
```

## Return Values

Bash functions do not return values in the same way as functions in C or Python. A function can only return a numeric exit status (0-255) using the `return` keyword. To return text or data, use `echo` and capture it with command substitution.

```bash
get_system_user() {
    echo "$USER"
}

CURRENT_USER=$(get_system_user)
echo "The user is $CURRENT_USER"
```

## Best Practices

- Define all functions at the beginning of the script before the main logic.
- Always use the `local` keyword for temporary variables inside functions.
- Keep functions short and focused on a single task.
