---
title: PHP Type Casting
sidebar_label: Type Casting
sidebar_position: 8
description: Learn how to convert one data type into another in PHP.
---

# PHP Type Casting

Type casting means converting one data type into another.

PHP automatically converts data types when needed, but you can also manually convert them.

---

# Why Type Casting?

Type casting is useful when:

✅ Receiving user input

✅ Working with databases

✅ Processing APIs

✅ Handling configuration files

✅ PocketMine plugin development

---

# Automatic Type Conversion

PHP automatically converts types.

Example:

```php
$a = "10";
$b = 5;

echo $a + $b;
```

Output:

```text
15
```

PHP automatically converts `"10"` into an integer.

---

# Manual Type Casting

PHP supports the following casts:

```php
(int)
(float)
(string)
(bool)
(array)
(object)
unset()
```

---

# Integer Casting

---

## String → Integer

```php
$number = (int) "50";

echo $number;
```

Output:

```text
50
```

---

## Float → Integer

```php
$number = (int) 99.99;

echo $number;
```

Output:

```text
99
```

⚠ Decimal part is removed.

---

## Boolean → Integer

```php
echo (int) true;
```

Output:

```text
1
```

```php
echo (int) false;
```

Output:

```text
0
```

---

# Float Casting

```php
$number = (float) "50";

var_dump($number);
```

Output:

```text
float(50)
```

---

Example:

```php
$health = 20;

$speed = (float) $health;
```

---

# String Casting

---

## Integer → String

```php
$name = (string) 50;

var_dump($name);
```

Output:

```text
string(2) "50"
```

---

## Boolean → String

```php
echo (string) true;
```

Output:

```text
1
```

---

## Array → String

```php
echo (string) [];
```

Produces:

```text
Warning
```

---

# Boolean Casting

---

## Integer → Boolean

```php
(bool) 1
```

Output:

```text
true
```

---

```php
(bool) 0
```

Output:

```text
false
```

---

## String → Boolean

```php
(bool) "Hello"
```

Output:

```text
true
```

---

```php
(bool) ""
```

Output:

```text
false
```

---

# Array Casting

---

## String → Array

```php
$data = (array) "Aayan";

print_r($data);
```

Output:

```php
Array
(
    [0] => Aayan
)
```

---

## Integer → Array

```php
$data = (array) 10;
```

Output:

```php
Array
(
    [0] => 10
)
```

---

# Object Casting

---

## Array → Object

```php
$user = [
    "name" => "Aayan",
    "age" => 18
];

$obj = (object) $user;

echo $obj->name;
```

Output:

```text
Aayan
```

---

# Null Casting

```php
(int) null
```

Output:

```text
0
```

---

```php
(string) null
```

Output:

```text
""
```

---

```php
(bool) null
```

Output:

```text
false
```

---

# Type Juggling

PHP automatically changes data types.

Example:

```php
echo "10" + "20";
```

Output:

```text
30
```

---

Example:

```php
echo "100 players";
```

PHP keeps it as a string.

---

# Strict Types

Always use:

```php
declare(strict_types=1);
```

Without strict types:

```php
function add(
    int $a
) {

}

add("10");
```

Works.

---

With strict types:

```text
TypeError
```

---

# Useful Functions

---

## intval()

```php
intval("50");
```

---

## floatval()

```php
floatval("5.5");
```

---

## strval()

```php
strval(100);
```

---

## boolval()

```php
boolval(1);
```

---

## settype()

```php
$value = "50";

settype($value, "integer");
```

---

# Type Checking Functions

```php
is_int()
is_float()
is_bool()
is_string()
is_array()
is_object()
```

---

# Real World Examples

---

## Form Input

```php
$age =
(int) $_POST["age"];
```

---

## Config Values

```php
$port =
(int) $config["port"];
```

---

## PocketMine

```php
$health =
(int) $player->getHealth();
```

---

## Economy Plugin

```php
$money =
(float) $data["money"];
```

---

# Memory Representation

```text
String
 ↓
"50"

(int)

 ↓

50
```

---

# Common Mistakes

---

❌

```php
$number = "abc";

echo (int) $number;
```

Output:

```text
0
```

---

❌

```php
(bool) "false"
```

Output:

```text
true
```

Many beginners think this becomes false.

Any non-empty string becomes:

```text
true
```

---

# Best Practices

✅ Validate before casting.

```php
if (is_numeric($value)) {

}
```

---

✅ Use strict types.

---

✅ Use explicit casting.

---

# Exercises

---

## Exercise 1

Convert:

```php
"100"
```

to integer.

---

## Exercise 2

Convert:

```php
10
```

to string.

---

## Exercise 3

Convert:

```php
[
    "name" => "Aayan"
]
```

to object.

---

# Challenge

Create:

```php
$name = "50";
$health = "20";
$money = "1000.50";
```

Convert them into proper types.

---

# Quiz

### What is:

```php
(int) "50"
```

<details>
<summary>Answer</summary>

50

</details>

---

### What is:

```php
(bool) ""
```

<details>
<summary>Answer</summary>

false

</details>

---

### What is:

```php
(bool) "false"
```

<details>
<summary>Answer</summary>

true

</details>

---

# References

PHP Type Casting:

https://www.php.net/manual/en/language.types.type-juggling.php

PHP settype():

https://www.php.net/manual/en/function.settype.php

---

# Next Chapter

➡ PHP Operators
