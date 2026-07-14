---
title: journalctl
description: Query the systemd journal.
---

# `journalctl` command

## Detailed Explanation
`journalctl` is used to query the contents of the systemd journal, which collects and stores logging data. Because systemd centralizes logging for the kernel, initial ramdisk, early boot processes, and all services, `journalctl` is an essential tool for troubleshooting on modern Linux systems.

## Basic Syntax
```bash
journalctl [options]
```

## Common Flags/Options
| Option | Description |
|---|---|
| `-u <unit>` | Show logs for a specific systemd unit (service). |
| `-b` | Show logs for the current boot only. |
| `-f` | "Follow" the logs (similar to `tail -f`). |
| `-n <number>`| Show the last `<number>` lines of the journal. |
| `--since <time>`| Show logs starting from a specific time (e.g., "1 hour ago", "2023-10-26"). |
| `-p <priority>`| Filter by priority (e.g., "err", "warning", "info"). |

## Real-world Examples

**View logs for the Nginx service:**
```bash
journalctl -u nginx
```

**View logs for the Nginx service since the last boot:**
```bash
journalctl -u nginx -b
```

**Follow the system log in real-time:**
```bash
journalctl -f
```

**Show only error messages (priority 3 and above):**
```bash
journalctl -p err
```

**Show logs from the last hour:**
```bash
journalctl --since "1 hour ago"
```
