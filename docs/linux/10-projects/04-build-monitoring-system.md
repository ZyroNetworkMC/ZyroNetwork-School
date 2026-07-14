---
title: Building a Monitoring System
description: How to build a server monitoring system using Prometheus and Grafana.
---

# Building a Monitoring System

Monitoring your servers ensures high availability and performance. This guide covers deploying Prometheus for data collection and Grafana for visualization.

## Concepts
- **Prometheus:** A powerful time-series database and alerting system.
- **Grafana:** A multi-platform open source analytics and interactive visualization web application.
- **Node Exporter:** A Prometheus exporter for hardware and OS metrics.

## Step-by-step Guide

### 1. Installing Node Exporter
Download and run the Node Exporter on the target machine:
```bash
wget https://github.com/prometheus/node_exporter/releases/download/v1.3.1/node_exporter-1.3.1.linux-amd64.tar.gz
tar xvfz node_exporter-*
cd node_exporter-*
./node_exporter
```

### 2. Installing Prometheus
Configure Prometheus to scrape the Node Exporter:
```yaml
scrape_configs:
  - job_name: 'node'
    static_configs:
      - targets: ['localhost:9100']
```

### 3. Installing Grafana
```bash
sudo apt-get install -y apt-transport-https
sudo apt-get install -y software-properties-common wget
wget -q -O - https://packages.grafana.com/gpg.key | sudo apt-key add -
sudo add-apt-repository "deb https://packages.grafana.com/oss/deb stable main"
sudo apt-get update
sudo apt-get install grafana
sudo systemctl start grafana-server
```

## Best Practices
- **Alerting:** Set up alert rules in Prometheus and send them to a webhook, Slack, or email.
- **Security:** Do not expose Prometheus or Node Exporter endpoints to the public internet without authentication.
- **Retention:** Configure data retention policies in Prometheus to avoid disk space exhaustion.
