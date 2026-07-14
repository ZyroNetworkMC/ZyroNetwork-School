---
title: Constructors and Destructors
sidebar_position: 5
description: Learn PHP constructors, dependency injection, constructor property promotion and destructors in complete detail.
---

# Constructors and Destructors

Constructors are one of the most important concepts in Object Oriented Programming.

Almost every framework heavily relies on constructors.

Examples:

- PocketMine-MP
- Laravel
- Symfony
- APIs
- Dependency Injection Containers
- Enterprise Applications

---

# What is a Constructor?

A constructor is a special method that automatically runs when an object is created.

Example:

```php
$player =
new Player();
```

Immediately after:

```php
new Player()
```

PHP automatically executes:

```php
__construct()
```

---

# Constructor Lifecycle

```text
new Player()
        ↓
Memory Allocated
        ↓
__construct()
        ↓
Object Ready
```

---

# Constructor Syntax

```php
class Player {

    public function __construct() {

        echo "Player Created";

    }

}
```

---

# Example

```php
$player =
new Player();
```

Output:

```text
Player Created
```

---

# Why Constructors Exist

Without constructors:

```php
$player =
new Player();

$player->name =
"Aayan";

$player->money =
5000;

$player->rank =
"Owner";
```

This becomes repetitive.

Constructors solve this.

---

# Constructor Parameters

```php
class Player {

    public string $name;

    public function __construct(
        string $name
    ) {

        $this->name =
            $name;

    }

}
```

---

# Usage

```php
$player =
new Player(
    "Aayan"
);
```

---

# Visualization

```text
new Player("Aayan")
          ↓
__construct()
          ↓
$this->name = Aayan
```

---

# Multiple Parameters

```php
class Player {

    public string $name;

    public int $money;

    public string $rank;

    public function __construct(

        string $name,
        int $money,
        string $rank

    ) {

        $this->name =
            $name;

        $this->money =
            $money;

        $this->rank =
            $rank;

    }

}
```

---

# Usage

```php
$player =
new Player(

    "Aayan",
    5000,
    "Owner"

);
```

---

# Constructor Property Promotion

PHP 8 introduced Constructor Property Promotion.

Instead of:

```php
class Player {

    private string $name;

    public function __construct(
        string $name
    ) {

        $this->name =
            $name;

    }

}
```

You can write:

```php
class Player {

    public function __construct(

        private string $name

    ) {

    }

}
```

---

# Benefits

✅ Less code

✅ Cleaner classes

✅ Easier maintenance

---

# Large Example

```php
class Database {

    public function __construct(

        private string $host,
        private string $user,
        private string $password,
        private string $database

    ) {

    }

}
```

---

# Constructor Defaults

```php
public function __construct(

    private string $rank =
        "Player"

) {

}
```

---

Usage:

```php
$player =
new Player();
```

Rank automatically becomes:

```text
Player
```

---

# Named Arguments

PHP 8+

```php
$player =
new Player(

    name: "Aayan",
    money: 5000,
    rank: "Owner"

);
```

---

# Validation Inside Constructors

Example:

```php
class Player {

    public function __construct(

        private int $money

    ) {

        if (
            $money < 0
        ) {

            throw new Exception(
                "Money cannot be negative"
            );

        }

    }

}
```

---

# Constructor Overloading

PHP does NOT support multiple constructors.

Invalid:

```php
__construct()
__construct(string $name)
```

---

# Alternative

Use optional parameters.

```php
public function __construct(

    ?string $name = null

) {

}
```

---

# Factory Methods

Another alternative:

```php
Player::create();
```

---

Example:

```php
class Player {

    public static function create(
        string $name
    ): self {

        return new self(
            $name
        );

    }

}
```

---

Usage:

```php
$player =
Player::create(
    "Aayan"
);
```

---

# Constructor Chaining

Classes may call parent constructors.

Example:

```php
class Human {

    public function __construct() {

        echo "Human";

    }

}
```

---

Child:

```php
class Player
extends Human {

    public function __construct() {

        parent::__construct();

        echo " Player";

    }

}
```

Output:

```text
Human Player
```

---

# Why Parent Constructors Matter

Example:

```text
Entity
   ↓
Human
   ↓
Player
```

Each class initializes different things.

---

# PocketMine Example

