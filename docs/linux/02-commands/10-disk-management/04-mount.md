---
title: mount
description: Learn how to use the mount command to mount a filesystem.
---

# `mount`

The `mount` command serves to attach the filesystem found on some device (like a hard drive partition, USB stick, or CD-ROM) to the big file tree. Conversely, `umount` detaches it.

*Note: Mounting a filesystem usually requires root or `sudo` privileges.*

## Basic Syntax

```bash
mount [OPTIONS] [-o OPTIONS] DEVICE DIRECTORY
```
- **DEVICE:** The block device (e.g., `/dev/sdb1`) or the UUID.
- **DIRECTORY:** The "mount point", an existing directory where the files will appear (e.g., `/mnt/usb`).

## Common Flags/Options

| Option | Description |
|---|---|
| `-t TYPE` | The filesystem type (ext4, xfs, vfat, ntfs). Usually auto-detected. |
| `-o OPTIONS` | Comma-separated mount options (e.g., `ro` for read-only, `rw` for read-write). |
| `-a`, `--all` | Mount all filesystems mentioned in `/etc/fstab` (except those marked `noauto`). |

## Real-world Examples

### 1. View currently mounted filesystems
Running `mount` without arguments lists everything that is currently mounted.

```bash
mount
```
*(Tip: Pipe this to `grep` if you are looking for something specific, e.g., `mount | grep ext4`).*

### 2. Mount a USB drive or partition
Suppose you plug in a new drive, use `lsblk` to find it's `/dev/sdb1`, and want to access it.

```bash
# 1. Create a mount point (an empty folder)
sudo mkdir /mnt/mydrive

# 2. Mount the partition to that folder
sudo mount /dev/sdb1 /mnt/mydrive
```

### 3. Mount a filesystem read-only
If you want to ensure no data is accidentally altered on a drive (useful for forensics or backups):

```bash
sudo mount -o ro /dev/sdb1 /mnt/mydrive
```

### 4. Mount an ISO file
You can mount an ISO image file as if it were a physical CD-ROM using the `loop` option.

```bash
sudo mkdir /mnt/iso
sudo mount -o loop ubuntu-22.04.iso /mnt/iso
```

### 5. Remount an existing filesystem
If you need to change mount options on the fly (e.g., change from read-only to read-write) without unmounting it:

```bash
sudo mount -o remount,rw /
```
