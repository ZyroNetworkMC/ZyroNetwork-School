---
title: Building a Backup System
description: Set up automated and secure backup systems using Rsync and cron.
---

# Building a Backup System

Data loss can be catastrophic. Setting up an automated backup system is a critical task. This project uses `rsync` and `cron` to create reliable backups.

## Concepts
- **Rsync:** A fast and versatile command-line utility that synchronizes files and directories between two locations.
- **Cron:** A time-based job scheduler in Unix-like operating systems.
- **Incremental Backups:** Only backs up the data that has changed since the last backup.

## Step-by-step Guide

### 1. Basic Rsync Command
To copy files from a source to a destination:
```bash
rsync -av /path/to/source /path/to/destination
```
Flags:
- `-a`: Archive mode (preserves permissions, times, symbolic links).
- `-v`: Verbose output.

### 2. Remote Backups via SSH
```bash
rsync -avz -e ssh /path/to/source user@remote_host:/path/to/destination
```

### 3. Automating with Cron
Open the crontab editor:
```bash
crontab -e
```

Add a job to run the backup every day at 2 AM:
```bash
0 2 * * * rsync -a /var/www/ /backup/www/
```

## Best Practices
- **Test Restores:** A backup is only good if it can be restored. Test frequently.
- **Offsite Backups:** Keep copies of data in different physical or geographical locations (3-2-1 rule).
- **Monitoring:** Set up email alerts for cron job failures.
