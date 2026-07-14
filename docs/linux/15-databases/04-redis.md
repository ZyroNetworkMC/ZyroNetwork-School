---
title: Redis
description: An overview of Redis, the in-memory data structure store.
---

# Redis

Redis (Remote Dictionary Server) is an open-source, in-memory data structure store. It can be used as a database, cache, message broker, and streaming engine. Because it holds data in RAM, operations are exceptionally fast.

## Key Features

*   **In-Memory Storage:** Delivers microsecond latency for read and write operations.
*   **Data Structures:** Supports strings, hashes, lists, sets, sorted sets, bitmaps, hyperloglogs, and geospatial indexes.
*   **Persistence:** Can persist data to disk for durability, using RDB (snapshots) or AOF (Append Only File) mechanisms.
*   **High Availability:** Supports replication (primary-replica) and automatic failover via Redis Sentinel.
*   **Clustering:** Redis Cluster provides horizontal scaling and data sharding.

## Installation

Redis is easily installed from standard repositories.

*   **Debian/Ubuntu:** `apt install redis-server`
*   **RHEL/CentOS:** `yum install redis` (EPEL repository required)

Start and enable the service:

```bash
sudo systemctl start redis
sudo systemctl enable redis
```

## Basic Operations

Interact with Redis using the `redis-cli` command-line tool.

```bash
redis-cli
```

### Common Commands

*   **Set a Key:** `SET mykey "Hello World"`
*   **Get a Key:** `GET mykey`
*   **Set with Expiration (Cache):** `SETEX mycachekey 60 "Temporary Data"` (expires in 60 seconds)
*   **List Operations:**
    *   `LPUSH mylist "item1"`
    *   `RPUSH mylist "item2"`
    *   `LRANGE mylist 0 -1` (returns all items)
*   **Hash Operations:**
    *   `HSET user:1 name "John" age 30`
    *   `HGET user:1 name`
    *   `HGETALL user:1`

## Configuration and Best Practices

The main configuration file is typically `/etc/redis/redis.conf`.

*   **Security:** By default, Redis binds to `127.0.0.1` and has no password.
    *   If exposing Redis to the network, set a strong password using the `requirepass` directive.
    *   Use the `bind` directive to restrict access to specific IP addresses.
*   **Memory Management:** Redis operates entirely in memory. It is crucial to set a memory limit to prevent it from exhausting system RAM and causing OOM (Out of Memory) kills.
    *   Set `maxmemory` (e.g., `maxmemory 2gb`).
    *   Configure the `maxmemory-policy` to dictate what happens when the limit is reached (e.g., `allkeys-lru` to evict least recently used keys, making it act as a cache).
*   **Persistence:** Choose the right persistence model based on the requirement.
    *   **RDB (Redis Database):** Periodic snapshots. Faster restarts, but potential data loss between snapshots.
    *   **AOF (Append Only File):** Logs every write operation. More durable but can be slower and result in larger files.
