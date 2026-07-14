---
title: File Operations in Shell Scripts
description: Master reading, writing, and manipulating files directly from your Bash scripts.
---

# File Operations in Shell Scripts

Working with files is a fundamental part of shell scripting. You frequently need to read configuration files, write logs, or process data.

## Redirection

Output redirection allows you to write command output to a file instead of the terminal.

- `>` : Overwrites the file with new content.
- `>>` : Appends content to the end of the file.

```bash
# Overwrite
echo "Starting log..." > app.log

# Append
echo "User logged in at $(date)" >> app.log
```

## Reading Files Line by Line

The most robust way to read a file line by line in bash is using a `while` loop combined with the `read` command.

```bash
FILE="servers.txt"

# Ensure the file exists before reading
if [ -f "$FILE" ]; then
    while IFS= read -r LINE; do
        echo "Server: $LINE"
    done < "$FILE"
else
    echo "File not found: $FILE"
fi
```
*(The `IFS=` prevents trimming leading/trailing whitespace, and `-r` prevents backslashes from acting as escape characters).*

## File Descriptors and Redirection

Every process has three default file descriptors:
- `0` : Standard Input (stdin)
- `1` : Standard Output (stdout)
- `2` : Standard Error (stderr)

You can redirect errors to a separate file or discard them.

```bash
# Redirect errors to error.log
ls /nonexistent_directory 2> error.log

# Redirect both stdout and stderr to the same file
ls / 2>&1 > output.log
# Or the modern shortcut:
ls / &> output.log
```

## Finding and Processing Files

You can combine `find` with loops to process multiple files matching a pattern.

```bash
# Find all .log files and compress them
find /var/log -type f -name "*.log" | while read -r LOG_FILE; do
    echo "Compressing $LOG_FILE"
    gzip "$LOG_FILE"
done
```

## Best Practices

- Always check if a file exists and is readable/writable before attempting operations on it.
- Use `>>` carefully so you don't accidentally bloat log files indefinitely.
- Use `IFS= read -r` for safely reading line by line without corrupting data.
