---
title: Snap Packages
description: Canonical's universal package manager.
---

# Snap Packages

Snap is a software deployment and package management system created by Canonical (the makers of Ubuntu). The packages, called "snaps," and the tool for using them, `snapd`, work across a range of Linux distributions.

## Key Features

- **Universal**: A snap package can run on Ubuntu, Fedora, Arch, Debian, etc., without modification.
- **Bundled Dependencies**: A snap contains the application and all its necessary libraries. This prevents "dependency hell" but results in larger file sizes.
- **Sandboxing**: Snaps are strictly confined by default using AppArmor. They cannot access system files or user data without explicit permission.
- **Automatic Updates**: Snaps update automatically in the background.

## Essential Commands

```bash
# Search the snap store
snap find "vlc"

# Install a snap
sudo snap install vlc

# List installed snaps
snap list

# Remove a snap
sudo snap remove vlc
```

## Controversy

While convenient, Snap has faced criticism in the Linux community:
- The backend server (the Snap Store) is proprietary and controlled solely by Canonical.
- Snaps can be slow to launch on first run.
- They create many loopback mounts (`/dev/loopX`) which clutters the output of system commands like `lsblk` and `df`.
