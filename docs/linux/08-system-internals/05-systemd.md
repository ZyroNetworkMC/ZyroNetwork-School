---
title: Systemd
description: A detailed guide on managing services and the system with systemd.
---

# Systemd

`systemd` is the standard init system and system manager for modern Linux distributions. It manages the boot process, services, system state, and event logging.

## Core Concepts

### Units

In `systemd`, everything is managed as a "unit." Units are defined by configuration files. There are several types of units, but the most common are:

*   **Service units (`.service`)**: Define how to manage a system service or daemon (e.g., `nginx.service`, `sshd.service`).
*   **Target units (`.target`)**: Logical groupings of other units. They are used to represent a system state, replacing traditional runlevels. For example, `multi-user.target` groups all services needed for a non-graphical multi-user system.
*   **Socket units (`.socket`)**: Represent IPC or network sockets. `systemd` can listen on a socket and only start the corresponding service when a connection is made (Socket Activation).
*   **Timer units (`.timer`)**: Used to schedule tasks, effectively replacing `cron`.

### systemctl

The primary tool for interacting with `systemd` is `systemctl`.

## Managing Services

Here are the essential commands for managing services:

*   **Start a service**: `sudo systemctl start <service_name>`
*   **Stop a service**: `sudo systemctl stop <service_name>`
*   **Restart a service**: `sudo systemctl restart <service_name>` (Stops and then starts).
*   **Reload configuration**: `sudo systemctl reload <service_name>` (Reloads the service's config without killing the process).
*   **Check status**: `sudo systemctl status <service_name>` (Shows current state and recent log entries).

## Enabling and Disabling Services

Starting a service only runs it for the current session. To make a service start automatically on boot, you must enable it.

*   **Enable on boot**: `sudo systemctl enable <service_name>`
    *   This creates a symlink from the service file to the appropriate `.target.wants/` directory.
*   **Disable on boot**: `sudo systemctl disable <service_name>`
*   **Check if enabled**: `systemctl is-enabled <service_name>`

## Creating Custom Service Files

You often need to create custom `.service` files, especially when deploying game servers or custom applications. Unit files are typically placed in `/etc/systemd/system/`.

Example of a basic service file (`/etc/systemd/system/my-app.service`):

```ini
[Unit]
Description=My Custom Application
After=network.target

[Service]
User=appuser
WorkingDirectory=/opt/myapp
ExecStart=/usr/bin/node server.js
Restart=always

[Install]
WantedBy=multi-user.target
```

**After creating or modifying a unit file, you must tell systemd to re-read its configuration:**
`sudo systemctl daemon-reload`

## Journald

`systemd` includes its own logging daemon called `journald`. It collects logs from the kernel, initrd, services, and applications. Logs are stored in a binary format.

You read these logs using `journalctl`:

*   **View all logs**: `journalctl`
*   **View logs for a specific service**: `journalctl -u <service_name>`
*   **Follow logs in real-time**: `journalctl -u <service_name> -f`
*   **View logs since the last boot**: `journalctl -b`

## Best Practices

*   **Use unprivileged users**: When creating custom `.service` files, always use the `User=` directive to run the application as a dedicated, non-root user for security.
*   **Restart policies**: Utilize directives like `Restart=on-failure` or `Restart=always` to ensure high availability for your applications if they crash.
