---
title: WaterdogPE (Proxy)
description: Utilizing WaterdogPE to link multiple Bedrock servers together.
---

# WaterdogPE

As a Minecraft network grows, a single server instance can no longer handle the player load due to single-threaded CPU limitations. The solution is horizontal scaling: running multiple server instances (e.g., a Hub server, Factions server, Minigames server) and connecting them seamlessly.

For Minecraft: Java Edition, software like BungeeCord or Velocity is used. For Minecraft: Bedrock Edition, the standard solution is **WaterdogPE**.

## What is a Proxy?

WaterdogPE acts as a reverse proxy specifically for the Bedrock UDP protocol (RakNet).

1.  Players connect directly to the WaterdogPE server's IP address.
2.  WaterdogPE intercepts the connection and forwards it to a backend Bedrock server (like PocketMine-MP).
3.  When a player uses a command (like `/server factions`), WaterdogPE seamlessly disconnects them from the Hub backend and connects them to the Factions backend without the player dropping back to the main menu.

## Architecture

A standard network architecture looks like this:

`[Player] <==UDP==> [WaterdogPE] <==UDP==> [PMMP Hub] / [PMMP Factions]`

*   **Public IP**: Only the WaterdogPE server needs to be exposed to the public internet on port 19132.
*   **Backend Servers**: The backend PMMP servers should run on internal/private IP addresses or firewalled ports so players cannot bypass the proxy and connect to them directly.

## Installation and Configuration

WaterdogPE is a Java application.

1.  **Install Java**: Ensure you have Java 17 or higher installed.
    `sudo apt install openjdk-17-jre-headless`
2.  **Download**: Download the latest `.jar` file from their CI or GitHub releases.
3.  **Run**: Execute the jar to generate the configuration files.
    `java -Xms512M -Xmx1G -jar Waterdog.jar`

### Configuring config.yml

The core configuration happens in `config.yml`.

```yaml
network_settings:
  # The IP and port Waterdog listens on
  host: 0.0.0.0:19132
  # The default server players are sent to upon joining
  default_server: "hub"

servers:
  hub:
    address: 127.0.0.1:19133
    server_info: "Hub Server"
  factions:
    address: 127.0.0.1:19134
    server_info: "Factions Server"
```

### Critical Security Step: Waterdog Validation

If Waterdog is proxying connections, the backend PMMP server will see every connection coming from the Proxy's IP address (e.g., 127.0.0.1), not the player's actual IP. Furthermore, authentication is handled by Waterdog.

You **must** configure your PMMP backend to trust the proxy and accept the forwarded player IPs and UUIDs.

In PMMP, use a plugin like **WaterdogPE-LoginExtras** or configure native proxy settings in `pocketmine.yml` (if supported) to ensure:
1.  PMMP accepts the actual player IP forwarded by Waterdog.
2.  PMMP refuses connections that do not come from the Waterdog proxy (preventing malicious users from bypassing bans by connecting directly to the backend port).

## Best Practices

*   **Run on the same LAN**: To minimize latency, the Waterdog proxy and backend PMMP servers should be located in the same data center, preferably communicating over a private LAN network.
*   **Dedicated Node**: For large networks, dedicate a specific physical or virtual machine solely to running WaterdogPE. Proxying network packets is CPU and network-intensive.
