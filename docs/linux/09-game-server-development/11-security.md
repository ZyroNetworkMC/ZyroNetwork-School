---
title: Security Best Practices
description: Securing Linux infrastructure and game servers against attacks.
---

# Security Best Practices

Game servers are high-profile targets. They frequently suffer from DDoS attacks, exploit attempts, and unauthorized access attempts (often from rival networks or disgruntled players).

Securing a game server network requires defense in depth—applying security measures at multiple layers of the infrastructure.

## 1. Operating System Security

The foundation must be secure.

*   **SSH Key Authentication**: Never allow password logins for SSH. Configure `/etc/ssh/sshd_config` to use `PasswordAuthentication no` and require RSA/Ed25519 key pairs.
*   **Disable Root Login**: Set `PermitRootLogin no` in the SSH config. Log in as a standard user and use `sudo` for administrative tasks.
*   **Change Default Ports**: Move SSH off port 22. While it doesn't stop targeted attacks, it eliminates 99% of automated botnet brute-force noise in your logs.
*   **Keep Updated**: Run `apt update && apt upgrade` regularly to patch OS vulnerabilities. Consider enabling `unattended-upgrades` for automatic security patching.

## 2. Firewall Configuration (UFW/Iptables)

A firewall dictates what traffic is allowed to reach your machine. By default, you should deny all incoming traffic and explicitly allow only what is necessary.

Using **UFW (Uncomplicated Firewall)** on Ubuntu:

```bash
sudo ufw default deny incoming
sudo ufw default allow outgoing
# Allow SSH (assuming you moved it to port 2222)
sudo ufw allow 2222/tcp
# Allow WaterdogPE proxy port
sudo ufw allow 19132/udp
# Allow Nginx web server
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable
```

**Crucial Internal Security**: If your backend PMMP servers (e.g., port 19133, 19134) are on the same machine as your Waterdog proxy, **do not** allow those ports through the public firewall. Only the proxy should be accessible from the internet.

## 3. DDoS Mitigation

Because Minecraft Bedrock uses UDP, it is highly susceptible to UDP flood attacks. Standard web proxies like Cloudflare will not protect game traffic.

*   **DDoS Protected Hosting**: You must rent servers from hosting providers that offer specialized hardware-level DDoS mitigation (e.g., OVH, Path.net, Cosmic Guard).
*   **Anycast Networks**: For massive networks, utilizing TCP/UDP Anycast allows you to distribute incoming attacks across multiple geographically diverse scrubbing centers.
*   **Fail2Ban**: Install `fail2ban` to monitor authentication logs (SSH, FTP) and automatically ban IP addresses that show malicious signs, such as too many failed password attempts.

## 4. Application Level Security

*   **MySQL Security**: As mentioned in the database section, never expose MySQL (port 3306) to the public internet. Bind it to localhost or a private LAN IP.
*   **Proxy Authentication Bypass**: This is the most common vulnerability in Minecraft networks. You must ensure that backend servers only accept connections that originate from your proxy's IP address. If a backend server is exposed, an attacker can connect directly to it, spoofing the UUID of an admin, and bypass the proxy's authentication.
*   **Plugin Audits**: Only install plugins from trusted sources. Malicious plugins can execute arbitrary shell commands on your Linux host. Pterodactyl mitigates this somewhat by isolating the process in a Docker container, but the attacker could still destroy the game world or steal database credentials.

## 5. Principle of Least Privilege

Every application and user should only have the minimum permissions necessary to function.

*   Run game servers under a dedicated user account (e.g., `minecraft`), never root.
*   If a plugin only needs to read data from MySQL, give its database user `SELECT` privileges only, not `UPDATE` or `DELETE`.
