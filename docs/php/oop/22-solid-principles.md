---
title: SOLID Principles
sidebar_position: 22
description: Complete guide to SOLID Principles with enterprise architecture, Laravel examples, PocketMine examples and ZyroNetwork project structures.
---

# SOLID Principles

## Chapter Overview

In this chapter you will learn:

- What SOLID is
- Why SOLID exists
- Clean Architecture
- Enterprise Design
- Maintainable Code
- The Five SOLID Principles
- Real-world Examples
- Laravel Architecture
- PocketMine Examples
- ZyroNetwork Examples
- Best Practices
- Interview Questions

---

# Introduction

SOLID is one of the most important concepts in software engineering.

Modern frameworks like:

- Laravel
- Symfony
- Spring Boot
- ASP.NET
- PocketMine-MP

all heavily follow SOLID principles.

Without SOLID:

```text
Applications become:

❌ Hard to maintain
❌ Difficult to scale
❌ Full of bugs
❌ Difficult to test
❌ Difficult to understand
```

---

# What is SOLID?

SOLID is an acronym:

| Letter | Principle |
|---------|------------|
| S | Single Responsibility Principle |
| O | Open Closed Principle |
| L | Liskov Substitution Principle |
| I | Interface Segregation Principle |
| D | Dependency Inversion Principle |

---

# Why SOLID Exists

Imagine:

```text
ZyroNetwork Project

100 Classes
500 Files
20 Developers
```

Without standards:

```text
Chaos.
```

SOLID helps create:

✅ Clean Architecture

✅ Scalable Applications

✅ Better Team Development

---

# Visualization

```text
SOLID
  ↓
Clean Code
  ↓
Maintainable Systems
  ↓
Enterprise Applications
```

---

---

# S → Single Responsibility Principle (SRP)

---

# Definition

```text
A class should have only ONE reason to change.
```

or

```text
One class = One responsibility.
```

---

# Bad Example

```php
class User {

    public function save() {}

    public function sendEmail() {}

    public function generatePDF() {}

    public function uploadAvatar() {}

}
```

Problems:

```text
User class does EVERYTHING.
```

---

# Why Bad?

If email changes:

```text
User changes.
```

If PDF changes:

```text
User changes.
```

One class becomes huge.

---

# Better Example

---

## User Model

```php
class User {

}
```

---

## Email Service

```php
class EmailService {

}
```

---

## PDF Service

```php
class PDFService {

}
```

---

## Avatar Service

```php
class AvatarService {

}
```

---

# Visualization

```text
User
│
├── EmailService
├── PDFService
└── AvatarService
```

---

# PocketMine Example

Bad:

```php
Main.php
```

contains:

```text
Commands
Forms
Database
Ranks
API
Events
Everything
```

---

Good:

```text
Main
│
├── RankManager
├── DatabaseManager
├── FormManager
├── APIManager
```

---

# Benefits

✅ Easier Maintenance

✅ Easier Testing

✅ Cleaner Architecture

---

---

# O → Open Closed Principle (OCP)

---

# Definition

```text
Software should be:

OPEN for extension
CLOSED for modification
```

---

# Meaning

You should be able to add new features without modifying existing code.

---

# Bad Example

```php
class Payment {

    public function pay(
        string $type
    ) {

        if($type === "paypal") {

        }

        elseif($type === "stripe") {

        }

    }

}
```

Every new payment method requires modifying class.

Bad.

---

# Good Example

---

## Interface

```php
interface PaymentMethod {

    public function pay();

}
```

---

## PayPal

```php
class PaypalPayment
implements PaymentMethod {

}
```

---

## Stripe

```php
class StripePayment
implements PaymentMethod {

}
```

---

Usage:

```php
class PaymentService {

    public function __construct(

        PaymentMethod $method

    ) {

    }

}
```

Now:

```text
New methods can be added
without changing old code.
```

---

# PocketMine Example

Commands.

Bad:

```php
if($cmd === "ban")
```

Good:

```php
BanCommand
KickCommand
MuteCommand
```

Each extends command system.

---

---

# L → Liskov Substitution Principle (LSP)

---

# Definition

```text
Child classes should be replaceable
with parent classes
without breaking behavior.
```

---

# Example

---

## Parent

```php
class Bird {

    public function fly() {

    }

}
```

---

## Child

```php
class Penguin
extends Bird {

}
```

Problem:

```text
Penguins cannot fly.
```

Inheritance is wrong.

---

# Better

```php
class Bird {

}

class FlyingBird
extends Bird {

}
```

---

```php
class Eagle
extends FlyingBird {

}
```

---

```php
class Penguin
extends Bird {

}
```

Correct.

---

# Why Important?

Bad inheritance creates bugs.

---

# PocketMine Example

Bad:

```text
Entity
      ↓
FlyingEntity
      ↓
Zombie
```

Zombie cannot fly.

Wrong hierarchy.

---

---

# I → Interface Segregation Principle (ISP)

---

# Definition

```text
Clients should not depend
on methods they do not use.
```

---

# Bad Example

```php
interface Worker {

    public function code();

    public function cook();

}
```

---

Programmer:

```php
class Developer
implements Worker {

}
```

Why should developer implement:

```php
cook()
```

Bad design.

---

# Better

---

## Coding Interface

