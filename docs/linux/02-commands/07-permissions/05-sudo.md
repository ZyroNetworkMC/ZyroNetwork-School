---
title: sudo
description: Execute a command as another user (typically root).
---

# `sudo`

The `sudo` (superuser do) command allows a permitted user to execute a command as the superuser or another user, as specified by the security policy in the `sudoers` file. It temporarily elevates privileges without needing to log in as root.

## Basic Syntax

```bash
sudo [OPTION]... COMMAND
```

## Common Options

| Option | Description |
|---|---|
| `-u user` | Run the command as the specified user instead of root. |
| `-i` | Run a login shell as the target user (simulate initial login). |
| `-s` | Run the shell specified by the SHELL environment variable. |
| `-l` | List the allowed (and forbidden) commands for the invoking user. |
| `-v` | Validate the user's cached credentials (extend the timeout). |

## Real-world Examples

1. **Run an administrative command:**
   ```bash
   sudo apt update
   ```

2. **Edit a system file:**
   ```bash
   sudo nano /etc/hosts
   ```

3. **Run a command as a different user (e.g., `www-data`):**
   ```bash
   sudo -u www-data php script.php
   ```

4. **Start a root shell:**
   ```bash
   sudo -i
   ```
