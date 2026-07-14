---
title: Operators in Shell Scripting
description: An overview of arithmetic, relational, boolean, and string operators in Bash.
---

# Operators in Shell Scripting

Operators in shell scripting allow you to perform mathematical calculations, compare strings, and evaluate conditions.

## Arithmetic Operators

Bash can perform basic integer arithmetic. However, it does not support floating-point math natively.

Common operators: `+` (addition), `-` (subtraction), `*` (multiplication), `/` (division), `%` (modulus).

You can use the `expr` command, or the more modern double parentheses `(( ))`.

```bash
A=10
B=20

# Using double parentheses (Recommended)
SUM=$((A + B))
echo "Sum is $SUM"

# Using expr
DIFF=$(expr $B - $A)
echo "Difference is $DIFF"
```

## Relational (Numeric) Operators

These operators are used to compare two numeric values. They are usually used inside test brackets `[ ]`.

- `-eq` : Equal to
- `-ne` : Not equal to
- `-gt` : Greater than
- `-lt` : Less than
- `-ge` : Greater than or equal to
- `-le` : Less than or equal to

```bash
NUM=15
if [ "$NUM" -gt 10 ]; then
    echo "Number is greater than 10"
fi
```

## String Operators

Used to compare string values.

- `=` or `==` : Equal to
- `!=` : Not equal to
- `-z` : String is null (zero length)
- `-n` : String is not null (greater than zero length)

```bash
STR1="hello"
STR2="world"

if [ "$STR1" != "$STR2" ]; then
    echo "Strings are different"
fi
```

## Boolean (Logical) Operators

Used to combine multiple conditions.

- `!` : Logical NOT
- `-o` or `||` : Logical OR
- `-a` or `&&` : Logical AND

```bash
# Using standard brackets
if [ "$A" -gt 5 -a "$B" -lt 30 ]; then
    echo "Condition met"
fi

# Using double brackets (Recommended for modern Bash)
if [[ "$A" -gt 5 && "$B" -lt 30 ]]; then
    echo "Condition met"
fi
```

## Best Practices

- Prefer `(( ))` for arithmetic operations over `expr`.
- Prefer `[[ ]]` for logical operations and string comparisons, as it is safer and supports pattern matching.
- Always quote your variables in single `[ ]` tests to avoid errors if a variable is empty.
