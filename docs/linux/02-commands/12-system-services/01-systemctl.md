---
title: systemctl
description: Control the systemd system and service manager.
---

# `systemctl` command

## Detailed Explanation
`systemctl` is the central command-line utility for inspecting and managing systemd, the system and service manager for most modern Linux distributions. It is used to start, stop, enable, disable, and check the status of services (daemons), as well as to manage system states (targets).

## Basic Syntax
```bash
systemctl [command] [unit]
```
A "unit" usually ends in `.service` (e.g., `nginx.service`), but the extension can often be omitted.

## Common Commands
| Command | Description |
|---|---|
| `start <service>` | Start a service immediately. |
| `stop <service>` | Stop a service immediately. |
| `restart <service>` | Restart a service. |
| `reload <service>` | Reload the configuration of a service without stopping it. |
| `status <service>` | Show the status of a service (running, stopped, errors, etc.). |
| `enable <service>` | Enable a service to start automatically at boot. |
| `disable <service>`| Disable a service from starting at boot. |
| `is-active <service>`| Check if a service is currently running. |
| `daemon-reload` | Reload systemd manager configuration (required after editing unit files). |

## Real-world Examples

**Check the status of the Nginx web server:**
```bash
systemctl status nginx
```

**Start the Apache service:**
```bash
sudo systemctl start apache2
```

**Enable the SSH service to start on boot:**
```bash
sudo systemctl enable sshd
```

**Reload systemd after modifying a `.service` file:**
```bash
sudo systemctl daemon-reload
```
