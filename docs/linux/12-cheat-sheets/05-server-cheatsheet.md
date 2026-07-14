---
title: Server Administration Cheat Sheet
description: Quick reference for managing services, processes, and system health.
---

# Server Administration Cheat Sheet

Commands to keep your Linux servers running smoothly.

## Systemd and Services
| Command | Description |
| :--- | :--- |
| `systemctl status nginx` | Check status of nginx. |
| `systemctl start/stop nginx` | Start or stop the service. |
| `systemctl enable nginx` | Enable service to start on boot. |
| `systemctl reload nginx` | Reload configuration without dropping connections. |
| `journalctl -u nginx` | View logs for nginx. |

## Process Management
| Command | Description |
| :--- | :--- |
| `top` or `htop` | Interactive process viewer. |
| `ps aux` | List all running processes. |
| `kill -15 1234` | Gracefully terminate PID 1234. |
| `kill -9 1234` | Forcefully kill PID 1234. |
| `nohup command &` | Run a command immune to hangups in the background. |

## Resource Monitoring
| Command | Description |
| :--- | :--- |
| `free -h` | View RAM usage. |
| `df -h` | View disk mount usage. |
| `du -sh *` | View size of files/folders in current directory. |
| `uptime` | View how long the system has been running and load average. |

## Archives and Compression
```bash
# Create a tarball
tar -czvf archive.tar.gz /path/to/dir

# Extract a tarball
tar -xzvf archive.tar.gz
```
