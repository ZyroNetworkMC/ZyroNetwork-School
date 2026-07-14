---
title: "updatedb - Update a Database for locate"
description: "Learn how to update the database used by the locate command using updatedb."
---

# updatedb

## Explanation
The `updatedb` command creates or updates a database used by `locate`. If the database already exists, its data is reused to avoid rereading directories that have not changed. This command is typically run daily by a cron job, but you might need to run it manually (usually with `sudo`) if you just created a file and want to find it using `locate` immediately.

## Basic Syntax
```bash
updatedb [OPTION]...
```

## Common Flags and Options
(Most users just run `updatedb` without options. Options are generally configured in `/etc/updatedb.conf`.)

| Flag | Description |
|---|---|
| `-U`, `--require-visibility` | Generate the locate database with visibility requirements (often the default). |
| `-l`, `--localpaths='path1...'`| Non-network directories to put in the database. |

## Real-world Examples

1. **Update the locate database (requires root privileges):**
   ```bash
   sudo updatedb
   ```
   *(Run this if you just downloaded a file and `locate filename` cannot find it yet.)*
