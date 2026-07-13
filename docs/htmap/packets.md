---
title: Bedrock Network Packets
sidebar_label: Network Packets
sidebar_position: 13
---

# Bedrock Protocol: Network Packets

Every interaction between the Minecraft: Bedrock client and your PocketMine-MP server happens via **Network Packets**. Packets are structured chunks of binary data sent over the UDP (RakNet) protocol.

By intercepting and custom-building network packets, you can achieve visual effects, fake entities, fake blocks, and UI elements that are normally impossible through the standard PocketMine-MP API!

## 1. Packet Flow Architecture
- **Inbound Packets**: Client -> Server (e.g., player movements, breaking a block, clicking a chest).
- **Outbound Packets**: Server -> Client (e.g., spawning an entity, changing time, playing sound effects).

## 2. Sending a Custom Packet to a Player

Let's send a fake sound packet or particle effect using a specific Bedrock packet: `LevelSoundEventPacket`.

First, import the necessary protocol classes:
```php
use pocketmine\network\mcpe\protocol\LevelSoundEventPacket;
use pocketmine\network\mcpe\protocol\types\LevelSoundEvent;
```

Inside your plugin, construct the packet and send it to the player's connection:

```php
public function playFakeSound(Player $player) : void {
    // 1. Instantiate the packet object
    $packet = LevelSoundEventPacket::create(
        LevelSoundEvent::ATTACK_STRONG, // Sound event type
        $player->getPosition(),         // Sound position
        -1,                             // Extra data
        "minecraft:player",             // Entity type
        false,                          // Is baby mob
        false                           // Disable relative volume
    );

    // 2. Direct-send through the player network session
    $player->getNetworkSession()->sendDataPacket($packet);
}
```

---

## 3. Intercepting Client Packets (NetworkSession)

Sometimes you want to listen to packets before PocketMine processes them. For example, intercepting a player clicking a UI button or performing an action.

You can listen to incoming packets by registering a custom **Packet Listener**.

```php title="src/PacketListener.php"
<?php

declare(strict_types=1);

namespace ZyroNetwork\PacketExample;

use pocketmine\network\mcpe\NetworkSession;
use pocketmine\network\mcpe\protocol\AnimatePacket;
use pocketmine\network\mcpe\protocol\ClientboundPacket;
use pocketmine\network\mcpe\protocol\ServerboundPacket;
use pocketmine\network\mcpe\protocol\Packet;
use pocketmine\plugin\Plugin;

class PacketListener {

    public static function register(Plugin $plugin) : void {
        $plugin->getServer()->getPluginManager()->registerEvents(new class implements \pocketmine\event\Listener {
            
            // Listen to network sessions starting up
            public function onSessionCreation(\pocketmine\event\server\DataPacketReceiveEvent $event) : void {
                $packet = $event->getPacket();
                
                // Inspecting the specific packet type
                if ($packet instanceof AnimatePacket) {
                    // This fires when the player swings their arm!
                    $event->getOrigin()->getLogger()->debug("Swing arm intercepted!");
                }
            }
            
        }, $plugin);
    }
}
```

> [!IMPORTANT]
> **Packet Security**: Modifying or cancelling critical packets like `PlayerAuthInputPacket` can result in desynchronization between the client and server, causing players to get kicked for speed-hacking or glitching through blocks. Be extremely precise when editing protocol streams!
