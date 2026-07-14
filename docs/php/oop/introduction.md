---
title: Introduction to Object Oriented Programming
sidebar_position: 1
description: Complete introduction to Object Oriented Programming in PHP.
---

# Introduction to Object Oriented Programming

Object Oriented Programming (OOP) is one of the most important concepts in modern software development.

Almost every large application today uses OOP.

Examples:

- PocketMine-MP
- Laravel
- Symfony
- WordPress
- Discord Bots
- Android Apps
- Games
- APIs
- Enterprise Software

---

# Why OOP Exists

Imagine building a server with:

- Players
- Worlds
- Commands
- Scoreboards
- Economy
- Friends
- Parties

Without OOP:

```php
$player1Money = 5000;
$player2Money = 10000;
$player3Money = 15000;
```

After 500 players:

```php
$player527Money
$player928Money
```

Impossible to manage.

---

# Real Life Example

Think about a Car.

A car has:

Properties:

```text
Color
Brand
Speed
Fuel
```

Actions:

```text
Start()
Stop()
Accelerate()
Brake()
```

This is exactly how OOP works.

---

# OOP Terminology

---

## Class

Blueprint.

Example:

```text
Player Blueprint
```

---

## Object

Actual instance created from blueprint.

```text
Aayan
Steve
Alex
```

---

## Property

Variable inside class.

```php
$name
$money
$rank
```

---

## Method

Function inside class.

```php
sendMessage()
kick()
ban()
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
├── addMoney()
└── kick()
```

Objects:

```text
Player1
Player2
Player3
```

---

# Memory Representation

```text
Class Definition
       ↓
new Player()
       ↓
Object Created
       ↓
Stored In Memory
```

---

# Creating a Class

```php
class Player {

}
```

---

# Creating Object

```php
$player =
new Player();
```

---

# Creating Multiple Objects

```php
$p1 = new Player();
$p2 = new Player();
$p3 = new Player();
```

Each object has its own memory.

---

# Why OOP is Powerful

---

# Code Reuse

Without OOP:

```php
sendMessagePlayer1();
sendMessagePlayer2();
sendMessagePlayer3();
```

With OOP:

```php
$player->sendMessage();
```

---

# Better Organization

Projects become easier to understand.

---

# Easier Teamwork

Multiple developers can work simultaneously.

---

# Scalability

Large projects become possible.

---

# Four Pillars of OOP

---

# 1. Encapsulation

Protect data.

Example:

```php
private int $money;
```

---

# 2. Inheritance

Reuse existing classes.

```text
Entity
   ↓
Human
   ↓
Player
```

---

# 3. Polymorphism

Same method can behave differently.

---

# 4. Abstraction

Hide internal implementation.

Example:

```php
$database->connect();
```

You don't need to know how it works internally.

---

# Procedural vs OOP

---

## Procedural

```php
$name = "Aayan";

function kick() {

}
```

---

## OOP

```php
$player->kick();
```

---

# Example

Procedural:

```php
function addMoney(
    &$money,
    int $amount
) {

    $money += $amount;

}
```

OOP:

```php
$player->addMoney(
    1000
);
```

Cleaner and easier.

---

# PocketMine Example

This:

```php
$player->sendMessage(
    "Hello"
);
```

Internally:

```text
Player Object
      ↓
Create Packet
      ↓
Serialize
      ↓
Send Through RakNet
```

This is abstraction.

---

# Object Relationships

---

## One Player belongs to one World

```text
Player
   ↓
World
```

---

## One Server contains many Players

```text
Server
   ↓
Players[]
```

---

## One Plugin contains many Commands

```text
Plugin
   ↓
Commands[]
```

---

# OOP Architecture Example

```text
Server
│
├── Players
├── Worlds
├── Commands
├── Scheduler
├── Network
└── Plugins
```

Everything is objects.

---

# Enterprise Example

```text
Controller
     ↓
Service
     ↓
Repository
     ↓
Database
```

Entire architecture is OOP.

---

# Advantages

✅ Reusability

✅ Cleaner Code

✅ Easier Maintenance

✅ Better Team Development

✅ Better Architecture

✅ Scalable Projects

---

# Disadvantages

❌ Slightly more difficult initially.

❌ More files.

❌ More abstraction.

---

# Where OOP is Used

- PHP Frameworks
- PocketMine-MP
- DragonFly
- Java
- C#
- Unreal Engine
- Android
- APIs
- Discord Bots
- Enterprise Applications

---

# Common Beginner Mistakes

---

## Thinking Classes Store Data

Classes are blueprints.

Objects store data.

---

## Treating Objects Like Arrays

Wrong:

```php
$player["money"];
```

Correct:

```php
$player->getMoney();
```

---

## Everything Public

Wrong:

```php
public int $money;
```

Prefer:

```php
private int $money;
```

---

## Huge Classes

Bad:

```text
PlayerManager
5000 lines
```

Split responsibilities.

---

# Exercises

---

## Exercise 1

Create blueprint:

```text
Car
```

Properties:

```text
brand
color
speed
```

---

## Exercise 2

Create blueprint:

```text
Server
```

Methods:

```text
start()
stop()
broadcast()
```

---

## Exercise 3

Think of real life objects and convert them into classes.

---

# Mini Project

Design architecture:

```text
Player
Party
Guild
Economy
```

How do these interact?

---

# Quiz

### What is a Class?

<details>
<summary>Answer</summary>

Blueprint used to create objects.

</details>

---

### What is an Object?

<details>
<summary>Answer</summary>

Instance created from class.

</details>

---

### Name four pillars of OOP.

<details>
<summary>Answer</summary>

Encapsulation

Inheritance

Polymorphism

Abstraction

</details>

---

# Real PocketMine Hierarchy

```text
PluginBase
      ↓
Main

Entity
      ↓
Human
      ↓
Player
```

---

# References

PHP OOP Documentation:

https://www.php.net/manual/en/language.oop5.php

---

# Next Chapter

➡ Classes and Objects
