---
title: MySQL and MariaDB
description: A guide to the most popular open-source relational database management systems.
---

# MySQL and MariaDB

MySQL is one of the most widely used open-source Relational Database Management Systems (RDBMS). MariaDB is a community-developed, commercially supported fork of MySQL, created by the original developers of MySQL after its acquisition by Oracle. They are highly compatible, often serving as drop-in replacements for each other.

## Architecture and Storage Engines

MySQL/MariaDB utilizes a pluggable storage engine architecture. The storage engine handles the underlying data storage and retrieval.

*   **InnoDB:** The default and most widely used engine. It supports ACID transactions, row-level locking, and foreign keys. It is recommended for most applications.
*   **MyISAM:** An older engine that is fast for read-heavy operations but lacks transaction support and uses table-level locking. It is generally not recommended for modern applications requiring data integrity.
*   **Memory:** Stores data entirely in RAM, offering extremely fast access but losing data upon restart. Good for temporary caches.

## Installation

Both are available in the standard repositories of major Linux distributions.

*   **Debian/Ubuntu:** `apt install mysql-server` or `apt install mariadb-server`
*   **RHEL/CentOS:** `yum install mysql-server` or `yum install mariadb-server`

After installation, it is crucial to run the security script:

```bash
sudo mysql_secure_installation
```

This script helps secure the database by setting a root password, removing anonymous users, and disabling remote root login.

## Basic Operations

Access the database shell using the `mysql` client:

```bash
mysql -u root -p
```

### Common Commands

*   **Create Database:** `CREATE DATABASE myapp_db;`
*   **Create User:** `CREATE USER 'myapp_user'@'localhost' IDENTIFIED BY 'secure_password';`
*   **Grant Privileges:** `GRANT ALL PRIVILEGES ON myapp_db.* TO 'myapp_user'@'localhost';`
*   **Flush Privileges:** `FLUSH PRIVILEGES;` (Required to apply privilege changes immediately).
*   **Show Databases:** `SHOW DATABASES;`
*   **Use Database:** `USE myapp_db;`
*   **Show Tables:** `SHOW TABLES;`

## Performance Tuning and Best Practices

Configuration is typically done in `/etc/mysql/my.cnf` or `/etc/my.cnf`.

*   **`innodb_buffer_pool_size`:** The most critical parameter for InnoDB performance. It determines how much memory is allocated for caching data and indexes. A general rule of thumb is to allocate 50-70% of total system RAM on a dedicated database server.
*   **`max_connections`:** Defines the maximum number of concurrent client connections. Set this based on application needs and available memory.
*   **Query Optimization:** Use `EXPLAIN` to analyze query execution plans and ensure appropriate indexes are in place.
*   **Enable the Slow Query Log:** This helps identify queries that take a long time to execute, allowing for targeted optimization.
