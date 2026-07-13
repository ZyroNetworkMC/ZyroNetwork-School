---
title: PHP Operators
sidebar_label: Operators
sidebar_position: 9
description: Learn all PHP operators in detail.
---

# PHP Operators

Operators are symbols used to perform operations on values and variables.

Example:

```php
$a = 10;
$b = 5;

echo $a + $b;
```

Output:

```text
15
```

---

# Types of Operators

PHP supports:

1. Arithmetic Operators
2. Assignment Operators
3. Comparison Operators
4. Increment/Decrement Operators
5. Logical Operators
6. String Operators
7. Array Operators
8. Conditional Operators
9. Null Operators
10. Bitwise Operators

---

# Arithmetic Operators

| Operator | Name | Example |
|-----------|------|----------|
| + | Addition | `$a + $b` |
| - | Subtraction | `$a - $b` |
| * | Multiplication | `$a * $b` |
| / | Division | `$a / $b` |
| % | Modulus | `$a % $b` |
| ** | Exponent | `$a ** $b` |

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

## Modulus

```php
echo 10 % 3;
```

Output:

```text
1
```

Useful for:

- Even/Odd checks
- Cyclic systems
- Game mechanics

---

## Exponent

```php
echo 2 ** 4;
```

Output:

```text
16
```

---

# Assignment Operators

---

## Simple Assignment

```php
$a = 10;
```

---

## Add Assignment

```php
$a += 5;
```

Equivalent:

```php
$a = $a + 5;
```

---

## Subtract Assignment

```php
$a -= 5;
```

---

## Multiply Assignment

```php
$a *= 2;
```

---

## Divide Assignment

```php
$a /= 2;
```

---

## Concatenation Assignment

```php
$name .= " Parmar";
```

---

# Comparison Operators

These return:

```text
true
false
```

---

| Operator | Meaning |
|-----------|----------|
| == | Equal |
| === | Identical |
| != | Not Equal |
| !== | Not Identical |
| > | Greater Than |
| &lt; | Less Than |
| >= | Greater Equal |
| &lt;= | Less Equal |
| &lt;=&gt; | Spaceship |

---

# Equal Operator

```php
10 == "10"
```

Output:

```text
true
```

---

# Identical Operator

```php
10 === "10"
```

Output:

```text
false
```

Types are different.

---

⚠ Always prefer:

```php
===
```

especially in PocketMine.

---

# Spaceship Operator

```php
echo 10 <=> 5;
```

Output:

```text
1
```

Returns:

```text
-1
0
1
```

---

# Increment Operators

---

## Pre Increment

```php
++$a
```

---

## Post Increment

```php
$a++
```

---

# Logical Operators

---

## AND

```php
$a && $b
```

Both must be true.

---

## OR

```php
$a || $b
```

One must be true.

---

## NOT

```php
!$a
```

Reverses boolean.

---

# Example

```php
$isAdmin = true;
$isOnline = true;

if (
    $isAdmin &&
    $isOnline
) {

}
```

---

# String Operators

---

## Concatenation

```php
echo "Hello " . "World";
```

Output:

```text
Hello World
```

---

## Concatenation Assignment

```php
$name .= " Parmar";
```

---

# Array Operators

---

## Union

```php
$a + $b;
```

---

## Equality

```php
$a == $b;
```

---

## Identity

```php
$a === $b;
```

---

# Null Coalescing Operator

PHP 7+

```php
$username =
$_GET["user"] ?? "Guest";
```

Equivalent:

```php
if (
    isset($_GET["user"])
)
```

---

# Ternary Operator

```php
$status =
$isOnline
? "Online"
: "Offline";
```

---

# Null Safe Operator

PHP 8+

```php
$player?->getName();
```

Avoids:

```text
Call to member function on null
```

---

# Bitwise Operators

Advanced operators.

```php
&
|
^
~
<<
>>
```

Used in:

- Permissions
- Flags
- Packets
- Network Protocols

---

# PocketMine Example

```php
if (
    $player->isOnline()
    &&
    !$player->isBanned()
) {

}
```

---

# Common Mistakes

---

❌

```php
if ($rank = "admin")
```

Assignment.

---

✅

```php
if ($rank === "admin")
```

---

❌

```php
10 == "10"
```

---

✅

```php
10 === "10"
```

---

# Best Practices

✅ Prefer:

```php
===
!==
```

---

✅ Use null coalescing.

---

✅ Use parentheses.

---

# Exercises

1. Add two numbers.
2. Check if a number is even.
3. Create login conditions.
4. Use ternary operator.

---

# Quiz

### What does:

```php
10 === "10"
```

return?

<details>
<summary>Answer</summary>

false

</details>

---

### What operator joins strings?

<details>
<summary>Answer</summary>

.

</details>

---

# References

https://www.php.net/manual/en/language.operators.php

---

# Next Chapter

➡ PHP Conditions
