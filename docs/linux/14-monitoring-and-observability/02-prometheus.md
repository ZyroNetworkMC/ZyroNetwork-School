---
title: Prometheus
description: A comprehensive guide to Prometheus for monitoring and alerting.
---

# Prometheus

Prometheus is an open-source systems monitoring and alerting toolkit originally built at SoundCloud. It is now a standalone open source project and maintained independently of any company. Prometheus joined the Cloud Native Computing Foundation in 2016 as the second hosted project, after Kubernetes.

## Core Features

*   **Multi-dimensional data model:** Time series data identified by metric name and key/value pairs.
*   **PromQL:** A flexible query language to leverage this dimensionality.
*   **No reliance on distributed storage:** Single server nodes are autonomous.
*   **Pull model:** Time series collection happens via a pull model over HTTP.
*   **Pushing time series:** Supported via an intermediary gateway.
*   **Service discovery or static configuration:** Targets are discovered dynamically or configured statically.
*   **Multiple modes of graphing and dashboarding support.**

## Architecture

The Prometheus ecosystem consists of multiple components, many of which are optional:

*   **Prometheus Server:** Scrapes and stores time series data.
*   **Client Libraries:** For instrumenting application code.
*   **Pushgateway:** For supporting short-lived jobs.
*   **Exporters:** For exporting metrics from third-party systems like HAProxy, StatsD, Graphite, etc.
*   **Alertmanager:** To handle alerts.
*   **Various support tools.**

## Basic Concepts

### Metrics Types

Prometheus client libraries offer four core metric types:

*   **Counter:** A cumulative metric that represents a single monotonically increasing counter whose value can only increase or be reset to zero on restart.
*   **Gauge:** A metric that represents a single numerical value that can arbitrarily go up and down.
*   **Histogram:** Samples observations (usually things like request durations or response sizes) and counts them in configurable buckets. It also provides a sum of all observed values.
*   **Summary:** Similar to a histogram, a summary samples observations. While it also provides a total count of observations and a sum of all observed values, it calculates configurable quantiles over a sliding time window.

### PromQL Examples

*   Return all time series with the metric `http_requests_total`:
    ```promql
    http_requests_total
    ```
*   Return all time series with the metric `http_requests_total` and the given job and handler labels:
    ```promql
    http_requests_total{job="apiserver", handler="/api/comments"}
    ```

## Installation and Configuration

Prometheus can be installed via binaries, Docker, or configuration management tools. Configuration is typically done via a YAML file, defining global settings, scrape configs, and alerting rules.

### Best Practices

*   **Keep labels simple:** Avoid high cardinality labels (e.g., user IDs) which can bloat the time series database.
*   **Use appropriate metric types:** Choose counters for rates, gauges for current states, and histograms for distributions.
*   **Set reasonable scrape intervals:** Scraping too often can overwhelm the server, while scraping too rarely can miss important events.
