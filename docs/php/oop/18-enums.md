---
title: Enums
sidebar_position: 18
description: Complete guide to PHP Enums with real-world examples, PocketMine architecture and enterprise applications.
---

# Enums

## Chapter Overview

In this chapter you will learn:

- What Enums are
- Why Enums exist
- Problems Enums solve
- Unit Enums
- Backed Enums
- Enum Methods
- Enum Interfaces
- Enum Traits
- Enum Best Practices
- Enterprise Examples
- PocketMine Examples
- Projects and Exercises

---

# Introduction

Enums were introduced in:

```text
PHP 8.1
```

Enums are one of the biggest additions to PHP.

Before Enums existed, developers used:

```php
const ADMIN = "admin";
const MOD = "mod";
const PLAYER = "player";
```

This created many problems.

---

# What is an Enum?

Enum means:

```text
Enumeration
```

An enum is a fixed list of possible values.

---

## Example

Traffic Lights:

```text
RED
YELLOW
GREEN
```

Only these values exist.

You cannot create:

```text
PURPLE
BLUE
BLACK
```

because they are invalid.

This is exactly how enums work.

---

# Real Life Examples

Enums are everywhere.

Examples:

```text
Game Modes
Payment Status
User Roles
Packet Types
Permission Levels
Order Status
Server States
```

---

# Problem Without Enums

Example:

```php
$status = "compeleted";
```

Notice:

```text
compeleted
```

Typo.

PHP accepts it.

Your application breaks.

---

Another example:

```php
$rank = "admn";
```

Again invalid.

No error.

---

# Enums Solve This

```php
enum Rank {

    case ADMIN;
    case MODERATOR;
    case PLAYER;

}
```

Now:

```php
$rank = Rank::ADMIN;
```

No typos.

Much safer.

---

# Benefits of Enums

✅ Type Safety

✅ Better Readability

✅ Auto Completion

✅ Fewer Bugs

✅ Cleaner Architecture

---

# Basic Syntax

---

# Unit Enum

```php
enum Rank {

    case OWNER;
    case ADMIN;
    case PLAYER;

}
```

---

Usage:

```php
$rank =
    Rank::OWNER;
```

---

Comparison:

```php
if (
    $rank === Rank::OWNER
) {

}
```

---

# Visualization

```text
Rank
│
├── OWNER
├── ADMIN
└── PLAYER
```

---

# Unit Enums

Unit enums contain:

```text
Cases only.
```

No values.

---

Example:

```php
enum ServerState {

    case STARTING;
    case RUNNING;
    case STOPPING;
    case OFFLINE;

}
```

---

Usage:

```php
$state =
    ServerState::RUNNING;
```

---

# Why Useful?

Because:

```text
Only valid states can exist.
```

---

# Backed Enums

Backed enums store values.

---

Example:

```php
enum Rank : string {

    case OWNER = "owner";
    case ADMIN = "admin";
    case PLAYER = "player";

}
```

---

Usage:

```php
echo
    Rank::OWNER->value;
```

Output:

```text
owner
```

---

# Integer Backed Enum

```php
enum Permission : int {

    case PLAYER = 1;
    case VIP = 2;
    case ADMIN = 3;

}
```

---

Output:

```php
Permission::ADMIN->value
```

Result:

```text
3
```

---

# Why Backed Enums Exist

Useful for:

```text
Databases
Configurations
JSON APIs
Packets
Files
```

---

# Example Database

Database:

```text
rank
-----
admin
```

PHP:

```php
$rank =
    Rank::from(
        "admin"
    );
```

---

# Enum Methods

Enums can have methods.

---

Example:

```php
enum Rank {

    case OWNER;
    case ADMIN;
    case PLAYER;

    public function color()
    : string {

        return match($this) {

            self::OWNER =>
                "gold",

            self::ADMIN =>
                "red",

            self::PLAYER =>
                "gray"

        };

    }

}
```

---

Usage:

```php
echo
Rank::OWNER
    ->color();
```

Output:

```text
gold
```

---

# Match Expressions

Enums work perfectly with:

```php
match()
```

---

Example:

```php
$message =
match($rank) {

    Rank::OWNER =>
        "Owner",

    Rank::ADMIN =>
        "Admin",

    Rank::PLAYER =>
        "Player"

};
```

---

# Enum Static Methods

Example:

```php
enum Rank {

    case OWNER;
    case ADMIN;

    public static function default()
    : self {

        return self::PLAYER;

    }

}
```

---

# Enum Interfaces

Enums can implement interfaces.

---

Example:

```php
interface Colorable {

    public function color()
    : string;

}
```

---

Enum:

```php
enum Rank
implements Colorable {

    case OWNER;
    case ADMIN;

    public function color()
    : string {

        return "red";

    }

}
```

---

# Enum Traits

Enums can use traits.

---

Example:

```php
trait LabelTrait {

    public function label()
    : string {

        return ucfirst(
            $this->name
        );

    }

}
```

---

Usage:

```php
enum Rank {

    use LabelTrait;

    case OWNER;
    case ADMIN;

}
```

---

# Enum Properties?

Enums CANNOT contain properties.

Invalid:

```php
enum Rank {

    public string $name;

}
```

Error.

---

# Why?

