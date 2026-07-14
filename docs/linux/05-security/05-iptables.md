---
title: Iptables
description: Advanced firewall management using iptables.
---

# Iptables

`iptables` is a user-space utility program that allows a system administrator to configure the IP packet filter rules of the Linux kernel firewall, implemented as different Netfilter modules. While newer systems are migrating to `nftables`, `iptables` remains widely used and essential to understand.

## Architecture

Iptables uses **Tables**, which contain **Chains**, which in turn contain **Rules**.

### Main Tables
- **Filter**: The default table, used for standard packet filtering.
- **NAT**: Used for Network Address Translation (e.g., port forwarding).
- **Mangle**: Used for specialized packet alteration.

### Built-in Chains (Filter Table)
- **INPUT**: For packets destined for the local system.
- **OUTPUT**: For packets originating from the local system.
- **FORWARD**: For packets routed through the local system.

## Basic Commands

```bash
# List current rules
sudo iptables -L -v

# Allow incoming SSH (port 22)
sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT

# Allow established/related connections
sudo iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT

# Set default policy to DROP (Caution: Do this last!)
sudo iptables -P INPUT DROP
```

## Best Practices

- **Order Matters**: Rules are processed top-down. Put most frequently matched rules or critical ALLOW rules at the top.
- **Persistence**: Iptables rules are lost on reboot. Use `iptables-persistent` (Debian/Ubuntu) or `iptables-save`/`iptables-restore` to save them.
- **Be Careful**: If you configure iptables remotely, make sure you don't lock yourself out of SSH!
