---
title: Linux File System
description: Complete guide to Linux File System, directories, paths, links, inodes and filesystem hierarchy.
---
# Linux File System
## Chapter Overview
In this chapter you will learn:
- Linux filesystem philosophy
- Everything is a file
- Filesystem Hierarchy Standard (FHS)
- Linux directory structure
- Absolute and Relative paths
- Inodes
- File Types
- Hidden Files
- Hard Links
- Symbolic Links
- Real Server Examples
- PocketMine Hosting Structure
---
# Introduction
One of the biggest differences between Windows and Linux is:
```text
The filesystem structure.
```
Windows:
```text
C:\
D:\
E:\
```
Linux:
```text
/
```
Everything starts from one root directory.
---
# Linux Philosophy
Linux follows:
# Everything is a File
This is one of the most important Linux concepts.
In Linux, many things behave like files:
✅ Directories
✅ Hard Disks
✅ USB Devices
✅ Network Interfaces
✅ Processes
✅ System Information
---
# Examples
Hard Drive:
```text
/dev/sda
```
USB:
```text
/dev/sdb
```
Terminal:
```text
/dev/tty
```
CPU Information:
```text
/proc/cpuinfo
```
Memory Information:
```text
/proc/meminfo
```
Everything behaves like files.
---
# Linux Filesystem Hierarchy
Everything starts from:
```text
/
```
called:
# Root Directory
---
# Visualization
```text
/
├── bin
├── boot
├── dev
├── etc
├── home
├── lib
├── media
├── mnt
├── opt
├── proc
├── root
├── run
├── sbin
├── srv
├── sys
├── tmp
├── usr
└── var
```
---
# Filesystem Hierarchy Standard (FHS)
Linux follows a standard called:
```text
FHS
Filesystem Hierarchy Standard
```
This ensures all Linux distributions use similar structures.
This makes administration easier.
---
# Root Directory
```text
/
```
This is the parent of everything.
---
Example:
```text
/home
/etc
/var
/usr
```
all exist inside:
```text
/
```
---
# Visualization
```text
/
 ↓
Everything
```
---
# /home
Contains user files.
Example:
```text
/home/aayan
/home/admin
/home/student
```
Equivalent to:
```text
C:\Users\
```
in Windows.
---
Example:
```bash
ls /home
```
Output:
```text
aayan
student
```
---
# User Directory Structure
```text
/home/aayan
├── Documents
├── Downloads
├── Pictures
└── Desktop
```
---
# Why Important?
This directory stores:
- Personal files
- Scripts
- Projects
- SSH keys
- Downloads
---
# PocketMine Example
```text
/home/minecraft/server/
```
Usually server files are hosted inside:
```text
/home
```
---
# /root
Home directory of:
```text
root user
```
Not same as:
```text
/
```
---
Example:
```text
/root
```
contains administrator files.
---
# /etc
One of the most important directories.
Contains:
```text
Configuration Files
```
---
Examples:
```text
/etc/passwd
/etc/hosts
/etc/ssh/
/etc/nginx/
/etc/mysql/
```
---
# Server Examples
Nginx:
```text
/etc/nginx/nginx.conf
```
SSH:
```text
/etc/ssh/sshd_config
```
---
# Why Important?
As Linux Administrator:
```text
You will use /etc every day.
```
---
# /var
Stores:
```text
Variable Data
```
Examples:
- Logs
- Cache
- Databases
- Mail
---
# Important Folders
```text
/var/log
/var/cache
/var/www
```
---
# Log Files
```text
/var/log/syslog
```
Contains:
```text
System Logs
```
---
Useful for troubleshooting.
---
# Web Hosting Example
```text
/var/www/html
```
Contains website files.
---
Apache usually serves files from here.
---
# /usr
Contains:
```text
Programs
Libraries
Documentation
```
---
Examples:
```text
/usr/bin
/usr/lib
/usr/share
```
---
# Visualization
```text
/usr
│
├── bin
├── lib
└── share
```
---
# /usr/bin
Contains commands.
Examples:
```text
ls
cp
mv
nano
```
---
Check location:
```bash
which ls
```
Output:
```text
/usr/bin/ls
```
---
# /bin
Contains essential commands.
Examples:
```text
cp
mv
cat
ls
bash
```
---
# /sbin
Contains administrative commands.
Examples:
```text
shutdown
fdisk
reboot
mkfs
```
---
# /tmp
Temporary files.
Anyone can write here.
---
Example:
```bash
cd /tmp
```
Files may automatically be deleted.
---
Useful for:
- Installers
- Temporary scripts
- Testing
---
# /boot
Contains boot files.
Examples:
```text
Linux Kernel
GRUB
Initramfs
```
---
Visualization:
```text
/boot
│
├── vmlinuz
├── initrd
└── grub
```
---
# /dev
One of Linux's most powerful concepts.
Contains:
```text
Devices as files.
```
---
Examples:
```text
/dev/sda
/dev/sdb
/dev/null
/dev/random
```
---
# Hard Drives
```text
/dev/sda
```
means:
```text
First disk
```
---
# Partitions
```text
/dev/sda1
/dev/sda2
```
---
# Useful Devices
---
## /dev/null
The black hole.
Everything sent here disappears.
Example:
```bash
echo hello > /dev/null
```
Output:
```text
Nothing
```
---
## /dev/random
Generates random data.
---
# /proc
Virtual filesystem.
Contains:
```text
Process Information
Kernel Information
CPU Information
Memory Information
```
---
Examples:
```text
/proc/cpuinfo
/proc/meminfo
/proc/version
```
---
# CPU Information
```bash
cat /proc/cpuinfo
```
---
# Memory Information
```bash
cat /proc/meminfo
```
---
# Process Information
Each process gets directory.
Example:
```text
/proc/1
/proc/1234
```
---
# /sys
Contains kernel information.
Used for:
- Drivers
- Hardware Management
- Device Control
---
Mostly used by advanced users.
---
# /media
Used for:
```text
USB Drives
CD/DVD
External Storage
```
---
Example:
```text
/media/aayan/USB
```
---
# /mnt
Temporary mount location.
Used by administrators.
Example:
```bash
mount /dev/sdb1 /mnt
```
---
# Linux Paths
There are two types.
---
# Absolute Path
Starts from:
```text
/
```
Example:
```text
/home/aayan/Documents/file.txt
```
---
# Relative Path
Starts from current directory.
Example:
```text
Documents/file.txt
```
---
# Visualization
Current:
```text
/home/aayan
```
Absolute:
```text
/home/aayan/file.txt
```
Relative:
```text
file.txt
```
---
# Special Directories
---
## Current Directory
```text
.
```
---
## Parent Directory
```text
..
```
---
Examples:
```bash
cd ..
```
Go back one folder.
---
```bash
cd .
```
Current folder.
---
# Hidden Files
Files beginning with:
```text
.
```
are hidden.
Examples:
```text
.bashrc
.profile
.gitconfig
.ssh
```
---
Show hidden files:
```bash
ls -la
```
---
# Why Hidden?
Usually:
- Configurations
- User Settings
- Sensitive Data
---
# Linux File Types
---
## Regular File
```text
-
```
Examples:
```text
file.txt
test.php
```
---
## Directory
```text
d
```
---
## Symbolic Link
```text
l
```
---
## Character Device
```text
c
```
---
## Block Device
```text
b
```
---
## Socket
```text
s
```
---
## Pipe
```text
p
```
---
View:
```bash
ls -l
```
---
Example:
```text
drwxr-xr-x
```
First character:
```text
d
```
means directory.
---
# Inodes
One of Linux's most important concepts.
---
# What is an Inode?
An inode stores:
- File Permissions
- Owner
- Group
- Size
- File Location
- Timestamps
---
It does NOT store:
```text
Filename
```
---
Visualization:
```text
Filename
     ↓
Inode
     ↓
Actual Data Blocks
```
---
# View Inodes
```bash
ls -i
```
Example:
```text
128731 file.txt
```
---
# Why Important?
Useful for:
- File Recovery
- Hard Links
- Forensics
- Filesystem Repair
---
# Hard Links
Multiple filenames pointing to same inode.
---
Example:
```bash
ln file1 file2
```
Both files:
```text
Share same inode.
```
---
Visualization:
```text
file1
     ↓
     inode
     ↑
file2
```
---
# Properties
✅ Same inode
✅ Same data
❌ Cannot cross disks
❌ Cannot link directories
---
# Symbolic Links
Like Windows shortcuts.
---
Create:
```bash
ln -s file1 link
```
---
Visualization:
```text
link
 ↓
file1
```
---
Properties:
✅ Can cross filesystems
✅ Can link directories
❌ Different inode
---
# View Links
```bash
ls -l
```
Example:
```text
link -> file1
```
---
# Hard Link vs Symbolic Link
| Feature | Hard | Symbolic |
|----------|------|-----------|
| Same Inode | ✅ | ❌ |
| Cross Filesystems | ❌ | ✅ |
| Link Directories | ❌ | ✅ |
| Break if Original Deleted | ❌ | ✅ |
---
# Real Server Example
PocketMine Hosting:
```text
/home/minecraft/
│
├── server/
├── backups/
├── plugins/
└── worlds/
```
---
Logs:
```text
/var/log
```
---
PHP:
```text
/etc/php
```
---
Nginx:
```text
/etc/nginx
```
---
# VPS Example
```text
/
│
├── home
├── var
├── etc
├── root
└── usr
```
As Linux Administrator, these directories are used daily.
---
# Useful Commands
Show filesystem:
```bash
tree /
```
---
Current directory:
```bash
pwd
```
---
Show hidden files:
```bash
ls -la
```
---
Show inode:
```bash
ls -i
```
---
Filesystem usage:
```bash
df -h
```
---
Disk usage:
```bash
du -sh
```
---
# Exercises
### Exercise 1
Navigate to:
```text
/home
```
---
### Exercise 2
Find:
```text
/etc/passwd
```
---
### Exercise 3
Create symbolic link.
---
### Exercise 4
Create hard link.
---
### Exercise 5
View inode numbers.
---
# Mini Project
Create Linux structure:
```text
/home/student
│
├── Projects
├── Scripts
├── Downloads
└── Backups
```
Create:
- Hidden files
- Hard links
- Symbolic links
---
# Summary
You learned:
✅ Linux Filesystem Hierarchy
✅ Root Directory
✅ Important Directories
✅ Absolute Paths
✅ Relative Paths
✅ Hidden Files
✅ File Types
✅ Inodes
✅ Hard Links
✅ Symbolic Links
The Linux filesystem is one of the most important foundations for server administration and ethical hacking.
---
# References
Filesystem Hierarchy Standard:
https://refspecs.linuxfoundation.org/FHS_3.0/fhs/index.html
Linux Filesystem:
https://www.kernel.org/doc/html/latest/filesystems/
---
# Next Chapter
➡ Linux Terminal Basics
➡ First Commands
➡ pwd
➡ ls
➡ cd
➡ Navigation Exercises
