---
title: "Git Basics for System Administrators"
description: "Essential Git commands, workflows, and concepts for managing configuration and infrastructure."
---

# Git Basics for System Administrators

Git is a distributed version control system. While originally built for software source code, it is now the standard for tracking changes to infrastructure configuration files, scripts, and documentation (Infrastructure as Code).

## Core Concepts

- **Repository (Repo):** A directory where Git has been initialized to start versioning files.
- **Commit:** A snapshot of your files at a specific point in time.
- **Branch:** An independent line of development. The default branch is usually called `main` or `master`.
- **Remote:** A version of your repository hosted on the internet or network (e.g., GitHub, GitLab).

## Essential Workflow Commands

### 1. Initialization and Cloning
- **Create a new repository:**
  ```bash
  git init
  ```
- **Copy an existing repository:**
  ```bash
  git clone https://github.com/user/repo.git
  ```

### 2. Making Changes
- **Check the status of files (modified, untracked):**
  ```bash
  git status
  ```
- **Stage files for commit:**
  ```bash
  git add filename.conf    # Add specific file
  git add .                # Add all changes in current directory
  ```
- **Save changes to local history:**
  ```bash
  git commit -m "Update firewall rules for new web server"
  ```

### 3. Reviewing History
- **View commit history:**
  ```bash
  git log
  git log --oneline
  ```
- **See exact changes made in a file:**
  ```bash
  git diff filename.conf
  ```

### 4. Syncing with Remotes
- **Push local commits to a remote server:**
  ```bash
  git push origin main
  ```
- **Fetch and merge changes from a remote server:**
  ```bash
  git pull origin main
  ```

## Best Practices for Sysadmins

1. **Commit Often, Commit Small:** Don't bundle unrelated changes into one massive commit. If you break the server, small commits make it easier to pinpoint the exact change and revert it.
2. **Write Good Commit Messages:** "Fixed stuff" is useless. Explain *why* the change was made.
3. **Use `.gitignore`:** Never commit secrets, passwords, or temporary files. Create a `.gitignore` file to explicitly exclude these.
4. **Branch for Testing:** If you are testing a major configuration overhaul, create a branch (`git checkout -b testing-new-config`). Merge it to `main` only when verified.
