---
title: Port Forwarding
description: Understand how port forwarding allows external devices to access services on a private network.
---

# Port Forwarding

By default, the NAT (Network Address Translation) running on your home or office router blocks all incoming traffic originating from the Internet. While this keeps your internal devices safe, it creates a problem if you *want* to host a service, like a Minecraft server or a web server, on your private network.

Port Forwarding solves this by creating a specific rule on the router to allow outside traffic in.

## How Port Forwarding Works

Every network service runs on a specific "Port." 
- Web servers (HTTP) use Port 80.
- Secure Web servers (HTTPS) use Port 443.
- SSH uses Port 22.
- Minecraft servers use Port 25565.

When you set up Port Forwarding, you tell the router: 
*"If any traffic arrives at your Public IP address on Port X, forward it to the Private IP Address Y on Port Z."*

### Example Scenario

You have a Linux server at home running a web server.
- Private IP of the server: `192.168.1.100`
- Service Port: `80` (HTTP)
- Public IP of your home router: `203.0.113.50`

You log into your router's admin panel and create a Port Forwarding rule:
- **External Port:** 80
- **Internal IP:** 192.168.1.100
- **Internal Port:** 80

Now, when your friend types `http://203.0.113.50` into their browser, the router sees the traffic coming in on Port 80, realizes there is a rule for it, and forwards the packets directly to your Linux server.

## Dynamic vs. Static IPs

For port forwarding to work reliably, the internal device hosting the service **must have a Static IP address**. If the Linux server uses DHCP and its IP changes to `192.168.1.102` tomorrow, the router's rule (pointing to `.100`) will break.

## Security Considerations

Port forwarding essentially punches a hole in your firewall. 
- **Only forward what you need.**
- **Keep software updated:** If you forward port 22 for SSH, ensure your server uses strong passwords or SSH keys, because bots *will* constantly try to brute-force it.
- **Port Translation:** You don't have to use the same internal and external ports. For security through obscurity, you could set the External port to `8080` and Internal to `22`. You would then SSH using `ssh -p 8080 user@public_ip`.

## UPnP (Universal Plug and Play)

UPnP is a protocol that allows applications to dynamically configure port forwarding rules on your router without manual intervention. While convenient (often used by gaming consoles), it is considered a severe security risk in enterprise environments and is usually disabled.
