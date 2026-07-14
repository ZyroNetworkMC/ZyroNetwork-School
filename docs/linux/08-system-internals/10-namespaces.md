---
title: Linux Namespaces
description: Understanding the kernel feature that provides process isolation, powering containers.
---

# Linux Namespaces

If cgroups are responsible for limiting *how much* a process can use, **Namespaces** are responsible for limiting *what a process can see*.

Namespaces are a Linux kernel feature that partitions kernel resources such that one set of processes sees one set of resources, while another set of processes sees a different set of resources. Along with cgroups, namespaces are the underlying technology that creates the isolation required for Linux containers (Docker, LXC).

## How Namespaces Provide Isolation

When a process runs in a namespace, it is isolated from processes in other namespaces. It is tricked into thinking it is running on a dedicated operating system, unaware of the broader host system.

There are several types of namespaces, each isolating a specific global system resource:

### 1. Mount Namespaces (`mnt`)
Isolates the set of mount points seen by a group of processes. Processes in different mount namespaces have different views of the filesystem hierarchy. This allows a container to have its own independent root filesystem (`/`) without affecting the host's filesystem.

### 2. Process ID Namespaces (`pid`)
Isolates the process ID number space. A process inside a PID namespace will have a completely different PID than it does on the host system. Crucially, the first process created in a PID namespace is assigned PID 1. This means a container can have its own `init` system, and processes inside cannot see or kill processes outside their namespace.

### 3. Network Namespaces (`net`)
Isolates network interfaces, routing tables, firewall rules, and port numbers. A process in a network namespace has its own `eth0` interface and its own localhost `127.0.0.1`. It can bind to port 80 without conflicting with a web server running on port 80 on the host system.

### 4. Interprocess Communication Namespaces (`ipc`)
Isolates IPC resources, such as System V IPC objects and POSIX message queues. Processes in one IPC namespace cannot communicate with processes in another using these methods.

### 5. UTS Namespaces (`uts`)
Isolates the hostname and NIS domain name. This allows a container to have its own distinct hostname (e.g., `web-container-01`) separate from the physical server's hostname.

### 6. User Namespaces (`user`)
Isolates user and group IDs. A process can have a normal, unprivileged user ID on the host system, but be mapped to user ID 0 (root) *inside* the namespace. This is a massive security feature: it allows a container application to run with apparent root privileges (to bind to low ports or configure networks within its namespace) while actually running as a safe, restricted user on the underlying host.

## Tools for Interacting with Namespaces

While container engines abstract namespaces away, administrators can interact with them directly:

*   **`lsns`**: Lists all namespaces currently active on the system.
*   **`unshare`**: Runs a program with some namespaces unshared from the parent. (e.g., creating a new namespace).
*   **`nsenter`**: Enters an existing namespace and runs a command. This is exactly what happens behind the scenes when you use `docker exec -it <container> bash`—your shell is attaching to the container's PID, mount, and network namespaces.

## Best Practices

*   **Understand the abstraction**: When troubleshooting a container, remember that networking tools (`ip a`, `netstat`) run on the host will not show the container's network state. You must execute those tools *inside* the container's network namespace.
*   **Leverage User Namespaces**: For enhanced security, configure your container runtimes (like Docker or Podman) to use user namespace remapping, preventing container-root from having host-root access if a breakout occurs.
