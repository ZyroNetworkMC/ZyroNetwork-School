---
title: PHP Data Types
sidebar_label: Data Types
sidebar_position: 7
description: Learn all PHP data types in detail.
---

# PHP Data Types

Data types determine what kind of data a variable can store.

PHP is dynamically typed.

Example:

```php
$name = "Aayan";
$age = 18;
```

PHP automatically determines types.

---

# Why Data Types Matter

Data types help:

✅ Prevent Bugs

✅ Improve Performance

✅ Better Memory Usage

✅ Type Safety

---

# PHP Data Types

PHP supports:

1. String
2. Integer
3. Float
4. Boolean
5. Array
6. Object
7. NULL
8. Resource
9. Callable
10. Mixed

---

# String

Strings store text.

```php
$name = "Aayan";
```

---

## Single Quotes

```php
$name = 'Aayan';
```

---

## Double Quotes

```php
$name = "Aayan";
```

Supports interpolation:

```php
echo "Hello $name";
```

Output:

```text
Hello Aayan
```

---

# Integer

Stores whole numbers.

```php
$players = 150;
```

Examples:

```php
10
-25
5000
```

---

# Integer Limits

```php
echo PHP_INT_MAX;
```

64-bit:

```text
9223372036854775807
```

---

# Float

Stores decimal numbers.

```php
$price = 99.99;
```

Examples:

```php
1.5
10.75
0.99
```

---

# Boolean

Stores:

```php
true
false
```

Example:

```php
$isOnline = true;
```

---

# Array

Stores multiple values.

```php
$players = [
    "Steve",
    "Alex"
];
```

---

# Indexed Arrays

```php
$numbers = [1,2,3];
```

---

# Associative Arrays

```php
$user = [
    "name" => "Aayan",
    "age" => 18
];
```

---

# Multidimensional Arrays

```php
$servers = [
    [
        "name" => "Lobby"
    ]
];
```

---

# Object

Objects are instances of classes.

```php
class User {

}

$user = new User();
```

---

# NULL

Represents no value.

```php
$data = null;
```

---

# Resource

Special type for external resources.

Example:

```php
$file =
fopen("test.txt", "r");
```

---

# Callable

Represents executable functions.

```php
function hello() {

}

$fn = "hello";
```

---

# Mixed

Can store any type.

```php
function test(
    mixed $value
) {

}
```

---

# Checking Types

---

## gettype()

```php
echo gettype($name);
```

---

## var_dump()

```php
var_dump($name);
```

Output:

```text
string(5) "Aayan"
```

---

## is_string()

```php
is_string($name);
```

---

## is_int()

```php
is_int($age);
```

---

## is_bool()

```php
is_bool(true);
```

---

## is_array()

```php
is_array([]);
```

---

# Type Declaration

Modern PHP uses strict types.

```php
function add(
    int $a,
    int $b
): int {

}
```

---

# Union Types

```php
function test(
    int|string $value
) {

}
```

---

# Nullable Types

```php
?string
```

Example:

```php
function getName():
?string {

}
```

---

# Memory Representation

```text
String  → Text
Integer → Numbers
Boolean → True/False
Array   → Multiple Values
Object  → Class Instance
```

---

# PocketMine Examples

Player object:

```php
Player
```

Configuration:

```php
array
```

Health:

```php
int
```

Movement speed:

```php
float
```

---

# Best Practices

✅ Always use type hints.

```php
public function test(
    string $name
): void {

}
```

---

❌ Avoid:

```php
function test($a) {

}
```

---

# Exercises

Create variables:

```php
$name
$age
$health
$isOnline
$players
```

---

# Quiz

### Which type stores text?

<details>
<summary>Answer</summary>

String

</details>

---

### Which type stores decimals?

<details>
<summary>Answer</summary>

Float

</details>

---

### Which type stores multiple values?

<details>
<summary>Answer</summary>

Array

</details>

---

# Mini Project

Create:

```php
$name
$players
$money
$isOnline
```

Print them using:

```php
var_dump();
```

---

# References

https://www.php.net/manual/en/language.types.php

---

# Next Chapter

➡ PHP Type Casting
