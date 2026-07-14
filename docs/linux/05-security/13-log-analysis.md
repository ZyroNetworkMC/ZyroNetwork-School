---
title: Log Analysis
description: Reading and analyzing Linux system logs for security events.
---

# Log Analysis

Logs are your first line of defense when investigating a security incident or troubleshooting system failures. Most Linux logs are stored in the `/var/log` directory.

## Important Log Files

- `/var/log/syslog` or `/var/log/messages`: General system activity logs.
- `/var/log/auth.log` or `/var/log/secure`: Authentication logs (SSH logins, sudo usage, cron jobs running as users).
- `/var/log/dmesg`: Kernel ring buffer, hardware and driver messages.
- `/var/log/nginx/access.log` or `/var/log/apache2/access.log`: Web server traffic logs.

## Viewing Logs

### tail
Watch logs in real-time.
```bash
tail -f /var/log/auth.log
```

### grep
Search for specific patterns.
```bash
# Find all failed SSH logins
grep "Failed password" /var/log/auth.log

# Find sudo commands run by a specific user
grep "sudo" /var/log/auth.log | grep "bob"
```

### journalctl
Modern Linux systems use `systemd`, which utilizes a binary logging system called `journald`. You access these logs using `journalctl`.

```bash
# View all logs
journalctl

# View logs for a specific service (e.g., SSH)
journalctl -u ssh

# View logs from the current boot
journalctl -b

# Follow logs in real-time
journalctl -f
```

## Log Rotation
Log files can grow massive. Linux uses `logrotate` (configured in `/etc/logrotate.conf` and `/etc/logrotate.d/`) to automatically compress old logs and delete very old ones, preventing the disk from filling up.
