---
title: The Linux Filesystem
description: Understanding the Linux directory structure and filesystem concepts.
---

# The Linux Filesystem

In Linux, everything is a file. This includes text documents, directories, hardware devices, and even network sockets. Understanding the filesystem hierarchy is crucial for navigating and administrating a Linux system.

## The Filesystem Hierarchy Standard (FHS)

Linux distributions follow the Filesystem Hierarchy Standard (FHS). It defines the directory structure and directory contents. The entire filesystem originates from a single root directory represented by a forward slash `/`.

Here is a breakdown of the most important directories:

*   **`/` (Root)**: The top-level directory. Everything resides under this directory.
*   **`/bin` (User Binaries)**: Contains essential command-line utilities available to all users (e.g., `ls`, `cp`, `bash`).
*   **`/sbin` (System Binaries)**: Contains essential administrative commands typically used by the root user (e.g., `fdisk`, `reboot`, `iptables`).
*   **`/boot`**: Contains the files needed to boot the system, including the bootloader configuration (GRUB), the kernel (`vmlinuz`), and the initramfs.
*   **`/dev` (Device Files)**: Contains special files that represent hardware devices. For example, `/dev/sda` represents the first hard drive, and `/dev/null` is a special device that discards data written to it.
*   **`/etc` (Configuration Files)**: Contains system-wide configuration files and scripts. You will spend a lot of time here configuring services (e.g., `/etc/nginx/nginx.conf`, `/etc/fstab`).
*   **`/home` (Home Directories)**: Contains the personal directories for standard users. If your username is "karasu", your home directory is `/home/karasu`.
*   **`/root` (Root Home)**: The home directory for the root user. Do not confuse this with the top-level `/` directory.
*   **`/lib`, `/lib64` (Shared Libraries)**: Contains shared library files needed by the binaries in `/bin` and `/sbin`. Similar to DLLs in Windows.
*   **`/mnt`, `/media` (Mount Points)**: Empty directories used as temporary mount points for external filesystems (like USB drives or network shares).
*   **`/opt` (Optional Software)**: Used for installing third-party or unbundled software packages. Many enterprise applications install here.
*   **`/proc` (Process Information)**: A virtual filesystem created in RAM. It contains information about running processes and system resources. For example, `cat /proc/cpuinfo` displays CPU details.
*   **`/sys` (System Information)**: Another virtual filesystem similar to `/proc`, providing a unified view of hardware devices and drivers attached to the system.
*   **`/tmp` (Temporary Files)**: Used for temporary files created by the system and users. Data here is often wiped upon reboot.
*   **`/usr` (User Programs)**: Contains multi-user applications, utilities, and libraries. It has its own hierarchy (`/usr/bin`, `/usr/lib`, `/usr/local`). `/usr/local` is specifically for software compiled from source locally.
*   **`/var` (Variable Data)**: Contains files that change frequently during system operation, such as logs (`/var/log`), databases (`/var/lib/mysql`), and web server files (`/var/www`).

## Mount Points and Partitions

Unlike Windows, which uses drive letters (`C:\`, `D:\`), Linux mounts physical partitions into the virtual directory tree.
For example, you might have a dedicated physical hard drive for databases. You would format the drive and mount it to `/var/lib/mysql`. The system seamlessly treats it as part of the unified directory tree.

The `/etc/fstab` (filesystem table) file defines how partitions are mounted automatically at boot time.

## Inodes

Every file and directory in Linux has an associated data structure called an inode (index node). The inode stores metadata about the file, such as:
*   File type
*   Permissions (read, write, execute)
*   Owner and Group IDs
*   File size
*   Pointers to the physical blocks on the disk where the actual data is stored.

Importantly, the inode does *not* store the filename. The directory file acts as a table linking filenames to their respective inodes.

## Hard Links vs. Soft (Sym) Links

*   **Hard Link**: Creates a new filename that points to the *exact same inode* as the original file. Both filenames are completely equal. If you delete one, the data remains accessible via the other. Hard links cannot span across different partitions.
*   **Soft Link (Symlink)**: Creates a new, special file whose content is simply a path pointing to another file. If the original file is deleted, the symlink becomes "broken" and points to nothing. Symlinks can cross partitions and link to directories.

## Best Practices

*   **Separate Partitions**: For servers, it is best practice to place directories like `/var` and `/home` on separate partitions. If an application spams logs and fills `/var`, it won't fill up the root `/` partition and crash the entire system.
*   **Avoid running as root**: Limit your time in `/root`. Operate in your `/home` directory and use `sudo` for administrative tasks.