```php
interface Coder {

    public function code();

}
```

---

## Cooking Interface

```php
interface Cook {

    public function cook();

}
```

Now classes implement only what they need.

---

# Visualization

Bad:

```text
Huge Interface
```

Good:

```text
Small Interfaces
```

---

# PocketMine Example

Bad:

```php
PlayerInterface
```

with:

```text
Chat
Movement
Permissions
Inventory
Networking
Forms
```

Huge.

---

Better:

```text
PermissionInterface
InventoryInterface
ChatInterface
```

---

---

# D → Dependency Inversion Principle (DIP)

---

# Definition

```text
Depend on abstractions,
not implementations.
```

---

# Bad Example

```php
class UserService {

    private MysqlDatabase $db;

}
```

Service directly depends on MySQL.

---

# Problems

❌ Cannot switch databases.

❌ Hard to test.

---

# Good Example

---

## Interface

```php
interface DatabaseInterface {

}
```

---

## MySQL

```php
class MysqlDatabase
implements DatabaseInterface {

}
```

---

## MongoDB

```php
class MongoDatabase
implements DatabaseInterface {

}
```

---

## Service

```php
class UserService {

    public function __construct(

        DatabaseInterface $database

    ) {

    }

}
```

---

Now:

```text
Any database can be injected.
```

Amazing flexibility.

---

# Visualization

Bad:

```text
UserService
      ↓
MysqlDatabase
```

Good:

```text
UserService
      ↓
DatabaseInterface
      ↓
MySQL
MongoDB
SQLite
```

---

# Laravel Example

Laravel's entire container follows DIP.

Example:

```php
UserRepositoryInterface
```

↓

```php
UserRepository
```

---

# PocketMine Example

Good architecture:

```text
RankManager
      ↓
DatabaseInterface
```

Not:

```text
RankManager
      ↓
MysqlProvider
```

---

# ZyroNetwork Example

---

Architecture:

```text
Main
│
├── DatabaseInterface
├── APIInterface
├── CacheInterface
└── LoggerInterface
```

Managers depend on interfaces.

---

# Complete SOLID Example

---

# Bad Architecture

```text
Main.php
```

Contains:

```text
Database
API
Commands
Forms
Ranks
Permissions
Network
```

5000 lines.

Nightmare.

---

# Good Architecture

```text
src/
│
├── API
├── Commands
├── Contracts
├── Database
├── Events
├── Forms
├── Managers
├── Models
├── Repositories
└── Services
```

---

# Benefits of SOLID

✅ Easier Testing

✅ Better Team Development

✅ Easier Maintenance

✅ Better Scaling

✅ Cleaner Architecture

✅ Less Bugs

---

# SOLID and Enterprise Applications

Every large company follows SOLID:

- Google
- Microsoft
- Meta
- Netflix
- Amazon

because applications may contain:

```text
100,000+
Classes
```

Without architecture:

Impossible.

---

# Common Beginner Mistakes

---

## God Classes

Example:

```php
Main.php
```

doing everything.

---

## Huge Interfaces

Interfaces with:

```text
50 Methods
```

Terrible.

---

## Wrong Inheritance

Penguin extends Bird with fly method.

---

## Hard Dependencies

```php
new Database()
```

everywhere.

---

# Best Practices

✅ Keep classes small.

✅ Use interfaces.

✅ Depend on abstractions.

✅ Separate responsibilities.

✅ Prefer composition over inheritance.

---

# SOLID Visualization

```text
SOLID
 │
 ├── SRP → One Responsibility
 ├── OCP → Extend without modification
 ├── LSP → Correct inheritance
 ├── ISP → Small interfaces
 └── DIP → Depend on abstractions
```

---

# Mini Project

Create:

```text
Zyro Authentication System
```

Structure:

```text
Contracts/
Services/
Repositories/
Managers/
Models/
```

Apply all SOLID principles.

---

# Exercises

---

## Exercise 1

Refactor:

```php
User
```

into multiple services.

---

## Exercise 2

Create:

```php
DatabaseInterface
```

---

## Exercise 3

Create payment system using OCP.

---

## Exercise 4

Split huge interfaces.

---

# Interview Questions

---

### What does SOLID stand for?

Single Responsibility

Open Closed

Liskov Substitution

Interface Segregation

Dependency Inversion

---

### Which principle says one class should have one responsibility?

```text
SRP
```

---

### Which principle says software should be open for extension?

```text
OCP
```

---

### Which principle uses interfaces heavily?

```text
DIP
```

---

### Which principle prevents huge interfaces?

```text
ISP
```

---

### Which principle prevents bad inheritance?

```text
LSP
```

---

# Summary

SOLID provides:

✅ Clean Code

✅ Scalable Applications

✅ Enterprise Architecture

✅ Better Team Development

✅ Easier Maintenance

✅ Better Testing

Modern frameworks and large applications rely heavily on SOLID principles.

Without SOLID, large projects quickly become difficult to manage.

---

# References

https://en.wikipedia.org/wiki/SOLID

https://phptherightway.com/

https://martinfowler.com/

https://refactoring.guru/design-patterns

---

# Next Chapter

➡ Design Patterns

➡ MVC Architecture

➡ Repository Pattern

➡ Service Container

➡ Event Driven Architecture
