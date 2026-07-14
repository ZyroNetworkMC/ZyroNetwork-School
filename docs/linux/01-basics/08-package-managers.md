---
title: Package Managers
description: Learn Linux package management systems.
---
# Package Managers
Package managers install, update and remove software.
---
# Common Package Managers
| Distribution | Manager |
|-------------|----------|
| Ubuntu | APT |
| Debian | APT |
| Fedora | DNF |
| Arch | Pacman |
---
# APT Commands
Update repositories:
```bash
sudo apt update
```
Upgrade packages:
```bash
sudo apt upgrade
```
Install package:
```bash
sudo apt install nginx
```
Remove package:
```bash
sudo apt remove nginx
```
Search package:
```bash
apt search php
```
---
# DNF
```bash
sudo dnf install nginx
```
---
# Pacman
```bash
sudo pacman -S nginx
```
---
# Why Package Managers Matter
Without package managers:
Installing software becomes difficult.
Linux automates:
- Dependencies
- Updates
- Security patches
---
# Summary
Package managers are one of Linux's strongest features.
