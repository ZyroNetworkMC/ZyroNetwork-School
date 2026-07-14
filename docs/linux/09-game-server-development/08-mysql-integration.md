---
title: MySQL Integration
description: Managing shared data across multiple game server instances.
---

# MySQL Integration

When running a network with multiple server instances (e.g., a Hub, Factions 1, Factions 2), you cannot rely on local flat-file databases (like SQLite or YAML files) to store player data.

If a player earns 100 coins on the Hub server, that data needs to be instantly available when they switch to the Factions server. The solution is a centralized relational database: **MySQL** or its drop-in replacement, **MariaDB**.

## The Role of the Database

In a game server context, a central database stores:
*   Economy data (balances, transaction logs)
*   Punishments (bans, mutes, IP bans)
*   Ranks and permissions
*   Player statistics (kills, deaths, playtime)
*   Cross-server synchronization data

## Installation (MariaDB)

MariaDB is highly recommended over MySQL on Linux for better performance and fully open-source licensing.

```bash
sudo apt update
sudo apt install mariadb-server
sudo mysql_secure_installation
```
*Note: Always run `mysql_secure_installation` after installing to set a root password and remove default test databases.*

## Connecting PMMP to MySQL

Plugins in PMMP utilize asynchronous tasks to query the database. **Never run database queries on the main thread**, as a slow database response will cause the entire server to freeze (lag spike) until the query completes.

### Configuring Database Users

Never use the `root` MySQL user for game servers. Create dedicated databases and users with least privilege access.

Log into MySQL: `sudo mysql -u root -p`

```sql
-- Create a database for the economy plugin
CREATE DATABASE economy_db;

-- Create a user and grant privileges
CREATE USER 'economy_user'@'%' IDENTIFIED BY 'strong_password_here';
GRANT ALL PRIVILEGES ON economy_db.* TO 'economy_user'@'%';

-- Flush privileges to apply changes
FLUSH PRIVILEGES;
```
*(Note: Using `%` allows connection from any IP. In a strict production environment, specify the exact IP of the game server instead).*

## Allowing Remote Connections

By default, MariaDB only listens on `127.0.0.1` (localhost). If your game servers are on different physical machines than your database, you must configure MariaDB to listen on public or LAN IP addresses.

Edit `/etc/mysql/mariadb.conf.d/50-server.cnf`:
Find the line `bind-address = 127.0.0.1` and change it to `bind-address = 0.0.0.0` (to listen on all interfaces) or the specific LAN IP.

Restart the service:
`sudo systemctl restart mariadb`

## Database Connection Pooling

Opening a new TCP connection to a database for every single query is extremely slow. Efficient plugins use **Connection Pooling**.

A connection pool opens several connections to the database on startup and keeps them alive. When a plugin needs to make a query, it borrows a connection from the pool, runs the query, and returns the connection to the pool. This drastically reduces latency.

Library `libasynql` is the standard tool used by PMMP developers to handle asynchronous, pooled MySQL queries safely.

## Best Practices

*   **Private Network**: Database traffic is rarely encrypted by default. Ensure your game servers communicate with your database server over a secure, private LAN network, not the public internet.
*   **Indexing**: If your database queries are slow, ensure your tables have proper Indexes (e.g., indexing the `player_uuid` column in a balance table).
*   **Dedicated Hardware**: For massive networks, the database should run on its own dedicated physical hardware with NVMe SSDs, completely separate from the game servers.
