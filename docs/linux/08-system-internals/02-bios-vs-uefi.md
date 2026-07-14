---
title: BIOS vs UEFI
description: A comprehensive comparison between legacy BIOS and modern UEFI firmware interfaces.
---

# BIOS vs UEFI

Every computer relies on low-level software called firmware to initialize hardware and boot the operating system. Historically, this was BIOS. Today, it is UEFI. Understanding the difference is critical for system partitioning, bootloader configuration, and hardware management.

## BIOS (Basic Input/Output System)

BIOS is a legacy standard that has been around since the 1980s.

*   **16-bit Limitations**: BIOS runs in 16-bit mode, which restricts its ability to address memory. It can only access up to 1MB of RAM, making hardware initialization slow.
*   **MBR Partitioning**: BIOS relies on the Master Boot Record (MBR) partitioning scheme. MBR is limited to addressing drives up to 2.2 Terabytes in size and only supports up to 4 primary partitions.
*   **Boot Process**: BIOS looks at the first sector of the boot drive to find the bootloader. It lacks a standardized way to manage multiple bootloaders.
*   **Text Interface**: Typically, BIOS setup utilities offer basic text-based interfaces navigated via a keyboard.

## UEFI (Unified Extensible Firmware Interface)

UEFI is the modern replacement for BIOS, designed to overcome its limitations.

*   **32-bit or 64-bit Operation**: UEFI can run in 32-bit or 64-bit modes, allowing it to address significantly more memory and initialize hardware in parallel, leading to faster boot times.
*   **GPT Partitioning**: UEFI uses the GUID Partition Table (GPT). GPT supports drives far larger than 2.2TB (up to 9.4 Zettabytes) and allows for up to 128 primary partitions by default.
*   **EFI System Partition (ESP)**: Instead of hiding boot code in the first sector, UEFI looks for a specific FAT32 partition called the ESP. Operating systems store their bootloaders as `.efi` executable files within this partition.
*   **Secure Boot**: UEFI introduces Secure Boot, a feature that checks the digital signature of the bootloader and kernel before executing them, protecting against rootkits.
*   **Graphical Interface**: UEFI setup utilities often feature rich graphical interfaces with mouse support.

## Key Differences Summary

| Feature | BIOS | UEFI |
| :--- | :--- | :--- |
| **Architecture** | 16-bit | 32-bit or 64-bit |
| **Drive Size Limit** | 2.2 TB | 9.4 Zettabytes |
| **Partition Scheme** | MBR | GPT |
| **Boot Mechanism** | Boot sector (MBR) | EFI System Partition (ESP) |
| **Security** | None | Secure Boot support |

## Best Practices and Concepts

*   **Always use UEFI for modern systems**: When provisioning new Linux servers or VMs, always choose UEFI over legacy BIOS unless you have a specific compatibility requirement.
*   **Partitioning**: If you boot via UEFI, your disk must use GPT. Your partition layout must include an EFI System Partition (usually mounted at `/boot/efi` on Linux) formatted as FAT32.
*   **Compatibility Support Module (CSM)**: Many UEFI implementations include a CSM, which allows them to emulate a legacy BIOS to boot older operating systems. This is being phased out in modern hardware.
