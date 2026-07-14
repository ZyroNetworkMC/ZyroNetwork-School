---
title: dig
description: DNS lookup utility.
---

# `dig` command

## Detailed Explanation
`dig` (Domain Information Groper) is a flexible command-line tool for interrogating DNS name servers. It performs DNS lookups and displays the answers that are returned from the name servers. Most DNS administrators use `dig` to troubleshoot DNS problems because of its flexibility, ease of use, and clarity of output.

## Basic Syntax
```bash
dig [@server] [domain] [type] [options]
```

## Common Flags/Options
| Option | Description |
|---|---|
| `+short` | Provide a terse answer (just the data). |
| `+trace` | Trace the delegation path from the root name servers to the destination. |
| `+noall +answer` | Hide all output except the actual answer section. |
| `-x <ip_address>` | Perform a reverse DNS lookup. |

## Real-world Examples

**Standard DNS lookup (A record):**
```bash
dig example.com
```

**Query a specific record type (e.g., TXT):**
```bash
dig example.com TXT
```

**Get only the IP address (short output):**
```bash
dig +short example.com
```

**Query using a specific DNS server (e.g., Google's 8.8.8.8):**
```bash
dig @8.8.8.8 example.com
```

**Perform a reverse lookup:**
```bash
dig -x 8.8.8.8
```
