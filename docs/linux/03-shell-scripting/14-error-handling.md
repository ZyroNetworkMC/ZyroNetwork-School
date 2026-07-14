---
title: Error Handling in Scripts
description: Techniques to catch, handle, and prevent errors in your Bash scripts.
---

# Error Handling in Scripts

Robust scripts must anticipate failures, handle unexpected conditions gracefully, and exit safely without causing data corruption.

## Exit Statuses

Every command executed in Linux returns an exit status (or return code) between 0 and 255.
- `0` means success.
- Any non-zero value (1-255) means failure.

You can check the exit status of the immediately preceding command using the special variable `$?`.

```bash
mkdir /root/secured_dir
if [ $? -ne 0 ]; then
    echo "Error: Failed to create directory. Do you have root privileges?"
    exit 1
fi
```

## Defensive Programming with `set`

Bash provides built-in options to make scripts strictly handle errors. You can enable them using the `set` command.

### `set -e` (Exit on Error)

Tells Bash to exit immediately if any command returns a non-zero exit status.

```bash
#!/bin/bash
set -e

echo "Starting deployment..."
cd /var/www/html  # If this fails, the script stops here
git pull          # If this fails, the script stops here
echo "Deployment successful."
```

### `set -u` (Unbound Variables)

Treats unset variables as an error and exits immediately. This prevents catastrophic mistakes due to typos.

```bash
#!/bin/bash
set -u

TARGET_DIR="/tmp/backup"
# Typo in variable name!
rm -rf "$TARGET_DI/files" # Will error out instead of running 'rm -rf /files'
```

### `set -o pipefail`

By default, the exit status of a pipeline (e.g., `cmd1 | cmd2`) is the exit status of the *last* command. If `cmd1` fails but `cmd2` succeeds, the pipeline succeeds. `set -o pipefail` changes this so the pipeline fails if *any* command in it fails.

### The "Strict Mode" Paradigm

It is highly recommended to start all robust Bash scripts with this combination:

```bash
#!/bin/bash
set -euo pipefail
```

## Custom Error Handlers

You can combine conditionals with the `||` (OR) operator to execute an error-handling function if a command fails.

```bash
die() {
    echo "CRITICAL ERROR: $1" >&2
    exit 1
}

cp /important/data /backup/data || die "Failed to copy data."
```

## Best Practices

- Always use `set -euo pipefail` for scripts that modify system state or data.
- Check `$?` immediately after critical commands if you need custom fallback logic.
- Output error messages to `stderr` using `>&2`.
