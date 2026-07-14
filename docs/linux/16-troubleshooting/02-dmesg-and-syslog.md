---
title: "Kernel Ring Buffer and System Logs: dmesg and syslog"
description: "How to use dmesg and syslog/rsyslog to diagnose hardware and system-level issues."
---

# Kernel Ring Buffer and System Logs

When a Linux system experiences fundamental hardware issues, driver crashes, or boot failures, the standard application logs might not capture the event. In these cases, you must consult the system and kernel logs.

## The Kernel Ring Buffer and `dmesg`

The kernel ring buffer is a memory region where the Linux kernel stores its log messages. These messages include hardware detection, driver initialization, and kernel-level errors (like Out of Memory events).

The command `dmesg` (display message or driver message) is used to read this buffer.

### Common `dmesg` Commands

- **View all messages:**
  ```bash
  dmesg
  ```
- **View messages with human-readable timestamps:** (Highly recommended)
  ```bash
  dmesg -T
  ```
- **Follow new messages in real-time:**
  ```bash
  dmesg -w
  ```
- **Filter for specific errors (e.g., memory, disk):**
  ```bash
  dmesg -T | grep -i oom
  dmesg -T | grep -i error
  dmesg -T | grep sda
  ```

### Real-World Example: OOM Killer

If a process suddenly disappears, it might have been killed by the Out of Memory (OOM) killer. You can verify this by checking `dmesg`:

```bash
dmesg -T | grep -i "out of memory"
```

## System Logging: `syslog` and `rsyslog`

While `dmesg` handles kernel messages, `syslog` (and its modern implementation, `rsyslog`) handles user-space logging. It collects logs from various programs and routes them to files in `/var/log/`.

Depending on your distribution, the main log file is usually:
- **Debian/Ubuntu:** `/var/log/syslog`
- **RHEL/CentOS:** `/var/log/messages`

### Viewing Syslog

- **View the last few lines:**
  ```bash
  tail -n 50 /var/log/syslog
  ```
- **Watch the log in real-time:**
  ```bash
  tail -f /var/log/syslog
  ```
- **Search through older, rotated logs:**
  ```bash
  zgrep "error" /var/log/syslog.*.gz
  ```

## Best Practices

- Always check `dmesg` if a server reboots unexpectedly or if hardware behaves erratically.
- Configure remote logging (forwarding logs to a central server) using `rsyslog` to ensure logs survive if a server's disk fails.
