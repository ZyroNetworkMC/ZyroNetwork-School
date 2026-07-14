---
title: Fail2Ban
description: Protecting your server from brute-force attacks.
---

# Fail2Ban

Fail2Ban is an intrusion prevention software framework that protects computer servers from brute-force attacks. It works by monitoring log files (like `/var/log/auth.log` or `/var/log/secure`) for too many failed login attempts and temporarily banning the offending IP address by updating the system's firewall rules.

## How It Works

Fail2Ban uses **Jails**. A jail is a combination of a **Filter** (a regex that matches failed logins in a log file) and an **Action** (the command executed to ban the IP, usually an iptables or UFW command).

## Configuration

The main configuration files are located in `/etc/fail2ban/`. 
**Crucial Rule**: Never modify `jail.conf` directly. Instead, create a `jail.local` file. `jail.local` overrides `jail.conf` and will survive package updates.

### Example `jail.local` configuration:

```ini
[DEFAULT]
# Ban IPs for 1 hour (3600 seconds)
bantime = 3600
# A host is banned if it has generated 'maxretry' during the last 'findtime'
findtime = 600
maxretry = 5
# Whitelist your own IP so you don't ban yourself
ignoreip = 127.0.0.1/8 192.168.1.100

[sshd]
enabled = true
port = ssh
filter = sshd
logpath = /var/log/auth.log
maxretry = 3
```

## Useful Commands

```bash
# Start and enable the service
sudo systemctl enable --now fail2ban

# Check overall status
sudo fail2ban-client status

# Check status of a specific jail (e.g., sshd)
sudo fail2ban-client status sshd

# Manually unban an IP address
sudo fail2ban-client set sshd unbanip 203.0.113.50
```
