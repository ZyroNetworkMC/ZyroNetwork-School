---
title: Bash Shell
description: Learn about Bash shell, command interpretation and shell features.
---
# Bash Shell
## What is Bash?
Bash stands for:
```text
Bourne Again Shell
```
It is the default shell for most Linux distributions.
---
# Architecture
```text
User
 ↓
Terminal
 ↓
Bash
 ↓
Kernel
 ↓
Hardware
```
---
# Responsibilities of Bash
- Execute commands
- Manage variables
- Handle scripts
- Perform expansions
- Manage jobs
---
# Check Current Shell
```bash
echo $SHELL
```
Example:
```text
/bin/bash
```
---
# Start New Bash Session
```bash
bash
```
Exit:
```bash
exit
```
---
# Features
✅ Variables
✅ Pipes
✅ Redirections
✅ Job Control
✅ Tab Completion
✅ Scripting
---
# Bash Configuration Files
---
## System-wide
```text
/etc/profile
```
---
## User Configuration
```text
~/.bashrc
```
---
## Login Shell
```text
~/.profile
```
---
# Reload Configuration
```bash
source ~/.bashrc
```
---
# Bash Prompt
Example:
```text
aayan@ubuntu:~$
```
Meaning:
| Part | Description |
|------|--------------|
| aayan | Username |
| ubuntu | Hostname |
| ~ | Current directory |
| $ | Normal user |
---
Root user:
```text
root@ubuntu:~#
```
---
# Useful Bash Commands
History:
```bash
history
```
Aliases:
```bash
alias
```
Shell variables:
```bash
set
```
Environment variables:
```bash
env
```
---
# Why Bash Matters
Bash is essential for:
- Linux Administration
- Ethical Hacking
- DevOps
- Server Automation
- PocketMine Hosting
---
# Summary
Bash is the heart of Linux command-line operations.
