---
title: PHP Strings
sidebar_label: "14. Strings"
sidebar_position: 14
description: Learn PHP strings in detail including manipulation, formatting, functions and real-world examples.
---

# PHP Strings

Strings are one of the most commonly used data types in PHP.

A string is a sequence of characters.

Examples:

```php
$name = "Aayan";
$server = "ZyroNetwork";
$message = "Welcome to the server!";
```

---

# Why Strings Matter

Strings are used everywhere:

✅ Player Names

✅ Chat Messages

✅ Commands

✅ Configurations

✅ JSON APIs

✅ Database Records

✅ Discord Bots

✅ PocketMine Plugins

---

# Creating Strings

PHP provides two primary ways.

---

# Double Quotes

```php
$name = "Aayan";
```

---

# Single Quotes

```php
$name = 'Aayan';
```

---

# Difference

Double quotes support variable interpolation.

Example:

```php
$name = "Aayan";

echo "Hello $name";
```

Output:

```text
Hello Aayan
```

---

Single quotes do NOT.

```php
echo 'Hello $name';
```

Output:

```text
Hello $name
```

---

# String Length

Use:

```php
strlen()
```

Example:

```php
echo strlen("Zyro");
```

Output:

```text
4
```

---

# Unicode Strings

```php
echo strlen("नमस्ते");
```

May produce unexpected results because PHP counts bytes.

Use:

```php
mb_strlen()
```

Example:

```php
echo mb_strlen("नमस्ते");
```

---

# Concatenation

Strings can be joined using:

```php
.
```

Example:

```php
$name = "Aayan";

echo "Hello " . $name;
```

Output:

```text
Hello Aayan
```

---

# Concatenation Assignment

```php
$message = "Hello";

$message .= " World";
```

Output:

```text
Hello World
```

---

# Escape Characters

---

## New Line

```php
echo "Hello\nWorld";
```

---

## Tab

```php
echo "Hello\tWorld";
```

---

## Double Quote

```php
echo "\"Hello\"";
```

---

## Backslash

```php
echo "\\";
```

---

# Heredoc

Useful for large strings.

```php
$text = <<<TEXT
Hello
World
TEXT;
```

---

# Nowdoc

No interpolation.

```php
$text = <<<'TEXT'
Hello $name
TEXT;
```

---

# Accessing Characters

```php
$name = "Aayan";

echo $name[0];
```

Output:

```text
A
```

---

# String Functions

PHP provides hundreds of functions.

---

# strtoupper()

Converts to uppercase.

```php
echo strtoupper(
    "zyro"
);
```

Output:

```text
ZYRO
```

---

# strtolower()

```php
echo strtolower(
    "ZYRO"
);
```

Output:

```text
zyro
```

---

# ucfirst()

```php
echo ucfirst(
    "aayan"
);
```

Output:

```text
Aayan
```

---

# ucwords()

```php
echo ucwords(
    "zyro network"
);
```

Output:

```text
Zyro Network
```

---

# trim()

Removes spaces.

```php
$name = "  Aayan ";

echo trim($name);
```

---

# ltrim()

Removes left spaces.

---

# rtrim()

Removes right spaces.

---

# str_replace()

Replace text.

```php
echo str_replace(
    "Hello",
    "Hi",
    "Hello World"
);
```

Output:

```text
Hi World
```

---

# str_ireplace()

Case-insensitive replacement.

---

# strpos()

Find first occurrence.

```php
echo strpos(
    "Hello World",
    "World"
);
```

Output:

```text
6
```

---

# stripos()

Case-insensitive search.

---

# str_contains()

PHP 8+

```php
if (
    str_contains(
        $message,
        "hello"
    )
) {

}
```

---

# str_starts_with()

```php
str_starts_with(
    "PocketMine",
    "Pocket"
);
```

---

# str_ends_with()

```php
str_ends_with(
    "plugin.yml",
    ".yml"
);
```

---

# substr()

Extract portion of string.

```php
echo substr(
    "PocketMine",
    0,
    6
);
```

Output:

```text
Pocket
```

---

# explode()

Convert string into array.

```php
$data =
explode(
    ",",
    "A,B,C"
);
```

Output:

```php
[
    "A",
    "B",
    "C"
]
```

---

# implode()

Convert array into string.

```php
echo implode(
    ", ",
    [
        "A",
        "B",
        "C"
    ]
);
```

Output:

```text
A, B, C
```

---

# nl2br()

Convert new lines to HTML.

---

# wordwrap()

