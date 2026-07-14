---
title: ping
description: Send ICMP ECHO_REQUEST to network hosts.
---

# `ping` command

## Detailed Explanation
The `ping` command is a fundamental diagnostic tool used to test the reachability of a host on an Internet Protocol (IP) network. It works by sending ICMP (Internet Control Message Protocol) Echo Request messages to the target host and waiting for an ICMP Echo Reply.

## Basic Syntax
```bash
ping [options] destination
```

## Common Flags/Options
| Option | Description |
|---|---|
| `-c <count>` | Stop after sending the specified number of packets. |
| `-i <interval>` | Wait a specified number of seconds between sending each packet. |
| `-t <ttl>` | Set the IP Time to Live (TTL) value. |
| `-W <timeout>` | Time to wait for a response, in seconds. |
| `-q` | Quiet output. Nothing is displayed except summary lines. |

## Real-world Examples

**Ping a host continuously (until interrupted with Ctrl+C):**
```bash
ping google.com
```

**Ping a host with exactly 4 packets:**
```bash
ping -c 4 google.com
```

**Ping a host with a specific interval (e.g., 2 seconds):**
```bash
ping -i 2 192.168.1.1
```

**Ping an IP address to check local network connectivity:**
```bash
ping 192.168.1.254
```
