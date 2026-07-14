---
title: NAT (Network Address Translation)
description: Dive deeper into Network Address Translation and how it maps private to public IPs.
---

# NAT (Network Address Translation)

Network Address Translation (NAT) is the process where a network device, usually a firewall or router, assigns a public address to a computer (or group of computers) inside a private network. 

## The Purpose of NAT

As mentioned in the Public vs. Private IP section, NAT was invented primarily to slow down the depletion of IPv4 addresses. Without NAT, every single device in the world would need a unique public IP address. With NAT, an entire office building of 1,000 devices can share a single public IP address.

## Types of NAT

### 1. Static NAT
Maps a single private IP address to a single public IP address (1-to-1). This is primarily used for servers that need a consistent external address but are located behind a firewall.

### 2. Dynamic NAT
Maps a private IP address to a public IP address from a pool of available public IPs. When a device requests internet access, the router grabs an available public IP from the pool.

### 3. PAT (Port Address Translation) / NAT Overload
This is the most common form of NAT and is what your home router uses. It maps **multiple** private IP addresses to a **single** public IP address (Many-to-1). 

#### How PAT Works

If multiple internal PCs use the same public IP, how does the router know which PC to send the returning traffic to? It uses **Ports**.

1. PC1 (`192.168.1.5`) opens a connection on source port `50001`.
2. PC2 (`192.168.1.6`) opens a connection on source port `50002`.
3. The router intercepts both. It translates the source IP of both to its public IP, but it keeps track of the source ports in its NAT Table.
4. When the external web server replies to the public IP on port `50001`, the router checks its table, sees that `50001` belongs to PC1, and forwards the packet to `192.168.1.5`.

## NAT in Linux (iptables)

Linux machines can act as routers and perform NAT using `iptables`.

If a Linux server has two interfaces (`eth0` connected to the internet, `eth1` connected to a private LAN), you can enable PAT (called Masquerading in Linux) with this command:

```bash
# Enable IP Forwarding in the kernel
sudo sysctl -w net.ipv4.ip_forward=1

# Add the masquerade rule
sudo iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE
```
This single rule turns a Linux machine into a fully functional NAT router for the local network.