Simplified:

```text
Entity Constructor
        ↓
Human Constructor
        ↓
Player Constructor
```

---

# Dependency Injection

One of the most important concepts.

Instead of:

```php
class PlayerManager {

    private Config $config;

    public function __construct() {

        $this->config =
            new Config();

    }

}
```

Use:

```php
class PlayerManager {

    public function __construct(

        private Config $config

    ) {

    }

}
```

---

# Benefits

✅ Easier testing

✅ Easier maintenance

✅ Lower coupling

---

# Real World Example

```php
class UserService {

    public function __construct(

        private Database $database,
        private Logger $logger

    ) {

    }

}
```

---

# Constructor Injection Flow

```text
Database
Logger
     ↓
UserService
```

---

# Object Composition

Objects can receive objects.

Example:

```php
class Server {

    public function __construct(

        private WorldManager $worldManager

    ) {

    }

}
```

---

# Destructors

Destructors are another special method.

Executed when object is destroyed.

Syntax:

```php
public function __destruct() {

}
```

---

# Lifecycle

```text
new Object
      ↓
Object Used
      ↓
Object Destroyed
      ↓
__destruct()
```

---

# Example

```php
class Test {

    public function __destruct() {

        echo "Destroyed";

    }

}
```

---

# When Does Destructor Run?

Usually:

- End of script
- Object unset
- Garbage Collection

---

# Example

```php
$test =
new Test();

unset(
    $test
);
```

Output:

```text
Destroyed
```

---

# Destructor Usage

Useful for:

- Closing files
- Closing sockets
- Saving cache
- Logging

---

# Example

```php
class Database {

    public function __destruct() {

        $this->connection
            ->close();

    }

}
```

---

# Real PocketMine Usage

Examples:

```text
Network Sessions
File Streams
Database Connections
Async Tasks
```

---

# Constructor vs Destructor

| Constructor | Destructor |
|-------------|-------------|
| `__construct()` | `__destruct()` |
| Runs on creation | Runs on destruction |
| Initialize object | Cleanup object |

---

# Memory Flow

```text
new Player()
       ↓
Constructor
       ↓
Object Active
       ↓
Destroy
       ↓
Destructor
```

---

# Common Beginner Mistakes

---

## Forgetting Parent Constructor

Bad:

```php
class Player
extends Human {

    public function __construct() {

    }

}
```

May break initialization.

---

## Huge Constructors

Bad:

```php
__construct()

500 lines...
```

Keep constructors simple.

---

## Heavy Logic

Avoid:

```php
database queries
network requests
large loops
```

inside constructors.

---

## Using Destructor for Important Saves

Destructor execution timing may vary.

Prefer explicit:

```php
save();
```

---

# Best Practices

✅ Keep constructors small.

✅ Use Dependency Injection.

✅ Prefer property promotion.

✅ Validate constructor arguments.

✅ Use destructors only for cleanup.

---

# Exercises

---

## Exercise 1

Create:

```php
class Car {

    public function __construct(

        private string $brand

    ) {

    }

}
```

---

## Exercise 2

Create:

```php
Player
```

Properties:

```text
name
money
rank
```

Initialize using constructor.

---

## Exercise 3

Create:

```php
Database
```

Destructor should close connection.

---

# Mini Project

Create:

```php
class Server {

    public function __construct(

        private string $name,
        private int $port,
        private int $maxPlayers

    ) {

    }

}
```

---

# Quiz

### Which method runs automatically on object creation?

<details>
<summary>Answer</summary>

```php
__construct()
```

</details>

---

### Which method runs on destruction?

<details>
<summary>Answer</summary>

```php
__destruct()
```

</details>

---

### Which PHP version introduced property promotion?

<details>
<summary>Answer</summary>

PHP 8.0

</details>

---

### Which concept passes dependencies through constructors?

<details>
<summary>Answer</summary>

Dependency Injection

</details>

---

# Real PocketMine Examples

```php
new Config(...)
new Position(...)
new Item(...)
new World(...)
new Vector3(...)
```

Every one of these internally uses constructors.

---

# References

https://www.php.net/manual/en/language.oop5.decon.php

---

# Next Chapter

➡ The `$this` Keyword

➡ Access Modifiers

➡ Encapsulation
➡ Inheritance
