---
title: jobs
description: Learn how to use the jobs command to list active jobs in the current shell.
---

# `jobs`

The `jobs` command is a shell builtin used to list all the active jobs running in the background or currently suspended in the current shell session. It is an essential tool for managing processes that you have launched from your terminal.

## Basic Syntax

```bash
jobs [OPTIONS] [JOB_SPEC]
```

## Common Flags/Options

| Option | Description |
|---|---|
| `-l` | List process IDs (PIDs) in addition to the normal information. |
| `-p` | List only the process IDs (PIDs) of the job's process group leader. |
| `-n` | Display only jobs whose status has changed since the last notification. |
| `-r` | Restrict output to running jobs only. |
| `-s` | Restrict output to stopped (suspended) jobs only. |

## Understanding Job Specs

Jobs are referred to by a job number, indicated in brackets `[]`. You can reference a job using `%` followed by the number.

- `%1`: Refers to job number 1.
- `%+` or `%%`: Refers to the current (most recently foregrounded/backgrounded) job.
- `%-`: Refers to the previous job.

## Real-world Examples

### 1. Viewing active jobs
Suppose you started a long-running script and pushed it to the background using `&`, and suspended another using `Ctrl+Z`. Running `jobs` will list them.

```bash
jobs
```
**Output Example:**
```
[1]-  Stopped                 nano /etc/hosts
[2]+  Running                 ./long_backup.sh &
```

### 2. Viewing jobs with PIDs
If you need to know the actual Process ID of the jobs to use with commands like `kill`, use the `-l` flag.

```bash
jobs -l
```
**Output Example:**
```
[1]-  14235 Stopped                 nano /etc/hosts
[2]+  14236 Running                 ./long_backup.sh &
```

### 3. Using `jobs` with other commands
Once you know the job number, you can use it with commands like `fg`, `bg`, or `kill`.

```bash
# Kill job number 2
kill %2
```
