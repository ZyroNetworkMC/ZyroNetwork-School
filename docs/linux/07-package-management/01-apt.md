---
title: APT (Advanced Package Tool)
description: Package management for Debian and Ubuntu based systems.
---

# APT (Advanced Package Tool)

APT is the command-line package management tool used by Debian, Ubuntu, Linux Mint, and their derivatives. It handles the retrieval, configuration, and installation of software packages from repositories.

## How APT Works

APT does not install `.deb` files directly; it is a higher-level tool that interacts with `dpkg` (the underlying package manager). APT's main advantage is **dependency resolution**. If you install a package that requires three other libraries, APT automatically downloads and installs those libraries first.

Package repositories are configured in `/etc/apt/sources.list` and files within `/etc/apt/sources.list.d/`.

## Essential Commands

```bash
# Update the local list of available packages (Do this before installing anything!)
sudo apt update

# Upgrade all installed packages to their latest versions
sudo apt upgrade

# Install a new package
sudo apt install nginx

# Remove a package (keeps configuration files)
sudo apt remove nginx

# Remove a package AND its configuration files
sudo apt purge nginx

# Remove dependencies that were automatically installed and are no longer needed
sudo apt autoremove

# Search for a package by name or description
apt search "web server"
```

## apt vs. apt-get

You may see tutorials using `apt-get`. `apt` is a newer command designed specifically for interactive use by humans, combining the most commonly used features of `apt-get` and `apt-cache` and adding progress bars. For scripts, `apt-get` is still preferred as its output is more stable, but for daily use, prefer `apt`.
