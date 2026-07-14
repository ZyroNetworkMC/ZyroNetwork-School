---
title: DNS (Domain Name System)
description: Explore how DNS translates human-readable domain names into machine-readable IP addresses.
---

# DNS (Domain Name System)

The Domain Name System (DNS) is often described as the "phonebook of the Internet." Humans access information online through domain names, like `google.com` or `linux.org`. Web browsers interact through Internet Protocol (IP) addresses. DNS translates domain names to IP addresses so browsers can load internet resources.

## How DNS Works

When you type `www.example.com` into your browser, the following lookup process occurs:

1. **Local Cache:** Your computer checks its local DNS cache to see if it already knows the IP.
2. **Recursive Resolver:** If not found, it asks your ISP's DNS server (or a public one like Google's `8.8.8.8` or Cloudflare's `1.1.1.1`).
3. **Root Nameserver:** If the resolver doesn't know, it asks the Root Server, which directs it to the Top-Level Domain (TLD) server (like the `.com` server).
4. **TLD Nameserver:** The TLD server points the resolver to the Authoritative Nameserver for `example.com`.
5. **Authoritative Nameserver:** This server holds the actual IP address record and returns it to the resolver, which passes it to your computer.

## Common DNS Record Types

- **A Record:** Maps a domain name to an IPv4 address.
- **AAAA Record:** Maps a domain name to an IPv6 address.
- **CNAME:** Maps one domain name to another (an alias). E.g., `www.example.com` might point to `example.com`.
- **MX Record:** Directs email to a mail server.
- **TXT Record:** Holds text information, often used for verifying domain ownership and email security (SPF, DKIM).

## DNS in Linux

In Linux, the file `/etc/resolv.conf` defines which DNS resolvers your system uses.

```text
# Example /etc/resolv.conf
nameserver 8.8.8.8
nameserver 1.1.1.1
```

*(Note: On modern systems like Ubuntu, this file is managed by `systemd-resolved` or NetworkManager, so manual edits might be overwritten).*

### Troubleshooting DNS

Linux provides several command-line tools for testing and querying DNS:

- **`ping example.com`**: The simplest way to see if a name resolves.
- **`dig example.com`**: The standard tool for querying DNS. It returns detailed information about records and lookup times.
- **`nslookup example.com`**: An older, but still common, tool for querying DNS.

```bash
# Get the MX records for a domain using dig
dig example.com MX
```

## Local Resolution via `/etc/hosts`

Before querying DNS servers, Linux checks the local `/etc/hosts` file. You can manually map IPs to hostnames here, which is very useful for local development without needing a real DNS server.

```text
# /etc/hosts
127.0.0.1   localhost
192.168.1.50 dev-server.local
```
