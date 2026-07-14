---
title: Final Keyword
sidebar_position: 16
description: Learn PHP Final Classes and Final Methods in complete detail with real-world examples, framework architecture and PocketMine usage.
---

# Final Keyword

## Chapter Overview

In this chapter you will learn:

- What `final` means
- Final classes
- Final methods
- Why frameworks use final
- API protection
- Immutable architecture
- Enterprise examples
- PocketMine examples
- Best practices
- Common mistakes
- Exercises and projects

---

# Introduction

PHP provides a keyword called:

```php
final
```

It is used to prevent inheritance or overriding.

---

# Definition

Final means:

```text
This cannot be changed anymore.
```

or

```text
This class/method is locked.
```

---

# Why Does Final Exist?

Imagine your framework contains:

```php
class PaymentGateway {

}
```

A developer extends it and accidentally breaks security.

Result:

```text
Entire framework becomes unstable.
```

Final prevents this.

---

# Real Life Example

Think of:

```text
ATM PIN Verification System
```

Should developers override:

```php
verifyPin()
```

?

No.

That would be dangerous.

---

# Syntax

---

# Final Class

```php
final class Database {

}
```

---

Attempting inheritance:

```php
class MysqlDatabase
extends Database {

}
```

Produces:

```text
Fatal Error:
Class MysqlDatabase may not inherit from final class Database
```

---

# Visualization

```text
Database (FINAL)
       ❌
Cannot Extend
```

---

# Why Use Final Classes?

Because some classes:

- Should never change
- Must remain secure
- Depend heavily on internal implementation

---

# Example

```php
final class UUID {

}
```

UUID generation should remain predictable.

---

# Final Methods

Methods can also be final.

---

Example:

```php
class User {

    final public function getId() {

        return $this->id;

    }

}
```

---

Attempt:

```php
class Admin
extends User {

    public function getId() {

    }

}
```

Output:

```text
Fatal Error
Cannot override final method.
```

---

# Visualization

```text
User
 │
 └── getId() FINAL
```

Children cannot change it.

---

# Why Final Methods Exist

Some methods are critical.

Examples:

- Authentication
- Security
- Serialization
- Internal framework logic

---

# Example

```php
class Session {

    final public function destroy() {

        // secure cleanup

    }

}
```

Developers should never override it.

---

# Framework Example

Laravel internally protects some methods.

PocketMine also uses final APIs.

---

# PocketMine Examples

PocketMine uses `final` heavily.

---

## Example

```php
final class Server {

}
```

Why?

Because:

```text
There should only be ONE server implementation.
```

---

## Another Example

Packet classes are often final.

Why?

Because network packets must behave predictably.

---

# Example

```text
Packet
     ↓
Encoding
     ↓
Client
```

Changing behavior could break networking.

---

# Security Example

Imagine:

```php
class Auth {

    final public function verify() {

    }

}
```

Without final:

```php
class FakeAuth
extends Auth {

    public function verify() {

        return true;

    }

}
```

Security destroyed.

---

# Enterprise Example

Payment APIs often use:

```php
final
```

to prevent tampering.

---

# Example

```php
final class StripeSignature {

}
```

---

# Immutable Objects

Final is commonly used for immutable classes.

---

Example:

```php
final class Money {

    private int $amount;

}
```

Money objects should not change behavior.

---

# DTO Example

```php
final class UserDTO {

}
```

DTOs are commonly final.

---

# Why?

Because they only carry data.

No inheritance needed.

---

# Final and Performance

PHP 8 may optimize final classes better.

Because:

```text
No inheritance checks required.
```

Performance improvements are usually small but exist.

---

# Final Constants

PHP 8.1+

Example:

```php
class App {

    final public const VERSION =
        "1.0";

}
```

Cannot be overridden.

---

# Example

```php
class Child
extends App {

    public const VERSION =
        "2.0";

}
```

Error.

---

# Final vs Abstract

This confuses many beginners.

---

# Final

