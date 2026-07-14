---
title: The $this Keyword
sidebar_position: 6
description: Learn the $this keyword in PHP in complete detail with object references, method chaining and PocketMine examples.
---

# The `$this` Keyword

The `$this` keyword is one of the most important concepts in Object Oriented Programming.

Every PHP developer must fully understand it because almost every framework relies heavily on it.

Examples:

```php
$this->getServer();
$this->saveDefaultConfig();
$this->getConfig();
$this->getLogger();
$this->getScheduler();
```

PocketMine plugins use `$this` everywhere.

---

# What is `$this`?

`$this` refers to:

```text
The Current Object Instance
```

or simply:

```text
THIS OBJECT
```

---

# Example

```php
class Player {

}
```

Object:

```php
$player =
new Player();
```

Inside methods:

```php
$this
```

refers to:

```php
$player
```

---

# Visualization

```text
$player
    ↓
Player Object
```

Inside object:

```text
$this
```

points back to:

```text
Current Player Object
```

---

# Why Do We Need `$this`?

Consider:

```php
class Player {

    public string $name;

}
```

Method:

```php
public function setName(
    string $name
) {

    ?
}
```

How does PHP know which object's name should be changed?

Player1?

Player2?

Player3?

This is why `$this` exists.

---

# Example

```php
class Player {

    public string $name;

    public function setName(
        string $name
    ): void {

        $this->name =
            $name;

    }

}
```

---

# Usage

```php
$p1 =
new Player();

$p2 =
new Player();

$p1->setName(
    "Aayan"
);

$p2->setName(
    "Steve"
);
```

Memory:

```text
p1 → name = Aayan

p2 → name = Steve
```

---

# Without `$this`

This:

```php
$name = $name;
```

does absolutely nothing.

---

Correct:

```php
$this->name = $name;
```

---

# Visualization

```php
$this->name
      ↑
Object Property

$name
      ↑
Method Parameter
```

---

# Accessing Properties

Example:

```php
class Player {

    public int $money = 0;

    public function addMoney(
        int $amount
    ): void {

        $this->money +=
            $amount;

    }

}
```

---

# Accessing Methods

Methods can call other methods.

Example:

```php
class Player {

    public function hello() {

        echo "Hello";

    }

    public function test() {

        $this->hello();

    }

}
```

---

Usage:

```php
$player->test();
```

Output:

```text
Hello
```

---

# Accessing Multiple Methods

```php
$this->save();

$this->load();

$this->update();
```

---

# Real PocketMine Example

```php
$this->saveDefaultConfig();

$this->getLogger();

$this->getConfig();
```

All methods belong to current plugin object.

---

# Example Plugin

```php
class Main
extends PluginBase {

    protected function onEnable()
    : void {

        $this->saveDefaultConfig();

    }

}
```

`$this` refers to:

```text
Main Plugin Object
```

---

# Accessing Current Server

```php
$this->getServer();
```

Equivalent to:

```text
CurrentPlugin
       ↓
Server Object
```

---

# Method Chaining

Methods may return:

```php
$this
```

Example:

```php
class Player {

    public function setName(
        string $name
    ): self {

        $this->name =
            $name;

        return $this;

    }

}
```

---

# Usage

```php
$player
    ->setName("Aayan")
    ->setMoney(5000)
    ->setRank("Owner");
```

This is called:

```text
Method Chaining
```

---

# Fluent Interface

Used heavily in Laravel.

Example:

```php
$query
    ->where()
    ->orderBy()
    ->limit();
```

Internally:

```php
return $this;
```

---

# `$this` and Memory

Example:

```php
$p1 =
new Player();

$p2 =
new Player();
```

Each object has its own `$this`.

---

Memory:

```text
p1 → Object1

p2 → Object2
```

Inside Object1:

```text
$this = Object1
```

Inside Object2:

```text
$this = Object2
```

---

# Example

