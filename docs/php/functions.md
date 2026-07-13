---
title: PHP Functions
sidebar_label: Functions
sidebar_position: 12
description: Learn PHP functions from beginner to advanced level with real-world examples and PocketMine use cases.
---

# PHP Functions

Functions are reusable blocks of code that perform specific tasks.

Instead of writing the same code repeatedly, we can place it inside a function and call it whenever needed.

Functions are one of the most important concepts in programming.

---

# Why Use Functions?

Functions provide:

✅ Code Reusability

✅ Better Organization

✅ Easier Maintenance

✅ Cleaner Architecture

✅ Better Testing

✅ Reduced Bugs

---

# Without Functions

```php
echo "Welcome Aayan";
echo "Welcome Steve";
echo "Welcome Alex";
```

---

# With Functions

```php
function welcome(string $name): void {
    echo "Welcome {$name}";
}

welcome("Aayan");
welcome("Steve");
welcome("Alex");
```

---

# Function Syntax

```php
function functionName() {

}
```

Example:

```php
function hello() {
    echo "Hello World";
}
```

Calling:

```php
hello();
```

Output:

```text
Hello World
```

---

# Function Declaration

```php
function greet() {
    echo "Hello";
}
```

---

# Function Invocation

```php
greet();
```

---

# Function Parameters

Parameters allow us to pass data.

Example:

```php
function greet($name) {
    echo "Hello {$name}";
}

greet("Aayan");
```

Output:

```text
Hello Aayan
```

---

# Multiple Parameters

```php
function add(
    $a,
    $b
) {
    echo $a + $b;
}

add(10, 5);
```

Output:

```text
15
```

---

# Typed Parameters

Modern PHP supports strict typing.

```php
function add(
    int $a,
    int $b
) {
    return $a + $b;
}
```

---

# Return Values

Functions can return values.

Example:

```php
function square(
    int $number
) {

    return $number * $number;

}

echo square(5);
```

Output:

```text
25
```

---

# Void Functions

A function that returns nothing.

```php
function sendMessage(): void {

    echo "Hello";

}
```

---

# Return Type Declarations

```php
function getName(): string {

    return "Aayan";

}
```

---

# Integer Return

```php
function getAge(): int {

    return 18;

}
```

---

# Boolean Return

```php
function isOnline(): bool {

    return true;

}
```

---

# Nullable Return Types

```php
function getPlayer():
?string {

    return null;

}
```

---

# Union Types

PHP 8+

```php
function getData():
string|int {

    return "Hello";

}
```

---

# Default Parameters

```php
function greet(
    string $name = "Guest"
) {

    echo "Hello {$name}";

}
```

Calling:

```php
greet();
```

Output:

```text
Hello Guest
```

---

# Named Arguments

PHP 8+

```php
function createUser(
    string $name,
    int $age
) {

}
```

Calling:

```php
createUser(
    age: 18,
    name: "Aayan"
);
```

---

# Variable Number of Arguments

```php
function sum(
    ...$numbers
) {

    return array_sum(
        $numbers
    );

}
```

Example:

```php
sum(1,2,3,4);
```

Output:

```text
10
```

---

# Variadic Parameters

```php
function broadcast(
    string ...$players
) {

}
```

---

# Pass By Value

Default behavior.

```php
function test(
    int $x
) {

    $x++;

}

$a = 5;

test($a);

echo $a;
```

Output:

```text
5
```

---

# Pass By Reference

```php
function increase(
    int &$x
) {

    $x++;

}
```

Example:

```php
$a = 5;

increase($a);

echo $a;
```

Output:

```text
6
```

---

# Anonymous Functions

Functions without names.

```php
$hello = function() {

    echo "Hello";

};

$hello();
```

---

# Closures

Closures can access outer variables.

```php
$name = "Aayan";

$fn = function() use (
    $name
) {

    echo $name;

};

$fn();
```

---

# Arrow Functions

PHP 7.4+

