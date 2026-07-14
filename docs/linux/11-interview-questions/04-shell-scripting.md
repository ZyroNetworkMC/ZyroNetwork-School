---
title: Shell Scripting Interview Questions
description: Frequently asked interview questions on Bash and shell scripting.
---

# Shell Scripting Interview Questions

Automation is key in Linux administration. Shell scripting questions test your ability to automate tasks efficiently.

## Core Questions

### 1. What is a Shebang (`#!`)?
The shebang is the first line of a script that specifies the interpreter to execute the file.
Example: `#!/bin/bash` tells the system to use the Bash shell.

### 2. How do you handle command-line arguments?
Arguments are accessed using positional parameters:
- `$0` - Name of the script
- `$1`, `$2`, etc. - First, second arguments
- `$#` - Number of arguments passed
- `$@` - All arguments as a list

### 3. Explain the difference between `$?` and `$$`.
- `$?` - Returns the exit status of the last executed command (0 usually means success, non-zero means failure).
- `$$` - Returns the Process ID (PID) of the current shell.

## Practical Examples

**Basic Conditional Statement:**
```bash
#!/bin/bash
if [ -f "/etc/passwd" ]; then
    echo "File exists."
else
    echo "File does not exist."
fi
```

**Looping through files:**
```bash
for file in *.txt; do
    echo "Processing $file"
done
```

## Best Practices
- **Error Handling:** Always mention checking `$?` after critical commands or using `set -e` at the top of scripts to exit on error.
- **Quoting:** Stress the importance of double-quoting variables (e.g., `"$VAR"`) to prevent word splitting and globbing issues.
