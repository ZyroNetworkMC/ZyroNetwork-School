---
title: lsblk
description: Learn how to use the lsblk command to list block devices.
---

# `lsblk`

The `lsblk` (list block devices) command gathers information about all available or the specified block devices. It reads the `sysfs` filesystem and `udev` db to gather information. It is incredibly useful for getting a clear, tree-like overview of your hard drives, partitions, and where they are mounted.

## Basic Syntax

```bash
lsblk [OPTIONS] [DEVICE]
```

## Common Flags/Options

| Option | Description |
|---|---|
| `-f`, `--fs` | Output info about filesystems (UUID, labels, FSTYPE). Extremely useful before mounting. |
| `-a`, `--all` | List empty devices as well (e.g., empty CD-ROM drives or unformatted loops). |
| `-m`, `--perms` | Output information about device owner, group, and mode. |
| `-p`, `--paths` | Print full device paths (e.g., `/dev/sda` instead of just `sda`). |
| `-o`, `--output LIST` | Specify which output columns to print. |

## Real-world Examples

### 1. View a tree of all block devices
This is the standard usage. It shows disks (e.g., `sda`), their partitions (e.g., `sda1`, `sda2`), their sizes, types, and mount points.

```bash
lsblk
```
**Output Example:**
```
NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda      8:0    0   50G  0 disk 
├─sda1   8:1    0   49G  0 part /
└─sda2   8:2    0    1G  0 part [SWAP]
sdb      8:16   0  100G  0 disk 
```

### 2. View filesystem types and UUIDs
When configuring `/etc/fstab` for permanent mounts, you need the partition UUID and filesystem type.

```bash
lsblk -f
```
**Output Example:**
```
NAME   FSTYPE LABEL UUID                                 MOUNTPOINT
sda                                                      
├─sda1 ext4         5f8b9b4a-1b4a-4b5f-a3d1-8b9b4a1b4a4b /
└─sda2 swap         2c3d4e5f-6a7b-8c9d-0e1f-2a3b4c5d6e7f [SWAP]
```

### 3. Print full device paths
If you are writing a script and need the exact absolute path to the devices:

```bash
lsblk -p
```
