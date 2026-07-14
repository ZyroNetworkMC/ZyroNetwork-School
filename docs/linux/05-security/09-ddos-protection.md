---
title: DDoS Protection
description: Strategies for mitigating Distributed Denial of Service attacks.
---

# DDoS Protection

A Distributed Denial of Service (DDoS) attack attempts to make a server unavailable by overwhelming it with a flood of internet traffic from multiple sources. While mitigating large-scale DDoS attacks often requires hardware-level or network-level intervention by your ISP, there are steps you can take at the OS level.

## OS-Level Mitigation (Kernel Tuning)

You can adjust kernel parameters in `/etc/sysctl.conf` to handle connection floods better, specifically SYN floods.

```ini
# Enable SYN cookies
net.ipv4.tcp_syncookies = 1

# Increase the max number of half-open connections
net.ipv4.tcp_max_syn_backlog = 2048

# Decrease the time before keeping idle connections alive
net.ipv4.tcp_keepalive_time = 300
```
Run `sudo sysctl -p` to apply changes.

## Rate Limiting with Firewalls

You can use `iptables` or `ufw` to limit the rate of incoming connections.

```bash
# UFW example: limit connections to SSH (helps against brute-force, not just DDoS)
sudo ufw limit ssh

# iptables example: limit HTTP traffic to 20 connections per minute per IP
sudo iptables -A INPUT -p tcp --dport 80 -m state --state NEW -m recent --set
sudo iptables -A INPUT -p tcp --dport 80 -m state --state NEW -m recent --update --seconds 60 --hitcount 20 -j DROP
```

## External Protection Services

OS-level tuning will only protect you against small attacks. For real protection, you must use reverse proxies or edge protection networks:
- **Cloudflare**: Acts as a shield in front of your web server, absorbing malicious traffic.
- **AWS Shield / Google Cloud Armor**: Infrastructure-level protection if you are hosted in the cloud.
- **Hardware Firewalls**: Dedicated appliances placed before your server in a datacenter.
