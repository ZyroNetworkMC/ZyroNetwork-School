---
title: Properties
sidebar_position: 3
description: Learn PHP properties, typed properties, property promotion, readonly properties and best practices.
---

# PHP Properties

Properties are variables that belong to an object.

They represent the **state** of an object.

Examples:

A Player object may contain:

- Name
- Rank
- Health
- Money
- Kills
- Position

A Server object may contain:

- MOTD
- Port
- Max Players
- Online Players

---

# What is a Property?

Example:

```php
class Player {

    public string $name;

}
```

Property:

```php
$name
```

belongs to every Player object.

---

# Creating Objects

```php
$player =
new Player();
```

Setting value:

```php
$player->name =
"Aayan";
```

Reading value:

```php
echo $player->name;
```

Output:

```text
Aayan
```

---

# Visualization

```text
Player Object
│
├── name = Aayan
├── money = 5000
└── rank = Owner
```

---

# Multiple Properties

```php
class Player {

    public string $name;

    public int $money;

    public int $kills;

}
```

---

# Example

```php
$player =
new Player();

$player->name = "Aayan";

$player->money = 5000;

$player->kills = 15;
```

---

# Typed Properties

PHP 7.4 introduced typed properties.

Example:

```php
public int $money;
```

This means:

```text
Only integers allowed.
```

---

# Invalid

```php
$player->money =
"Hello";
```

Error:

```text
Cannot assign string to property.
```

---

# Available Types

---

## Integer

```php
public int $money;
```

---

## String

```php
public string $name;
```

---

## Float

```php
public float $health;
```

---

## Boolean

```php
public bool $online;
```

---

## Array

```php
public array $friends;
```

---

## Object

```php
public Player $owner;
```

---

## Mixed

```php
public mixed $data;
```

Accepts everything.

---

## Nullable Types

```php
public ?Player $target;
```

Means:

```text
Player OR null
```

---

# Uninitialized Properties

Bad:

```php
class Player {

    public string $name;

}

$player =
new Player();

echo $player->name;
```

Error:

```text
Typed property must not be accessed before initialization
```

---

# Solutions

---

## Default Value

```php
public string $name = "";
```

---

## Constructor

```php
public function __construct(
    string $name
) {

    $this->name =
        $name;

}
```

---

# Default Values

```php
class Player {

    public int $money = 0;

}
```

---

# Example

```php
$player =
new Player();

echo
$player->money;
```

Output:

```text
0
```

---

# Property Visibility

Properties may use:

```php
public
protected
private
```

---

## Public

Accessible everywhere.

```php
public string $name;
```

---

## Protected

Only current class and children.

```php
protected int $money;
```

---

## Private

Only current class.

```php
private string $password;
```

---

# Real Example

```php
class BankAccount {

    private int $money = 0;

}
```

Nobody can modify money directly.

---

# Why Private is Important

Bad:

```php
$player->money =
999999999;
```

Good:

```php
$player->addMoney(
    100
);
```

This allows validation.

---

# Readonly Properties

PHP 8.1+

```php
public readonly string $uuid;
```

Can only be assigned once.

---

Example:

```php
class Player {

    public readonly string $uuid;

    public function __construct(
        string $uuid
    ) {

        $this->uuid =
            $uuid;

    }

}
```

---

Trying:

```php
$player->uuid =
"abc";
```

Error.

---

# Property Promotion

PHP 8 introduced Constructor Property Promotion.

Instead of:

```php
private string $name;

public function __construct(
    string $name
) {

    $this->name =
        $name;

}
```

You can write:

```php
public function __construct(

    private string $name

) {

}
```

Much cleaner.

---

# Real Example

```php
class Database {

    public function __construct(

        private string $host,
        private string $user,
        private string $password

    ) {

    }

}
```

---

# Static Properties

Belong to class, not object.

```php
public static int $count = 0;
```

Access:

```php
Player::$count;
```

---

# Example

```php
class Player {

    public static int $online = 0;

}
```

---

# Dynamic Properties

Old PHP allowed:

```php
$player->abc = 5;
```

PHP 8.2:

Deprecated.

Always declare properties.

---

# Objects as Properties

Example:

```php
class Player {

    public Inventory $inventory;

}
```

Memory:

```text
Player
   ↓
Inventory Object
```

Objects can contain other objects.

---

# PocketMine Example

Player internally contains:

```text
Player
│
├── Inventory
├── NetworkSession
├── Effects
├── Permissions
└── Location
```

All properties.

---

# Property Initialization Flow

```text
new Player()
      ↓
Constructor
      ↓
Properties Initialized
      ↓
Object Ready
```

---

# Real Example

```php
class Server {

    public string $motd;

    public int $maxPlayers;

    public bool $running;

}
```

---

# Common Mistakes

---

## Forgetting Initialization

Bad:

```php
public string $name;
```

then:

```php
echo $this->name;
```

---

## Using Public Everywhere

Bad:

```php
public int $money;
```

Prefer:

```php
private int $money;
```

---

## Using mixed Too Much

Bad:

```php
public mixed $data;
```

Use proper typing.

---

## Huge Data Classes

Bad:

```text
Player
500 properties
```

Split responsibilities.

---

# Best Practices

✅ Use typed properties.

✅ Prefer private.

✅ Initialize values.

✅ Use readonly when possible.

✅ Avoid dynamic properties.

✅ Keep classes small.

---

# Exercises

---

## Exercise 1

Create:

```php
class Car {

    public string $brand;

    public string $color;

    public int $speed;

}
```

---

## Exercise 2

Create:

```php
class Player {

    private int $money;

}
```

Add methods:

```text
addMoney()
removeMoney()
```

---

## Exercise 3

Create readonly UUID property.

---

# Mini Project

Create:

```text
Server
```

Properties:

```text
Name
Version
Port
Players
MaxPlayers
```

---

# Quiz

### What are properties?

<details>
<summary>Answer</summary>

Variables belonging to objects.

</details>

---

### Which keyword makes a property immutable?

<details>
<summary>Answer</summary>

```php
readonly
```

</details>

---

### Which visibility is most secure?

<details>
<summary>Answer</summary>

Usually:

```php
private
```

</details>

---

### Which PHP version introduced typed properties?

<details>
<summary>Answer</summary>

PHP 7.4

</details>

---

# Real PocketMine Example

```php
class Player {

    private Inventory $inventory;

    private NetworkSession $networkSession;

    private string $username;

    private int $gamemode;

}
```

Everything inside Player is represented using properties.

---

# References

https://www.php.net/manual/en/language.oop5.properties.php

---

# Next Chapter

➡ Methods
➡ Constructors
➡ Access Modifiers
