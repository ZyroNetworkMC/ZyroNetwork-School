---
title: DHCP (Dynamic Host Configuration Protocol)
description: Learn how networks automatically assign IP addresses and configurations to devices.
---

# DHCP (Dynamic Host Configuration Protocol)

Dynamic Host Configuration Protocol (DHCP) is a network management protocol used to dynamically assign an IP address and other network configuration parameters to each device on a network so they can communicate.

Without DHCP, a network administrator would have to manually configure the IP address, subnet mask, gateway, and DNS servers on every single device.

## The DORA Process

When a new device connects to a network (like turning on your laptop's Wi-Fi), it goes through a four-step process known as DORA to get an IP address.

1. **Discover:** The client device broadcasts a `DHCPDISCOVER` message to the network, essentially shouting, "Are there any DHCP servers here? I need an IP!"
2. **Offer:** Any listening DHCP server responds with a `DHCPOFFER` message, offering an available IP address.
3. **Request:** The client replies with a `DHCPREQUEST` message, accepting the offered IP address.
4. **Acknowledge:** The server sends a `DHCPACK` (Acknowledgment) confirming the IP has been reserved for that client, along with lease time and network settings.

## What Does DHCP Provide?

A DHCP server doesn't just hand out IP addresses. It provides a complete network configuration:
- **IP Address:** The unique address for the client.
- **Subnet Mask:** Defines the network boundaries.
- **Default Gateway:** The IP address of the router, telling the client where to send traffic bound for the Internet.
- **DNS Servers:** The IP addresses of the DNS servers so the client can resolve domain names.

## DHCP Leases

IP addresses are not assigned permanently; they are "leased." 
- The lease time defines how long the client can use the IP address (e.g., 24 hours).
- When the lease is halfway expired, the client automatically attempts to renew it with the server.
- If a client leaves the network and the lease expires, the server puts the IP back into the pool to be assigned to someone else.

## Static IPs vs. DHCP

For standard user devices (phones, laptops), DHCP is ideal. However, for servers (web servers, database servers, printers), you generally want a **Static IP**. 
If a server's IP address changes, clients won't know how to reach it. 

You can configure static IPs by:
1. Manually setting it in the server's OS (e.g., via Linux `netplan` or `/etc/network/interfaces`).
2. Creating a **DHCP Reservation** on the router, which tells the DHCP server to always assign the same specific IP to the server's MAC address.

## DHCP in Linux

On most Linux desktop distributions, a DHCP client like `dhclient` or `NetworkManager` runs in the background.

To manually force your Linux machine to release and renew its DHCP lease:
```bash
sudo dhclient -r  # Release
sudo dhclient     # Renew
```
