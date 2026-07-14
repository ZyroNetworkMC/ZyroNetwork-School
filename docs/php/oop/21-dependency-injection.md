---
title: Dependency Injection
sidebar_position: 21
description: Complete guide to Dependency Injection, Inversion of Control, Service Containers and Enterprise PHP Architecture.
---

# Dependency Injection (DI)

## Chapter Overview

In this chapter you will learn:

- What Dependency Injection is
- Why DI exists
- Problems without DI
- Tight Coupling
- Loose Coupling
- Constructor Injection
- Method Injection
- Property Injection
- Dependency Inversion Principle
- Service Containers
- Laravel Examples
- PocketMine Examples
- ZyroNetwork Architecture
- Best Practices
- Enterprise Patterns

---

# Introduction

Dependency Injection is one of the most important concepts in modern software engineering.

Frameworks like:

- Laravel
- Symfony
- PocketMine-MP
- Spring Boot
- ASP.NET

all heavily rely on Dependency Injection.

Without DI:

```text
Large applications become difficult to maintain,
difficult to test,
and impossible to scale properly.
```

---

# What is a Dependency?

A dependency is simply:

```text
Something a class needs
in order to work.
```

Example:

```php
class UserService {

}
```

UserService may need:

- Database
- Logger
- Config
- Cache

These are dependencies.

---

# Real Life Example

Imagine a car.

A car depends on:

- Engine
- Wheels
- Fuel

Without them:

```text
The car cannot function.
```

Similarly:

```php
UserService
```

depends on:

```php
Database
Logger
Cache
```

---

# Problem Without Dependency Injection

Example:

```php
class UserService {

    private Database $database;

    public function __construct()
    {
        $this->database =
            new Database();
    }

}
```

This works.

But it creates a huge problem.

---

# Problem: Tight Coupling

Visualization:

```text
UserService
      ↓
Database
```

The service is directly connected to Database.

You cannot replace it.

---

# Problems Created

❌ Hard to test

❌ Hard to replace database

❌ Hard to scale

❌ Hard to maintain

❌ Violates SOLID principles

---

# Example

Suppose later:

```text
MySQL → MongoDB
```

Now you must rewrite everything.

---

# Dependency Injection Solution

Instead of creating dependencies yourself:

```php
new Database();
```

Receive them from outside.

---

Example:

```php
class UserService {

    public function __construct(
        Database $database
    ) {

    }

}
```

Now:

```text
Someone else creates Database.
```

---

# Visualization

WITHOUT DI:

```text
UserService
      ↓
new Database()
```

WITH DI:

```text
Application
      ↓
Database
      ↓
UserService
```

Much better.

---

# Definition

Dependency Injection means:

```text
Providing dependencies from outside
instead of creating them internally.
```

---

# Types of Dependency Injection

There are three major types:

1. Constructor Injection
2. Method Injection
3. Property Injection

---

# Constructor Injection

Most common.

---

Example:

```php
class UserService {

    public function __construct(
        private Database $database
    ) {

    }

}
```

Usage:

```php
$database =
    new Database();

$service =
    new UserService(
        $database
    );
```

---

# Visualization

```text
Database
      ↓
Constructor
      ↓
UserService
```

---

# Why Constructor Injection?

Because dependencies become:

✅ Required

✅ Immutable

✅ Easy to understand

---

# Enterprise Example

```php
class AuthService {

    public function __construct(

        private Database $database,
        private Logger $logger,
        private Cache $cache

    ) {

    }

}
```

---

# Method Injection

Dependencies are passed to methods.

---

Example:

```php
class UserService {

    public function save(
        Database $database
    ) {

    }

}
```

---

Usage:

```php
$service->save(
    $database
);
```

---

# When To Use

Useful when dependency is only needed once.

---

# Property Injection

Example:

```php
class UserService {

    public Database $database;

}
```

Usage:

```php
$service =
    new UserService();

$service->database =
    new Database();
```

---

# Why Property Injection Is Bad

Problems:

❌ Dependency may not exist.

❌ Hard to track.

❌ Can become null.

---

Constructor Injection is usually preferred.

---

# Tight Coupling

Bad Example:

```php
class UserService {

    private Database $database;

    public function __construct()
    {
        $this->database =
            new Database();
    }

}
```

---

# Loose Coupling

Good Example:

```php
class UserService {

    public function __construct(
        Database $database
    ) {

    }

}
```

---

# Why Loose Coupling Matters

Because systems become replaceable.

---

Example:

```text
MySQL
```

can become:

```text
MongoDB
Redis
SQLite
```

without rewriting everything.

---

# Interfaces + DI

This is where DI becomes extremely powerful.

---

Example:

```php
interface DatabaseInterface {

    public function query(
        string $sql
    );

}
```

---

Implementation:

```php
class MysqlDatabase
implements DatabaseInterface {

}
```

---

Another:

```php
class MongoDatabase
implements DatabaseInterface {

}
```

---

Service:

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

```text
UserService
      ↓
DatabaseInterface
      ↓
┌───────────────┐
│ MySQL         │
│ MongoDB       │
│ SQLite        │
└───────────────┘
```

---

