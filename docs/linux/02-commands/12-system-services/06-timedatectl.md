---
title: timedatectl
description: Control the system time and date.
---

# `timedatectl` command

## Detailed Explanation
`timedatectl` is a utility provided by systemd for controlling the system time and date. It allows you to query and change the clock, the time zone, and enable or disable Network Time Protocol (NTP) synchronization.

## Basic Syntax
```bash
timedatectl [command]
```

## Common Commands
| Command | Description |
|---|---|
| `status` | Show current time settings (default behavior). |
| `set-time [TIME]` | Set the system time (e.g., "2023-10-26 14:30:00"). |
| `set-timezone [TZ]` | Set the system time zone. |
| `list-timezones` | List known time zones. |
| `set-ntp [boolean]` | Enable or disable network time synchronization (NTP). |

## Real-world Examples

**Show the current time and date configuration:**
```bash
timedatectl
```

**List all available time zones:**
```bash
timedatectl list-timezones
```

**Set the system time zone to 'America/New_York':**
```bash
sudo timedatectl set-timezone America/New_York
```

**Enable automatic time synchronization via NTP:**
```bash
sudo timedatectl set-ntp true
```
