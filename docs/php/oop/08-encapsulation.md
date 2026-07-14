---
title: Encapsulation
sidebar_position: 8
description: Learn Encapsulation in PHP in complete detail with validation, getters, setters and real-world PocketMine examples.
---

# Encapsulation

Encapsulation is one of the **Four Pillars of OOP**.

The four pillars are:

1. Encapsulation
2. Inheritance
3. Polymorphism
4. Abstraction

Encapsulation is probably one of the most important concepts because it protects object data and prevents invalid states.

---

# What is Encapsulation?

Encapsulation means:

```text
Bundling data and methods together while hiding internal implementation details.
```

Or simply:

```text
Protect object data from direct modification.
```

---

# Real Life Example

Think of a car.

You accelerate using:

```text
Pedal
```

You do NOT directly modify:

```text
Engine RPM
Fuel Injection
Air Intake
```

Those internal details are hidden.

This is encapsulation.

---

# Bank Example

Imagine if everyone could directly modify bank balances.

Bad:

```php
$account->balance =
1000000000;
```

Anyone could become rich instantly.

Encapsulation prevents this.

---

# Without Encapsulation

```php
class Player {

    public int $money = 0;

}
```

Usage:

```php
$player->money =
-500000;
```

Invalid state.

---

Another example:

```php
$player->money =
999999999999999999;
```

Game economy breaks.

---

# Why Encapsulation Exists

To protect:

✅ Data Integrity

✅ Validation Rules

✅ Security

✅ Maintainability

---

# Proper Encapsulation

```php
class Player {

    private int $money = 0;

}
```

Now:

```php
$player->money
```

produces an error.

---

# Visualization

```text
Outside World
        ↓
Public Methods
        ↓
Private Data
```

---

# Getters and Setters

Encapsulation is usually implemented using:

- Getters
- Setters

---

# Getter

Returns data.

```php
public function getMoney()
: int {

    return $this->money;

}
```

---

Usage:

```php
echo
$player->getMoney();
```

---

# Setter

Modifies data.

```php
public function setMoney(
    int $money
): void {

    $this->money =
        $money;

}
```

---

Usage:

```php
$player->setMoney(
    5000
);
```

---

# Why Setters are Useful

Because validation can be added.

Example:

```php
public function setMoney(
    int $money
): void {

    if (
        $money < 0
    ) {
        return;
    }

    $this->money =
        $money;

}
```

Negative values are prevented.

---

# Validation Example

```php
class Player {

    private int $health = 20;

    public function setHealth(
        int $health
    ): void {

        if (
            $health < 0
        ) {
            $health = 0;
        }

        if (
            $health > 20
        ) {
            $health = 20;
        }

        $this->health =
            $health;

    }

}
```

---

# Benefits of Encapsulation

---

# 1. Data Protection

Nobody can directly modify internals.

---

# 2. Validation

Ensure valid data.

---

# 3. Easier Maintenance

Internal implementation can change.

External code remains unchanged.

---

# 4. Security

Sensitive information stays hidden.

---

# Example

Bad:

```php
public string $password;
```

Good:

```php
private string $password;
```

---

# Real World Example

User class:

```php
class User {

    private string $password;

}
```

Methods:

```php
setPassword()
verifyPassword()
```

Nobody should access raw password.

---

# Example

```php
class User {

    private string $password;

    public function setPassword(
        string $password
    ): void {

        $this->password =
            password_hash(
                $password,
                PASSWORD_DEFAULT
            );

    }

}
```

This is encapsulation.

---

# Data Hiding

Encapsulation is sometimes called:

```text
Data Hiding
```

because internal state becomes hidden.

---

# Visualization

```text
Player
│
├── private money
├── private health
│
├── public getMoney()
├── public addMoney()
└── public damage()
```

---

# Read-Only Data

Sometimes we only want reading.

Example:

```php
private string $uuid;
```

Getter:

```php
public function getUuid()
: string {

    return $this->uuid;

}
```