```php
class Player {

    public string $name;

    public function show() {

        var_dump($this);

    }

}
```

Output:

```text
object(Player)
```

---

# `$this` Inside Closures

Example:

```php
class Test {

    public function hello() {

        $fn =
        function () {

            var_dump(
                $this
            );

        };

        $fn();

    }

}
```

Modern PHP automatically binds `$this`.

---

# Static Context

This is extremely important.

---

## Wrong

```php
class Test {

    public static function hello() {

        $this->test();

    }

}
```

Error:

```text
Using $this when not in object context
```

---

# Why?

Static methods belong to:

```text
Class
```

not:

```text
Object
```

No object exists.

Therefore:

```php
$this
```

does not exist.

---

# Correct

```php
self::test();
```

---

# Example

```php
class Math {

    public static function add() {

    }

    public static function test() {

        self::add();

    }

}
```

---

# self vs $this

---

## `$this`

Current Object.

---

## `self`

Current Class.

---

Example:

```php
$this->money
```

Property of object.

---

Example:

```php
self::$count
```

Static property of class.

---

# Visualization

```text
Object
│
├── $this
│
Class
│
└── self
```

---

# `$this` and Constructors

Constructors commonly use:

```php
$this->name =
$name;
```

Example:

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

---

# PocketMine Examples

---

## Logger

```php
$this->getLogger()
    ->info(
        "Enabled"
    );
```

---

## Scheduler

```php
$this->getScheduler()
    ->scheduleTask(
        ...
    );
```

---

## Config

```php
$this->getConfig()
    ->get(
        "motd"
    );
```

---

## Server

```php
$this->getServer()
    ->broadcastMessage(
        "Restarting"
    );
```

---

# Object Composition

```php
$this->database
    ->connect();
```

`$this` accesses:

```text
Database Object
```

which then executes:

```text
connect()
```

---

# Common Beginner Mistakes

---

## Forgetting `$this`

Wrong:

```php
name = "Aayan";
```

Correct:

```php
$this->name =
"Aayan";
```

---

## Using `$this` Inside Static Methods

Wrong:

```php
public static function test() {

    $this->hello();

}
```

---

## Accessing Undefined Properties

Wrong:

```php
$this->coins
```

when property doesn't exist.

---

## Mixing Variables

Wrong:

```php
$name = $name;
```

Correct:

```php
$this->name =
$name;
```

---

# Best Practices

✅ Use `$this` for object properties.

✅ Keep object state inside properties.

✅ Use method chaining carefully.

✅ Understand difference between `$this` and `self`.

---

# Exercises

---

## Exercise 1

Create:

```php
class Car {

    private string $brand;

    public function setBrand(
        string $brand
    ) {

        $this->brand =
            $brand;

    }

}
```

---

## Exercise 2

Create:

```php
Player
```

Methods:

```text
setName()
setMoney()
setRank()
```

using `$this`.

---

## Exercise 3

Implement method chaining.

---

# Mini Project

Create:

```php
PlayerBuilder
```

Usage:

```php
$player
    ->setName("Aayan")
    ->setRank("Owner")
    ->setMoney(10000);
```

---

# Quiz

### What does `$this` refer to?

<details>
<summary>Answer</summary>

Current object instance.

</details>

---

### Can `$this` be used in static methods?

<details>
<summary>Answer</summary>

No.

</details>

---

### Which keyword refers to current class?

<details>
<summary>Answer</summary>

```php
self
```

</details>

---

### Which keyword refers to current object?

<details>
<summary>Answer</summary>

```php
$this
```

</details>

---

# Real PocketMine Usage

```php
$this->getServer()
$this->getLogger()
$this->getScheduler()
$this->saveDefaultConfig()
$this->reloadConfig()
```

Understanding `$this` is essential for plugin development.

---

# References

https://www.php.net/manual/en/language.oop5.basic.php

---

# Next Chapter

➡ Access Modifiers

➡ Encapsulation

➡ Inheritance
