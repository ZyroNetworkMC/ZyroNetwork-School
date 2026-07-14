---
title: Linux pwd Command
sidebar_position: 1
description: Learn how to use the pwd command in Linux to display the current working directory.
---

# Linux `pwd` Command

The `pwd` command is one of the simplest yet most important Linux commands.

It allows you to see your **current location** inside the Linux filesystem.

As a Linux administrator, developer, ethical hacker, or server owner, you will use this command extremely frequently.

---

# What Does PWD Mean?

`pwd` stands for:

```text
Print Working Directory
```

The command prints the absolute path of the directory you are currently working in.

---

# Why is `pwd` Important?

Linux systems can contain thousands or even millions of files and directories.

Before performing operations like:

- Deleting files
- Moving files
- Creating backups
- Editing configurations

You should always know your current location.

Using the wrong directory can accidentally damage your system.

---

# Syntax

```bash
pwd [OPTION]
```

---

# Basic Usage

```bash
pwd
```

Example Output:

```text
/home/aayan
```

This means your current working directory is:

```text
/
└── home
    └── aayan
```

---

# Understanding Current Working Directory

Every terminal session always has one active directory.

Example:

```bash
pwd
```

Output:

```text
/home/aayan
```

Now move:

```bash
cd Documents
pwd
```

Output:

```text
/home/aayan/Documents
```

---

# Visual Representation

```text
Linux Filesystem

/
├── home
│   └── aayan
│       ├── Documents
│       ├── Downloads
│       └── Projects
├── etc
├── var
└── root
```

If you are inside:

```text
/home/aayan/Projects
```

Then:

```bash
pwd
```

will output:

```text
/home/aayan/Projects
```

---

# Command Options

The `pwd` command only contains a few options.

---

# `pwd -L`

### Meaning

```text
Logical Path
```

Displays the path exactly as you navigated to it.

---

### Syntax

```bash
pwd -L
```

---

### Example

Suppose:

```bash
ln -s /home/aayan/projects /home/aayan/dev
```

Move into:

```bash
cd dev
```

Run:

```bash
pwd -L
```

Output:

```text
/home/aayan/dev
```

---

# `pwd -P`

### Meaning

```text
Physical Path
```

Displays the actual directory by resolving symbolic links.

---

### Syntax

```bash
pwd -P
```

---

### Example

Current:

```bash
cd dev
```

Run:

```bash
pwd -P
```

Output:

```text
/home/aayan/projects
```

---

# Difference Between `-L` and `-P`

| Option | Meaning |
|---------|----------|
| `pwd -L` | Show logical path |
| `pwd -P` | Show physical path |

---

# Real Symbolic Link Example

Create directory:

```bash
mkdir real_folder
```

Create symbolic link:

```bash
ln -s real_folder shortcut
```

Move:

```bash
cd shortcut
```

---

### Logical Path

```bash
pwd
```

Output:

```text
/home/aayan/shortcut
```

---

### Physical Path

```bash
pwd -P
```

Output:

```text
/home/aayan/real_folder
```

---

# Practical Examples

---

## Example 1

Check current directory:

```bash
pwd
```

Output:

```text
/home/aayan
```

---

## Example 2

Move to Downloads:

```bash
cd Downloads
pwd
```

Output:

```text
/home/aayan/Downloads
```

---

## Example 3

Move to root:

```bash
cd /
pwd
```

Output:

```text
/
```

---

## Example 4

Move to logs:

```bash
cd /var/log
pwd
```

Output:

```text
/var/log
```

---

# Understanding Absolute Paths

`pwd` always returns an **absolute path**.

Absolute paths always begin with:

```text
/
```

Examples:

```text
/home
/etc
/var/log
/usr/bin
```

---

# PWD and Relative Paths

Suppose:

Current directory:

```text
/home/aayan
```

Execute:

```bash
cd Documents
```

Linux automatically interprets it as:

```text
/home/aayan/Documents
```

Use:

```bash
pwd
```

to verify your location.

---

# Real Server Examples

---

# PocketMine-MP Hosting

Server location:

```text
/home/minecraft/server
```

Verify:

```bash
cd /home/minecraft/server
pwd
```

Output:

```text
/home/minecraft/server
```

---

# Plugins Directory

```bash
cd plugins
pwd
```

Output:

```text
/home/minecraft/server/plugins
```

---

# World Folder

```bash
cd worlds
pwd
```

Output:

```text
/home/minecraft/server/worlds
```

---

# Web Hosting Example

Website files:

```text
/var/www/html
```

Check location:

```bash
cd /var/www/html
pwd
```

---

# PHP Configuration Example

```bash
cd /etc/php
pwd
```

---

# Nginx Example

```bash
cd /etc/nginx
pwd
```

---

# Ethical Hacking Example

Move to wordlists:

```bash
cd /usr/share/wordlists
pwd
```

Output:

```text
/usr/share/wordlists
```

---

# Common Mistakes

---

## Mistake 1

Deleting files without checking location.

Example:

```bash
rm -rf *
```

Always verify first:

```bash
pwd
```

---

## Mistake 2

Confusing:

```text
/
```

with:

```text
/root
```

Remember:

| Directory | Meaning |
|------------|----------|
| `/` | Root filesystem |
| `/root` | Root user's home |

---

## Mistake 3

Getting lost in deeply nested directories.

Solution:

```bash
pwd
```

---

# Combining Commands

Example:

```bash
cd Documents && pwd
```

Output:

```text
/home/aayan/Documents
```

---

Example:

```bash
mkdir Test && cd Test && pwd
```

Output:

```text
/home/aayan/Test
```

---

# Command Flags Summary

| Command | Description |
|----------|-------------|
| `pwd` | Print current directory |
| `pwd -L` | Display logical path |
| `pwd -P` | Display physical path |

---

# Interview Questions

---

### What does `pwd` stand for?

Answer:

```text
Print Working Directory
```

---

### Does `pwd` display relative paths?

No.

It always displays absolute paths.

---

### Difference between `pwd -L` and `pwd -P`?

`-L`:

```text
Logical path
```

`-P`:

```text
Physical path
```

---

### Why is `pwd` important?

To verify location before performing operations.

---

# Exercises

---

## Exercise 1

Display your current directory.

```bash
pwd
```

---

## Exercise 2

Navigate to:

```text
/etc
```

Then display location.

---

## Exercise 3

Navigate to:

```text
/var/log
```

Then print directory.

---

## Exercise 4

Create:

```bash
mkdir -p Linux/Test/Folder
```

Move there and run:

```bash
pwd
```

---

## Exercise 5

Create symbolic links and test:

```bash
pwd -L
pwd -P
```

---

# Mini Project

Create:

```text
LinuxLab
├── Documents
├── Projects
└── Scripts
```

Navigate through all directories and use `pwd` to understand Linux paths.

---

# Key Takeaways

✅ `pwd` means **Print Working Directory**

✅ Displays your current location.

✅ Returns an absolute path.

✅ Useful for system administration, ethical hacking and server management.

✅ Always use `pwd` before dangerous commands like:

```bash
rm
mv
cp
chmod
```

---

# Summary

The `pwd` command is simple but extremely important.

Understanding your current location inside Linux is essential before performing any administrative task.

Mastering `pwd` will make learning other Linux commands much easier.

---

# Next Chapter

➡ Linux `ls` Command

Learn how to list files and directories in Linux.
