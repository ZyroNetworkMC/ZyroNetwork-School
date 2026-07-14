---
title: Static Members
sidebar_position: 15
description: Learn PHP Static Properties, Static Methods, Late Static Binding and Singleton patterns in complete detail with PocketMine and enterprise examples.
---

# Static Members

## Chapter Overview

In this chapter you will learn:

- What static means
- Static properties
- Static methods
- Static constants
- self keyword
- static keyword
- Late Static Binding
- Singleton pattern
- Static factories
- PocketMine examples
- Enterprise examples
- Best practices
- Common mistakes

---

# What Does Static Mean?

Normally:

```php
$player1 =
new Player();

$player2 =
new Player();
```

Each object gets its own data.

Example:

```php
class Player {

    public int $coins = 0;

}
```

---

```php
$player1->coins = 100;
$player2->coins = 500;
```

Output:

```text
100
500
```

Each object has separate values.

---

# Static Means

```text
Belongs to the CLASS itself
instead of individual objects.
```

---

# Visualization

Normal Property:

```text
Player Object #1 → coins
Player Object #2 → coins
Player Object #3 → coins
```

Static Property:

```text
Player Class
        ↓
   onlinePlayers
```

Shared by everyone.

---

# Why Static Exists

Some things should only exist once.

Examples:

- Application Version
- Online Player Count
- Configuration Cache
- Database Connection Pool
- Singleton Instance
- Utility Methods

---

# Static Property

Syntax:

```php
class Server {

    public static int $players = 0;

}
```

---

Access:

```php
Server::$players
```

Notice:

```php
::
```

This is called:

```text
Scope Resolution Operator
```

---

# Example

```php
class Player {

    public static int $online = 0;

    public function __construct() {

        self::$online++;

    }

}
```

---

Usage:

```php
new Player();
new Player();
new Player();

echo Player::$online;
```

Output:

```text
3
```

---

# Visualization

```text
Player Class
│
└── online = 3
```

All objects share it.

---

# Difference

## Normal Property

```php
public int $coins;
```

Each object gets one.

---

## Static Property

```php
public static int $online;
```

Entire class shares one.

---

# Static Methods

Methods may also be static.

---

Example:

```php
class Math {

    public static function add(
        int $a,
        int $b
    ): int {

        return $a + $b;

    }

}
```

Usage:

```php
echo Math::add(
    5,
    10
);
```

Output:

```text
15
```

---

# Why Static Methods?

Because creating objects may be unnecessary.

Bad:

```php
$math =
new Math();

$math->add();
```

Better:

```php
Math::add();
```

---

# Utility Classes

Example:

```php
class StringUtils {

    public static function upper(
        string $text
    ): string {

        return strtoupper(
            $text
        );

    }

}
```

Usage:

```php
StringUtils::upper(
    "zyro"
);
```

---

# Static Constants

Example:

```php
class Server {

    public const VERSION =
        "1.0.0";

}
```

Usage:

```php
Server::VERSION
```

---

# self Keyword

Inside static methods:

```php
self::
```

refers to current class.

---

Example:

```php
class Server {

    public static int $players = 0;

    public static function join() {

        self::$players++;

    }

}
```

---

Usage:

```php
Server::join();
```

---

# self vs this

---

## `$this`

Refers to:

```text
Current Object
```

---

## `self`

Refers to:

```text
Current Class
```

---

# Example

Invalid:

```php
public static function test() {

    $this->hello();

}
```

Error:

```text
Using $this when not in object context.
```

---

# Why?

Because static methods do not belong to objects.

---

# Visualization

```text
Object → $this

Class → self
```

---

# Static Methods Cannot Access Non-Static Members

Invalid:

```php
class Test {

    public int $coins = 0;

    public static function hello() {

        echo $this->coins;

    }

}
```

Error.

---

# Correct

```php
class Test {

    public static int $coins = 0;

    public static function hello() {

        echo self::$coins;

    }

}
```

---

# Static Factories

Very common in frameworks.

---

Example:

```php
class User {

    public static function create(
        string $name
    ): self {

        $user =
            new self();

        return $user;

    }

}
```

Usage:

```php
User::create(
    "Aayan"
);
```

---

# Named Constructors

Example:

```php
class User {

    public static function fromArray(
        array $data
    ): self {

    }

}
```

---

```php
User::fromArray();
User::fromJson();
User::fromDatabase();
```

Very common pattern.

---

# Singleton Pattern

One of the biggest uses of static.

---

# What is Singleton?

A class that can only have:

```text
ONE INSTANCE
```

