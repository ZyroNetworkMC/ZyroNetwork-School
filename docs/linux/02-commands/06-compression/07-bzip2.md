---
title: bzip2
description: A block-sorting file compressor.
---

# `bzip2`

The `bzip2` command is a file compression tool that uses the Burrows-Wheeler block sorting text compression algorithm and Huffman coding. It compresses files more tightly than `gzip` but less so than `xz`.

## Basic Syntax

```bash
bzip2 [OPTION]... [FILE]...
```

## Common Options

| Option | Description |
|---|---|
| `-d`, `--decompress` | Force decompression. |
| `-k`, `--keep` | Keep (don't delete) input files. |
| `-z`, `--compress` | Force compression. |
| `-1` to `-9` | Set block size to 100k .. 900k when compressing (default is 900k). |

## Real-world Examples

1. **Compress a file (replaces file with `file.bz2`):**
   ```bash
   bzip2 access.log
   ```

2. **Compress a file and keep the original:**
   ```bash
   bzip2 -k access.log
   ```

3. **Decompress a `.bz2` file:**
   ```bash
   bzip2 -d archive.tar.bz2
   ```
   *(Alternatively, use `bunzip2 archive.tar.bz2`)*

4. **Compress with the fastest but least efficient mode:**
   ```bash
   bzip2 -1 large_file.img
   ```
