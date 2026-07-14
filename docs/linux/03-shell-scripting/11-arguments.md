---
title: Command-Line Arguments
description: How to pass arguments to your scripts and parse them using shift and getopts.
---

# Command-Line Arguments

To make scripts dynamic, you can pass data to them when executing from the terminal. 

## Positional Parameters

Arguments passed to a script are stored in positional parameters:
- `$0` : The script name itself.
- `$1`, `$2`, `$3`, ... : The first, second, third arguments, and so on.
- `$#` : The total number of arguments.
- `$@` : All arguments as separate words.
- `$*` : All arguments as a single word.

```bash
#!/bin/bash

echo "Script name: $0"
echo "Total arguments: $#"
echo "First argument: $1"
echo "All arguments: $@"
```
*Run this script as: `./script.sh arg1 arg2`*

## The `shift` Command

The `shift` command shifts all positional parameters to the left by one. `$2` becomes `$1`, `$3` becomes `$2`, and so on. `$1` is discarded. This is useful for processing arguments in a loop.

```bash
#!/bin/bash

echo "Processing arguments:"
while [ "$#" -gt 0 ]; do
    echo "Current argument: $1"
    shift
done
```

## Parsing Flags with `getopts`

For more complex scripts, you usually want to support flags (e.g., `-f filename` or `-v`). `getopts` is the standard Bash built-in for parsing short options.

```bash
#!/bin/bash

# Default values
VERBOSE=false
FILENAME=""

# A colon after a letter means it requires an argument
while getopts "vf:" OPTION; do
    case "$OPTION" in
        v)
            VERBOSE=true
            ;;
        f)
            FILENAME="$OPTARG"
            ;;
        ?)
            echo "Usage: $(basename $0) [-v] [-f filename]"
            exit 1
            ;;
    esac
done

echo "Verbose mode: $VERBOSE"
if [ -n "$FILENAME" ]; then
    echo "File specified: $FILENAME"
fi
```
*Run as: `./script.sh -v -f data.txt`*

## Best Practices

- Always validate arguments. If an argument is required but missing, print a usage message and exit with an error.
- Use `getopts` over manual `shift` parsing when you have multiple flags or optional arguments.
- Remember to quote `"$@"` when iterating to preserve arguments that contain spaces.