No setter.

Now UUID cannot change.

---

# Immutable Objects

Another approach:

```php
readonly
```

Example:

```php
public readonly string $uuid;
```

---

# Encapsulation Example

```php
class BankAccount {

    private float $balance = 0;

    public function deposit(
        float $amount
    ): void {

        if (
            $amount <= 0
        ) {
            return;
        }

        $this->balance +=
            $amount;

    }

    public function withdraw(
        float $amount
    ): void {

        if (
            $amount >
            $this->balance
        ) {
            return;
        }

        $this->balance -=
            $amount;

    }

    public function getBalance()
    : float {

        return $this->balance;

    }

}
```

---

# PocketMine Example

Simplified Player:

```php
class Player {

    private int $health = 20;

    public function getHealth()
    : int {

        return $this->health;

    }

    public function setHealth(
        int $health
    ): void {

        if (
            $health < 0
        ) {

            $health = 0;

        }

        $this->health =
            $health;

    }

}
```

---

# Why Not Public?

Bad:

```php
$player->health =
-9999;
```

Could crash plugins.

---

# Encapsulation in APIs

API Response:

```php
$user->getName();
```

You don't know where name comes from:

- Database
- Cache
- File
- Redis

Implementation remains hidden.

---

# Internal Implementation Can Change

Today:

```php
return $this->money;
```

Tomorrow:

```php
return
$this->wallet
    ->getBalance();
```

Outside code remains same.

This is extremely powerful.

---

# Encapsulation and Dependency Injection

```php
private Database $database;
```

Expose only required methods.

Never expose database connection publicly.

---

# Enterprise Example

```php
UserService
      ↓
Repository
      ↓
Database
```

Everything remains encapsulated.

---

# Real PocketMine Architecture

```text
Player
│
├── private NetworkSession
├── private Inventory
├── private Effects
├── private Metadata
│
├── public sendMessage()
├── public teleport()
└── public kick()
```

Internals remain hidden.

---

# Common Beginner Mistakes

---

## Making Everything Public

Bad:

```php
public int $money;
```

---

## Creating Useless Getters

Bad:

```php
getMoney()
setMoney()
```

without validation.

---

## Exposing Sensitive Data

Bad:

```php
public string $password;
```

---

## Returning Mutable Objects

Example:

```php
return $this->inventory;
```

External code may modify it unexpectedly.

---

# Best Practices

✅ Keep properties private.

✅ Expose only required methods.

✅ Validate all data.

✅ Hide implementation details.

✅ Protect sensitive information.

---

# Rule of Thumb

```text
Private by Default
```

Only expose what is necessary.

---

# Exercises

---

## Exercise 1

Create:

```php
class Player {

    private int $money = 0;

}
```

Add:

```text
addMoney()
removeMoney()
getMoney()
```

---

## Exercise 2

Create:

```php
BankAccount
```

Prevent negative balances.

---

## Exercise 3

Create password setter using:

```php
password_hash()
```

---

# Mini Project

Create:

```php
PlayerProfile
```

Properties:

```text
uuid
name
rank
coins
kills
deaths
```

Use proper encapsulation.

---

# Quiz

### What is Encapsulation?

<details>
<summary>Answer</summary>

Hiding internal implementation and protecting object data.

</details>

---

### Which visibility is commonly used?

<details>
<summary>Answer</summary>

```php
private
```

</details>

---

### Why are setters useful?

<details>
<summary>Answer</summary>

They allow validation.

</details>

---

### Why should passwords never be public?

<details>
<summary>Answer</summary>

Sensitive information must remain hidden.

</details>

---

# Summary

Encapsulation provides:

✅ Security

✅ Validation

✅ Maintainability

✅ Better Architecture

✅ Data Integrity

---

# References

https://www.php.net/manual/en/language.oop5.visibility.php

https://www.php.net/manual/en/language.oop5.properties.php

---

# Next Chapter

➡ Inheritance

➡ Polymorphism

➡ Abstraction
