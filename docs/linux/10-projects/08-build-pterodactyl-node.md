---
title: Building a Pterodactyl Node
description: Deploying a Wings daemon to connect to a Pterodactyl panel for containerized game hosting.
---

# Building a Pterodactyl Node

Pterodactyl is a free, open-source game server management panel built with PHP, React, and Go. The daemon (`Wings`) runs on isolated nodes, utilizing Docker to containerize game servers.

## Concepts
- **Docker:** Required for creating isolated environments for each game server.
- **Wings:** The custom server control daemon written in Go by the Pterodactyl team.
- **Allocations:** IP and Port combinations assigned to the node to give to servers.

## Step-by-step Guide

### 1. Install Docker
```bash
curl -sSL https://get.docker.com/ | CHANNEL=stable bash
sudo systemctl enable --now docker
```

### 2. Install Wings
```bash
sudo mkdir -p /etc/pterodactyl
curl -L -o /usr/local/bin/wings "https://github.com/pterodactyl/wings/releases/latest/download/wings_linux_$([ "$(uname -m)" = "x86_64" ] && echo "amd64" || echo "arm64")"
sudo chmod u+x /usr/local/bin/wings
```

### 3. Configuration
After creating the node on your Pterodactyl Panel UI, paste the generated configuration command. It usually looks like this:
```bash
cd /etc/pterodactyl && sudo wings configure --panel-url https://panel.example.com --token YOUR_TOKEN --node 1
```

### 4. Start the Service
Create a systemd service file for Wings and start it:
```bash
sudo systemctl enable --now wings
```

## Best Practices
- **Storage Driver:** Use the `overlay2` storage driver for Docker for better performance.
- **Swap:** Enable swap space to prevent out-of-memory errors on heavy game servers.
- **SSL:** Ensure your Wings node has a valid SSL certificate for secure communication with the Panel.
