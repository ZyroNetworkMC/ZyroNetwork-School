---
title: Interactive Sandbox
sidebar_label: Interactive Sandbox
sidebar_position: 11
---

# Interactive In-Browser Sandbox

Welcome to the **ZyroNetwork School Interactive Sandbox**! 

You don't need to configure a local server or open an external tab to test your plugin structure. You can customize your plugin metadata and main classes right here in this browser tab and watch the simulated PocketMine-MP server boot up and enable your custom plugin in real-time!

import Playground from '@site/src/components/Playground';

<Playground />

## How it works
1. **Interactive Inputs**: Change the **Plugin Name** or the **Author Name** in the config dashboard above. Notice how the code files on the left (`Main.php` and `plugin.yml`) automatically update their namespaces, main paths, and author definitions.
2. **Execution**: Click the glowing purple **Run Simulated Server** button. 
3. **Console Logging**: Watch the right-hand panel start a simulated PocketMine-MP server instance, loading your custom plugin metadata, outputting your custom logs, and completing the server boot sequences.

This is a great tool to visually understand how your `plugin.yml` mappings link directly to your PHP main files and namespaces before you write code locally!
