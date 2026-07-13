---
title: PHP Variable Scope
sidebar_label: Variable Scope
sidebar_position: 13
description: Learn how variables behave inside functions, classes and global contexts in PHP.
---

# PHP Variable Scope

Variable Scope determines **where a variable can be accessed** in a program.

Understanding scope is extremely important because many bugs happen due to incorrect variable access.

---

# Why Scope Matters

Scope helps:

✅ Prevent accidental variable modification

✅ Improve security

✅ Organize code properly

✅ Reduce bugs

✅ Build scalable applications

---

# Example

```php
$name = "Aayan";
```

Can we use `$name` everywhere?

Not necessarily.

Its accessibility depends on its scope.

---

# Types of Scope

PHP has:

1. Global Scope
2. Local Scope
3. Static Scope
4. Parameter Scope
5. Class Property Scope

---

# Global Scope

Variables declared outside functions belong to global scope.

Example:

```php
$name = "Aayan";
```

This variable exists globally.

---

# Problem

```php
$name = "Aayan";

function test() {

    echo $name;

}
```

Output:

```text
Undefined variable
```

Because functions create their own local scope.

---

# Accessing Global Variables

Use:

```php
global
```

Example:

```php
$name = "Aayan";

function test() {

    global $name;

    echo $name;

}

test();
```

Output:

```text
Aayan
```

---

# Multiple Globals

```php
$a = 5;
$b = 10;

function add() {

    global $a, $b;

    echo $a + $b;

}
```

---

# $GLOBALS Array

PHP automatically stores global variables.

Example:

```php
$name = "Aayan";

function test() {

    echo $GLOBALS["name"];

}
```

Output:

```text
Aayan
```

---

# Structure

```text
$GLOBALS
│
├── _GET
├── _POST
├── _SERVER
├── name
└── age
```

---

# Local Scope

Variables created inside functions belong to local scope.

Example:

```php
function test() {

    $name = "Aayan";

    echo $name;

}
```

Works only inside that function.

---

# Invalid Access

```php
function test() {

    $name = "Aayan";

}

echo $name;
```

Output:

```text
Undefined variable
```

---

# Memory Representation

```text
Function Start
      ↓
Create Local Variables
      ↓
Execute Function
      ↓
Destroy Variables
```

---

# Function Parameters

Parameters are local variables.

Example:

```php
function greet(
    string $name
) {

    echo $name;

}
```

`$name` only exists inside this function.

---

# Scope Isolation

```php
$name = "Global";

function test() {

    $name = "Local";

    echo $name;

}

test();

echo $name;
```

Output:

```text
LocalGlobal
```

Because they are different variables.

---

# Static Scope

Normally:

```php
function counter() {

    $count = 0;

    $count++;

    echo $count;

}
```

Calling:

```php
counter();
counter();
counter();
```

Output:

```text
111
```

Variable resets every time.

---

# Static Variables

```php
function counter() {

    static $count = 0;

    $count++;

    echo $count;

}
```

Output:

```text
123
```

The variable remains in memory.

---

# How Static Works

```text
First Call:
count = 0

Second Call:
count = 1

Third Call:
count = 2
```

---

# Real Example

```php
function generateId() {

    static $id = 0;

    return ++$id;

}
```

---

# Anonymous Function Scope

Closures cannot access outside variables automatically.

---

## Invalid

```php
$name = "Aayan";

$fn = function() {

    echo $name;

};
```

Produces:

```text
Undefined variable
```

---

# Using use()

```php
$name = "Aayan";

$fn = function() use (
    $name
) {

    echo $name;

};

$fn();
```

Output:

```text
Aayan
```

---

# Passing by Reference

```php
$count = 0;

$fn = function() use (
    &$count
) {

    $count++;

};

$fn();

echo $count;
```

Output:

```text
1
```

---

# Arrow Function Scope

Arrow functions automatically inherit variables.

Example:

```php
$name = "Aayan";

$fn =
fn() => $name;

echo $fn();
```

Output:

```text
Aayan
```

---

# Class Scope

Classes introduce another type of scope.

---

# Local Variable

```php
class User {

    public function test() {

        $name = "Aayan";

    }

}
```

---

# Property Scope

```php
class User {

    public string $name;

}
```

Access:

```php
$user->name
```

---

# Accessing Class Variables

Use:

```php
$this
```

Example:

```php
class User {

    private string $name =
        "Aayan";

    public function test() {

        echo $this->name;

    }

}
```

---

# Static Property Scope

```php
class Config {

    public static string
        $version = "1.0";

}
```

Access:

```php
Config::$version;
```

---

# Constants Scope

```php
class Main {

    public const VERSION =
        "1.0";

}
```

Access:

```php
Main::VERSION;
```

---

# Scope Resolution Operator

PHP uses:

```php
::
```

This operator is called:

```text
Scope Resolution Operator
```

---

# Examples

```php
self::

parent::

static::

ClassName::
```

---

# self::

References current class.

```php
self::VERSION
```

---

# parent::

References parent class.

```php
parent::onEnable();
```

Used heavily in PocketMine.

---

# static::

Late Static Binding.

Advanced OOP feature.

---

# PocketMine Examples

---

## Plugin Instance

```php
class Main
extends PluginBase {

    private array $players =
        [];

}
```

The property is available throughout the object.

---

## Commands

```php
public function onCommand(
    CommandSender $sender,
    Command $command,
    string $label,
    array $args
): bool {

}
```

All parameters are local.

---

## Event Listener

```php
public function onJoin(
    PlayerJoinEvent $event
): void {

    $player =
        $event->getPlayer();

}
```

`$player` only exists inside the method.

---

# Common Mistakes

---

## Using Local Variables Globally

❌

```php
function test() {

    $x = 5;

}

echo $x;
```

---

## Forgetting $this

❌

```php
echo name;
```

---

✅

```php
echo $this->name;
```

---

## Excessive Globals

Avoid:

```php
global
```

Too much global usage creates messy code.

---

# Best Practices

✅ Prefer dependency injection.

---

✅ Use class properties instead of globals.

---

✅ Keep variables inside smallest scope possible.

---

✅ Avoid global state.

---

# Real Project Example

```php
class EconomyManager {

    private array $money =
        [];

}
```

Better than:

```php
$GLOBALS["money"];
```

---

# Exercises

---

## Exercise 1

Create a global variable.

Access it using:

```php
global
```

---

## Exercise 2

Create:

```php
static $counter
```

---

## Exercise 3

Create a closure using:

```php
use()
```

---

## Exercise 4

Create a class property.

Access it using:

```php
$this
```

---

# Challenge

Create:

```php
PlayerManager
```

Store:

```php
players
money
ranks
```

using proper class scope.

---

# Quiz

### Which keyword accesses global variables?

<details>
<summary>Answer</summary>

global

</details>

---

### Which variable stores all globals?

<details>
<summary>Answer</summary>

$GLOBALS

</details>

---

### Which keyword accesses class properties?

<details>
<summary>Answer</summary>

$this

</details>

---

### Which operator accesses static members?

<details>
<summary>Answer</summary>

::

</details>

---

# References

PHP Scope:

https://www.php.net/manual/en/language.variables.scope.php

Anonymous Functions:

https://www.php.net/manual/en/functions.anonymous.php

Closures:

https://www.php.net/manual/en/class.closure.php

---

# Next Chapter

➡ PHP Strings
