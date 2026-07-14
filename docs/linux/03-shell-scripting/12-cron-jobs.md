---
title: Cron Jobs for Shell Scripts
description: Learn how to schedule your shell scripts to run automatically using cron.
---

# Cron Jobs for Shell Scripts

Cron is a time-based job scheduler in Unix-like operating systems. It is perfect for running shell scripts automatically at fixed times, dates, or intervals.

## Understanding the Crontab

To schedule tasks, you edit the "crontab" (cron table) file.
To edit your user's crontab:
```bash
crontab -e
```
To list your scheduled jobs:
```bash
crontab -l
```

## Cron Syntax

A cron expression consists of five fields followed by the command to execute.

```text
* * * * * /path/to/command
- - - - -
| | | | |
| | | | +----- Day of the week (0 - 7) (Sunday is 0 or 7)
| | | +------- Month (1 - 12)
| | +--------- Day of the month (1 - 31)
| +----------- Hour (0 - 23)
+------------- Minute (0 - 59)
```

## Practical Examples

Run a script every day at midnight:
```cron
0 0 * * * /home/user/scripts/daily_backup.sh
```

Run a script every 15 minutes:
```cron
*/15 * * * * /home/user/scripts/health_check.sh
```

Run a script at 2:30 AM every Sunday:
```cron
30 2 * * 0 /home/user/scripts/weekly_maintenance.sh
```

## Environment Variables and Cron

A common pitfall with cron is that it runs in a very restricted environment. Your `$PATH` variable in cron is often just `/usr/bin:/bin`. 

If your script relies on specific binaries (like `node`, `docker`, etc.), it might fail when run via cron even if it works perfectly in your terminal.

**Solutions:**
1. Define the PATH at the top of your script.
2. Use absolute paths for all commands inside your script (e.g., `/usr/local/bin/docker` instead of `docker`).
3. Define the environment at the top of the crontab file.

## Logging Cron Output

By default, cron might try to email output. It's usually better to redirect output to a log file explicitly.

```cron
0 0 * * * /home/user/backup.sh >> /var/log/mybackup.log 2>&1
```

## Best Practices

- Always use absolute paths for the script location and any files referenced inside the script.
- Ensure the script has executable permissions (`chmod +x`).
- Redirect `stdout` and `stderr` to a log file so you can debug issues if the job fails.
