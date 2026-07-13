---
title: PHP Conditions
sidebar_label: Conditions
sidebar_position: 10
description: Learn conditional statements in PHP including if, else, elseif, switch and match expressions.
---

# PHP Conditions

Conditions allow programs to make decisions.

Without conditions, every program would execute exactly the same way every time.

Conditions are used everywhere:

- Login Systems
- Permissions
- PocketMine Commands
- Economy Plugins
- APIs
- AntiCheat Systems
- Authentication

---

# Real World Example

```php
if ($player->isOnline()) {
    echo "Player is online.";
}
```

The program first checks the condition.

If it is true, the code executes.

---

# Boolean Values

Conditions always evaluate into:

```text
true
false
```

Example:

```php
$online = true;
$money = 100 > 50;
```

---

# The if Statement

Syntax:

```php
if (condition) {

}
```

Example:

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

# Multiple Statements

```php
$health = 20;

if ($health > 0) {
    echo "Alive";
    echo "Player can move.";
}
```

---

# if + else

Syntax:

```php
if (condition) {

} else {

}
```

Example:

```php
$online = false;

if ($online) {
    echo "Player Online";
} else {
    echo "Player Offline";
}
```

Output:

```text
Player Offline
```

---

# elseif Statement

Used when there are multiple possible conditions.

Example:

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

Output:

```text
VIP
```

---

# Execution Flow

```text
Condition 1 ❌
      ↓
Condition 2 ❌
      ↓
Condition 3 ✅
      ↓
Execute Code
```

PHP stops checking once a condition becomes true.

---

# Nested Conditions

Conditions can be placed inside other conditions.

Example:

```php
if ($player->isOnline()) {

    if ($player->hasPermission("staff")) {

        echo "Staff Online";

    }

}
```

---

# Example: Login System

```php
$username = "admin";
$password = "123";

if (
    $username === "admin" &&
    $password === "123"
) {

    echo "Login Successful";

} else {

    echo "Invalid Credentials";

}
```

---

# Comparison Operators

Conditions often use operators.

| Operator | Meaning |
|----------|----------|
| == | Equal |
| === | Identical |
| != | Not Equal |
| !== | Not Identical |
| > | Greater Than |
| < | Less Than |
| >= | Greater Than Equal |
| <= | Less Than Equal |

---

# Logical Operators

---

## AND

```php
&&
```

Both conditions must be true.

Example:

```php
if (
    $isAdmin &&
    $isOnline
) {

}
```

---

## OR

```php
||
```

One condition must be true.

Example:

```php
if (
    $isOwner ||
    $isAdmin
) {

}
```

---

## NOT

```php
!
```

Reverses a condition.

Example:

```php
if (!$player->isBanned()) {

}
```

---

# Truthy and Falsy Values

PHP automatically converts values into booleans.

---

## False Values

```php
false
0
0.0
""
"0"
[]
null
```

---

## True Values

Everything else.

Example:

```php
if ("hello") {
    echo "True";
}
```

---

# Ternary Operator

Short version of if else.

Syntax:

```php
condition ? true : false
```

Example:

```php
$status =
$online
? "Online"
: "Offline";
```

Equivalent:

```php
if ($online) {
    $status = "Online";
} else {
    $status = "Offline";
}
```

---

# Nested Ternary

```php
$result =
$rank === "owner"
? "Owner"
: "Player";
```

Avoid deeply nested ternaries because they become difficult to read.

---

# Null Coalescing Operator

PHP 7+

Example:

```php
$name =
$_GET["name"] ?? "Guest";
```

Equivalent:

```php
if (isset($_GET["name"])) {
    $name = $_GET["name"];
} else {
    $name = "Guest";
}
```

---

# Switch Statement

Used when comparing multiple values.

Example:

```php
$rank = "admin";

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

# Why break?

Without break:

```php
case "admin":
    echo "Admin";

case "vip":
    echo "VIP";
```

Output:

```text
AdminVIP
```

---

# Match Expression (PHP 8+)

Modern replacement for switch.

Example:

```php
$prefix = match($rank) {

    "owner" => "[Owner]",
    "admin" => "[Admin]",
    "vip" => "[VIP]",

    default => "[Player]"
};
```

---

# Advantages of Match

✅ Cleaner syntax

✅ Strict comparison (`===`)

✅ Returns values directly

✅ No break statements

---

# Switch vs Match

| Feature | Switch | Match |
|----------|---------|--------|
| Uses === | ❌ | ✅ |
| Returns Value | ❌ | ✅ |
| Requires break | ✅ | ❌ |
| Safer | ❌ | ✅ |

---

# PocketMine Examples

---

## Permission Check

```php
if (
    $sender->hasPermission(
        "zyro.admin"
    )
) {

}
```

---

## Player Health

```php
if (
    $player->getHealth() <= 5
) {

    $player->sendMessage(
        "Low Health!"
    );

}
```

---

## Rank Prefix

```php
$prefix = match(
    $playerRank
) {

    "owner" => "§4Owner",
    "admin" => "§cAdmin",
    "vip" => "§aVIP",

    default => "§7Player"
};
```

---

# Authentication Example

```php
if (
    password_verify(
        $password,
        $hash
    )
) {

    echo "Logged In";

}
```

---

# Common Mistakes

---

## Mistake 1

❌

```php
if ($rank = "admin")
```

This assigns a value.

---

✅

```php
if ($rank === "admin")
```

---

## Mistake 2

❌

```php
if ($money)
```

May produce unexpected results.

---

Better:

```php
if ($money > 0)
```

---

## Mistake 3

❌

```php
if ($a == $b)
```

---

Prefer:

```php
if ($a === $b)
```

---

# Best Practices

✅ Prefer:

```php
===
!==
```

---

✅ Use Match in PHP 8+

---

✅ Avoid deeply nested conditions.

---

✅ Split large conditions into variables.

Example:

```php
$isStaff =
$player->hasPermission(
    "staff"
);

if ($isStaff) {

}
```

---

# Exercises

---

## Exercise 1

Create:

```php
$age = 18;
```

Print:

```text
Adult
```

if age is greater than or equal to 18.

---

## Exercise 2

Create:

```php
$isOnline = true;
```

Print:

```text
Online
```

---

## Exercise 3

Use:

```php
switch
```

to create rank prefixes.

---

## Exercise 4

Convert switch into:

```php
match
```

---

# Mini Project

Create a login system:

```php
$username
$password
```

Validate credentials.

---

# Challenge

Create a permission system:

```php
owner
admin
moderator
vip
player
```

Return the correct prefix.

---

# Quiz

### Which statement replaces multiple if conditions?

<details>
<summary>Answer</summary>

switch or match

</details>

---

### Which operator should be preferred?

<details>
<summary>Answer</summary>

===

</details>

---

### Does match use strict comparison?

<details>
<summary>Answer</summary>

Yes, it uses === internally.

</details>

---

# References

PHP Conditions:

https://www.php.net/manual/en/control-structures.if.php

Switch:

https://www.php.net/manual/en/control-structures.switch.php

Match:

https://www.php.net/manual/en/control-structures.match.php

---

# Next Chapter

➡ PHP Loops
