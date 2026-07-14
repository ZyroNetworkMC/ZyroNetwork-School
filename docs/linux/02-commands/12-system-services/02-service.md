---
title: service
description: Run a System V init script.
---

# `service` command

## Detailed Explanation
The `service` command is a utility to run a System V init script. In older Linux distributions (pre-systemd), this was the primary way to start and stop background services. On modern systemd-based systems, `service` is largely a wrapper that passes commands to `systemctl`, retaining backward compatibility for administrators used to the old syntax.

## Basic Syntax
```bash
service <service_name> <command>
```
Commands are typically `start`, `stop`, `restart`, `reload`, or `status`.

## Common Commands
| Command | Description |
|---|---|
| `start` | Start the specified service. |
| `stop` | Stop the specified service. |
| `restart` | Restart the service. |
| `status` | Print the current status of the service. |
| `--status-all`| Print the status of all services. |

## Real-world Examples

**Check the status of the SSH daemon:**
```bash
service ssh status
```
*(On a systemd system, this usually transparently calls `systemctl status ssh.service`)*

**Restart the Apache web server:**
```bash
sudo service apache2 restart
```

**List the status of all available services:**
```bash
service --status-all
```
