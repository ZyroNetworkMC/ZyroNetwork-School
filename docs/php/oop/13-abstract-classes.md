---
title: Abstract Classes
sidebar_position: 13
description: Learn PHP Abstract Classes in complete detail with real-world examples, inheritance, PocketMine architecture and enterprise software development.
---

# Abstract Classes

## Chapter Overview

In this chapter you will learn:

- What abstract classes are
- Why abstract classes exist
- Abstract methods
- Concrete methods
- Constructors inside abstract classes
- Properties in abstract classes
- Difference between interfaces and abstract classes
- Real world examples
- PocketMine architecture
- Enterprise architecture
- Best practices
- Exercises and projects

---

# What is an Abstract Class?

An abstract class is a class that:

```text
Cannot be instantiated directly
and is designed to be inherited.
```

It acts as a blueprint.

---

# Definition

Abstract classes allow you to:

✅ Define common functionality

✅ Force child classes to implement methods

✅ Share code between classes

---

# Syntax

```php
abstract class Animal {

}
```

Keyword:

```php
abstract
```

---

# Invalid Example

```php
$animal =
new Animal();
```

Output:

```text
Fatal Error
Cannot instantiate abstract class
```

---

# Why Abstract Classes Exist

Imagine:

```text
Dog
Cat
Bird
Fish
```

All animals:

- Eat
- Sleep
- Move

But every animal has different sounds.

---

Instead of:

```php
class Dog {

}

class Cat {

}

class Bird {

}
```

repeating code, we create:

```php
abstract class Animal {

}
```

---

# Real Life Example

Think of:

```text
Vehicle
```

You never see:

```text
Generic Vehicle
```

You only see:

- Car
- Bike
- Truck

Vehicle itself is abstract.

---

# Visualization

```text
Vehicle
│
├── Car
├── Bike
└── Truck
```

---

# Basic Example

```php
abstract class Animal {

    public function eat() {

        echo "Eating";

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

Usage:

```php
$dog =
new Dog();

$dog->eat();
```

---

# Why Not Create Animal?

Because:

```text
Animal itself is only an idea.
```

Concrete objects are:

```text
Dog
Cat
Bird
```

---

# Abstract Methods

Abstract methods have:

```text
NO IMPLEMENTATION
```

---

Example:

```php
abstract class Animal {

    abstract public function sound();

}
```

No body:

```php
{

}
```

---

# Child Must Implement

```php
class Dog
extends Animal {

    public function sound() {

        echo "Bark";

    }

}
```

---

Another:

```php
class Cat
extends Animal {

    public function sound() {

        echo "Meow";

    }

}
```

---

# Visualization

```text
Animal
│
├── eat()
├── sleep()
└── sound() ← abstract
```

---

# Why?

Because every animal:

```text
Sounds differently.
```

---

# Mixing Abstract and Normal Methods

Abstract classes may contain:

✅ Normal Methods

✅ Properties

✅ Constructors

✅ Constants

✅ Abstract Methods

---

# Example

```php
abstract class Animal {

    protected string $name;

    public function eat() {

        echo "Eating";

    }

    abstract public function sound();

}
```

---

# Properties Inside Abstract Classes

Example:

```php
abstract class Entity {

    protected int $health = 20;

}
```

Children inherit them.

---

# Constructor Example

```php
abstract class Entity {

    public function __construct() {

        echo "Entity Created";

    }

}
```

---

Child:

```php
class Player
extends Entity {

}
```

Output:

```text
Entity Created
```

---

# Abstract Classes as Templates

Abstract classes provide:

```text
Default behavior
+
Required behavior
```

---

# Real World Example

---

## Payment System

Abstract class:

```php
abstract class Payment {

    public function validate() {

        echo "Validation";

    }

    abstract public function pay();

}
```

---

Child:

```php
class StripePayment
extends Payment {

    public function pay() {

    }

}
```

---

Another:

```php
class PaypalPayment
extends Payment {

    public function pay() {

    }

}
```

---

# Benefits

Validation code remains shared.

Only payment logic changes.

---

# Database Example

```php
abstract class Database {

    protected string $host;

    abstract public function connect();

}
```

---

Implementations:

```text
MySQL
SQLite
MongoDB
```

---

# Game Example

```php
abstract class Entity {

    protected int $health;

    abstract public function attack();

}
```

---

Implementations:

```text
Zombie
Player
Cow
Skeleton
```

---

# PocketMine Example

PocketMine architecture heavily uses abstraction.

---

# Simplified Example

```text
Entity
│
├── Human
│      └── Player
│
├── Monster
│      └── Zombie
│
└── Animal
```

---

`Entity` behaves almost like an abstract concept.

Every entity:

```text
Has Position
Has Health
Can Move
Can Teleport
```

---

But every entity:

```text
Attacks Differently
Moves Differently
Behaves Differently
```

---

# Plugin Example

```text
PluginBase
      ↓
