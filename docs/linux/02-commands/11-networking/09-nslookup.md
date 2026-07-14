---
title: nslookup
description: Query Internet name servers interactively.
---

# `nslookup` command

## Detailed Explanation
`nslookup` (name server lookup) is a network administration command-line tool for querying the Domain Name System (DNS) to obtain domain name or IP address mapping, or other DNS records. It operates in two modes: interactive and non-interactive.

## Basic Syntax
```bash
nslookup [options] [domain-name] [server]
```

## Common Flags/Options
| Option | Description |
|---|---|
| `-querytype=<type>` | Specify the DNS record type to query (e.g., A, MX, NS, TXT). |
| `-timeout=<seconds>` | Set the timeout for a query. |
| `-debug` | Show debugging information for the query. |

## Real-world Examples

**Find the IP address of a domain (A record):**
```bash
nslookup google.com
```

**Reverse DNS lookup (find domain from IP):**
```bash
nslookup 8.8.8.8
```

**Query for MX (Mail Exchange) records:**
```bash
nslookup -querytype=MX google.com
```

**Query a specific DNS server (e.g., Cloudflare's 1.1.1.1):**
```bash
nslookup example.com 1.1.1.1
```
