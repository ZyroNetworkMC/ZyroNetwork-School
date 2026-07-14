---
title: Database Backups
description: Strategies and tools for backing up databases on Linux.
---

# Database Backups

Regular and reliable backups are the most critical aspect of database administration. Hardware fails, software has bugs, and human errors occur. Backups ensure that you can recover your data when disaster strikes.

## Types of Backups

### 1. Logical Backups

Logical backups extract the data and schema from the database and save them as plain text or binary files, usually containing SQL statements (e.g., `CREATE TABLE`, `INSERT`).

*   **Pros:** Highly portable across different versions or architectures; easy to restore individual tables; readable format.
*   **Cons:** Slower to backup and restore, especially for large databases; higher CPU utilization during the process.

**Tools:**
*   **MySQL/MariaDB:** `mysqldump`
*   **PostgreSQL:** `pg_dump`, `pg_dumpall`
*   **MongoDB:** `mongodump`

### 2. Physical Backups

Physical backups involve copying the raw database files directly from the disk.

*   **Pros:** Extremely fast backup and restore (often just copying files); lower impact on the database engine.
*   **Cons:** Less portable (must match architecture and often specific database version); harder to restore single tables.

**Tools/Methods:**
*   **Cold Backup:** Stopping the database service and copying the data directory (e.g., `/var/lib/mysql`). Safest but requires downtime.
*   **LVM Snapshots:** Using Logical Volume Manager to take an atomic snapshot of the filesystem while the database is running (often combined with briefly pausing writes).
*   **Database-Specific Tools:**
    *   **MySQL/MariaDB:** Percona XtraBackup (hot backups).
    *   **PostgreSQL:** `pg_basebackup`, WAL archiving (Point-in-Time Recovery).

## Best Practices for Database Backups

1.  **Follow the 3-2-1 Rule:**
    *   Keep **3** copies of your data (1 primary, 2 backups).
    *   Store them on **2** different types of media.
    *   Keep **1** copy off-site (e.g., in cloud storage like AWS S3).
2.  **Automate Backups:** Use cron jobs or scheduling tools to ensure backups happen regularly without human intervention.
3.  **Test Restores Regularly:** A backup is useless if you cannot restore from it. Periodically test the restoration process in a staging environment to verify data integrity and measure recovery time.
4.  **Encrypt Backups:** Database backups contain sensitive information. Always encrypt backup files before storing them, especially off-site.
5.  **Monitor Backup Jobs:** Implement alerting to notify administrators if a scheduled backup job fails.
6.  **Implement Point-in-Time Recovery (PITR):** For critical databases, use techniques like binary logging (MySQL) or WAL archiving (PostgreSQL) in conjunction with base backups to allow restoration to any specific second before a disaster occurred.

## Example: Automating a MySQL Logical Backup

A simple script (`backup.sh`) that can be executed via cron:

```bash
#!/bin/bash
BACKUP_DIR="/backups/mysql"
DATE=$(date +"%Y%m%d_%H%M%S")
DB_NAME="myapp_db"
DB_USER="backup_user"
DB_PASS="secret" # Consider using .my.cnf instead of hardcoding

mkdir -p $BACKUP_DIR

# Dump, compress, and save
mysqldump -u $DB_USER -p$DB_PASS $DB_NAME | gzip > $BACKUP_DIR/db_backup_$DATE.sql.gz

# Delete backups older than 7 days
find $BACKUP_DIR -name "db_backup_*.sql.gz" -mtime +7 -delete
```
