---
title: File Permissions
description: Understanding Linux file permissions, ownership, and how to manage them.
---

# Linux File Permissions

Linux is a multi-user OS. To protect user data, it employs a strict permissions system. Every file and directory is owned by a specific user and a specific group, and has access rights defined for three categories of users.

## Permission Categories

- **User (u)**: The owner of the file.
- **Group (g)**: Other users who are members of the file's group.
- **Others (o)**: Everyone else.

## Permission Types

- **Read (r)**: View file contents or list directory contents. Value = 4.
- **Write (w)**: Modify file contents or create/delete files within a directory. Value = 2.
- **Execute (x)**: Run a file as a program or enter a directory. Value = 1.

## Practical Examples

### Viewing Permissions
Run `ls -l` to view permissions.
```bash
-rwxr-xr-- 1 user group 1024 Jan 1 12:00 script.sh
```
This means:
- User has read, write, execute (rwx)
- Group has read, execute (r-x)
- Others have read only (r--)

### Changing Permissions (chmod)
You can use symbolic or numeric (octal) modes.
```bash
# Give owner execute permission
chmod u+x script.sh

# Set permissions to rwxr-xr-x (755)
chmod 755 script.sh
```

### Changing Ownership (chown)
Only root can change file ownership.
```bash
# Change owner to 'alice' and group to 'devs'
chown alice:devs project.txt
```
