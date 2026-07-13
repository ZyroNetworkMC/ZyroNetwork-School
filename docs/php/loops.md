---
title: PHP Loops
sidebar_label: Loops
sidebar_position: 11
description: Learn PHP loops including for, while, do-while, foreach and loop control statements.
---

# PHP Loops

Loops allow us to execute a block of code multiple times.

Without loops, programmers would need to write the same code repeatedly.

Loops are one of the most important concepts in programming.

---

# Why Loops Matter

Loops are used everywhere:

✅ Displaying online players

✅ Reading database records

✅ Processing APIs

✅ Generating scoreboards

✅ Handling inventories

✅ Iterating configurations

✅ Network packet handling

---

# Real World Example

Suppose there are 100 players online.

Without loops:

```php
echo $players[0];
echo $players[1];
echo $players[2];
```

This is impossible to maintain.

Instead:

```php
foreach ($players as $player) {
    echo $player;
}
```

---

# Types of Loops

PHP provides:

1. for
2. while
3. do-while
4. foreach

---

# The for Loop

Used when the number of iterations is known.

Syntax:

```php
for (
    initialization;
    condition;
    increment
) {

}
```

---

# Example

```php
for (
    $i = 1;
    $i <= 5;
    $i++
) {
    echo $i;
}
```

Output:

```text
12345
```

---

# Execution Flow

```text
Initialize
     ↓
Check Condition
     ↓
Execute Code
     ↓
Increment
     ↓
Repeat
```

---

# Example With Text

```php
for (
    $i = 1;
    $i <= 3;
    $i++
) {

    echo "Hello";
}
```

Output:

```text
Hello
Hello
Hello
```

---

# Decrement Loop

```php
for (
    $i = 10;
    $i >= 1;
    $i--
) {

    echo $i;
}
```

Output:

```text
10987654321
```

---

# Infinite Loop

⚠ Dangerous.

```php
for (;;) {

}
```

Never do this unless necessary.

---

# Multiplication Table

```php
for (
    $i = 1;
    $i <= 10;
    $i++
) {

    echo 5 * $i;
}
```

---

# while Loop

Used when the number of iterations is unknown.

Syntax:

```php
while (condition) {

}
```

---

# Example

```php
$i = 1;

while ($i <= 5) {

    echo $i;

    $i++;
}
```

Output:

```text
12345
```

---

# Execution Flow

```text
Check Condition
      ↓
Execute Code
      ↓
Update Variables
      ↓
Repeat
```

---

# Example

```php
$health = 20;

while ($health > 0) {

    echo $health;

    $health--;
}
```

---

# Infinite While Loop

```php
while (true) {

}
```

Common in:

- Servers
- Network Applications
- Game Loops

---

# do-while Loop

Executes code at least once.

Syntax:

```php
do {

}
while(condition);
```

---

# Example

```php
$i = 1;

do {

    echo $i;

    $i++;

}
while ($i <= 5);
```

---

# Difference Between While and Do While

---

## While

Checks first.

```text
Condition
 ↓
Execute
```

---

## Do While

Executes first.

```text
Execute
 ↓
Condition
```

---

# Example

```php
$i = 10;

do {

    echo "Hello";

}
while ($i < 5);
```

Output:

```text
Hello
```

Executed once.

---

# foreach Loop

Most important loop in PHP.

Used to iterate arrays.

---

# Example

```php
$players = [
    "Steve",
    "Alex",
    "Aayan"
];

foreach (
    $players as $player
) {

    echo $player;
}
```

Output:

```text
Steve
Alex
Aayan
```

---

# Associative Arrays

```php
$user = [
    "name" => "Aayan",
    "age" => 18
];

foreach (
    $user as $key => $value
) {

    echo $key;
    echo $value;
}
```

Output:

```text
name Aayan
age 18
```

---

# By Reference

```php
foreach (
    $players as &$player
) {

    $player =
        strtoupper($player);
}
```

---

⚠ Always unset afterwards.

```php
unset($player);
```

---

# Nested Loops

Loops can exist inside loops.

Example:

```php
for ($i = 1; $i <= 3; $i++) {

    for ($j = 1; $j <= 3; $j++) {

        echo "$i:$j";

    }

}
```

---

# Break Statement

Stops loop execution.

Example:

```php
for ($i = 1; $i <= 10; $i++) {

    if ($i === 5) {
        break;
    }

    echo $i;
}
```

Output:

```text
1234
```

---

# Continue Statement

Skips current iteration.

```php
for ($i = 1; $i <= 5; $i++) {

    if ($i === 3) {
        continue;
    }

    echo $i;
}
```

Output:

```text
1245
```

---

# Break Levels

```php
break 2;
```

Exits multiple nested loops.

---

# Continue Levels

```php
continue 2;
```

---

# PocketMine Examples

---

## Online Players

```php
foreach (
    $this->getServer()
        ->getOnlinePlayers()
    as $player
) {

    $player->sendMessage(
        "Welcome!"
    );
}
```

---

## Config Values

```php
foreach (
    $config->getAll()
    as $key => $value
) {

}
```

---

## Scoreboard Updates

```php
foreach (
    $players as $player
) {

    $this->updateScoreboard(
        $player
    );
}
```

---

## Saving Data

```php
foreach (
    $this->playerData
    as $name => $data
) {

    $this->save($name);

}
```

---

# Performance Notes

---

## Fastest Loops

Generally:

```text
for
foreach
while
```

The difference is usually tiny.

Always prioritize readability.

---

# Common Mistakes

---

## Forgetting Increment

❌

```php
$i = 1;

while ($i <= 5) {

}
```

Infinite loop.

---

## Modifying Array During foreach

Can lead to unexpected behavior.

---

## Missing Break

```php
switch (...)
```

---

# Best Practices

✅ Use:

```php
foreach
```

for arrays.

---

✅ Use:

```php
for
```

when iteration count is known.

---

✅ Avoid unnecessary nested loops.

---

# Real Project Example

Broadcast message:

```php
foreach (
    $this->getServer()
        ->getOnlinePlayers()
    as $player
) {

    $player->sendMessage(
        "Server Restarting"
    );

}
```

---

# Exercises

---

## Exercise 1

Print numbers:

```text
1-10
```

using for loop.

---

## Exercise 2

Print:

```text
10-1
```

---

## Exercise 3

Create array:

```php
$players = [
    "Steve",
    "Alex",
    "Aayan"
];
```

Display using foreach.

---

## Exercise 4

Skip number:

```text
5
```

using continue.

---

# Challenge

Create multiplication table:

```text
1 x 1 = 1
1 x 2 = 2
```

up to:

```text
10 x 10
```

using nested loops.

---

# Quiz

### Which loop is best for arrays?

<details>
<summary>Answer</summary>

foreach

</details>

---

### Which statement skips iteration?

<details>
<summary>Answer</summary>

continue

</details>

---

### Which statement exits loop?

<details>
<summary>Answer</summary>

break

</details>

---

# Useful Links

PHP Loops:

https://www.php.net/manual/en/control-structures.for.php

While:

https://www.php.net/manual/en/control-structures.while.php

Foreach:

https://www.php.net/manual/en/control-structures.foreach.php

---

# Next Chapter

➡ PHP Functions
