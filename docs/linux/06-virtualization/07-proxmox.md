---
title: Proxmox VE
description: Open-source enterprise virtualization platform.
---

# Proxmox Virtual Environment (VE)

Proxmox VE is a complete, open-source enterprise virtualization management platform. It tightly integrates KVM hypervisor and LXC containers, software-defined storage, and networking functionality on a single platform.

It is fundamentally a customized Debian Linux distribution with a powerful web-based graphical user interface.

## Key Features

- **Web GUI**: Manage VMs, containers, storage, and networks entirely from a web browser. No need for complex command-line configuration.
- **KVM and LXC**: Choose the right tool for the job. Use KVM for full OS virtualization (Windows, other Linux distros) and LXC for lightweight Linux system containers.
- **Clustering**: Group multiple Proxmox physical servers together. You can manage them all from one interface and migrate VMs seamlessly between physical nodes.
- **Built-in Backup**: Comprehensive backup and restore functionality for VMs and containers out of the box.
- **ZFS Support**: Native support for the robust ZFS file system, offering features like data integrity checking, software RAID, and instant snapshots.

## Why use Proxmox?

Proxmox is incredibly popular in home labs and small-to-medium businesses because it offers enterprise features (comparable to VMware ESXi) completely free of charge, without artificial licensing limitations on CPU sockets or memory.
