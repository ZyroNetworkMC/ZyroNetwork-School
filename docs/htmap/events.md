---
title: Events & Listeners
sidebar_label: Events
sidebar_position: 5
---

# Mastering Event Listeners

Events are the true powerhouse of PocketMine-MP plugins! Whenever something happens in the game—a player joining, breaking a block, or taking damage—the server fires an **Event**.

By creating a **Listener**, your plugin can intercept these events to monitor, modify, or even completely cancel them!

## How Events Work
1. **The Trigger**: A player breaks a diamond block.
2. **The Interception**: PocketMine pauses the action and passes an object containing details (who broke it, what block it was) to any registered Listeners.
3. **Your Logic**: You check if the player has permission. If they don't, you **cancel** the event!
4. **The Outcome**: Because you cancelled it, the block break is reverted on the player's screen, and the block remains intact.

## Creating an Event Listener Class

Create a new file named `EventListener.php` in the same folder as your `Main.php` class.

```php title="src/EventListener.php"
<?php

declare(strict_types=1);

namespace ZyroNetwork\ExamplePlugin;

use pocketmine\event\Listener;

class EventListener implements Listener {
    // Event handling methods will go here
}
```

> [!NOTE]
> Any class that handles events **must** implement the `pocketmine\event\Listener` interface!

## Creating an Event Handling Method

Let's use `PlayerMoveEvent` as an example to freeze players in place. 

First, import the class:
```php
use pocketmine\event\player\PlayerMoveEvent;
use pocketmine\utils\TextFormat;
```

Then, create a public method that accepts the event object as an argument. The method name can be anything, but we recommend naming it after the event (e.g., `onPlayerMove`).

```php
    public function onPlayerMove(PlayerMoveEvent $event) : void {
        // Our logic goes here!
    }
```

## Handling & Cancelling the Event

In this example, we want to freeze a player and spam them with their coordinates! But before we do that, we should respect other plugins. If another plugin already cancelled this event, we should stop our logic.

```php
    public function onPlayerMove(PlayerMoveEvent $event) : void {
        // 1. Check if the event is already cancelled
        if($event->isCancelled()) { 
            return; 
        }
        
        $player = $event->getPlayer();
        
        // 2. We can call methods on the Event object to get data!
        $from = $event->getFrom();
        $to = $event->getTo();

        // Send them a message
        $player->sendMessage(TextFormat::RED . "You are frozen! You tried to move from X:" . $from->getFloorX() . " to X:" . $to->getFloorX());

        // 3. Cancel the event to completely stop them from moving
        $event->cancel(); 
    }
```

> [!CAUTION]
> **Performance Warning**: `PlayerMoveEvent` fires dozens of times per second per player. Be very careful with the code you put inside here. Heavy math or database queries in a move event will instantly lag your server!

## Registering the Listener

Just creating the class isn't enough; we need to tell the server that it exists! 

Head back to your `Main.php` file and register the events inside the `onEnable` method:

```php title="src/Main.php"
    protected function onEnable() : void {  
        // Register our new EventListener class
        $this->getServer()->getPluginManager()->registerEvents(new EventListener(), $this);
        
        $this->getLogger()->info("Events Registered!");
    }
```

## Conclusion

You now know how to intercept gameplay mechanics! Try experimenting with `BlockBreakEvent`, `PlayerJoinEvent`, and `EntityDamageEvent`. The possibilities are absolutely limitless.
