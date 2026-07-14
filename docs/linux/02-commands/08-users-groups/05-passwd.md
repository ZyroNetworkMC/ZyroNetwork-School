---
title: passwd
description: Learn how to use the passwd command to update user authentication tokens.
---

# `passwd`

The `passwd` command is used to change user passwords. A normal user can only change their own password, while a system administrator (root or `sudo`) can change the password for any user and manage password expiration policies.

## Basic Syntax

```bash
passwd [OPTIONS] [USERNAME]
```
*If `USERNAME` is omitted, the password for the current user is changed.*

## Common Flags/Options

| Option | Description |
|---|---|
| `-d`, `--delete` | Delete a user's password (makes the account passwordless). |
| `-l`, `--lock` | Lock the password of the named account. |
| `-u`, `--unlock` | Unlock the password of the named account. |
| `-e`, `--expire` | Expire the user's password, forcing them to change it upon next login. |
| `-S`, `--status` | Report the password status on the named account. |

## Real-world Examples

### 1. Change your own password
Simply run `passwd`. You will be prompted for your current password and then the new one.

```bash
passwd
```

### 2. Change another user's password (Admin)
As a root user or using sudo, you can reset another user's password. You will not be prompted for their current password.

```bash
sudo passwd alice
```

### 3. Force a password change on next login
This is useful when you set a temporary password for a new user and want them to secure their account upon first login.

```bash
sudo passwd -e bob
```

### 4. Check the password status of an account
You can verify if an account is locked, when the password was last changed, and password expiration details.

```bash
sudo passwd -S john
```
**Example Output:**
```
john P 10-12-2023 0 99999 7 -1
```
*(Here `P` indicates a usable password. An `L` would indicate a locked password).*

### 5. Lock a user's password
This prevents the user from logging in using a password (though SSH keys might still work if configured).

```bash
sudo passwd -l tempuser
```
