---
title: ssh
description: OpenSSH SSH client (remote login program).
---

# `ssh` command

## Detailed Explanation
`ssh` (Secure Shell) is a program for logging into a remote machine and executing commands on a remote machine. It is intended to replace `rlogin` and `rsh`, and provide secure encrypted communications between two untrusted hosts over an insecure network.

## Basic Syntax
```bash
ssh [options] [user@]hostname [command]
```

## Common Flags/Options
| Option | Description |
|---|---|
| `-p <port>` | Port to connect to on the remote host. |
| `-i <identity_file>`| Selects a file from which the identity (private key) for public key authentication is read. |
| `-X` | Enables X11 forwarding (allows running graphical applications remotely). |
| `-L [bind_address:]port:host:hostport` | Local port forwarding. |
| `-R [bind_address:]port:host:hostport` | Remote port forwarding. |
| `-D [bind_address:]port` | Dynamic application-level port forwarding (SOCKS proxy). |

## Real-world Examples

**Log in to a remote server with a specific username:**
```bash
ssh username@192.168.1.100
```

**Log in using a specific port (e.g., if SSH is running on port 2222):**
```bash
ssh -p 2222 user@example.com
```

**Log in using a specific private key:**
```bash
ssh -i ~/.ssh/my_custom_key user@example.com
```

**Execute a single command remotely without opening a shell:**
```bash
ssh user@example.com "ls -l /var/www"
```

**Create a local SOCKS proxy for tunneling web traffic securely:**
```bash
ssh -D 8080 user@example.com
```
