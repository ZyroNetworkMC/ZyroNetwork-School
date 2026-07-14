---
title: The OSI Model
description: Understand the 7 layers of the Open Systems Interconnection (OSI) model.
---

# The OSI Model

The Open Systems Interconnection (OSI) model is a conceptual framework used to describe the functions of a networking system. It characterizes computing functions into a universal set of rules and requirements in order to support interoperability between different products and software.

## The 7 Layers of the OSI Model

The model is divided into seven layers, from the physical hardware up to the application software. A common mnemonic to remember them from top to bottom is **"All People Seem To Need Data Processing"**.

### 7. Application Layer
The layer closest to the end user. It interacts with software applications that implement a communicating component. 
*Examples: Web browsers, Email clients. Protocols: HTTP, FTP, SMTP.*

### 6. Presentation Layer
Ensures that data is in a usable format and is where data encryption occurs. It translates data between the application and the network format.
*Examples: SSL/TLS encryption, JPEG, ASCII.*

### 5. Session Layer
Maintains connections and is responsible for controlling ports and sessions. It establishes, manages, and terminates connections between applications.
*Examples: NetBIOS, PPTP.*

### 4. Transport Layer
Responsible for the reliable transmission of data segments between points on a network, including segmentation, acknowledgement, and multiplexing.
*Examples: TCP (reliable), UDP (fast).*

### 3. Network Layer
Responsible for structuring and managing a multi-node network, including addressing, routing, and traffic control. This is where data is packaged into "Packets".
*Examples: IP, ICMP, Routers.*

### 2. Data Link Layer
Provides node-to-node data transfer. It detects and possibly corrects errors that may occur in the physical layer. Data here is framed into "Frames". MAC addresses operate at this layer.
*Examples: Ethernet, Switches.*

### 1. Physical Layer
The lowest layer, responsible for the physical cable or wireless connection between network nodes. It deals with raw bits (0s and 1s).
*Examples: Cables, Hubs, Fiber optics.*

## Why is the OSI Model Important?

While the OSI model is mostly theoretical (the TCP/IP model is what is practically used), it is the standard language used by IT professionals to troubleshoot network issues. 

For instance, if a website is unreachable but you can `ping` the server's IP, a network engineer might say, "We have a Layer 7 issue, but Layers 1-3 are fine."
