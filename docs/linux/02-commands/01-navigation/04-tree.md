---
title: Linux tree Command
sidebar_position: 4
description: Learn how to display directories in a tree-like structure using the tree command.
---

# Linux `tree` Command

The `tree` command is used to display files and directories in a hierarchical tree structure.

It is extremely useful for:

- Understanding folder structures
- Documentation
- Development projects
- Linux administration
- Server management

---

# What is the tree command?

Instead of displaying files like:

```bash
ls
```

The `tree` command shows:

```text
Projects
├── Website
│   ├── index.php
│   └── style.css
├── Scripts
│   └── backup.sh
└── README.md
```

---

# Installation

Some Linux distributions do not include `tree` by default.

Ubuntu/Debian:

```bash
sudo apt install tree
```

Fedora:

```bash
sudo dnf install tree
```

Arch Linux:

```bash
sudo pacman -S tree
```

---

# Syntax

```bash
tree [OPTIONS] [DIRECTORY]
```

---

# Basic Usage

```bash
tree
```

Example:

```text
.
├── Documents
├── Downloads
└── Projects
```

---

# View Specific Directory

```bash
tree /etc
```

---

# Command Options

| Flag | Description |
|-------|-------------|
| `-a` | Show hidden files |
| `-d` | Show only directories |
| `-L` | Limit depth level |
| `-f` | Show full paths |
| `-h` | Human readable sizes |
| `-s` | Show file sizes |
| `-I` | Ignore patterns |
| `--dirsfirst` | Directories first |
| `-p` | Show permissions |
| `-u` | Show owner |
| `-g` | Show group |

---

# `tree -a`

Display hidden files.

```bash
tree -a
```

Output:

```text
.
├── .bashrc
├── .ssh
└── Documents
```

---

# `tree -d`

Display only directories.

```bash
tree -d
```

Output:

```text
.
├── Documents
├── Downloads
└── Projects
```

---

# `tree -L`

Limit depth.

```bash
tree -L 2
```

Example:

```text
Projects
├── Website
└── Scripts
```

---

# `tree -f`

Show full paths.

```bash
tree -f
```

Output:

```text
/home/aayan/Documents
/home/aayan/Projects
```

---

# `tree -h`

Show human readable sizes.

```bash
tree -h
```

---

# `tree -s`

Show file sizes.

```bash
tree -sh
```

Output:

```text
[4.0K] Documents
[1.2K] file.txt
```

---

# `tree -I`

Ignore directories or files.

Example:

```bash
tree -I "node_modules"
```

Multiple patterns:

```bash
tree -I "node_modules|vendor|.git"
```

---

# `tree --dirsfirst`

Display directories before files.

```bash
tree --dirsfirst
```

---

# `tree -p`

Display permissions.

```bash
tree -p
```

---

# `tree -u`

Display owner.

```bash
tree -u
```

---

# `tree -g`

Display group.

```bash
tree -g
```

---

# Combining Flags

Example:

```bash
tree -aL 3
```

Example:

```bash
tree -ah
```

Example:

```bash
tree -aL 3 --dirsfirst
```

---

# Real Development Example

Laravel Project:

```bash
tree -L 2
```

Output:

```text
app
bootstrap
config
database
public
resources
routes
storage
```

---

# PocketMine Server Example

```bash
tree -L 2
```

Output:

```text
server
├── plugins
├── worlds
├── logs
├── resource_packs
└── players
```

---

# Website Example

```bash
tree /var/www/html
```

Output:

```text
html
├── index.php
├── css
├── js
└── images
```

---

# Ethical Hacking Example

```bash
tree /usr/share/wordlists
```

---

# Common Mistakes

### Command not found

Install:

```bash
sudo apt install tree
```

---

### Huge output

Limit depth:

```bash
tree -L 2
```

---

# Exercises

1.

```bash
tree
```

2.

```bash
tree -a
```

3.

```bash
tree -L 3
```

4.

```bash
tree -d
```

5.

```bash
tree -I ".git"
```

---

# Mini Project

Create:

```bash
mkdir -p Website/{css,js,images}
touch Website/index.php
```

Run:

```bash
tree Website
```

Output:

```text
Website
├── css
├── images
├── index.php
└── js
```

---

# Command Summary

| Command | Purpose |
|----------|----------|
| `tree` | Display hierarchy |
| `tree -a` | Show hidden files |
| `tree -d` | Directories only |
| `tree -L` | Limit depth |
| `tree -I` | Ignore patterns |

---

# Next Chapter

➡ Linux `realpath` Command
