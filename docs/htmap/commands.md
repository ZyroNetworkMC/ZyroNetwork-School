---
title: Commands
sidebar_label: Commands
sidebar_position: 6
---
# Commands

Using commands in your plugin allows users and administrators to trigger specific behaviors. 

Let's start by importing the necessary classes in your `Main.php`:

```php title="Main.php"
// The Command base class
use pocketmine\command\Command;
      
// The CommandSender interface (can be a player or console)
use pocketmine\command\CommandSender;

// The Player class (specifically for in-game players)
use pocketmine\player\Player;

// The VanillaItems registry to obtain items in API 5
use pocketmine\item\VanillaItems;
```

To set up a command, we override the default `onCommand` method in our main class:

```php title="Main.php"
public function onCommand(CommandSender $sender, Command $command, string $label, array $args) : bool {
    switch($command->getName()) {
        case "example":
            $sender->sendMessage("Hello " . $sender->getName() . "!");
            return true;
        default:
            throw new \AssertionError("This line will never be executed");
    }
}
```

## Restricting to Players Only

Often, a command should only be runnable by players in-game, not by the console. We can use the `instanceof` operator to check this:

```php
public function onCommand(CommandSender $sender, Command $command, string $label, array $args) : bool {
    switch($command->getName()) {
        case "give-steak":
            if(!$sender instanceof Player) {
                $sender->sendMessage("This command can only be executed in-game!");
                return true;
            }

            // In PMMP API 5, items are fetched from registries like VanillaItems
            $item = VanillaItems::STEAK()->setCount(4);
            $sender->getInventory()->addItem($item);
            $sender->sendMessage("You have received 4 Steaks!");
            return true;
    }
    return false;
}
```

## Command Arguments

Arguments are the extra words typed after the command name. They are passed as an array of strings in `$args`.
For example, in `/give-steak 12`:
- `$args[0]` will be `"12"`

Let's modify the command to let the player specify how many steaks they want:

```php
public function onCommand(CommandSender $sender, Command $command, string $label, array $args) : bool {
    switch($command->getName()) {
        case "give-steak":
            if(!$sender instanceof Player) {
                $sender->sendMessage("This command can only be executed in-game!");
                return true;
            }

            // Default count if no argument is provided
            $count = 4;

            if(isset($args[0])) {
                // Ensure the argument is a positive integer
                if(is_numeric($args[0]) && (int)$args[0] > 0) {
                    $count = (int)$args[0];
                } else {
                    $sender->sendMessage("Please specify a valid positive number.");
                    return true;
                }
            }

            $item = VanillaItems::STEAK()->setCount($count);
            $sender->getInventory()->addItem($item);
            $sender->sendMessage("You have received " . $count . " Steak(s)!");
            return true;
    }
    return false;
}
```
