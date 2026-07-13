---
title: Composer
sidebar_position: 21
sidebar_label: "21. Composer"
---

# Composer

Composer is PHP's package manager.

Equivalent to:

| Language | Manager |
|-----------|----------|
| NodeJS | npm |
| Python | pip |
| Java | Maven |
| PHP | Composer |

---

# Installation

Windows:

https://getcomposer.org/

---

# Check Version

```bash
composer --version
```

---

# Initialize Project

```bash
composer init
```

---

# Install Package

```bash
composer require monolog/monolog
```

---

# composer.json

```json
{
    "require": {
        "monolog/monolog": "^3.0"
    }
}
```

---

# Install Dependencies

```bash
composer install
```

---

# Update

```bash
composer update
```

---

# Autoloading

```json
{
    "autoload": {

        "psr-4": {

            "zyro\\": "src/"
        }

    }
}
```

---

# Generate Autoload

```bash
composer dump-autoload
```

---

# Using Composer

```php
require
"vendor/autoload.php";
```

---

# Why Composer Matters

Used in:

✅ Laravel

✅ Symfony

✅ APIs

✅ Discord Bots

✅ PocketMine Libraries

---

# Popular Packages

- Monolog
- Guzzle
- Symfony Console
- Ramsey UUID
- ReactPHP

---

# Next Chapter

➡ PHP Object Oriented Programming (OOP)
