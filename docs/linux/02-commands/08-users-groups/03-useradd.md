---
title: useradd
description: Learn how to use the useradd command to create new users in Linux.
---

# `useradd`

The `useradd` command (often symlinked or aliased to `adduser` in some distributions) is a low-level utility used to create a new user account on a Linux system. It modifies system files like `/etc/passwd`, `/etc/shadow`, and `/etc/group`, and optionally creates a home directory for the user.

*Note: You typically need root or `sudo` privileges to run this command.*

## Basic Syntax

```bash
useradd [OPTIONS] USERNAME
```

## Common Flags/Options

| Option | Description |
|---|---|
| `-m`, `--create-home` | Create the user's home directory. |
| `-d`, `--home-dir HOME_DIR` | Specify a custom home directory path. |
| `-s`, `--shell SHELL` | Specify the user's login shell (e.g., `/bin/bash`). |
| `-g`, `--gid GROUP` | Specify the name or ID of the user's primary group. |
| `-G`, `--groups GROUPS` | Specify a comma-separated list of supplementary groups. |
| `-e`, `--expiredate EXPIRE_DATE` | Set the date on which the user account will be disabled (Format: YYYY-MM-DD). |

## Real-world Examples

### 1. Create a basic user with a home directory
By default, `useradd` might not create a home directory depending on the Linux distribution's configuration. Use `-m` to ensure it is created.

```bash
sudo useradd -m alice
```

### 2. Create a user with a specific shell and supplementary groups
Create a developer user who needs a bash shell and access to the `docker` and `sudo` groups.

```bash
sudo useradd -m -s /bin/bash -G docker,sudo bob
```

### 3. Create a temporary user with an expiration date
Useful for contractors or temporary access.

```bash
sudo useradd -m -e 2024-12-31 tempuser
```

### 4. Create a system user (no login)
System users are typically used for running services and do not need a login shell or home directory.

```bash
sudo useradd -r -s /usr/sbin/nologin nginx_worker
```
*(The `-r` flag indicates a system account, assigning a UID below 1000).*
