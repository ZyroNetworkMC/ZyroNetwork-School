---
title: PHP Operators
sidebar_label: Operators
sidebar_position: 9
description: Learn PHP operators including arithmetic, comparison, logical, assignment and bitwise operators.
---

# PHP Operators

Operators are symbols that perform operations on values and variables.

Example:

```php
$a = 5 + 5;
```

Here:

```text
+
```

is an operator.

---

# Types of Operators

PHP provides many operators:

1. Arithmetic Operators
2. Assignment Operators
3. Comparison Operators
4. Logical Operators
5. Increment / Decrement Operators
6. String Operators
7. Array Operators
8. Null Operators
9. Bitwise Operators

---

# Arithmetic Operators

| Operator | Meaning | Example |
|----------|----------|----------|
| `+` | Addition | `$a + $b` |
| `-` | Subtraction | `$a - $b` |
| `*` | Multiplication | `$a * $b` |
| `/` | Division | `$a / $b` |
| `%` | Modulus | `$a % $b` |
| `**` | Power | `$a ** $b` |

---

## Addition

```php
echo 10 + 5;
```

Output:

```text
15
```

---

## Subtraction

```php
echo 10 - 5;
```

Output:

```text
5
```

---

## Multiplication

```php
echo 10 * 5;
```

Output:

```text
50
```

---

## Division

```php
echo 10 / 5;
```

Output:

```text
2
```

---

## Modulus

Returns remainder.

```php
echo 10 % 3;
```

Output:

```text
1
```

---

## Power

```php
echo 2 ** 3;
```

Output:

```text
8
```

---

# Assignment Operators

| Operator | Example |
|----------|----------|
| `=` | `$a = 5` |
| `+=` | `$a += 5` |
| `-=` | `$a -= 5` |
| `*=` | `$a *= 5` |
| `/=` | `$a /= 5` |
| `%=` | `$a %= 5` |
| `.=` | `$text .= "Hello"` |

---

Example:

```php
$a = 10;

$a += 5;

echo $a;
```

Output:

```text
15
```

---

# Comparison Operators

| Operator | Meaning |
|----------|----------|
| `==` | Equal |
| `===` | Identical |
| `!=` | Not Equal |
| `!==` | Not Identical |
| `>` | Greater Than |
| `<` | Less Than |
| `>=` | Greater Than Equal |
| `<=` | Less Than Equal |
| `<=>` | Spaceship Operator |

---

## Equal

```php
5 == "5";
```

Returns:

```text
true
```

---

## Identical

```php
5 === "5";
```

Returns:

```text
false
```

---

## Spaceship Operator

```php
echo 1 <=> 2;
```

Output:

```text
-1
```

```php
echo 2 <=> 2;
```

Output:

```text
0
```

```php
echo 3 <=> 2;
```

Output:

```text
1
```

---

# Logical Operators

| Operator | Meaning |
|----------|----------|
| `&&` | AND |
| `||` | OR |
| `!` | NOT |
| `and` | AND |
| `or` | OR |
| `xor` | XOR |

---

## AND

```php
if ($online && $staff) {

}
```

---

## OR

```php
if ($admin || $owner) {

}
```

---

## NOT

```php
if (!$banned) {

}
```

---

# Increment Operators

```php
$a++;
```

---

# Decrement Operators

```php
$a--;
```

---

# Pre Increment

```php
++$a;
```

---

# Post Increment

```php
$a++;
```

Difference:

```php
$a = 5;

echo ++$a;
```

Output:

```text
6
```

---

```php
$a = 5;

echo $a++;
```

Output:

```text
5
```

---

# String Operators

## Concatenation

```php
echo "Hello " . "World";
```

---

## Concatenation Assignment

```php
$text = "Hello";

$text .= " World";
```

---

# Array Operators

| Operator | Meaning |
|----------|----------|
| `+` | Union |
| `==` | Equal |
| `===` | Identical |

---

Example:

```php
$a = [
    "name" => "Aayan"
];

$b = [
    "rank" => "Owner"
];

$c = $a + $b;
```

---

# Null Coalescing Operator

```php
$name =
$_GET["name"] ?? "Guest";
```

---

# Null Safe Operator (PHP 8)

```php
$user?->getProfile()?->getName();
```

---

# Ternary Operator

```php
$status =
$online
? "Online"
: "Offline";
```

---

# Bitwise Operators

| Operator | Meaning |
|----------|----------|
| `&` | AND |
| `|` | OR |
| `^` | XOR |
| `~` | NOT |
| `<<` | Left Shift |
| `>>` | Right Shift |

---

# Operator Precedence

```php
echo 5 + 5 * 2;
```

Output:

```text
15
```

because:

```text
5 + (5 * 2)
```

---

# Using Parentheses

```php
echo (5 + 5) * 2;
```

Output:

```text
20
```

---

# PocketMine Examples

Permission Check:

```php
if (
    $sender->hasPermission(
        "zyro.admin"
    ) &&
    $sender instanceof Player
) {

}
```

---

Economy:

```php
$money += 1000;
```

---

Chat:

```php
$message .= "!";
```

---

# Exercises

1. Add two numbers.
2. Check if player is staff.
3. Use ternary operator.
4. Practice spaceship operator.

---

# Quiz

<details>
<summary>Which operator concatenates strings?</summary>

```text
.
```

</details>

---

<details>
<summary>Which operator checks identical values?</summary>

```text
===
```

</details>

---

<details>
<summary>Which operator provides default values?</summary>

```text
??
```

</details>

---

# References

https://www.php.net/manual/en/language.operators.php

---

# Next Chapter

➡ PHP Conditions
