---
title: PHP Constants
sidebar_label: "6. Constants"
sidebar_position: 6
description: Learn PHP constants, magic constants, and best practices.
---

# PHP Constants

Constants are variables whose values **cannot be changed once defined**.

Unlike normal variables, constants:

✅ Cannot be reassigned  
✅ Do not use `$` sign  
✅ Usually store configuration values  
✅ Are available globally

---

# Why Use Constants?

Constants are useful for storing:

- Application Name
- Version Numbers
- Database Information
- API URLs
- Plugin Information
- Configuration Values

---

# Creating Constants

PHP provides two ways:

1. `define()`
2. `const`

---

# Using define()

Syntax:

```php
define("NAME", "VALUE");
```

Example:

```php
define("SERVER_NAME", "ZyroNetwork");

echo SERVER_NAME;
```

Output:

```text
ZyroNetwork
```

---

# Using const

```php
const VERSION = "1.0.0";

echo VERSION;
```

Output:

```text
1.0.0
```

---

# Difference Between define() and const

| Feature | define() | const |
|----------|-----------|--------|
| Runtime Definition | ✅ | ❌ |
| Inside Classes | ❌ | ✅ |
| Arrays Supported | ✅ | ✅ |
| Conditional Creation | ✅ | ❌ |

---

# Naming Convention

Constants are usually written in:

```php
UPPER_SNAKE_CASE
```

Example:

```php
const PLUGIN_VERSION = "1.0.0";
const MAX_PLAYERS = 100;
```

---

# Invalid Example

```php
const version = "1.0";
```

This works but is not recommended.

---

# Constants Are Immutable

```php
const VERSION = "1.0";

VERSION = "2.0";
```

Output:

```text
Fatal Error
```

---

# Constants Are Global

```php
const APP_NAME = "Zyro";

function test() {
    echo APP_NAME;
}
```

Output:

```text
Zyro
```

---

# Constant Arrays

```php
const RANKS = [
    "Player",
    "VIP",
    "Admin"
];

print_r(RANKS);
```

---

# Class Constants

```php
class Server {

    public const VERSION = "1.0";
}
```

Usage:

```php
echo Server::VERSION;
```

---

# Final Constants

```php
final class Config {

    public const VERSION = "1.0";
}
```

---

# PocketMine Example

```php
class Main extends PluginBase {

    public const PREFIX =
        "§6Zyro §8» ";
}
```

Usage:

```php
$player->sendMessage(
    self::PREFIX . "Welcome!"
);
```

---

# Magic Constants

PHP provides predefined constants.

---

# __LINE__

Returns current line number.

```php
echo __LINE__;
```

Output:

```text
25
```

---

# __FILE__

Returns current file path.

```php
echo __FILE__;
```

---

# __DIR__

Returns current directory.

```php
echo __DIR__;
```

---

# __FUNCTION__

Returns function name.

```php
function test() {
    echo __FUNCTION__;
}
```

Output:

```text
test
```

---

# __CLASS__

Returns class name.

```php
class User {

    public function test() {
        echo __CLASS__;
    }
}
```

---

# __METHOD__

Returns full method.

```php
User::test
```

---

# PHP Built-in Constants

```php
PHP_VERSION
PHP_OS
PHP_INT_MAX
PHP_EOL
DIRECTORY_SEPARATOR
```

Example:

```php
echo PHP_VERSION;
```

---

# Real World Example

```php
const API_URL =
"https://api.zyro.network";
```

```php
const DATABASE_VERSION =
"2.1";
```

```php
const DISCORD_INVITE =
"https://discord.gg/xxxxx";
```

---

# Best Practices

✅ Use constants for configuration.

✅ Use uppercase names.

✅ Keep constants meaningful.

---

# Bad Example

```php
const A = 1;
const X = "abc";
```

---

# Good Example

```php
const SERVER_PORT = 19132;

const DEFAULT_LANGUAGE =
"en_US";
```

---

# Exercises

## Exercise 1

Create:

```php
const NAME = "Aayan";
```

---

## Exercise 2

Create:

```php
const SERVER = "ZyroNetwork";
const VERSION = "1.0.0";
```

---

## Exercise 3

Print:

```php
PHP_VERSION
PHP_OS
```

---

# Quiz

### Can constants be changed?

<details>
<summary>Answer</summary>

No.
Constants are immutable.

</details>

---

### Which symbol is used?

<details>
<summary>Answer</summary>

Constants do NOT use `$`.

</details>

---

# Challenge

Create a plugin information file:

```php
const PLUGIN_NAME =
"ZyroCore";

const PLUGIN_VERSION =
"1.0.0";

const API_VERSION =
"5.0.0";
```

---

# Useful Links

Official Documentation:

https://www.php.net/manual/en/language.constants.php

Magic Constants:

https://www.php.net/manual/en/language.constants.magic.php

---

# Next Chapter

➡ PHP Data Types
