---
title: scp
description: Secure copy (remote file copy program).
---

# `scp` command

## Detailed Explanation
`scp` (secure copy) copies files between hosts on a network. It uses SSH for data transfer, and uses the same authentication and provides the same security as SSH. It will ask for passwords or passphrases if they are needed for authentication.

## Basic Syntax
```bash
scp [options] [[user@]host1:]file1 ... [[user@]host2:]file2
```

## Common Flags/Options
| Option | Description |
|---|---|
| `-r` | Recursively copy entire directories. |
| `-P <port>` | Specifies the port to connect to on the remote host. (Note: capital 'P' unlike ssh). |
| `-i <identity_file>`| Selects the file from which the identity (private key) for public key authentication is read. |
| `-C` | Enable compression. Passes the `-C` flag to ssh to enable compression. |
| `-v` | Verbose mode. |

## Real-world Examples

**Copy a local file to a remote server:**
```bash
scp file.txt user@192.168.1.100:/path/to/destination/
```

**Copy a remote file to the local machine:**
```bash
scp user@192.168.1.100:/remote/path/file.txt /local/path/
```

**Copy a directory recursively to a remote server:**
```bash
scp -r /local/directory/ user@example.com:/remote/directory/
```

**Copy a file using a specific SSH port and private key:**
```bash
scp -P 2222 -i ~/.ssh/my_key file.txt user@example.com:/tmp/
```
