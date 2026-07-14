---
title: KVM (Kernel-based Virtual Machine)
description: Native Linux virtualization using KVM and QEMU.
---

# KVM (Kernel-based Virtual Machine)

KVM is a full virtualization solution for Linux on x86 hardware containing virtualization extensions (Intel VT or AMD-V). It turns the Linux kernel itself into a hypervisor. 

## How it works

KVM consists of a loadable kernel module, `kvm.ko`, that provides the core virtualization infrastructure. It is almost always used in conjunction with **QEMU** (Quick Emulator), a generic and open source machine emulator and virtualizer. KVM accelerates QEMU by allowing the virtual machine's code to run directly on the host CPU.

Because KVM is part of the Linux kernel, it benefits directly from every kernel update regarding memory management, scheduling, and hardware support.

## Management Tools

While KVM/QEMU can be run from the command line, it's complex. Most users manage KVM using the `libvirt` API and its frontends:

- **virsh**: A powerful command-line interface for managing VMs.
- **Virtual Machine Manager (virt-manager)**: A desktop GUI tool that provides a VirtualBox-like experience for creating and managing KVM virtual machines.
- **Cockpit**: A web-based server administration interface that includes a module for managing VMs.

## Performance

KVM is considered one of the fastest hypervisors available, offering near-native performance for CPU and memory. It is heavily utilized by major cloud providers (like AWS, Google Cloud, and DigitalOcean) to power their infrastructure.
