---
title: Classes and Objects
sidebar_position: 2
description: Learn PHP Classes and Objects in complete detail with real-world examples and PocketMine architecture.
---

# Classes and Objects

Classes and Objects are the foundation of Object Oriented Programming.

Everything in modern PHP frameworks is built using classes and objects.

Examples:

- PocketMine Players
- Worlds
- Commands
- Plugins
- Laravel Controllers
- APIs
- Databases

---

# What is a Class?

A class is a blueprint.

Think about:

```text
House Blueprint
```

The blueprint itself is not a real house.

It only describes:

- Rooms
- Doors
- Windows
- Colors

Similarly:

```php
class Player {

}
```

does not create a player.

It only defines what a player should look like.

---

# What is an Object?

An object is the actual thing created from the blueprint.

Example:

```text
Blueprint → House

Actual House → Object
```

---

# Visualization

```text
Player Class
│
├── name
├── money
├── rank
│
├── sendMessage()
├── kick()
└── ban()
```

Objects:

```text
Steve
Alex
Aayan
```

---

# Creating Your First Class

```php
class Player {

}
```

Nothing happens yet.

---

# Creating an Object

```php
$player =
new Player();
```

The keyword:

```php
new
```

allocates memory and creates an object.

---

# Memory Representation

```text
RAM

Player Object
│
├── name
├── money
└── rank
```

Variable:

```php
$player
```

contains a reference to this object.

---

# Creating Multiple Objects

```php
$p1 = new Player();
$p2 = new Player();
$p3 = new Player();
```

Memory:

```text
Object1
Object2
Object3
```

All independent.

---

# Objects Are Independent

Example:

```php
$p1->name = "Aayan";

$p2->name = "Steve";
```

Changing one object does not affect others.

---

# Adding Properties

```php
class Player {

    public string $name;

    public int $money;

}
```

---

# Creating Data

```php
$player =
new Player();

$player->name =
"Aayan";

$player->money =
5000;
```

---

# Accessing Data

```php
echo $player->name;
```

Output:

```text
Aayan
```

---

# Adding Methods

```php
class Player {

    public function hello() {

        echo "Hello";

    }

}
```

---

# Calling Methods

```php
$player =
new Player();

$player->hello();
```

---

# Object Operator

PHP uses:

```php
->
```

Example:

```php
$player->name

$player->sendMessage()
```

This means:

```text
Access something inside object.
```

---

# Example Class

```php
class Player {

    public string $name;

    public int $money;

    public function addMoney(
        int $amount
    ): void {

        $this->money += $amount;

    }

}
```

---

# Creating Object

```php
$player =
new Player();

$player->name =
"Aayan";

$player->money =
5000;

$player->addMoney(
    1000
);

echo $player->money;
```

Output:

```text
6000
```

---

# The `$this` Keyword

Inside a class:

```php
$this
```

means:

```text
Current Object
```

Example:

```php
$this->money
```

means:

```text
Money of THIS object.
```

---

# Example

```php
$p1 =
new Player();

$p2 =
new Player();

$p1->money = 100;
$p2->money = 500;
```

Inside:

```php
$this->money
```

will point to different values.

---

# Class Naming Rules

Good:

```php
Player
PlayerManager
EconomyAPI
```

Bad:

```php
player
myclass
abc
```

---

# Naming Convention

PHP follows:

```text
PascalCase
```

Example:

```php
PlayerManager
UserRepository
DatabaseConnection
```

---

# File Naming Convention

```text
Player.php
EconomyAPI.php
Database.php
```

---

# One Class Per File

Good:

```text
Player.php
```

Bad:

```text
Player.php

contains:

Player
World
Server
Database
```

---

# Real PocketMine Example

```php
use pocketmine\player\Player;
```

`Player` itself is a class.

---

Example:

```php
$player =
$event->getPlayer();
```

Returns:

```text
Player Object
```

---

Then:

```php
$player->sendMessage();
```

calls a method inside Player class.

---

# Another Example

```php
$server =
$this->getServer();
```

