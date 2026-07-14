---
title: Shell Scripting Projects
description: Ideas and concepts for applying your shell scripting knowledge to build useful automation tools.
---

# Shell Scripting Projects

The best way to master shell scripting is by building real-world projects. Here is a list of practical script ideas ranging from beginner to advanced. Use these to practice conditionals, loops, APIs, and file parsing.

## 1. System Health Monitor

**Goal:** Create a script that checks critical system metrics and alerts you if they exceed a threshold.

**Key Features:**
- Use `df -h` to check disk space.
- Use `free -m` to check RAM usage.
- Use `uptime` or `top` to check CPU load.
- If disk space is over 90%, use `logger` or append to a log file.
- **Advanced:** Use `curl` to send a webhook alert to Discord or Slack.

## 2. Bulk File Renamer

**Goal:** A script that renames multiple files in a directory based on user input.

**Key Features:**
- Accept command-line arguments for the directory, a prefix, and a file extension.
- Use a `for` loop to iterate through the files.
- Use string manipulation to rename files (e.g., changing `image1.jpg` to `holiday_image1.jpg`).
- **Advanced:** Implement a "dry run" mode (using a flag parsed by `getopts`) that only prints what *would* be renamed without actually modifying the files.

## 3. Automated User Manager

**Goal:** A script for system administrators to quickly create, modify, or delete Linux users.

**Key Features:**
- Use a `case` statement to provide a menu (1. Add User, 2. Delete User, 3. Change Password).
- Ask for user input using `read`.
- Use `useradd` and `userdel` commands.
- Ensure the script checks if it's running as root before executing (check if `EUID` is 0).

## 4. API Weather Fetcher

**Goal:** Create a script that fetches the current weather for a specified city using a public API.

**Key Features:**
- Use `curl` or `wget` to make an HTTP GET request to a service like `wttr.in`.
- Example command: `curl wttr.in/London?format=3`
- Accept the city name as a command-line argument.
- Use `jq` (if installed) to parse JSON responses from more complex weather APIs.

## 5. Log Analyzer

**Goal:** A script that parses web server logs (like Nginx or Apache) to find suspicious activity.

**Key Features:**
- Read an `access.log` file line by line or using tools like `awk` and `grep`.
- Count the number of 404 (Not Found) errors.
- Identify the top 5 IP addresses that made requests.
- **Advanced:** Generate an HTML or Markdown report summarising the findings.

## Structuring Larger Projects

When you move beyond single-file scripts, consider this directory structure for your projects:

```text
my_project/
|-- bin/           # The executable script itself
|-- conf/          # Configuration files (.conf or .env)
|-- lib/           # Helper scripts/functions to be sourced
|-- logs/          # Directory for log files
|-- README.md      # Documentation
```
You can import functions from `lib/` into your main script using the `source` command:
```bash
source ./lib/utils.sh
```
