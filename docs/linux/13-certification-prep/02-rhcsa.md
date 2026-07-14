---
title: RHCSA Certification Prep
description: Study guide and core concepts for the Red Hat Certified System Administrator (RHCSA) exam.
---

# RHCSA Certification Prep

The Red Hat Certified System Administrator (RHCSA) is a performance-based exam that tests your ability to perform core system administration skills required in Red Hat Enterprise Linux environments.

## Core Competencies

### 1. Essential Tools
- Access a shell prompt and issue commands with correct syntax.
- Use grep and regular expressions to analyze text.
- Access remote systems using SSH.

### 2. Operate Running Systems
- Boot, reboot, and shut down a system normally.
- Boot systems into different targets manually.
- Identify CPU/memory intensive processes and kill them.

### 3. Configure Local Storage
- List, create, delete partitions on MBR and GPT disks.
- Create and remove physical volumes, volume groups, and logical volumes (LVM).

### 4. Create and Configure File Systems
- Create, mount, unmount, and use vfat, ext4, and xfs file systems.
- Mount and unmount network file systems using NFS.

### 5. Deploy, Configure, and Maintain Systems
- Schedule tasks using at and cron.
- Start and stop services and configure them to start automatically at boot.
- Manage local users and groups.

## Practical Study Example
RHCSA is fully practical. You must practice on a live RHEL or AlmaLinux/Rocky Linux system.
**Task:** Create an LVM volume group, logical volume, format it as XFS, and mount it persistently via `/etc/fstab`.

```bash
# Example LVM workflow
pvcreate /dev/sdb1
vgcreate vg_data /dev/sdb1
lvcreate -n lv_app -L 10G vg_data
mkfs.xfs /dev/vg_data/lv_app
echo "/dev/vg_data/lv_app /mnt/app xfs defaults 0 0" >> /etc/fstab
mount -a
```
