---
title: PHP Introduction
sidebar_label: 1. Introduction
sidebar_position: 1
---

# PHP Introduction

Welcome to the definitive guide to PHP for PocketMine-MP plugin development. Whether you're an absolute beginner or migrating from another language, this guide will build your foundational knowledge of PHP 8.1+.

## What is PHP?

PHP (Recursive acronym for *PHP: Hypertext Preprocessor*) is a widely-used open source general-purpose scripting language. While traditionally used for web development, PHP's robust OOP (Object-Oriented Programming) system, speed improvements in PHP 7 and 8, and dynamic typing make it the perfect backbone for **PocketMine-MP**, the leading custom server software for Minecraft: Bedrock Edition.

:::info Why PHP for Game Servers?
PocketMine-MP chose PHP because it is accessible, rapidly prototyped, and highly dynamic. With the introduction of PHP 8, the language gained JIT (Just-In-Time) compilation and strict typing features, making it as robust as many compiled languages while retaining the ease of a scripting language.
:::

## Installing PHP 8.1+

Before writing code, you need PHP installed on your machine. PocketMine-MP requires PHP 8.1 or higher (currently recommending PHP 8.2).

### Windows
The easiest way to get PHP on Windows for PMMP development is downloading the pre-compiled PHP binaries provided by the PMMP team.
1. Download the [PocketMine-MP Windows PHP Binary](https://github.com/pmmp/PHP-Binaries).
2. Extract it to `C:\php`.
3. Add `C:\php\bin` to your system's `PATH` environment variable.

### Linux (Ubuntu/Debian)
```bash
sudo add-apt-repository ppa:ondrej/php
sudo apt update
sudo apt install php8.2-cli php8.2-mbstring php8.2-xml php8.2-curl php8.2-yaml
```

Verify your installation:
```bash
php -v
```

## Your First Script

Create a file named `hello.php`. All PHP code must be wrapped in `<?php` tags.

```php
<?php
declare(strict_types=1);

echo "Hello, PocketMine Developer!\n";
```

Run it from your terminal:
```bash
php hello.php
```

:::tip strict_types
Always include `declare(strict_types=1);` at the top of your PHP files. It forces PHP to throw a `TypeError` if you pass the wrong data type to a function, which is critical for writing safe PMMP plugins.
:::

## Variables and Data Types

In PHP, variables start with the `$` sign, followed by the name of the variable. PHP is loosely typed, meaning you don't *have* to declare the data type, but with PHP 8, we often use strict typing.

### Core Data Types

```php
<?php
// String
$playerName = "Steve";

// Integer
$playerHealth = 20;

// Float (floating point numbers)
$playerSpeed = 1.5;

// Boolean
$isOnline = true;

// Array (can hold multiple values)
$inventory = ["Sword", "Apple", "Dirt"];

// Null (represents a variable with no value)
$currentTarget = null;
```

### Type Casting

Sometimes you need to force a variable into a specific type.

```php
$stringNumber = "42";
$actualNumber = (int) $stringNumber;

$floatVal = 3.14;
$intVal = (int) $floatVal; // Becomes 3
```

## Operators

### Arithmetic Operators
```php
$a = 10;
$b = 3;
echo $a + $b; // 13
echo $a - $b; // 7
echo $a * $b; // 30
echo $a / $b; // 3.3333
echo $a % $b; // 1 (Modulo: remainder of division)
echo $a ** $b; // 1000 (Exponentiation)
```

### Comparison Operators
```php
$x = 100;
$y = "100";

var_dump($x == $y);  // true (equal value)
var_dump($x === $y); // false (identical: equal value AND equal type)
var_dump($x != $y);  // false (not equal)
var_dump($x !== $y); // true (not identical)
```

:::danger Equal vs Identical
Always prefer `===` over `==` to prevent unexpected type juggling bugs in your plugins!
:::

### Logical Operators
```php
$isVip = true;
$hasMoney = false;

if ($isVip && $hasMoney) {
    // Both must be true
}

if ($isVip || $hasMoney) {
    // Either can be true
}

if (!$hasMoney) {
    // NOT operator (true if $hasMoney is false)
}
```

## Control Flow

### If, ElseIf, Else

```php
$health = 5;

if ($health > 15) {
    echo "Healthy";
} elseif ($health > 5) {
    echo "Injured";
} else {
    echo "Near death!";
}
```

### Match Expression (PHP 8+)

The `match` expression is a safer, cleaner alternative to `switch`.

```php
$rank = "admin";

$prefix = match($rank) {
    "owner" => "[Owner]",
    "admin" => "[Admin]",
    "vip" => "[VIP]",
    default => "[Player]"
};
```

## Loops

### For Loop
Use when you know exactly how many times you want to loop.
```php
for ($i = 0; $i < 5; $i++) {
    echo "Count: $i\n";
}
```

### Foreach Loop
The most common loop in plugin development. Used exclusively for iterating over arrays.
```php
$players = ["Steve", "Alex", "Herobrine"];

foreach ($players as $player) {
    echo "Welcome, $player!\n";
}

// With keys
$stats = ["kills" => 10, "deaths" => 2];
foreach ($stats as $key => $value) {
    echo "$key: $value\n";
}
```

### While Loop
Loops as long as a condition is true.
```php
$mana = 10;
while ($mana > 0) {
    echo "Casting spell...\n";
    $mana--;
}
```

## Functions

Functions encapsulate reusable code. In modern PHP, you should always declare parameter types and return types.

```php
function calculateDamage(int $baseDamage, float $multiplier): float {
    return $baseDamage * $multiplier;
}

// Default values
function broadcastMessage(string $message, bool $usePrefix = true): void {
    if ($usePrefix) {
        $message = "[Server] " . $message;
    }
    echo $message;
}
```

## Arrays in Depth

PHP arrays are actually ordered maps. They can be used as lists, hash tables, dictionaries, or stacks.

### Indexed Arrays
```php
$items = ["Sword", "Shield"];
array_push($items, "Bow"); // Adds to the end
$items[] = "Arrow"; // Shorthand for array_push
```

### Associative Arrays
Key-value pairs.
```php
$playerConfig = [
    "name" => "Steve",
    "money" => 1500,
    "isBanned" => false
];

echo $playerConfig["money"]; // 1500
```

### Multidimensional Arrays
```php
$factions = [
    "Knights" => [
        "leader" => "Arthur",
        "power" => 9000
    ],
    "Rogues" => [
        "leader" => "Robin",
        "power" => 4000
    ]
];

echo $factions["Knights"]["leader"]; // Arthur
```

## Essential String & Array Functions Reference

Mastering these built-in functions will save you hundreds of hours of coding.

| Function | Description | Example |
|---|---|---|
| `strlen($str)` | Returns length of string | `strlen("Hello")` -> 5 |
| `strpos($str, $search)` | Finds position of first occurrence | `strpos("abc", "b")` -> 1 |
| `str_replace($search, $replace, $str)`| Replaces all occurrences | `str_replace("a", "o", "cat")` -> "cot" |
| `substr($str, $start, $length)` | Returns part of a string | `substr("Hello", 1, 3)` -> "ell" |
| `explode($delim, $str)` | Splits string into array | `explode(" ", "A B")` -> ["A", "B"] |
| `implode($glue, $arr)` | Joins array elements into string | `implode("-", ["A", "B"])` -> "A-B" |
| `strtolower($str)` | Converts string to lowercase | `strtolower("ABC")` -> "abc" |
| `strtoupper($str)` | Converts string to uppercase | `strtoupper("abc")` -> "ABC" |
| `trim($str)` | Removes whitespace from ends | `trim(" a ")` -> "a" |
| `count($arr)` | Counts elements in array | `count([1, 2])` -> 2 |
| `in_array($needle, $arr)` | Checks if value exists in array | `in_array("a", ["a", "b"])` -> true |
| `array_key_exists($key, $arr)` | Checks if key exists in array | `array_key_exists("name", $arr)` -> bool |
| `array_merge($arr1, $arr2)` | Merges one or more arrays | `array_merge([1], [2])` -> [1, 2] |
| `array_keys($arr)` | Returns all keys of an array | `array_keys(["a" => 1])` -> ["a"] |
| `array_values($arr)` | Returns all values of an array | `array_values(["a" => 1])` -> [1] |
| `array_map($callback, $arr)` | Applies callback to elements | `array_map('strtolower', ["A"])` -> ["a"] |
| `array_filter($arr, $callback)` | Filters elements using callback | `array_filter([1, 2], fn($n) => $n > 1)` |
| `array_shift($arr)` | Removes and returns first element | `$first = array_shift($arr)` |
| `array_pop($arr)` | Removes and returns last element | `$last = array_pop($arr)` |
| `is_array($var)` | Checks if variable is an array | `is_array($arr)` -> true |

## Includes and Requires

To split your code across multiple files, you use includes.

```php
// config.php
<?php
$dbHost = "localhost";
```

```php
// main.php
<?php
require_once "config.php";
echo "Connecting to " . $dbHost;
```
- `include`: Throws a warning if file not found, script continues.
- `require`: Throws a fatal error if file not found, script stops.
- `require_once`: Checks if the file has already been included, and if so, doesn't include it again. This is what you should use 99% of the time.

---

import Quiz from '@site/src/components/Quiz';

<Quiz questions={[
  {
    question: "Which of the following is the correct way to declare strict typing in PHP?",
    options: ["strict_types(true);", "declare(strict_types=1);", "use strict;", "php_strict_mode = 1;"],
    correctAnswer: 1,
    explanation: "declare(strict_types=1); must be the very first statement in your PHP file to enforce strict type checking."
  },
  {
    question: "What is the result of '10' === 10 ?",
    options: ["true", "false", "null", "TypeError"],
    correctAnswer: 1,
    explanation: "The === operator checks for identical value AND identical type. Since one is a string and the other is an integer, it returns false."
  },
  {
    question: "Which loop is specifically designed to iterate over arrays?",
    options: ["for", "while", "do-while", "foreach"],
    correctAnswer: 3,
    explanation: "The foreach loop provides an easy way to iterate over arrays and objects without needing to manage a counter variable manually."
  },
  {
    question: "Which function splits a string into an array based on a delimiter?",
    options: ["implode", "str_split", "explode", "substr"],
    correctAnswer: 2,
    explanation: "explode() takes a delimiter string and a target string, and splits the target into an array of substrings."
  },
  {
    question: "What does array_key_exists() do?",
    options: ["Returns the value of a key", "Checks if a value exists inside an array", "Checks if a specific index/key exists in an associative array", "Creates a new key in an array"],
    correctAnswer: 2,
    explanation: "array_key_exists() checks if a specified key or index exists in an array, returning true or false."
  },
  {
    question: "What is the modern PHP 8+ alternative to the switch statement?",
    options: ["select", "match", "case_when", "evaluate"],
    correctAnswer: 1,
    explanation: "The match expression is similar to switch but provides safer strict comparisons and can return a value directly."
  },
  {
    question: "How do you add a new item to the end of an indexed array?",
    options: ["$array[] = 'item';", "$array.add('item');", "array_unshift($array, 'item');", "$array += 'item';"],
    correctAnswer: 0,
    explanation: "$array[] = 'item' is the shorthand for array_push(), adding the element to the end of the array."
  },
  {
    question: "If a function does not return any value, what should its return type be?",
    options: ["null", "empty", "void", "false"],
    correctAnswer: 2,
    explanation: "The 'void' return type explicitly declares that the function will not return any data."
  },
  {
    question: "What is the difference between require and include?",
    options: ["require is faster than include", "require stops the script on failure, include only warns", "include stops the script on failure, require only warns", "There is no difference"],
    correctAnswer: 1,
    explanation: "If a file is missing, require throws a Fatal Error halting execution, whereas include throws a Warning and continues execution."
  },
  {
    question: "What data type does the function in_array() return?",
    options: ["integer", "string", "boolean", "array"],
    correctAnswer: 2,
    explanation: "in_array() returns a boolean (true or false) indicating whether the needle was found in the haystack."
  }
]} />
