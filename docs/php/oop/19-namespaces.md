---
title: Namespaces
sidebar_position: 19
description: Complete guide to PHP Namespaces, PSR-4, Composer Autoloading and Enterprise Architecture.
---

# Namespaces

## Chapter Overview

In this chapter you will learn:

- What namespaces are
- Why namespaces exist
- Namespace syntax
- Importing classes
- Aliases
- Global namespace
- PSR-4 standards
- Composer autoloading
- PocketMine plugin structure
- Enterprise architecture
- Best practices

---

# Introduction

Namespaces are one of the most important concepts in modern PHP.

Without namespaces:

```text
Large PHP applications would become impossible to manage.
```

Frameworks like:

- Laravel
- Symfony
- PocketMine-MP
- Composer Packages

all heavily rely on namespaces.

---

# What is a Namespace?

A namespace is:

```text
A way to organize classes,
interfaces,
traits,
functions,
and constants.
```

Think of it like folders on your computer.

---

# Real Life Example

Imagine your PC:

```text
Documents/
Pictures/
Downloads/
```

Each folder keeps files organized.

Namespaces do the same for PHP code.

---

# The Problem Without Namespaces

Imagine two developers.

Developer 1 creates:

```php
class User {

}
```

Developer 2 also creates:

```php
class User {

}
```

Now PHP sees:

```text
User
User
```

Conflict.

---

Output:

```text
Fatal Error:
Cannot declare class User.
```

---

# Solution

Namespaces.

---

Developer 1:

```php
namespace App\Models;

class User {

}
```

Developer 2:

```php
namespace Zyro\Auth;

class User {

}
```

Now:

```text
App\Models\User

Zyro\Auth\User
```

No conflicts.

---

# Visualization

```text
App
└── Models
      └── User

Zyro
└── Auth
      └── User
```

---

# Basic Syntax

Example:

```php
namespace App\Models;

class User {

}
```

This class now becomes:

```text
App\Models\User
```

---

# Accessing Classes

---

## Fully Qualified Name

```php
$user =
new App\Models\User();
```

---

## Importing

Better:

```php
use App\Models\User;

$user =
new User();
```

Much cleaner.

---

# Visualization

```text
use
 ↓
Import Class
 ↓
Use Short Name
```

---

# Nested Namespaces

Namespaces may contain many levels.

---

Example:

```php
namespace ZyroNetwork\School\Courses\PHP;
```

---

Structure:

```text
ZyroNetwork
        ↓
School
        ↓
Courses
        ↓
PHP
```

---

# Folder Mapping

Usually:

```text
src/
└── School
      └── Courses
            └── PHP
```

---

# Why Use Namespaces?

Benefits:

✅ No naming conflicts

✅ Better organization

✅ Composer support

✅ PSR-4 support

✅ Large applications become manageable

---

# Global Namespace

Everything without namespace belongs to:

```text
Global Namespace
```

Example:

```php
class User {

}
```

This becomes:

```text
\User
```

---

# Accessing Global Classes

Example:

```php
$date =
new \DateTime();
```

The `\` means:

```text
Start from global namespace.
```

---

# Example

```php
namespace App;

$date =
new \DateTime();
```

Without:

```php
\
```

PHP tries:

```text
App\DateTime
```

which does not exist.

---

# Namespace Keyword

```php
namespace App\Models;
```

Must usually appear at top of file.

---

# Importing Classes

---

Example:

```php
use App\Models\User;
```

Now:

```php
$user =
new User();
```

---

# Multiple Imports

```php
use App\Models\User;
use App\Models\Post;
use App\Services\AuthService;
```

---

# Group Imports

PHP allows:

```php
use App\Models\{
    User,
    Post,
    Comment
};
```

---

# Aliases

Sometimes class names conflict.

Example:

```php
use PocketMine\Player;
use Zyro\Core\Player;
```

Conflict.

---

Solution:

```php
use PocketMine\Player
    as PMPlayer;

use Zyro\Core\Player
    as ZyroPlayer;
```

---

Usage:

```php
$player =
new PMPlayer();
```

---

# Visualization

```text
Original Name
       ↓
      Alias
```

---

# Importing Functions

Namespaces can also import functions.

---

Example:

```php
use function strlen;
```

---

# Importing Constants

Example:

```php
use const PHP_VERSION;
```

---

# Namespace Resolution

PHP resolves classes like this:

---

## Current Namespace

```php
namespace App;
```

Code:

```php
new User();
```

PHP searches:

```text
App\User
```

---

## Global Namespace

```php
new \DateTime();
```

PHP searches:

```text
\DateTime
```

---

# Real Example

```php
namespace Zyro;

new Config();
```

PHP tries:

```text
Zyro\Config
```

---

# Namespaces and Folder Structure

Modern PHP follows:

```text
One namespace
=
One folder structure
```

---

# Example

Class:

```text
App\Services\AuthService
```

Usually stored in:

```text
src/
└── Services
      └── AuthService.php
