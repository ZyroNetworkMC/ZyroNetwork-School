---
title: zip
description: Package and compress (archive) files.
---

# `zip`

The `zip` command is a compression and file packaging utility. It creates `.zip` archives, which are widely compatible across different operating systems, including Windows and macOS.

## Basic Syntax

```bash
zip [OPTIONS] zipfile file...
```

## Common Options

| Option | Description |
|---|---|
| `-r` | Travel the directory structure recursively. |
| `-e` | Encrypt the contents of the zip archive using a password. |
| `-q` | Quiet mode; suppress informational messages. |
| `-u` | Update (replace) existing files in the archive if they are newer. |
| `-9` | Compress better (slower). |

## Real-world Examples

1. **Create a zip archive containing multiple files:**
   ```bash
   zip archive.zip file1.txt file2.txt
   ```

2. **Zip an entire directory recursively:**
   ```bash
   zip -r project_backup.zip /path/to/project
   ```

3. **Create a password-protected zip file:**
   ```bash
   zip -e secure_data.zip confidential.pdf
   ```

4. **Update an existing zip file with newer files:**
   ```bash
   zip -u archive.zip file1.txt
   ```
