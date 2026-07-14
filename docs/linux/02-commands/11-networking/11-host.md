---
title: host
description: DNS lookup utility.
---

# `host` command

## Detailed Explanation
`host` is a simple utility for performing DNS lookups. It is normally used to convert names to IP addresses and vice versa. When no arguments or options are given, `host` prints a short summary of its command line arguments and options.

## Basic Syntax
```bash
host [options] {name} [server]
```

## Common Flags/Options
| Option | Description |
|---|---|
| `-t <type>` | Specify the query type (e.g., A, AAAA, MX, NS, TXT). |
| `-a` | "All" - equivalent to `-v -t ANY`. |
| `-v` | Verbose output. |
| `-4` | Use only IPv4 query transport. |
| `-6` | Use only IPv6 query transport. |

## Real-world Examples

**Find the IP address of a domain:**
```bash
host google.com
```

**Find the domain names associated with an IP address (reverse lookup):**
```bash
host 8.8.8.8
```

**Query for specific records (e.g., MX records):**
```bash
host -t MX google.com
```

**Query using a specific DNS server:**
```bash
host example.com 1.1.1.1
```
