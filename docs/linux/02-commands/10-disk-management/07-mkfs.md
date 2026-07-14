---
title: mkfs
description: Learn how to use the mkfs command to build a Linux filesystem (format a partition).
---

# `mkfs`

The `mkfs` (make filesystem) command is used to build a Linux filesystem on a device, usually a hard disk partition. In Windows terms, this is equivalent to "formatting" a drive.

Under the hood, `mkfs` is a front-end for various filesystem builders like `mkfs.ext4`, `mkfs.xfs`, `mkfs.vfat`, etc.

*Warning: Creating a filesystem on a partition will permanently erase all existing data on that partition.*

## Basic Syntax

```bash
mkfs [OPTIONS] [-t TYPE] [FS_OPTIONS] DEVICE
```

Alternatively, you can call the specific builder directly, which is often preferred:
```bash
mkfs.<type> [OPTIONS] DEVICE
```

## Common Filesystem Types

| Type | Description |
|---|---|
| `ext4` | The standard, mature filesystem for most Linux distributions. |
| `xfs` | A high-performance journaling file system, default in RHEL/CentOS. |
| `vfat` (FAT32) | Highly compatible with Windows, macOS, and Linux (e.g., for USB drives). |
| `ntfs` | Windows native filesystem (usually requires `mkfs.ntfs` from `ntfs-3g`). |

## Real-world Examples

### 1. Format a partition as ext4
This is the most common command to prepare a new partition for use in Linux.

```bash
sudo mkfs.ext4 /dev/sdb1
# or
sudo mkfs -t ext4 /dev/sdb1
```

### 2. Format a partition as XFS
If you are setting up a data drive on a Red Hat-based system or need high performance for large files.

```bash
sudo mkfs.xfs /dev/sdb1
```

### 3. Format a USB drive for cross-platform compatibility
If you need a USB drive to work on Windows, Mac, and Linux, FAT32 (`vfat`) is the safest choice (note: max file size is 4GB).

```bash
sudo mkfs.vfat /dev/sdc1
```

### 4. Assign a label during formatting
You can name the filesystem when you create it, making it easier to identify later (e.g., in `/etc/fstab`).

```bash
# For ext4:
sudo mkfs.ext4 -L "DataDrive" /dev/sdb1

# For xfs:
sudo mkfs.xfs -L "DataDrive" /dev/sdb1
```
