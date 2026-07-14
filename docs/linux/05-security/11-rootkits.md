---
title: Rootkits and Detection
description: Understanding rootkits and how to scan for them.
---

# Rootkits and Detection

A rootkit is a collection of malicious software designed to enable access to a computer or an area of its software that is not otherwise allowed (for example, to an unauthorized user) and often masks its existence or the existence of other software. 

Once a rootkit is installed, the operating system cannot be trusted, as the rootkit often intercepts system calls to hide processes, files, and network connections.

## Detection Tools

Because rootkits subvert the OS, detecting them from within the infected OS is difficult. However, tools like `chkrootkit` and `rkhunter` look for known signatures and anomalies.

### RKHunter (Rootkit Hunter)

RKHunter checks for rootkits, backdoors, and local exploits.

```bash
# Install
sudo apt install rkhunter

# Update file properties database (run this right after a clean OS install!)
sudo rkhunter --propupd

# Run a check
sudo rkhunter --check
```

### Chkrootkit

Another popular scanner that checks for signs of rootkits locally.
```bash
# Install
sudo apt install chkrootkit

# Run
sudo chkrootkit
```

## What to do if you find a Rootkit?

If a system is confirmed to be compromised by a rootkit, **do not attempt to clean it**. You can never be 100% sure the system is safe again. 

The only secure response is:
1. Isolate the machine from the network immediately.
2. Back up user data (be very careful not to back up executables or scripts).
3. Completely wipe the drives and reinstall the OS from trusted media.
4. Investigate how the attacker gained root access in the first place to prevent it from happening again.
