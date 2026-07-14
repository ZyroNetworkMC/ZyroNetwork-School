---
title: date
description: Print or set the system date and time.
---

# `date` command

## Detailed Explanation
The `date` command is used to display the current time and date in a given format, or to set the system date and time. It is highly configurable and can output time in almost any standard format required for scripts or logs.

## Basic Syntax
```bash
date [OPTION]... [+FORMAT]
date [-u|--utc|--universal] [MMDDhhmm[[CC]YY][.ss]]
```

## Common Flags/Options
| Option | Description |
|---|---|
| `+<format>` | Specify the output format using format controls. |
| `-u`, `--utc` | Print or set Coordinated Universal Time (UTC). |
| `-d <string>` | Display time described by `<string>`, not 'now'. |
| `-s <string>` | Set time described by `<string>`. |

## Common Format Controls
*   `%Y`: Year (e.g., 2023)
*   `%m`: Month (01-12)
*   `%d`: Day of month (01-31)
*   `%H`: Hour (00-23)
*   `%M`: Minute (00-59)
*   `%S`: Second (00-60)

## Real-world Examples

**Display the current date and time (default format):**
```bash
date
```

**Display the date in YYYY-MM-DD format:**
```bash
date "+%Y-%m-%d"
```

**Display the time in HH:MM:SS format:**
```bash
date "+%H:%M:%S"
```

**Display a past or future date (e.g., tomorrow):**
```bash
date -d "tomorrow"
```

**Set the system date and time (requires root):**
```bash
sudo date -s "2023-10-26 15:30:00"
```