Main
```

`PluginBase` acts as a framework blueprint.

---

# Enterprise Example

```text
Controller
      ↓
UserController
      ↓
AdminController
```

Shared functionality exists inside base classes.

---

# Abstract Class vs Interface

This is extremely important.

---

| Feature | Interface | Abstract Class |
|----------|------------|----------------|
| Properties | ❌ | ✅ |
| Constructors | ❌ | ✅ |
| Method Bodies | ❌ | ✅ |
| Multiple Usage | ✅ | ❌ |
| State Storage | ❌ | ✅ |

---

# Example

Interface:

```php
interface Logger {

    public function log();

}
```

Abstract:

```php
abstract class Logger {

    protected string $path;

    abstract public function log();

}
```

---

# When To Use Interface?

When classes only share:

```text
Behavior
```

---

# When To Use Abstract Class?

When classes share:

```text
Behavior
+
State
+
Implementation
```

---

# Example

Bad:

```php
interface Entity {

    protected int $health;
}
```

Invalid.

Interfaces cannot have properties.

---

Good:

```php
abstract class Entity {

    protected int $health;

}
```

---

# Method Visibility Rules

Abstract methods may be:

```php
public
protected
```

Never:

```php
private
```

---

# Child Visibility Rule

Child visibility cannot become stricter.

Bad:

```php
abstract public function move();
```

Child:

```php
protected function move()
```

Invalid.

---

# Good

```php
public function move()
```

---

# Final + Abstract?

Invalid:

```php
final abstract class Entity {

}
```

Contradictory.

---

# Abstract Constants?

PHP allows constants:

```php
public const VERSION = 1;
```

inside abstract classes.

---

# Template Method Pattern

Abstract classes often implement:

```text
Template Method Pattern
```

Example:

```php
abstract class Game {

    public function start() {

        $this->load();

        $this->run();

    }

    abstract protected function load();

    abstract protected function run();

}
```

Children customize parts.

---

# Visualization

```text
Game
 │
 ├── start()
 │
 ├── load()
 └── run()
```

---

# Benefits of Abstract Classes

---

# 1. Code Reuse

Shared logic remains in one place.

---

# 2. Cleaner Architecture

Projects become easier.

---

# 3. Less Duplication

Write once.

Reuse everywhere.

---

# 4. Better Design

Provides templates.

---

# Common Beginner Mistakes

---

## Instantiating Abstract Classes

Bad:

```php
new Animal();
```

---

## Using Interfaces Everywhere

Sometimes abstract classes are better.

---

## Large Inheritance Chains

Bad:

```text
Entity
 ↓
Living
 ↓
Monster
 ↓
HostileMonster
 ↓
SuperMonster
```

Too complex.

---

# Best Practices

✅ Keep abstract classes small.

✅ Put only common functionality.

✅ Use interfaces for contracts.

✅ Avoid deep inheritance.

---

# Real Enterprise Example

```text
BaseController
│
├── UserController
├── AdminController
└── ApiController
```

---

# Laravel Example

```text
Model
│
├── User
├── Product
└── Post
```

Model provides:

```text
save()
delete()
update()
```

Children inherit everything.

---

# PocketMine Example

```text
Entity
│
├── Human
│     └── Player
│
├── Monster
└── Projectile
```

---

# Exercises

---

## Exercise 1

Create:

```php
abstract class Vehicle
```

Methods:

```php
move()
fuel()
```

---

## Exercise 2

Create:

```text
Animal
Dog
Cat
Bird
```

---

## Exercise 3

Create:

```text
Payment
PayPal
Stripe
Crypto
```

---

# Mini Project

Create:

```text
Entity System
```

Architecture:

```text
Entity
│
├── Player
├── Zombie
├── Skeleton
└── Cow
```

Properties:

```text
Health
Position
Name
```

Methods:

```text
move()
attack()
damage()
```

---

# Interview Questions

---

### What is an abstract class?

A class that cannot be instantiated directly.

---

### Can abstract classes have properties?

Yes.

---

### Can abstract classes have constructors?

Yes.

---

### Difference between interface and abstract class?

Interfaces define contracts.

Abstract classes define contracts + implementation.

---

### Can abstract classes have normal methods?

Yes.

---

# Summary

Abstract Classes provide:

✅ Shared State

✅ Shared Logic

✅ Templates

✅ Cleaner Architectures

✅ Better Framework Design

---

# References

https://www.php.net/manual/en/language.oop5.abstract.php

---

# Next Chapter

➡ Traits

➡ Static Members

➡ Final Keyword

➡ Magic Methods
