---
title: VLANs (Virtual LANs)
description: Explore how VLANs logically segment physical networks for better security and performance.
---

# VLANs (Virtual LANs)

A Virtual Local Area Network (VLAN) allows network administrators to partition a single physical network into multiple distinct logical networks.

## Why Use VLANs?

Imagine a company with a single large network switch. Plugged into this switch are computers from HR, Engineering, and a Guest Wi-Fi access point. 
Without VLANs, everyone is on the same broadcast domain. This means:
1. **Security Risk:** Guests can potentially see and communicate with the HR servers.
2. **Performance:** A broadcast packet sent by an Engineering PC goes to every single device in the building, wasting bandwidth.

By implementing VLANs, you can configure the switch so that Ports 1-10 are VLAN 10 (HR), Ports 11-20 are VLAN 20 (Engineering), and Port 21 is VLAN 30 (Guest). Even though they share the same physical switch, they cannot communicate with each other unless the traffic goes through a router or firewall.

## How VLANs Work (802.1Q)

VLANs operate at Layer 2 (Data Link layer). The standard protocol for VLANs is IEEE 802.1Q.

When a packet enters a switch port assigned to a VLAN, the switch inserts a "VLAN Tag" (a small piece of data) into the Ethernet frame. This tag identifies which VLAN the packet belongs to. When the packet leaves the switch to go to the destination PC, the tag is stripped off.

## Access Ports vs. Trunk Ports

- **Access Port:** A port connected to an end device (like a PC or printer). It belongs to exactly one VLAN. The PC doesn't know anything about the VLAN; the switch handles the tagging.
- **Trunk Port:** A port connected to another switch or a router. It needs to carry traffic for *multiple* VLANs simultaneously. Trunk ports leave the VLAN tags intact so the receiving switch knows which VLAN the traffic belongs to.

## VLANs in Linux

Linux can interface with VLANs perfectly. If a Linux server is connected to a Trunk port, you can configure sub-interfaces to handle the different VLAN tags.

For example, if your physical interface is `eth0`, you can create a virtual interface for VLAN 20 called `eth0.20`. 

```bash
# Add a VLAN interface using the ip command
sudo ip link add link eth0 name eth0.20 type vlan id 20

# Assign an IP address to the VLAN interface
sudo ip addr add 192.168.20.5/24 dev eth0.20

# Bring the interface up
sudo ip link set dev eth0.20 up
```
This is extremely common in hypervisors and Linux-based routers.
