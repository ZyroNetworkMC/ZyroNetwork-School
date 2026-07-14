---
title: fsck
description: Learn how to use the fsck command to check and repair a Linux filesystem.
---

# `fsck`

The `fsck` (file system consistency check) command is used to check and optionally repair one or more Linux file systems. It is essentially the Linux equivalent of Windows' `chkdsk`.

**CRITICAL RULE:** Never run `fsck` on a mounted read-write filesystem. Doing so can severely corrupt the filesystem. Always unmount the partition first, or boot into a rescue mode / Live USB to check the root (`/`) partition.

## Basic Syntax

```bash
fsck [OPTIONS] DEVICE
```

## Common Flags/Options

| Option | Description |
|---|---|
| `-A` | Walk through the `/etc/fstab` file and try to check all file systems. |
| `-C` | Display completion/progress bars for those filesystem checkers (like ext4) that support them. |
| `-a` or `-p` | Automatically repair the file system without prompting for confirmation. |
| `-y` | Answer "yes" to all interactive prompts (useful for heavily corrupted drives). |
| `-n` | Open the filesystem read-only and answer "no" to all prompts (safe dry-run). |
| `-f` | Force checking even if the file system seems clean. |

## Real-world Examples

### 1. Check a dirty filesystem
First, unmount the partition, then run the check. If errors are found, `fsck` will prompt you interactively on how to fix them.

```bash
sudo umount /dev/sdb1
sudo fsck /dev/sdb1
```

### 2. Auto-repair a filesystem
If you don't want to press 'y' hundreds of times for a corrupted disk, use the `-y` flag.

```bash
sudo fsck -y /dev/sdb1
```

### 3. Force a check on a clean filesystem
Sometimes a disk is marked as "clean" by the OS, but you suspect hardware failure or silent corruption. Force the check using `-f`.

```bash
sudo fsck -f /dev/sdb1
```

### 4. How to check the root partition (`/`)
You cannot unmount the root partition while the system is running. To check it, you can force `fsck` to run on the next reboot by creating a file named `forcefsck` in the root directory.

```bash
sudo touch /forcefsck
sudo reboot
```
*(Note: On modern systemd-based distributions, this method may be deprecated. The modern approach involves editing the grub boot parameters to include `fsck.mode=force`).*
