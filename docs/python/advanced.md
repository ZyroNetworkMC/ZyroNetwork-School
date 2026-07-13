---
title: Advanced Python
sidebar_label: 3. Advanced Python
sidebar_position: 3
---

# Advanced Python

To write high-performance Python tools and APIs, you need to understand Object-Oriented Programming (OOP) in Python, asynchronous I/O, and environment management.

## Object-Oriented Programming

Python's approach to OOP is extremely flexible. Classes are defined using the `class` keyword.

### Basics and `__init__`
The `__init__` method is the constructor. The `self` parameter is equivalent to `$this` in PHP; it refers to the instance of the class.

```python
class Server:
    # Constructor
    def __init__(self, name: str, max_players: int):
        self.name = name
        self.max_players = max_players
        self.online_players = 0
        
    # Instance method
    def join_player(self, player_name: str) -> bool:
        if self.online_players < self.max_players:
            self.online_players += 1
            print(f"{player_name} joined {self.name}!")
            return True
        return False

# Instantiation
lobby = Server("Lobby-1", 100)
lobby.join_player("Steve")
```

### Inheritance

```python
class ProxyServer(Server):
    def __init__(self, name: str, max_players: int, backend_ip: str):
        # Call parent constructor
        super().__init__(name, max_players)
        self.backend_ip = backend_ip
        
    # Overriding a method
    def join_player(self, player_name: str) -> bool:
        print(f"Routing {player_name} to {self.backend_ip}...")
        return super().join_player(player_name)
```

### Properties and Encapsulation
Python doesn't have strict `private` or `protected` keywords. Instead, prefixing a variable with an underscore `_` is a convention indicating it is for internal use. To strictly control access, use the `@property` decorator.

```python
class BankAccount:
    def __init__(self):
        self._balance = 0  # Protected by convention
        
    @property
    def balance(self) -> int:
        return self._balance
        
    @balance.setter
    def balance(self, value: int):
        if value < 0:
            raise ValueError("Balance cannot be negative")
        self._balance = value

account = BankAccount()
account.balance = 500 # Calls the setter
print(account.balance) # Calls the getter
```

### Dataclasses (Python 3.7+)
If a class just holds data, use `@dataclass` to automatically generate `__init__`, `__repr__`, and `__eq__` methods.

```python
from dataclasses import dataclass

@dataclass
class PlayerRecord:
    username: str
    kills: int = 0
    deaths: int = 0

record = PlayerRecord("Alex", kills=10)
print(record) # PlayerRecord(username='Alex', kills=10, deaths=0)
```

## Dunder Methods (Magic Methods)

Double Underscore methods allow you to override core Python behaviors.

```python
class Vector2:
    def __init__(self, x, y):
        self.x = x
        self.y = y
        
    # How the object is printed as a string
    def __str__(self):
        return f"({self.x}, {self.y})"
        
    # Overriding the '+' operator
    def __add__(self, other):
        return Vector2(self.x + other.x, self.y + other.y)

pos1 = Vector2(10, 20)
pos2 = Vector2(5, 5)
print(pos1 + pos2) # Prints: (15, 25)
```

## Context Managers

Context managers allow you to create your own `with` statement blocks for acquiring and releasing resources automatically.

```python
class DatabaseConnection:
    def __enter__(self):
        print("Connecting to database...")
        return self
        
    def __exit__(self, exc_type, exc_val, exc_tb):
        print("Closing database connection...")
        
    def query(self, sql):
        print(f"Executing: {sql}")

with DatabaseConnection() as db:
    db.query("SELECT * FROM players")
```

## Asynchronous Python (`asyncio`)

Asyncio allows you to write concurrent code using the `async`/`await` syntax. It is vital when building Discord bots (discord.py) or network tools.

```python
import asyncio

async def fetch_data(id: int):
    print(f"Task {id}: Fetching...")
    await asyncio.sleep(2) # Simulating network delay
    print(f"Task {id}: Done!")
    return id * 10

async def main():
    # Run multiple tasks concurrently
    tasks = [fetch_data(1), fetch_data(2)]
    results = await asyncio.gather(*tasks)
    print(results)

# Start the async event loop
asyncio.run(main())
```

## Working with Web APIs (`requests`)

The `requests` library is the standard way to make HTTP requests in Python. You must install it: `pip install requests`.

```python
import requests

# GET Request
response = requests.get("https://api.github.com/users/ZyroNetworkMC")
if response.status_code == 200:
    data = response.json() # Automatically parses JSON!
    print(f"ZyroNetwork has {data['public_repos']} repos.")

# POST Request
payload = {"content": "Server started!"}
# requests.post("DISCORD_WEBHOOK_URL", json=payload)
```

