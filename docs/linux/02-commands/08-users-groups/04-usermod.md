---
title: usermod
description: Learn how to use the usermod command to modify existing user accounts.
---

# `usermod`

The `usermod` command is used to modify an existing user account in a Linux system. You can use it to change a user's home directory, primary group, supplementary groups, login shell, login name, and more. 

*Note: You must have root or `sudo` privileges to use `usermod`.*

## Basic Syntax

```bash
usermod [OPTIONS] USERNAME
```

## Common Flags/Options

| Option | Description |
|---|---|
| `-a`, `--append` | Append the user to supplementary groups (must be used with `-G`). |
| `-G`, `--groups GROUPS` | A comma-separated list of supplementary groups for the user. |
| `-g`, `--gid GROUP` | Change the primary group of the user. |
| `-l`, `--login NEW_LOGIN` | Change the user's login name. |
| `-L`, `--lock` | Lock the user account (disables password login). |
| `-U`, `--unlock` | Unlock a previously locked user account. |
| `-s`, `--shell SHELL` | Change the user's login shell. |
| `-d`, `--home HOME_DIR` | Change the user's home directory path. |
| `-m`, `--move-home` | Move the content of the user's current home directory to the new one (use with `-d`). |

## Real-world Examples

### 1. Add a user to an additional group
This is the most common use of `usermod`. The `-aG` combination ensures the user is *appended* to the group without being removed from their current supplementary groups.

```bash
sudo usermod -aG docker john
```

### 2. Change a user's primary group
To change a user's primary group (the group associated with files they create by default):

```bash
sudo usermod -g developers alice
```

### 3. Change a user's default shell
If a user prefers `zsh` over `bash`, you can update their shell:

```bash
sudo usermod -s /bin/zsh bob
```

### 4. Lock and Unlock a user account
If a user shouldn't be able to log in temporarily, lock the account.

```bash
# Lock the account
sudo usermod -L tempuser

# Unlock the account later
sudo usermod -U tempuser
```

### 5. Rename a user and move their home directory
If you need to change a username entirely and migrate their files:

```bash
sudo usermod -l newname -d /home/newname -m oldname
```
