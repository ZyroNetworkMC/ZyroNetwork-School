---
title: Introduction to Firewalls
description: Overview of how firewalls work in Linux.
---

# Introduction to Firewalls

A firewall is a network security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules. In Linux, firewalls are typically implemented within the kernel via Netfilter, and managed by user-space tools like iptables, UFW, or firewalld.

## How Firewalls Work

Firewalls analyze network packets and compare them to a set of rules. Depending on the rules, the firewall will:
- **Accept**: Allow the packet to pass.
- **Drop**: Silently discard the packet. The sender receives no response.
- **Reject**: Discard the packet but send an error response back to the sender.

## Types of Firewalls

1. **Packet Filtering**: Inspects packets in isolation. Fast but less secure.
2. **Stateful Inspection**: Tracks the state of active connections and makes decisions based on the context of the traffic. Linux firewalls are primarily stateful.

## Why You Need a Firewall

- **Block Unauthorized Access**: Prevent attackers from reaching exposed services.
- **Limit Exposure**: Only allow traffic on necessary ports (e.g., allow 80/443 for web traffic, block everything else).
- **Rate Limiting**: Protect against brute-force attacks by limiting connection rates.

## Choosing a Tool

- **UFW (Uncomplicated Firewall)**: Best for beginners and standard server setups.
- **iptables / nftables**: Best for advanced users needing complex routing and NAT rules.
- **firewalld**: Default on Red Hat/CentOS systems, uses a zone-based approach.
