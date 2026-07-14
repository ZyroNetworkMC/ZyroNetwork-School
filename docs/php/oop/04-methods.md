---
title: Methods
sidebar_position: 4
description: Learn PHP methods in complete detail including instance methods, static methods, parameters, return types and real-world PocketMine examples.
---

# PHP Methods

Methods are functions that belong to a class.

They define what an object can do.

Examples:

```text
Player
│
├── sendMessage()
├── teleport()
├── kick()
└── addMoney()
```

Properties describe:

```text
WHAT an object IS
```

Methods describe:

```text
WHAT an object DOES
```

---

# Real Life Example

Car:

Properties:

```text
brand
speed
color
fuel
```

Methods:

```text
start()
stop()
accelerate()
brake()
```

---

# Declaring Methods

```php
class Player {

    public function hello() {

        echo "Hello";

    }

}
```

---

# Calling Methods

```php
$player =
new Player();

$player->hello();
```

Output:

```text
Hello
```

---

# Visualization

```text
Player Object
│
├── name
├── money
│
├── sendMessage()
├── addMoney()
└── teleport()
```

---

# Multiple Methods

```php
class Player {

    public function join() {

        echo "Joined";

    }

    public function leave() {

        echo "Left";

    }

}
```

---

# Methods With Parameters

Methods can receive data.

```php
class Player {

    public function sendMessage(
        string $message
    ) {

        echo $message;

    }

}
```

Usage:

```php
$player->sendMessage(
    "Hello World"
);
```

---

# Multiple Parameters

```php
public function teleport(

    float $x,
    float $y,
    float $z

) {

}
```

---

# Methods Returning Values

```php
public function getMoney(): int {

    return 5000;

}
```

Usage:

```php
echo
$player->getMoney();
```

---

# Return Types

Methods should always declare return types.

Available:

```php
int
string
float
bool
array
object
void
mixed
never
```

---

# Void Methods

```php
public function kick(): void {

}
```

Means:

```text
Returns nothing.
```

---

# Returning Objects

```php
public function getServer()
: Server {

}
```

---

# Returning Nullable Objects

```php
public function getTarget()
: ?Player {

}
```

Means:

```text
Player OR null
```

---

# Method Visibility

Methods support:

```php
public
protected
private
```

---

# Public Methods

Accessible everywhere.

```php
public function hello() {

}
```

---

# Protected Methods

Only current class and child classes.

```php
protected function save() {

}
```

---

# Private Methods

Only current class.

```php
private function encrypt() {

}
```

---

# Example

```php
class Bank {

    private function verify() {

    }

}
```

Nobody outside can call:

```php
$bank->verify();
```

---

# The `$this` Keyword

Inside methods:

```php
$this
```

refers to current object.

Example:

```php
class Player {

    public int $money = 0;

    public function addMoney(
        int $amount
    ): void {

        $this->money +=
            $amount;

    }

}
```

---

# Example

```php
$player =
new Player();

$player->addMoney(
    1000
);

echo
$player->money;
```

Output:

```text
1000
```

---

# Why `$this` Exists

Imagine:

```php
$p1
$p2
$p3
```

Each object has its own money.

```php
$this
```

automatically refers to correct object.

---

# Method Chaining

Methods can return:

```php
$this
```

Example:

```php
public function setName(
    string $name
): self {

    $this->name =
        $name;

    return $this;

}
```

Usage:

```php
$player
    ->setName("Aayan")
    ->setRank("Owner")
    ->setMoney(5000);
```

---

# Self Return Type

```php
public function test()
: self {

    return $this;

}
```

Means:

```text
Returns current class.
```

---

# Fluent Interface

Popular in Laravel.

Example:

```php
$query
    ->where()
    ->orderBy()
    ->limit();
```

---

# Method Overloading

PHP does not support true method overloading.

Invalid:

```php
public function test() {}

public function test(
    string $name
) {}
```

Error.

---

# Alternative

Use:

```php
mixed
```

or

```php
...$args
```

---

Example:

```php
public function test(
    mixed ...$args
) {

}
```

