---
title: Automation Scripting
sidebar_label: 2. Python Scripting
sidebar_position: 2
---

# Server Automation and Scripting

Python is the undisputed king of automation. As a Minecraft server administrator, you can use Python to build management scripts that read logs, generate configuration files, start/stop the server, and automatically backup your worlds.

## File I/O (Input/Output)

Reading and writing files is the foundation of automation.

### The `with` Statement
Always use the `with` statement when opening files. It acts as a "Context Manager" that automatically closes the file when the block ends, even if an exception is thrown.

```python
# Writing to a file
with open("server.properties", "w") as file:
    file.write("server-port=19132\n")
    file.write("max-players=50\n")

# Reading a file line by line
with open("server.properties", "r") as file:
    for line in file:
        print(line.strip()) # strip() removes the newline character
```

### `pathlib` for Paths
In modern Python, you should use `pathlib` instead of manipulating strings to handle file paths. It automatically handles Windows/Linux path separator differences.

```python
from pathlib import Path

# Create a path object
data_folder = Path("plugin_data/Economy")

# Check if it exists and create it if not
if not data_folder.exists():
    data_folder.mkdir(parents=True)

# Create a file path inside the folder
config_file = data_folder / "config.yml"
print(config_file.absolute())
```

## Working with JSON

JSON is heavily used in web APIs and PocketMine-MP plugin data storage.

```python
import json

# Python Dictionary
player_data = {
    "uuid": "1234-5678",
    "name": "Steve",
    "money": 500.5
}

# 1. json.dumps() -> Convert dict to JSON string
json_string = json.dumps(player_data, indent=4)
print(json_string)

# 2. json.loads() -> Parse JSON string to dict
parsed_data = json.loads(json_string)

# 3. json.dump() -> Write directly to a file
with open("steve.json", "w") as file:
    json.dump(player_data, file, indent=4)

# 4. json.load() -> Read directly from a file
with open("steve.json", "r") as file:
    data = json.load(file)
    print(data["name"])
```

## Working with YAML

PocketMine-MP plugins use YAML for configuration (`config.yml`). Python doesn't support YAML natively, so you need the `PyYAML` library.

Install it first:
```bash
pip install pyyaml
```

Script:
```python
import yaml

with open("config.yml", "r") as file:
    config = yaml.safe_load(file)

print(config["Database"]["username"])

# Modify and save
config["Database"]["port"] = 3306
with open("config.yml", "w") as file:
    yaml.dump(config, file, default_flow_style=False)
```

## The `os` and `shutil` Modules

These modules let you interact with the operating system to move, copy, and delete files.

```python
import os
import shutil

# Get current working directory
cwd = os.getcwd()

# List files in a directory
plugins = os.listdir("./plugins")

# Access Environment Variables
db_pass = os.environ.get("DB_PASSWORD", "default_pass")

# Copy a file
shutil.copy("server.properties", "server.properties.backup")

# Delete an entire folder and its contents (Be careful!)
# shutil.rmtree("./worlds/old_world")
```

## Running External Commands (`subprocess`)

If you need to run a bash command or start your PocketMine-MP server from a Python script, use `subprocess`.

```python
import subprocess

# Simple command execution
result = subprocess.run(["ls", "-l"], capture_output=True, text=True)
print(result.stdout)

# Starting the PMMP server (blocks until the server stops)
print("Starting server...")
subprocess.run(["./bin/php7/bin/php", "PocketMine-MP.phar"])
```

## Command Line Arguments (`argparse`)

If you want to build professional CLI tools (like a custom `./start.py --ram 4G`), use `argparse`.

```python
import argparse

parser = argparse.ArgumentParser(description="ZyroNetwork Server Manager")
parser.add_argument("--action", choices=["start", "stop", "backup"], required=True)
parser.add_argument("--world", help="World name to backup", default="world")

args = parser.parse_args()

if args.action == "backup":
    print(f"Backing up world: {args.world}")
```

## Regular Expressions (`re`)

Regular expressions are perfect for scraping data out of server logs.

```python
import re

log_line = "[15:30:22] [Server thread/INFO]: Steve[/192.168.1.1:12345] logged in"

# Extract the username and IP address
pattern = r"([A-Za-z0-9_]+)\[/([0-9\.]+)[:\d]+\] logged in"

match = re.search(pattern, log_line)
if match:
    username = match.group(1)
    ip_address = match.group(2)
    print(f"Login Detected: {username} from {ip_address}")
```

## Practical Project: Automated Backup Script

