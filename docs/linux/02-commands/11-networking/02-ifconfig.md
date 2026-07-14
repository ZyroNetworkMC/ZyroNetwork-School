---
title: ifconfig
description: Configure a network interface.
---

# `ifconfig` command

## Detailed Explanation
`ifconfig` (interface configuration) is a legacy command-line utility used for network interface configuration, tuning, and debugging in Unix-like operating systems. It has been officially deprecated in most modern Linux distributions in favor of the `ip` command, but it is still widely recognized.

## Basic Syntax
```bash
ifconfig [interface]
ifconfig interface [options] [address]
```

## Common Flags/Options
| Option | Description |
|---|---|
| `-a` | Display all interfaces, including those that are down. |
| `up` | Activate the specified network interface. |
| `down` | Deactivate the specified network interface. |
| `promisc` | Enable promiscuous mode on the interface. |
| `netmask <addr>` | Set the IP network mask for the interface. |

## Real-world Examples

**Display information for all active interfaces:**
```bash
ifconfig
```

**Display information for a specific interface:**
```bash
ifconfig eth0
```

**Bring an interface down:**
```bash
sudo ifconfig eth0 down
```

**Bring an interface up:**
```bash
sudo ifconfig eth0 up
```

**Assign an IP address and netmask:**
```bash
sudo ifconfig eth0 192.168.1.100 netmask 255.255.255.0
```
