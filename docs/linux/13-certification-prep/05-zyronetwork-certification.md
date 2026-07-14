---
title: ZyroNetwork Certification Prep
description: A specialized study guide for internal ZyroNetwork Infrastructure Certification.
---

# ZyroNetwork Certification Prep

The ZyroNetwork Infrastructure Certification is an internal, practical exam designed to ensure our engineers can maintain, scale, and troubleshoot our specific enterprise game server network architecture.

## Core Competencies

### 1. Edge Infrastructure
- **Proxy Configuration:** Deep understanding of WaterdogPE and BungeeCord configurations.
- **DDoS Mitigation:** Tuning Cloudflare spectrum and iptables rules to drop malicious traffic before it hits the application layer.

### 2. Node Management
- **Pterodactyl Stack:** Installing, configuring, and troubleshooting Wings daemons on bare metal.
- **Docker Networking:** Managing overlay networks and troubleshooting bridge interfaces that connect game containers.

### 3. High Availability Databases
- **Redis Clustering:** Managing our distributed cache for player sessions.
- **MySQL Galera:** Troubleshooting split-brain scenarios and recovering desynced nodes in our persistent data cluster.

### 4. Automation & Orchestration
- **Ansible for Game Nodes:** Deploying updates to Wings and OS configurations across 50+ bare metal servers.
- **CI/CD:** Deploying compiled Pocketmine plugins automatically from GitLab CI to production nodes via SFTP/Rsync.

## Practical Study Scenarios

**Scenario 1: Proxy Failure**
The main proxy goes down due to an OOM (Out of Memory) error.
*Action:* Diagnose the java heap dump, adjust `Xms` and `Xmx` flags in the startup script, and configure a systemd service to automatically restart the proxy on failure.

**Scenario 2: Node Disk Exhaustion**
A Pterodactyl node hits 100% disk usage due to massive backup generation.
*Action:* Use `ncdu` or `du -sh /*` to isolate the logs/backups, prune old Docker images via `docker system prune`, and adjust panel backup retention policies.
