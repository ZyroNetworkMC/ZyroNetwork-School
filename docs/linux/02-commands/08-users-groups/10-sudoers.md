---
title: sudoers
description: Learn about the sudoers file, visudo command, and how to manage sudo privileges.
---

# `sudoers` (and `visudo`)

The `sudoers` file (located at `/etc/sudoers`) is the configuration file for the `sudo` command. It determines which users and groups are granted elevated privileges (root access) and what specific commands they are allowed to run.

**CRITICAL RULE:** Never edit `/etc/sudoers` directly with a text editor like `nano` or `vim`. Always use the `visudo` command. `visudo` checks the syntax of your edits before saving. If you make a syntax error in `/etc/sudoers` and save it directly, you can permanently lock yourself out of administrative access on the system.

## Basic Syntax

To edit the sudoers file safely:
```bash
sudo visudo
```

### Understanding the syntax inside the `sudoers` file:

A standard rule looks like this:
```
user/group    host=(run_as_user:run_as_group)    commands
```

For example:
```
root    ALL=(ALL:ALL) ALL
```
- **root:** The user the rule applies to.
- **ALL:** The hosts where this rule applies (usually ALL).
- **(ALL:ALL):** The user and group they can run commands as.
- **ALL:** The commands they are allowed to run.

## Common Configurations

| Configuration | Description |
|---|---|
| `%sudo ALL=(ALL:ALL) ALL` | Allows members of the `sudo` group to execute any command. |
| `%wheel ALL=(ALL:ALL) ALL` | Allows members of the `wheel` group to execute any command (common on RHEL/CentOS). |
| `alice ALL=(ALL) NOPASSWD: ALL` | Allows user `alice` to run any command using `sudo` without being prompted for a password. |
| `bob ALL=(ALL) /bin/systemctl restart nginx` | Allows user `bob` to *only* restart the nginx service via sudo, nothing else. |

## Real-world Examples

### 1. Granting full sudo access to a user
The easiest and safest way to give a user sudo access is usually to add them to the system's designated sudo group (`sudo` on Debian/Ubuntu, `wheel` on RHEL/CentOS), rather than editing the `sudoers` file directly.

```bash
sudo usermod -aG sudo john
```

### 2. Giving a specific user NOPASSWD access
If you have a script or an automation tool (like Ansible) that needs sudo access but cannot type a password, use `visudo` to add:

```
automation_user ALL=(ALL) NOPASSWD: ALL
```

### 3. Restricting a user to a specific command
You can restrict a user so they can only run a specific administrative command. Open `visudo` and add:

```
junior_admin ALL=(root) /usr/bin/apt update, /usr/bin/apt upgrade
```
*Now `junior_admin` can update the system using sudo, but cannot view root files or manage users.*

### 4. Using include directories
Instead of putting everything in `/etc/sudoers`, it is highly recommended to place custom configuration files inside `/etc/sudoers.d/`. Files in this directory are read automatically and it keeps the main configuration clean.

```bash
sudo visudo -f /etc/sudoers.d/custom_rules
```
