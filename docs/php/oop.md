---
title: Object-Oriented Programming (OOP) in PHP
sidebar_label: OOP Basics
sidebar_position: 2
---

# Object-Oriented Programming (OOP) in PHP

Minecraft objects (Players, Blocks, Items, Worlds) are represented in PHP as **Classes** and **Objects**. To develop plugins, understanding Object-Oriented Programming is absolutely mandatory!

## Classes and Objects

- **Class**: A blueprint or template. It defines variables (properties) and functions (methods) that all objects created from it will have.
- **Object**: An instance of a class. For example, a player named "Austin" is an instance of the `Player` class.

```php
// Declaring a Class
class Miner {
    // Property
    public string $name;

    // Constructor
    public function __construct(string $name) {
        $this->name = $name;
    }

    // Method
    public function mineBlock() : void {
        echo $this->name . " is mining!";
    }
}

// Creating an Object
$minerObj = new Miner("Steve");
$minerObj->mineBlock(); // Output: Steve is mining!
```

## Inheritance

Inheritance allows one class to inherit properties and methods from another. In PocketMine-MP, your main class inherits from `PluginBase`:

```php
class Main extends PluginBase {
    // We get access to all methods inside PluginBase!
}
```

---

## Test Your PHP Knowledge!

Let's test what you've learned about PHP and OOP. Complete the interactive quiz below.

import Quiz from '@site/src/components/Quiz';

<Quiz questions={[
  {
    question: "What does it mean if a method has a ': void' return type in PHP 8.1?",
    options: [
      "The method returns an empty string.",
      "The method does not return any value.",
      "The method has crashed.",
      "The method returns null only."
    ],
    correctAnswer: 1,
    explanation: "Void signifies that the function executes logic but does not return any data back to the caller."
  },
  {
    question: "Which keyword is used to inherit methods and properties from another class?",
    options: [
      "implements",
      "inherits",
      "extends",
      "parent"
    ],
    correctAnswer: 2,
    explanation: "The 'extends' keyword is used in PHP to establish inheritance between classes."
  },
  {
    question: "What is the purpose of a __construct method in a PHP class?",
    options: [
      "To build the server.",
      "To delete the object from memory.",
      "To automatically initialize properties when an object is created.",
      "To make the code run faster."
    ],
    correctAnswer: 2,
    explanation: "The constructor (__construct) is a special method called automatically when an object is instantiated."
  }
]} />
