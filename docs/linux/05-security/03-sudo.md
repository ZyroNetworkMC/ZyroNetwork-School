---
title: Sudo and Root Access
description: Managing administrative privileges safely using sudo.
---

# Sudo and Root Access

The `root` user is the superuser in Linux, possessing absolute control over the system. Logging in directly as root is highly discouraged due to security risks and the potential for accidental system damage. Instead, the `sudo` (SuperUser DO) command is used.

## Why Use Sudo?

- **Accountability**: `sudo` logs every command executed, allowing administrators to track who did what.
- **Granular Control**: You can configure `sudo` to allow specific users to run only specific commands.
- **Safety**: Requiring a password prompt makes you pause and think before executing potentially destructive commands.

## The Sudoers File

The configuration for sudo is stored in `/etc/sudoers`. **Never edit this file directly.** Always use the `visudo` command, which locks the file and checks for syntax errors before saving.

### Example visudo Entries

```bash
# Allow user 'bob' to run all commands
bob ALL=(ALL:ALL) ALL

# Allow group 'devops' to restart the web server without a password
%devops ALL=(ALL) NOPASSWD: /bin/systemctl restart nginx
```

## Best Practices

- **Avoid `sudo su` or `sudo -i`**: While convenient, staying in a root shell defeats the accountability purpose of sudo.
- **Set a timeout**: Sudo caches credentials for a short time (default is usually 15 minutes). You can adjust this in the sudoers file using `Defaults env_reset,timestamp_timeout=5`.
