---
title: Netdata
description: A guide to real-time, high-resolution performance monitoring with Netdata.
---

# Netdata

Netdata is a distributed, real-time performance and health monitoring system. It provides unparalleled insights, in real-time, of everything happening on the system it runs on (including applications such as web and database servers).

## Core Features

*   **Real-time, high-resolution:** Collects metrics per second.
*   **Low footprint:** Designed to be lightweight and run indefinitely on all systems.
*   **Zero configuration:** Auto-detects thousands of metrics out of the box.
*   **Interactive web dashboards:** Stunning, highly responsive visualization.
*   **Customizable alerting:** Powerful alarm engine.
*   **Extensible:** Supports hundreds of plugins for various applications and services.

## Installation

Netdata can be installed on almost any Linux distribution with a single command. The most common and recommended way is using their kickstart script:

```bash
bash <(curl -Ss https://my-netdata.io/kickstart.sh)
```

This script will determine the OS, install necessary dependencies, and install Netdata.

## Architecture

Netdata operates primarily as a standalone agent on each node.

1.  **Data Collection:** Internal and external plugins gather metrics from the OS, hardware, and applications.
2.  **Time-Series Database (TSDB):** Metrics are stored in a custom, highly efficient TSDB in memory, optionally spilling to disk.
3.  **Alarm Engine:** Evaluates metrics against pre-configured or custom rules.
4.  **Web Server:** Serves the API and the interactive dashboard.

## Using the Dashboard

Once installed, the dashboard is accessible at `http://[your-server-ip]:19999`.

*   **Navigation:** The right-hand menu provides quick navigation to different sections (CPU, Memory, Disks, Network, Applications).
*   **Interactivity:** You can pan, zoom, and highlight specific timeframes on any chart. All charts sync automatically to the selected timeframe.
*   **Alerts:** Active alerts are visible directly on the dashboard.

## Configuration

The main configuration file is usually located at `/etc/netdata/netdata.conf`. However, Netdata provides a helper script to edit configuration files safely:

```bash
cd /etc/netdata
sudo ./edit-config netdata.conf
```

### Configuring Alarms

Alarms are configured in `.conf` files under `/etc/netdata/health.d/`. You can edit existing ones or create new ones using the `edit-config` tool:

```bash
sudo ./edit-config health.d/cpu.conf
```

## Integrating with Centralized Monitoring

While Netdata excels at per-node real-time monitoring, it can also stream metrics to centralized Time-Series Databases (like Prometheus, Graphite, or InfluxDB) for long-term storage and global analysis. This allows you to combine Netdata's high-resolution, zero-config collection with the centralized capabilities of systems like Prometheus and Grafana.
