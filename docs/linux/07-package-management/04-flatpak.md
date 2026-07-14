---
title: Flatpak
description: A decentralized framework for desktop application distribution on Linux.
---

# Flatpak

Flatpak is a utility for software deployment and package management for Linux. It is similar in concept to Snap but is fully open-source and primarily focused on desktop applications rather than server software or command-line tools.

## Key Features

- **Decentralized**: Unlike Snap, which relies on Canonical's store, anyone can host a Flatpak repository. Flathub is the de facto standard repository.
- **Sandboxing**: Applications run isolated from the rest of the system, improving security.
- **Runtimes**: Flatpak uses shared "runtimes" (like GNOME or KDE base libraries) to reduce disk space. If multiple apps need the GNOME 42 runtime, it is only downloaded once.

## Essential Commands

```bash
# Add the Flathub repository (usually the first step)
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo

# Search for an application
flatpak search gimp

# Install an application
flatpak install flathub org.gimp.GIMP

# Run a flatpak (though usually you just use your desktop menu)
flatpak run org.gimp.GIMP

# Update all flatpaks
flatpak update
```

## Flatpak vs. Snap

For desktop users, Flatpak is generally preferred by the broader Linux community outside of Ubuntu. It integrates better with desktop environments (like GNOME Software and KDE Discover) and is entirely community-driven.
