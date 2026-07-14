---
title: kill
description: Learn how to use the kill command to send signals to processes.
---

# `kill`

The `kill` command is used to send a signal to a process, usually to terminate it. Despite its name, `kill` can send any valid signal, not just those that end the process. You must know the Process ID (PID) or Job spec of the target to use `kill`.

## Basic Syntax

```bash
kill [OPTIONS] <PID>...
```

## Common Signals

You can specify the signal by name or by number. If no signal is specified, `SIGTERM` (15) is sent by default.

| Number | Name | Description |
|---|---|---|
| `1` | `SIGHUP` | Hangup. Often used to tell a daemon to reload its configuration files. |
| `2` | `SIGINT` | Interrupt from keyboard (equivalent to pressing Ctrl+C). |
| `9` | `SIGKILL` | Kill signal. Forces the process to stop immediately. The process cannot catch or ignore this. Use as a last resort. |
| `15` | `SIGTERM` | Termination signal. Asks the process to terminate gracefully, allowing it to clean up resources. (Default) |
| `18` | `SIGCONT` | Continue a stopped process. |
| `19` | `SIGSTOP` | Stop (suspend) a process. Cannot be caught or ignored. |

## Common Flags/Options

| Option | Description |
|---|---|
| `-l` | List all available signal names. |
| `-s SIGNAL`, `-SIGNAL` | Specify the signal to send. |

## Real-world Examples

### 1. Gracefully terminate a process (SIGTERM)
First, find the PID using `ps` or `top` (e.g., PID 1045). Then, send the default termination signal.

```bash
kill 1045
```

### 2. Forcefully kill a process (SIGKILL)
If a process is unresponsive and ignores a standard `kill` (SIGTERM), you can forcefully kill it. **Warning:** This can result in data corruption if the application was writing data.

```bash
kill -9 1045
# or
kill -SIGKILL 1045
```

### 3. Reload a service configuration (SIGHUP)
Many daemons (like Nginx or SSHd) will reload their configuration files without dropping connections if they receive a SIGHUP.

```bash
sudo kill -1 842
# or
sudo kill -HUP 842
```

### 4. Kill a background job
You can use `kill` directly on a job number instead of finding the PID.

```bash
kill %1
```
