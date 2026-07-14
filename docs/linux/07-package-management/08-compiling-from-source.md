---
title: Compiling from Source
description: How to build and install software from raw source code.
---

# Compiling from Source

Before modern package managers existed, if you wanted software on Linux, you had to compile it from its source code (usually C or C++). While less common today, it is still necessary when a program isn't in your distribution's repository or you need to enable specific custom compilation flags.

## The Standard "Configure, Make, Install" Workflow

To compile software, you typically need the "build essentials" (a compiler like `gcc` and `make`).
On Debian/Ubuntu: `sudo apt install build-essential`

### 1. Extract the Source Code
Source code is usually distributed as a compressed tarball (`.tar.gz`).
```bash
tar -xzf software-1.0.tar.gz
cd software-1.0
```

### 2. Configure
The `./configure` script checks your system to ensure all necessary dependencies and libraries are present. It generates the `Makefile`.
```bash
./configure
```
*If this step fails, it usually means you are missing development libraries (e.g., you might need to `apt install libssl-dev`).*

### 3. Make
This step actually compiles the code into binary executables using the instructions in the `Makefile`.
```bash
make
```
*You can speed this up on multi-core systems by adding `-j` (e.g., `make -j4` for 4 cores).*

### 4. Install
This step copies the compiled binaries into system directories (like `/usr/local/bin`). It requires root privileges.
```bash
sudo make install
```

## Disadvantages
Software installed this way is **untracked**. Your package manager (like `apt`) doesn't know it exists. To uninstall it, you must keep the original source directory and run `sudo make uninstall` (if the developer provided that option).
