---
title: "shred - Overwrite a File to Hide its Contents"
description: "Learn how to securely delete files by overwriting them using the shred command."
---

# shred

## Explanation
The `shred` command overwrites a file repeatedly to make it significantly harder for even expensive hardware probing to recover the data. It is used for securely deleting sensitive files.

## Basic Syntax
```bash
shred [OPTION]... FILE...
```

## Common Flags and Options

| Flag | Description |
|---|---|
| `-u`, `--remove` | Truncate and remove file after overwriting. |
| `-n`, `--iterations=N` | Overwrite N times instead of the default (3). |
| `-v`, `--verbose` | Show progress. |
| `-z`, `--zero` | Add a final overwrite with zeros to hide shredding. |

## Real-world Examples

1. **Overwrite a file (does not delete it):**
   ```bash
   shred secret.txt
   ```

2. **Securely overwrite and then delete a file:**
   ```bash
   shred -u secret_password.txt
   ```

3. **Shred with verbose output, 5 passes, and final zeroing:**
   ```bash
   shred -v -n 5 -z -u bank_details.csv
   ```
