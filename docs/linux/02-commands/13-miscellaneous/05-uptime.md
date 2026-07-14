---
title: uptime
description: Tell how long the system has been running.
---

# `uptime` command

## Detailed Explanation
The `uptime` command gives a one-line display of the following information: the current time, how long the system has been running, how many users are currently logged on, and the system load averages for the past 1, 5, and 15 minutes.

## Basic Syntax
```bash
uptime [options]
```

## Common Flags/Options
| Option | Description |
|---|---|
| `-p`, `--pretty`| Show uptime in a pretty (human-readable) format. |
| `-s`, `--since` | Show the exact date and time the system was started. |

## Real-world Examples

**Show standard uptime information:**
```bash
uptime
```
*(Example output: ` 10:45:12 up 12 days,  3:14,  2 users,  load average: 0.12, 0.08, 0.05`)*

**Show uptime in a readable format:**
```bash
uptime -p
```
*(Example output: `up 12 days, 3 hours, 14 minutes`)*

**Show the time when the system booted:**
```bash
uptime -s
```
*(Example output: `2023-10-14 07:30:15`)*
