---
title: "List Open Files: lsof"
description: "Mastering lsof to identify open files, network connections, and processes holding resources."
---

# List Open Files: lsof

In Linux, "everything is a file." This includes regular files, directories, block devices, network sockets, and pipes. The `lsof` command lists information about files opened by processes.

## Essential `lsof` Commands

### 1. Network Troubleshooting
Finding out which process is listening on a specific port is one of the most common uses of `lsof`.

- **Find the process listening on port 80:**
  ```bash
  lsof -i :80
  ```
- **List all TCP connections:**
  ```bash
  lsof -i tcp
  ```
- **List all established connections:**
  ```bash
  lsof -i -sTCP:ESTABLISHED
  ```

### 2. File and Process Troubleshooting
Sometimes you need to know who is locking a file or what files a program is using.

- **List files opened by a specific PID:**
  ```bash
  lsof -p [PID]
  ```
- **Find which process has a specific file open:**
  ```bash
  lsof /path/to/specific/file.txt
  ```
- **List all files opened by a specific user:**
  ```bash
  lsof -u username
  ```

## Real-World Scenarios

### Scenario A: "Device or resource busy" Unmount Error
When trying to `umount /mnt/data`, you receive a "device is busy" error. This means a process is actively using files on that mount.

```bash
lsof +D /mnt/data
```
This will recursively list all open files within the directory, showing you exactly which processes you need to stop before unmounting.

### Scenario B: Recovering a Deleted File
If a file was deleted, but a process still holds it open, the disk space is not freed, and the data is still accessible in memory via the `/proc` filesystem.

1. Find the PID and File Descriptor (FD) using `lsof | grep deleted_filename`.
2. Recover it by copying from the process's file descriptor directory:
   ```bash
   cp /proc/[PID]/fd/[FD_NUMBER] /path/to/recovered_file
   ```

## Best Practices
- Run `lsof` as root (using `sudo`). If run as a normal user, it will only report files opened by that user's processes.
- Use `lsof` in combination with `grep` to quickly find specific socket states or file paths.
