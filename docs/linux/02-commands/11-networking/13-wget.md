---
title: wget
description: The non-interactive network downloader.
---

# `wget` command

## Detailed Explanation
GNU `wget` is a free utility for non-interactive download of files from the Web. It supports HTTP, HTTPS, and FTP protocols, as well as retrieval through HTTP proxies. "Non-interactive" means it can work in the background, while the user is not logged on, allowing you to start a retrieval and disconnect from the system.

## Basic Syntax
```bash
wget [option]... [URL]...
```

## Common Flags/Options
| Option | Description |
|---|---|
| `-O <file>` | Write documents to `<file>`. |
| `-c`, `--continue`| Resume getting a partially-downloaded file. |
| `-q`, `--quiet` | Quiet (no output). |
| `-r`, `--recursive`| Specify recursive download (download a whole directory/website). |
| `--limit-rate=<rate>`| Limit download rate (e.g., 50k, 1m). |
| `-i <file>` | Read URLs from a local or external file. |

## Real-world Examples

**Download a single file:**
```bash
wget https://example.com/file.iso
```

**Resume an interrupted download:**
```bash
wget -c https://example.com/large_file.iso
```

**Download a file and save it under a different name:**
```bash
wget -O new_name.zip https://example.com/old_name.zip
```

**Download all URLs listed in a file:**
```bash
wget -i urls.txt
```

**Mirror a website (recursive download):**
```bash
wget -r -p -k -E https://example.com
```