---

Example:

```php
class Main {

    private static ?Main $instance =
        null;

    public function __construct() {

        self::$instance =
            $this;

    }

    public static function getInstance()
    : ?Main {

        return self::$instance;

    }

}
```

---

Usage:

```php
Main::getInstance();
```

---

# PocketMine Example

Most plugins use:

```php
Main::getInstance();
```

through:

```php
SingletonTrait
```

---

# Visualization

```text
Plugin
    ↓
Singleton Instance
```

Only one exists.

---

# Late Static Binding

One of PHP's advanced concepts.

---

Example:

```php
class Animal {

    public static function make() {

        return new self();

    }

}
```

---

Child:

```php
class Dog
extends Animal {

}
```

---

Usage:

```php
Dog::make();
```

Returns:

```text
Animal
```

Not:

```text
Dog
```

---

# Solution

Use:

```php
static
```

instead of:

```php
self
```

---

Example:

```php
class Animal {

    public static function make() {

        return new static();

    }

}
```

Now:

```php
Dog::make();
```

returns:

```text
Dog
```

---

# self vs static

---

## self

Current class.

---

## static

Runtime class.

---

# Visualization

```text
self
 ↓
Animal

static
 ↓
Dog
```

---

# Example

```php
class Animal {

    public static function who() {

        echo static::class;

    }

}
```

---

```php
class Dog
extends Animal {

}
```

---

Usage:

```php
Dog::who();
```

Output:

```text
Dog
```

---

# Real Framework Examples

Laravel uses:

```php
User::create()
User::query()
User::find()
```

These rely heavily on static systems.

---

# PocketMine Examples

---

## Server Singleton

```php
Server::getInstance()
```

---

## Type Converter

```php
TypeConverter::getInstance()
```

---

## Item Parsers

```php
StringToItemParser::getInstance()
```

---

## Plugin Main

```php
Main::getInstance()
```

---

# Utility Examples

---

## UUID Generator

```php
UUID::random();
```

---

## Configuration Loader

```php
Config::load();
```

---

## Json Helper

```php
Json::encode();
```

---

# Benefits

---

# 1. No Object Creation

Faster.

---

# 2. Shared State

Perfect for:

```text
Counters
Caches
Configurations
```

---

# 3. Cleaner APIs

Example:

```php
User::find();
```

instead of:

```php
(new User())
    ->find();
```

---

# Common Beginner Mistakes

---

## Using Static Everywhere

Static is powerful.

But excessive static usage:

```text
Creates global state.
```

---

## Tight Coupling

Bad:

```php
Database::query();
```

Everywhere.

Hard to test.

---

## Hidden Dependencies

Static systems often make code difficult to maintain.

---

# Bad Example

```php
class UserService {

    public function save() {

        Database::query();

    }

}
```

Cannot easily replace database.

---

# Better

```php
public function __construct(
    DatabaseInterface $db
)
```

Use Dependency Injection.

---

# When To Use Static

Good uses:

✅ Utility Classes

✅ Constants

✅ Singleton Access

✅ Factories

✅ Parsers

---

# When NOT To Use Static

Avoid:

❌ Business Logic

❌ Services

❌ Databases everywhere

❌ Large applications

---

# Static and Memory

Static properties live:

```text
Until script ends.
```

They remain shared globally.

---

# Exercises

---

## Exercise 1

Create:

```php
Player::$online
```

Track online players.

---

## Exercise 2

Create:

```php
Math::add()
Math::subtract()
Math::multiply()
```

---

## Exercise 3

Create:

```php
UUID::generate()
```

---

# Mini Project

Create:

```text
ZyroNetwork Server Manager
```

Static Features:

```text
Server Version
Online Count
Maintenance Mode
Configuration Cache
```

---

# Interview Questions

---

### What is a static property?

A property shared by all objects.

---

### Can static methods use `$this`?

No.

---

### Difference between `self` and `static`?

```text
self → current class
static → runtime class
```

---

### What is Late Static Binding?

Using runtime class instead of parent class.

---

### What is Singleton?

A class having only one instance.

---

# Summary

Static Members provide:

✅ Shared State

✅ Utility Methods

✅ Singleton Access

✅ Factory Methods

✅ Cleaner APIs

But use carefully.

Too much static code can become difficult to maintain.

---

# References

https://www.php.net/manual/en/language.oop5.static.php

https://www.php.net/manual/en/language.oop5.late-static-bindings.php

---

# Next Chapter

➡ Final Keyword

➡ Magic Methods

➡ Enums

➡ Namespaces
