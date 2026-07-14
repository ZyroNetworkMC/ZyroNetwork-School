---
title: groupdel
description: Learn how to use the groupdel command to remove existing groups.
---

# `groupdel`

The `groupdel` command is used to delete an existing group from a Linux system. It removes the group entry from the `/etc/group` and `/etc/gshadow` files.

*Note: You cannot remove the primary group of any existing user. You must first remove the user or change the user's primary group.*

## Basic Syntax

```bash
groupdel [OPTIONS] GROUP_NAME
```

## Common Flags/Options

| Option | Description |
|---|---|
| `-h`, `--help` | Display a help message and exit. |
| `-f`, `--force` | Although documented in some versions, `groupdel` generally refuses to remove primary groups even with force. |

*Note: `groupdel` is a very straightforward command and typically does not require any flags.*

## Real-world Examples

### 1. Delete an empty or supplementary group
Simply provide the name of the group you wish to remove.

```bash
sudo groupdel contractors
```

### 2. What happens if you try to delete a primary group?
If the group is currently acting as the primary group for a user, the system will block the deletion to prevent file ownership and permission issues.

```bash
sudo groupdel john
```
**Output:**
```
groupdel: cannot remove the primary group of user 'john'
```
*To resolve this, you must change `john`'s primary group using `usermod -g`, or delete the user `john` entirely.*

### 3. Verify deletion
After running the command, you can check `/etc/group` to ensure the group has been removed.

```bash
cat /etc/group | grep contractors
```
*(If the command returns nothing, the group was successfully deleted).*

### 4. Handling orphaned files
Similar to `userdel`, if you delete a group, any files owned by that group will retain the numerical GID. You can find them using:

```bash
sudo find / -gid 1050
```
*(Assuming the deleted group had GID 1050).*
