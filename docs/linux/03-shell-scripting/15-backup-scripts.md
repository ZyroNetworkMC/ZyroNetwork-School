---
title: Real-World Backup Scripts
description: A practical guide to creating robust automated backup scripts using Bash.
---

# Real-World Backup Scripts

One of the most common uses for shell scripts is automating system and data backups. In this guide, we will look at a practical, robust backup script that incorporates variables, error handling, logging, and cron readiness.

## Concept: Creating an Archive

The standard tool for creating backups in Linux is `tar` (Tape Archive). It can combine multiple files into a single archive and compress them.

```bash
tar -czvf backup.tar.gz /directory/to/backup
```
- `-c` : Create
- `-z` : Compress using gzip
- `-v` : Verbose (show files being archived)
- `-f` : File name of the archive

## A Production-Ready Backup Script

Here is an example of a robust backup script. Notice the use of strict mode, logging, and variables.

```bash
#!/bin/bash
# Strict mode
set -euo pipefail

# --- Configuration ---
SOURCE_DIR="/var/www/html"
BACKUP_DIR="/backups/websites"
DATE=$(date +"%Y-%m-%d_%H-%M-%S")
BACKUP_FILE="$BACKUP_DIR/website_backup_$DATE.tar.gz"
LOG_FILE="/var/log/backup_script.log"
RETENTION_DAYS=7

# --- Functions ---
log() {
    echo "[$(date +'%Y-%m-%dT%H:%M:%S%z')] $1" | tee -a "$LOG_FILE"
}

die() {
    log "ERROR: $1"
    exit 1
}

# --- Execution ---
log "Starting backup of $SOURCE_DIR..."

# Ensure backup directory exists
if [ ! -d "$BACKUP_DIR" ]; then
    log "Backup directory does not exist. Creating $BACKUP_DIR..."
    mkdir -p "$BACKUP_DIR" || die "Failed to create backup directory."
fi

# Create the archive
log "Creating archive $BACKUP_FILE..."
# Notice we drop the 'v' flag to prevent polluting the logs
tar -czf "$BACKUP_FILE" "$SOURCE_DIR" || die "Tar archive creation failed."

# Verify the backup file was created
if [ -f "$BACKUP_FILE" ]; then
    FILE_SIZE=$(du -h "$BACKUP_FILE" | awk '{print $1}')
    log "Backup successful. File size: $FILE_SIZE."
else
    die "Backup file not found after creation attempt."
fi

# --- Cleanup Old Backups ---
log "Cleaning up backups older than $RETENTION_DAYS days..."
find "$BACKUP_DIR" -type f -name "website_backup_*.tar.gz" -mtime +$RETENTION_DAYS -exec rm {} \; || log "Warning: Cleanup failed."

log "Backup process finished."
```

## Scheduling the Backup

To automate this, add it to the root user's crontab (`sudo crontab -e`).

```cron
# Run every day at 2:00 AM
0 2 * * * /opt/scripts/backup_website.sh
```

## Best Practices

- Always test your restore process! A backup is useless if you cannot extract the data.
- Use `find` with `-mtime` to automatically delete old backups so you don't run out of disk space.
- Run backup scripts as a user with sufficient permissions to read all source files, but avoid running as `root` if it's not strictly necessary.
