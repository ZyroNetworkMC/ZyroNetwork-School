---
title: Magic Methods
sidebar_position: 17
description: Complete guide to PHP Magic Methods from beginner to advanced with real-world examples, PocketMine architecture and enterprise development.
---

# Magic Methods

## Chapter Overview

In this chapter you will learn:

- What magic methods are
- Why magic methods exist
- Object lifecycle
- Dynamic properties
- Serialization
- Method overloading
- Cloning
- Object invocation
- Debugging helpers
- Real-world examples
- Laravel examples
- PocketMine examples
- Enterprise usage

---

# What are Magic Methods?

Magic methods are special methods in PHP that begin with:

```php
__
```

(two underscores)

Example:

```php
__construct()
```

---

They allow PHP to automatically execute code during specific events.

Examples:

```text
Object Creation
Object Destruction
Property Access
Method Calls
Serialization
Cloning
Printing Objects
```

---

# List of Magic Methods

```text
__construct()
__destruct()

__get()
__set()
__isset()
__unset()

__call()
__callStatic()

__toString()

__invoke()

__clone()

__sleep()
__wakeup()

__serialize()
__unserialize()

__debugInfo()
```

---

# Object Lifecycle

```text
Create Object
      ↓
Constructor
      ↓
Use Object
      ↓
Destroy Object
```

Magic methods allow us to control this process.

---

---

# __construct()

---

## What is Constructor?

Constructor runs automatically when object is created.

---

Example:

```php
class Player {

    public function __construct() {

        echo "Player Created";

    }

}
```

---

Usage:

```php
$player =
new Player();
```

Output:

```text
Player Created
```

---

# Constructor with Parameters

```php
class Player {

    public function __construct(
        private string $name
    ) {

    }

}
```

---

Usage:

```php
$player =
new Player(
    "Aayan"
);
```

---

# Why Constructors Exist

To initialize objects.

---

Examples:

```text
Database Connections
Configurations
Services
Dependency Injection
```

---

# Real Example

```php
class Database {

    public function __construct() {

        $this->connect();

    }

}
```

---

# Laravel Example

```php
public function __construct(
    UserRepository $users
)
```

Dependency Injection.

---

---

# __destruct()

---

Destructor runs automatically when object is destroyed.

---

Example:

```php
class Test {

    public function __destruct() {

        echo "Destroyed";

    }

}
```

---

Usually runs:

```text
End of Script
```

or when object has no references.

---

# Real Example

```php
class Database {

    public function __destruct() {

        $this->connection
            ->close();

    }

}
```

---

# Use Cases

```text
Closing Files
Closing Database Connections
Logging
Cleanup
```

---

---

# __toString()

---

Called when object is treated as a string.

---

Example:

```php
class User {

    public function __toString()
    : string {

        return "Aayan";

    }

}
```

---

Usage:

```php
$user =
new User();

echo $user;
```

Output:

```text
Aayan
```

---

Without `__toString()`:

```text
Fatal Error
Object cannot be converted to string
```

---

# Real Example

```php
class Position {

    public function __toString()
    : string {

        return
            $this->x .
            "," .
            $this->y .
            "," .
            $this->z;

    }

}
```

---

Output:

```text
100,64,200
```

---

---

# __get()

---

Called when accessing inaccessible properties.

---

Example:

```php
class User {

    private array $data = [];

    public function __get(
        string $name
    ) {

        return
            $this->data[$name]
            ?? null;

    }

}
```

---

Usage:

```php
echo $user->name;
```

Even if property doesn't exist.

---

# Real Example

Laravel uses this heavily.

Example:

```php
$user->posts
```

Internally:

```php
__get()
```

loads relation.

---

---

# __set()

---

Called when assigning inaccessible properties.

---

Example:

```php
class User {

    private array $data = [];

    public function __set(
        string $name,
        mixed $value
    ) {

        $this->data[$name]
            = $value;

    }

}
```

---

Usage:

```php
$user->name =
    "Aayan";
```

---

---

# __isset()

---

Called by:

```php
isset()
```

---

Example:

```php
public function __isset(
    string $name
)
{
    return isset(
        $this->data[$name]
    );
}
```

---

Usage:

```php
isset(
    $user->name
);
```

---

---

# __unset()

---

Called when:

```php
unset()
```

is used.

---

Example:

```php
public function __unset(
    string $name
)
{
    unset(
        $this->data[$name]
    );
}
```

---

---

# Dynamic Property System

Visualization:

```text
$user->name
      ↓
   __set()
      ↓
   internal array
```

---

Laravel models work similarly.

---

---

# __call()

---

Called when calling inaccessible methods.

---

Example:

```php
class User {

    public function __call(
        string $method,
        array $arguments
    ) {

        echo
            "Method:
            $method";

    }

}
```

---

Usage:

