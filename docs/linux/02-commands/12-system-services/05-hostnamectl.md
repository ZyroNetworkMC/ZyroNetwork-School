---
title: hostnamectl
description: Control the system hostname.
---

# `hostnamectl` command

## Detailed Explanation
`hostnamectl` is a tool provided by systemd used to query and change the system hostname and related settings. It provides a standardized way to manage hostnames across different Linux distributions, replacing the need to manually edit files like `/etc/hostname` and `/etc/hosts`.

## Basic Syntax
```bash
hostnamectl [command]
```

## Common Commands
| Command | Description |
|---|---|
| `status` | Show current hostname settings (default behavior). |
| `set-hostname [NAME]`| Set the system hostname to `[NAME]`. |
| `set-icon-name [NAME]`| Set icon name for host. |
| `set-chassis [NAME]` | Set chassis type for host (e.g., desktop, laptop, server). |

## Real-world Examples

**View the current system hostname and system information:**
```bash
hostnamectl
```
*(or `hostnamectl status`)*

**Change the system hostname to "webserver-01":**
```bash
sudo hostnamectl set-hostname webserver-01
```

**Set the chassis type to "server":**
```bash
sudo hostnamectl set-chassis server
```
