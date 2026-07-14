---
title: Building a Pocketmine Node
description: Guide on deploying a Linux server optimized for running Pocketmine-MP.
---

# Building a Pocketmine Node

Pocketmine-MP is a highly customizable, open-source server software for Minecraft: Bedrock Edition. Running it on a Linux node ensures optimal performance and stability.

## Concepts
- **PHP 8+:** Pocketmine is written in PHP and requires the latest versions with specific extensions (pthreads/pmmp extensions).
- **Screen/Tmux:** Terminal multiplexers to keep the server running after you disconnect from SSH.
- **UDP Protocol:** Minecraft Bedrock uses UDP, meaning firewall rules must allow UDP traffic, not just TCP.

## Step-by-step Guide

### 1. Prepare the Environment
Install required dependencies:
```bash
sudo apt update
sudo apt install curl wget git make autoconf automake m4 libtool -y
```

### 2. Install Pocketmine
Use the official installer script:
```bash
mkdir ~/pocketmine
cd ~/pocketmine
curl -sL https://get.pmmp.io | bash -s -
```

### 3. Running the Server
Run the server using a multiplexer like `tmux` to keep it active:
```bash
tmux new -s pmmp
./start.sh
```
Press `Ctrl+B`, then `D` to detach. To reattach later, run `tmux attach -t pmmp`.

## Best Practices
- **Port Forwarding:** Ensure port 19132 (UDP) is open on your firewall.
- **Backups:** Schedule automated backups of the `worlds/` and `players/` directories.
- **Resource Limits:** Use `ulimit` or `systemd` to allocate sufficient file descriptors and memory.
