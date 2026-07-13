---
title: Making Your First Plugin
sidebar_label: Making Your First Plugin
sidebar_position: 2
---

# Crafting Your First Nukkit Plugin

This comprehensive guide will walk you through the anatomy of a Nukkit plugin. By the end, you'll have a fully functioning Java `.jar` plugin that you can load onto your Nukkit server.

## 1. The `plugin.yml`

Every Nukkit plugin requires a `plugin.yml` file in the `src/main/resources` folder. This file tells the server metadata about your plugin.

```yaml title="src/main/resources/plugin.yml"
name: ZyroNetworkExample
version: "1.0.0"
api: ["1.0.0"]
main: network.zyro.example.Main
author: ZyroNetwork
description: An example Nukkit plugin provided by the ZyroNetwork School!
```

## 2. The Main Class

Your main class must extend `cn.nukkit.plugin.PluginBase`. This is the entry point for your plugin.

```java title="src/main/java/network/zyro/example/Main.java"
package network.zyro.example;

import cn.nukkit.plugin.PluginBase;
import cn.nukkit.utils.TextFormat;

public class Main extends PluginBase {

    @Override
    public void onEnable() {
        this.getLogger().info(TextFormat.GREEN + "ZyroNetworkExample has been enabled!");
        
        // Register events
        this.getServer().getPluginManager().registerEvents(new EventListener(), this);
    }

    @Override
    public void onDisable() {
        this.getLogger().info(TextFormat.RED + "ZyroNetworkExample has been disabled!");
    }
}
```

## 3. Handling Events

Nukkit's event system is based on annotations. You create a class implementing `cn.nukkit.event.Listener` and use the `@EventHandler` annotation.

```java title="src/main/java/network/zyro/example/EventListener.java"
package network.zyro.example;

import cn.nukkit.event.EventHandler;
import cn.nukkit.event.Listener;
import cn.nukkit.event.player.PlayerJoinEvent;
import cn.nukkit.utils.TextFormat;

public class EventListener implements Listener {

    @EventHandler
    public void onPlayerJoin(PlayerJoinEvent event) {
        String playerName = event.getPlayer().getName();
        event.setJoinMessage(TextFormat.AQUA + "Welcome to ZyroNetwork, " + playerName + "!");
    }
}
```

## 4. Building and Testing

1. Use your build tool (Maven or Gradle) to package the project.
   - For Maven: Run `mvn clean package`
2. Locate the compiled `.jar` file in your `target/` directory.
3. Place the `.jar` in your Nukkit server's `plugins` folder.
4. Start the server and enjoy!