```text
Cannot Extend
```

---

# Abstract

```text
Must Extend
```

---

# Comparison

| Feature | Final | Abstract |
|----------|--------|-----------|
| Extendable | ❌ | ✅ |
| Instantiable | ✅ | ❌ |
| Purpose | Lock Class | Create Blueprint |

---

# Invalid Example

```php
final abstract class User {

}
```

This is impossible.

---

Because:

```text
Abstract → Must Extend

Final → Cannot Extend
```

Contradiction.

---

# Real Framework Example

---

## Symfony

Many internal classes are final.

Reason:

```text
Framework Stability
```

---

## Laravel

Uses final for internal objects.

---

## PocketMine

Uses final extensively.

Examples:

```text
Packets
Server APIs
Internal handlers
```

---

# Why Frameworks Love Final

Because frameworks need:

✅ Predictable behavior

✅ Stable APIs

✅ Security

✅ Easier maintenance

---

# Open For Extension?

Sometimes final may violate:

```text
Open Closed Principle
```

Use carefully.

---

# Good Uses

✅ DTOs

✅ Value Objects

✅ Utilities

✅ Internal Framework Classes

✅ Security Systems

---

# Bad Uses

❌ Everything final.

❌ Business services final.

❌ Classes expected to be extended.

---

# Example

Bad:

```php
final class Animal {

}
```

Why?

Animals usually have children.

---

Good:

```php
abstract class Animal {

}
```

---

# Value Object Example

---

```php
final class Email {

    private string $email;

}
```

Email should behave consistently.

---

# Enum-like Objects

Final works well with:

```text
Status
Currency
UUID
Money
```

---

# API Protection Example

```php
class PluginBase {

    final public function getServer() {

    }

}
```

Why?

Framework wants:

```text
One predictable implementation.
```

---

# Method Call Flow

```text
Plugin
   ↓
getServer()
   ↓
Server Singleton
```

Changing it could break everything.

---

# Common Beginner Mistakes

---

# Making Everything Final

Bad.

Inheritance becomes impossible.

---

# Forgetting Security

Critical methods should often be final.

---

# Extending Internal Classes

Framework internals may intentionally be final.

---

# Best Practices

Use final when:

✅ You know inheritance should never happen.

✅ Security matters.

✅ Object represents immutable data.

✅ Framework stability matters.

---

Avoid final when:

❌ Extension is expected.

❌ Users need customization.

---

# Enterprise Architecture Examples

---

## Final DTO

```php
final class LoginDTO {

}
```

---

## Final Event

```php
final class UserLoginEvent {

}
```

---

## Final Value Object

```php
final class Money {

}
```

---

# PocketMine Architecture Examples

Examples of classes often remaining final:

```text
Packet Handlers
Type Converters
Network Utilities
Internal Objects
```

---

# Exercises

---

## Exercise 1

Create:

```php
final class UUID
```

---

## Exercise 2

Create:

```php
final class Config
```

---

## Exercise 3

Create:

```php
class User {

    final public function getId() {

    }

}
```

Try overriding it.

Observe the error.

---

# Mini Project

Create:

```text
Zyro Authentication System
```

Requirements:

```text
User
Admin
AuthManager
Token
```

Make:

```text
Token
JWT
UUID
```

final classes.

---

# Interview Questions

---

### What is a final class?

A class that cannot be inherited.

---

### What is a final method?

A method that cannot be overridden.

---

### Can a final class be abstract?

No.

---

### Why do frameworks use final?

To protect internal behavior and stability.

---

### When should you use final?

For immutable objects, security-sensitive code and framework internals.

---

# Summary

Final provides:

✅ Stability

✅ Security

✅ Predictability

✅ Immutable APIs

✅ Better Framework Design

But should be used carefully.

---

# References

https://www.php.net/manual/en/language.oop5.final.php

---

# Next Chapter

➡ Magic Methods

➡ Enums

➡ Namespaces

➡ Autoloading
