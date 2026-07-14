---
title: Linux Terminal Basics
description: Learn the Linux terminal, shell, command syntax, flags, pipes, redirection, wildcards, environment variables and productivity features.
---
# Linux Terminal Basics
## Chapter Overview
In this chapter you will learn:
- What is a terminal
- What is a shell
- GUI vs CLI
- Bash shell
- Command syntax
- Arguments and flags
- Command history
- Tab completion
- Wildcards
- Pipes
- Input and output redirection
- Environment variables
- Terminal productivity tips
---
# Introduction
One of the biggest strengths of Linux is:
```text
The Command Line Interface (CLI)
```
Most Linux servers do not even have a graphical interface.
Everything is managed using:
```text
Terminal
```
This is why learning the terminal is extremely important.
---
# What is a Terminal?
A terminal is a program that allows users to interact with Linux using commands.
Examples:
- GNOME Terminal
- Konsole
- XTerm
- Windows Terminal
- Terminator
---
# Visualization
```text
User
 ↓
Terminal
 ↓
Shell
 ↓
Linux Kernel
 ↓
Hardware
```
---
# Terminal vs Shell
Many beginners think they are the same.
They are not.
---
## Terminal
A program that displays text and accepts input.
Examples:
```text
GNOME Terminal
Konsole
Windows Terminal
```
---
## Shell
A program that interprets commands.
Examples:
```text
Bash
ZSH
Fish
SH
```
---
# Example
You type:
```bash
ls
```
Flow:
```text
Terminal
      ↓
Shell
      ↓
Kernel
      ↓
Filesystem
```
---
# What is CLI?
CLI means:
```text
Command Line Interface
```
You interact using commands.
Example:
```bash
mkdir Projects
```
---
# GUI vs CLI
| Feature | GUI | CLI |
|----------|-----|-----|
| Easy for Beginners | ✅ | ❌ |
| Speed | Medium | Fast |
| Automation | Limited | Excellent |
| Remote Management | Medium | Excellent |
| Server Usage | Low | Very High |
---
# Why Professionals Prefer CLI
CLI allows:
✅ Automation
✅ Remote Administration
✅ Scripting
✅ Server Management
✅ Faster Workflows
---
# Example
Create 1000 folders:
GUI:
```text
Almost impossible.
```
CLI:
```bash
mkdir folder{1..1000}
```
Done instantly.
---
# Linux Shell
A shell is a command interpreter.
It receives commands and executes them.
---
# Popular Shells
---
## Bash
Default on many Linux systems.
```text
Bourne Again Shell
```
Most popular.
---
## ZSH
Advanced shell.
Popular with developers.
Features:
- Better autocompletion
- Themes
- Plugins
---
## Fish
Beginner friendly.
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
# Starting Bash
```bash
bash
```
---
# Exiting Shell
```bash
exit
```
---
# Command Structure
Almost every Linux command follows:
```bash
command [options] [arguments]
```
---
# Example
```bash
ls -la /home
```
---
Breakdown:
```text
ls      → command
-la     → options
/home   → argument
```
---
# Another Example
```bash
cp file.txt backup.txt
```
Breakdown:
```text
cp          → command
file.txt    → source
backup.txt  → destination
```
---
# Commands
Commands are programs.
Examples:
```bash
ls
cp
mv
rm
mkdir
cat
```
---
# Arguments
Arguments provide data to commands.
Example:
```bash
cd Documents
```
Argument:
```text
Documents
```
---
# Options / Flags
Flags modify command behavior.
Example:
```bash
ls -l
```
Flag:
```text
-l
```
---
# Multiple Flags
```bash
ls -la
```
Equivalent to:
```bash
ls -l -a
```
---
# Common Syntax
```bash
command -options arguments
```
---
# Long Options
Example:
```bash
ls --all
```
---
# Getting Help
One of the most important commands:
```bash
man
```
Example:
```bash
man ls
```
---
# Manual Pages
Shows:
- Description
- Options
- Examples
Exit:
```text
q
```
---
# Quick Help
```bash
ls --help
```
---
# Linux Prompt
Example:
```text
aayan@ubuntu:~$
```
---
Breakdown:
```text
aayan      → username
ubuntu     → hostname
~          → current directory
$          → normal user
```
---
# Root Prompt
```text
root@ubuntu:~#
```
Notice:
```text
#
```
means root user.
---
# Current Directory
Display:
```bash
pwd
```
Example:
```text
/home/aayan
```
---
# Command History
Linux stores previously executed commands.
View:
```bash
history
```
---
# Example
```text
1 ls
2 pwd
3 cd Documents
```
---
# Run Previous Command
```bash
!!
```
---
# Run Specific Command
```bash
!100
```
Runs command number 100.
---
# Search History
Press:
```text
CTRL + R
```
Type:
```text
ssh
```
Linux searches previous commands.
Huge productivity boost.
---
# Tab Completion
One of Linux's best features.
---
Example:
Type:
```bash
cd Doc
```
Press:
```text
TAB
```
Automatically becomes:
```bash
cd Documents
```
---
# Double TAB
Shows possible matches.
---
# Command Editing Shortcuts
---
## Move Cursor
Beginning:
```text
CTRL + A
```
End:
```text
CTRL + E
```
---
## Delete
Delete word:
```text
CTRL + W
```
---
Clear line:
```text
CTRL + U
```
---
Clear screen:
```text
CTRL + L
```
Equivalent:
```bash
clear
```
---
# Wildcards
Wildcards help work with multiple files.
---
# *
Matches everything.
Example:
```bash
ls *
```
---
Delete all text files:
```bash
rm *.txt
```
---
# ?
Matches one character.
Example:
```bash
ls file?.txt
```
Matches:
```text
file1.txt
fileA.txt
```
---
# []
Character ranges.
Example:
```bash
ls file[1-5].txt
```
---
Example:
```bash
ls file[a-z].txt
```
---
# Brace Expansion
Very powerful.
Create folders:
```bash
mkdir folder{1..10}
```
Creates:
```text
folder1
folder2
folder3
```
---
Create files:
```bash
touch file{1..100}.txt
```
---
# Quotes
---
## Single Quotes
```bash
echo '$HOME'
```
Output:
```text
$HOME
```
---
## Double Quotes
```bash
echo "$HOME"
```
Output:
```text
/home/aayan
```
---
# Environment Variables
Variables used by Linux.
---
View all:
```bash
env
```
---
# Important Variables
---
## HOME
```bash
echo $HOME
```
Example:
```text
/home/aayan
```
---
## USER
```bash
echo $USER
```
---
## PATH
```bash
echo $PATH
```
Example:
```text
/usr/bin:/bin:/usr/local/bin
```
---
# PATH Variable
Linux searches commands inside PATH.
Example:
```bash
ls
```
Actually:
```text
/usr/bin/ls
```
---
# View Command Location
```bash
which ls
```
---
# Create Variables
```bash
name="Aayan"
```
Use:
```bash
echo $name
```
---
# Export Variables
```bash
export JAVA_HOME=/usr/lib/java
```
---
# Input and Output Streams
Linux uses three standard streams.
---
## Standard Input
```text
stdin
0
```
---
## Standard Output
```text
stdout
1
```
---
## Standard Error
```text
stderr
2
```
---
# Redirection
One of Linux's most powerful features.
---
# Output Redirection
---
## >
Overwrite file.
```bash
echo hello > test.txt
```
---
## >>
Append.
```bash
echo world >> test.txt
```
---
# Input Redirection
```bash
cat < file.txt
```
---
# Error Redirection
```bash
command 2> errors.txt
```
---
# Redirect Everything
```bash
command > output.txt 2>&1
```
---
# Pipes
Pipes send output of one command to another.
Symbol:
```text
|
```
---
# Visualization
```text
Command1
     ↓
   PIPE
     ↓
Command2
```
---
# Example
```bash
ls | less
```
---
Example:
```bash
cat file.txt | grep admin
```
---
Example:
```bash
ps aux | grep apache
```
---
# Why Pipes Are Powerful
You can combine commands.
Example:
```bash
cat logs.txt | grep ERROR | wc -l
```
Meaning:
```text
Find ERROR lines
Count them
```
---
# Command Chaining
---
## &&
Run second command if first succeeds.
```bash
mkdir test && cd test
```
---
## ||
Run second if first fails.
```bash
cd folder || echo Failed
```
---
## ;
Always run next command.
```bash
pwd ; ls
```
---
# Running Background Processes
Use:
```bash
&
```
Example:
```bash
python app.py &
```
---
# Jobs
View:
```bash
jobs
```
---
# Stop Process
Press:
```text
CTRL + C
```
---
# Suspend Process
Press:
```text
CTRL + Z
```
---
# Linux Command Lifecycle
Example:
```bash
ls -la
```
Flow:
```text
User
 ↓
Terminal
 ↓
Shell
 ↓
Kernel
 ↓
Filesystem
 ↓
Output
```
---
# Real World Example
PocketMine Hosting:
```bash
cd /home/minecraft/server
php start.php
```
Web Hosting:
```bash
cd /var/www/html
nano index.php
```
System Administration:
```bash
cat /var/log/syslog | grep ssh
```
---
# Productivity Tips
---
## Use TAB
Avoid typing full names.
---
## Use History
```text
CTRL + R
```
---
## Learn Pipes
Pipes make Linux powerful.
---
## Read Manuals
```bash
man command
```
---
# Exercises
### Exercise 1
Find your current shell.
---
### Exercise 2
Display PATH variable.
---
### Exercise 3
Create variables.
---
### Exercise 4
Redirect output to file.
---
### Exercise 5
Use grep with pipes.
---
### Exercise 6
Use history search.
---
# Mini Project
Create files:
```bash
touch file{1..20}.txt
```
Use:
- wildcards
- pipes
- redirection
- history
- variables
---
# Summary
You learned:
✅ Terminal
✅ Shell
✅ Bash
✅ Commands
✅ Flags
✅ Arguments
✅ Environment Variables
✅ Wildcards
✅ Pipes
✅ Redirection
✅ History
✅ Productivity Features
This chapter forms the foundation of all Linux administration.
---
# References
Bash Manual:
https://www.gnu.org/software/bash/
Linux Documentation:
https://linuxcommand.org/
---
# Next Chapter
➡ pwd Command
➡ ls Command
➡ cd Command
➡ mkdir Command
➡ Linux Navigation Exercises
