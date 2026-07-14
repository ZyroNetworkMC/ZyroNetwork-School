---
title: groupadd
description: Learn how to use the groupadd command to create new groups in Linux.
---

# `groupadd`

The `groupadd` command is used to create a new group on a Linux system. Groups are essential for managing file permissions and organizing users who need access to shared resources.

*Note: You need root or `sudo` privileges to execute this command.*

## Basic Syntax

```bash
groupadd [OPTIONS] GROUP_NAME
```

## Common Flags/Options

| Option | Description |
|---|---|
| `-g`, `--gid GID` | Specify the exact numerical Group ID (GID) for the new group. |
| `-r`, `--system` | Create a system group (typically assigns a GID lower than 1000). |
| `-f`, `--force` | Exit with success status if the specified group already exists. |

## Real-world Examples

### 1. Create a standard new group
The most basic usage simply takes the name of the new group. The system will automatically assign the next available GID (usually starting from 1000).

```bash
sudo groupadd developers
```

### 2. Create a group with a specific GID
If you have a strict permission structure across multiple servers, you might want to ensure a group has the exact same GID everywhere.

```bash
sudo groupadd -g 2050 marketing
```

### 3. Create a system group
System groups are generally meant for system processes, daemons, or services rather than human users.

```bash
sudo groupadd -r nginx
```

### 4. Verify group creation
After adding a group, you can verify it was created by searching the `/etc/group` file.

```bash
grep developers /etc/group
```
**Output:**
```
developers:x:1001:
```
