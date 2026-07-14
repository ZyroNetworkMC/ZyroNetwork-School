---
title: Building a DNS Server
description: Learn how to set up an authoritative and caching DNS server using BIND9.
---

# Building a DNS Server

The Domain Name System (DNS) is the phonebook of the Internet. Setting up your own DNS server gives you control over local network resolution and caching.

## Concepts
- **BIND9:** The most widely used DNS software on the Internet.
- **Zone Files:** Text files that contain mappings between domain names and IP addresses.
- **Forwarding:** Sending unresolved DNS queries to external servers like Google (8.8.8.8) or Cloudflare (1.1.1.1).

## Step-by-step Guide

### 1. Install BIND9
```bash
sudo apt update
sudo apt install bind9 bind9utils bind9-doc -y
```

### 2. Configure Local Caching DNS
Edit `/etc/bind/named.conf.options`:
```text
acl "trusted" [
    127.0.0.0/8;
    192.168.1.0/24;
];

options [
    directory "/var/cache/bind";
    recursion yes;
    allow-query [ trusted; ];
    forwarders [
        1.1.1.1;
        8.8.8.8;
    ];
    dnssec-validation auto;
    listen-on-v6 [ any; ];
];
```

### 3. Restart BIND9
```bash
sudo systemctl restart bind9
sudo systemctl enable bind9
```

## Best Practices
- **ACLs (Access Control Lists):** Only allow trusted IPs to query your DNS server to prevent DNS amplification attacks.
- **DNSSEC:** Enable DNSSEC to protect against DNS spoofing.
- **Redundancy:** Always set up a secondary (slave) DNS server for high availability.
