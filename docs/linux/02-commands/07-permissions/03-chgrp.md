---
title: chgrp
description: Change group ownership.
---

# `chgrp`

The `chgrp` (change group) command changes the group ownership of a file or directory. While `chown` can also change the group, `chgrp` is specifically designed for this single task.

## Basic Syntax

```bash
chgrp [OPTION]... GROUP FILE...
```

## Common Options

| Option | Description |
|---|---|
| `-R`, `--recursive` | Operate on files and directories recursively. |
| `-v`, `--verbose` | Output a diagnostic for every file processed. |
| `-c`, `--changes` | Like verbose but report only when a change is made. |
| `--reference=RFILE` | Use RFILE's group rather than specifying a GROUP. |

## Real-world Examples

1. **Change the group of a file:**
   ```bash
   chgrp developers script.sh
   ```

2. **Change the group of a directory and its contents recursively:**
   ```bash
   chgrp -R editors /shared/documents/
   ```

3. **Match the group of another file:**
   ```bash
   chgrp --reference=template.txt newfile.txt
   ```
