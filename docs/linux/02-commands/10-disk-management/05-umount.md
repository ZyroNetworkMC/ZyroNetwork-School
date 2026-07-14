---
title: umount
description: Learn how to use the umount command to detach file systems.
---

# `umount`

The `umount` (unmount) command detaches a mounted filesystem from the directory tree. You must unmount a device (like a USB drive) before physically removing it to ensure all cached data is written to the disk and prevent data corruption.

*Note: You need root or `sudo` privileges to unmount most filesystems.*

## Basic Syntax

```bash
umount [OPTIONS] DIRECTORY | DEVICE
```
You can specify either the device name (e.g., `/dev/sdb1`) or the mount point (e.g., `/mnt/usb`).

## Common Flags/Options

| Option | Description |
|---|---|
| `-f`, `--force` | Force an unmount (in case of an unreachable NFS system). |
| `-l`, `--lazy` | Lazy unmount. Detach the filesystem from the hierarchy now, and clean up all references to it as soon as it is not busy anymore. |

## Real-world Examples

### 1. Unmount a device by its mount point
This is the most common and recommended way to unmount.

```bash
sudo umount /mnt/usb
```

### 2. Unmount a device by its device path
If you know the device path but forget where you mounted it, this works too.

```bash
sudo umount /dev/sdb1
```

### 3. Handling "Target is busy" errors
If you try to unmount a drive and get a `umount: target is busy` error, it means some process is using a file on that drive, or your terminal is currently inside that directory.
1. Check if you are inside the directory: `pwd`. If so, `cd /` and try again.
2. Find out which process is using it using `lsof`:
   ```bash
   sudo lsof +D /mnt/usb
   ```
3. Either close the program, kill the process, or wait for it to finish.

### 4. Lazy unmount (When all else fails)
If a network share drops and hangs your system, or you absolutely must remove a drive but processes are locked on it, use a lazy unmount. It hides the mount immediately and cleans it up in the background later.

```bash
sudo umount -l /mnt/network_share
```
