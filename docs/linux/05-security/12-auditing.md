---
title: Auditing and Monitoring
description: Tracking system events and user actions.
---

# Auditing and Monitoring

To maintain a secure system, you must know what is happening on it. Auditing involves recording system events, while monitoring involves actively watching for anomalies.

## Auditd (Linux Audit Daemon)

`auditd` is the userspace component to the Linux Auditing System. It allows administrators to track security-relevant information on the system, such as file access, system calls, and command execution.

### Installation and Basic Configuration

```bash
sudo apt install auditd audispd-plugins
```
Rules are placed in `/etc/audit/rules.d/`.

### Example Rules

```bash
# Audit access to the shadow file (where password hashes are stored)
-w /etc/shadow -p wa -k shadow_changes

# Audit execution of the chmod command
-a always,exit -F arch=b64 -S chmod -k perm_changes
```
Apply rules with `sudo augenrules --load`.

### Searching Logs

Use `ausearch` to find events.
```bash
# Search for events related to our shadow_changes key
sudo ausearch -k shadow_changes
```
Use `aureport` for summary reports.
```bash
sudo aureport --login
```

## Monitoring Best Practices

- **Centralized Logging**: Don't keep logs only on the local machine. Send them to a remote log server (like ELK Stack or Graylog) so attackers cannot delete their tracks.
- **File Integrity Monitoring (FIM)**: Tools like AIDE (Advanced Intrusion Detection Environment) create a database of file hashes and alert you if critical system files change unexpectedly.
