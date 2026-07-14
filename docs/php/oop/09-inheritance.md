---
title: Inheritance
sidebar_position: 9
description: Learn PHP Inheritance in complete detail with parent classes, child classes, method overriding and real-world PocketMine examples.
---

# Inheritance

Inheritance is one of the **Four Pillars of Object Oriented Programming**.

Inheritance allows one class to acquire properties and methods from another class.

Think of inheritance as:

```text
Parent → Child Relationship
```

---

# Real Life Example

```text
Animal
│
├── Dog
├── Cat
└── Bird
```

All animals have:

- Name
- Age
- Eat()
- Sleep()

Instead of rewriting this code multiple times, child classes inherit it.

---

# Why Inheritance Exists

Without inheritance:

```php
class Dog {

    public string $name;

    public function eat() {}

}
```

```php
class Cat {

    public string $name;

    public function eat() {}

}
```

Code duplication.

---

With inheritance:

```php
class Animal {

    public string $name;

    public function eat() {}

}
```

```php
class Dog extends Animal {

}
```

```php
class Cat extends Animal {

}
```

Cleaner and reusable.

---

# Basic Syntax

Parent:

```php
class Animal {

}
```

Child:

```php
class Dog
extends Animal {

}
```

Keyword:

```php
extends
```

means:

```text
Inherit everything from parent.
```

---

# Example

```php
class Animal {

    public function eat() {

        echo "Eating";

    }

}
```

---

Child:

```php
class Dog
extends Animal {

}
```

Usage:

```php
$dog =
new Dog();

$dog->eat();
```

Output:

```text
Eating
```

---

# Visualization

```text
Animal
│
├── name
├── age
└── eat()

        ↓

Dog
```

Dog automatically receives everything.

---

# Inheriting Properties

Parent:

```php
class Human {

    public string $name;

}
```

Child:

```php
class Player
extends Human {

}
```

Usage:

```php
$player =
new Player();

$player->name =
"Aayan";
```

Works perfectly.

---

# Inheriting Methods

```php
class Human {

    public function hello() {

        echo "Hello";

    }

}
```

---

Child:

```php
class Player
extends Human {

}
```

Usage:

```php
$player->hello();
```

---

# Parent and Child Relationship

```text
Parent
    ↓
Child
```

Child:

✅ Can access parent public members.

✅ Can access protected members.

❌ Cannot access private members.

---

# Access Modifier Rules

| Modifier | Parent | Child |
|-----------|---------|--------|
| public | ✅ | ✅ |
| protected | ✅ | ✅ |
| private | ✅ | ❌ |

---

# Example

```php
class Human {

    protected int $health = 20;

}
```

Child:

```php
class Player
extends Human {

    public function heal() {

        $this->health++;

    }

}
```

Valid.

---

# Private Example

```php
class Human {

    private int $health = 20;

}
```

Child:

```php
$this->health;
```

Error.

---

# Method Overriding

Children may replace parent methods.

---

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

Usage:

```php
$dog->sound();
```

Output:

```text
Bark
```

---

# Visualization

```text
Animal::sound()
        ↓
Dog::sound()
```

Child version overrides parent version.

---

# Parent Keyword

Sometimes child wants parent behavior too.

---

Example:

```php
class Animal {

    public function sound() {

        echo "Animal ";

    }

}
```

Child:

```php
class Dog
extends Animal {

    public function sound() {

        parent::sound();

        echo "Bark";

    }

}
```

Output:

```text
Animal Bark
```

---

# Constructor Inheritance

Constructors are NOT automatically inherited.

---

Parent:

```php
class Human {

    public function __construct() {

        echo "Human";

    }

}
```

---

Child:

```php
class Player
extends Human {

}
```

Constructor still works.

---

But if child defines its own constructor:

```php
class Player
extends Human {

    public function __construct() {

    }

}
```

Parent constructor will NOT execute automatically.

---

# Correct Way

```php
class Player
extends Human {

    public function __construct() {

        parent::__construct();

    }

}
```

---

# Constructor Chain

```text
Entity
   ↓
Human
   ↓
Player
```

Initialization flow:

```text
Entity Constructor
        ↓
Human Constructor
        ↓
Player Constructor
```

---

# Real PocketMine Example

PocketMine internally works like this:

```text
Entity
│
└── Human
      │
      └── Player
```

