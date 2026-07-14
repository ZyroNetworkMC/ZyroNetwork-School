---
title: Automated Backups
description: Strategies for securing game server data against catastrophic loss.
---

# Automated Backups

Hardware fails. Software has bugs. Disgruntled staff members might execute destructive commands. Without reliable, automated backups, a single incident can destroy years of work and your entire player community.

Backups are not optional; they are a mandatory part of system administration.

## The 3-2-1 Backup Rule

The gold standard for backup strategy is the 3-2-1 rule:
*   Keep at least **3** copies of your data (1 primary, 2 backups).
*   Store the backups on **2** different storage media/devices.
*   Keep at least **1** backup offsite (in a different geographic location).

## What Needs Backing Up?

1.  **Databases (MySQL/MariaDB)**: Contains all economy, ranks, and player data. This is the most critical data.
2.  **Game Server Worlds**: The actual block data.
3.  **Configurations and Plugins**: The setup files for your servers.
4.  **Panel Data**: The Pterodactyl database and configuration if you use it.

## Database Backups (mysqldump)

Never backup a database by simply copying the `/var/lib/mysql` files while the server is running; this will result in corrupted backups. Use the `mysqldump` utility to create logical SQL backups.

Example script to dump a database:
```bash
#!/bin/bash
BACKUP_DIR="/backup/mysql"
DATE=$(date +%Y-%m-%d_%H-%M)
DB_NAME="economy_db"
USER="root"
PASSWORD="your_password"

mkdir -p $BACKUP_DIR
mysqldump -u$USER -p$PASSWORD $DB_NAME | gzip > $BACKUP_DIR/${DB_NAME}_${DATE}.sql.gz

# Delete backups older than 7 days
find $BACKUP_DIR -type f -name "*.sql.gz" -mtime +7 -delete
```
This script should be placed in `/etc/cron.daily/` or scheduled via a systemd timer to run automatically.

## File Backups (rsync and tar)

For game worlds and plugins, you can use `tar` to compress the directories.

However, worlds can be very large. A more efficient approach for offsite backups is using `rsync` or `rclone`. These tools only transfer the files that have *changed* since the last backup, saving immense amounts of bandwidth.

## Offsite Storage Solutions

Storing backups on the same physical server is useless if the server's hard drive crashes or the data center burns down.

*   **Object Storage (S3)**: Services like Amazon S3, DigitalOcean Spaces, or Cloudflare R2 are incredibly cheap for cold storage. You can use tools like `s3cmd` or `rclone` to push your `.tar.gz` and `.sql.gz` archives to these services automatically.
*   **BorgBackup / Restic**: These are modern, highly efficient deduplicating backup programs. They encrypt your data locally and push it to remote servers via SSH, only uploading changed blocks (not just changed files). They are excellent for game server worlds.

## Pterodactyl Backups

If using Pterodactyl, the panel has built-in backup functionality for individual servers. You can configure Pterodactyl to use an S3-compatible storage backend. When a user clicks "Create Backup", the Wings daemon compresses the server data and uploads it directly to your offsite S3 bucket.

## Best Practices

*   **Test your backups**: A backup is useless if you cannot restore it. Regularly test your restoration process on a staging server.
*   **Automate everything**: If backups require human intervention, they will eventually be forgotten. Use cron jobs.
*   **Stateful considerations**: Backing up a Minecraft world while players are building in it can lead to chunk corruption if chunks are saved to disk midway through the backup read process. Ideally, trigger a `save-all` and then a `save-off` command via RCON before copying world files, then re-enable saving.
