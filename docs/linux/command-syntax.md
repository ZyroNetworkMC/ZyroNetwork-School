---
title: Linux Command Syntax
sidebar_position: 5
description: Learn how Linux commands are structured, including commands, arguments, options, flags, pipelines and redirections.
---

# Linux Command Syntax

## Introduction

Every Linux command follows a specific structure.

General syntax:

```bash
command [options] [arguments]
```

Example:

```bash
ls -la /home
```

---

## Breaking Down Commands

Example:

```bash
cp file.txt backup.txt
```

Components:

| Part | Meaning |
|------|----------|
| cp | Command |
| file.txt | Source argument |
| backup.txt | Destination argument |

---

## Commands

Commands are executable programs.

Examples:

```bash
ls
pwd
cp
mv
mkdir
grep
```

---

## Arguments

Arguments provide information to commands.

Example:

```bash
cd Documents
```

Argument:

```text
Documents
```

---

## Options / Flags

Flags modify command behavior.

Example:

```bash
ls -l
```

Displays long listing.

---

## Multiple Flags

```bash
ls -lah
```

Equivalent to:

```bash
ls -l -a -h
```

---

## Long Options

Many commands support long options.

Example:

```bash
ls --all
```

---

# Command Examples

---

## Example 1

```bash
mkdir Projects
```

Command:

```text
mkdir
```

Argument:

```text
Projects
```

---

## Example 2

```bash
rm -rf test
```

| Part | Meaning |
|------|----------|
| rm | Remove command |
| -r | Recursive |
| -f | Force |
| test | Target |

---

# Command Chaining

---

## ;

Always run next command.

```bash
pwd ; ls
```

---

## &&

Run next command only if previous succeeds.

```bash
mkdir test && cd test
```

---

## ||

Run next command if previous fails.

```bash
cd folder || echo "Folder not found"
```

---

# Pipelines

Symbol:

```text
|
```

Pass output from one command to another.

Example:

```bash
cat file.txt | grep admin
```

---

# Redirection

---

## >

Overwrite file.

```bash
echo hello > file.txt
```

---

## >>

Append output.

```bash
echo world >> file.txt
```

---

## 2>

Redirect errors.

```bash
command 2> errors.txt
```

---

## &>

Redirect everything.

```bash
command &> output.txt
```

---

# Exit Codes

Linux commands return exit status.

Check:

```bash
echo $?
```

---

Example:

```text
0 → Success
1 → Error
```

---

# Real Examples

Search logs:

```bash
cat /var/log/syslog | grep ssh
```

Create server:

```bash
mkdir pocketmine && cd pocketmine
```

---

# Summary

You learned:

✅ Commands

✅ Arguments

✅ Flags

✅ Pipelines

✅ Redirection

✅ Exit Codes

These concepts are used in every Linux command.
