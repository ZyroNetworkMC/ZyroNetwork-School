---
title: Abstraction
sidebar_position: 11
description: Learn Abstraction in PHP from beginner to advanced level with real world examples, diagrams, PocketMine architecture and enterprise practices.
---

# Abstraction

## Chapter Overview

In this chapter you will learn:

- What abstraction means
- Why abstraction exists
- Real life examples
- How abstraction works internally
- Difference between abstraction and encapsulation
- Abstract thinking in software engineering
- Abstract classes
- Interfaces
- Framework architecture
- PocketMine examples
- Enterprise examples
- Design principles using abstraction
- Best practices
- Projects and exercises

---

# What is Abstraction?

Abstraction means:

```text
Hiding unnecessary implementation details
and exposing only essential functionality.
```

Or simply:

```text
Focus on WHAT something does,
not HOW it does it.
```

---

## Real Life Example

When driving a car:

You use:

- Steering Wheel
- Brake
- Accelerator
- Gear

You do NOT need to know:

- Engine combustion
- Fuel injection timings
- ECU calculations
- Gear synchronization
- Piston movement
- Sensor communication

All of that complexity is hidden.

This is abstraction.

---

# Another Example

Think about a television.

You press:

```text
Power Button
```

You do not care:

```text
Voltage calculations
Motherboard signals
Display drivers
Hardware initialization
```

You simply care:

```text
TV Turns On
```

This is abstraction.

---

# Programming Example

Without abstraction:

```php
$socket = socket_create(...);

$packet = PacketEncoder::encode(...);

$compressed =
Compression::compress(
    $packet
);

socket_write(
    $socket,
    $compressed
);
```

Very complicated.

---

With abstraction:

```php
$player->sendMessage(
    "Hello"
);
```

Much simpler.

---

# Definition

Abstraction helps developers:

✅ Reduce complexity

✅ Write cleaner code

✅ Reuse code

✅ Understand systems easier

✅ Hide internals

---

# Why Abstraction Exists

Imagine if every developer had to understand:

- CPU Instructions
- Networking Packets
- Operating System APIs
- Memory Management

before sending a chat message.

Software development would become impossible.

Abstraction allows developers to build:

```text
Complex Systems
using
Simple Building Blocks
```

---

# Layers of Abstraction

Modern software consists of multiple layers.

Example:

```text
Application
     ↓
Framework
     ↓
Libraries
     ↓
Operating System
     ↓
Kernel
     ↓
Hardware
```

Every layer hides complexity.

---

# Example

When using:

```php
echo "Hello";
```

PHP internally performs:

```text
Output Buffer
Encoding
Stream Handling
Operating System Calls
Terminal Drivers
```

You never see these details.

This is abstraction.

---

# Visualization

```text
You
 ↓
sendMessage()
 ↓
Packet Creation
 ↓
Compression
 ↓
Encryption
 ↓
Socket Sending
 ↓
Client Receives Message
```

Only one line of code is visible.

---

# Real PocketMine Example

You write:

```php
$player->teleport(
    $position
);
```

Internally PocketMine does:

```text
Chunk Validation
Event Calling
Movement Validation
Position Update
Network Packet Sending
Client Synchronization
```

You never see this.

This is abstraction.

---

# Example

```php
$player->kick(
    "Cheating"
);
```

Internally:

```text
Disconnect Packet
Session Closing
Player Saving
Event Dispatching
Plugin Handling
```

All hidden.

---

# Database Example

You write:

```php
$user = User::find(1);
```

Internally:

```text
Connection Pool
SQL Generation
Prepared Statements
Result Parsing
Object Creation
Caching
```

All hidden.

---

# The Main Goal

Abstraction answers:

```text
What can I do?
```

Instead of:

```text
How is it implemented?
```

---

# High Level vs Low Level

---

## High Level

```php
$mail->send();
```

Simple.

---

## Low Level

```php
Socket
SMTP Packets
Authentication
Headers
Encoding
Compression
```

Complex.

---

# Example

Without abstraction:

```php
Packet::create();
Packet::compress();
Packet::send();
```

With abstraction:

```php
$player->sendMessage();
```

---

# Abstraction in Frameworks

Frameworks exist because of abstraction.

Examples:

- Laravel
- Symfony
- PocketMine
- Nukkit
- DragonFly

All hide complexity.

---

# Example

Laravel:

```php
User::create([
    "name" => "Aayan"
]);
```

Internally:

```text
SQL Generation
Database Connection
Validation
Mass Assignment Protection
Events
```

Hidden.

---

# Abstraction Everywhere

Examples:

```text
Browser APIs
Operating Systems
Databases
Game Engines
Networking
Cloud Services
```

Everything uses abstraction.

---

# Difference Between Abstraction and Encapsulation

Many beginners confuse these.

---

## Abstraction

Hides complexity.

---

## Encapsulation

Hides data.

---

# Example

---

### Abstraction

```php
$car->start();
```

You don't know HOW.

---

### Encapsulation

```php
private Engine $engine;
```

You cannot access it directly.

---

# Comparison Table

