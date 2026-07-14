---
title: Linux Basics Interview Questions
description: Essential interview questions covering the core concepts of the Linux operating system.
---

# Linux Basics Interview Questions

This section covers fundamental questions about the Linux operating system, its architecture, and core components.

## Core Concepts

### 1. What is Linux?
Linux is an open-source, Unix-like operating system kernel based on the Linux kernel, created by Linus Torvalds. It is the foundation for various distributions (like Ubuntu, CentOS, and Debian) that bundle the kernel with system software and libraries.

### 2. Explain the Linux Architecture.
The architecture consists of:
- **Hardware:** Physical devices.
- **Kernel:** The core component that interacts directly with the hardware and manages resources (CPU, memory).
- **Shell:** The command-line interface that interprets user commands and sends them to the kernel.
- **Applications:** User-level programs and utilities.

### 3. What is the difference between a Hard Link and a Soft Link?
- **Hard Link:** Points directly to the inode of a file. If the original file is deleted, the hard link still retains the data. They cannot span across different filesystems.
- **Soft Link (Symlink):** A shortcut that points to the file path. If the original file is deleted, the soft link becomes a dangling or broken link. They can cross filesystems.

## Practical Examples

**Creating links:**
```bash
# Soft link
ln -s /path/to/original /path/to/link

# Hard link
ln /path/to/original /path/to/link
```

## Best Practices for Interviews
- **Clarity:** Be concise and direct in your answers.
- **Context:** Provide real-world context if possible (e.g., explaining why you would use a symlink over a hard link).
