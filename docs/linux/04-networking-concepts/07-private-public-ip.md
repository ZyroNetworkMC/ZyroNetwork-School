---
title: Public vs. Private IPs
description: Understand the difference between public IP addresses used on the internet and private IPs used on local networks.
---

# Public vs. Private IPs

Because of the limited number of IPv4 addresses (roughly 4.3 billion), a system was created to allow millions of local networks to function without needing a unique public IP for every single device (like your phone, smart TV, or laptop).

## Private IP Addresses

Private IPs are reserved for use within Local Area Networks (LANs). They are **not routable on the public Internet**. If a router on the Internet sees a packet destined for a private IP, it immediately drops it.

This allows every home and office in the world to use the exact same internal IP schemes without any conflicts.

### The Reserved Private Ranges (RFC 1918)

- **Class A:** `10.0.0.0` to `10.255.255.255` (Often used in enterprise networks and cloud environments like AWS).
- **Class B:** `172.16.0.0` to `172.31.255.255` (Often used in Docker containers and medium networks).
- **Class C:** `192.168.0.0` to `192.168.255.255` (Standard for home routers and small networks).

## Public IP Addresses

Public IPs are universally unique and routable on the Internet. These addresses are controlled by the Internet Assigned Numbers Authority (IANA) and distributed to Internet Service Providers (ISPs).

When you purchase internet service, your ISP assigns a single public IP address to your home router. 

Servers that host websites (like Google or Netflix) have public IP addresses so that anyone in the world can reach them.

## How do Private IPs access the Internet?

If your laptop has a private IP of `192.168.1.5`, and that IP is not allowed on the Internet, how are you reading this page?

The answer is **NAT (Network Address Translation)**.

Your home router acts as a middleman. When your laptop requests a webpage:
1. The request hits your router.
2. The router rewrites the source IP of the request, changing it from your private IP (`192.168.1.5`) to the router's public IP (e.g., `203.0.113.50`).
3. The router sends the request to the Internet.
4. When the web server replies, it replies to the public IP (`203.0.113.50`).
5. The router receives the reply, looks at its NAT table to see who originally asked for it, and forwards the data back to `192.168.1.5`.

## Checking Your IPs in Linux

- **Find your Private IP:** Run `ip addr` or `hostname -I`.
- **Find your Public IP:** You have to ask a server on the Internet what IP it sees. Run `curl ifconfig.me` or `curl icanhazip.com`.
