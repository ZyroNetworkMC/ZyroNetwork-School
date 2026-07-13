---
title: PocketMine-MP 1.26.40 Pre-Release Announcement
description: Breaking down the new features, performance improvements, and API changes in the PMMP 1.26.40 pre-release.
slug: pmmp-1-26-40-prerelease
authors: [AustinKarasu]
tags: [release, pmmp, zyronetwork]
image: https://i.imgur.com/mErPwqL.png
---

The **ZyroNetwork Team** is proud to share the **PocketMine-MP 1.26.40 Pre-Release** — a major milestone for Bedrock server development.

This version brings meaningful improvements to performance, stability, and the plugin API that the community has been waiting for.

<!-- truncate -->

## What's New in 1.26.40?

### Asynchronous Networking
The networking stack has been reworked to reduce main thread blocking. Expect lower latency and fewer tick drops under heavy player loads.

### Enhanced Entity AI
Mob behavior and pathfinding have been overhauled with a cleaner, more extensible system. Plugin developers can now hook into AI goals more easily.

### API 5 Strict Typing
PHP 8.1+ strict typing is now enforced across all API surfaces. Return types and parameter types are fully declared, making code safer and IDE auto-completion more reliable.

### New Vanilla Block Support
Additional block states and interactions have been mapped, bringing the server closer to vanilla parity for survival gameplay.

## Download & Contribute

Grab the pre-release from the ZyroNetwork GitHub organization:

🔗 **[Get PMMP 1.26.40 on GitHub](https://github.com/ZyroNetworkMC/PocketMine-MP)**

Found a bug or want to contribute? Open an issue or submit a pull request directly on the repository.

💬 **[Join the ZyroNetwork Discord](https://discord.gg/YznYkMuRUG)** to discuss this release with the community.
