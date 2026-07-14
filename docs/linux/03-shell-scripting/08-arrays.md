---
title: Arrays in Shell Scripting
description: A guide on how to store and manipulate lists of data using indexed and associative arrays in Bash.
---

# Arrays in Shell Scripting

An array is a variable that can hold multiple values under a single name. Bash supports both one-dimensional indexed arrays (using numbers as keys) and associative arrays (using strings as keys).

## Indexed Arrays

Indexed arrays use integers as their indices, starting at 0.

### Declaring an Array

```bash
# Declare and assign
FRUITS=("Apple" "Banana" "Cherry")

# Assign individually
FRUITS[3]="Date"
```

### Accessing Elements

To access an array element, you must use curly braces around the variable name and index inside your code.

```bash
echo "First fruit: ${FRUITS[0]}"
```

### Accessing All Elements

To print all elements, use the `@` or `*` symbol as the index.

```bash
echo "All fruits: ${FRUITS[@]}"
```

### Array Length

Prefix the array variable with a `#` to get the number of elements.

```bash
echo "Number of fruits: ${#FRUITS[@]}"
```

### Iterating Over an Array

```bash
for FRUIT in "${FRUITS[@]}"; do
    echo "I like $FRUIT"
done
```

## Associative Arrays

Introduced in Bash 4.0, associative arrays use strings (keys) instead of numbers as indices. You must declare them explicitly using the `declare -A` command.

### Declaring and Using Associative Arrays

```bash
# Declare an associative array
declare -A USER_INFO

# Assign values
USER_INFO["name"]="John Doe"
USER_INFO["age"]="30"
USER_INFO["city"]="New York"

# Access values
echo "User Name: ${USER_INFO["name"]}"
```

### Iterating Over Keys and Values

```bash
# Iterate over keys (use !)
for KEY in "${!USER_INFO[@]}"; do
    echo "Key: $KEY, Value: ${USER_INFO[$KEY]}"
done
```

## Best Practices

- Remember that Bash indexing starts at 0.
- Always quote your array expansions `"${ARRAY[@]}"` to prevent word splitting if elements contain spaces.
- Note that macOS ships with an older version of Bash by default (v3.2), which does not support associative arrays.
