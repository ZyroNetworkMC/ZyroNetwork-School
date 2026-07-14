---
title: telnet
description: User interface to the TELNET protocol.
---

# `telnet` command

## Detailed Explanation
The `telnet` command is used to communicate with another host using the TELNET protocol. It provides an interactive, bidirectional text-oriented communication facility using a virtual terminal connection over an 8-bit byte oriented data connection. Due to its lack of encryption (everything, including passwords, is sent in plaintext), it is highly insecure and has been largely replaced by SSH for remote login. However, it remains a useful tool for testing connectivity to specific ports.

## Basic Syntax
```bash
telnet [host [port]]
```

## Common Flags/Options
Usually, you only need the host and optionally the port.

| Option | Description |
|---|---|
| `-4` | Force IPv4 address resolution. |
| `-6` | Force IPv6 address resolution. |

## Real-world Examples

**Connect to a host on the default telnet port (23):**
```bash
telnet 192.168.1.1
```

**Test if a specific port is open on a remote server (e.g., a web server on port 80):**
```bash
telnet google.com 80
```
*(If it connects, the port is open. If it says "Connection refused", it is closed. Type `Ctrl+]` then `quit` to exit).*

**Test connectivity to an SMTP server (port 25):**
```bash
telnet mail.example.com 25
```
