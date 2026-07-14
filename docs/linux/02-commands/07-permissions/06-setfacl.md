---
title: setfacl
description: Set file access control lists.
---

# `setfacl`

The `setfacl` command is used to set, modify, or remove Access Control Lists (ACLs) on files and directories. ACLs provide a more fine-grained permission mechanism than standard Linux permissions, allowing you to grant access to specific users or groups outside the standard owner/group/other model.

## Basic Syntax

```bash
setfacl [OPTION]... {-m|-x} acl_spec file...
```

## Common Options

| Option | Description |
|---|---|
| `-m`, `--modify` | Modify the ACL of a file or directory. |
| `-x`, `--remove` | Remove entries from the ACL. |
| `-b`, `--remove-all` | Remove all extended ACL entries. |
| `-R`, `--recursive` | Apply operations to all files and directories recursively. |
| `-d`, `--default` | Operations apply to the Default ACL (directories only). |

## Real-world Examples

1. **Grant read and write permissions to a specific user (`alice`) on a file:**
   ```bash
   setfacl -m u:alice:rw document.txt
   ```

2. **Grant execute permission to a specific group (`developers`):**
   ```bash
   setfacl -m g:developers:rx script.sh
   ```

3. **Remove a specific user's ACL entry:**
   ```bash
   setfacl -x u:alice document.txt
   ```

4. **Set a default ACL for a directory (new files inherit these permissions):**
   ```bash
   setfacl -d -m g:developers:rwx shared_project/
   ```
   *(To check the current ACLs of a file, use the `getfacl` command)*
