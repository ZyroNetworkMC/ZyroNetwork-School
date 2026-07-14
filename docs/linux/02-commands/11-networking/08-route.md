---
title: route
description: Show / manipulate the IP routing table.
---

# `route` command

## Detailed Explanation
The `route` command is an older tool used to view and manipulate the IP routing table in Linux. The routing table determines where network traffic is sent based on the destination IP address. While still found on many systems, `route` is considered obsolete and has been superseded by the `ip route` command.

## Basic Syntax
```bash
route [options]
route [add|del] [-net|-host] <target> [netmask <Nm>] [gw <Gw>] [metric <N>] [[dev] <If>]
```

## Common Flags/Options
| Option | Description |
|---|---|
| `-n` | Display numerical addresses instead of trying to resolve hostnames (much faster). |
| `add` | Add a new route. |
| `del` | Delete a route. |
| `-net` | The target is a network. |
| `-host` | The target is a specific host. |
| `gw` | Route packets via a gateway. |

## Real-world Examples

**Display the current routing table:**
```bash
route -n
```

**Add a default gateway:**
```bash
sudo route add default gw 192.168.1.1
```

**Add a route to a specific network:**
```bash
sudo route add -net 10.0.0.0 netmask 255.0.0.0 gw 192.168.1.254
```

**Delete a specific route:**
```bash
sudo route del -net 10.0.0.0 netmask 255.0.0.0
```
