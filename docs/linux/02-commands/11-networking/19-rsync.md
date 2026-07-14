---
title: rsync
description: A fast, versatile, remote (and local) file-copying tool.
---

# `rsync` command

## Detailed Explanation
`rsync` is a widely-used utility to keep copies of a file on two computer systems synchronized. It is famous for its delta-transfer algorithm, which reduces the amount of data sent over the network by sending only the differences between the source files and the existing files in the destination. It is highly favored for backups and mirroring.

## Basic Syntax
```bash
rsync [OPTION...] SRC... [DEST]
```

## Common Flags/Options
| Option | Description |
|---|---|
| `-v`, `--verbose` | Increase verbosity. |
| `-a`, `--archive` | Archive mode; equals `-rlptgoD` (preserves permissions, times, symbolic links, etc., and recurses). |
| `-r`, `--recursive`| Recurse into directories. |
| `-z`, `--compress` | Compress file data during the transfer. |
| `-P` | Same as `--partial --progress` (shows progress bar and keeps partially transferred files). |
| `-e, --rsh=COMMAND`| Specify the remote shell to use (e.g., `ssh`). |
| `--delete` | Delete extraneous files from dest dirs (make destination an exact mirror of source). |

## Real-world Examples

**Copy a directory locally, preserving permissions and showing progress:**
```bash
rsync -av /source/directory/ /destination/directory/
```
*(Note: The trailing slash on `/source/directory/` means "copy the contents of this directory". Without it, it copies the directory itself.)*

**Sync a local directory to a remote server over SSH:**
```bash
rsync -avz -e ssh /local/dir/ user@remote_host:/remote/dir/
```

**Mirror a directory (deleting files on destination that don't exist on source):**
```bash
rsync -avz --delete /local/dir/ user@remote_host:/remote/dir/
```

**Show progress for large file transfers:**
```bash
rsync -avP large_file.iso /destination/
```
