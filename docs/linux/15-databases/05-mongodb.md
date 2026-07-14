---
title: MongoDB
description: A guide to the popular NoSQL document database.
---

# MongoDB

MongoDB is a popular open-source NoSQL database that provides high performance, high availability, and easy scalability. It works on the concept of collections and documents rather than tables and rows.

## Architecture and Data Model

*   **Documents:** Data is stored in BSON (Binary JSON) format, which allows for complex, hierarchical data structures.
*   **Collections:** Equivalent to tables in relational databases, collections group related documents. Documents within a collection do not need to share the same structure (schema-less or flexible schema).
*   **Replica Sets:** MongoDB provides high availability through Replica Sets, which are groups of MongoDB servers that maintain the same data set, providing redundancy and automatic failover.
*   **Sharding:** MongoDB scales horizontally using sharding, distributing data across multiple machines based on a shard key.

## Installation

MongoDB is typically not included in the default OS repositories. You must add the official MongoDB repository.

Example for Ubuntu:
1.  Import the public key used by the package management system.
2.  Create a list file for MongoDB.
3.  Reload local package database.
4.  Install the MongoDB packages: `sudo apt install -y mongodb-org`
5.  Start the service: `sudo systemctl start mongod`

## Basic Operations

Access the MongoDB shell using the `mongosh` (MongoDB Shell) command.

```bash
mongosh
```

### Common Commands

*   **Show Databases:** `show dbs`
*   **Use/Create Database:** `use my_app_db` (Creates the DB implicitly when data is inserted).
*   **Insert Document:**
    ```javascript
    db.users.insertOne({ name: "Alice", age: 28, city: "New York" })
    ```
*   **Find Documents:**
    *   Find all: `db.users.find()`
    *   Find specific: `db.users.find({ age: { $gt: 25 } })` (Find users older than 25)
*   **Update Document:**
    ```javascript
    db.users.updateOne({ name: "Alice" }, { $set: { city: "Boston" } })
    ```
*   **Delete Document:**
    ```javascript
    db.users.deleteOne({ name: "Alice" })
    ```

## Configuration and Best Practices

Configuration is stored in `/etc/mongod.conf`.

*   **Security:** By default, MongoDB does not enable authentication. It is critical to enable it in a production environment.
    1.  Create an administrative user.
    2.  Enable authorization in `mongod.conf` (`security.authorization: enabled`).
    3.  Restart the `mongod` service.
*   **Network Binding:** Ensure MongoDB binds only to necessary interfaces (`net.bindIp`). Do not expose it to the public internet without proper authentication and firewalls.
*   **Indexing:** Just like relational databases, MongoDB requires indexes for efficient querying. Ensure queries are supported by appropriate indexes using the `.explain()` method.
*   **Storage Engine:** The default storage engine is WiredTiger, which provides document-level concurrency and compression.