## Environment Management (venv)

Never install dependencies globally! Always use a virtual environment (`venv`) to keep project dependencies isolated.

```bash
# Create a virtual environment
python3 -m venv .venv

# Activate it (Linux/Mac)
source .venv/bin/activate

# Activate it (Windows)
.venv\Scripts\activate

# Install a package (only goes into the venv)
pip install requests

# Save dependencies to a file
pip freeze > requirements.txt

# Install dependencies on another machine
pip install -r requirements.txt
```

## SQLite with Python

Python comes with a built-in lightweight SQL database called `sqlite3`.

```python
import sqlite3

# Connect to file-based database
conn = sqlite3.connect('server.db')
cursor = conn.cursor()

# Create table
cursor.execute('''
    CREATE TABLE IF NOT EXISTS players
    (username TEXT PRIMARY KEY, rank TEXT)
''')

# Insert data
cursor.execute("INSERT OR REPLACE INTO players VALUES (?, ?)", ("Steve", "VIP"))
conn.commit()

# Query data
cursor.execute("SELECT * FROM players")
print(cursor.fetchall())

conn.close()
```

---

import Quiz from '@site/src/components/Quiz';

<Quiz questions={[
  {
    question: "In Python OOP, what does the 'self' parameter represent?",
    options: ["The parent class", "The instance of the class calling the method", "A global variable", "The module name"],
    correctAnswer: 1,
    explanation: "Similar to '$this' in PHP, 'self' represents the specific object instance that is calling the method."
  },
  {
    question: "How do you call a method from the parent class when overriding it in a child class?",
    options: ["parent.method()", "base.method()", "super().method()", "self.__parent__.method()"],
    correctAnswer: 2,
    explanation: "super() returns a temporary object of the superclass that then allows you to call its methods."
  },
  {
    question: "What decorator provides a clean way to implement getter and setter methods?",
    options: ["@getter", "@property", "@staticmethod", "@classmethod"],
    correctAnswer: 1,
    explanation: "The @property decorator allows you to define a method that can be accessed like an attribute, enforcing encapsulation."
  },
  {
    question: "What is the primary benefit of using @dataclass in Python 3.7+?",
    options: ["It makes the class run faster", "It encrypts the data", "It automatically generates boilerplate code like __init__ and __repr__", "It turns the class into a database table"],
    correctAnswer: 2,
    explanation: "@dataclass eliminates the need to manually write initialization and string representation methods for classes that primarily store data."
  },
  {
    question: "What Dunder (magic) method is used to define how an object is printed as a string?",
    options: ["__print__", "__str__", "__text__", "__format__"],
    correctAnswer: 1,
    explanation: "__str__ is called by the str() built-in function and by the print function to compute the 'informal' or nicely printable string representation of an object."
  },
  {
    question: "Which two Dunder methods are required to create a Context Manager for use with the 'with' statement?",
    options: ["__open__ and __close__", "__enter__ and __exit__", "__start__ and __stop__", "__init__ and __del__"],
    correctAnswer: 1,
    explanation: "The 'with' statement calls __enter__() when entering the block and __exit__() when leaving it."
  },
  {
    question: "What keyword is used to wait for an asynchronous task to finish in the asyncio library?",
    options: ["wait", "yield", "await", "sleep"],
    correctAnswer: 2,
    explanation: "The 'await' keyword pauses the execution of the coroutine until the awaited task completes, yielding control back to the event loop."
  },
  {
    question: "Which third-party library is considered the standard for making HTTP requests in Python?",
    options: ["urllib", "http.client", "requests", "curl"],
    correctAnswer: 2,
    explanation: "The 'requests' library is the de facto standard for making HTTP requests in Python due to its simple and elegant API."
  },
  {
    question: "Why should you use a Virtual Environment (venv) when working on Python projects?",
    options: ["To isolate project dependencies and avoid version conflicts globally", "To make the code run faster", "To compile Python into an executable", "To hide your code from other users"],
    correctAnswer: 0,
    explanation: "Virtual environments keep libraries separated by project, ensuring that updating a library for one project doesn't break another project."
  },
  {
    question: "How do you save a list of your project's pip dependencies to a file?",
    options: ["pip save requirements.txt", "pip freeze > requirements.txt", "pip export dependencies", "python -m pip dump"],
    correctAnswer: 1,
    explanation: "pip freeze outputs installed packages in requirements format, which can be redirected (>) into a requirements.txt file."
  }
]} />