# Dependency Inversion Principle

One of SOLID principles.

Rule:

```text
Depend on abstractions,
not implementations.
```

---

Bad:

```php
UserService
      ↓
MysqlDatabase
```

Good:

```php
UserService
      ↓
DatabaseInterface
```

---

# Service Container

A Service Container is:

```text
A system that automatically
creates dependencies.
```

---

# Example

Instead of:

```php
$database =
new Database();

$service =
new UserService(
    $database
);
```

Container does it automatically.

---

# Laravel Example

```php
public function __construct(

    UserRepository $users

)
```

Laravel automatically injects:

```php
UserRepository
```

Magic.

---

# Internal Flow

```text
Controller
      ↓
Container
      ↓
Create Dependencies
      ↓
Inject Dependencies
```

---

# Example Container

```php
class Container {

    private array $services = [];

}
```

---

Register:

```php
$container->set(
    Database::class,
    new Database()
);
```

Retrieve:

```php
$container->get(
    Database::class
);
```

---

# PocketMine Example

PocketMine plugins often use managers.

---

Bad:

```php
new RankManager();
new DatabaseManager();
new APIManager();
```

everywhere.

---

Good:

```php
class Main {

    private RankManager $ranks;

}
```

Inject managers.

---

# ZyroNetwork Example

---

Architecture:

```text
Main
│
├── DatabaseManager
├── RankManager
├── APIManager
├── FormManager
└── NetworkManager
```

Dependencies are injected.

---

Example:

```php
class RankManager {

    public function __construct(

        DatabaseManager $database

    ) {

    }

}
```

---

Visualization:

```text
DatabaseManager
        ↓
RankManager
        ↓
APIManager
```

---

# Real Enterprise Architecture

```text
Controller
      ↓
Service
      ↓
Repository
      ↓
Database
```

Everything uses DI.

---

# Testing Benefits

Suppose:

```php
UserService
```

depends on:

```php
DatabaseInterface
```

For testing:

```php
class FakeDatabase
implements DatabaseInterface {

}
```

Inject fake object.

Testing becomes easy.

---

# Unit Testing Example

```php
$database =
new FakeDatabase();

$service =
new UserService(
    $database
);
```

No real database needed.

---

# Common Beginner Mistakes

---

## Creating Objects Everywhere

Bad:

```php
new Database();
new Logger();
new Cache();
```

inside every class.

---

## Static Abuse

Bad:

```php
Database::query();
```

everywhere.

---

Creates hidden dependencies.

---

## Not Using Interfaces

Interfaces make systems flexible.

---

# Good Example

```php
AuthService
      ↓
DatabaseInterface
```

---

# Bad Example

```php
AuthService
      ↓
MysqlDatabase
```

---

# Constructor Promotion Example

PHP 8:

```php
class UserService {

    public function __construct(

        private Database $database,
        private Logger $logger

    ) {

    }

}
```

Very clean.

---

# Dependency Graph

```text
Application
│
├── Database
├── Logger
├── Cache
│
└── UserService
```

---

# Large Enterprise Example

```text
App
│
├── Controllers
├── Services
├── Repositories
├── Managers
├── Events
├── DTO
└── Contracts
```

Everything communicates using DI.

---

# Best Practices

✅ Prefer Constructor Injection.

✅ Depend on Interfaces.

✅ Avoid static dependencies.

✅ Use Service Containers.

✅ Keep dependencies small.

---

# Bad Signs

❌ Constructor has 15 dependencies.

Usually means:

```text
Class has too many responsibilities.
```

---

# Exercises

---

## Exercise 1

Create:

```php
DatabaseInterface
```

---

## Exercise 2

Create:

```php
MysqlDatabase
```

---

## Exercise 3

Inject database into:

```php
UserService
```

---

# Mini Project

Create:

```text
ZyroNetwork Authentication System
```

Classes:

```text
AuthService
UserRepository
DatabaseManager
LoggerManager
CacheManager
```

Use Dependency Injection everywhere.

---

# Interview Questions

---

### What is Dependency Injection?

Providing dependencies from outside instead of creating them internally.

---

### Why is DI useful?

Because it creates:

```text
Loose Coupling
```

---

### What are the three types of DI?

1. Constructor Injection
2. Method Injection
3. Property Injection

---

### Which type is preferred?

```text
Constructor Injection
```

---

### What principle does DI support?

```text
Dependency Inversion Principle
```

---

### Why do frameworks use DI?

For scalability, maintainability and testing.

---

# Summary

Dependency Injection provides:

✅ Loose Coupling

✅ Easier Testing

✅ Better Architecture

✅ Flexible Systems

✅ Cleaner Code

✅ Enterprise Scalability

Dependency Injection is one of the foundations of modern PHP frameworks and large projects like:

- Laravel
- Symfony
- PocketMine Plugins
- ZyroNetwork APIs
- Enterprise Applications

---

# References

https://phptherightway.com/#dependency_injection

https://martinfowler.com/articles/injection.html

https://laravel.com/docs/container

---

# Next Chapter

➡ SOLID Principles

➡ Design Patterns

➡ Service Containers

➡ Repository Pattern

➡ MVC Architecture
