---
title: ftp
description: Internet file transfer program.
---

# `ftp` command

## Detailed Explanation
The `ftp` command is the user interface to the Internet standard File Transfer Protocol (FTP). It allows users to transfer files to and from a remote network site. Like telnet, standard FTP is insecure because it transfers data and credentials in plaintext. Secure alternatives include SFTP (SSH File Transfer Protocol) or FTPS (FTP over SSL/TLS).

## Basic Syntax
```bash
ftp [options] [host]
```

## Common Flags/Options
| Option | Description |
|---|---|
| `-p` | Use passive mode for data transfers. Allows use in environments where a firewall prevents connections from the outside world. |
| `-i` | Turns off interactive prompting during multiple file transfers. |
| `-n` | Restrains `ftp` from attempting "auto-login" upon initial connection. |

## Common Interactive Commands
Once connected to an FTP prompt (`ftp> `), you can use these commands:
*   `ls` or `dir`: List files in the remote directory.
*   `cd`: Change directory on the remote server.
*   `lcd`: Change directory on your local machine.
*   `get <file>`: Download a single file.
*   `mget <pattern>`: Download multiple files.
*   `put <file>`: Upload a single file.
*   `mput <pattern>`: Upload multiple files.
*   `bin`: Switch to binary transfer mode (essential for non-text files).
*   `ascii`: Switch to ASCII transfer mode (for text files).
*   `quit` or `bye`: Exit the FTP session.

## Real-world Examples

**Connect to an FTP server:**
```bash
ftp ftp.example.com
```

**Connect using passive mode (often needed behind NAT/firewalls):**
```bash
ftp -p ftp.example.com
```

*(Inside the FTP prompt)* **Download a file:**
```
ftp> get readme.txt
```
