---
title: Access Modifiers
sidebar_position: 7
description: Learn public, protected and private access modifiers in PHP with detailed explanations and PocketMine examples.
---

# Access Modifiers

Access Modifiers determine:

```text
Who can access properties and methods.
```

They are one of the core concepts of Object Oriented Programming.

Without access modifiers, your code can become insecure and difficult to maintain.

---

# Why Access Modifiers Exist

Imagine this:

```php
$player->money = 999999999;
$player->rank = "Owner";
$player->health = -500;
```

Anyone could modify anything.

This is dangerous.

Access modifiers help protect object data.

---

# PHP Provides Three Access Modifiers

```php
public
protected
private
```

---

# Visualization

```text
Class
│
├── public
├── protected
└── private
```

---

# 1. Public

Public members can be accessed from anywhere.

---

# Example

```php
class Player {

    public string $name;

}
```

---

Usage:

```php
$player =
new Player();

$player->name =
"Aayan";
```

Valid.

---

# Visualization

```text
Anywhere
     ↓
public
```

---

# Public Methods

```php
class Player {

    public function hello() {

        echo "Hello";

    }

}
```

Usage:

```php
$player->hello();
```

---

# Real PocketMine Example

```php
$player->sendMessage();
$player->teleport();
$player->kick();
```

All of these methods are public.

---

# Problems With Public

Bad:

```php
class Player {

    public int $money = 0;

}
```

Now anyone can do:

```php
$player->money =
999999999;
```

This breaks validation.

---

# 2. Private

Private members can ONLY be accessed inside the same class.

---

# Example

```php
class Player {

    private int $money = 0;

}
```

---

Invalid:

```php
$player->money = 500;
```

Error:

```text
Cannot access private property.
```

---

# Valid

```php
class Player {

    private int $money = 0;

    public function addMoney(
        int $amount
    ) {

        $this->money +=
            $amount;

    }

}
```

---

Usage:

```php
$player->addMoney(
    500
);
```

---

# Why Private is Important

Because it allows validation.

Example:

```php
public function addMoney(
    int $amount
) {

    if ($amount < 0) {
        return;
    }

    $this->money +=
        $amount;

}
```

---

# Real Example

Bank Account:

```php
private float $balance;
```

Nobody should modify balance directly.

---

# 3. Protected

Protected members can be accessed:

✅ Inside current class

✅ Inside child classes

❌ Outside class

---

# Example

```php
class Human {

    protected int $health = 20;

}
```

---

Child:

```php
class Player
extends Human {

    public function heal() {

        $this->health += 5;

    }

}
```

Valid.

---

Outside:

```php
$player->health;
```

Invalid.

---

# Visualization

```text
Parent
   ↓
Child

protected accessible
```

---

# Comparison Table

| Modifier | Same Class | Child Class | Outside |
|----------|-------------|--------------|----------|
| public | ✅ | ✅ | ✅ |
| protected | ✅ | ✅ | ❌ |
| private | ✅ | ❌ | ❌ |

---

# Real Example

```php
class Player {

    public string $name;

    protected int $health;

    private int $money;

}
```

---

Access:

```php
$player->name;
```

Valid.

---

Access:

```php
$player->health;
```

Invalid.

---

Access:

```php
$player->money;
```

Invalid.

---

# Inheritance Example

```php
class Human {

    protected int $health = 20;

}
```

---

Child:

```php
class Player
extends Human {

    public function show() {

        echo
        $this->health;

    }

}
```

Works.

---

# Private Example

```php
class Human {

    private int $health = 20;

}
```

Child:

```php
echo
$this->health;
```

Error.

---

# Why?

Because private belongs ONLY to Human.

Child classes cannot see it.

---

# Visualization

```text
Human
│
├── private
│
Player
```

Player cannot access Human's private members.

---

# Access Modifiers For Methods

Methods also support visibility.

---

# Public Method

```php
public function sendMessage() {

}
```

---

# Protected Method

```php
protected function save() {

}
```

---

# Private Method

```php
private function encrypt() {

}
```

---

# Example

```php
class Database {

    private function connect() {

    }

}
```

Outside:

```php
$db->connect();
```

Error.

---

# Real PocketMine Example

Plugin methods:

```php
public function onEnable()
```

must be public or protected.

Internal methods:

```php
private function loadData()
```

can remain private.

---

# Encapsulation Using Access Modifiers

Usually:

```php
private properties
```

with:

```php
public methods
```

Example:

```php
private int $money;

public function getMoney()
```

This is called:

```text
Encapsulation
```

---

# Getters and Setters

---

# Getter

```php
public function getMoney()
: int {

    return $this->money;

}
```

---

# Setter

```php
public function setMoney(
    int $money
): void {

    $this->money =
        $money;

}
```

---

# Validation Example

```php
public function setHealth(
    int $health
): void {

    if (
        $health < 0
    ) {

        return;

    }

    $this->health =
        $health;

}
```

---

# Best Practice Example

```php
class Player {

    private int $money = 0;

    public function addMoney(
        int $amount
    ): void {

        if (
            $amount <= 0
        ) {
            return;
        }

        $this->money +=
            $amount;

    }

}
```

---

# Real PocketMine Architecture

Simplified:

```text
Player
│
├── private NetworkSession
├── private Inventory
├── private Effects
│
├── public sendMessage()
├── public teleport()
└── public kick()
```

Most internals remain private.

---

# Common Beginner Mistakes

---

## Making Everything Public

Bad:

```php
public int $money;
public int $health;
public int $rank;
```

---

## Making Everything Private

Bad:

```php
private function sendMessage()
```

Nobody can use it.

---

## Using Protected Incorrectly

Use protected only when inheritance is required.

---

## Exposing Sensitive Data

Bad:

```php
public string $password;
```

---

# Best Practices

✅ Properties should usually be private.

✅ Use public methods for access.

✅ Use protected for inheritance.

✅ Never expose sensitive information.

---

# Recommended Rule

```text
Private by default.
```

Only make things public when necessary.

---

# Exercises

---

## Exercise 1

Create:

```php
class Bank {

    private float $balance;

}
```

---

## Exercise 2

Create getter:

```php
getBalance()
```

---

## Exercise 3

Create setter with validation.

---

# Mini Project

Create:

```php
Player
```

Properties:

```text
name
money
rank
health
```

Use proper access modifiers.

---

# Quiz

### Which modifier is accessible everywhere?

<details>
<summary>Answer</summary>

```php
public
```

</details>

---

### Which modifier is only accessible in same class?

<details>
<summary>Answer</summary>

```php
private
```

</details>

---

### Which modifier supports inheritance?

<details>
<summary>Answer</summary>

```php
protected
```

</details>

---

### Which modifier should be used by default?

<details>
<summary>Answer</summary>

```php
private
```

</details>

---

# Summary

| Modifier | Same Class | Child | Outside |
|----------|-------------|--------|----------|
| public | ✅ | ✅ | ✅ |
| protected | ✅ | ✅ | ❌ |
| private | ✅ | ❌ | ❌ |

---

# Real PocketMine Example

```php
class Main extends PluginBase {

    private Database $database;

    protected function onEnable()
    : void {

        $this->database =
            new Database();

    }

    public function getDatabase()
    : Database {

        return $this->database;

    }

}
```

---

# References

https://www.php.net/manual/en/language.oop5.visibility.php

---

# Next Chapter

➡ Encapsulation

➡ Inheritance

➡ Polymorphism
