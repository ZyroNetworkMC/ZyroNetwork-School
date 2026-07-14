---
title: UFW (Uncomplicated Firewall)
description: Simplified firewall management for Ubuntu and Debian systems.
---

# UFW (Uncomplicated Firewall)

UFW is designed to be an intuitive, user-friendly interface for managing iptables firewall rules. It is the default firewall configuration tool for Ubuntu and is highly recommended for users who do not need the complex routing capabilities of raw iptables.

## Basic Concepts

UFW operates on a default-deny policy for incoming traffic and a default-allow policy for outgoing traffic. You then explicitly open the ports you need.

## Essential Commands

### Enabling and Status
```bash
# Check status
sudo ufw status verbose

# Enable UFW (WARNING: Ensure SSH is allowed first if working remotely!)
sudo ufw enable

# Disable UFW
sudo ufw disable
```

### Allowing and Denying Traffic
```bash
# Allow SSH (Port 22)
sudo ufw allow ssh
# Or by port number
sudo ufw allow 22/tcp

# Allow HTTP and HTTPS
sudo ufw allow http
sudo ufw allow https

# Deny a specific IP address
sudo ufw deny from 203.0.113.50

# Allow a specific IP to a specific port
sudo ufw allow from 198.51.100.5 to any port 3306
```

### Managing Rules
```bash
# List rules with numbers
sudo ufw status numbered

# Delete rule number 2
sudo ufw delete 2
```

## Best Practices

- Before enabling UFW on a remote server, always double-check that you have allowed SSH traffic, otherwise your connection will be dropped immediately.
- Use application profiles (e.g., `ufw allow 'Nginx Full'`) when available, as they handle multiple ports automatically.
