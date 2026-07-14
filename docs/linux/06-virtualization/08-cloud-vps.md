---
title: Cloud VPS
description: Understanding Virtual Private Servers in the cloud.
---

# Cloud VPS (Virtual Private Server)

A Virtual Private Server (VPS) is a virtual machine sold as a service by an Internet hosting provider. When you rent a VPS from companies like DigitalOcean, Linode, AWS (EC2), or Hetzner, you are renting a slice of a physical server managed by a hypervisor (usually KVM or a customized variant).

## Characteristics

- **Root Access**: You get full root SSH access to the OS, just as if it were a physical server under your desk.
- **Dedicated IP**: The VPS usually comes with a public IPv4 and/or IPv6 address.
- **Resource Allocation**: You are guaranteed a certain amount of RAM, vCPUs, and disk space.

## Shared vs. Dedicated CPU

VPS providers often offer two tiers:
1. **Shared CPU**: Your virtual cores share physical CPU cycles with other customers. If a neighbor uses a lot of CPU, your performance might dip (though hypervisors try to prevent "noisy neighbors"). Best for low-traffic sites and personal projects.
2. **Dedicated CPU**: Your virtual cores are mapped 1-to-1 with physical CPU threads. Performance is guaranteed and consistent. Essential for game servers, high-traffic databases, and enterprise apps.

## Use Cases

A Cloud VPS is the standard starting point for deploying modern web applications, hosting personal VPNs, running mail servers, or anywhere you need a reliable, always-on Linux environment with a high-speed internet connection.
