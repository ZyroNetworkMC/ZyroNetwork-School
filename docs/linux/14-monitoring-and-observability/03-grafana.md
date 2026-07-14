---
title: Grafana
description: A comprehensive guide to Grafana for visualizing observability data.
---

# Grafana

Grafana is an open-source analytics and interactive visualization web application. It provides charts, graphs, and alerts for the web when connected to supported data sources.

## Core Features

*   **Visualizations:** Fast and flexible client-side graphs with a multitude of options. Panel plugins offer many different ways to visualize metrics and logs.
*   **Dynamic Dashboards:** Create dynamic and reusable dashboards with template variables that appear as dropdowns at the top of the dashboard.
*   **Explore Metrics:** Explore your data through ad-hoc queries and dynamic drilldown. Split view and compare different time ranges, queries, and data sources side by side.
*   **Alerting:** Visually define alert rules for your most important metrics. Grafana will continuously evaluate and send notifications to systems like Slack, PagerDuty, VictorOps, OpsGenie.
*   **Mixed Data Sources:** Mix different data sources in the same graph. You can specify a data source on a per-query basis.

## Connecting Data Sources

Grafana supports a wide range of data sources natively, including:

*   Prometheus
*   Graphite
*   InfluxDB
*   Elasticsearch
*   MySQL
*   PostgreSQL
*   CloudWatch

To add a data source, navigate to Configuration -> Data Sources in the Grafana UI and enter the connection details.

## Dashboards and Panels

A Dashboard is a set of one or more Panels organized and arranged into one or more Rows.

### Panels

Panels are the basic visualization building blocks. Grafana provides several types of panels:

*   **Graph:** The most common panel, used for time series data.
*   **Stat:** Displays one or more summary stats (e.g., current value, min, max, average).
*   **Gauge:** A classic gauge visualization.
*   **Bar gauge:** A bar visualization.
*   **Table:** Displays data in a tabular format.
*   **Text:** Allows you to add markdown or HTML to your dashboard.

## Best Practices

*   **Use template variables:** Avoid hardcoding server names or metrics. Use variables to make dashboards reusable across different environments or applications.
*   **Organize with folders:** Group related dashboards into folders for easier navigation.
*   **Set up alerting:** Configure alerts on critical metrics to be notified of issues proactively.
*   **Leverage community dashboards:** Grafana's community offers thousands of pre-built dashboards for common applications and systems. You can import these directly into your instance.
