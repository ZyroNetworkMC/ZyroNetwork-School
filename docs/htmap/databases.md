---
title: Database Integration (SQLite & MySQL)
sidebar_label: Databases
sidebar_position: 12
---

# Database Integration: Saving Player Data

Most intermediate and advanced plugins require some form of persistent storage. Whether you are tracking coins, experience, blocks mined, or player bans, storing this data in local memory will cause it to disappear when the server restarts.

PocketMine-MP API 5 allows you to interface with databases seamlessly. In this course, we will explore local **SQLite** (file-based) and remote **MySQL** integrations.

## 1. Local Database: SQLite3

SQLite is built directly into PHP and requires no external software. It stores your database in a single `.db` file inside your plugin's data folder. This is ideal for lightweight plugins or single-server environments.

### Setting Up SQLite in Your Main Class

```php title="src/Main.php"
<?php

declare(strict_types=1);

namespace ZyroNetwork\DatabaseExample;

use pocketmine\plugin\PluginBase;

class Main extends PluginBase {

    private \SQLite3 $database;

    protected function onEnable() : void {
        $this->saveDefaultConfig();
        
        // 1. Open (or create) the database file
        $this->database = new \SQLite3($this->getDataFolder() . "players.db");
        
        // 2. Initialize the schema
        $this->database->exec("CREATE TABLE IF NOT EXISTS players (
            uuid TEXT PRIMARY KEY,
            username TEXT,
            coins INT DEFAULT 0
        )");
        
        $this->getLogger()->info("SQLite Database initialized!");
    }

    protected function onDisable() : void {
        // Close connection on shutdown
        $this->database->close();
    }
    
    public function getDatabase() : \SQLite3 {
        return $this->database;
    }
}
```

### Reading and Writing Data

Let's look at how to safely write and read player data.

```php
// Preparing data statements to prevent SQL injections!
$stmt = $db->prepare("INSERT OR REPLACE INTO players (uuid, username, coins) VALUES (:uuid, :username, :coins)");
$stmt->bindValue(':uuid', $player->getUniqueId()->toString(), SQLITE3_TEXT);
$stmt->bindValue(':username', $player->getName(), SQLITE3_TEXT);
$stmt->bindValue(':coins', 100, SQLITE3_INTEGER);
$stmt->execute();
```

---

## 2. Remote Database: MySQL

For multi-server networks, SQLite is not suitable because multiple servers cannot write to the same `.db` file concurrently. You must use a central **MySQL** or **MariaDB** server.

> [!CAUTION]
> **Main Thread Blocking**: MySQL operations are synchronous. If you query a remote MySQL database on the main server thread, the entire server will freeze (lag) while waiting for the database to respond! You **must** perform remote MySQL queries asynchronously.

### Implementing Asynchronous MySQL (libasynql)

PocketMine-MP developers widely use the open-source library `libasynql` to handle asynchronous SQL queries without blocking the main server thread.

1. **Include libasynql in your `composer.json`**:
   ```json
   "require": {
       "poggit/libasynql": "^4.0.0"
   }
   ```
2. **Setup the connection in your plugin**:
   ```php
   use poggit\libasynql\libasynql;
   use poggit\libasynql\DataConnector;

   class Main extends PluginBase {
       private DataConnector $connector;

       protected function onEnable() : void {
           // This will automatically read DB credentials from your config.yml
           $this->connector = libasynql::create($this, $this->getConfig()->get("database"), [
               "sqlite" => "sqlite.sql",
               "mysql" => "mysql.sql"
           ]);
       }
   }
   ```
   
Utilizing asynchronous queries is standard practice for professional network setups!
