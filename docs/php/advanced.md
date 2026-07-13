---
title: Advanced PHP & Patterns
sidebar_label: 3. Advanced PHP
sidebar_position: 3
---

# Advanced PHP and Design Patterns

Once you've mastered OOP basics, you need to understand advanced language features and structural design patterns. This knowledge is what separates an amateur scripter from a professional PocketMine-MP core developer.

## Closures and Anonymous Functions

An anonymous function is a function without a name. A **Closure** is an anonymous function that can capture variables from the outside scope using the `use` keyword. 

In PocketMine-MP, closures are frequently used for delayed tasks and async callbacks.

```php
<?php
declare(strict_types=1);

$serverName = "ZyroNetwork";
$playerCount = 100;

// The closure 'closes over' the $serverName variable
$broadcastTask = function(string $message) use ($serverName): void {
    echo "[$serverName] $message\n";
};

$broadcastTask("Server is restarting!");
```

### Arrow Functions (PHP 7.4+)
Arrow functions are a shorthand for anonymous functions that automatically capture variables from the parent scope by value.

```php
$multiplier = 2;
$numbers = [1, 2, 3];

// The $multiplier is automatically captured
$doubled = array_map(fn($n) => $n * $multiplier, $numbers);
// Result: [2, 4, 6]
```

## Generators and `yield`

A Generator allows you to write code that uses `foreach` to iterate over a set of data without needing to build an array in memory. It yields values one at a time, drastically reducing memory usage.

```php
function getHugeDataset(): \Generator {
    for ($i = 0; $i < 1000000; $i++) {
        // Pauses execution here and returns the value
        yield $i;
    }
}

foreach (getHugeDataset() as $number) {
    if ($number > 10) break; // We only processed 11 items, saving memory!
    echo "$number\n";
}
```
PocketMine-MP uses generators extensively in its async promise/await implementations (like `await-generator`).

## Fibers (PHP 8.1+)

Fibers are a low-level mechanism for creating full-stack, interruptible functions. They allow concurrent execution (cooperative multitasking) without the complexity of traditional asynchronous callbacks.

:::info Fibers in PMMP
You will rarely use raw Fibers directly when writing PMMP plugins. However, understanding that Fibers are what allow modern asynchronous PHP frameworks to "pause" and "resume" execution is crucial for advanced core architecture.
:::

## Working with JSON

JSON (JavaScript Object Notation) is the standard format for data exchange and configuration files.

### Encoding to JSON
Use `json_encode()` to convert a PHP array or object into a JSON string.
```php
$data = [
    "server" => "ZyroNetwork",
    "slots" => 100,
    "features" => ["Factions", "Economy"]
];

// JSON_PRETTY_PRINT makes the output human-readable
$jsonString = json_encode($data, JSON_PRETTY_PRINT);
```

### Decoding from JSON
Use `json_decode()` to parse a JSON string. **Always** pass `true` as the second argument if you want the result as an associative array instead of a `stdClass` object.
```php
$jsonString = '{"server": "ZyroNetwork", "slots": 100}';

$array = json_decode($jsonString, true);
echo $array["server"]; // ZyroNetwork
```

## File I/O (Input/Output)

### The Quick Way
For small configuration or data files, use `file_get_contents()` and `file_put_contents()`.

```php
$filePath = "data.txt";

// Write to a file
file_put_contents($filePath, "Hello World!");

// Read from a file
$content = file_get_contents($filePath);
```

### The Stream Way
For massive files, reading the entire file into memory with `file_get_contents()` will crash your server. Use file streams instead.

```php
$handle = fopen("massive_log.txt", "r");
if ($handle) {
    while (($line = fgets($handle)) !== false) {
        // Process one line at a time
        // echo $line;
    }
    fclose($handle);
}
```

## Regular Expressions (Regex)

Regex allows you to search, match, and replace complex string patterns. PHP uses PCRE (Perl Compatible Regular Expressions).

```php
$chatMessage = "Hey, check out this ip: 192.168.1.1";

// Simple regex to match an IP address
$pattern = '/\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/';

if (preg_match($pattern, $chatMessage, $matches)) {
    echo "Blocked IP advertisement: " . $matches[0];
}

// Replace swear words
$cleanChat = preg_replace('/(badword|worseword)/i', '****', "You are a badword!");
```

## Essential Design Patterns

Design patterns are proven architectural solutions to common software design problems.

### 1. Singleton Pattern
Ensures a class has only one instance and provides a global point of access to it. **Warning:** Overusing Singletons makes unit testing difficult and creates tight coupling. Use them sparingly (e.g., for a Main plugin class).

```php
class Database {
    private static ?Database $instance = null;

    private function __construct() {} // Prevent direct instantiation

    public static function getInstance(): Database {
        if (self::$instance === null) {
            self::$instance = new Database();
        }
        return self::$instance;
    }
}

$db = Database::getInstance();
```

### 2. Factory Pattern
Provides an interface for creating objects without specifying their exact class. Useful for creating different types of entities or UI forms dynamically.

