---
title: PHP Introduction
sidebar_label: 1. Introduction
sidebar_position: 1
description: Learn PHP from scratch for web development and PocketMine-MP plugin development.
---

# PHP Introduction

Welcome to the complete PHP course of **ZyroNetwork School**.

This course is designed for:

- Absolute Beginners
- Web Developers
- Backend Developers
- Minecraft PocketMine-MP Developers
- API Developers
- Server Administrators

By the end of this course, you will be able to:

✅ Build PHP Applications  
✅ Create APIs  
✅ Understand OOP deeply  
✅ Build PocketMine-MP Plugins  
✅ Work with Databases  
✅ Write Professional Code  
✅ Understand Composer and Modern PHP

---

# What is PHP?

PHP stands for:

> **PHP: Hypertext Preprocessor**

PHP is a powerful, open-source scripting language mainly used for:

- Dynamic Websites
- APIs
- Web Applications
- Backend Systems
- Game Server Development
- Command Line Applications

PHP code is executed on the server and the output is sent to the user.

---

# History of PHP

PHP was created by:

👤 **Rasmus Lerdorf**

Year:

📅 **1994**

Initially, PHP was developed as a small collection of scripts to manage personal websites.

Over time, PHP evolved into one of the most widely used programming languages in the world.

---

# PHP Evolution

| Version | Release | Features |
|----------|----------|-----------|
| PHP 3 | 1998 | First major version |
| PHP 4 | 2000 | Zend Engine |
| PHP 5 | 2004 | OOP Improvements |
| PHP 7 | 2015 | Huge performance increase |
| PHP 8 | 2020 | JIT Compiler |
| PHP 8.1 | 2021 | Enums, Fibers |
| PHP 8.2 | 2022 | Readonly Classes |
| PHP 8.3 | 2023 | Performance Improvements |

---

# Why Learn PHP?

Many people think PHP is outdated.

This is completely false.

PHP powers a huge part of the internet.

Popular websites using PHP:

- Facebook (Originally)
- Wikipedia
- WordPress
- Joomla
- Magento
- Laravel Applications
- PocketMine-MP

---

# Why PHP for PocketMine-MP?

PocketMine-MP uses PHP because:

✅ Easy to Learn

✅ Fast Development

✅ Powerful OOP System

✅ Large Ecosystem

✅ Cross Platform

✅ Supports Modern Features

PHP 8 introduced many features making it even better:

- Strict Typing
- Enums
- Attributes
- JIT Compilation
- Fibers

---

# What Can PHP Do?

PHP can:

## Web Development

```php
echo "Hello World";
```

---

## Handle Forms

```php
$_POST["username"];
```

---

## Connect Databases

```php
$pdo = new PDO(...);
```

---

## Create APIs

```php
return json_encode($data);
```

---

## Read Files

```php
file_get_contents();
```

---

## Build CLI Applications

```bash
php app.php
```

---

## Build Minecraft Plugins

```php
class Main extends PluginBase {

}
```

---

# PHP vs Other Languages

| Feature | PHP | Python | Java |
|---------|------|---------|------|
| Easy to Learn | ✅ | ✅ | ❌ |
| Web Development | ✅ | ✅ | ✅ |
| Speed | ✅ | ❌ | ✅ |
| PocketMine Support | ✅ | ❌ | ❌ |
| Huge Community | ✅ | ✅ | ✅ |

---

# PHP Syntax Example

```php
<?php

declare(strict_types=1);

echo "Welcome to ZyroNetwork School!";
```

Output:

```text
Welcome to ZyroNetwork School!
```

---

# Why `strict_types=1` ?

Always use:

```php
declare(strict_types=1);
```

This enables strict type checking.

Example:

```php
function add(int $a, int $b): int {
    return $a + $b;
}

add("5", "2");
```

Without strict types:

```php
7
```

With strict types:

```text
TypeError
```

This prevents bugs.

PocketMine-MP heavily relies on strict typing.

---

# PHP Execution Process

```text
Browser
    ↓
Web Server
    ↓
PHP Interpreter
    ↓
Execute Code
    ↓
Generate HTML/API Response
    ↓
Send Back to User
```

---

# How PHP Works Internally

1. User sends request
2. Web Server receives request
3. PHP Engine executes file
4. Database queries are executed
5. Response is generated
6. User receives output

---

# PHP Usage Areas

## Web Applications

Examples:

- Forums
- CMS
- Dashboards
- Authentication Systems

---

## REST APIs

Examples:

- Discord Bots
- Mobile Backends
- Minecraft APIs

---

## Game Server Development

Examples:

- PocketMine Plugins
- Statistics APIs
- Rank Systems
- Economy Systems
- Matchmaking Systems

---

# Popular PHP Frameworks

## Laravel

Website:

https://laravel.com

Features:

- MVC
- Authentication
- APIs
- Queues
- Jobs

---

## Symfony

Website:

https://symfony.com

Used in enterprise applications.

---

## CodeIgniter

Website:

https://codeigniter.com

Lightweight framework.

---

# Tools Required

---

# 1. PHP

Download:

https://www.php.net/downloads.php

---

# 2. Composer

Download:

https://getcomposer.org/

Composer is PHP's package manager.

Equivalent of:

- npm for JavaScript
- pip for Python

---

# 3. Visual Studio Code

Download:

https://code.visualstudio.com/

Recommended Extensions:

### PHP Intelephense

https://marketplace.visualstudio.com/items?itemName=bmewburn.vscode-intelephense-client

---

### Error Lens

https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens

---

### Material Icon Theme

https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme

---

### GitLens

https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens

---

# PocketMine PHP Binaries

Official Repository:

https://github.com/pmmp/PHP-Binaries

---

# PocketMine-MP

Official Website:

https://pmmp.io/

Documentation:

https://doc.pmmp.io/

GitHub:

https://github.com/pmmp/PocketMine-MP

---

# Recommended Setup

## Windows

```text
C:\
 ├── php
 ├── projects
 ├── pocketmine
```

---

# First PHP Program

Create:

```text
hello.php
```

Code:

```php
<?php

declare(strict_types=1);

echo "Hello ZyroNetwork!";
```

Run:

```bash
php hello.php
```

Output:

```text
Hello ZyroNetwork!
```

---

# Learning Roadmap

```text
Introduction
↓
Installation
↓
Syntax
↓
Variables
↓
Data Types
↓
Operators
↓
Conditions
↓
Loops
↓
Functions
↓
Arrays
↓
Strings
↓
Object Oriented Programming
↓
Namespaces
↓
Composer
↓
Advanced PHP
↓
Databases
↓
Security
↓
PocketMine-MP Development
```

---

# Career Opportunities

Learning PHP can help you become:

- Backend Developer
- Full Stack Developer
- API Developer
- Game Server Developer
- PocketMine Developer
- DevOps Engineer
- Software Engineer

---

# Quiz

### Q1.

Who created PHP?

<details>
<summary>Answer</summary>

Rasmus Lerdorf

</details>

---

### Q2.

What does PHP stand for?

<details>
<summary>Answer</summary>

PHP: Hypertext Preprocessor

</details>

---

### Q3.

Which package manager does PHP use?

<details>
<summary>Answer</summary>

Composer

</details>

---

# Exercises

### Exercise 1

Install PHP.

### Exercise 2

Install Composer.

### Exercise 3

Run:

```php
echo "Hello World";
```

### Exercise 4

Install PocketMine PHP binaries.

---

# Next Chapter

➡️ Installation and Environment Setup
