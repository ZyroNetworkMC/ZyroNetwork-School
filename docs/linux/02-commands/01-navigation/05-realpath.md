---
title: Linux realpath Command
sidebar_position: 5
description: Learn how to display the absolute path of files and directories using realpath.
---

# Linux `realpath` Command

The `realpath` command converts relative paths into absolute paths.

It also resolves symbolic links.

---

# Why is it Useful?

Suppose:

```bash
cd Documents
```

Current location:

```text
/home/aayan/Documents
```

File:

```bash
notes.txt
```

Using:

```bash
realpath notes.txt
```

Output:

```text
/home/aayan/Documents/notes.txt
```

---

# Syntax

```bash
realpath [OPTION] FILE
```

---

# Basic Usage

```bash
realpath file.txt
```

Output:

```text
/home/aayan/file.txt
```

---

# View Current Directory Absolute Path

```bash
realpath .
```

Output:

```text
/home/aayan
```

---

# Parent Directory

```bash
realpath ..
```

Output:

```text
/home
```

---

# Command Options

| Flag | Description |
|-------|-------------|
| `-e` | File must exist |
| `-m` | Allow missing components |
| `-s` | Do not resolve symlinks |
| `--relative-to` | Relative output |
| `--help` | Display help |

---

# `realpath -e`

Require file existence.

```bash
realpath -e file.txt
```

---

# `realpath -m`

Allow missing files.

```bash
realpath -m test/file.txt
```

Output:

```text
/home/aayan/test/file.txt
```

---

# `realpath -s`

Do not resolve symbolic links.

---

# Symbolic Link Example

Create:

```bash
ln -s Documents docs
```

Normal:

```bash
realpath docs
```

Output:

```text
/home/aayan/Documents
```

---

Using:

```bash
realpath -s docs
```

Output:

```text
/home/aayan/docs
```

---

# `--relative-to`

Example:

```bash
realpath --relative-to=/home/aayan /home/aayan/Documents
```

Output:

```text
Documents
```

---

# Real Examples

---

# PocketMine Server

```bash
realpath plugins
```

Output:

```text
/home/minecraft/server/plugins
```

---

# Website Files

```bash
realpath /var/www/html
```

---

# PHP Project

```bash
realpath app/Controllers
```

---

# Ethical Hacking

```bash
realpath /usr/share/wordlists
```

---

# Common Mistakes

### File does not exist

Use:

```bash
realpath -m
```

---

### Confusing Relative and Absolute Paths

Relative:

```text
Documents/file.txt
```

Absolute:

```text
/home/aayan/Documents/file.txt
```

---

# Exercises

1.

```bash
realpath .
```

2.

```bash
realpath ..
```

3.

```bash
realpath Documents
```

4.

Create symlink and test:

```bash
realpath
realpath -s
```

---

# Mini Lab

Create:

```bash
mkdir Projects
touch Projects/index.php
```

Run:

```bash
realpath Projects
realpath Projects/index.php
```

---

# Command Summary

| Command | Purpose |
|----------|----------|
| `realpath file` | Absolute path |
| `realpath .` | Current directory |
| `realpath ..` | Parent directory |
| `realpath -e` | Require existence |
| `realpath -m` | Allow missing paths |
| `realpath -s` | Keep symlinks |

---

# Key Takeaways

✅ Converts relative paths into absolute paths.

✅ Resolves symbolic links.

✅ Extremely useful in scripts and automation.

✅ Helpful for server administration and development.

---

# Next Chapter

➡ File Management Commands (`mkdir`, `touch`, `cp`, `mv`, `rm`)
