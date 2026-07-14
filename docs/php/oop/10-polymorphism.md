---
title: Polymorphism
sidebar_position: 10
description: Learn PHP Polymorphism in complete detail with method overriding, interfaces, inheritance and real-world PocketMine examples.
---

# Polymorphism

Polymorphism is one of the **Four Pillars of Object Oriented Programming**.

The word comes from Greek:

```text
Poly = Many
Morph = Forms
```

Meaning:

```text
One thing can exist in many forms.
```

---

# What is Polymorphism?

Polymorphism allows different classes to be treated as the same type.

Example:

```text
Player
Zombie
Cow
Skeleton
```

All are:

```text
Entity
```

This allows us to write code like:

```php
function process(
    Entity $entity
) {

}
```

The function can now accept:

- Player
- Zombie
- Cow
- ItemEntity

All without rewriting code.

---

# Why Polymorphism Exists

Without polymorphism:

```php
processPlayer();

processZombie();

processCow();

processSkeleton();
```

Huge duplication.

---

With polymorphism:

```php
process(
    Entity $entity
);
```

Everything becomes simpler.

---

# Real Life Example

Think about:

```text
Remote Control
```

Pressing:

```text
Power Button
```

works for:

- TV
- AC
- Fan
- Speaker

Same action.

Different behavior.

This is polymorphism.

---

# First Example

Parent:

```php
class Animal {

    public function sound() {

        echo "Unknown";

    }

}
```

---

Child:

```php
class Dog
extends Animal {

    public function sound() {

        echo "Bark";

    }

}
```

---

Another Child:

```php
class Cat
extends Animal {

    public function sound() {

        echo "Meow";

    }

}
```

---

Usage:

```php
$animals = [

    new Dog(),
    new Cat()

];

foreach ($animals as $animal) {

    $animal->sound();

}
```

Output:

```text
Bark
Meow
```

---

# Same Method

```php
sound()
```

Different behavior.

This is:

```text
Runtime Polymorphism
```

---

# Visualization

```text
Animal
│
├── Dog → Bark
├── Cat → Meow
└── Bird → Tweet
```

---

# Method Overriding

Polymorphism usually works through:

```text
Method Overriding
```

Parent:

```php
class Animal {

    public function move() {

        echo "Moving";

    }

}
```

---

Child:

```php
class Bird
extends Animal {

    public function move() {

        echo "Flying";

    }

}
```

---

Child:

```php
class Fish
extends Animal {

    public function move() {

        echo "Swimming";

    }

}
```

---

# Parent References

Example:

```php
$animal =
new Dog();
```

This is valid.

Why?

Because:

```text
Dog IS AN Animal
```

---

# Visualization

```text
Animal
   ↑
   │
 Dog
```

---

# Dynamic Dispatch

Example:

```php
$animal =
new Dog();

$animal->sound();
```

Output:

```text
Bark
```

PHP automatically chooses:

```text
Dog::sound()
```

instead of:

```text
Animal::sound()
```

This is called:

```text
Dynamic Dispatch
```

---

# Polymorphic Functions

Example:

```php
function makeSound(
    Animal $animal
) {

    $animal->sound();

}
```

Usage:

```php
makeSound(
    new Dog()
);

makeSound(
    new Cat()
);
```

Output:

```text
Bark
Meow
```

---

# Why This is Powerful

One function.

Unlimited object types.

---

# PocketMine Example

Simplified:

```php
function attack(
    Entity $entity
) {

}
```

Can receive:

```text
Player
Zombie
Cow
Villager
```

---

# Entity Hierarchy

```text
Entity
│
├── Human
│      └── Player
│
├── Monster
│      ├── Zombie
│      └── Skeleton
│
└── Animal
```

---

# Real Example

```php
foreach (
    $world->getEntities()
    as $entity
) {

    $entity->setNameTag(
        "Hello"
    );

}
```

Every entity receives same method call.

Polymorphism.

---

# `instanceof`

Sometimes behavior differs.

Example:

```php
if (
    $entity instanceof Player
) {

    $entity->sendMessage(
        "Hello"
    );

}
```

---

Another:

```php
if (
    $entity instanceof Zombie
) {

    $entity->setHealth(
        100
    );

}
```

---

# Visualization

```text
Entity
     ↓
instanceof
     ↓
Player ?
Zombie ?
Cow ?
```

