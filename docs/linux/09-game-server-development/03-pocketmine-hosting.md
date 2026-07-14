---
title: PocketMine-MP Hosting
description: Best practices for installing and running PocketMine-MP on Linux.
---

# PocketMine-MP Hosting

PocketMine-MP (PMMP) is a highly customized, open-source server software for Minecraft: Bedrock Edition, written in PHP. It is favored by large networks for its extensive plugin API and high performance compared to the official vanilla bedrock server.

## Understanding PMMP Architecture

To host PMMP effectively, you must understand how it operates:

1.  **PHP Base**: PMMP runs on a specifically compiled version of PHP (usually with the pthreads or pmmp/threads extension). You cannot simply use the default PHP provided by `apt install php`. It requires a custom binary.
2.  **Single-Threaded Tick Loop**: Like most Minecraft servers, the core game logic (ticks, entity updates, block generation) runs on a single main thread.
3.  **Asynchronous Tasks**: PMMP offloads heavy tasks (like database queries or chunk saving) to asynchronous worker threads to prevent the main thread from stalling (which causes server-wide lag).

## Installation

The most reliable way to install PMMP on a raw Linux machine is using their official installer script.

1.  **Create a dedicated user and directory**:
    ```bash
    sudo useradd -m -s /bin/bash pocketmine
    sudo su - pocketmine
    mkdir server && cd server
    ```
2.  **Run the installer**:
    ```bash
    curl -sL https://get.pmmp.io | bash -s -
    ```
    This script downloads the PMMP `.phar` file (the compiled PHP application) and automatically downloads the correct custom PHP binaries for your OS architecture.

3.  **Starting the server**:
    ```bash
    ./start.sh
    ```

## Managing PMMP as a Service

Running `./start.sh` in a terminal is fine for testing, but in production, PMMP must run as a background service that automatically starts on boot and restarts if it crashes.

### Creating a Systemd Service

Create a file at `/etc/systemd/system/pocketmine.service`:

```ini
[Unit]
Description=PocketMine-MP Server
After=network.target

[Service]
Type=simple
User=pocketmine
Group=pocketmine
WorkingDirectory=/home/pocketmine/server
ExecStart=/bin/bash /home/pocketmine/server/start.sh
Restart=on-failure
RestartSec=10

[Install]
WantedBy=multi-user.target
```

Enable and start the service:
```bash
sudo systemctl daemon-reload
sudo systemctl enable pocketmine
sudo systemctl start pocketmine
```

## Performance Optimization

*   **Garbage Collection**: PHP's garbage collector can cause lag spikes when it runs. Ensure plugins are written efficiently to avoid memory leaks.
*   **View Distance**: Reduce the `view-distance` in `server.properties`. This drastically reduces the number of chunks the server must keep in memory and send to clients.
*   **Opcache**: Ensure the custom PHP binary has OPcache enabled. OPcache stores precompiled script bytecode in shared memory, removing the need for PHP to load and parse scripts on each request.
*   **Plugins**: Poorly coded plugins running heavy operations on the main thread are the #1 cause of PMMP lag. Use the built-in `/timings` command to profile performance and identify problematic plugins.

## Updating

Updating PMMP usually involves replacing the `PocketMine-MP.phar` file. Ensure you check for compatibility updates with your installed plugins before updating the core server.