```php
$user->hello();
```

Output:

```text
Method: hello
```

---

# Why Useful?

Create dynamic APIs.

---

# Laravel Example

```php
User::whereName(
    "Aayan"
);
```

Internally uses:

```php
__call()
```

---

---

# __callStatic()

---

Same as `__call()`

But for:

```text
Static Methods
```

---

Example:

```php
class User {

    public static function __callStatic(
        string $method,
        array $arguments
    ) {

    }

}
```

---

Usage:

```php
User::findByName();
```

---

---

# __invoke()

---

Makes object callable like a function.

---

Example:

```php
class Hello {

    public function __invoke() {

        echo "Hello";

    }

}
```

---

Usage:

```php
$hello =
new Hello();

$hello();
```

Output:

```text
Hello
```

---

# Real Example

Middleware systems often use:

```php
$middleware(
    $request
);
```

---

---

# __clone()

---

Called when object is cloned.

---

Example:

```php
class User {

    public function __clone() {

        echo "Cloned";

    }

}
```

---

Usage:

```php
$user2 =
clone $user1;
```

---

# Why?

Objects are copied.

Sometimes IDs should reset.

---

Example:

```php
public function __clone() {

    $this->id = null;

}
```

---

---

# __sleep()

---

Older serialization method.

Called before:

```php
serialize()
```

---

Example:

```php
public function __sleep()
{
    return ["name"];
}
```

---

---

# __wakeup()

---

Called after:

```php
unserialize()
```

---

Example:

```php
public function __wakeup() {

    $this->connect();

}
```

---

---

# __serialize()

PHP 7.4+

Modern serialization method.

---

Example:

```php
public function __serialize()
: array {

    return [

        "name" =>
            $this->name

    ];

}
```

---

---

# __unserialize()

---

Example:

```php
public function __unserialize(
    array $data
)
{
    $this->name =
        $data["name"];
}
```

---

---

# Why Serialization Exists

Examples:

```text
Caching
Sessions
Saving Objects
Queue Systems
```

---

---

# __debugInfo()

---

Called when:

```php
var_dump()
```

is executed.

---

Example:

```php
public function __debugInfo()
{
    return [

        "name" => "Aayan"

    ];
}
```

---

Usage:

```php
var_dump(
    $user
);
```

---

---

# Real World Example

---

## ORM Models

Laravel models heavily use:

```text
__get()
__set()
__call()
```

---

## Dependency Containers

Often use:

```text
__invoke()
```

---

## Service Providers

Use:

```text
__callStatic()
```

---

# PocketMine Examples

---

## Position Objects

Could implement:

```php
__toString()
```

---

## Config Wrappers

Can use:

```php
__get()
__set()
```

---

## Event Dispatchers

Can use:

```php
__invoke()
```

---

---

# Visualization

```text
Object
 │
 ├── __construct()
 ├── __get()
 ├── __set()
 ├── __call()
 ├── __invoke()
 ├── __clone()
 └── __destruct()
```

---

# Common Beginner Mistakes

---

## Abusing __get()

Makes debugging difficult.

---

## Creating Everything Dynamically

Static code is easier to understand.

---

## Overusing Magic Methods

Too much magic:

```text
Creates confusing code.
```

---

# Good Usage

✅ ORMs

✅ Dynamic APIs

✅ Caching

✅ Service Containers

---

# Bad Usage

❌ Everything hidden.

❌ Replacing normal methods.

❌ Making code impossible to understand.

---

# Exercises

---

## Exercise 1

Create:

```php
User
```

using:

```php
__get()
__set()
```

---

## Exercise 2

Create:

```php
Position
```

with:

```php
__toString()
```

---

## Exercise 3

Create:

```php
Logger
```

using:

```php
__invoke()
```

---

# Mini Project

Create:

```text
Zyro User Model
```

Features:

```text
Dynamic Attributes
Serialization
String Conversion
Method Overloading
```

Implement:

```text
__get()
__set()
__serialize()
__toString()
```

---

# Interview Questions

---

### What are magic methods?

Special methods automatically called by PHP.

---

### Which magic method runs when object is created?

```php
__construct()
```

---

### Which magic method runs when object becomes string?

```php
__toString()
```

---

### Which method handles unknown properties?

```php
__get()
__set()
```

---

### Which method makes objects callable?

```php
__invoke()
```

---

### Which method handles cloning?

```php
__clone()
```

---

# Summary

Magic Methods allow:

✅ Dynamic APIs

✅ Object Lifecycle Control

✅ Serialization

✅ Method Overloading

✅ Framework Features

✅ ORMs and Containers

They are extremely powerful but should be used carefully.

---

# References

https://www.php.net/manual/en/language.oop5.magic.php

---

# Next Chapter

➡ Enums

➡ Namespaces

➡ Autoloading

➡ Dependency Injection
