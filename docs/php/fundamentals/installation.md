---
title: PHP Installation
sidebar_position: 2
sidebar_label: "2. PHP Installation"
---

# Installing PHP

Before learning PHP, we need to install PHP.

---

# Requirements

Recommended:

- Windows 10/11
- Linux Ubuntu 22+
- 4GB RAM
- VSCode

---

# Method 1: Official PHP

Download:

https://www.php.net/downloads.php

---

# Method 2 (Recommended for PMMP)

PocketMine PHP Binaries:

https://github.com/pmmp/PHP-Binaries

---

# Windows Installation

## Step 1

Download PHP ZIP.

Example:

```text
php-8.3.x-Win32-vs16-x64.zip
```

---

## Step 2

Extract:

```text
C:\php
```

---

## Step 3

Add to PATH:

```text
C:\php
```

---

## Step 4

Verify:

```bash
php -v
```

Output:

```text
PHP 8.3.x
```

---

# Linux Installation

Ubuntu:

```bash
sudo apt update
sudo apt install php
```

Install extensions:

```bash
sudo apt install php-cli
sudo apt install php-mbstring
sudo apt install php-curl
sudo apt install php-xml
sudo apt install php-yaml
```

---

# Verify

```bash
php -v
```

---

# Install Composer

Download:

https://getcomposer.org/

Check:

```bash
composer --version
```

---

# Install VSCode

Download:

https://code.visualstudio.com/
