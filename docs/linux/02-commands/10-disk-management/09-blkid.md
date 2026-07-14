---
title: blkid
description: Learn how to use the blkid command to locate and print block device attributes.
---

# `blkid`

The `blkid` (block identification) command is a command-line utility used to locate/print block device attributes. Primarily, it is used to find the UUID (Universally Unique Identifier) and the filesystem type (TYPE) of partitions. 

UUIDs are critical in modern Linux administration because device names like `/dev/sda1` can change if drives are plugged into different ports or initialized in a different order, whereas the UUID remains constant.

*Note: While `blkid` can be run by regular users, it might not show all devices. Run it with `sudo` for complete output.*

## Basic Syntax

```bash
blkid [OPTIONS] [DEVICE]
```

## Common Flags/Options

| Option | Description |
|---|---|
| `-s TAG` | Show only the tags that match TAG (e.g., `UUID` or `TYPE`). |
| `-o FORMAT` | Specify output format (e.g., `value`, `device`, `export`). |
| `-p` | Bypass the cache and probe the devices directly (low-level). |

## Real-world Examples

### 1. Display attributes of all block devices
Running `blkid` without arguments lists all partitions, their UUIDs, PARTUUIDs, and filesystem types.

```bash
sudo blkid
```
**Output Example:**
```
/dev/sda1: UUID="9a3b5c7d-8e9f-0a1b-2c3d-4e5f6a7b8c9d" BLOCK_SIZE="4096" TYPE="ext4" PARTUUID="12345678-01"
/dev/sda2: UUID="1b2c3d4e-5f6a-7b8c-9d0e-1f2a3b4c5d6e" TYPE="swap" PARTUUID="12345678-02"
```

### 2. Find the UUID of a specific device
If you only need information about `/dev/sdb1`:

```bash
sudo blkid /dev/sdb1
```

### 3. Extract just the UUID value
If you are writing a script and need to extract the raw UUID string without the `UUID=` prefix and quotes:

```bash
sudo blkid -s UUID -o value /dev/sdb1
```
**Output Example:**
```
9a3b5c7d-8e9f-0a1b-2c3d-4e5f6a7b8c9d
```

### 4. Updating `/etc/fstab`
The primary reason you use `blkid` is to configure persistent mounts in `/etc/fstab`.
Instead of writing:
`/dev/sdb1  /mnt/data  ext4  defaults  0  2`
You should find the UUID with `blkid` and write:
`UUID=9a3b5c7d-8e9f-0a1b-2c3d-4e5f6a7b8c9d  /mnt/data  ext4  defaults  0  2`
