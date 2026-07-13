---
title: Object-Oriented PHP
sidebar_label: 2. OOP Fundamentals
sidebar_position: 2
---

# Object-Oriented Programming (OOP) in PHP

Object-Oriented Programming is a paradigm based on the concept of "objects", which can contain data (properties) and code (methods). PocketMine-MP is heavily built upon OOP principles. Understanding OOP is absolutely mandatory for writing plugins.

## Classes and Objects

A **class** is a blueprint. An **object** is an instance of that blueprint.
Think of a class as a blueprint for a house. You can build many houses (objects) from the same blueprint.

```php
<?php
declare(strict_types=1);

class PlayerStats {
    // Properties (Data)
    public string $name = "Unknown";
    public int $kills = 0;
    public int $deaths = 0;

    // Methods (Behavior)
    public function getKDR(): float {
        if ($this->deaths === 0) return (float) $this->kills;
        return $this->kills / $this->deaths;
    }
}

// Creating an object (instantiation)
$steveStats = new PlayerStats();
$steveStats->name = "Steve";
$steveStats->kills = 10;
$steveStats->deaths = 2;

echo $steveStats->name . "'s KDR is " . $steveStats->getKDR();
```

### The `$this` Keyword
Inside a class method, `$this` refers to the current object instance calling the method. You use it to access properties and other methods within the same class.

## Constructors (`__construct`)

A constructor is a special magic method that is automatically called when a new object is created. It is used to initialize properties.

```php
class CustomItem {
    public string $name;
    public int $damage;

    public function __construct(string $name, int $damage) {
        $this->name = $name;
        $this->damage = $damage;
    }
}

$sword = new CustomItem("Diamond Sword", 7);
```

### Constructor Property Promotion (PHP 8.0+)
PHP 8 introduced a shorter syntax for constructors that assign properties immediately.

```php
class CustomItem {
    public function __construct(
        public string $name,
        public int $damage
    ) {}
}
```
This does exactly the same thing as the previous example, but with far less boilerplate!

## Visibility (Access Modifiers)

Properties and methods can have different visibility levels, controlling what code is allowed to access them.

- `public`: Accessible from anywhere.
- `protected`: Accessible only within the class itself and classes that inherit from it.
- `private`: Accessible ONLY within the class that defined it.

```php
class BankAccount {
    private int $balance = 0; // Hidden from the outside

    public function deposit(int $amount): void {
        if ($amount > 0) {
            $this->balance += $amount;
        }
    }

    public function getBalance(): int {
        return $this->balance;
    }
}

$account = new BankAccount();
$account->deposit(500);
// $account->balance = 1000; // FATAL ERROR: Cannot access private property
```

:::tip Encapsulation
Using `private` properties and exposing them via public getter/setter methods is known as Encapsulation. It prevents external code from putting your object into an invalid state.
:::

## Static Properties and Methods

Static properties and methods belong to the class itself, rather than an instance of the class. They are accessed using the scope resolution operator `::`.

```php
class ServerConfig {
    public static string $motd = "Welcome to ZyroNetwork!";

    public static function getFormattedMotd(): string {
        return "§l§b" . self::$motd;
    }
}

// Accessed without instantiating the class
echo ServerConfig::$motd;
echo ServerConfig::getFormattedMotd();
```
Note: Inside a static method, you use `self::` instead of `$this->` because there is no object instance.

## Inheritance

Inheritance allows one class to inherit the properties and methods of another class using the `extends` keyword.

```php
class Entity {
    protected int $health = 20;

    public function takeDamage(int $amount): void {
        $this->health -= $amount;
        echo "Entity took damage. HP: " . $this->health . "\n";
    }
}

class Zombie extends Entity {
    public function groan(): void {
        echo "Braaaains...\n";
    }
}

$zombie = new Zombie();
$zombie->takeDamage(5); // Inherited method
$zombie->groan(); // Specific method
```

### Method Overriding and `parent::`
A child class can override a parent's method by declaring a method with the same name.

```php
class BossZombie extends Zombie {
    // Overriding the takeDamage method
    public function takeDamage(int $amount): void {
        // Bosses take half damage!
        $reducedDamage = (int) ($amount / 2);
        
        // Call the original method from the parent class
        parent::takeDamage($reducedDamage);
    }
}
```

## Abstract Classes and Interfaces

### Abstract Classes
An abstract class cannot be instantiated. It is designed only to be extended. It can contain abstract methods (methods without a body) that the child class *must* implement.

```php
abstract class Minigame {
    abstract public function start(): void;
    abstract public function end(): void;

    // Can also have normal methods
    public function broadcast(string $msg): void {
        echo "[Minigame] $msg\n";
    }
}
```

### Interfaces
An interface is like a contract. It specifies what methods a class must implement, but contains no actual code body or properties. A class can implement multiple interfaces (but can only extend one class).

```php
interface Updatable {
    public function onUpdate(int $currentTick): void;
}

interface Clickable {
    public function onClick(): void;
}

class CustomBlock implements Updatable, Clickable {
    public function onUpdate(int $currentTick): void {
        // Implementation
    }
    
    public function onClick(): void {
        // Implementation
    }
}
```

