---
title: VirtualBox
description: Overview of Oracle VM VirtualBox.
---

# VirtualBox

Oracle VM VirtualBox is a powerful x86 and AMD64/Intel64 virtualization product for enterprise as well as home use. It is a **Type 2 Hypervisor**, meaning it runs as an application on your host operating system (Windows, macOS, Linux).

## Key Features

- **Free and Open Source**: The base package is licensed under the GPL.
- **Cross-Platform**: Runs on almost any major desktop OS.
- **Snapshots**: Save arbitrary states of a virtual machine.
- **Guest Additions**: Software installed inside the guest OS to improve performance and integration (e.g., shared folders, seamless mouse pointer, dynamic screen resizing).

## Common Use Cases

- **Testing and Development**: Developers can spin up an Ubuntu VM on a Windows machine to test code in a Linux environment without dual-booting.
- **Trying New Distros**: Safely boot and install new Linux distributions without risking your main system.
- **Running Legacy Apps**: Run an older version of Windows required for specific legacy software.

## Networking Modes

VirtualBox offers several ways to network your VMs:
- **NAT (Network Address Translation)**: Default. VM can access the internet, but the outside network cannot access the VM.
- **Bridged Adapter**: The VM gets its own IP address on your physical network, acting like an independent physical machine.
- **Host-Only Adapter**: Creates a private network between the host and the VM, inaccessible from the outside network.