---

# Interfaces and Polymorphism

Polymorphism becomes even more powerful with interfaces.

Example:

```php
interface Logger {

    public function log(
        string $message
    );

}
```

---

Implementations:

```php
class FileLogger
implements Logger {

}
```

```php
class DiscordLogger
implements Logger {

}
```

---

Usage:

```php
function write(
    Logger $logger
) {

}
```

Can accept:

```text
FileLogger
DiscordLogger
DatabaseLogger
```

---

# Real World Example

Payment System:

```text
PaymentMethod
│
├── PayPal
├── Stripe
└── Crypto
```

Function:

```php
pay(
    PaymentMethod $method
);
```

Unlimited payment systems.

---

# Another Example

Notification System:

```text
Notifier
│
├── EmailNotifier
├── DiscordNotifier
└── SmsNotifier
```

---

# Enterprise Example

```php
interface Cache {

}
```

Implementations:

```text
Redis
Memcached
FileCache
```

Everything works together.

---

# Polymorphism in Laravel

Laravel internally uses:

```text
Cache Driver
Queue Driver
Mail Driver
Database Driver
```

All are polymorphic.

---

# Real PocketMine Examples

---

## Commands

```php
Command
│
├── BanCommand
├── KickCommand
└── WarpCommand
```

---

## Events

```text
Event
│
├── PlayerJoinEvent
├── BlockBreakEvent
└── EntityDamageEvent
```

---

## Entities

```text
Entity
│
├── Player
├── Zombie
└── Cow
```

---

# Benefits

---

# 1. Less Duplication

One function.

Many object types.

---

# 2. Better Extensibility

Add new classes without modifying old code.

---

# 3. Cleaner Architecture

Projects remain organized.

---

# 4. Easier Maintenance

No giant if statements.

---

# Example

Bad:

```php
if ($type === "dog") {

}

if ($type === "cat") {

}
```

Good:

```php
$animal->sound();
```

---

# Open Closed Principle

Polymorphism helps follow:

```text
Open for Extension
Closed for Modification
```

Add new classes.

No existing code changes.

---

# Common Beginner Mistakes

---

## Giant If Statements

Bad:

```php
if ($animal === "dog")
```

Use polymorphism.

---

## Excessive `instanceof`

Sometimes acceptable.

But too much means bad design.

---

## Breaking Inheritance

Methods should maintain behavior contracts.

---

# Best Practices

✅ Prefer interfaces.

✅ Prefer polymorphism over condition chains.

✅ Use inheritance carefully.

✅ Keep common behavior in parent classes.

---

# Exercises

---

## Exercise 1

Create:

```text
Animal
│
├── Dog
├── Cat
└── Bird
```

Each should override:

```php
sound()
```

---

## Exercise 2

Create:

```text
Shape
│
├── Circle
├── Square
└── Rectangle
```

Method:

```php
area()
```

---

## Exercise 3

Create:

```text
PaymentMethod
│
├── PayPal
├── Crypto
└── Stripe
```

Method:

```php
pay()
```

---

# Mini Project

Create:

```text
Entity
│
├── Player
├── Zombie
├── Skeleton
└── Cow
```

Method:

```php
attack()
```

Each entity behaves differently.

---

# Quiz

### What does polymorphism mean?

<details>
<summary>Answer</summary>

One thing existing in many forms.

</details>

---

### Which concept makes polymorphism possible?

<details>
<summary>Answer</summary>

Method overriding.

</details>

---

### Can parent references store child objects?

<details>
<summary>Answer</summary>

Yes.

</details>

---

### Which operator checks object type?

<details>
<summary>Answer</summary>

```php
instanceof
```

</details>

---

# Summary

Polymorphism allows:

✅ One interface

✅ Multiple implementations

✅ Cleaner code

✅ Extensible systems

✅ Enterprise architecture

---

# Real PocketMine Architecture

```text
Entity
│
├── Player
├── Zombie
├── ItemEntity
└── Animal
```

Example:

```php
function process(
    Entity $entity
) {

    $entity->setNameTag(
        "Processed"
    );

}
```

Works for every entity type.

This is polymorphism.

---

# References

https://www.php.net/manual/en/language.oop5.polymorphism.php

---

# Next Chapter

➡ Abstraction

➡ Interfaces

➡ Abstract Classes
