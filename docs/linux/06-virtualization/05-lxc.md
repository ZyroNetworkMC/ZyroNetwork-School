---
title: LXC / LXD
description: System containers in Linux.
---

# LXC (Linux Containers)

LXC is an operating-system-level virtualization method for running multiple isolated Linux systems (containers) on a control host using a single Linux kernel. 

## Containers vs. Virtual Machines

Unlike KVM or VirtualBox, which virtualize hardware and run a completely separate kernel for each VM, LXC shares the host's kernel. 
- **Pros**: Containers are incredibly lightweight, start almost instantly, and have virtually zero performance overhead.
- **Cons**: Containers must run the same OS family as the host (Linux on Linux). You cannot run a Windows container on a Linux host using LXC.

## LXC vs. Docker

While both use container technology (namespaces and cgroups), their philosophy differs:
- **Docker** is designed for *application* containers. Each container usually runs a single process or service.
- **LXC / LXD** is designed for *system* containers. They act and feel exactly like a lightweight virtual machine. You can SSH into them, they have their own init system (systemd), and you can run multiple services inside them.

## LXD

LXD (pronounced "lex-dee") is a next-generation system container manager. It acts as a wrapper around LXC, providing a REST API, a much friendlier command-line experience, and advanced features like snapshots, live migration, and storage pooling.

```bash
# Launch a new Ubuntu container using LXD
lxc launch ubuntu:22.04 my-container

# Get a shell inside the container
lxc exec my-container -- /bin/bash
```
