---
title: Firewalls
description: Discover the role of firewalls in network security and how they are implemented in Linux.
---

# Firewalls

A firewall is a network security device (hardware or software) that monitors and filters incoming and outgoing network traffic based on an organization's previously established security policies. It acts as a barrier between a trusted internal network and an untrusted external network, like the Internet.

## How Firewalls Work

Firewalls analyze the packet headers of network traffic, operating primarily at Layer 3 (Network - IP addresses) and Layer 4 (Transport - Ports).

They make decisions based on **Rules**. A typical firewall rule looks like:
- **ALLOW** incoming traffic on TCP **Port 80** (HTTP) and **Port 443** (HTTPS).
- **DENY** incoming traffic on TCP **Port 22** (SSH) from outside IP addresses.

### Stateful vs. Stateless Firewalls

- **Stateless Firewalls:** Inspect each packet individually. They don't know the context. If you allow returning HTTP traffic, a stateless firewall requires a specific rule for that.
- **Stateful Firewalls:** Track the state of active connections. If your internal server initiates an outbound connection, a stateful firewall will automatically allow the returning traffic for that specific connection, making configuration much easier and more secure.

## Firewalls in Linux

Linux has powerful firewall capabilities built directly into the kernel, historically handled by `iptables`, and in modern systems, `nftables`.

Because `iptables` syntax can be highly complex, most Linux distributions provide higher-level frontends to manage the firewall easily.

### 1. UFW (Uncomplicated Firewall)

UFW is the default firewall management tool for Ubuntu and Debian-based systems. It is designed to be extremely easy to use.

```bash
# Enable UFW
sudo ufw enable

# Allow SSH traffic
sudo ufw allow 22/tcp

# Allow Web traffic
sudo ufw allow http
sudo ufw allow https

# Check status
sudo ufw status
```

### 2. Firewalld

Firewalld is the default tool for Red Hat-based systems (RHEL, CentOS, Fedora). It uses the concept of "zones" (e.g., public, home, trusted) to apply different sets of rules depending on the network you are connected to.

```bash
# Allow HTTP traffic in the public zone permanently
sudo firewall-cmd --zone=public --add-service=http --permanent

# Reload the firewall to apply changes
sudo firewall-cmd --reload
```

## Best Practices

- **Default Deny:** The standard security posture is to block *all* incoming traffic by default, and then explicitly allow only the specific ports/services you need.
- **Management Access:** Be extremely careful when configuring firewalls remotely over SSH. Always ensure your SSH rule is in place before enabling the firewall, otherwise you will lock yourself out of your server!
