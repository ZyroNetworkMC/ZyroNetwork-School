---
title: Pacman
description: The package manager for Arch Linux and its derivatives.
---

# Pacman

Pacman is the default package manager for Arch Linux and its derivatives (like Manjaro and EndeavourOS). It is known for its speed, simplicity, and unique command syntax.

Unlike APT or DNF, pacman does not separate the update and upgrade processes. 

## Essential Commands

### Syncing and Updating
```bash
# Synchronize repositories AND update all packages (The Arch way to update)
sudo pacman -Syu
```
*Note: Arch is a rolling release. You should never do partial updates (e.g., updating just one package) as it can break system libraries.*

### Managing Packages
```bash
# Install a package ('S' stands for Sync)
sudo pacman -S firefox

# Remove a package
sudo pacman -R firefox

# Remove a package AND its unused dependencies (Recommended)
sudo pacman -Rs firefox

# Search the repositories ('s' stands for search)
pacman -Ss "web browser"
```

## The AUR (Arch User Repository)

Pacman only interacts with official Arch repositories. However, the Arch ecosystem heavily relies on the AUR, a community-driven repository containing build scripts for almost any software imaginable. 

To install from the AUR, users typically install an "AUR Helper" like `yay` or `paru`, which wrap `pacman` commands and automate downloading and building software from the AUR.
```bash
# Example using yay to install from AUR (syntax mimics pacman)
yay -S visual-studio-code-bin
```
