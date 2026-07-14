---
title: userdel
description: Learn how to use the userdel command to delete user accounts and related files.
---

# `userdel`

The `userdel` command is used to delete a user account and its related files from a Linux system. It modifies the system account files (`/etc/passwd`, `/etc/shadow`, and `/etc/group`) to remove all references to the user.

*Note: You need root or `sudo` privileges to execute this command.*

## Basic Syntax

```bash
userdel [OPTIONS] USERNAME
```

## Common Flags/Options

| Option | Description |
|---|---|
| `-r`, `--remove` | Remove the user's home directory and mail spool. |
| `-f`, `--force` | Force the removal of the user account, even if the user is still logged in. |

## Real-world Examples

### 1. Remove a user (Keep Home Directory)
By default, `userdel` removes the user account but leaves their home directory and files intact on the filesystem. This is useful if you need to retain their work or audit their files.

```bash
sudo userdel alice
```

### 2. Remove a user and their home directory
If the user is leaving and their files are no longer needed, you can delete both the account and their home directory at the same time using the `-r` flag.

```bash
sudo userdel -r bob
```

### 3. Force remove a logged-in user
If a user has processes running or is currently logged in, `userdel` might refuse to delete the account. You can forcefully remove them, though this is generally discouraged as it can leave orphaned processes or files.

```bash
sudo userdel -f tempuser
```

### 4. Handling orphaned files
If you deleted a user *without* the `-r` flag, files they owned will now be owned by their old numeric UID. You can find these files using the `find` command:

```bash
sudo find / -uid 1005
```
*(Assuming the deleted user had UID 1005).*
