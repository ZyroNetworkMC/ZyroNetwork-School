---
title: SSH Security
description: Hardening your SSH server configuration.
---

# SSH Security

Secure Shell (SSH) is the standard method for managing Linux servers remotely. Because it provides direct access to a system's command line, it is a primary target for attackers. Hardening your SSH configuration is mandatory.

## SSH Configuration File

The main configuration file is `/etc/ssh/sshd_config`. After making changes, always restart the SSH service (`sudo systemctl restart sshd`).

## Key Hardening Steps

### 1. Disable Root Login
Attackers know the `root` username exists. Force users to log in with a standard account and use `sudo`.
```text
PermitRootLogin no
```

### 2. Disable Password Authentication
Use SSH Keys instead. Passwords can be brute-forced; cryptographic keys cannot.
```text
PasswordAuthentication no
```

### 3. Change Default Port (Optional)
Changing the port from 22 to something non-standard (e.g., 2222) won't stop a targeted attack, but it drastically reduces log spam from automated botnets.
```text
Port 2222
```

### 4. Allow Specific Users Only
Restrict SSH access to only the users who actually need it.
```text
AllowUsers alice bob
```

## SSH Keys

Always use ED25519 or RSA (4096-bit) keys.
```bash
# Generate a key on your local machine
ssh-keygen -t ed25519 -C "admin@myserver"

# Copy the public key to the server
ssh-copy-id user@server_ip
```

## Additional Protections

- Install **Fail2Ban** to block IPs that fail authentication repeatedly.
- Consider **Two-Factor Authentication (2FA)** using Google Authenticator PAM module for critical servers.
