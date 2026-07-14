---
title: Building a File Server
description: Guide on setting up a Samba and NFS file server on Linux.
---

# Building a File Server

File servers are crucial for sharing files across a local network. This project focuses on deploying Samba for Windows interoperability and NFS for Unix-to-Unix shares.

## Concepts
- **Samba:** An open-source implementation of the SMB/CIFS protocol, used primarily for sharing files and printers with Windows clients.
- **NFS (Network File System):** A distributed file system protocol allowing a user on a client computer to access files over a computer network much like local storage.

## Step-by-step Guide

### 1. Installing Samba
```bash
sudo apt update
sudo apt install samba -y
```

### 2. Configuring a Samba Share
Edit the Samba configuration file:
```bash
sudo nano /etc/samba/smb.conf
```

Add the following at the end of the file:
```ini
[SharedFolder]
    path = /srv/samba/shared
    read only = no
    browsable = yes
    guest ok = yes
```

### 3. Create Directory and Set Permissions
```bash
sudo mkdir -p /srv/samba/shared
sudo chown -R nobody:nogroup /srv/samba/shared
sudo systemctl restart smbd
```

## Best Practices
- **Authentication:** Avoid `guest ok = yes` in production. Use authenticated users.
- **Encryption:** Enable SMB encryption for secure data transfer.
- **Backups:** Ensure the shared directories are regularly backed up.