---

# Named Arguments

PHP 8+

```php
createPlayer(

    name: "Aayan",
    money: 5000

);
```

---

# Recursive Methods

Methods may call themselves.

Example:

```php
public function factorial(
    int $n
): int {

    if ($n <= 1) {
        return 1;
    }

    return
        $n *
        $this->factorial(
            $n - 1
        );

}
```

---

# Static Methods

Belong to class itself.

```php
public static function create() {

}
```

Usage:

```php
Player::create();
```

---

# Example

```php
class Math {

    public static function add(
        int $a,
        int $b
    ): int {

        return $a + $b;

    }

}
```

Usage:

```php
Math::add(
    5,
    10
);
```

---

# Abstract Methods

Can be declared without implementation.

```php
abstract public function save();
```

Covered later.

---

# Final Methods

Prevent overriding.

```php
final public function getId() {

}
```

Covered later.

---

# Real PocketMine Examples

---

# Sending Message

```php
$player->sendMessage(
    "Hello"
);
```

---

# Teleporting

```php
$player->teleport(
    $position
);
```

---

# Getting Name

```php
$player->getName();
```

---

# Server Broadcast

```php
$this->getServer()
    ->broadcastMessage(
        "Restarting"
    );
```

---

# Event Example

```php
public function onJoin(
    PlayerJoinEvent $event
): void {

    $player =
        $event->getPlayer();

    $player->sendMessage(
        "Welcome!"
    );

}
```

---

# Method Call Stack

Example:

```php
A()
 ↓
B()
 ↓
C()
```

Each method creates a stack frame.

---

# Memory Representation

```text
Object
│
├── Properties
└── Methods
```

Methods are stored once.

Properties are unique per object.

---

# Common Beginner Mistakes

---

## Forgetting Parentheses

Wrong:

```php
$player->sendMessage;
```

Correct:

```php
$player->sendMessage();
```

---

## Forgetting Return

Wrong:

```php
public function getMoney()
: int {

}
```

Must return integer.

---

## Accessing Undefined Methods

Wrong:

```php
$player->abc();
```

---

## Using Static Incorrectly

Wrong:

```php
$this->create();
```

if method is static.

Correct:

```php
self::create();
```

---

# Best Practices

✅ Use return types.

✅ Keep methods small.

✅ One responsibility per method.

✅ Avoid huge methods.

✅ Prefer meaningful names.

---

# Naming Examples

Good:

```php
sendMessage()
getMoney()
setRank()
teleport()
```

Bad:

```php
abc()
test()
method1()
```

---

# Exercises

---

## Exercise 1

Create:

```php
class Car {

    public function start() {

    }

}
```

---

## Exercise 2

Create:

```php
Player
```

Methods:

```text
sendMessage()
kick()
ban()
```

---

## Exercise 3

Create:

```php
Economy
```

Methods:

```text
addMoney()
removeMoney()
hasMoney()
```

---

# Mini Project

Create:

```php
class Player {

    private string $name;

    private int $money;

    public function addMoney() {}

    public function removeMoney() {}

    public function sendMessage() {}

}
```

---

# Quiz

### What are methods?

<details>
<summary>Answer</summary>

Functions belonging to classes.

</details>

---

### Which keyword refers to current object?

<details>
<summary>Answer</summary>

```php
$this
```

</details>

---

### Which operator calls methods?

<details>
<summary>Answer</summary>

```php
->
```

</details>

---

### Which keyword creates class methods?

<details>
<summary>Answer</summary>

```php
function
```

</details>

---

### Which keyword creates static methods?

<details>
<summary>Answer</summary>

```php
static
```

</details>

---

# Real PocketMine Architecture

```text
Player
│
├── sendMessage()
├── teleport()
├── kick()
├── setGamemode()
└── getInventory()
```

Everything in PocketMine revolves around methods.

---

# References

https://www.php.net/manual/en/language.oop5.php

---

# Next Chapter

➡ Constructors and Destructors
➡ Access Modifiers
➡ Encapsulation
