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
  }
]} />
