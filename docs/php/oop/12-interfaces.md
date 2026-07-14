---
title: Interfaces
sidebar_position: 12
description: Complete guide to PHP Interfaces from beginner to advanced level with real-world examples, PocketMine architecture, SOLID principles and enterprise development.
---

# Interfaces

## Chapter Overview

In this chapter you will learn:

- What interfaces are
- Why interfaces exist
- Interface syntax
- Implementing interfaces
- Multiple interfaces
- Interface inheritance
- Real-world examples
- Dependency Injection
- SOLID principles
- PocketMine examples
- Enterprise architecture
- Best practices
- Interview questions
- Exercises and projects

---

# What is an Interface?

An Interface is a **contract**.

It tells classes:

```text
"If you implement me,
you MUST provide these methods."
```

---

## Real Life Example

Think of a charger.

Your phone only cares:

```text
Can this charger provide power?
```

It does not care:

- Brand
- Company
- Internal circuitry
- Manufacturing process

As long as it follows the contract.

This is exactly how interfaces work.

---

# Definition

An interface defines:

```text
WHAT a class must do
but NOT HOW it should do it.
```

---

# Example

```php
interface Animal {

    public function sound();

}
```

This means:

Every class implementing:

```php
Animal
```

must provide:

```php
sound()
```

---

# Implementation

```php
class Dog
implements Animal {

    public function sound() {

        echo "Bark";

    }

}
```

---

```php
class Cat
implements Animal {

    public function sound() {

        echo "Meow";

    }

}
```

---

# Visualization

```text
Animal Interface
       ↓
 ┌─────────────┐
 │ sound()     │
 └─────────────┘
      / \
     /   \
   Dog   Cat
```

---

# Why Interfaces Exist

Without interfaces:

```php
class PayPal {

}

class Stripe {

}

class Crypto {

}
```

Every class becomes different.

No common contract.

---

With interfaces:

```php
interface PaymentGateway {

    public function pay(
        float $amount
    );
}
```

Now every payment system works similarly.

---

# Basic Syntax

---

## Declaring Interface

```php
interface Logger {

    public function log(
        string $message
    ): void;

}
```

---

## Implementing Interface

```php
class FileLogger
implements Logger {

    public function log(
        string $message
    ): void {

        echo $message;

    }

}
```

---

# Rules of Interfaces

---

## 1. Methods Are Public

Invalid:

```php
protected function log();
```

Interfaces only allow:

```php
public
```

---

## 2. Cannot Instantiate

Invalid:

```php
new Logger();
```

Error.

---

## 3. Cannot Have Properties

Invalid:

```php
interface Test {

    public string $name;

}
```

---

## 4. Methods Have No Body

Invalid:

```php
interface Test {

    public function hello() {

    }

}
```

---

# Why?

Because interfaces only define:

```text
CONTRACTS
```

not implementations.

---

# Example

---

## Interface

```php
interface Shape {

    public function area();

}
```

---

## Circle

```php
class Circle
implements Shape {

    public function area() {

        return 50;

    }

}
```

---

## Square

```php
class Square
implements Shape {

    public function area() {

        return 100;

    }

}
```

---

# Polymorphism

Interfaces become extremely powerful with polymorphism.

Example:

```php
function calculate(
    Shape $shape
) {

    return
        $shape->area();

}
```

Can accept:

- Circle
- Square
- Rectangle

---

# Real World Example

---

# Payment Gateway

Interface:

```php
interface PaymentGateway {

    public function pay(
        float $amount
    );

}
```

---

## Stripe

```php
class StripeGateway
implements PaymentGateway {

    public function pay(
        float $amount
    ) {

    }

}
```

---

## PayPal

```php
class PaypalGateway
implements PaymentGateway {

    public function pay(
        float $amount
    ) {

    }

}
```

---

## Crypto

```php
class CryptoGateway
implements PaymentGateway {

    public function pay(
        float $amount
    ) {

    }

}
```

---

# Usage

```php
function processPayment(
    PaymentGateway $gateway
) {

    $gateway->pay(
        500
    );

}
```

Amazing flexibility.

---

# Visualization

```text
PaymentGateway
│
├── PayPal
├── Stripe
└── Crypto
```

---

# Logger Example

---

## Interface

```php
interface Logger {

    public function log(
        string $message
    );
}
```

---

## Implementations

```text
FileLogger
DiscordLogger
DatabaseLogger
ConsoleLogger
```

---

# Usage

```php
class UserService {

    public function __construct(
        private Logger $logger
    ) {

    }

}
```

This is Dependency Injection.

---

# Why Interfaces Matter

Imagine changing:

```text
File Logger
```

to:

```text
Discord Logger
```

No code changes.

Simply swap implementation.

---

# Database Example

---

## Interface

```php
interface Database {

    public function query(
        string $sql
    );

}
```

---

## Implementations

```text
MySQLDatabase
SQLiteDatabase
MongoDatabase
RedisDatabase
```

Application never changes.

---

# Multiple Interfaces

PHP allows implementing multiple interfaces.

---

Example:

```php
class User
implements
JsonSerializable,
ArrayAccess,
Countable {

}
```

---

# Visualization

