---
title: Control Groups (cgroups)
description: How Linux limits and isolates resource usage for processes.
---

# Control Groups (cgroups)

Control Groups, commonly known as **cgroups**, are a Linux kernel feature that allows administrators to allocate resources—such as CPU time, system memory, network bandwidth, or combinations of these resources—among user-defined groups of tasks (processes).

cgroups are one of the foundational technologies that make containers (like Docker and Kubernetes) possible.

## Core Capabilities of cgroups

cgroups provide four primary features:

1.  **Resource Limiting**: You can configure a cgroup so that processes within it cannot exceed a specific memory limit or use more than a certain percentage of CPU time. If a process tries to exceed a memory limit, it may be killed by the OOM killer.
2.  **Prioritization**: You can give some groups a larger share of CPU utilization or disk I/O throughput than others.
3.  **Accounting**: You can measure how much of a system's resources specific groups are using, which is useful for billing in shared hosting environments.
4.  **Control**: You can freeze and resume the execution of all processes in a cgroup simultaneously.

## How cgroups Work

cgroups are organized hierarchically, similar to the filesystem. In fact, they are managed through a pseudo-filesystem typically mounted at `/sys/fs/cgroup`.

There are different "subsystems" (also called controllers) in the kernel that represent specific resources. Common controllers include:

*   **`cpu`**: Guarantees a minimum number of CPU shares or sets a hard cap on CPU usage.
*   **`memory`**: Sets limits on memory usage, including physical memory, kernel memory, and swap space.
*   **`blkio`**: Sets limits on block device (disk) input/output.
*   **`pids`**: Limits the number of processes or threads that can be created in a cgroup, protecting against fork bombs.

When a process is assigned to a cgroup, all its child processes automatically inherit that assignment.

## cgroups v1 vs. v2

There are two versions of the cgroups API:

*   **cgroups v1**: The original implementation. It allowed different hierarchies for different controllers (e.g., a process could be in one group for memory and a completely different group for CPU). This flexibility led to immense complexity and conflicting rules.
*   **cgroups v2**: The modern implementation. It features a single unified hierarchy. A process belongs to exactly one cgroup, and all enabled controllers (CPU, memory, etc.) apply to that single node in the hierarchy. Most modern distributions and container runtimes default to cgroups v2.

## Systemd Integration

In modern Linux, `systemd` acts as the primary manager for cgroups. By default, `systemd` places every service it manages into its own dedicated cgroup.

This is why you can easily limit resources using `systemd` unit files. For example, to limit a game server service to 2GB of RAM and restrict it to a specific CPU, you can add these lines to the `[Service]` section of its unit file:

```ini
[Service]
ExecStart=/opt/server/start.sh
MemoryMax=2G
CPUQuota=50%
```

## Best Practices

*   **Use systemd for management**: Manually interacting with `/sys/fs/cgroup` is complex and error-prone. Leverage `systemd` unit directives (like `MemoryMax`, `CPUQuota`, `IOReadBandwidthMax`) to apply cgroup limits to your services.
*   **Protect core services**: In environments running heavy workloads (like game server nodes), use cgroups to reserve resources for critical system services (`sshd`, `systemd-journald`) to ensure the server remains accessible even under extreme load.
