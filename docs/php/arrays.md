---
title: PHP Arrays
sidebar_label: "15. Arrays"
sidebar_position: 15
description: Learn PHP Arrays in complete detail including indexed arrays, associative arrays, multidimensional arrays, array functions, performance and real-world PocketMine examples.
---

# PHP Arrays

Arrays are one of the most important data structures in PHP.

An array allows us to store multiple values inside a single variable.

Without arrays, many applications would be nearly impossible to build.

---

# Why Arrays Matter

Arrays are used everywhere:

✅ Online Players

✅ Configuration Files

✅ Database Results

✅ JSON Responses

✅ APIs

✅ Inventories

✅ Permissions

✅ Caches

✅ Network Packets

✅ PocketMine Plugins

---

# Example

Instead of:

```php
$player1 = "Steve";
$player2 = "Alex";
$player3 = "Aayan";
```

We can use:

```php
$players = [
    "Steve",
    "Alex",
    "Aayan"
];
```

---

# Memory Representation

```text
players
│
├── [0] → Steve
├── [1] → Alex
└── [2] → Aayan
```

---

# Types of Arrays

PHP supports:

1. Indexed Arrays
2. Associative Arrays
3. Multidimensional Arrays

---

# Indexed Arrays

Indexed arrays use numeric indexes.

---

## Creating Arrays

```php
$players = [
    "Steve",
    "Alex",
    "Aayan"
];
```

---

## Accessing Elements

```php
echo $players[0];
```

Output:

```text
Steve
```

---

```php
echo $players[2];
```

Output:

```text
Aayan
```

---

# Adding Elements

```php
$players[] = "Notch";
```

---

Equivalent:

```php
$players[3] = "Notch";
```

---

# Modifying Elements

```php
$players[1] = "Herobrine";
```

---

# Removing Elements

```php
unset(
    $players[1]
);
```

---

# Associative Arrays

Associative arrays use keys.

---

## Example

```php
$player = [
    "name" => "Aayan",
    "coins" => 5000,
    "rank" => "VIP"
];
```

---

## Accessing Values

```php
echo $player["name"];
```

Output:

```text
Aayan
```

---

```php
echo $player["coins"];
```

---

# Memory Representation

```text
player
│
├── name → Aayan
├── coins → 5000
└── rank → VIP
```

---

# Modifying Values

```php
$player["coins"] = 10000;
```

---

# Adding Values

```php
$player["kills"] = 150;
```

---

# Multidimensional Arrays

Arrays inside arrays.

---

## Example

```php
$players = [

    [
        "name" => "Steve",
        "coins" => 100
    ],

    [
        "name" => "Alex",
        "coins" => 500
    ]

];
```

---

## Accessing

```php
echo $players[0]["name"];
```

Output:

```text
Steve
```

---

# Real World Example

Database results:

```php
$users = [

    [
        "id" => 1,
        "name" => "Aayan"
    ],

    [
        "id" => 2,
        "name" => "Steve"
    ]

];
```

---

# Creating Arrays

---

## array()

```php
$data = array(
    1,
    2,
    3
);
```

---

## Short Syntax

```php
$data = [
    1,
    2,
    3
];
```

Recommended.

---

# Array Functions

PHP provides hundreds of array functions.

---

# Count Elements

## count()

```php
echo count(
    $players
);
```

---

## sizeof()

Alias of count.

---

# Check Existence

---

## isset()

```php
isset(
    $player["name"]
);
```

---

## array_key_exists()

```php
array_key_exists(
    "name",
    $player
);
```

---

# Search Arrays

---

## in_array()

```php
in_array(
    "Steve",
    $players
);
```

---

## array_search()

```php
array_search(
    "Steve",
    $players
);
```

Returns index.

---

# Add Elements

---

## array_push()

```php
array_push(
    $players,
    "Notch"
);
```

---

Better:

```php
$players[] = "Notch";
```

---

# Remove Elements

---

## array_pop()

Removes last element.

---

## array_shift()

Removes first element.

---

## array_unshift()

Adds to beginning.

---

# Merge Arrays

---

## array_merge()

```php
$result =
array_merge(
    $a,
    $b
);
```

---

## Spread Operator

PHP 7.4+

```php
$data = [
    ...$a,
    ...$b
];
```

---

# Unique Values

```php
array_unique(
    $players
);
```

---

# Reverse Arrays

```php
array_reverse(
    $players
);
```

---

# Slice Arrays

```php
array_slice(
    $players,
    0,
    2
);
```

---

# Remove Section

```php
array_splice(
    $players,
    1,
    2
);
```

---

# Sorting Arrays

---

## sort()

Ascending.

```php
sort(
    $numbers
);
```

---

## rsort()

Descending.

---

## asort()

Associative ascending.

---

## arsort()

Associative descending.

---

## ksort()

Sort by keys.

---

## krsort()

Reverse key sort.

---

# Custom Sorting

