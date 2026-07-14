---
title: DPKG
description: The low-level package manager for Debian systems.
---

# DPKG (Debian Package)

`dpkg` is the software at the base of the package management system in the free operating system Debian and its numerous derivatives. While `apt` downloads packages from the internet and resolves dependencies, `dpkg` is the tool that actually installs, builds, removes, and manages Debian packages (`.deb` files) locally.

## When to use DPKG?

You typically use `dpkg` when you have downloaded a `.deb` file directly from a vendor's website (like Google Chrome, Discord, or specific drivers) because it is not available in the official APT repositories.

## Essential Commands

### Installing a package
```bash
sudo dpkg -i google-chrome-stable_current_amd64.deb
```
*Note: If `dpkg` fails due to missing dependencies, run `sudo apt --fix-broken install` immediately after to let APT download and fix the missing requirements.*

### Listing installed packages
```bash
dpkg -l | grep "chrome"
```

### Removing a package
```bash
# Remove software but keep configs
sudo dpkg -r google-chrome-stable

# Purge software and configs
sudo dpkg -P google-chrome-stable
```

### Viewing package contents
To see what files a `.deb` package will install without actually installing it:
```bash
dpkg -c package.deb
```
