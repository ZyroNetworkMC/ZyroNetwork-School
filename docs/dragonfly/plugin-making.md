---
title: Building on Dragonfly
sidebar_label: Building on Dragonfly
sidebar_position: 2
---

# Building a Dragonfly Server with Handlers

Unlike traditional servers where you drop a `.jar` or `.phar` into a `plugins/` folder, Dragonfly is a library. You build your server in Go, importing Dragonfly as a module, and attach your custom behaviors using Handlers.

## 1. Initializing Your Project

Start by creating a new folder and initializing a Go module:

```bash
mkdir zyro-dragonfly
cd zyro-dragonfly
go mod init zyro-dragonfly
go get github.com/df-mc/dragonfly
```

## 2. Setting Up the Main File

Create a `main.go` file. This file will configure the server, initialize logging, and start listening for connections.

```go title="main.go"
package main

import (
	"fmt"
	"github.com/df-mc/dragonfly/server"
	"github.com/df-mc/dragonfly/server/player/chat"
	"github.com/pelletier/go-toml"
	"github.com/sirupsen/logrus"
	"os"
)

func main() {
	log := logrus.New()
	log.Formatter = &logrus.TextFormatter{ForceColors: true}
	log.Level = logrus.DebugLevel

	chat.Global.Subscribe(chat.StdoutSubscriber{})

	conf, err := readConfig(log)
	if err != nil {
		log.Fatalln(err)
	}

	srv := conf.New()
	srv.CloseOnProgramEnd()

	srv.Listen()
	for srv.Accept(nil) {
		// The Accept loop blocks and waits for a new player connection
	}
}

func readConfig(log server.Logger) (server.Config, error) {
	c := server.DefaultConfig()
	var zero server.Config
	if _, err := os.Stat("config.toml"); os.IsNotExist(err) {
		data, err := toml.Marshal(c)
		if err != nil {
			return zero, fmt.Errorf("failed encoding default config: %v", err)
		}
		if err := os.WriteFile("config.toml", data, 0644); err != nil {
			return zero, fmt.Errorf("failed creating config: %v", err)
		}
		return c.WithLogger(log), nil
	}
	data, err := os.ReadFile("config.toml")
	if err != nil {
		return zero, fmt.Errorf("error reading config: %v", err)
	}
	if err := toml.Unmarshal(data, &c); err != nil {
		return zero, fmt.Errorf("error decoding config: %v", err)
	}
	return c.WithLogger(log), nil
}
```

## 3. Creating a Player Handler

To respond to events like a player joining or chatting, you must create a type that implements `player.Handler`.

```go title="handler.go"
package main

import (
	"github.com/df-mc/dragonfly/server/player"
	"github.com/df-mc/dragonfly/server/cmd"
)

type ZyroHandler struct {
	player.NopHandler
	p *player.Player
}

// HandleChat is called when the player sends a chat message.
func (h *ZyroHandler) HandleChat(ctx *player.Context, message *string) {
	// Let's make all messages upper case!
	*message = h.p.Name() + " says loudly: " + *message
}
```

## 4. Attaching the Handler

In your `main.go` loop, attach this handler when a player joins:

```go
	for srv.Accept(func(p *player.Player) {
		p.Handle(&ZyroHandler{p: p})
		p.Message("Welcome to the ZyroNetwork Dragonfly Server!")
	}) {
	}
```

## 5. Compiling and Running

Compile your server to an executable:
```bash
go build
./zyro-dragonfly
```

Congratulations! You just built a high-performance, concurrent Minecraft server in Go using Dragonfly!