```php
interface Form {
    public function send(): void;
}

class ModalForm implements Form {
    public function send(): void { echo "Modal sent\n"; }
}

class SimpleForm implements Form {
    public function send(): void { echo "Simple sent\n"; }
}

class FormFactory {
    public static function createForm(string $type): Form {
        return match($type) {
            "modal" => new ModalForm(),
            "simple" => new SimpleForm(),
            default => throw new \InvalidArgumentException("Invalid form type")
        };
    }
}

$form = FormFactory::createForm("modal");
$form->send();
```

### 3. Observer Pattern
Defines a one-to-many dependency so that when one object changes state, all its dependents are notified. PocketMine-MP's Event System is essentially a massive Observer pattern implementation!

## Composer Basics

Composer is the dependency manager for PHP. It allows you to pull in third-party libraries (like database ORMs, discord webhooks, HTTP clients).

To initialize a project:
```bash
composer init
```
To install a library:
```bash
composer require guzzlehttp/guzzle
```
To use Composer packages in your plugin, you simply require the autoloader:
```php
require_once "vendor/autoload.php";
```

## PHPStan and Static Analysis

Since PHP is not compiled, you don't get compile-time errors. **Static analysis** tools like PHPStan scan your code for bugs, type mismatches, and undefined methods before you ever run the server.

PocketMine-MP strictly enforces PHPStan at `level 9` for core contributions.

```bash
composer require --dev phpstan/phpstan
vendor/bin/phpstan analyse src/ --level 8
```

:::tip
Always type-hint everything (properties, parameters, returns) and write detailed PHPDoc comments. PHPStan will catch 90% of your bugs before you even start the PMMP server.
:::

---

import Quiz from '@site/src/components/Quiz';

<Quiz questions={[
  {
    question: "What keyword allows an anonymous function (Closure) to inherit variables from its parent scope?",
    options: ["global", "use", "inherit", "import"],
    correctAnswer: 1,
    explanation: "The 'use' keyword allows a closure to capture variables from the surrounding scope."
  },
  {
    question: "Which of the following is true about Generators (using the 'yield' keyword)?",
    options: ["They execute all code immediately and return an array.", "They require more memory than returning a full array.", "They pause execution and yield values one at a time, saving memory.", "They are only available in PHP 8.1+."],
    correctAnswer: 2,
    explanation: "Generators yield values one by one on-demand, which prevents loading massive datasets into memory all at once."
  },
  {
    question: "What is the second parameter in json_decode() used for?",
    options: ["To specify the file path", "To format the output with indents", "To return an associative array instead of an object", "To throw exceptions on error"],
    correctAnswer: 2,
    explanation: "Passing 'true' as the second argument forces json_decode() to return a standard PHP associative array instead of an instance of stdClass."
  },
  {
    question: "Why should you use fopen/fgets instead of file_get_contents for a 1GB log file?",
    options: ["file_get_contents only reads the first 100 lines.", "fopen reads the file in chunks, preventing RAM exhaustion.", "fopen is automatically parsed as JSON.", "file_get_contents cannot read text files."],
    correctAnswer: 1,
    explanation: "file_get_contents() loads the entire file into memory, which would crash a server when opening a 1GB file. fopen/fgets streams it line by line."
  },
  {
    question: "Which Regex function is used to replace matched patterns with a new string?",
    options: ["preg_match", "preg_replace", "str_replace", "regex_sub"],
    correctAnswer: 1,
    explanation: "preg_replace() searches the subject string for matches to the regular expression pattern and replaces them with the specified replacement string."
  },
  {
    question: "The Singleton Design Pattern is characterized by:",
    options: ["Having a private constructor and a static getInstance() method.", "Creating multiple instances using a Factory class.", "Notifying multiple observers when a state changes.", "Extending multiple abstract classes."],
    correctAnswer: 0,
    explanation: "Singletons ensure only one instance of a class exists. This is achieved by making the constructor private and providing a static global access method."
  },
  {
    question: "Which design pattern is best suited for dynamically creating different UI forms based on a string input?",
    options: ["Singleton", "Observer", "Factory", "Decorator"],
    correctAnswer: 2,
    explanation: "The Factory pattern provides an interface/method for creating objects, hiding the instantiation logic and choosing the correct class to instantiate based on parameters."
  },
  {
    question: "What command is used to install a new library using Composer?",
    options: ["composer install", "composer add", "composer require", "composer download"],
    correctAnswer: 2,
    explanation: "The 'composer require' command adds the package to your composer.json and installs it."
  },
  {
    question: "What must you include in your PHP script to use classes installed via Composer?",
    options: ["include 'composer.json';", "require 'vendor/autoload.php';", "use Composer\\Autoload;", "require 'modules.php';"],
    correctAnswer: 1,
    explanation: "Requiring vendor/autoload.php loads the Composer autoloader, which automatically requires class files as you use them."
  },
  {
    question: "What is the primary purpose of a tool like PHPStan?",
    options: ["To compile PHP code into machine code.", "To automatically format and indent your code.", "To analyze code statically to find bugs and type errors without executing it.", "To manage database migrations."],
    correctAnswer: 2,
    explanation: "PHPStan is a static analysis tool that scans your codebase for logical errors, type mismatches, and undefined variables before runtime."
  }
]} />
