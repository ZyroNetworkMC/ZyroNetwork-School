---
title: Shell Scripting Cheat Sheet
description: Syntax and snippets for quick Bash script authoring.
---

# Shell Scripting Cheat Sheet

Quick reference for writing reliable Bash scripts.

## Variables and Parameters
```bash
# Variable assignment (NO spaces around =)
NAME="World"
echo "Hello $NAME"

# Command substitution
TODAY=$(date)
```

## Conditionals (If/Else)
```bash
if [ -z "$VAR" ]; then
    echo "Variable is empty"
elif [ "$VAR" == "test" ]; then
    echo "Variable is test"
else
    echo "Something else"
fi
```

### File Test Operators
| Operator | True if... |
| :--- | :--- |
| `-f file` | File exists and is a regular file. |
| `-d dir` | Directory exists. |
| `-s file` | File exists and is not empty. |
| `-x file` | File is executable. |

## Loops
**For Loop:**
```bash
for item in apple banana cherry; do
    echo "I like $item"
done
```

**While Loop:**
```bash
count=1
while [ $count -le 5 ]; do
    echo "Count: $count"
    ((count++))
done
```

## Functions
```bash
my_function() [
    echo "First argument: $1"
    return 0
]
# Call it
my_function "Hello"
```
*(Note: brackets used instead of literal braces for documentation compatibility)*
