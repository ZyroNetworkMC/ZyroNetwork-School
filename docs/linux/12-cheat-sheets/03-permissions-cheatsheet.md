---
title: Permissions Cheat Sheet
description: A quick reference for Linux file permissions and user management.
---

# Permissions Cheat Sheet

Understanding user management and file permissions is critical for security.

## User and Group Management
| Command | Description |
| :--- | :--- |
| `useradd -m -s /bin/bash john` | Create user 'john' with a home directory and bash shell. |
| `usermod -aG sudo john` | Add 'john' to the 'sudo' group. |
| `passwd john` | Change password for 'john'. |
| `groupadd admins` | Create a new group. |

## Octal Permissions Reference
- **4** = Read (r)
- **2** = Write (w)
- **1** = Execute (x)
- **0** = No permission (-)

Combine them:
- **7** = rwx
- **6** = rw-
- **5** = r-x

## Chmod Examples
| Command | Description |
| :--- | :--- |
| `chmod 777 file` | Everyone can read, write, and execute (Dangerous!). |
| `chmod 755 dir` | Owner has full access, others can read/execute. Standard for directories. |
| `chmod 644 file` | Owner can read/write, others can read. Standard for files. |
| `chmod 600 file` | Only owner can read/write. Standard for SSH keys. |

## Chown Examples
```bash
# Change owner to john
chown john file.txt

# Change owner and group
chown john:admins file.txt

# Recursively change owner of a directory
chown -R www-data:www-data /var/www/html
```
