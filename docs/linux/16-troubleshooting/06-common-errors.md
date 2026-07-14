---
title: "Common Linux Errors and Solutions"
description: "A reference for typical Linux errors, their causes, and how to resolve them."
---

# Common Linux Errors and Solutions

System administrators encounter specific errors repeatedly. Knowing how to quickly diagnose and fix these common issues is vital.

## 1. "No space left on device"

**Symptoms:** Services crash, files cannot be saved, database writes fail.

**Diagnosis:**
This can happen for two reasons: out of disk blocks, or out of inodes (file metadata structures).
- Check block space: `df -h`
- Check inode space: `df -i`

**Solutions:**
- If disk space is 100%, find large files using `du -sh /*` or `find / -type f -size +1G`.
- Clear old logs, temp files, or package caches.
- If inode usage is 100%, you have too many tiny files. Look for directories with millions of small files (often session files or old mail queues).

## 2. "Permission denied"

**Symptoms:** Unable to read/write a file, execute a script, or bind to a port.

**Diagnosis & Solutions:**
- **File Permissions:** Check ownership and mode with `ls -l`. Fix with `chmod` and `chown`.
- **Execution:** Scripts must have the execute bit set (`chmod +x script.sh`).
- **Low Ports:** Binding to ports under 1024 requires root privileges.
- **SELinux / AppArmor:** If standard permissions look correct but access is still denied, security modules might be blocking it. Check `/var/log/audit/audit.log` (SELinux) or `/var/log/syslog` (AppArmor).

## 3. "Connection refused"

**Symptoms:** Cannot connect to a service via network (e.g., SSH, HTTP).

**Diagnosis & Solutions:**
- **Is the service running?** Check with `systemctl status [service]` or `ps aux`.
- **Is it listening on the correct IP/Port?** Verify with `ss -tlnp` or `lsof -i tcp:port`. It might be listening only on `127.0.0.1` instead of `0.0.0.0`.
- **Is a firewall blocking it?** Check `iptables -L`, `ufw status`, or `firewalld-cmd --list-all`.

## 4. "Command not found"

**Symptoms:** Typing a command results in an error, even if the software is installed.

**Diagnosis & Solutions:**
- The binary is not in your `$PATH` environment variable. Check `echo $PATH`.
- Find the binary manually (e.g., `find / -name mycommand`) and use the absolute path (e.g., `/opt/myapp/bin/mycommand`).
- The package isn't actually installed. Reinstall or verify using your package manager (`apt`, `yum`, etc.).

## 5. "Read-only file system"

**Symptoms:** Cannot create or modify files; the filesystem behaves as if it's locked.

**Diagnosis & Solutions:**
- The kernel remounts filesystems as read-only when it detects disk corruption or hardware failure to prevent further damage.
- Check `dmesg -T` immediately for I/O errors or SCSI layer issues.
- You will likely need to run `fsck` (filesystem check) on the partition from a live CD or rescue mode, and potentially replace failing hardware.
