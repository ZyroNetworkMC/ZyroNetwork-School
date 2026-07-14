---
title: netstat
description: Print network connections, routing tables, interface statistics, masquerade connections, and multicast memberships.
---

# `netstat` command

## Detailed Explanation
`netstat` (network statistics) is a command-line tool that displays network connections for the Transmission Control Protocol (both incoming and outgoing), routing tables, and a number of network interface and network protocol statistics. It is largely considered obsolete in modern Linux and replaced by the `ss` and `ip` commands.

## Basic Syntax
```bash
netstat [options]
```

## Common Flags/Options
| Option | Description |
|---|---|
| `-t` | Show TCP connections. |
| `-u` | Show UDP connections. |
| `-l` | Show only listening sockets. |
| `-n` | Show numerical addresses instead of trying to determine symbolic host, port or user names. |
| `-p` | Show the PID and name of the program to which each socket belongs. |

## Real-world Examples

**Display all active listening ports:**
```bash
netstat -l
```

**Display all listening TCP ports and their associated processes:**
```bash
sudo netstat -tlnp
```

**Display all listening UDP ports:**
```bash
netstat -ulnp
```

**Display the kernel routing table:**
```bash
netstat -rn
```

**Display network interface statistics:**
```bash
netstat -i
```
