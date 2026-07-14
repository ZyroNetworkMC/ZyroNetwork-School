---
title: Linux Installation Guide
description: Complete Linux installation guide covering VirtualBox, VMware, Ubuntu, Kali Linux, WSL, Dual Boot and networking.
---
# Linux Installation Guide
## Chapter Overview
In this chapter you will learn:
- Why virtualization is important
- Installing VirtualBox
- Installing VMware
- Installing Ubuntu Linux
- Installing Kali Linux
- Installing WSL
- Dual Boot installation
- Disk partitions
- VM networking
- Snapshots
- Recommended software for learning Linux
---
# Before Installing Linux
There are several ways to use Linux:
| Method | Difficulty | Recommended |
|----------|------------|--------------|
| Virtual Machine | Easy | ⭐⭐⭐⭐⭐ |
| WSL | Very Easy | ⭐⭐⭐⭐ |
| Dual Boot | Medium | ⭐⭐⭐⭐ |
| Dedicated PC | Medium | ⭐⭐⭐⭐⭐ |
For beginners, using:
```text
VirtualBox
```
is highly recommended.
---
# Why Use Virtual Machines?
A Virtual Machine (VM) allows Linux to run inside Windows.
Advantages:
✅ No risk to Windows installation
✅ Easy backups
✅ Snapshots
✅ Multiple operating systems
✅ Perfect for Ethical Hacking labs
---
# What is Virtualization?
Virtualization means:
```text
Running one operating system
inside another operating system.
```
Example:
```text
Windows Host
       ↓
VirtualBox
       ↓
Ubuntu Guest
```
---
# Virtualization Architecture
```text
Hardware
    ↓
Host OS
    ↓
Hypervisor
    ↓
Guest OS
```
---
# Hypervisor
Software responsible for virtualization.
Examples:
- VirtualBox
- VMware
- Hyper-V
- Proxmox
---
# System Requirements
Recommended minimum:
```text
CPU:
4 Cores
RAM:
8GB
Storage:
50GB Free Space
```
Recommended:
```text
CPU:
6+ Cores
RAM:
16GB+
SSD:
100GB+
```
---
# Part 1: Installing VirtualBox
---
# What is VirtualBox?
VirtualBox is a free virtualization software developed by Oracle.
Perfect for:
- Linux Learning
- Ethical Hacking
- Networking Labs
- Server Testing
---
## Download
Official Website:
https://www.virtualbox.org
---
## Installation Steps
### Step 1
Download:
```text
Windows Hosts
```
---
### Step 2
Run installer.
---
### Step 3
Keep default settings.
---
### Step 4
Install VirtualBox Extension Pack.
This enables:
- USB Support
- Better Networking
- Clipboard Sharing
- Drag and Drop
---
# Recommended VirtualBox Settings
For Ubuntu:
```text
RAM:
4096 MB
CPU:
2 Cores
Disk:
40GB
```
For Kali Linux:
```text
RAM:
4096-8192 MB
CPU:
4 Cores
Disk:
60GB
```
---
# Part 2: Installing VMware
---
# What is VMware?
VMware is another virtualization software.
Advantages:
✅ Better Performance
✅ Better Drivers
✅ Enterprise Usage
---
Official Website:
https://www.vmware.com
---
# VMware vs VirtualBox
| Feature | VirtualBox | VMware |
|-----------|-------------|---------|
| Free | ✅ | Limited |
| Performance | Good | Excellent |
| Networking | Good | Excellent |
| Enterprise Usage | Medium | High |
---
# Which Should You Use?
For students:
```text
VirtualBox
```
For advanced users:
```text
VMware
```
---
# Part 3: Download Linux ISO
---
# Ubuntu
Official Website:
https://ubuntu.com/download
Recommended version:
```text
Ubuntu LTS
```
---
# Kali Linux
Official Website:
https://www.kali.org
Recommended:
```text
Installer ISO
```
---
# Part 4: Creating Ubuntu Virtual Machine
---
# Step 1
Open VirtualBox.
Click:
```text
New
```
---
# Step 2
Name:
```text
Ubuntu 24.04
```
---
# Step 3
Select ISO.
---
# Step 4
Allocate RAM:
```text
4096 MB+
```
---
# Step 5
Allocate CPU:
```text
2-4 Cores
```
---
# Step 6
Create Disk:
```text
40GB+
```
Dynamic Allocation recommended.
---
# Virtual Machine Layout
```text
Windows
      ↓
VirtualBox
      ↓
Ubuntu VM
```
---
# Ubuntu Installation Steps
---
## Language
Select:
```text
English
```
---
## Keyboard
Select your layout.
---
## Installation Type
Recommended:
```text
Normal Installation
```
---
## Third Party Drivers
Enable:
```text
Install third-party software.
```
---
## Create User
Example:
```text
Username:
aayan
Password:
********
```
---
# After Installation
Run:
```bash
sudo apt update
sudo apt upgrade
```
---
# Part 5: Installing Kali Linux
---
# Why Kali?
Kali Linux contains:
```text
600+
Security Tools
```
Used for:
- Ethical Hacking
- Penetration Testing
- Security Research
---
# Kali Installation
Steps are similar to Ubuntu.
---
Recommended Resources:
```text
RAM:
8GB
CPU:
4 Cores
```
---
# Enable Guest Additions
Install:
```bash
sudo apt install virtualbox-guest-utils
```
---
# Part 6: WSL Installation
---
# What is WSL?
WSL means:
```text
Windows Subsystem for Linux
```
Allows Linux to run directly inside Windows.
---
# Advantages
✅ Fast
✅ Lightweight
✅ No Virtual Machine Needed
---
# Installation
Open PowerShell as Administrator.
Run:
```powershell
wsl --install
```
Restart system.
---
# Check Installed Distros
```powershell
wsl -l
```
---
# Open Linux
```powershell
wsl
```
---
# Install Ubuntu
```powershell
wsl --install Ubuntu
```
---
# WSL Architecture
```text
Windows
     ↓
WSL Layer
     ↓
Linux Environment
```
---
# WSL vs Virtual Machine
| Feature | WSL | VM |
|----------|-----|----|
| Performance | Excellent | Good |
| GUI | Limited | Full |
| Networking Labs | Medium | Excellent |
| Ethical Hacking | Medium | Excellent |
---
# Part 7: Dual Boot Installation
---
# What is Dual Boot?
Installing two operating systems.
Example:
```text
Windows
Linux
```
User chooses at startup.
---
# Advantages
✅ Native Performance
✅ Full Hardware Access
---
# Risks
❌ Wrong partitioning may delete data.
Always backup first.
---
# Partition Requirements
Recommended:
```text
Root:
/ → 50GB+
Swap:
8GB
Home:
/home → Remaining Space
```
---
# Linux Partitions
---
## Root Partition
```text
/
```
Contains:
- Operating System
- Programs
- Configuration
---
## Home Partition
```text
/home
```
Stores:
- User Files
- Documents
- Downloads
---
## Swap Partition
Acts as virtual memory.
---
# Example Layout
```text
500GB SSD
Windows:
250GB
Linux Root:
100GB
Home:
130GB
Swap:
20GB
```
---
# Linux File Systems
Most common:
```text
ext4
```
Other file systems:
- XFS
- BTRFS
- ZFS
---
# Part 8: Virtual Machine Networking
Networking is extremely important.
Especially for:
- Ethical Hacking
- Server Hosting
- Computer Networking Competitions
---
# NAT Mode
Default mode.
```text
VM
 ↓
Host
 ↓
Internet
```
Advantages:
✅ Easy setup.
Disadvantages:
❌ Hard to access VM externally.
---
# Bridged Adapter
```text
VM becomes a real device
on your network.
```
Example:
```text
Windows → 192.168.1.100
Ubuntu → 192.168.1.101
```
Excellent for networking labs.
---
# Internal Network
Used for:
```text
VM ↔ VM
```
No internet.
Perfect for:
- Ethical Hacking Labs
- Capture The Flag setups
---
# Host Only Adapter
Communication:
```text
Host ↔ VM
```
No internet.
---
# Networking Comparison
| Mode | Internet | LAN Access |
|------|-----------|------------|
| NAT | Yes | Limited |
| Bridged | Yes | Full |
| Internal | No | VM Only |
| Host Only | No | Host + VM |
---
# Recommended Setup
For ZyroNetwork Students:
```text
Adapter 1:
NAT
Adapter 2:
Bridged
```
This provides:
✅ Internet
✅ LAN Communication
---
# Snapshots
Snapshots are backups of virtual machines.
---
# Why Use Snapshots?
Suppose:
```text
You break Linux.
```
Restore snapshot.
Everything returns.
---
# Creating Snapshot
VirtualBox:
```text
Machine
 ↓
Take Snapshot
```
---
Recommended snapshots:
```text
Fresh Install
Networking Lab
Before Hacking Practice
Before Server Configuration
```
---
# Recommended Linux Software
Install:
---
## Git
```bash
sudo apt install git
```
---
## Curl
```bash
sudo apt install curl
```
---
## Net Tools
```bash
sudo apt install net-tools
```
---
## SSH
```bash
sudo apt install openssh-server
```
---
## HTOP
```bash
sudo apt install htop
```
---
## Build Tools
```bash
sudo apt install build-essential
```
---
# Recommended Tools for ZyroNetwork Students
### Development
- Git
- VSCode
- PHP
- Composer
### Networking
- Wireshark
- nmap
- net-tools
### Servers
- Nginx
- MySQL
- Docker
### Ethical Hacking
- Burp Suite
- Metasploit
- Gobuster
---
# Practice Environment
Recommended setup:
```text
Windows Host
Ubuntu VM
Kali VM
Windows Server VM
```
Networking:
```text
Bridged + Internal Network
```
This allows:
- LAN Creation
- DHCP Practice
- SSH Practice
- FTP Practice
- Server Administration
---
# Exercises
### Exercise 1
Install VirtualBox.
---
### Exercise 2
Install Ubuntu VM.
---
### Exercise 3
Install Kali Linux VM.
---
### Exercise 4
Configure Bridged Networking.
---
### Exercise 5
Create Snapshot.
---
# Mini Project
Create lab:
```text
Windows Host
      ↓
Ubuntu Server
      ↓
Kali Linux
```
Practice:
- Ping
- SSH
- FTP
- Web Servers
---
# Summary
You learned:
✅ Virtual Machines
✅ VirtualBox
✅ VMware
✅ Ubuntu Installation
✅ Kali Installation
✅ WSL
✅ Dual Boot
✅ Linux Partitions
✅ Networking Modes
✅ Snapshots
This environment will be used throughout the entire Linux course.
---
# References
Ubuntu:
https://ubuntu.com
Kali:
https://kali.org
VirtualBox:
https://virtualbox.org
VMware:
https://vmware.com
---
# Next Chapter
➡ Linux File System
➡ Directory Structure
➡ Linux Terminal Basics
➡ First Linux Commands