Enums are intended to be:

```text
Immutable.
```

---

# Enum Methods Available

PHP automatically provides:

---

## name

```php
Rank::OWNER->name
```

Output:

```text
OWNER
```

---

## value

For backed enums:

```php
Rank::OWNER->value
```

Output:

```text
owner
```

---

# from()

Converts value to enum.

---

Example:

```php
Rank::from(
    "owner"
);
```

---

# tryFrom()

Safer version.

---

Example:

```php
Rank::tryFrom(
    "invalid"
);
```

Output:

```php
null
```

instead of exception.

---

# Example

```php
$rank =
Rank::tryFrom(
    $databaseValue
);

if (
    $rank === null
) {

}
```

---

# cases()

Returns all enum cases.

---

Example:

```php
Rank::cases();
```

Output:

```php
[
    Rank::OWNER,
    Rank::ADMIN,
    Rank::PLAYER
]
```

---

# Usage

Creating dropdown menus.

---

Example:

```php
foreach(
    Rank::cases()
    as $rank
)
{
    echo
        $rank->name;
}
```

---

# Enterprise Examples

---

# User Roles

```php
enum UserRole {

    case USER;
    case MODERATOR;
    case ADMIN;
    case OWNER;

}
```

---

# Order Status

```php
enum OrderStatus {

    case PENDING;
    case PAID;
    case CANCELLED;
    case REFUNDED;

}
```

---

# Payment Status

```php
enum PaymentStatus {

    case CREATED;
    case PROCESSING;
    case SUCCESS;
    case FAILED;

}
```

---

# API Example

```php
enum ApiStatus
: int {

    case SUCCESS = 200;
    case ERROR = 500;

}
```

---

# PocketMine Examples

Enums are extremely useful for:

---

# Server State

```php
enum ServerState {

    case STARTING;
    case RUNNING;
    case STOPPING;

}
```

---

# Player Rank

```php
enum Rank {

    case PLAYER;
    case VIP;
    case STAFF;
    case ADMIN;

}
```

---

# Game State

```php
enum GameState {

    case WAITING;
    case STARTING;
    case PLAYING;
    case ENDING;

}
```

---

# Arena State

```php
enum ArenaStatus {

    case CLOSED;
    case OPEN;
    case RESTARTING;

}
```

---

# Packet Types

```php
enum PacketType
: int {

    case LOGIN = 1;
    case CHAT = 2;
    case MOVE = 3;

}
```

---

# Why Enums are Amazing for Game Servers

Without enums:

```php
if (
    $state == "plaing"
)
```

Typo.

Bug.

---

With enums:

```php
if (
    $state ===
    GameState::PLAYING
)
```

Perfectly safe.

---

# Enums vs Constants

---

## Constants

```php
class Rank {

    public const ADMIN =
        "admin";

}
```

---

Problems:

❌ No type safety.

❌ Can pass invalid values.

---

## Enums

```php
Rank::ADMIN
```

Only valid values exist.

---

# Comparison

| Feature | Constants | Enums |
|----------|------------|--------|
| Type Safe | ❌ | ✅ |
| Methods | ❌ | ✅ |
| Cases() | ❌ | ✅ |
| Interfaces | ❌ | ✅ |
| Match Support | ❌ | ✅ |

---

# Common Beginner Mistakes

---

## Using Strings Everywhere

Bad:

```php
$rank = "admin";
```

---

## Using Integers

Bad:

```php
$status = 4;
```

Nobody knows what 4 means.

---

## Overusing Enums

Not everything needs enums.

---

# Good Uses

✅ States

✅ Statuses

✅ Roles

✅ Permissions

✅ Packet Types

---

# Bad Uses

❌ Usernames

❌ Dynamic values

❌ Database records

---

# Best Practices

✅ Use enums for finite values.

✅ Prefer backed enums for databases.

✅ Add helper methods.

✅ Use match expressions.

---

# Exercises

---

## Exercise 1

Create:

```php
enum Rank {

}
```

Cases:

```text
OWNER
ADMIN
PLAYER
```

---

## Exercise 2

Create:

```php
enum GameState {

}
```

---

## Exercise 3

Create:

```php
enum PermissionLevel
: int {

}
```

---

# Mini Project

Create:

```text
ZyroNetwork Rank System
```

Enums:

```text
Rank
GameState
ServerState
PermissionLevel
```

Methods:

```text
color()
prefix()
permissions()
```

---

# Interview Questions

---

### What is an Enum?

A fixed set of possible values.

---

### When were enums introduced?

```text
PHP 8.1
```

---

### Difference between Unit and Backed Enums?

Unit:

```text
No values.
```

Backed:

```text
Contain values.
```

---

### Can enums have methods?

Yes.

---

### Can enums have properties?

No.

---

### Why use enums?

For type safety and cleaner code.

---

# Summary

Enums provide:

✅ Type Safety

✅ Better Architecture

✅ Fewer Bugs

✅ Cleaner APIs

✅ Better IDE Support

✅ Excellent State Management

Modern PHP applications heavily rely on enums.

---

# References

https://www.php.net/manual/en/language.enumerations.php

---

# Next Chapter

➡ Namespaces

➡ Autoloading

➡ Dependency Injection

➡ SOLID Principles
