---
title: The TCP/IP Model
description: Learn about the TCP/IP model, the practical framework that powers the Internet.
---

# The TCP/IP Model

While the OSI model is a theoretical framework, the Transmission Control Protocol/Internet Protocol (TCP/IP) model is the practical implementation that actually powers the Internet and most modern networks.

## Architecture of the TCP/IP Model

The TCP/IP model is more concise than the OSI model, condensing the seven layers down to four.

### 4. Application Layer
*(Corresponds to OSI Layers 5, 6, and 7)*
This layer defines the protocols used by most applications for providing user services or exchanging data.
- **Protocols:** HTTP, HTTPS, FTP, SSH, DNS.
- **Function:** Handles high-level protocols, data representation, and session control.

### 3. Transport Layer
*(Corresponds to OSI Layer 4)*
Responsible for providing communication session management between host computers. Defines the level of service and status of the connection used when transporting data.
- **Protocols:** TCP, UDP.
- **Function:** 
  - **TCP (Transmission Control Protocol):** Connection-oriented, ensures all data arrives intact and in order. Slower but reliable.
  - **UDP (User Datagram Protocol):** Connectionless, sends data without checking if it arrived. Fast but unreliable (used for video streaming, gaming).

### 2. Internet Layer
*(Corresponds to OSI Layer 3)*
Responsible for routing packets across independent networks. 
- **Protocols:** IP (IPv4, IPv6), ICMP, ARP.
- **Function:** Attaches IP addresses to packets and determines the best path to the destination (Routing).

### 1. Network Access Layer (Link Layer)
*(Corresponds to OSI Layers 1 and 2)*
Defines the protocols and hardware required to deliver data across some physical network.
- **Protocols:** Ethernet, Wi-Fi (802.11).
- **Function:** Handles MAC addressing and physical transmission of data.

## TCP/IP in Linux

In Linux, the TCP/IP stack is implemented directly in the kernel. You can interact with these layers using various commands:

- **Application:** `curl http://example.com`
- **Transport:** `ss -tuna` (Shows active TCP/UDP ports)
- **Internet:** `ip route` (Shows routing table) or `ping` (Uses ICMP)
- **Network Access:** `ip link` (Shows physical interfaces and MAC addresses)

## Encapsulation

When data is sent, it goes down the model. Each layer wraps the data with its own header information (like putting a letter in an envelope, then putting that envelope in a box).
1. Application Data
2. + TCP Header = **Segment**
3. + IP Header = **Packet**
4. + Ethernet Header/Trailer = **Frame**
5. Converted to bits and sent across the wire.
