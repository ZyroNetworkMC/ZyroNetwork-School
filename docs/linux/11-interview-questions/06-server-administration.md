---
title: Server Administration Interview Questions
description: Questions covering system administration, process management, and services.
---

# Server Administration Interview Questions

These questions test your ability to maintain, monitor, and troubleshoot live Linux servers.

## Core Questions

### 1. How do you manage services in modern Linux distributions?
Using `systemd` via the `systemctl` command.
- Start: `sudo systemctl start service_name`
- Enable on boot: `sudo systemctl enable service_name`
- Check status: `sudo systemctl status service_name`

### 2. A system is running out of disk space. How do you troubleshoot?
1. Check overall usage: `df -h`
2. Identify large directories: `du -sh /* 2>/dev/null | sort -rh | head -10`
3. Check for deleted files still held open by processes: `lsof +L1`

### 3. What is the difference between `kill`, `killall`, and `pkill`?
- `kill <PID>` sends a signal to a specific Process ID.
- `killall <name>` kills all processes with that exact name.
- `pkill <pattern>` kills processes based on a regex pattern match of the name.

## Practical Examples

**Viewing logs with journalctl:**
To view logs for a specific service:
```bash
journalctl -u nginx.service --since today
```

**Managing runaway processes:**
Find top CPU consumers with `top` or `htop`, note the PID, and gracefully terminate it:
```bash
kill -15 <PID>
```
If it refuses to die, force it:
```bash
kill -9 <PID>
```

## Best Practices
- **Graceful degradation:** Always emphasize trying graceful stops (SIGTERM/-15) before forcefully killing processes (SIGKILL/-9).
- **Log Analysis:** Mention that checking logs (either via `journalctl` or `/var/log/`) is always your first step when a service fails.
