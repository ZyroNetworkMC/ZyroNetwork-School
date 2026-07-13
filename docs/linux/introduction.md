---
title: Linux Server Administration
sidebar_label: Introduction
sidebar_position: 1
slug: /linux
---

# Introduction to Linux Server Administration

Almost all large Minecraft Bedrock networks host their servers on **Linux** (usually Ubuntu or Debian) instead of Windows. Linux is highly efficient, has minimal desktop overhead, and allows developers to manage servers completely through scripts and command-line interfaces.

## Why Linux?

- **Low Overhead**: Windows Server requires gigabytes of RAM just to render the GUI. Linux can run completely headless (no GUI), leaving all resources for Minecraft!
- **Automation**: Using cron jobs and bash scripts, you can schedule backups, automatic restarts, and auto-updates of PocketMine-MP.
- **SSH Access**: Securely access your server console from anywhere in the world.

## Accessing Your Server: SSH

To connect to a remote Linux VPS (Virtual Private Server), you use the **SSH** protocol.

```bash
# Connecting to your server
ssh root@your-server-ip
```

Once connected, you will be greeted by the terminal command line, ready to accept bash commands! In the next section, we will review the essential Linux commands and host a PocketMine server.
