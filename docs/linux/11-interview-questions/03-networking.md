---
title: Linux Networking Interview Questions
description: Interview questions covering Linux network configuration, troubleshooting, and protocols.
---

# Linux Networking Interview Questions

Networking knowledge is essential for configuring servers and troubleshooting connectivity issues.

## Core Questions

### 1. How do you check open ports on a Linux server?
You can use `netstat` or the newer `ss` command.
```bash
ss -tuln
# or
netstat -tuln
```
Flags: `-t` (TCP), `-u` (UDP), `-l` (listening), `-n` (numeric ports/IPs).

### 2. What is the purpose of `/etc/hosts` and `/etc/resolv.conf`?
- **/etc/hosts:** Used for local DNS resolution. It maps IP addresses to hostnames locally, bypassing external DNS servers.
- **/etc/resolv.conf:** Configures the system's DNS resolver, specifying which nameservers to query for domain resolution.

### 3. How do you troubleshoot network connectivity?
1. Check interface status: `ip a`
2. Test local gateway: `ping <gateway_ip>`
3. Test internet routing: `ping 8.8.8.8` or `traceroute 8.8.8.8`
4. Test DNS resolution: `dig google.com` or `nslookup google.com`

## Practical Examples

**Changing an IP address temporarily:**
```bash
sudo ip addr add 192.168.1.50/24 dev eth0
```

## Best Practices
- **Modern Tools:** Mention modern `iproute2` commands (`ip a`, `ss`) over deprecated `net-tools` (`ifconfig`, `netstat`) to show up-to-date knowledge.
- **Methodology:** When asked how to troubleshoot, outline a systematic step-by-step approach from OSI layer 1 up to layer 7.
