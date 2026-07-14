---
title: Linux Security Checklist
description: A practical checklist for securing a new Linux deployment.
---

# Linux Security Checklist

When deploying a new Linux server, follow this basic checklist to ensure a solid baseline of security.

## Initial Setup
- [ ] **Create a non-root user:** Give them `sudo` privileges.
- [ ] **Disable root login:** Edit `/etc/ssh/sshd_config` and set `PermitRootLogin no`.
- [ ] **Enforce SSH Keys:** Disable password authentication in SSH (`PasswordAuthentication no`).
- [ ] **Update the system:** Run `apt update && apt upgrade` or `yum update`.
- [ ] **Enable automatic updates:** Install `unattended-upgrades` for critical security patches.

## Networking
- [ ] **Configure a firewall:** Enable UFW or configure iptables to only allow essential ports (e.g., 22, 80, 443).
- [ ] **Install Fail2Ban:** Protect SSH and other exposed services from brute-force attacks.
- [ ] **Disable IPv6 (if unused):** Reduces the attack surface if you aren't routing IPv6 traffic.

## Service Management
- [ ] **Remove unused packages:** Uninstall software you don't need (e.g., `apt purge apache2` if using Nginx).
- [ ] **Check listening ports:** Use `ss -tulpen` to see what services are bound to public interfaces.
- [ ] **Run services as limited users:** Never run a web server or database as root.

## Monitoring
- [ ] **Configure log rotation:** Ensure `logrotate` is active so logs don't fill the disk.
- [ ] **Set up AIDE or RKHunter:** (Optional but recommended) for file integrity monitoring and rootkit detection.

*Note: Security is an ongoing process, not a one-time setup. Regularly audit your systems.*
