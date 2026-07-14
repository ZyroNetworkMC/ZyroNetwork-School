---
title: Linux for Game Hosting
description: Why Linux is the standard for game servers and how to optimize it.
---

# Linux for Game Hosting

While it is possible to run game servers on Windows, Linux is the undisputed industry standard for production game hosting. It offers superior performance, lower overhead, unmatched stability, and the ability to automate everything via the command line.

## Why Choose Linux?

1.  **Lower Resource Overhead**: A bare-bones Linux server installation (without a GUI) consumes less than 200MB of RAM and minimal CPU cycles. Windows Server can consume over 2GB of RAM just idling. Every megabyte saved by the OS can be allocated to the game server.
2.  **Stability**: Linux kernels are incredibly stable and can run for years without requiring a reboot (aside from kernel updates). They handle memory leaks and high loads much better than desktop operating systems.
3.  **Automation and Tooling**: Linux provides powerful scripting capabilities (Bash, Python) and native containerization tools (Docker, LXC).
4.  **Cost**: Most Linux distributions (Ubuntu, Debian, AlmaLinux) are completely free, avoiding expensive Windows Server licensing fees.

## Recommended Distributions

For game hosting, stability and up-to-date packages are key.

*   **Ubuntu Server LTS (Long Term Support)**: The most popular choice. It has vast community support, extensive documentation, and guarantees 5 years of security updates.
*   **Debian**: Known for rock-solid stability. Ubuntu is built upon Debian. It uses slightly older, more tested packages.
*   **AlmaLinux / Rocky Linux**: Enterprise-grade clones of Red Hat Enterprise Linux (RHEL). Excellent choices if you need long-term stability and SELinux security.

## Basic Server Optimization

Out-of-the-box Linux is tuned for general workloads. Game servers benefit from specific optimizations.

### 1. CPU Frequency Scaling (Governor)

Modern CPUs dynamically adjust their clock speed to save power (the `ondemand` or `powersave` governor). When a player logs in, there is a delay while the CPU ramps up speed, causing lag.

For game servers, force the CPU to run at maximum speed constantly using the `performance` governor.

```bash
# Install cpufrequtils
sudo apt install cpufrequtils

# Set the governor to performance
sudo cpufreq-set -r -g performance
```

### 2. Swap Configuration (Swappiness)

Game servers require fast memory access. If a game server is swapped to disk, performance plummets. We want to tell the kernel to avoid using swap space unless absolutely necessary.

Edit `/etc/sysctl.conf` and add/modify this line:
`vm.swappiness=10` (Default is usually 60. Lower is better for game servers).

### 3. Open File Limits

Game servers, especially proxies and large networks, open many network connections and files. The default Linux limit is often 1024, which is too low and leads to "Too many open files" errors.

Edit `/etc/security/limits.conf` to increase limits for the user running the server:
```text
gameuser soft nofile 65535
gameuser hard nofile 65535
```

### 4. Network Tuning

Game servers often rely on UDP. Tuning the network stack can help handle high packet rates and mitigate minor network flooding.

Add the following to `/etc/sysctl.conf`:
```ini
# Increase socket buffer sizes
net.core.rmem_max = 16777216
net.core.wmem_max = 16777216
# TCP Fast Open
net.ipv4.tcp_fastopen = 3
```

**Apply sysctl changes with:** `sudo sysctl -p`

## Best Practices

*   **Create a dedicated user**: Never run game servers as the `root` user. If a vulnerability is found in the game server software, running as root gives the attacker full control of your machine. Create a specific user (e.g., `minecraft`) with limited privileges.
*   **Use Tmux or Screen**: If you run a server directly from an SSH session, the server will terminate when you close the SSH client. Use terminal multiplexers like `tmux` to keep processes running in the background. (Though, utilizing `systemd` or Pterodactyl is the production-grade approach).
