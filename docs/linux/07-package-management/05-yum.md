---
title: YUM (Yellowdog Updater, Modified)
description: Package manager for older Red Hat based systems.
---

# YUM (Yellowdog Updater, Modified)

YUM is the traditional package manager for RPM-based Linux distributions, primarily Red Hat Enterprise Linux (RHEL), CentOS, and older versions of Fedora. It serves the exact same purpose as `apt` on Debian systems: downloading RPM packages from repositories and resolving dependencies.

*Note: YUM has been largely superseded by DNF in modern RPM distributions (RHEL 8+, Fedora 22+).*

## Essential Commands

```bash
# Check for updates
sudo yum check-update

# Update all packages
sudo yum update

# Install a package
sudo yum install httpd

# Remove a package
sudo yum remove httpd

# Search for a package
yum search nginx

# Provide command (find which package contains a specific file/command)
yum provides "*bin/netstat"
```

## RPM

Just as `apt` relies on `dpkg`, `yum` relies on the lower-level `rpm` tool to actually install `.rpm` files.

```bash
# Install a local RPM file
sudo rpm -i package.rpm

# Query an installed package
rpm -q httpd
```