Player inherits everything from Human.

Human inherits everything from Entity.

---

# Entity Provides

```text
Position
Health
Movement
Effects
FireTicks
```

---

# Human Adds

```text
Inventory
Armor
Food
Experience
```

---

# Player Adds

```text
Network Session
Permissions
Commands
Chat
```

---

# Plugin Example

```text
PluginBase
       ↓
Main
```

Your plugin:

```php
class Main
extends PluginBase {

}
```

Automatically receives:

```php
$this->getServer()
$this->getLogger()
$this->saveDefaultConfig()
```

---

# Why Inheritance is Powerful

Without inheritance:

You would need to rewrite thousands of lines.

Inheritance provides:

✅ Reusability

✅ Cleaner Code

✅ Less Duplication

---

# Multi-Level Inheritance

Example:

```text
LivingThing
      ↓
Animal
      ↓
Dog
```

---

PHP supports unlimited levels.

---

# PHP Does NOT Support Multiple Inheritance

Invalid:

```php
class Player
extends Human, Entity {

}
```

Error.

---

Only one parent allowed.

---

# Alternative

Use:

```text
Traits
Interfaces
```

---

# Instanceof Operator

Checks inheritance.

---

Example:

```php
$player instanceof Human
```

Output:

```text
true
```

---

Example:

```php
$player instanceof Entity
```

Output:

```text
true
```

---

Visualization:

```text
Player
   ↓
Human
   ↓
Entity
```

Player is also Human and Entity.

---

# Method Resolution

PHP checks:

```text
Child
   ↓
Parent
   ↓
Grandparent
```

---

Example:

```php
$player->teleport();
```

Search order:

```text
Player
 ↓
Human
 ↓
Entity
```

---

# Final Classes

Classes can prevent inheritance.

Example:

```php
final class Database {

}
```

Now:

```php
class MyDB
extends Database {

}
```

Error.

---

# Final Methods

```php
final public function getId() {

}
```

Children cannot override.

---

# Real Enterprise Example

```text
Controller
     ↓
BaseController
```

```text
UserRepository
       ↓
Repository
```

```text
ApiException
      ↓
ValidationException
```

Inheritance exists everywhere.

---

# Common Beginner Mistakes

---

## Using Inheritance Everywhere

Not every relationship needs inheritance.

Bad:

```text
Player
    ↓
Inventory
```

Player is NOT an Inventory.

Use composition.

---

# Remember:

Inheritance means:

```text
IS-A relationship
```

Composition means:

```text
HAS-A relationship
```

---

Example:

```text
Player IS A Human
```

Good.

---

Example:

```text
Player HAS AN Inventory
```

Use composition.

---

# Bad Example

```text
Car
   ↓
Engine
```

Car is not an Engine.

---

# Good Example

```text
Car HAS Engine.
```

---

# Best Practices

✅ Use inheritance only for true relationships.

✅ Prefer composition when possible.

✅ Keep inheritance chains short.

✅ Use protected carefully.

---

# Exercises

---

## Exercise 1

Create:

```text
Animal
    ↓
Dog
```

---

## Exercise 2

Create:

```text
Human
    ↓
Player
```

---

## Exercise 3

Create:

```text
Entity
    ↓
Monster
```

---

# Mini Project

Design:

```text
Entity
│
├── Human
│      └── Player
│
└── Monster
       ├── Zombie
       └── Skeleton
```

Implement methods.

---

# Quiz

### Which keyword creates inheritance?

<details>
<summary>Answer</summary>

```php
extends
```

</details>

---

### Can child access private properties?

<details>
<summary>Answer</summary>

No.

</details>

---

### Which keyword accesses parent methods?

<details>
<summary>Answer</summary>

```php
parent
```

</details>

---

### Does PHP support multiple inheritance?

<details>
<summary>Answer</summary>

No.

</details>

---

### Which operator checks inheritance?

<details>
<summary>Answer</summary>

```php
instanceof
```

</details>

---

# Real PocketMine Hierarchy

```text
Entity
│
├── Human
│     └── Player
│
├── Living
├── Projectile
├── ItemEntity
└── Monster
```

---

# References

https://www.php.net/manual/en/language.oop5.inheritance.php

---

# Next Chapter

➡ Polymorphism

➡ Abstraction

➡ Interfaces

➡ Abstract Classes
