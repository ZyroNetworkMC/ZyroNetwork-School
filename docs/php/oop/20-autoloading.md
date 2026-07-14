---
title: Autoloading
sidebar_position: 20
description: Complete guide to PHP Autoloading, PSR-4, Composer and Enterprise Architecture.
---

# Autoloading

## Chapter Overview

In this chapter you will learn:

- What autoloading is
- Why autoloading exists
- Problems before autoloading
- require and include problems
- spl_autoload_register()
- Composer autoloading
- PSR-4 standard
- Namespace resolution
- Framework architecture
- PocketMine loading system
- Enterprise examples
- Best practices

---

# Introduction

Autoloading is one of the most important concepts in modern PHP.

Without autoloading:

```text
Laravel would not exist.
Composer would not work.
PocketMine would become impossible to maintain.
```

Almost every modern PHP project relies heavily on autoloading.

---

# The Problem Before Autoloading

Imagine your project:

```text
User.php
Database.php
Config.php
AuthService.php
RankManager.php
PacketManager.php
```

Before using a class, you had to manually include it.

Example:

```php
require_once "User.php";
require_once "Database.php";
require_once "Config.php";
require_once "AuthService.php";
require_once "PacketManager.php";
```

This becomes horrible in large applications.

---

# Large Project Example

```text
1000+ Classes
```

Imagine:

```php
require_once "Class1.php";
require_once "Class2.php";
require_once "Class3.php";
```

Impossible to manage.

---

# Main Problems

❌ Huge files

❌ Slow loading

❌ Hard maintenance

❌ Circular includes

❌ Human mistakes

---

# Solution

```text
Autoloading
```

---

# What is Autoloading?

Autoloading means:

```text
Automatically loading classes
when they are needed.
```

Instead of:

```php
require_once
```

PHP loads files automatically.

---

# Visualization

```text
new User()
      ↓
PHP checks:
Is class loaded?
      ↓
NO
      ↓
Autoloader executes
      ↓
User.php loaded
      ↓
Class created
```

---

# Simple Example

```php
$user =
new User();
```

PHP automatically loads:

```text
User.php
```

without manually including it.

---

# How Does It Work?

PHP provides:

```php
spl_autoload_register()
```

---

# What is SPL?

SPL means:

```text
Standard PHP Library
```

---

# Basic Syntax

```php
spl_autoload_register(
    function($class)
    {

    }
);
```

---

# First Autoloader

```php
spl_autoload_register(
    function($class)
    {
        require $class . ".php";
    }
);
```

---

Usage:

```php
$user =
new User();
```

PHP automatically loads:

```text
User.php
```

---

# Visualization

```text
Class Requested
       ↓
Autoloader
       ↓
File Found
       ↓
File Included
```

---

# More Realistic Example

Project:

```text
classes/
├── User.php
├── Database.php
└── Config.php
```

Autoloader:

```php
spl_autoload_register(
    function($class)
    {
        require
            "classes/"
            . $class
            . ".php";
    }
);
```

---

# Problem

Namespaces now exist.

Example:

```php
new App\Models\User();
```

PHP receives:

```text
App\Models\User
```

which is not a file.

---

# Solution

Replace:

```text
\
```

with:

```text
/
```

---

Example:

```php
spl_autoload_register(
    function($class)
    {
        $class =
            str_replace(
                "\\",
                "/",
                $class
            );

        require
            $class
            . ".php";
    }
);
```

---

# Visualization

```text
App\Models\User
        ↓
App/Models/User
        ↓
App/Models/User.php
```

---

# PSR-4

Modern PHP uses:

```text
PSR-4 Autoloading
```

---

# What is PSR-4?

PSR means:

```text
PHP Standards Recommendation
```

PSR-4 defines:

```text
How namespaces map to folders.
```

---

# Example

Namespace:

```php
namespace App\Models;
```

Class:

```php
class User {

}
```

File:

```text
src/Models/User.php
```

---

# Visualization

```text
Namespace
      ↓
Folder
      ↓
File
```

---

# Why PSR-4 Exists

Before PSR-4:

Every framework created its own loading system.

Chaos.

PSR-4 standardized everything.

---

# Composer

Composer is PHP's package manager.

Composer heavily relies on:

```text
Autoloading
```

---

# Example composer.json

```json
{
    "autoload": {

        "psr-4": {

            "App\\": "src/"

        }

    }
}
```

---

Meaning:

```text
Namespace:

App\

Folder:

src/
```

---

# Example

Class:

```php
namespace App\Services;

class AuthService {

}
```

Composer automatically loads:

```text
src/Services/AuthService.php
```

---

# Running Composer

After editing:

```json
composer.json
```

Run:

```bash
composer dump-autoload
```

This generates:

```text
vendor/autoload.php
```

---

# Loading Composer

Example:

```php
require
"vendor/autoload.php";
```

Done.

Everything loads automatically.

---

# Composer Visualization

```text
Application
      ↓
vendor/autoload.php
      ↓
Composer Autoloader
      ↓
PSR-4 Mapping
      ↓
File Loaded
```

---

# Internal Process

```text
new User()
      ↓
Composer checks map
      ↓
Find namespace
      ↓
Convert namespace to path
      ↓
Load file
```

---

# Example

```php
new App\Models\User();
```

Composer:

```text
App\
 ↓
src/
 ↓
Models/User.php
```

---

# Folder Structure Example