Wrap long strings.

---

# str_repeat()

```php
echo str_repeat(
    "=",
    20
);
```

Output:

```text
====================
```

---

# str_pad()

```php
echo str_pad(
    "VIP",
    10
);
```

---

# number_format()

```php
echo number_format(
    1500000
);
```

Output:

```text
1,500,000
```

---

# HTML Functions

---

# htmlspecialchars()

Extremely important for security.

```php
echo htmlspecialchars(
    "<script>"
);
```

Output:

```text
&lt;script&gt;
```

---

# htmlentities()

Converts special characters.

---

# String Comparison

---

## ==

```php
"abc" == "abc"
```

---

## ===

```php
"abc" === "abc"
```

---

## strcmp()

```php
strcmp(
    "abc",
    "abd"
);
```

Returns:

```text
-1
0
1
```

---

# String Interpolation

```php
$name = "Aayan";

echo "Hello {$name}";
```

Recommended syntax:

```php
{$variable}
```

---

# Variable Parsing

```php
echo "Player: {$player->getName()}";
```

---

# Multibyte Strings

For UTF-8 languages use:

```php
mb_strlen()
mb_substr()
mb_strtoupper()
```

Install extension:

```bash
sudo apt install php-mbstring
```

---

# Regular Expressions

PHP supports regex.

---

# preg_match()

```php
preg_match(
    "/hello/",
    "hello world"
);
```

---

# preg_replace()

```php
preg_replace(
    "/[0-9]/",
    "",
    "abc123"
);
```

Output:

```text
abc
```

---

# preg_split()

Split using regex.

---

# PocketMine Examples

---

# Chat Formatting

```php
$message =
"§6Zyro §8» §fHello";
```

---

# Color Codes

```php
str_replace(
    "&",
    "§",
    $message
);
```

---

# Command Parsing

```php
$args =
explode(
    " ",
    $command
);
```

---

# Config Values

```php
$prefix =
$config->get(
    "prefix"
);
```

---

# JSON APIs

```php
$json =
json_encode(
    [
        "name" => "Aayan"
    ]
);
```

---

# Validation Examples

---

# Username Length

```php
if (
    strlen($name) < 3
) {

}
```

---

# Email Check

```php
if (
    str_contains(
        $email,
        "@"
    )
) {

}
```

---

# Permission Check

```php
if (
    str_starts_with(
        $permission,
        "zyro."
    )
) {

}
```

---

# Common Mistakes

---

## Using == for Search

❌

```php
if (
    strpos(
        $text,
        "hello"
    )
)
```

Fails if result is:

```text
0
```

---

✅

```php
if (
    strpos(
        $text,
        "hello"
    ) !== false
)
```

---

## Forgetting UTF-8

❌

```php
strlen("नमस्ते")
```

---

✅

```php
mb_strlen("नमस्ते")
```

---

## Concatenating Too Much

Avoid:

```php
$a . $b . $c . $d . $e
```

Prefer:

```php
sprintf()
```

---

# Best Practices

✅ Use:

```php
str_contains()
```

instead of:

```php
strpos()
```

when possible.

---

✅ Escape HTML output.

---

✅ Use UTF-8.

---

✅ Prefer interpolation:

```php
"Hello {$name}"
```

---

# Exercises

---

## Exercise 1

Convert:

```text
zyronetwork
```

to uppercase.

---

## Exercise 2

Split:

```text
apple,banana,mango
```

using:

```php
explode()
```

---

## Exercise 3

Join array using:

```php
implode()
```

---

## Exercise 4

Replace:

```text
&
```

with:

```text
§
```

---

# Mini Project

Create a chat formatter:

```text
&6Admin:
Hello
```

Output:

```text
§6Admin:
Hello
```

---

# Challenge

Create:

```php
formatMoney()
formatPlayerName()
formatRankPrefix()
```

---

# Quiz

### Which function returns string length?

<details>
<summary>Answer</summary>

strlen()

</details>

---

### Which function converts string to array?

<details>
<summary>Answer</summary>

explode()

</details>

---

### Which function joins arrays?

<details>
<summary>Answer</summary>

implode()

</details>

---

### Which function checks substring?

<details>
<summary>Answer</summary>

str_contains()

</details>

---

# Useful Links

PHP Strings:

https://www.php.net/manual/en/book.strings.php

String Functions:

https://www.php.net/manual/en/ref.strings.php

Regex:

https://www.php.net/manual/en/ref.pcre.php

---

# Next Chapter

➡ PHP Arrays
