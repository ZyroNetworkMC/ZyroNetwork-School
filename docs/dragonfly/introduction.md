---
title: Introduction to Dragonfly
sidebar_label: Introduction
sidebar_position: 1
slug: /dragonfly
---

# Introduction to Dragonfly Plugin Development

Welcome to the **ZyroNetwork School** guide on Dragonfly! Dragonfly is an incredibly modern, concurrent, and high-performance server software for Minecraft: Bedrock Edition, written entirely in **Go (Golang)**. 

## Why Dragonfly?

Unlike traditional servers that operate primarily on a single thread (like PocketMine-MP), Dragonfly is built from the ground up to utilize Go's massive concurrency capabilities (goroutines). This means your server can scale across multiple CPU cores flawlessly.

### Features of Dragonfly
- **Go Powered**: Compile your plugins directly into the server or build extensible handler modules.
- **Data-Driven**: Very clean abstraction over Minecraft's complex state.
- **Safety**: Strong typing and memory safety through Go.
- **Unprecedented Performance**: Can handle thousands of entities without breaking a sweat.

## Prerequisites

To get started with Dragonfly, you will need:

1. **Go (Golang)**: Installed on your system (version 1.20+ recommended).
2. **An IDE**: VS Code (with the Go extension) or GoLand.
3. **Basic Go Knowledge**: Understanding of structs, interfaces, and goroutines is highly recommended.

## Setting Up Your Workspace

Dragonfly development is slightly different from PMMP or Nukkit. In Dragonfly, plugins are often built by importing the Dragonfly modules directly into your own Go application and running the server instance from your `main.go`.

In the next sections, we will explore how to initialize a Dragonfly server, handle player connections, and create custom commands in Go!