```php
$add =
fn($a, $b)
=> $a + $b;
```

---

# Recursive Functions

Functions calling themselves.

---

# Factorial Example

```php
function factorial(
    int $n
): int {

    if ($n <= 1) {
        return 1;
    }

    return $n *
        factorial(
            $n - 1
        );
}
```

---

# Function Scope

Variables inside functions are local.

```php
function test() {

    $name = "Aayan";

}
```

Outside:

```php
echo $name;
```

Produces:

```text
Undefined Variable
```

---

# Global Variables

```php
$name = "Aayan";

function test() {

    global $name;

    echo $name;

}
```

---

# Static Variables

Static variables preserve values.

```php
function counter() {

    static $count = 0;

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
123
```

---

# Function Existence

```php
function_exists(
    "hello"
);
```

---

# Callable Type

```php
function execute(
    callable $callback
) {

    $callback();

}
```

---

# Callback Example

```php
execute(
    function() {

        echo "Executed";

    }
);
```

---

# First Class Callables

PHP 8.1+

```php
$fn = strlen(...);
```

---

# Internal PHP Functions

PHP already provides thousands of functions.

Examples:

```php
strlen()
count()
explode()
implode()
array_map()
json_encode()
```

---

# Real World Example

---

## Sending Messages

```php
function sendPrefix(
    Player $player,
    string $message
): void {

    $player->sendMessage(
        "§6Zyro §8» §f" .
        $message
    );

}
```

---

## Economy Example

```php
function addMoney(
    string $player,
    float $amount
): void {

}
```

---

## API Example

```php
function jsonResponse(
    array $data
): string {

    return json_encode(
        $data
    );

}
```

---

# PocketMine Example

```php
public function onEnable():
void {

    $this->loadConfigs();

    $this->registerCommands();

}
```

---

# Why Functions Matter in PMMP

PocketMine heavily uses functions:

- Event Listeners
- Commands
- Async Tasks
- Packet Handlers
- Utilities
- Database Methods

---

# Common Mistakes

---

## Missing Return

❌

```php
function test():

int {

}
```

---

Produces:

```text
TypeError
```

---

## Wrong Types

❌

```php
function add(
    int $a
) {

}

add("hello");
```

---

## Too Many Parameters

❌

```php
function createPlayer(
    $a,
    $b,
    $c,
    $d,
    $e,
    $f,
    $g
)
```

Consider using objects instead.

---

# Best Practices

✅ Always use type declarations.

```php
function getName():
string
```

---

✅ Prefer small functions.

---

✅ One function should do one thing.

---

✅ Use meaningful names.

Good:

```php
calculateDamage()
savePlayerData()
broadcastMessage()
```

Bad:

```php
test()
doStuff()
abc()
```

---

# Exercises

---

## Exercise 1

Create:

```php
function hello()
```

---

## Exercise 2

Create:

```php
function add(
    int $a,
    int $b
)
```

---

## Exercise 3

Create:

```php
function isAdult(
    int $age
): bool
```

---

## Exercise 4

Create:

```php
function factorial(
    int $n
)
```

---

# Mini Project

Create:

```php
registerPlayer()
banPlayer()
sendStaffMessage()
addMoney()
removeMoney()
```

---

# Challenge

Create a utility class:

```php
MathUtils
StringUtils
PlayerUtils
```

Implement reusable functions.

---

# Quiz

### Which keyword returns a value?

<details>
<summary>Answer</summary>

return

</details>

---

### Which symbol passes by reference?

<details>
<summary>Answer</summary>

&

</details>

---

### Which PHP version introduced Arrow Functions?

<details>
<summary>Answer</summary>

PHP 7.4

</details>

---

# References

Official Documentation:

https://www.php.net/manual/en/functions.user-defined.php

Anonymous Functions:

https://www.php.net/manual/en/functions.anonymous.php

Arrow Functions:

https://www.php.net/manual/en/functions.arrow.php

---

# Next Chapter

➡ PHP Variable Scope
