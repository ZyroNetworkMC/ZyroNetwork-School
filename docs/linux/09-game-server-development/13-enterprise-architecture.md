---
title: Enterprise Architecture Example
description: A blueprint for a production-grade, highly available game server network.
---

# Enterprise Architecture Example

Bringing together all the concepts covered—Linux optimization, Docker, Proxies, Databases, and Monitoring—this document outlines a blueprint for a professional, highly available game server architecture designed to support thousands of concurrent players.

This architecture assumes the use of multiple dedicated physical servers (Bare Metal Nodes) located in a secure data center.

## The Infrastructure Blueprint

### Node 1: The Gateway (Edge Node)
*   **Hardware**: Focus on network throughput and anti-DDoS capabilities. High-speed NIC (10Gbps+). CPU needs good single-thread performance but doesn't need many cores.
*   **Software**:
    *   **Nginx Reverse Proxy**: Handles all HTTP/HTTPS traffic, terminates SSL, and routes to internal web APIs.
    *   **WaterdogPE (Proxy 1 & 2)**: Runs multiple instances of the proxy software to handle UDP traffic and route players to backend servers.
*   **Security**: Only ports 80/443 (TCP) and 19132 (UDP) are open to the public internet.

### Node 2: Database and Management (State Node)
*   **Hardware**: NVMe SSDs for ultra-fast I/O. Plenty of RAM.
*   **Software**:
    *   **MariaDB/MySQL**: The primary relational database for persistent data.
    *   **Redis**: In-memory cache for fast data retrieval and cross-server messaging (Pub/Sub).
    *   **Pterodactyl Panel**: The web interface for managing the entire network.
    *   **Prometheus & Grafana**: Centralized monitoring and alerting.
*   **Security**: Completely closed to the public internet (except perhaps the Panel web interface via Nginx on Node 1). Only accessible via a private Virtual LAN (VLAN).

### Nodes 3, 4, 5... : The Compute Nodes (Workers)
*   **Hardware**: High clock speed CPUs (e.g., Intel i9 or AMD Ryzen 9) to handle the single-threaded nature of PMMP. 64GB+ RAM.
*   **Software**:
    *   **Pterodactyl Wings Daemon**: Manages the Docker containers on the node.
    *   **Docker**: Container engine.
    *   **Node Exporter**: For Prometheus to scrape hardware metrics.
*   **Payload**: These nodes run dozens of isolated Docker containers, each holding a PMMP instance (Hubs, Minigames, Factions shards).
*   **Security**: No public ports open. They only communicate with Node 1 (Waterdog routing traffic *in*) and Node 2 (saving data *out*) over the private VLAN.

## Traffic Flow Example

1.  A player connects to `play.example.com`. DNS resolves this to **Node 1's** public IP.
2.  The traffic hits **WaterdogPE** on Node 1.
3.  WaterdogPE authenticates the player and routes the UDP traffic over the internal VLAN to a Hub container running on **Node 3**.
4.  The player enters a command in the Hub to buy an item.
5.  The PMMP Hub container on Node 3 sends an asynchronous request over the VLAN to the **MariaDB** database on **Node 2** to deduct coins.
6.  Simultaneously, the player visits `store.example.com` in their web browser.
7.  The traffic hits **Nginx** on **Node 1**, which proxies the request to the store's backend API container (wherever it is running), terminating the SSL connection.

## Advantages of this Architecture

*   **Security Isolation**: The databases and compute nodes are completely hidden from the public internet. A DDoS attack can only hit the Edge Node, which is specifically designed to handle it.
*   **Scalability**: If you need more compute power, you simply rent Node 6, install Wings, connect it to the Panel, and start deploying PMMP instances to it immediately.
*   **Resilience**: If a compute node (Node 4) suffers a hardware failure, you only lose the specific shards running on it. The network as a whole remains online, and Waterdog stops routing players to the dead node.

## Conclusion

Building an enterprise game network is no longer about running a single script on a VPS. It requires treating the gaming network as a complex distributed application, leveraging modern DevOps practices, containerization, and strict network segmentation.
