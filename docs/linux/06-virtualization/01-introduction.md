---
title: Introduction to Virtualization
description: What is virtualization and why use it?
---

# Introduction to Virtualization

Virtualization is the process of creating a software-based (or virtual) representation of something rather than a physical one. In the context of Linux and servers, it usually refers to creating virtual machines (VMs) or containers.

## How it Works

A piece of software called a **Hypervisor** sits between the physical hardware (Host) and the virtual systems (Guests). The hypervisor allocates physical resources (CPU cores, RAM, disk space) to each guest, isolating them from one another.

## Types of Hypervisors

1. **Type 1 (Bare Metal)**: The hypervisor runs directly on the host's hardware to control the hardware and manage guest OSs. (e.g., Proxmox, VMware ESXi, KVM). High performance, used in data centers.
2. **Type 2 (Hosted)**: The hypervisor runs as an application on top of a conventional operating system. (e.g., VirtualBox, VMware Workstation). Easier to set up, usually used for desktop development.

## Why Use Virtualization?

- **Resource Efficiency**: Run multiple servers on a single powerful physical machine, reducing hardware and electricity costs.
- **Isolation**: A crash or security breach in one VM does not affect the others.
- **Snapshots and Backups**: You can easily save the exact state of a VM and roll back if an update breaks the system.
- **Portability**: VMs can often be moved between different physical hosts with minimal downtime.
