---
title: PHP Conditions
sidebar_label: "10. Conditions"
sidebar_position: 10
description: Learn conditional statements in PHP including if, else, elseif, switch and match expressions.
---

# PHP Conditions

Conditions allow programs to make decisions.

Without conditions, every program would execute exactly the same way every time.

Conditions are used everywhere:

- Login Systems
- Permissions
- APIs
- PocketMine Plugins
- Authentication
- Web Panels

---

# Boolean Values

A condition always evaluates into:

```php
true
false
```

---

# if Statement

```php
$age = 18;

if ($age >= 18) {
    echo "Adult";
}
```

Output:

```text
Adult
```

---

# if else

```php
$online = false;

if ($online) {
    echo "Player Online";
} else {
    echo "Player Offline";
}
```

---

# elseif

```php
$rank = "vip";

if ($rank === "owner") {

    echo "Owner";

} elseif ($rank === "admin") {

    echo "Admin";

} elseif ($rank === "vip") {

    echo "VIP";

} else {

    echo "Player";

}
```

---

# Comparison Operators

| Operator | Meaning |
|----------|----------|
| `==` | Equal |
| `===` | Identical |
| `!=` | Not Equal |
| `!==` | Not Identical |
| `>` | Greater Than |
| `<` | Less Than |
| `>=` | Greater Than Equal |
| `<=` | Less Than Equal |

---

# Examples

## Equal

```php
$a = 5;
$b = 5;

if ($a == $b) {
    echo "Equal";
}
```

---

## Identical

```php
$a = 5;
$b = "5";

var_dump($a == $b);
var_dump($a === $b);
```

Output:

```text
true
false
```

---

## Greater Than

```php
if ($money > 1000) {
    echo "Rich";
}
```

---

## Less Than

```php
if ($health < 10) {
    echo "Low Health";
}
```

---

## Greater Than Equal

```php
if ($level >= 50) {
    echo "Unlocked";
}
```

---

## Less Than Equal

```php
if ($health <= 0) {
    echo "Dead";
}
```

---

# Logical Operators

| Operator | Meaning |
|----------|----------|
| `&&` | AND |
| `||` | OR |
| `!` | NOT |

---

# AND Operator

```php
if (
    $isOnline &&
    $isAdmin
) {

    echo "Staff Member";

}
```

---

# OR Operator

```php
if (
    $rank === "owner" ||
    $rank === "admin"
) {

    echo "Staff";

}
```

---

# NOT Operator

```php
if (
    !$player->isBanned()
) {

    echo "Allowed";

}
```

---

# Ternary Operator

```php
$status =
$online
? "Online"
: "Offline";
```

---

# Null Coalescing Operator

```php
$name =
$_GET["name"] ?? "Guest";
```

---

# Switch Statement

```php
switch ($rank) {

    case "owner":
        echo "Owner";
        break;

    case "admin":
        echo "Admin";
        break;

    case "vip":
        echo "VIP";
        break;

    default:
        echo "Player";
}
```

---

# Match Expression

PHP 8+

```php
$prefix = match ($rank) {

    "owner" => "[Owner]",
    "admin" => "[Admin]",
    "vip" => "[VIP]",

    default => "[Player]"
};
```

---

# PocketMine Example

```php
if (
    $sender->hasPermission(
        "zyro.admin"
    )
) {

    $sender->sendMessage(
        "Access Granted"
    );

}
```

---

# Login Example

```php
if (
    $username === "admin" &&
    $password === "123"
) {

    echo "Login Success";

}
```

---

# Common Mistakes

## Wrong

```php
if ($rank = "admin")
```

This assigns a value.

---

## Correct

```php
if ($rank === "admin")
```

---

# Best Practices

✅ Prefer:

```php
===
!==
```

instead of:

```php
==
!=
```

---

✅ Use Match expressions in PHP 8+

---

✅ Avoid deeply nested conditions.

---

# Exercises

1. Check if age is adult.
2. Create rank permission system.
3. Build login validator.
4. Convert switch to match.

---

# Quiz

<details>
<summary>Which operator checks identical values?</summary>

```text
===
```

</details>

---

<details>
<summary>Which operator means OR?</summary>

```text
||
```

</details>

---

# References

https://www.php.net/manual/en/control-structures.if.php

https://www.php.net/manual/en/control-structures.switch.php

https://www.php.net/manual/en/control-structures.match.php

---

# Next Chapter

➡ PHP Loops
