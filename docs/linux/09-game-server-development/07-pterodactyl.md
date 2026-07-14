---
title: Pterodactyl Panel
description: Using Pterodactyl for centralized game server management.
---

# Pterodactyl Panel

Managing multiple server instances across different physical machines using plain Docker or systemd commands quickly becomes unmanageable. You need a central control panel.

**Pterodactyl** is the open-source industry standard for game server management. It provides a beautiful web interface to manage Docker-based game servers.

## Architecture

Pterodactyl consists of two main components:

1.  **The Panel (Frontend)**: A PHP/React web application. This provides the user interface, handles billing integrations (via APIs), manages users, and stores the database of servers. You only need one Panel for your entire network.
2.  **Wings (Backend Daemon)**: A daemon written in Go. Wings runs on every physical server (node) that will host game servers. It communicates with the Panel and interacts directly with the Docker socket to create, start, and stop containers.

`[Web Browser] --> [Pterodactyl Panel] --(HTTPS API)--> [Wings Daemon on Node 1]`

## Why Use Pterodactyl?

*   **Docker Integration**: Pterodactyl runs every single game server inside a Docker container. This guarantees isolation and resource limiting.
*   **Eggs**: Pterodactyl uses "Eggs"—JSON configurations that define exactly how to run a specific game. There are Eggs for Vanilla Minecraft, PocketMine-MP, WaterdogPE, Rust, CS:GO, and hundreds more.
*   **User Management**: You can give developers or staff access to start/stop specific servers or view the console without giving them SSH access to the underlying Linux machine.
*   **File Management**: It includes a web-based file manager to edit configs, upload plugins, and manage worlds.
*   **Schedules**: You can easily schedule tasks (e.g., send a warning in chat, then restart the server at 4 AM every day).

## Deployment Overview

Deploying Pterodactyl involves several steps and requires a solid understanding of Linux and networking.

1.  **Install the Panel**: Usually installed on a dedicated, small VPS. It requires PHP 8.x, a web server (Nginx/Apache), a database (MySQL/MariaDB), and Redis.
2.  **Install SSL**: You must configure SSL (HTTPS) for the Panel.
3.  **Configure a Node**: Add a physical machine as a "Node" in the Panel's interface.
4.  **Install Wings**: SSH into the physical node and install Docker and the Wings daemon.
5.  **Configure Wings**: Apply the configuration token provided by the Panel so Wings can authenticate and connect back to the Panel.
6.  **Create Servers**: Use the web interface to deploy PMMP or Waterdog instances to your nodes.

## Security Considerations

*   **SSL Everywhere**: Both the Panel and the Wings daemon must communicate over HTTPS.
*   **Firewalls**: Ensure port 8080 (default for Wings API) and 2022 (SFTP) are open on your Nodes, but only allow traffic from trusted sources if possible.
*   **Database Isolation**: Do not run your game servers' MySQL database on the same machine as the Pterodactyl Panel's internal database if you expect heavy load.
