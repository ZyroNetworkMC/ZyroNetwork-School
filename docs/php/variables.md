---
title: PHP Variables
sidebar_position: 5
---

# PHP Variables

Variables store information.

---

# Syntax

```php
$name = "Aayan";
```

---

# Rules

1. Must start with `$`
2. Cannot start with number.
3. Case-sensitive.

---

# Valid

```php
$playerName
$serverName
$pluginVersion
```

---

# Invalid

```php
$1name
$player-name
```

---

# Data Storage

```php
$name = "Steve";
$health = 20;
```

---

# Dynamic Variables

```php
$var = "name";

$$var = "Aayan";

echo $name;
```

---

# Variable Variables

Advanced feature allowing variables to contain variable names.

---

# Scope Example

```php
$name = "Aayan";

function test() {

}
```

---

# PocketMine Example

```php
$onlinePlayers =
count(
    $this->getServer()
        ->getOnlinePlayers()
);
```

---

# Best Practices

Use:

```php
$playerHealth
$serverVersion
```

Avoid:

```php
$a
$b
$x
```

---

# Exercise

Create:

```php
$name
$age
$server
$onlinePlayers
```
