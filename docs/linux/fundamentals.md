---
title: Bash Fundamentals & Hosting
sidebar_label: Bash & Hosting
sidebar_position: 2
---

# Bash Fundamentals & Hosting PMMP

To host PocketMine-MP on Linux, you must learn the basic filesystem navigation commands and how to manage running background tasks.

## Essential Linux Commands

- `ls`: List files in the current folder.
- `cd <folder>`: Navigate to a folder.
- `mkdir <name>`: Create a new folder.
- `rm -rf <folder>`: Delete a folder recursively.
- `screen -S <name>`: Start a background screen session (keeps your server running even when you close SSH!).

## Running PocketMine on Ubuntu

To run a server, copy the folder to your VPS and execute:

```bash
# 1. Create directory
mkdir pmmp-server && cd pmmp-server

# 2. Download installer
curl -sL https://get.pmmp.io | bash -s -

# 3. Start a background screen session
screen -S minecraft

# 4. Start the server
./start.sh
```

To exit the screen session without stopping the server, press `Ctrl + A` then `D` (Detach). To return later, type `screen -r minecraft`!

---

## Test Your Linux Knowledge!

Take the interactive quiz below to verify you've mastered these bash commands.

import Quiz from '@site/src/components/Quiz';

<Quiz questions={[
  {
    question: "Which command is used to return to a detached screen session in Linux?",
    options: [
      "screen -S",
      "screen -r",
      "screen -d",
      "screen -ls"
    ],
    correctAnswer: 1,
    explanation: "-r stands for resume, which brings a detached background screen back to your active terminal."
  },
  {
    question: "What does 'rm -rf' do?",
    options: [
      "Renames a file.",
      "Deletes files and directories recursively and forcefully.",
      "Reads a file's content.",
      "Downloads a file from the internet."
    ],
    correctAnswer: 1,
    explanation: "rm stands for remove. -r recursively deletes folders, and -f forcefully bypasses confirmation prompts."
  }
]} />