```text
User
 │
 ├── JsonSerializable
 ├── ArrayAccess
 └── Countable
```

---

# Why Multiple Interfaces?

Because PHP does not support:

```text
Multiple Inheritance
```

Interfaces solve this problem.

---

# Interface Inheritance

Interfaces can extend other interfaces.

---

Example:

```php
interface Animal {

    public function eat();

}
```

---

```php
interface Dog
extends Animal {

    public function bark();

}
```

---

Implementation:

```php
class GermanShepherd
implements Dog {

    public function eat() {

    }

    public function bark() {

    }

}
```

---

# Visualization

```text
Animal
   ↓
 Dog
   ↓
GermanShepherd
```

---

# Interface Segregation Principle

One huge interface is bad.

Bad:

```php
interface Worker {

    work();
    eat();
    sleep();
    code();
    drive();
}
```

Many classes won't need all methods.

---

Good:

```php
interface Worker {

    work();

}
```

```php
interface Driver {

    drive();

}
```

Small interfaces are better.

---

# Real Enterprise Architecture

```text
Controller
      ↓
Service
      ↓
Repository Interface
      ↓
Database Implementation
```

---

Example:

```php
UserRepositoryInterface
```

Implementations:

```text
MysqlRepository
MongoRepository
RedisRepository
```

---

# PocketMine Examples

PocketMine uses interfaces heavily.

---

# CommandSender

```text
Player
Console
Remote Console
```

All implement:

```php
CommandSender
```

---

Plugin can do:

```php
function execute(
    CommandSender $sender
)
```

Works everywhere.

---

# InventoryHolder

Implemented by:

```text
Player
Chest
Hopper
Furnace
```

---

# ChunkLoader

Implemented by:

```text
Player
World Systems
Plugins
```

---

# Why?

Because interfaces create:

```text
Loose Coupling
```

---

# Tight Coupling

Bad:

```php
class UserService {

    private MysqlDatabase $db;

}
```

Cannot change database.

---

# Loose Coupling

Good:

```php
private DatabaseInterface $db;
```

Any implementation works.

---

# Dependency Injection Example

---

Bad:

```php
$this->logger =
new FileLogger();
```

---

Good:

```php
public function __construct(
    Logger $logger
)
```

Now:

```text
FileLogger
DiscordLogger
DatabaseLogger
```

all work.

---

# Open Closed Principle

Interfaces help us follow:

```text
Open for Extension
Closed for Modification
```

Add new classes.

Do not modify existing code.

---

# Laravel Examples

---

## Cache

```text
Cache Interface
│
├── Redis
├── Memcached
└── File
```

---

## Queue

```text
Queue Interface
│
├── Redis
├── Database
└── SQS
```

---

## Mail

```text
Mailer Interface
│
├── SMTP
├── Mailgun
└── SES
```

---

# PocketMine Architecture Example

```text
CommandSender
│
├── Player
├── ConsoleCommandSender
└── RconCommandSender
```

One API.

Many implementations.

---

# Benefits

---

# 1. Loose Coupling

Classes depend on contracts.

Not implementations.

---

# 2. Easier Testing

Example:

```php
FakeDatabase
```

can replace:

```php
MysqlDatabase
```

---

# 3. Better Architecture

Large projects remain organized.

---

# 4. Easy Extensions

Add new features without changing code.

---

# Common Beginner Mistakes

---

## Creating Giant Interfaces

Bad.

---

## Naming Interface Poorly

Bad:

```php
interface ManagerInterfaceFactoryHandler
```

---

Good:

```php
Logger
PaymentGateway
Notifier
```

---

## Depending On Implementations

Bad:

```php
private MysqlDatabase $db;
```

Good:

```php
private Database $db;
```

---

# Best Practices

✅ Small interfaces.

✅ Depend on abstractions.

✅ Keep contracts simple.

✅ Use interfaces everywhere in large projects.

---

# Exercises

---

## Exercise 1

Create:

```text
Animal Interface
```

Methods:

```php
sound()
eat()
```

---

## Exercise 2

Create:

```text
PaymentGateway
```

Implement:

```text
PayPal
Stripe
Crypto
```

---

## Exercise 3

Create:

```text
Notifier
```

Implement:

```text
Email
Discord
SMS
```

---

# Mini Project

Create:

```text
ZyroNetwork Logger System
```

Interface:

```php
Logger
```

Implement:

```text
FileLogger
DiscordLogger
ConsoleLogger
```

Inject logger everywhere.

---

# Interview Questions

---

### What is an interface?

A contract defining methods classes must implement.

---

### Can interfaces contain properties?

No.

---

### Can interfaces have implementations?

No.

---

### Can a class implement multiple interfaces?

Yes.

---

### Why are interfaces important?

Because they provide loose coupling and scalability.

---

# Summary

Interfaces provide:

✅ Contracts

✅ Loose Coupling

✅ Dependency Injection

✅ Better Testing

✅ Enterprise Architecture

✅ Framework Flexibility

---

# References

https://www.php.net/manual/en/language.oop5.interfaces.php

---

# Next Chapter

➡ Abstract Classes

➡ Traits

➡ Dependency Injection

➡ SOLID Principles
