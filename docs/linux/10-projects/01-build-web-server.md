---
title: Building a Linux Web Server
description: A comprehensive guide on how to build and configure a web server in Linux.
---

# Building a Linux Web Server

Building a web server on Linux is a fundamental skill for sysadmins. In this project, you will learn how to configure a robust web server using Nginx or Apache, host a static website, and configure PHP for dynamic content.

## Concepts
A web server processes incoming network requests over HTTP and several other related protocols. Nginx and Apache are the most popular web servers in the world.

- **Nginx:** Known for high performance and low resource consumption.
- **Apache:** Known for flexibility and power, utilizing a module-based architecture.
- **Virtual Hosts / Server Blocks:** Allow a single web server to host multiple domains.

## Step-by-step Guide

### 1. Installing the Web Server
For Nginx on Debian/Ubuntu:
```bash
sudo apt update
sudo apt install nginx -y
```

### 2. Configuring Nginx Server Block
Create a new configuration file for your domain:
```bash
sudo nano /etc/nginx/sites-available/example.com
```

Sample configuration:
```nginx
server {
    listen 80;
    server_name example.com www.example.com;
    root /var/www/example.com/html;
    index index.html index.htm;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

### 3. Enable the Site
Create a symbolic link to the `sites-enabled` directory:
```bash
sudo ln -s /etc/nginx/sites-available/example.com /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

## Best Practices
- **Security:** Always use TLS/SSL certificates (e.g., Let's Encrypt).
- **Firewall:** Only open ports 80 and 443 (HTTP/HTTPS).
- **Updates:** Keep the web server software updated.
