---
title: cal
description: Display a calendar.
---

# `cal` command

## Detailed Explanation
The `cal` command is a simple utility that displays a formatted calendar in the terminal. If no arguments are provided, it displays the calendar for the current month with the current day highlighted.

## Basic Syntax
```bash
cal [options] [[[day] month] year]
```

## Common Flags/Options
| Option | Description |
|---|---|
| `-y` | Display a calendar for the whole year. |
| `-3` | Display the previous, current, and next month surrounding today. |
| `-m` | Display Monday as the first day of the week. |
| `-s` | Display Sunday as the first day of the week (default). |

## Real-world Examples

**Show the calendar for the current month:**
```bash
cal
```

**Show the calendar for the whole current year:**
```bash
cal -y
```

**Show the calendar for a specific year (e.g., 2024):**
```bash
cal 2024
```

**Show the calendar for a specific month and year (e.g., July 2024):**
```bash
cal 7 2024
```

**Show three months (previous, current, next):**
```bash
cal -3
```
