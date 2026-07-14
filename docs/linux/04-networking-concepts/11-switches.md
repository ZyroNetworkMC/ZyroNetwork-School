---
title: Network Switches
description: Learn how switches connect devices on a Local Area Network and how MAC addresses work.
---

# Network Switches

A network switch is a piece of hardware that connects devices (like computers, printers, and servers) on a computer network. Unlike a router, which connects different networks, a switch is designed to connect devices within the *same* network (LAN).

## How Switches Work (Layer 2)

Switches operate primarily at Layer 2 (Data Link Layer) of the OSI model. While IP addresses (Layer 3) are used to route traffic across the Internet, switches use **MAC Addresses** to direct traffic locally.

### MAC Addresses

A Media Access Control (MAC) address is a unique, physical address hardcoded into a device's Network Interface Card (NIC) at the factory. It is 48 bits long and written in hexadecimal format.

Example: `00:1A:2B:3C:4D:5E`

### The MAC Address Table

When a switch is turned on, its MAC address table is empty. As devices send data, the switch "learns" which MAC address is connected to which physical port.

1. PC A (Port 1) sends data to PC B.
2. The switch looks at the source MAC address and logs: "PC A's MAC is on Port 1."
3. If the switch doesn't know where PC B is yet, it "floods" the packet out of all ports.
4. PC B replies. The switch logs: "PC B's MAC is on Port 3."
5. From then on, when PC A talks to PC B, the switch sends the data *only* out of Port 3. 

This intelligent forwarding makes switches incredibly fast and efficient.

## Switches vs. Hubs

Historically, networks used Hubs. A hub is a "dumb" device that operates at Layer 1. When a hub receives data on one port, it blindly copies and blasts that data out to *every* other port. 

This causes massive collisions and security issues (anyone on the network can sniff the traffic). Switches completely replaced hubs by making dedicated communication channels between specific ports.

## ARP (Address Resolution Protocol)

If computers talk using IP addresses, but switches use MAC addresses, how do they translate? The answer is ARP.

When your computer wants to send data to `192.168.1.10`:
1. It checks its ARP cache. If it doesn't know the MAC address, it pauses.
2. It sends an ARP Broadcast to the whole local network: "Who has IP `192.168.1.10`? Please tell me your MAC address."
3. The device with that IP replies: "That's me! Here is my MAC address."
4. Your computer saves this to its ARP table and begins transmitting data.

You can view your Linux machine's ARP table using:
```bash
ip neighbor
# or
arp -a
```

## Layer 3 Switches

While standard switches are Layer 2, enterprise environments often use Layer 3 switches. These are essentially switches that have routing capabilities built into them, allowing them to route traffic between different VLANs very quickly without needing a dedicated external router.
