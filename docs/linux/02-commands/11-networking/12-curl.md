---
title: curl
description: Transfer a URL.
---

# `curl` command

## Detailed Explanation
`curl` is a command-line tool and library for transferring data specified with URL syntax. It supports a wide range of protocols, including HTTP, HTTPS, FTP, FTPS, SCP, SFTP, TFTP, DICT, TELNET, LDAP, or FILE. It is heavily used in automation, scripts, and testing APIs.

## Basic Syntax
```bash
curl [options] [URL...]
```

## Common Flags/Options
| Option | Description |
|---|---|
| `-O` | Write output to a local file named like the remote file we get. |
| `-o <file>` | Write output to `<file>` instead of stdout. |
| `-I`, `--head` | Fetch the headers only. |
| `-X <command>` | Specify request command to use (e.g., GET, POST, PUT, DELETE). |
| `-d <data>` | HTTP POST data. |
| `-H <header>` | Pass custom header(s) to server. |
| `-L`, `--location`| Follow HTTP redirects. |

## Real-world Examples

**Download a file and save it with its original name:**
```bash
curl -O https://example.com/file.zip
```

**Fetch only the HTTP headers of a website:**
```bash
curl -I https://google.com
```

**Send a POST request with JSON data:**
```bash
curl -X POST -H "Content-Type: application/json" -d '{"key":"value"}' https://api.example.com/data
```

**Follow redirects:**
```bash
curl -L http://example.com
```
