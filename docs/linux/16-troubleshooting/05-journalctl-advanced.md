---
title: "Advanced systemd Logging: journalctl"
description: "Comprehensive guide to querying and filtering the systemd journal using journalctl."
---

# Advanced systemd Logging with journalctl

Modern Linux distributions (like Ubuntu, CentOS/RHEL 7+, Debian) use `systemd` as their init system. Systemd includes its own logging daemon called `systemd-journald`. Unlike traditional plain-text syslog files, the journal is binary, structured, and indexed, allowing for powerful querying using `journalctl`.

## Basic Journal Queries

- **View all logs:**
  ```bash
  journalctl
  ```
- **View the end of the log and follow new messages (like `tail -f`):**
  ```bash
  journalctl -f
  ```
- **Jump to the end of the journal (view recent events):**
  ```bash
  journalctl -e
  ```

## Filtering the Journal

The true power of `journalctl` lies in its filtering capabilities.

### 1. By Service (Unit)
To see logs specific to the Nginx web server:
```bash
journalctl -u nginx.service
```

### 2. By Time
You can specify exact times or use human-readable relative terms.
```bash
journalctl --since "2023-10-25 08:00:00" --until "2023-10-25 10:00:00"
journalctl --since "1 hour ago"
journalctl --since yesterday
```

### 3. By Priority
Systemd categorizes logs by syslog priority levels (0-7, where 0 is emerg and 7 is debug).
- **Show only Errors (priority 3) and worse:**
  ```bash
  journalctl -p err
  ```
- **Show warnings (priority 4) and worse:**
  ```bash
  journalctl -p warning
  ```

### 4. By Boot
- **Show logs since the current system boot:**
  ```bash
  journalctl -b
  ```
- **Show logs from the previous boot:**
  ```bash
  journalctl -b -1
  ```

## Managing Journal Disk Usage

Because the journal stores a lot of metadata, it can grow large.

- **Check current disk usage:**
  ```bash
  journalctl --disk-usage
  ```
- **Vacuum (clean up) the journal to a specific size:**
  ```bash
  journalctl --vacuum-size=500M
  ```
- **Vacuum logs older than a specific time:**
  ```bash
  journalctl --vacuum-time=1w
  ```

## Best Practices
- Use `-x` (`journalctl -xe`) to show catalog explanations, which sometimes provide extra context or links to documentation regarding specific error messages.
- If you pipe `journalctl` to another command (like `grep`), it might truncate long lines. Use `--no-pager` to prevent this behavior if scripting.
