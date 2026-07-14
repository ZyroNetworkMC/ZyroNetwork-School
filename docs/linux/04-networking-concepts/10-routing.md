---
title: Routing
description: Understand how routers direct traffic between different networks.
---

# Routing

Routing is the process of selecting a path for traffic in a network or between or across multiple networks. Broadly, routing is performed in many types of networks, but in the context of IT, it refers specifically to IP routing via routers.

## What is a Router?

A router operates at Layer 3 (Network Layer) of the OSI model. Its primary job is to connect different subnets or completely different networks together and determine the best path to forward data packets toward their final destination.

*Note: A switch connects devices within the same network; a router connects different networks.*

## The Routing Table

Every router (and every computer, including your Linux machine) has a routing table. This table is a list of rules that dictate where data packets should go based on their destination IP address.

### Viewing the Routing Table in Linux

You can view the routing table using the `ip route` or `route -n` commands.

```bash
$ ip route
default via 192.168.1.1 dev eth0 proto dhcp metric 100 
192.168.1.0/24 dev eth0 proto kernel scope link src 192.168.1.50 metric 100 
```

Let's break this down:
1. `192.168.1.0/24 dev eth0`: If the destination is on the local `192.168.1.x` network, send it directly out the `eth0` network interface. No router is needed because the destination is on the same LAN.
2. `default via 192.168.1.1`: The **Default Gateway**. If the destination IP does not match any other rule (e.g., you are trying to reach `8.8.8.8` on the Internet), forward the packet to the router at `192.168.1.1`. The router will figure out the rest of the path.

## Types of Routing

### 1. Static Routing
The network administrator manually configures routing table entries. This is simple and secure but doesn't scale well in massive, dynamic networks because if a link goes down, the administrator must manually update the route.

### 2. Dynamic Routing
Routers use protocols to communicate with each other and automatically update their routing tables based on network topology and traffic conditions. If a cable is cut, dynamic routing protocols will automatically find a new path.
- **BGP (Border Gateway Protocol):** The protocol used on the internet to route between different ISPs.
- **OSPF (Open Shortest Path First):** Commonly used within large enterprise networks.

## Traceroute

To see the exact path of routers (hops) a packet takes to reach its destination, you can use the `traceroute` tool in Linux.

```bash
traceroute google.com
```
This will output a list of every router your packet passed through to get to Google's servers.
