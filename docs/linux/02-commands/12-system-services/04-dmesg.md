---
title: dmesg
description: Print or control the kernel ring buffer.
---

# `dmesg` command

## Detailed Explanation
`dmesg` (diagnostic message) is used to examine or control the kernel ring buffer. The default action is to display all messages from the kernel ring buffer. It is highly useful for troubleshooting hardware issues, checking driver loading, and examining early boot messages before the main syslog daemon starts.

## Basic Syntax
```bash
dmesg [options]
```

## Common Flags/Options
| Option | Description |
|---|---|
| `-T`, `--ctime` | Print human-readable timestamps. |
| `-w`, `--follow` | Wait for new messages. This feature is supported only on systems with a readable /dev/kmsg (similar to `tail -f`). |
| `-c`, `--read-clear`| Read and clear the ring buffer. |
| `-l <level>` | Restrict output to the given (comma-separated) list of levels (e.g., err, warn, info). |
| `-H`, `--human` | Enable human-readable output (pager, colors, readable times). |

## Real-world Examples

**Display the kernel messages with human-readable timestamps:**
```bash
dmesg -T
```

**Search for messages related to a specific hardware device (e.g., a USB drive):**
```bash
dmesg | grep -i usb
```

**Watch for new kernel messages in real-time (useful when plugging in hardware):**
```bash
dmesg -w
```

**Show only kernel error and warning messages:**
```bash
dmesg -l err,warn
```
