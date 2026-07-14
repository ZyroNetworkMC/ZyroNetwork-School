---
title: Subnetting Basics
description: Learn how to divide larger networks into smaller, more efficient sub-networks using CIDR.
---

# Subnetting Basics

Subnetting is the process of dividing a single, large network into smaller, logically separated networks (subnets). 

## Why Subnet?

1. **Organization & Security:** Separating departments (e.g., HR, Engineering, Guest Wi-Fi) into different subnets allows you to control traffic between them using firewalls.
2. **Performance:** Subnetting reduces the size of broadcast domains. In a massive network, broadcast traffic from all devices can slow down the network.
3. **Address Conservation:** Instead of wasting a whole Class B network (65,000 IPs) for an office of 100 people, subnetting allows you to use exactly what you need.

## CIDR Notation

Classless Inter-Domain Routing (CIDR) is the modern way to represent subnet masks. Instead of writing `255.255.255.0`, CIDR uses a suffix like `/24`.

The number after the slash indicates how many bits in the IP address are fixed for the network portion.

### Common CIDR Examples

- **`/8`** : Mask `255.0.0.0` (16.7 million hosts)
- **`/16`**: Mask `255.255.0.0` (65,534 hosts)
- **`/24`**: Mask `255.255.255.0` (254 hosts)

## How Subnetting Works (An Example)

Let's take a standard `/24` network: `192.168.1.0/24`.
This provides 256 addresses (`0` to `255`). `0` is the network ID, `255` is the broadcast, leaving 254 usable IPs for devices.

What if we want to split this into two smaller subnets of 128 addresses each? We borrow a bit from the host portion, changing our mask to a `/25`.

### Subnet 1 (`192.168.1.0/25`)
- Network ID: `192.168.1.0`
- Usable IPs: `192.168.1.1` to `192.168.1.126` (126 hosts)
- Broadcast: `192.168.1.127`

### Subnet 2 (`192.168.1.128/25`)
- Network ID: `192.168.1.128`
- Usable IPs: `192.168.1.129` to `192.168.1.254` (126 hosts)
- Broadcast: `192.168.1.255`

By changing the mask to `/25`, the router knows that IP `1.10` and IP `1.150` are on entirely different subnets, even though they share the same first three octets.

## Subnetting in the Cloud

If you use AWS (VPC) or Google Cloud, subnetting is a core requirement. You define a large CIDR block for the whole virtual cloud (e.g., `10.0.0.0/16`) and carve out smaller subnets (e.g., `10.0.1.0/24` for web servers, `10.0.2.0/24` for databases).