```php
usort(
    $players,
    function (
        $a,
        $b
    ) {

        return
            $a["coins"]
            <=>
            $b["coins"];

    }
);
```

---

# Array Mapping

---

## array_map()

```php
$numbers =
array_map(

    fn($n) => $n * 2,

    [1,2,3]

);
```

Output:

```php
[2,4,6]
```

---

# Array Filtering

---

## array_filter()

```php
$numbers =
array_filter(

    [1,2,3,4],

    fn($n)
        => $n % 2 === 0

);
```

Output:

```php
[2,4]
```

---

# Array Reduction

---

## array_reduce()

```php
$total =
array_reduce(

    [1,2,3],

    fn($c, $n)
        => $c + $n,

    0

);
```

Output:

```text
6
```

---

# Getting Keys

```php
array_keys(
    $player
);
```

---

# Getting Values

```php
array_values(
    $player
);
```

---

# Flip Keys and Values

```php
array_flip(
    $array
);
```

---

# Combine Arrays

```php
array_combine(
    $keys,
    $values
);
```

---

# Chunk Arrays

```php
array_chunk(
    $players,
    10
);
```

Useful for pagination.

---

# Walk Arrays

```php
array_walk(

    $players,

    function (
        $value
    ) {

        echo $value;

    }

);
```

---

# Destructuring Arrays

PHP 7+

```php
[
    $name,
    $rank
] = [
    "Aayan",
    "VIP"
];
```

---

# Associative Destructuring

```php
[
    "name" => $name,
    "rank" => $rank
] = $player;
```

---

# Nested Arrays

```php
$config = [

    "database" => [

        "host" => "127.0.0.1",
        "port" => 3306

    ]

];
```

---

Access:

```php
$config
["database"]
["host"];
```

---

# JSON and Arrays

```php
$json =
json_encode(
    $array
);
```

---

```php
$data =
json_decode(
    $json,
    true
);
```

---

# Array Performance

PHP arrays are extremely powerful but consume memory.

---

# Internal Structure

PHP arrays are implemented as:

```text
Ordered Hash Tables
```

This makes lookups very fast.

---

# Complexity

| Operation | Complexity |
|------------|------------|
| Lookup | O(1) |
| Insert | O(1) |
| Search | O(n) |
| Sort | O(n log n) |

---

# Real World PocketMine Examples

---

# Online Players

```php
$players =
$this
->getServer()
->getOnlinePlayers();
```

---

# Config Data

```php
$data =
$config
->getAll();
```

---

# Cache System

```php
private array
$cache = [];
```

---

# Economy Storage

```php
private array
$money = [];
```

---

# Permissions

```php
private array
$permissions = [

    "admin" => [
        "*"
    ]

];
```

---

# Scoreboards

```php
private array
$scoreboards = [];
```

---

# Packet Data

```php
$data = [

    "x" => 100,
    "y" => 64,
    "z" => 100
];
```

---

# Common Mistakes

---

## Accessing Missing Keys

❌

```php
echo
$player["money"];
```

Produces:

```text
Undefined array key
```

---

Better:

```php
$money =
$player["money"]
?? 0;
```

---

## Modifying During foreach

❌

```php
foreach (
    $players as $player
) {

    unset(
        $players[0]
    );

}
```

---

## Deep Nesting

Avoid:

```php
$data
["a"]
["b"]
["c"]
["d"];
```

Use objects when possible.

---

# Best Practices

✅ Use descriptive keys.

---

✅ Prefer:

```php
??
```

for missing values.

---

✅ Use array_map and array_filter.

---

✅ Avoid unnecessary nesting.

---

✅ Type your properties.

```php
private array
$players = [];
```

---

# Mini Project

Create:

```php
$player = [

    "name" => "Aayan",
    "rank" => "VIP",
    "coins" => 1000,
    "kills" => 50

];
```

Display all information.

---

# Exercises

---

## Exercise 1

Create indexed array.

---

## Exercise 2

Create associative array.

---

## Exercise 3

Sort player coins.

---

## Exercise 4

Filter even numbers.

---

## Exercise 5

Use array_map to double values.

---

# Challenge

Create an economy storage:

```php
$players = [

    "Aayan" => [
        "money" => 5000,
        "rank" => "VIP"
    ],

    "Steve" => [
        "money" => 1000,
        "rank" => "Player"
    ]

];
```

Implement:

```php
addMoney()
removeMoney()
setRank()
```

---

# Quiz

### Which function counts elements?

<details>
<summary>Answer</summary>

count()

</details>

---

### Which function filters arrays?

<details>
<summary>Answer</summary>

array_filter()

</details>

---

### Which function transforms arrays?

<details>
<summary>Answer</summary>

array_map()

</details>

---

### Which operator safely gets values?

<details>
<summary>Answer</summary>

??

</details>

---

# References

PHP Arrays:

https://www.php.net/manual/en/language.types.array.php

Array Functions:

https://www.php.net/manual/en/ref.array.php

---

# Next Chapter

➡ PHP Superglobals
