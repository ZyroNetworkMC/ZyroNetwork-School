---
title: Tasks
sidebar_label: Tasks
sidebar_position: 8
---
# Tasks

## Creating a Simple Plugin Task

Tasks allow you to run code after a delay or repeatedly at set intervals. In this tutorial, we will create a simple repeating task that sends a message to a player every 10 seconds.

First, create a folder called `tasks` inside your plugin source directory. In this folder, create a file named `MyTask.php`.

Add the following code to `MyTask.php`:

```php title="MyTask.php"
<?php

namespace YourPluginName\YourName\tasks;

use pocketmine\scheduler\Task;
use YourPluginName\YourName\Main;

class MyTask extends Task {

    private Main $plugin;
    private string $playerName;

    public function __construct(Main $plugin, string $playerName) {
        $this->plugin = $plugin;
        $this->playerName = $playerName;
    }

    public function onRun() : void {
        // Find the player exact instance on the server
        $player = $this->plugin->getServer()->getPlayerExact($this->playerName);
        
        if($player !== null) {
            $player->sendMessage("10 seconds have passed!");
        }
    }
}
```

## Scheduling the Task

To run this task, we schedule it from our `Main` class.

### Running a Delayed Task (Once)

If we want the task to run only once after a 10-second delay:

```php title="Main.php"
// Inside a command or event method:
$task = new tasks\MyTask($this, $sender->getName());

// 1 second = 20 ticks. So 10 seconds = 200 ticks.
$this->getScheduler()->scheduleDelayedTask($task, 10 * 20);
```

### Running a Repeating Task

If we want the task to repeat every 10 seconds:

```php title="Main.php"
// Inside a command or event method:
$task = new tasks\MyTask($this, $sender->getName());

// This will run the task repeatedly every 200 ticks (10 seconds)
$this->getScheduler()->scheduleRepeatingTask($task, 10 * 20);
```