## Namespaces

Namespaces solve two problems:
1. They allow you to organize your code into virtual directories.
2. They prevent class name collisions (e.g., if two different plugins both create a class named `Database`).

```php
// Database.php
namespace ZyroNetwork\Core;

class Database {
    // ...
}
```

To use a class from a different namespace, you use the `use` keyword.

```php
// Main.php
namespace ZyroNetwork\Core;

use pocketmine\plugin\PluginBase;
use ZyroNetwork\Core\Database; // Importing our class

class Main extends PluginBase {
    private Database $db;
    
    public function onEnable(): void {
        $this->db = new Database();
    }
}
```

## Exceptions and Error Handling

Exceptions are an elegant way to handle errors in OOP. When something goes wrong, you `throw` an Exception. You handle exceptions using `try`, `catch`, and `finally` blocks.

```php
class EconomyManager {
    public function pay(string $player, int $amount): void {
        if ($amount <= 0) {
            throw new \InvalidArgumentException("Payment amount must be positive.");
        }
        // Process payment...
    }
}

$eco = new EconomyManager();

try {
    $eco->pay("Steve", -50);
} catch (\InvalidArgumentException $e) {
    echo "Payment failed: " . $e->getMessage() . "\n";
} finally {
    echo "Transaction block finished.\n";
}
```

## Modern PHP OOP Features (PHP 8+)

### Union Types
Allows a property or return value to be one of multiple types.
```php
class ConfigReader {
    // Can hold an integer or a string
    public int|string $version;
}
```

### Enums (PHP 8.1)
Enums allow you to define a custom type that is restricted to a specific set of possible values.
```php
enum PlayerRank: string {
    case GUEST = "Guest";
    case VIP = "VIP";
    case ADMIN = "Admin";
}

function setRank(PlayerRank $rank) {
    echo "Rank set to " . $rank->value;
}

setRank(PlayerRank::ADMIN);
```

### Readonly Properties (PHP 8.1)
A readonly property can only be initialized once. Once assigned, it can never be changed.

```php
class PlayerSession {
    public function __construct(
        public readonly string $uuid,
        public readonly string $loginTime
    ) {}
}
```

---

import Quiz from '@site/src/components/Quiz';

<Quiz questions={[
  {
    question: "What keyword is used to create a new instance of a class?",
    options: ["create", "instance", "new", "build"],
    correctAnswer: 2,
    explanation: "The 'new' keyword is used to instantiate an object from a class (e.g., $obj = new MyClass();)."
  },
  {
    question: "Inside a non-static class method, how do you refer to the current object?",
    options: ["self::", "$this->", "$object->", "parent::"],
    correctAnswer: 1,
    explanation: "$this is a pseudo-variable that points to the current object instance calling the method."
  },
  {
    question: "Which visibility modifier allows access ONLY from within the class that defined the property?",
    options: ["public", "protected", "private", "static"],
    correctAnswer: 2,
    explanation: "private properties/methods cannot be accessed from outside the class, not even by child classes that inherit from it."
  },
  {
    question: "How do you call a method from the parent class that you have overridden in the child class?",
    options: ["super::method()", "parent::method()", "this->parent()", "base->method()"],
    correctAnswer: 1,
    explanation: "In PHP, the parent:: keyword is used to access methods and properties of the extended parent class."
  },
  {
    question: "What is the primary purpose of a Namespace?",
    options: ["To encrypt your code", "To prevent class name collisions and organize code", "To make the code run faster", "To import external libraries automatically"],
    correctAnswer: 1,
    explanation: "Namespaces act as virtual directories to organize code and ensure that two classes with the same name do not conflict."
  },
  {
    question: "Which of the following CANNOT be instantiated directly?",
    options: ["An abstract class", "A child class", "A class with a constructor", "A class with private properties"],
    correctAnswer: 0,
    explanation: "Abstract classes serve as blueprints for other classes to extend and cannot be instantiated directly using 'new'."
  },
  {
    question: "In PHP 8.1+, what feature allows you to define a fixed set of allowed values for a type?",
    options: ["Constants", "Traits", "Interfaces", "Enums"],
    correctAnswer: 3,
    explanation: "Enumerations (Enums) restrict a type to a defined set of values, improving type safety."
  },
  {
    question: "What magic method is called automatically when an object is created?",
    options: ["__init", "__construct", "__build", "__start"],
    correctAnswer: 1,
    explanation: "The __construct() magic method is fired automatically upon object instantiation to initialize properties."
  },
  {
    question: "Which keyword is used by a class to fulfill an Interface's contract?",
    options: ["extends", "includes", "implements", "requires"],
    correctAnswer: 2,
    explanation: "A class 'implements' an interface, whereas it 'extends' another class."
  },
  {
    question: "What does the 'readonly' property modifier do (introduced in PHP 8.1)?",
    options: ["Prevents the property from being viewed outside the class", "Allows the property to be read without a getter", "Ensures the property can only be assigned a value once", "Makes the property static"],
    correctAnswer: 2,
    explanation: "A readonly property can only be initialized once, and cannot be modified thereafter, ensuring immutability."
  }
]} />
