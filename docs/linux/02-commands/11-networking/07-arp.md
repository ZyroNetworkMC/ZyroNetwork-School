---
title: arp
description: Manipulate the system ARP cache.
---

# `arp` command

## Detailed Explanation
The `arp` command is used to display or modify the Address Resolution Protocol (ARP) cache. The ARP cache translates IP addresses into MAC (Media Access Control) addresses, which is necessary for communication on a local network segment. Like many older tools, it has been largely superseded by the `ip neigh` command.

## Basic Syntax
```bash
arp [options] [hostname]
```

## Common Flags/Options
| Option | Description |
|---|---|
| `-a` | Display current ARP cache entries. |
| `-d <hostname>` | Delete the ARP entry for the specified host. |
| `-s <hostname> <hw_addr>`| Add a static ARP entry associating an IP address with a MAC address. |
| `-n` | Show numerical addresses instead of trying to resolve hostnames. |
| `-i <if>` | Select a specific interface. |

## Real-world Examples

**View the current ARP cache:**
```bash
arp -a
```

**View the ARP cache with numeric IP addresses:**
```bash
arp -an
```

**Add a static ARP entry:**
```bash
sudo arp -s 192.168.1.100 00:11:22:33:44:55
```

**Delete an ARP entry:**
```bash
sudo arp -d 192.168.1.100
```
