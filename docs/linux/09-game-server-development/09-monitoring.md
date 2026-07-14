---
title: System Monitoring
description: Tools and practices for monitoring server health and performance.
---

# System Monitoring

"You cannot manage what you do not measure." In a production game server environment, you cannot rely on players complaining about lag to know there is a problem. You need proactive monitoring to identify bottlenecks before they cause downtime.

## What to Monitor

1.  **Hardware Metrics**:
    *   CPU Usage (Overall and per-core)
    *   Memory (RAM) Usage and Swap usage
    *   Disk I/O (Read/Write speeds and latency)
    *   Network Traffic (Bandwidth usage)
2.  **Application Metrics (Game Server)**:
    *   TPS (Ticks Per Second - should be 20 for Minecraft)
    *   Player Count
    *   Memory usage of the specific Java/PHP process
3.  **Database Metrics**:
    *   Query latency
    *   Active connections

## The Modern Monitoring Stack: Prometheus & Grafana

The industry standard for infrastructure monitoring is the Prometheus and Grafana stack.

### 1. Prometheus (The Data Collector)

Prometheus is a time-series database. It does not wait for servers to send it data; instead, it regularly "scrapes" (pulls) metrics from specified endpoints via HTTP.

To get hardware metrics from a Linux server, you install the **Node Exporter**. The Node Exporter runs as a background service and exposes a web page (e.g., `http://server-ip:9100/metrics`) containing current hardware stats. Prometheus is configured to read this page every 15 seconds and store the historical data.

### 2. Grafana (The Dashboard)

Prometheus stores the data, but it is raw and hard to read. Grafana connects to Prometheus and turns that data into beautiful, customizable graphs and dashboards.

With Grafana, you can create a screen that shows the CPU usage of all 10 of your physical nodes side-by-side, allowing you to instantly spot anomalies.

## Setup Overview

1.  **Install Node Exporter** on every physical machine (Node) you want to monitor.
2.  **Install Prometheus** on a central monitoring server. Configure its `prometheus.yml` file to include the IP addresses of all your Node Exporters.
3.  **Install Grafana** on the monitoring server. Connect it to the Prometheus data source.
4.  **Import Dashboards**: You do not have to build graphs from scratch. You can import pre-built Node Exporter dashboards from the Grafana community.

## Application-Level Monitoring

Monitoring hardware is not enough. A server might have 50% CPU free, but the game server itself might be lagging due to a single-thread bottleneck.

To monitor PMMP or Waterdog, you need a plugin that exposes internal metrics in a format Prometheus understands (Prometheus exporters).
*   For Java proxies, there are often Prometheus exporter plugins available.
*   For PMMP, developers sometimes write custom plugins that expose an HTTP endpoint with TPS and player counts.

## Alerting

Monitoring is only useful if someone is watching it. Grafana includes an alerting system.

You can set rules such as:
*   *If CPU usage > 90% for 5 minutes, send an alert.*
*   *If PMMP TPS drops below 15 for 2 minutes, send an alert.*

Alerts can be routed to Discord webhooks, Slack, or pager services like PagerDuty to notify administrators immediately, day or night.