```text
project/
│
├── composer.json
├── vendor/
├── src/
│   ├── Models/
│   ├── Services/
│   └── Controllers/
```

---

# Enterprise Example

Large projects:

```text
src/
│
├── Controllers
├── Models
├── Services
├── DTO
├── Events
├── Repositories
├── Exceptions
└── Contracts
```

Composer loads all of them.

---

# PocketMine Example

PocketMine plugins also use autoloading.

---

# Structure

```text
src/
└── zyro/
      ├── Main.php
      ├── commands/
      ├── listeners/
      ├── forms/
      └── managers/
```

---

Namespaces:

```php
namespace zyro;

namespace zyro\commands;

namespace zyro\forms;
```

PocketMine automatically loads these classes.

---

# Example

```php
use zyro\commands\TestCommand;
```

No:

```php
require_once
```

needed.

---

# Why?

PocketMine registers its own autoloader.

---

# PocketMine Internal Flow

```text
Plugin Loaded
      ↓
plugin.yml
      ↓
Main Class
      ↓
Autoloader
      ↓
All Classes Available
```

---

# ZyroNetwork Example

---

## Structure

```text
src/
│
├── api/
├── database/
├── ranks/
├── network/
├── forms/
├── commands/
└── utils/
```

---

Namespaces:

```php
zyro\api
zyro\ranks
zyro\network
zyro\database
```

Autoloading automatically handles everything.

---

# Manual Loading vs Autoloading

---

## Old Method

```php
require_once
```

Problems:

❌ Ugly

❌ Slow

❌ Hard maintenance

---

## Autoloading

Benefits:

✅ Automatic

✅ Clean

✅ Faster development

✅ Scalable

---

# Multiple Autoloaders

PHP allows multiple autoloaders.

Example:

```php
spl_autoload_register(
    function() {

    }
);

spl_autoload_register(
    function() {

    }
);
```

PHP tries them one by one.

---

# Visualization

```text
Class Requested
       ↓
Autoloader #1
       ↓
Not Found
       ↓
Autoloader #2
       ↓
Found
```

---

# Classmap Autoloading

Composer also supports:

```json
{
    "autoload": {

        "classmap": [

            "src/"
        ]

    }
}
```

Composer scans files.

Creates map:

```text
User
 ↓
src/User.php
```

---

# Files Autoloading

```json
{
    "autoload": {

        "files": [

            "helpers.php"
        ]

    }
}
```

Useful for:

```text
Functions
Constants
Helpers
```

---

# Performance

Composer creates optimized maps.

Run:

```bash
composer dump-autoload -o
```

This creates:

```text
Optimized Class Maps
```

Useful for production servers.

---

# Common Beginner Mistakes

---

## Wrong Namespace

Example:

```php
namespace App\Service;
```

Folder:

```text
src/Services/
```

Mismatch.

Autoload fails.

---

## Wrong File Name

```text
User.php
```

Class:

```php
class Users {

}
```

Confusing.

---

## Wrong Capitalization

Windows:

```text
Works
```

Linux:

```text
Breaks
```

Always keep:

```text
Namespace
=
Folder
=
File
```

---

# Best Practices

✅ Follow PSR-4

✅ Use Composer

✅ Avoid manual require_once

✅ Use optimized autoload

✅ Keep namespaces clean

---

# Real Enterprise Flow

```text
Request
   ↓
Controller
   ↓
Service
   ↓
Repository
   ↓
Database
```

Every class is autoloaded automatically.

---

# Framework Flow

```text
Application
      ↓
Composer
      ↓
Autoload
      ↓
Namespaces
      ↓
Class Files
```

---

# Exercises

---

## Exercise 1

Create your own autoloader using:

```php
spl_autoload_register()
```

---

## Exercise 2

Create structure:

```text
src/
├── Models
├── Services
└── Controllers
```

and autoload them.

---

## Exercise 3

Create:

```json
composer.json
```

with PSR-4 mapping.

---

# Mini Project

Create:

```text
ZyroNetwork Framework
```

Structure:

```text
src/
│
├── API
├── Commands
├── Events
├── Database
├── Network
├── Forms
├── Utils
└── Managers
```

Configure Composer autoloading.

---

# Interview Questions

---

### What is autoloading?

Automatically loading classes when needed.

---

### Why is autoloading important?

Because large projects cannot manually include thousands of files.

---

### What function registers autoloaders?

```php
spl_autoload_register()
```

---

### What is PSR-4?

A standard that maps namespaces to folders.

---

### Why does Composer need autoloading?

To automatically load packages and classes.

---

### What command regenerates Composer autoload files?

```bash
composer dump-autoload
```

---

### What file should usually be included?

```php
require "vendor/autoload.php";
```

---

# Summary

Autoloading provides:

✅ Automatic Class Loading

✅ Cleaner Code

✅ Better Architecture

✅ Composer Support

✅ Framework Development

✅ Enterprise Scalability

Modern PHP applications completely depend on autoloading.

Without autoloading, frameworks like Laravel, Symfony and PocketMine would become extremely difficult to maintain.

---

# References

https://www.php.net/manual/en/function.spl-autoload-register.php

https://www.php-fig.org/psr/psr-4/

https://getcomposer.org/doc/01-basic-usage.md

---

# Next Chapter

➡ Dependency Injection

➡ SOLID Principles

➡ Design Patterns

➡ Service Containers
