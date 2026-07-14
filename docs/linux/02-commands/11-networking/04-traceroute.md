---
title: traceroute
description: Print the route packets trace to network host.
---

# `traceroute` command

## Detailed Explanation
The `traceroute` command displays the path and measuring transit delays of packets across an IP network. It works by sending packets with gradually increasing Time to Live (TTL) values, starting from 1. Each router that handles the packet decrements the TTL by 1. When the TTL reaches zero, the router discards the packet and sends an ICMP "Time Exceeded" message back to the source. This allows `traceroute` to identify every hop along the path.

## Basic Syntax
```bash
traceroute [options] destination
```

## Common Flags/Options
| Option | Description |
|---|---|
| `-n` | Do not resolve IP addresses to their domain names. |
| `-m <max_ttl>` | Specifies the maximum number of hops (max TTL value) traceroute will probe. Default is 30. |
| `-p <port>` | Set the destination port to use. |
| `-q <nqueries>` | Set the number of probes per hop. Default is 3. |
| `-I` | Use ICMP ECHO instead of UDP datagrams. |

## Real-world Examples

**Trace the route to a domain:**
```bash
traceroute google.com
```

**Trace the route without resolving hostnames (faster):**
```bash
traceroute -n example.com
```

**Use ICMP instead of UDP:**
```bash
sudo traceroute -I google.com
```

**Limit the trace to 15 hops:**
```bash
traceroute -m 15 google.com
```
