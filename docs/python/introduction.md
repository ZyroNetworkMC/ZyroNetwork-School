---
title: Python Introduction
sidebar_label: 1. Introduction
sidebar_position: 1
---

# Python Introduction

Python is a high-level, interpreted programming language known for its readability and massive ecosystem of libraries. For Minecraft Server Administrators, Python is the ultimate tool for automation, log analysis, backups, and building internal management APIs.

## Why Python for Server Automation?
While PHP runs the core server software (PocketMine-MP), Python excels outside the game loop. If you need a script to zip world backups every night, scrape player statistics from a log file, or restart crashed processes, Python gets the job done in 10 lines of code instead of 100.

## Installation

### Windows
1. Download Python 3.10+ from [python.org](https://www.python.org/downloads/).
2. Run the installer. **CRITICAL:** Check the box that says "Add Python to PATH".
3. Verify installation: `python --version`

### Linux (Ubuntu/Debian)
```bash
sudo apt update
sudo apt install python3 python3-pip
```
Verify installation: `python3 --version`

## Your First Script

Create a file named `hello.py`.

```python
# This is a comment
print("Hello, Server Admin!")
```
Run it:
```bash
python3 hello.py
```

## Variables and Data Types

Python is dynamically typed. You do not need to declare types, though Type Hints are highly recommended in modern Python.

```python
# String (str)
server_name = "ZyroNetwork"

# Integer (int)
max_players = 100

# Float (float)
tps_average = 19.98

# Boolean (bool)
is_online = True

# List (list - ordered, mutable collection)
plugins = ["Economy", "Factions", "AntiCheat"]

# Dictionary (dict - key/value pairs)
config = {"port": 19132, "motd": "Welcome!"}

# Tuple (tuple - ordered, IMMUTABLE collection)
coordinates = (10, 64, -20)

# Set (set - unordered collection of UNIQUE elements)
banned_ips = {"192.168.1.1", "10.0.0.5"}

# None (represents absence of a value, similar to null in PHP)
current_event = None
```

### Type Hints (Python 3.5+)
Type hints don't enforce types at runtime, but they help IDEs catch bugs and make your code self-documenting.

```python
def calculate_uptime(days: int, hours: int) -> int:
    return (days * 24) + hours
```

## Operators

```python
x = 10
y = 3

print(x + y)  # 13
print(x - y)  # 7
print(x * y)  # 30
print(x / y)  # 3.333333 (Float division)
print(x // y) # 3 (Integer/Floor division)
print(x % y)  # 1 (Modulo)
print(x ** y) # 1000 (Exponentiation)

# Comparison
print(x == y) # False
print(x != y) # True

# Logical
print(x > 5 and y < 5) # True
print(x > 20 or y < 5) # True
print(not is_online)   # False
```

## String Methods & f-strings

F-strings (formatted string literals) are the modern, clean way to inject variables into strings in Python.

```python
player = "Steve"
kills = 42

# Using f-strings
message = f"Player {player} has {kills} kills."

# String Methods
text = "  ZyroNetwork Server  "
print(text.strip())           # "ZyroNetwork Server" (removes outer whitespace)
print(text.lower())           # "  zyronetwork server  "
print(text.upper())           # "  ZYRONETWORK SERVER  "
print(text.replace(" ", "_")) # "__ZyroNetwork_Server__"

csv_line = "Steve,admin,100"
data = csv_line.split(",")    # ["Steve", "admin", "100"]

joined = "-".join(data)       # "Steve-admin-100"
```

## Control Flow

Python relies on **Indentation** (whitespace) to define blocks of code, rather than curly braces `{}`.

### If, Elif, Else
```python
ping = 150

if ping < 50:
    print("Excellent connection")
elif ping < 100:
    print("Good connection")
elif ping < 200:
    print("Fair connection")
else:
    print("Poor connection")
```

### Match-Case (Python 3.10+)
Similar to `switch` in other languages, but much more powerful due to structural pattern matching.

```python
command = "stop"

match command:
    case "start":
        print("Starting server...")
    case "stop":
        print("Stopping server...")
    case _:
        print("Unknown command")
```

## Loops

### For Loop
Iterates over a sequence (list, string, dictionary, etc).
```python
# Iterating a list
for plugin in plugins:
    print(f"Loading {plugin}...")

# Iterating a range of numbers (0 to 4)
for i in range(5):
    print(i)

# Enumerate (get index AND value)
for index, plugin in enumerate(plugins):
    print(f"{index}: {plugin}")
```

### While Loop
```python
countdown = 3
while countdown > 0:
    print(countdown)
    countdown -= 1
```

### Break and Continue
- `break`: Exits the loop entirely.
- `continue`: Skips the rest of the current iteration and moves to the next one.

## Functions

Functions are defined using the `def` keyword.

```python
def backup_world(world_name: str, force: bool = False) -> bool:
    print(f"Backing up {world_name}...")
    return True

# Call with positional argument
backup_world("world")

# Call with keyword arguments
backup_world(force=True, world_name="nether")
```

### *args and **kwargs
Used when you don't know how many arguments will be passed.
- `*args`: Tuple of positional arguments.
- `**kwargs`: Dictionary of keyword arguments.

```python
def start_server(*args, **kwargs):
    print(args)    # ('-Xmx4G', '-jar')
    print(kwargs)  # {'port': 19132}

start_server("-Xmx4G", "-jar", port=19132)
```

## Comprehensions

Comprehensions are a concise way to create lists and dictionaries. They replace multi-line `for` loops with a single, elegant line of code.

### List Comprehensions
```python
numbers = [1, 2, 3, 4, 5]

# Traditional way
squares = []
for n in numbers:
    squares.append(n * n)

# List Comprehension way
squares = [n * n for n in numbers]

# With a condition (only even numbers)
even_squares = [n * n for n in numbers if n % 2 == 0]
```

## Error Handling

Python uses `try`, `except`, and `finally` to handle exceptions.

```python
def divide(a, b):
    try:
        result = a / b
        print(f"Result: {result}")
    except ZeroDivisionError:
        print("Error: Cannot divide by zero!")
    except TypeError:
        print("Error: Must provide numbers!")
    finally:
        print("Operation attempted.")

divide(10, 0)
```

## Essential Built-in Functions Reference

| Function | Description | Example |
|---|---|---|
| `print()` | Prints output to console | `print("Hello")` |
| `type()` | Returns the type of an object | `type(42)` -> `<class 'int'>` |
| `len()` | Returns length of list/dict/str | `len([1,2])` -> 2 |
| `int()` / `str()` / `float()` | Casts to specific type | `str(10)` -> `"10"` |
| `range(start, stop)` | Generates a sequence of numbers | `range(0, 5)` |
| `enumerate()` | Adds a counter to an iterable | `enumerate(list)` |
| `zip(a, b)` | Iterates multiple lists in parallel | `zip(names, ages)` |
| `sum()` | Sums items of an iterable | `sum([1, 2, 3])` -> 6 |
| `max()` / `min()` | Returns largest/smallest item | `max(10, 20)` -> 20 |
| `sorted()` | Returns a new sorted list | `sorted([3, 1, 2])` -> `[1, 2, 3]` |
| `isinstance()` | Checks if object is instance of class | `isinstance(x, int)` |
| `dir()` | Lists attributes/methods of object | `dir(str)` |
| `help()` | Opens built-in documentation | `help(list.append)` |

---

import Quiz from '@site/src/components/Quiz';

<Quiz questions={[
  {
    question: "What is the primary way Python defines code blocks (like the body of a function or if-statement)?",
    options: ["Curly braces {}", "Keywords like BEGIN and END", "Indentation (whitespace)", "Parentheses ()"],
    correctAnswer: 2,
    explanation: "Unlike PHP or Java which use curly braces, Python relies strictly on indentation (usually 4 spaces) to define code blocks."
  },
  {
    question: "Which of the following data types in Python is immutable (cannot be changed after creation)?",
    options: ["list", "dict", "set", "tuple"],
    correctAnswer: 3,
    explanation: "A tuple is an ordered collection that is immutable, meaning you cannot add, remove, or change its elements after it is created."
  },
  {
    question: "What is the correct syntax for an f-string in Python?",
    options: ["print('Value: {var}')", "print(f'Value: {var}')", "print('Value: ' . var)", "print('Value: %var')"],
    correctAnswer: 1,
    explanation: "F-strings are prefixed with the letter 'f' and variables are enclosed in curly braces directly inside the string."
  },
  {
    question: "What does the '//' operator do in Python?",
    options: ["Comments out a line", "Concatenates two strings", "Performs integer (floor) division", "Calculates a square root"],
    correctAnswer: 2,
    explanation: "The // operator performs floor division, returning the largest integer less than or equal to the mathematical result."
  },
  {
    question: "Which keyword is used to skip the rest of the current iteration in a loop and move to the next one?",
    options: ["stop", "break", "continue", "pass"],
    correctAnswer: 2,
    explanation: "The 'continue' statement skips the remaining code inside the loop for the current iteration only."
  },
  {
    question: "What does **kwargs allow you to do in a function definition?",
    options: ["Accept an unlimited number of positional arguments", "Accept an unlimited number of keyword (named) arguments", "Multiply variables automatically", "Define default values for variables"],
    correctAnswer: 1,
    explanation: "**kwargs gathers any unexpected keyword arguments passed to the function into a dictionary."
  },
  {
    question: "What is the output of: [x*2 for x in [1, 2, 3]] ?",
    options: ["[1, 2, 3]", "6", "Error", "[2, 4, 6]"],
    correctAnswer: 3,
    explanation: "This is a list comprehension that multiplies every element in the input list by 2, returning a new list."
  },
  {
    question: "What block of code in a try/except structure executes regardless of whether an exception occurred or not?",
    options: ["catch", "else", "finally", "always"],
    correctAnswer: 2,
    explanation: "The 'finally' block is executed no matter what happens, making it useful for cleaning up resources like closing files or connections."
  },
  {
    question: "Which built-in function returns both the index and the value while iterating over a list?",
    options: ["range()", "zip()", "enumerate()", "count()"],
    correctAnswer: 2,
    explanation: "enumerate(iterable) returns tuples containing a count (from start which defaults to 0) and the values obtained from iterating over iterable."
  },
  {
    question: "What is the modern Python 3.10+ equivalent to a switch statement?",
    options: ["select-case", "switch-case", "match-case", "if-case"],
    correctAnswer: 2,
    explanation: "Python 3.10 introduced Structural Pattern Matching using the match and case keywords."
  }
]} />
