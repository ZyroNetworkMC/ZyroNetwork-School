---
title: PHP Programming Introduction
sidebar_label: Introduction
sidebar_position: 1
slug: /php
---

# Introduction to PHP for Bedrock Plugin Developers

PHP is the language that powers **PocketMine-MP**, one of the most widely used server platforms for Minecraft: Bedrock Edition. To write stable and optimized plugins, it is essential to have a solid grasp of basic PHP principles and syntax!

## What is PHP?

PHP is a popular server-side scripting language. While traditionally used for web development, its versatility and speed make it an excellent choice for powering Bedrock game servers. PocketMine-MP plugins are written entirely in PHP 8.1+.

### Key Concepts for Game Development
- **Variables**: Storing values like player names or server coin balances.
- **Functions**: Bundling code that performs specific actions (e.g., giving a player an item).
- **Control Structures**: Using `if`, `else`, and loops to control when actions happen.

## PHP 8.1+ & Strong Typing

Modern PHP supports **strong typing**, which means you must specify the exact data type that a function expects and returns. PocketMine-MP API 5 strictly enforces typing.

```php
// An example of strongly typed PHP
public function addCoins(Player $player, int $amount) : void {
    // This function expects a Player object and an integer, and returns nothing (void)
}
```

In the next chapter, we will learn about **Object-Oriented Programming (OOP)**, which is the architectural foundation of all PocketMine-MP plugins!
