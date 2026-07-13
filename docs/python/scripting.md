---
title: Automation Scripting
sidebar_label: Automation Scripting
sidebar_position: 2
---

# Automation Scripting with Python

Python is incredibly useful for automations. For instance, if you are creating custom Bedrock blocks for an add-on, writing dozens of JSON files by hand is tedious. A Python script can generate them in milliseconds!

## Generating Add-on Files

Here is a Python script that generates block JSON templates automatically:

```python
import os

blocks = ["ruby_ore", "sapphire_ore", "amethyst_ore"]

for block in blocks:
    filename = f"texts/{block}.json"
    os.makedirs(os.path.dirname(filename), exist_ok=True)
    
    config = {
        "format_version": "1.20.10",
        "minecraft:block": {
            "description": {
                "identifier": f"zyro:{block}"
            },
            "components": {
                "minecraft:destructible_by_mining": {
                    "seconds_to_destroy": 3.0
                }
            }
        }
    }
    
    with open(filename, "w") as f:
        json.dump(config, f, indent=4)
        
print("Templates generated successfully!")
```

---

## Test Your Python Knowledge!

Take this quick quiz to verify you've understood the Python fundamentals!

import Quiz from '@site/src/components/Quiz';

<Quiz questions={[
  {
    question: "What module is used in Python to work with JSON files?",
    options: [
      "jsondata",
      "json",
      "serialize",
      "stringify"
    ],
    correctAnswer: 1,
    explanation: "The built-in 'json' library in Python contains the loads() and dumps() methods."
  },
  {
    question: "How do you open a file for writing in Python?",
    options: [
      "open('file.txt', 'r')",
      "open('file.txt', 'w')",
      "open('file.txt', 'a')",
      "write('file.txt')"
    ],
    correctAnswer: 1,
    explanation: "'w' stands for write mode, which overwrites or creates a new file. 'r' is read and 'a' is append."
  },
  {
    question: "Which of the following is the correct file extension for Python scripts?",
    options: [
      ".pt",
      ".py",
      ".pyt",
      ".python"
    ],
    correctAnswer: 1,
    explanation: "All Python script files end with the '.py' extension."
  },
  {
    question: "How do you declare a variable with the value 5 in Python?",
    options: [
      "int x = 5",
      "x = 5",
      "var x = 5",
      "let x = 5"
    ],
    correctAnswer: 1,
    explanation: "Python is dynamically typed, so variables are declared simply by assigning them a value with the '=' operator."
  },
  {
    question: "What is the correct syntax to create a function in Python?",
    options: [
      "function myFunction():",
      "def myFunction():",
      "create myFunction():",
      "void myFunction():"
    ],
    correctAnswer: 1,
    explanation: "Functions in Python are defined using the 'def' (define) keyword."
  },
  {
    question: "Which collection type in Python is ordered, mutable, and allows duplicate members?",
    options: [
      "List",
      "Tuple",
      "Set",
      "Dictionary"
    ],
    correctAnswer: 0,
    explanation: "Lists are mutable and allow duplicate elements, while tuples are immutable and sets only permit unique items."
  },
  {
    question: "How do you start a loop that runs 5 times in Python?",
    options: [
      "for x in 5:",
      "for x in range(5):",
      "loop(5):",
      "while x < 5:"
    ],
    correctAnswer: 1,
    explanation: "The range(5) function generates numbers from 0 to 4, letting the loop repeat exactly 5 times."
  },
  {
    question: "Which method is used to add an item to the end of a list in Python?",
    options: [
      "add()",
      "insert()",
      "append()",
      "push()"
    ],
    correctAnswer: 2,
    explanation: "The list.append() method places the specified element at the very end of the array."
  },
  {
    question: "What does the 'os.makedirs' function do with 'exist_ok=True'?",
    options: [
      "It deletes the folder if it exists.",
      "It creates directories recursively and does not throw an error if the directory already exists.",
      "It creates files but not folders.",
      "It checks if files exist but doesn't write anything."
    ],
    correctAnswer: 1,
    explanation: "exist_ok=True prevents Python from raising a FileExistsError if the target folder structure already exists."
  },
  {
    question: "What is the purpose of 'indent=4' in 'json.dump'?",
    options: [
      "It speeds up file writing.",
      "It formats the JSON with 4-space indentation for human readability.",
      "It limits the file size to 4 kilobytes.",
      "It encrypts the output data."
    ],
    correctAnswer: 1,
    explanation: "Indentation formats the output blocks cleanly, turning compressed single-line strings into pretty-printed JSON."
  }
]} />
