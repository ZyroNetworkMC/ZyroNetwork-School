---
title: Nginx Reverse Proxy
description: Using Nginx to proxy API traffic and web content for game servers.
---

# Nginx Reverse Proxy

While WaterdogPE proxies the raw UDP game traffic, modern game networks also rely heavily on HTTP/HTTPS traffic. This includes the server's website, store, webhooks (like voting or donations), and internal APIs (like a ban management system).

For HTTP traffic, the industry standard is **Nginx**, acting as a reverse proxy.

## Why Use a Reverse Proxy?

1.  **Security**: It hides the IP addresses of your backend API servers and web servers. Attackers only see the Nginx IP.
2.  **SSL Termination**: Managing SSL certificates (HTTPS) across multiple backend apps is tedious. Nginx can handle the SSL encryption/decryption centrally, passing plain HTTP traffic to the backend apps within your secure local network.
3.  **Load Balancing**: Nginx can distribute HTTP traffic across multiple backend API instances.
4.  **Caching**: Nginx can cache static assets (images, CSS) to reduce the load on your backend servers.

## Installation

On most Debian/Ubuntu systems:
```bash
sudo apt update
sudo apt install nginx
```

## Basic Configuration Example

Let's say you have an internal Node.js API running on port 3000 (`127.0.0.1:3000`). You want it accessible publicly at `api.mygameserver.com`.

Create a new configuration file in `/etc/nginx/sites-available/api.mygameserver.com`:

```nginx
server {
    listen 80;
    server_name api.mygameserver.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        
        # Forward the real client IP to the backend
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Enable it by creating a symlink to `sites-enabled`:
```bash
sudo ln -s /etc/nginx/sites-available/api.mygameserver.com /etc/nginx/sites-enabled/
```

Test the configuration and reload:
```bash
sudo nginx -t
sudo systemctl reload nginx
```

## Adding SSL (HTTPS) with Certbot

Never run public APIs over plain HTTP. Use Let's Encrypt (Certbot) to easily get free SSL certificates.

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d api.mygameserver.com
```
Certbot will automatically modify your Nginx configuration to include the SSL certificates and force HTTP to HTTPS redirection.

## Stream Module (TCP/UDP Proxying)

Nginx is primarily for HTTP, but it also has a `stream` module that can proxy raw TCP and UDP traffic. While Waterdog is preferred for Minecraft-specific routing (as it understands the protocol), Nginx can be used as a dumb proxy to simply forward traffic.

*Note: Proxying UDP Minecraft traffic through Nginx stream module will hide the player IPs from the backend server unless you implement complex NAT setups. Therefore, specialized proxies like Waterdog are usually better for the game traffic itself.*
