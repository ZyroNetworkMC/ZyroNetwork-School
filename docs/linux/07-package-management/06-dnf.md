---
title: DNF (Dandified YUM)
description: The modern package manager for Red Hat and Fedora based systems.
---

# DNF (Dandified YUM)

DNF is the next-generation version of YUM. It was introduced to address YUM's poor performance, high memory usage, and slow dependency resolution. DNF is the default package manager in Fedora 22 and later, CentOS 8 and later, and RHEL 8 and later.

## Improvements over YUM

- **Faster**: Utilizes a strict C++ library (`libsolv`) for dependency resolution, making it significantly faster than YUM.
- **Lower Memory Footprint**.
- **Cleaner Codebase**: Written in Python 3.

## Commands (Almost identical to YUM)

DNF was designed as a drop-in replacement, so the CLI syntax is nearly identical to YUM. In modern RPM systems, typing `yum` often just creates an alias or symlink to `dnf`.

```bash
# Update the system
sudo dnf update

# Install a package
sudo dnf install httpd

# Remove an orphaned package (dependencies no longer needed)
sudo dnf autoremove

# View package history (very useful for rolling back updates!)
dnf history
dnf history undo 3
```

## DNF Modules

RHEL 8 / CentOS 8 introduced "AppStreams", allowing DNF to install multiple versions of the same software (e.g., Node.js 14, 16, or 18) from the same repository using Modules.

```bash
dnf module list nodejs
sudo dnf module enable nodejs:16
```
