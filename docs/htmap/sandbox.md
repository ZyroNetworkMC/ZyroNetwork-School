---
title: Practical Sandbox (GitHub Codespaces)
sidebar_label: Practical Sandbox
sidebar_position: 10
---

# Practical Sandbox: Develop in the Browser

Thanks to the open-source power of GitHub and the ZyroNetwork team, you can now start developing PocketMine-MP plugins **without installing anything on your computer!**

We provide a **Practical Sandbox** powered by **GitHub Codespaces**. This gives you a full Visual Studio Code environment directly in your web browser, pre-configured with PHP 8.1, Node.js, and everything you need to run a local Bedrock server.

## How to Access the Sandbox

1. Navigate to the ZyroNetwork School GitHub Repository.
2. Click the green **Code** button.
3. Switch to the **Codespaces** tab.
4. Click **Create codespace on main**.

GitHub will provision a virtual machine in the cloud for you. This usually takes about a minute. Once it's ready, you'll be greeted with a familiar VS Code interface in your browser!

## Running a Test Server

Once inside the sandbox, you can easily download and run PocketMine-MP:

1. Open the integrated terminal (`Ctrl` + `` ` ``).
2. Run the official PMMP installer:
   ```bash
   curl -sL https://get.pmmp.io | bash -s -
   ```
3. Start the server:
   ```bash
   ./start.sh
   ```

Because this is running in the cloud, you can connect to your server using the built-in **Ports** forwarding feature in Codespaces!

## Writing Your First Plugin

You can create a `plugins` folder right in the Codespaces file explorer, write your `Main.php` and `plugin.yml`, and immediately test it by typing `reload` in your running server console.

This provides the ultimate frictionless learning experience for the ZyroNetwork School!
