---
title: tcpdump
description: Dump traffic on a network.
---

# `tcpdump` command

## Detailed Explanation
`tcpdump` is a powerful command-line packet analyzer. It allows the user to display TCP/IP and other packets being transmitted or received over a network to which the computer is attached. It is an essential tool for network troubleshooting and security analysis. Note: `tcpdump` usually requires root privileges.

## Basic Syntax
```bash
tcpdump [ -i interface ] [ options ] [ expression ]
```

## Common Flags/Options
| Option | Description |
|---|---|
| `-i <interface>` | Listen on a specific interface. If unspecified, it usually picks the lowest numbered, configured up interface. |
| `-n` | Don't convert addresses (i.e., host addresses, port numbers, etc.) to names. |
| `-nn` | Don't resolve hostnames OR port names (highly recommended for performance). |
| `-c <count>` | Exit after receiving `<count>` packets. |
| `-w <file>` | Write the raw packets to a file (PCAP format, readable by Wireshark). |
| `-r <file>` | Read packets from a saved file. |
| `-A` | Print each packet (minus its link level header) in ASCII. Useful for capturing web pages or plain-text credentials. |

## Common Expressions
*   `host <IP>`: Traffic to/from an IP.
*   `src <IP>`, `dst <IP>`: Traffic from/to an IP.
*   `port <number>`: Traffic on a specific port.
*   `net <network/CIDR>`: Traffic from a specific subnet.
*   `tcp`, `udp`, `icmp`: Filter by protocol.

## Real-world Examples

**Capture traffic on a specific interface (e.g., eth0):**
```bash
sudo tcpdump -i eth0
```

**Capture traffic and don't resolve hostnames/ports (faster):**
```bash
sudo tcpdump -i eth0 -nn
```

**Capture traffic only on port 80 (HTTP):**
```bash
sudo tcpdump -i eth0 port 80
```

**Capture traffic to and from a specific IP address:**
```bash
sudo tcpdump host 192.168.1.50
```

**Capture 100 packets and save them to a file for later analysis:**
```bash
sudo tcpdump -i eth0 -c 100 -w capture.pcap
```

**Read packets from a saved PCAP file:**
```bash
tcpdump -r capture.pcap
```