Here is a fully functional script that zips your `worlds/` folder and names it with the current date and time.

```python
import os
import shutil
import zipfile
from datetime import datetime
from pathlib import Path

def backup_worlds(source_dir: str, backup_dir: str):
    # Ensure backup directory exists
    Path(backup_dir).mkdir(parents=True, exist_ok=True)
    
    # Generate filename with timestamp
    timestamp = datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
    archive_name = os.path.join(backup_dir, f"worlds_backup_{timestamp}.zip")
    
    print(f"Creating backup: {archive_name}...")
    
    # Create the zip file
    with zipfile.ZipFile(archive_name, 'w', zipfile.ZIP_DEFLATED) as zipf:
        for root, dirs, files in os.walk(source_dir):
            for file in files:
                file_path = os.path.join(root, file)
                # Add to zip, preserving directory structure relative to source
                arcname = os.path.relpath(file_path, source_dir)
                zipf.write(file_path, arcname)
                
    print("Backup completed successfully!")

if __name__ == "__main__":
    backup_worlds("./worlds", "./backups")
```

---

import Quiz from '@site/src/components/Quiz';

<Quiz questions={[
  {
    question: "Why should you use the 'with' statement when opening files in Python?",
    options: ["It makes the file read faster.", "It automatically compresses the file.", "It ensures the file is properly closed even if an error occurs.", "It allows you to bypass file permissions."],
    correctAnswer: 2,
    explanation: "The 'with' statement acts as a Context Manager that guarantees file.close() is called automatically when the block exits."
  },
  {
    question: "Which module is recommended for cross-platform file path manipulation in modern Python?",
    options: ["os.path", "pathlib", "filepaths", "directories"],
    correctAnswer: 1,
    explanation: "While os.path works, pathlib (introduced in Python 3.4) provides a more modern, object-oriented approach to path manipulation."
  },
  {
    question: "What function is used to parse a JSON string into a Python dictionary?",
    options: ["json.load()", "json.loads()", "json.dump()", "json.parse()"],
    correctAnswer: 1,
    explanation: "json.loads() parses a JSON string (the 's' stands for string). json.load() is used for reading directly from a file object."
  },
  {
    question: "Which of these formats requires a third-party library (like PyYAML) to parse in Python?",
    options: ["JSON", "CSV", "YAML", "XML"],
    correctAnswer: 2,
    explanation: "Python has built-in modules for JSON, CSV, and XML, but YAML requires installing external libraries via pip."
  },
  {
    question: "Which module should you use to copy, move, or recursively delete a directory tree?",
    options: ["os", "sys", "shutil", "pathlib"],
    correctAnswer: 2,
    explanation: "The shutil (shell utilities) module offers high-level operations on files and collections of files, like shutil.rmtree() or shutil.copy()."
  },
  {
    question: "What is the primary use of the subprocess module?",
    options: ["To spawn new processes and execute system commands", "To manage multi-threading", "To process sub-strings", "To monitor memory usage"],
    correctAnswer: 0,
    explanation: "The subprocess module allows you to spawn new processes, connect to their input/output/error pipes, and obtain their return codes."
  },
  {
    question: "What library is best suited for building professional Command Line Interfaces (CLI) with flags and help menus?",
    options: ["sys.argv", "argparse", "cmd", "terminal"],
    correctAnswer: 1,
    explanation: "The argparse module makes it easy to write user-friendly command-line interfaces by automatically generating help and usage messages."
  },
  {
    question: "In the re module, what does re.search() do?",
    options: ["Replaces text based on a pattern", "Scans through a string looking for the first location where a pattern matches", "Returns a list of all matches in a string", "Compiles a regex pattern into an object"],
    correctAnswer: 1,
    explanation: "re.search() returns a Match object if the pattern is found anywhere in the string, or None if no match is found."
  },
  {
    question: "How do you access environment variables in Python?",
    options: ["env.get()", "os.environ", "sys.env", "system.getenv()"],
    correctAnswer: 1,
    explanation: "os.environ is a dictionary-like object that allows you to read or set environment variables."
  },
  {
    question: "In the provided backup script, what does os.walk() do?",
    options: ["Generates a random path", "Checks if a directory exists", "Generates the file names in a directory tree by walking it either top-down or bottom-up", "Changes the working directory"],
    correctAnswer: 2,
    explanation: "os.walk() yields a 3-tuple (dirpath, dirnames, filenames) for every directory in the tree rooted at the specified directory."
  }
]} />
