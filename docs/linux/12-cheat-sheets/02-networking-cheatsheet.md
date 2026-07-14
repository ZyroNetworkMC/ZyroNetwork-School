---
title: Networking Cheat Sheet
description: Essential commands for Linux network configuration and troubleshooting.
---

# Networking Cheat Sheet

Quick reference for the `iproute2` suite and other networking tools.

## Interface Management
| Command | Description |
| :--- | :--- |
| `ip a` | Show IP addresses of all interfaces. |
| `ip link show` | Show link layer information. |
| `ip link set dev eth0 up` | Bring interface eth0 up. |
| `ip link set dev eth0 down` | Bring interface eth0 down. |

## Routing and Connections
| Command | Description |
| :--- | :--- |
| `ip route show` | Display routing table. |
| `ip route add default via 192.168.1.1` | Set default gateway. |
| `ss -tuln` | Show listening TCP/UDP ports. |
| `ping host` | Send ICMP ECHO_REQUEST to network hosts. |

## DNS and Troubleshooting
| Command | Description |
| :--- | :--- |
| `dig google.com` | Query DNS records. |
| `nslookup google.com` | Query Internet name servers interactively. |
| `traceroute host` | Print the route packets trace to network host. |
| `mtr host` | Network diagnostic tool combining traceroute and ping. |

## Practical Example: Assigning an IP
```bash
sudo ip addr add 10.0.0.5/24 dev eth0
```