Returns:

```text
Server Object
```

---

Then:

```php
$server->broadcastMessage();
```

---

# Objects Can Contain Objects

Example:

```text
Server
│
├── Players[]
├── Worlds[]
└── Scheduler
```

Everything is objects.

---

# Example Architecture

```php
class Server {

    public array $players;

}
```

Each element:

```text
Player Object
```

---

# Comparing Objects

---

## Equality

```php
$p1 == $p2
```

Compares values.

---

## Identity

```php
$p1 === $p2
```

Compares memory reference.

---

Example:

```php
$p1 = new Player();
$p2 = new Player();

var_dump(
    $p1 === $p2
);
```

Output:

```text
false
```

---

# Assigning Objects

```php
$p1 =
new Player();

$p2 =
$p1;
```

Now both point to same object.

---

Memory:

```text
p1 ─┐
    │
    ▼
  Object
    ▲
    │
p2 ─┘
```

---

Changing:

```php
$p2->money = 500;
```

also changes:

```php
$p1->money
```

---

# Cloning Objects

```php
$p2 =
clone $p1;
```

Creates new object.

---

Memory:

```text
p1 → Object1

p2 → Object2
```

---

# Anonymous Objects

```php
(new Player())
    ->hello();
```

Useful for temporary objects.

---

# Object Lifecycle

```text
Class Loaded
      ↓
new
      ↓
Object Created
      ↓
Methods Called
      ↓
Destroyed
```

---

# Real World Example

Player System:

```php
class Player {

    public string $name;

    public int $money;

}
```

Objects:

```text
Aayan
Steve
Alex
```

Each player becomes an object.

---

# Why Everything Uses Objects

Because objects group:

- Data
- Logic
- State

together.

Without objects:

```php
$name
$money
$rank
```

would exist everywhere.

Chaos.

---

# Beginner Mistakes

---

## Forgetting `new`

Wrong:

```php
$player =
Player();
```

Correct:

```php
$player =
new Player();
```

---

## Using Dot Operator

Wrong:

```php
$player.name
```

Correct:

```php
$player->name
```

---

## Accessing Missing Properties

Wrong:

```php
$player->coins
```

when property doesn't exist.

---

## Treating Objects Like Arrays

Wrong:

```php
$player["name"]
```

Correct:

```php
$player->name
```

---

# Best Practices

✅ One class per file.

✅ Use PascalCase.

✅ Keep classes small.

✅ Group related functionality.

✅ Prefer objects over globals.

---

# Exercises

---

## Exercise 1

Create:

```php
class Car {

}
```

Properties:

```text
brand
color
speed
```

---

## Exercise 2

Create:

```php
class Server {

}
```

Methods:

```text
start()
stop()
broadcast()
```

---

## Exercise 3

Create:

```php
class Economy {

}
```

Methods:

```text
addMoney()
removeMoney()
```

---

# Mini Project

Create:

```text
Player Class
```

Properties:

```text
name
rank
money
kills
deaths
```

Methods:

```text
sendMessage()
addMoney()
setRank()
```

---

# Quiz

### What is a class?

<details>
<summary>Answer</summary>

Blueprint used to create objects.

</details>

---

### What is an object?

<details>
<summary>Answer</summary>

Instance created from a class.

</details>

---

### Which operator accesses object members?

<details>
<summary>Answer</summary>

```php
->
```

</details>

---

### Which keyword creates objects?

<details>
<summary>Answer</summary>

```php
new
```

</details>

---

### Which keyword copies objects?

<details>
<summary>Answer</summary>

```php
clone
```

</details>

---

# Real PocketMine Architecture

```text
PluginBase
      ↓
Main

Server
      ↓
WorldManager
      ↓
World

Player
      ↓
Inventory
      ↓
Item
```

Everything is an object.

---

# References

PHP OOP:

https://www.php.net/manual/en/language.oop5.basic.php

---

# Next Chapter

➡ Properties and Typed Properties
➡ Methods and `$this`
➡ Constructors
