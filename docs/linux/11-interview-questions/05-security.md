---
title: Linux Security Interview Questions
description: Key questions covering Linux system security, permissions, and firewalls.
---

# Linux Security Interview Questions

Security is paramount. These questions evaluate your understanding of permissions, user management, and system hardening.

## Core Questions

### 1. Explain the Linux file permission model.
Permissions are divided into three types: Read (r=4), Write (w=2), and Execute (x=1).
They apply to three entities: Owner (u), Group (g), and Others (o).
Example: `chmod 755 file` gives read/write/execute to the owner, and read/execute to group and others.

### 2. What is SSH and how do you secure it?
SSH (Secure Shell) is a protocol for secure remote login.
To secure it, you should:
- Disable root login (`PermitRootLogin no` in `/etc/ssh/sshd_config`).
- Disable password authentication (`PasswordAuthentication no`) and mandate SSH keys.
- Change the default port from 22.

### 3. What is a Firewall and what tools do you use in Linux?
A firewall controls incoming and outgoing network traffic.
Common tools include:
- **iptables:** The legacy, powerful filtering framework.
- **ufw (Uncomplicated Firewall):** A user-friendly frontend for iptables used in Ubuntu.
- **firewalld:** The dynamic firewall manager used in RHEL/CentOS.

## Practical Examples

**Securing a directory:**
```bash
sudo chown root:root /secure_data
sudo chmod 700 /secure_data
```

**Basic UFW rule:**
```bash
sudo ufw allow 22/tcp
sudo ufw enable
```

## Best Practices
- **Principle of Least Privilege:** Always emphasize giving users and services only the minimum permissions necessary to function.
- **Auditing:** Mention tools like `auditd` or parsing logs in `/var/log/auth.log` or `/var/log/secure` to monitor security events.
