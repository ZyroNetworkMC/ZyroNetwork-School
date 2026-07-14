---
title: PostgreSQL
description: A guide to the advanced, open-source object-relational database system.
---

# PostgreSQL

PostgreSQL (often called Postgres) is a powerful, open-source object-relational database system with a strong reputation for reliability, feature robustness, and performance. It is known for its strict adherence to SQL standards and advanced features.

## Key Features

*   **Advanced Data Types:** Supports arrays, JSON/JSONB, UUID, geometric types, and allows for custom data types.
*   **Concurrency:** Uses Multi-Version Concurrency Control (MVCC) to handle concurrent access without locking, ensuring high performance in multi-user environments.
*   **Extensibility:** Highly extensible via extensions like PostGIS (for geographic data).
*   **Integrity:** Robust constraints, foreign keys, and triggers ensure data integrity.
*   **Advanced Indexing:** Supports B-tree, Multidimensional, GIN (Generalized Inverted Index), and GiST indexes.

## Installation

PostgreSQL is available in most distribution repositories.

*   **Debian/Ubuntu:** `apt install postgresql postgresql-contrib`
*   **RHEL/CentOS:** `yum install postgresql-server postgresql-contrib`

On RHEL/CentOS systems, you must initialize the database cluster after installation:

```bash
sudo postgresql-setup --initdb
sudo systemctl start postgresql
```

## Basic Operations

PostgreSQL uses "roles" to handle authentication and authorization. By default, it uses "ident" or "peer" authentication, meaning the Linux user maps directly to the Postgres role.

To access the Postgres shell (`psql`), switch to the default `postgres` user:

```bash
sudo -i -u postgres
psql
```

### Common Commands

*   **Create Role (User):** `CREATE ROLE myuser WITH LOGIN PASSWORD 'secure_password';`
*   **Create Database:** `CREATE DATABASE mydb OWNER myuser;`
*   **List Databases:** `\l`
*   **Connect to Database:** `\c mydb`
*   **List Tables:** `\dt`
*   **Exit:** `\q`

Alternatively, you can use command-line utilities:

```bash
sudo -u postgres createuser myuser -P
sudo -u postgres createdb -O myuser mydb
```

## Configuration and Tuning

The main configuration file is usually `/etc/postgresql/<version>/main/postgresql.conf` (Debian/Ubuntu) or `/var/lib/pgsql/data/postgresql.conf` (RHEL).

*   **`shared_buffers`:** Determines how much memory is dedicated to caching data. A common starting point is 25% of total system RAM.
*   **`work_mem`:** Specifies the amount of memory to be used by internal sort operations and hash tables before writing to temporary disk files.
*   **`maintenance_work_mem`:** Memory used for maintenance tasks like `VACUUM`, `CREATE INDEX`, etc.
*   **Client Authentication:** Access control is configured in `pg_hba.conf`. You must modify this file to allow remote connections and specify authentication methods (e.g., changing from `peer` to `md5` or `scram-sha-256` for password authentication).

## Maintenance (VACUUM)

Due to MVCC, deleted or updated rows are not immediately removed from disk; they are marked as "dead tuples." The `VACUUM` process removes these dead tuples and frees up space. PostgreSQL runs an `autovacuum` daemon by default, which is sufficient for most workloads, but manual tuning may be necessary for high-update environments.