| Feature | Abstraction | Encapsulation |
|----------|-------------|----------------|
| Hides Complexity | ✅ | ❌ |
| Hides Data | ❌ | ✅ |
| Focus | What | Protection |
| Uses | Interfaces, Abstract Classes | Access Modifiers |

---

# Abstraction in OOP

PHP mainly provides abstraction through:

```text
1. Abstract Classes
2. Interfaces
```

---

# Abstract Thinking

Consider:

```text
Animal
```

What is an animal?

Animals:

- Eat
- Sleep
- Move

This becomes an abstraction.

---

Dog:

```text
Dog IS AN Animal
```

Cat:

```text
Cat IS AN Animal
```

Bird:

```text
Bird IS AN Animal
```

---

# Abstract Class Example

```php
abstract class Animal {

    abstract public function sound();

}
```

---

Children:

```php
class Dog
extends Animal {

    public function sound() {

        echo "Bark";

    }

}
```

---

```php
class Cat
extends Animal {

    public function sound() {

        echo "Meow";

    }

}
```

---

# Why?

Because every animal has:

```text
sound()
```

But implementation differs.

---

# Interface Example

```php
interface Logger {

    public function log(
        string $message
    );

}
```

Implementations:

```text
File Logger
Discord Logger
Database Logger
```

---

# Real World Architecture

```text
Application
      ↓
Service
      ↓
Repository
      ↓
Database
```

Every layer abstracts another layer.

---

# PocketMine Architecture Example

Plugin developer writes:

```php
$this->getServer()
```

Internally:

```text
PluginBase
 ↓
Server Singleton
 ↓
WorldManager
 ↓
Network
 ↓
Scheduler
```

Hidden complexity.

---

# Another Example

You use:

```php
$world->getPlayers();
```

Internally:

```text
Chunk Manager
Entity Manager
Session Manager
Collections
```

All hidden.

---

# Benefits of Abstraction

---

# 1. Simpler Code

Instead of:

```php
200 lines
```

You write:

```php
$player->kick();
```

---

# 2. Better Readability

Example:

```php
$order->pay();
```

Much easier.

---

# 3. Easier Maintenance

Internal implementation can change.

Outside code remains same.

---

# Example

Today:

```php
File Database
```

Tomorrow:

```php
MySQL
```

Outside code:

```php
$user->save();
```

never changes.

---

# 4. Scalability

Large systems depend heavily on abstraction.

Without it:

Projects become impossible.

---

# Enterprise Example

Payment System:

```text
PaymentGateway
      ↓
PayPal
Stripe
Crypto
UPI
```

Everything follows abstraction.

---

# Software Layers Example

```text
Controller
     ↓
Service
     ↓
Repository
     ↓
Database
```

Every layer abstracts another.

---

# PocketMine Example

```text
Plugin
  ↓
API
  ↓
Server
  ↓
Network
```

---

# Bad Example

```php
Socket::write();
Compression::compress();
```

Plugin developers should never do this.

---

# Good Example

```php
$player->sendMessage();
```

---

# Common Beginner Mistakes

---

## Confusing Encapsulation and Abstraction

Remember:

```text
Abstraction = Hiding Complexity
Encapsulation = Hiding Data
```

---

## Creating Too Many Layers

Bad:

```text
Service
ServiceManager
ServiceController
ServiceHandler
```

Overengineering.

---

## Exposing Internals

Bad:

```php
public Socket $socket;
```

---

# Best Practices

✅ Hide complexity.

✅ Expose simple APIs.

✅ Keep interfaces small.

✅ Use meaningful names.

✅ Do not leak implementation details.

---

# Real Framework Examples

---

## Laravel

```php
User::find();
```

---

## PocketMine

```php
$player->teleport();
```

---

## Symfony

```php
$mailer->send();
```

---

## DragonFly

```php
session.SendMessage();
```

All are abstractions.

---

# Mini Project

Create:

```text
Payment System
```

Classes:

```text
PaymentGateway
StripeGateway
PayPalGateway
CryptoGateway
```

Expose:

```php
pay()
```

Hide everything else.

---

# Exercises

---

## Exercise 1

Create:

```php
abstract class Vehicle
```

Methods:

```php
start()
move()
stop()
```

---

## Exercise 2

Create:

```text
Animal
Dog
Cat
Bird
```

---

## Exercise 3

Create:

```text
Notifier
EmailNotifier
DiscordNotifier
SMSNotifier
```

---

# Interview Questions

---

### What is abstraction?

Hiding implementation details and exposing only required functionality.

---

### Why is abstraction important?

Because it reduces complexity.

---

### Which PHP features provide abstraction?

```text
Abstract Classes
Interfaces
```

---

### Difference between abstraction and encapsulation?

```text
Abstraction → Hides complexity

Encapsulation → Hides data
```

---

# Summary

Abstraction:

✅ Reduces complexity

✅ Makes systems easier

✅ Allows large architectures

✅ Enables frameworks

✅ Makes code maintainable

---

# References

https://www.php.net/manual/en/language.oop5.abstract.php

https://www.php.net/manual/en/language.oop5.interfaces.php

---

# Next Chapter

➡ Interfaces

➡ Abstract Classes

➡ Traits
