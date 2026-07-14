---
title: Linux ls Command
sidebar_position: 2
description: Learn how to list files and directories using the ls command.
---

# Linux ls Command

## What is ls?

The `ls` command is used to list files and directories.

---

# Syntax

```bash
ls [OPTIONS] [FILE/DIRECTORY]
```

---

# Basic Example

```bash
ls
```

Output:

```text
Documents Downloads Pictures Music
```

---

# Command Flags

| Flag | Full Form | Description |
|------|------------|-------------|
| `-a` | all | Show hidden files |
| `-l` | long | Long listing format |
| `-h` | human-readable | Human readable sizes |
| `-R` | recursive | Show subdirectories recursively |
| `-t` | time | Sort by modification time |
| `-S` | size | Sort by file size |
| `-r` | reverse | Reverse sorting |
| `-i` | inode | Display inode numbers |
| `-d` | directory | List directory itself |
| `-F` | classify | Append indicators |
| `--color` | color | Colored output |
| `--help` | help | Show help |

---

# ls -a

Shows hidden files.

Example:

```bash
ls -a
```

Output:

```text
.
..
.bashrc
.profile
Documents
```

---

# Why Hidden Files Matter

Linux configuration files usually begin with:

```text
.
```

Examples:

```text
.bashrc
.gitconfig
.ssh
```

---

# ls -l

Long listing format.

Example:

```bash
ls -l
```

Output:

```text
drwxr-xr-x 2 aayan users 4096 Jul 14 Documents
-rw-r--r-- 1 aayan users 1254 Jul 14 test.txt
```

---

# Understanding ls -l Output

```text
drwxr-xr-x
```

Breakdown:

```text
d         → Directory
rwx       → Owner permissions
r-x       → Group permissions
r-x       → Others permissions
```

---

```text
2
```

Number of links.

---

```text
aayan
```

Owner.

---

```text
users
```

Group.

---

```text
4096
```

File size.

---

```text
Jul 14
```

Modification date.

---

```text
Documents
```

Filename.

---

# ls -lh

Human readable sizes.

Example:

```bash
ls -lh
```

Output:

```text
1.2K notes.txt
450M backup.zip
2.1G world.tar.gz
```

Without:

```bash
ls -l
```

Output:

```text
2147483648 world.tar.gz
```

---

# ls -la

Most commonly used option.

Example:

```bash
ls -la
```

Shows:

- Hidden files
- Permissions
- Ownership
- Sizes

---

# ls -R

Recursive listing.

Example:

```bash
ls -R
```

Output:

```text
Projects:
website
server

website:
index.php
```

---

# ls -t

Sort by newest files.

Example:

```bash
ls -lt
```

Useful for:

- Logs
- Development
- Server management

---

# ls -S

Sort by size.

Example:

```bash
ls -lS
```

Useful for finding huge files.

---

# ls -r

Reverse sorting.

Example:

```bash
ls -lr
```

---

# ls -i

Display inode numbers.

Example:

```bash
ls -i
```

Output:

```text
123456 file.txt
```

Useful for:

- Forensics
- Hard links
- Filesystem debugging

---

# ls -d

List directory itself.

Example:

```bash
ls -ld /etc
```

Without `-d`, contents of `/etc` may be listed.

---

# ls -F

Classify files.

Example:

```bash
ls -F
```

Output:

```text
Documents/
script.sh*
link@
```

Meaning:

| Symbol | Meaning |
|---------|----------|
| `/` | Directory |
| `*` | Executable |
| `@` | Symbolic Link |

---

# Combining Flags

Linux allows multiple flags.

Example:

```bash
ls -lah
```

Equivalent:

```bash
ls -l -a -h
```

---

# Most Common Combinations

### Show everything

```bash
ls -lah
```

---

### Sort by time

```bash
ls -lht
```

---

### Sort by size

```bash
ls -lhS
```

---

### Recursive listing

```bash
ls -laR
```

---

# Real World Examples

---

## PocketMine Server

```bash
ls -lah plugins/
```

Output:

```text
BedWars.phar
EconomyAPI.phar
ScoreHud.phar
```

---

## Logs

```bash
ls -lt logs/
```

Newest logs appear first.

---

## Large Worlds

```bash
ls -lhS worlds/
```

Find biggest worlds.

---

## VPS Administration

```bash
ls -lah /var/www/html
```

Verify website files.

---

# Common Mistakes

### Forgetting hidden files

```bash
ls
```

won't show:

```text
.htaccess
.env
.git
```

Use:

```bash
ls -a
```

---

### Reading huge sizes

Use:

```bash
ls -lh
```

---

### Missing permissions

Use:

```bash
ls -l
```

---

# Interview Questions

### What does `ls` do?

Lists files and directories.

---

### What does `ls -a` do?

Shows hidden files.

---

### Difference between `ls -l` and `ls -lh`?

`-h` makes sizes human readable.

---

### What does `ls -i` show?

Inode numbers.

---

# Exercises

1. Show hidden files.

```bash
ls -a
```

2. Show permissions.

```bash
ls -l
```

3. Show file sizes.

```bash
ls -lh
```

4. Sort by newest.

```bash
ls -lt
```

5. Sort by size.

```bash
ls -lhS
```

---

# Practice Lab

Create:

```bash
mkdir LinuxLab
cd LinuxLab

touch file1.txt
touch file2.txt
mkdir Projects
mkdir Scripts
```

Try:

```bash
ls
ls -l
ls -la
ls -lah
ls -R
ls -lhS
```

---

# Command Summary

| Command | Purpose |
|----------|----------|
| `ls` | List files |
| `ls -a` | Hidden files |
| `ls -l` | Detailed listing |
| `ls -lh` | Human readable sizes |
| `ls -la` | Detailed + hidden |
| `ls -R` | Recursive |
| `ls -lt` | Sort by time |
| `ls -lhS` | Sort by size |
| `ls -i` | Inodes |

---

# Next Chapter

➡ Linux `cd` Command