```

---

# PSR-4 Standard

One of the most important PHP standards.

---

PSR-4 says:

```text
Namespace
must match
Folder Structure.
```

---

# Example

Namespace:

```php
namespace Zyro\School\Courses;
```

File:

```text
src/School/Courses/
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

```text
Huge projects became messy.
```

PSR-4 allows:

✅ Automatic loading

✅ Standardized structures

✅ Composer support

---

# Composer Example

```json
{
  "autoload": {

    "psr-4": {

      "Zyro\\": "src/"

    }

  }
}
```

---

Meaning:

```text
Namespace: Zyro\
Folder: src/
```

---

# Example

Class:

```php
namespace Zyro\Services;

class AuthService {

}
```

File:

```text
src/
└── Services
      └── AuthService.php
```

---

# Composer Automatically Loads It

No need:

```php
require_once
```

---

# Old PHP Way

Before namespaces:

```php
require_once "User.php";
require_once "Post.php";
require_once "Database.php";
```

Terrible.

---

Modern PHP:

```php
use App\Models\User;
```

Done.

---

# PocketMine Namespace Structure

PocketMine uses namespaces everywhere.

---

Example:

```php
use pocketmine\player\Player;
```

---

Actual file:

```text
src/
└── player
      └── Player.php
```

---

Another example:

```php
use pocketmine\world\World;
```

File:

```text
src/
└── world
      └── World.php
```

---

# Plugin Example

Your plugin:

```text
src/
└── zyro/
      └── Main.php
```

---

Main.php:

```php
namespace zyro;

class Main {

}
```

---

# Better Structure

```text
src/
└── zyro/
      ├── Main.php
      ├── commands/
      ├── listeners/
      ├── managers/
      ├── forms/
      └── utils/
```

---

Namespaces:

```php
namespace zyro\commands;
namespace zyro\listeners;
namespace zyro\utils;
```

---

# ZyroNetwork Example

---

Structure:

```text
src/
└── zyro/
      ├── api/
      ├── network/
      ├── ranks/
      ├── commands/
      ├── database/
      ├── utils/
      └── forms/
```

---

Namespaces:

```php
zyro\api
zyro\network
zyro\ranks
zyro\database
```

---

# Enterprise Example

Large applications:

```text
src/
│
├── Controllers
├── Services
├── Repositories
├── Models
├── DTO
├── Events
├── Listeners
├── Exceptions
└── Contracts
```

---

Namespaces:

```text
App\Controllers
App\Services
App\Repositories
```

---

# Why?

Because projects may contain:

```text
1000+
Classes
```

Without namespaces:

Impossible to manage.

---

# Common Beginner Mistakes

---

## Wrong Folder Structure

Bad:

```text
Namespace:
App\Services

File:
src/Test/Auth.php
```

---

PSR-4 breaks.

---

## Wrong Capitalization

Windows may work.

Linux may fail.

---

Always keep:

```text
Namespace
=
Folder Structure
```

---

## Using Global Namespace Everywhere

Bad:

```php
new \App\Models\User();
```

Use imports instead.

---

# Best Practices

✅ Follow PSR-4.

✅ Use meaningful namespaces.

✅ Keep folder structures clean.

✅ Avoid extremely deep namespaces.

---

# Good Example

```text
App\Services\AuthService
```

---

# Bad Example

```text
App\Core\Services\Auth\Authentication\Services\AuthServiceManager
```

Too deep.

---

# Namespace Architecture Example

```text
App
│
├── Controllers
├── Services
├── Models
├── DTO
├── Contracts
├── Events
└── Exceptions
```

---

# Exercises

---

## Exercise 1

Create:

```text
App\Models\User
```

---

## Exercise 2

Create:

```text
Zyro\Ranks\RankManager
```

---

## Exercise 3

Create:

```text
Zyro\Network\PacketManager
```

---

# Mini Project

Create structure:

```text
src/
│
├── API
├── Commands
├── Forms
├── Listeners
├── Managers
├── Network
├── Utils
└── Database
```

Namespaces:

```text
Zyro\API
Zyro\Commands
Zyro\Forms
Zyro\Managers
```

---

# Interview Questions

---

### What is a namespace?

A way to organize classes and avoid naming conflicts.

---

### Why are namespaces important?

Because large projects may contain thousands of classes.

---

### What does `use` do?

Imports a class into current file.

---

### What is PSR-4?

A standard that maps namespaces to folders.

---

### Why does Composer need namespaces?

For automatic class loading.

---

# Summary

Namespaces provide:

✅ Organization

✅ No Class Conflicts

✅ Composer Support

✅ PSR-4 Compatibility

✅ Enterprise Architecture

✅ Framework Development

Modern PHP development is impossible without namespaces.

---

# References

https://www.php.net/manual/en/language.namespaces.php

https://www.php-fig.org/psr/psr-4/

---

# Next Chapter

➡ Autoloading

➡ Dependency Injection

➡ SOLID Principles

➡ Design Patterns
