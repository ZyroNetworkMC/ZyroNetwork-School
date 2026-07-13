---
title: The Main Class
sidebar_label: Main
sidebar_position: 4
---

# The Main Class: Core of Your Plugin

The Main class is the entry point for your PocketMine-MP plugin. Whenever the server starts up and loads your plugin, this is the very first class it looks for (as defined in your `plugin.yml`).

A solid understanding of the Main class is critical to writing professional, stable Bedrock plugins!

## Setting up the Namespace

In PHP, a namespace acts like a directory path to your classes, preventing naming conflicts with other plugins. Based on the `main` path defined in your `plugin.yml`, you should set up your namespace accordingly.

```php title="src/Main.php"
<?php

declare(strict_types=1);

namespace ZyroNetwork\ExamplePlugin;
```

> [!TIP]
> **Strict Types**: Notice the `declare(strict_types=1);` statement? Starting with PMMP API 4/5, enforcing strict types is highly recommended to catch type-related bugs early!

## Importing the Base Class

Every PocketMine-MP plugin main class must extend `PluginBase`. We use the `use` statement to import it.

```php title="src/Main.php"
use pocketmine\plugin\PluginBase;
```

## The Class Definition

Now we declare our class. It must match the name of the file (`Main.php` -> `class Main`) and extend `PluginBase`.

```php title="src/Main.php"
class Main extends PluginBase {
    // We will place our code inside here!
}
```

## Lifecycle Methods

PocketMine-MP triggers specific methods during the lifecycle of your plugin:
- `onLoad()`: Called when the plugin is first loaded, before the server is fully started. Use this for extremely early setup.
- `onEnable()`: Called when the plugin is fully enabled. This is where you register events, commands, and start tasks!
- `onDisable()`: Called when the server shuts down or the plugin is disabled. Use this to save data or clean up.

Let's implement `onEnable()` to print a beautiful message to the server console!

```php title="src/Main.php"
class Main extends PluginBase { 

    protected function onEnable() : void {  
        // We use the built-in getLogger() method to write to the console
        $this->getLogger()->info("ZyroNetwork Example Plugin has been Enabled!");
        $this->getLogger()->notice("Ready to process events and commands!");
    }

    protected function onDisable() : void {
        $this->getLogger()->warning("ZyroNetwork Example Plugin has been Disabled!");
    }
}
```

> [!IMPORTANT]
> **Void Return Types**: In PocketMine-MP API 5 (and PHP 8.1+), lifecycle methods like `onEnable()` **must** specify the `: void` return type. Failing to do this will cause your plugin to crash on startup!

## The Final Result

Putting it all together, your `Main.php` should look exactly like this:

```php title="src/Main.php"
<?php

declare(strict_types=1);

namespace ZyroNetwork\ExamplePlugin;

use pocketmine\plugin\PluginBase;

class Main extends PluginBase { 

    protected function onEnable() : void {  
        $this->getLogger()->info("ZyroNetwork Example Plugin has been Enabled!");
        $this->getLogger()->notice("Ready to process events and commands!");
    }

    protected function onDisable() : void {
        $this->getLogger()->warning("ZyroNetwork Example Plugin has been Disabled!");
    }

}
```

When you start your server, you should see your custom, color-coded log messages right in your console! Welcome to the world of PocketMine-MP development.
