---
title: fdisk
description: Learn how to use the fdisk command to manipulate disk partition tables.
---

# `fdisk`

The `fdisk` (format disk) command is a dialog-driven program for creation and manipulation of partition tables. It understands DOS-type partition tables and BSD or SUN-type disk labels. 

*Note: `fdisk` is traditionally used for MBR (Master Boot Record) partition tables. For modern GPT (GUID Partition Table) disks, `gdisk` or `parted` is often preferred, though newer versions of `fdisk` also support GPT.*

*Warning: Modifying partition tables can destroy data. Double-check the device name before proceeding.*

## Basic Syntax

```bash
fdisk [OPTIONS] DEVICE
```
(e.g., `sudo fdisk /dev/sdb`)

## Common Flags/Options

| Option | Description |
|---|---|
| `-l`, `--list` | List partition tables for all or specified devices and exit. |
| `-u` | Change display units (usually to sectors). |

## Interactive Commands (Inside `fdisk`)

Once you run `sudo fdisk /dev/sdX`, you enter an interactive prompt. Common commands include:

| Command | Action |
|---|---|
| `m` | Print the help menu. |
| `p` | Print the current partition table. |
| `n` | Create a new partition. |
| `d` | Delete a partition. |
| `t` | Change a partition type (e.g., from Linux to Swap). |
| `w` | Write the changes to disk and exit (This applies the changes!). |
| `q` | Quit without saving changes. |

## Real-world Examples

### 1. List all partition tables
This is a quick way to view the partition structure of all attached disks, similar to `lsblk` but with different formatting.

```bash
sudo fdisk -l
```

### 2. Create a new partition
Assume you added a new blank disk `/dev/sdb`.

```bash
sudo fdisk /dev/sdb
```
**Interactive flow:**
1. Type `n` for a new partition.
2. Choose `p` for primary.
3. Accept the default partition number (1).
4. Accept the default first sector.
5. Enter `+20G` for the last sector (creates a 20GB partition).
6. Type `p` to verify it looks correct.
7. Type `w` to write changes to disk.

### 3. Change partition type to Swap
If you want to use `/dev/sdb2` as swap space:
1. Run `sudo fdisk /dev/sdb`.
2. Type `t`.
3. Select partition `2`.
4. Type `82` (the hex code for Linux swap).
5. Type `w` to save.
