---
title: Logging in Shell Scripts
description: Best practices for implementing effective logging mechanisms in your Bash scripts.
---

# Logging in Shell Scripts

When scripts run automatically (e.g., via cron) or perform critical tasks, proper logging is essential for troubleshooting when things go wrong.

## Basic Output Redirection

The simplest form of logging is redirecting the output of your script to a file.

```bash
# Append stdout and stderr to a log file
./myscript.sh >> /var/log/myscript.log 2>&1
```

## Creating a Custom Logging Function

For robust scripts, it's highly recommended to write a custom logging function. This allows you to add timestamps and log levels (e.g., INFO, WARNING, ERROR).

```bash
#!/bin/bash

LOG_FILE="/var/log/my_app.log"

log() {
    local LEVEL="$1"
    local MESSAGE="$2"
    local TIMESTAMP=$(date +"%Y-%m-%d %H:%M:%S")
    
    # Print to terminal
    echo "[$TIMESTAMP] [$LEVEL] $MESSAGE"
    
    # Append to log file
    echo "[$TIMESTAMP] [$LEVEL] $MESSAGE" >> "$LOG_FILE"
}

log "INFO" "Script execution started."
log "WARNING" "Disk space is running low."
log "ERROR" "Failed to connect to the database."
```

## Using `logger` (Syslog)

Linux systems have a built-in logging daemon called `syslog` (or `journald`). You can send messages to the system logs (usually `/var/log/syslog` or `/var/log/messages`) using the `logger` command.

```bash
#!/bin/bash

logger "MyScript: Starting backup process..."

if cp /important/data /backup/data; then
    logger "MyScript: Backup succeeded."
else
    logger -p user.err "MyScript: Backup failed!"
fi
```
Using `logger` integrates your script with the standard system logging infrastructure, making it easier for system administrators to monitor.

## Advanced: Redirecting All Output Internally

Instead of relying on the user to redirect output when executing the script, you can use the `exec` command to redirect all output from within the script itself.

```bash
#!/bin/bash

LOG_FILE="/tmp/script_auto.log"

# Redirect stdout to file
exec 1>>"$LOG_FILE"
# Redirect stderr to stdout
exec 2>&1

echo "This will be logged directly to the file without needing > or >> on the command line."
```

## Best Practices

- Always include timestamps in your logs.
- Use distinct log levels (INFO, WARN, ERROR) to make parsing logs easier.
- Ensure your script has write permissions to the target log file.
- Consider log rotation (e.g., `logrotate`) if your script runs frequently and generates large logs.
