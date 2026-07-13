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
  },
  {
    question: "Which visibility keyword allows properties to be accessed ONLY within the class they are declared?",
    options: [
      "public",
      "protected",
      "private",
      "static"
    ],
    correctAnswer: 2,
    explanation: "Private properties and methods cannot be accessed or modified from outside the class or from inheriting classes."
  },
  {
    question: "What is the difference between 'protected' and 'private' visibility?",
    options: [
      "Protected variables can be accessed by child classes; private variables cannot.",
      "Private variables are faster than protected variables.",
      "Protected is public inside the namespace.",
      "There is no difference in PHP 8."
    ],
    correctAnswer: 0,
    explanation: "Protected variables can be inherited and accessed by classes that extend the parent class, while private variables are strictly locked to the parent."
  },
  {
    question: "What does 'declare(strict_types=1);' do at the start of a PHP file?",
    options: [
      "It disables error reporting.",
      "It forces variables to be declared before use.",
      "It enforces strict type-checking on function arguments and return values.",
      "It speeds up execution times by 20%."
    ],
    correctAnswer: 2,
    explanation: "Strict types ensure that calling functions with incorrect types throws a TypeError instead of performing automatic type conversion."
  },
  {
    question: "How do you instantiate a new object of a class named 'PlayerSession' in PHP?",
    options: [
      "PlayerSession->new()",
      "new PlayerSession()",
      "create PlayerSession",
      "PlayerSession::instantiate()"
    ],
    correctAnswer: 1,
    explanation: "The 'new' keyword followed by the class name (and optional constructor arguments) is the standard way to instantiate objects."
  },
  {
    question: "Which of the following describes an 'interface' in PHP?",
    options: [
      "A class that cannot be inherited.",
      "A graphical user interface for plugins.",
      "A contract that forces classes to implement specific public methods.",
      "A file that stores config data."
    ],
    correctAnswer: 2,
    explanation: "Interfaces define method signatures that implementing classes MUST declare, ensuring architectural consistency."
  },
  {
    question: "How do you access a static method or property inside a class from the outside?",
    options: [
      "Using the arrow operator ($class->method)",
      "Using the double colon operator (Class::method)",
      "Using the dot operator (Class.method)",
      "Static methods cannot be accessed from the outside."
    ],
    correctAnswer: 1,
    explanation: "The scope resolution operator (::) is used to access static, constant, or overridden properties/methods."
  },
  {
    question: "Which magic method is triggered when an object is treated as a string in PHP?",
    options: [
      "__construct()",
      "__destruct()",
      "__toString()",
      "__call()"
    ],
    correctAnswer: 2,
    explanation: "__toString() allows you to control how the object behaves when printed or concatenated, like echo $player;"
  }
]} />
