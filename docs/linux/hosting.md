---
title: Hosting Game Servers
sidebar_label: Hosting
sidebar_position: 4
---

# Hosting Game Servers on Linux

This is where everything comes together. You're going to take a blank Ubuntu server and turn it into a fully operational, secured, automated PocketMine-MP game server. We'll cover installation, configuration, auto-restart, backups, security hardening, performance tuning, running multiple servers, and even setting up a web panel with nginx.

Every command here is production-ready. This is what a professional setup looks like.

---

## Prerequisites

Before starting, you need:

- A VPS running **Ubuntu 24.04 LTS** (see the Introduction guide for provider recommendations)
- **SSH access** to the server (root or sudo user)
- A domain name (optional, needed for web panel/nginx section)

:::info Starting Fresh?
If you haven't set up your VPS yet, go back to the [Introduction](./introduction.md) guide to choose a provider and learn SSH basics.
:::

---

## Step 1: Initial Server Setup

Connect to your fresh VPS and run the following to prepare the system.

### Update the System

```bash
sudo apt update && sudo apt upgrade -y
```

### Set the Timezone

```bash
# List available timezones
timedatectl list-timezones | grep America

# Set your timezone
sudo timedatectl set-timezone America/New_York

# Verify
timedatectl
```

### Create a Dedicated User

Never run game servers as root. Create a dedicated user:

```bash
# Create user with home directory
sudo useradd -m -s /bin/bash mcserver

# Set a strong password
sudo passwd mcserver

# Add to sudo group (for initial setup, can be removed later)
sudo usermod -aG sudo mcserver

# Switch to the new user
sudo su - mcserver
```

### Install Essential Tools

```bash
sudo apt install -y \
    curl \
    wget \
    git \
    unzip \
    htop \
    tmux \
    screen \
    nano \
    software-properties-common \
    apt-transport-https \
    ca-certificates
```

---

## Step 2: Installing PHP

PocketMine-MP requires **PHP 8.1 or higher** with specific extensions. The easiest method is using the Ondřej Surý PPA, which provides the latest PHP builds for Ubuntu.

### Method 1: PPA Installation (Recommended)

```bash
# Add the ondrej/php PPA
sudo add-apt-repository ppa:ondrej/php -y
sudo apt update

# Install PHP 8.3 with required extensions
sudo apt install -y \
    php8.3 \
    php8.3-cli \
    php8.3-xml \
    php8.3-mbstring \
    php8.3-curl \
    php8.3-zip \
    php8.3-gd \
    php8.3-sqlite3 \
    php8.3-bcmath \
    php8.3-readline \
    php8.3-intl \
    php8.3-igbinary \
    php8.3-yaml \
    php8.3-gmp

# Verify installation
php -v
# PHP 8.3.x (cli) ...

# Check loaded extensions
php -m
```

### Method 2: Compiling from Source (Advanced)

For maximum performance or custom extensions:

```bash
# Install build dependencies
sudo apt install -y \
    build-essential \
    autoconf \
    libtool \
    pkg-config \
    libxml2-dev \
    libsqlite3-dev \
    zlib1g-dev \
    libcurl4-openssl-dev \
    libpng-dev \
    libyaml-dev \
    libzip-dev \
    libgmp-dev \
    libssl-dev \
    libreadline-dev

# Download PHP source
cd /tmp
wget https://www.php.net/distributions/php-8.3.10.tar.xz
tar -xJf php-8.3.10.tar.xz
cd php-8.3.10

# Configure with PocketMine-compatible options
./configure \
    --prefix=/usr/local/php8.3 \
    --enable-cli \
    --enable-mbstring \
    --enable-bcmath \
    --enable-intl \
    --enable-gd \
    --enable-zip \
    --with-curl \
    --with-openssl \
    --with-zlib \
    --with-readline \
    --with-gmp \
    --with-yaml \
    --with-sqlite3 \
    --without-pear \
    --disable-cgi \
    --disable-phpdbg

# Compile and install (this takes 5-15 minutes)
make -j$(nproc)
sudo make install

# Verify
/usr/local/php8.3/bin/php -v
```

:::tip Which Method to Choose?
Use **Method 1 (PPA)** unless you have a specific reason to compile from source. The PPA version receives automatic security updates and is much easier to maintain.
:::

### PHP Configuration for Game Servers

Optimize PHP settings for PocketMine-MP:

```bash
# Find php.ini location
php --ini

# Edit php.ini
sudo nano /etc/php/8.3/cli/php.ini
```

Key settings to adjust:

```ini
; Increase memory limit (default 128M is too low for large servers)
memory_limit = 512M

; Increase max execution time (for plugin operations)
max_execution_time = 0

; Enable opcache for performance
opcache.enable_cli = 1
opcache.jit = 1255
opcache.jit_buffer_size = 128M

; Timezone
date.timezone = America/New_York

; Disable unnecessary features
display_errors = Off
log_errors = On
error_log = /opt/pmmp/php_errors.log
```

---

## Step 3: Installing PocketMine-MP

### Download and Setup

```bash
# Switch to the mcserver user
sudo su - mcserver

# Create the installation directory
mkdir -p /opt/pmmp
cd /opt/pmmp

# Download PocketMine-MP using the official installer
curl -sL https://get.pmmp.io | bash

# Alternative: Download the phar manually
# wget -O PocketMine-MP.phar https://github.com/pmmp/PocketMine-MP/releases/latest/download/PocketMine-MP.phar
```

### First Run

Start the server for the first time to generate configuration files:

```bash
cd /opt/pmmp
./start.sh
```

The first run creates:
- `server.properties` — Server settings
- `pocketmine.yml` — PocketMine configuration
- `worlds/` — World data directory
- `plugins/` — Plugin directory
- `resource_packs/` — Resource pack directory

Type `stop` in the console to shut down the server after the first run.

### Set Directory Ownership

```bash
sudo chown -R mcserver:mcserver /opt/pmmp
```

---

## Step 4: Server Configuration

### server.properties

This is the main server configuration file. Here's every setting explained:

```properties
#Properties Config file
#Generated by PocketMine-MP

# --- NETWORK ---
# The IP to bind to. Leave empty to bind to all interfaces.
server-ip=
# Default port for Minecraft Bedrock Edition
server-port=19132
# Enable GameSpy4 query protocol (shows server in server list)
enable-query=on

# --- SERVER INFO ---
# Server name shown in the server list
motd=My PocketMine Server
# Sub-MOTD (second line in server list)
sub-motd=Powered by PocketMine-MP
# Maximum concurrent players
max-players=50
# Default game mode: 0=Survival, 1=Creative, 2=Adventure, 3=Spectator
gamemode=0
# Force players into server gamemode on join
force-gamemode=off
# Difficulty: 0=Peaceful, 1=Easy, 2=Normal, 3=Hard
difficulty=2

# --- WORLD ---
# Default world name (folder name in /worlds)
level-name=world
# World seed (leave blank for random)
level-seed=
# World type: DEFAULT, FLAT
level-type=DEFAULT
# Spawn protection radius (in blocks, 0 to disable)
spawn-protection=16

# --- PLAYERS ---
# Allow flight (disable to kick flying players)
allow-flight=off
# Enable PvP
pvp=on
# View distance in chunks (lower = better performance)
view-distance=8
# Xbox Live authentication (REQUIRED for public servers)
xbox-auth=on

# --- PERFORMANCE ---
# Auto-save interval in ticks (6000 = 5 minutes)
auto-save=6000
```

### pocketmine.yml

PocketMine's extended configuration:

```yaml
# Network configuration
network:
  # Maximum bytes sent per tick per player
  batch-threshold: 256
  # Compression level (0-9). Lower = less CPU, higher = less bandwidth
  compression-level: 6
  # Enable async compression for better performance
  async-compression: true

# Player settings
player:
  # Save player data
  save-player-data: true
  
# Chunk settings
chunk-sending:
  # Chunks per tick to send
  per-tick: 4
  # Maximum chunks in send queue per player
  max-chunks: 192

# Chunk ticking
chunk-ticking:
  # Chunks to tick per tick
  per-tick: 40
  # Radius around players to tick chunks
  tick-radius: 3

# Memory management
memory:
  # Global memory limit (MB, 0 = unlimited)
  global-limit: 0
  # Memory limit per world (MB, 0 = unlimited)
  main-limit: 0
  # Maximum chunk cache size
  max-chunks: 8192
  # Garbage collection period (ticks)
  garbage-collection:
    period: 6000
    # Collect cycles (more thorough but slower)
    collect-async-worker: true
    # Low memory trigger (MB)
    low-memory-trigger: true

# Plugin settings
plugins:
  # Legacy plugin loading path
  legacy-data-dir: false
```

:::warning Xbox Authentication
**Always keep `xbox-auth=on` for public servers.** Disabling it allows anyone to join with any username, including impersonating staff members. The only time to disable it is for private development/testing servers on local networks.
:::

---

## Step 5: Systemd Service for Auto-Restart

Create a proper systemd service that starts PocketMine on boot and restarts it if it crashes.

### Create the Service File

```bash
sudo nano /etc/systemd/system/pmmp.service
```

Paste this configuration:

```ini
[Unit]
Description=PocketMine-MP Bedrock Server
Documentation=https://pmmp.io
After=network-online.target
Wants=network-online.target

[Service]
Type=simple
User=mcserver
Group=mcserver
WorkingDirectory=/opt/pmmp

# Start command
ExecStart=/usr/bin/php /opt/pmmp/PocketMine-MP.phar

# Stop gracefully
ExecStop=/bin/kill -SIGTERM $MAINPID
TimeoutStopSec=30

# Restart policy
Restart=on-failure
RestartSec=15
StartLimitIntervalSec=300
StartLimitBurst=5

# Logging
StandardOutput=journal
StandardError=journal
SyslogIdentifier=pmmp

# Security hardening
NoNewPrivileges=true
PrivateTmp=true
ProtectSystem=strict
ProtectHome=true
ReadWritePaths=/opt/pmmp
ProtectKernelTunables=true
ProtectKernelModules=true
ProtectControlGroups=true

# Resource limits
LimitNOFILE=65535

[Install]
WantedBy=multi-user.target
```

### Enable and Start

```bash
# Reload systemd
sudo systemctl daemon-reload

# Enable (start on boot) and start now
sudo systemctl enable --now pmmp

# Check status
sudo systemctl status pmmp

# View logs
journalctl -u pmmp -f
```

### Service Management Commands

```bash
# Daily operations
sudo systemctl start pmmp          # Start server
sudo systemctl stop pmmp           # Stop server gracefully
sudo systemctl restart pmmp        # Restart server
sudo systemctl status pmmp         # Check if running

# Troubleshooting
journalctl -u pmmp -n 100         # Last 100 log lines
journalctl -u pmmp --since "1 hour ago"  # Recent logs
journalctl -u pmmp -f              # Follow logs live
```

---

## Step 6: Firewall Configuration

### Configure UFW

```bash
# Allow SSH (ALWAYS do this first)
sudo ufw allow 22/tcp

# Allow PocketMine-MP (Bedrock uses UDP)
sudo ufw allow 19132/udp

# If running multiple servers
sudo ufw allow 19133/udp
sudo ufw allow 19134/udp

# Allow HTTP/HTTPS if running web panel
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp

# Set default policies
sudo ufw default deny incoming
sudo ufw default allow outgoing

# Enable the firewall
sudo ufw enable

# Verify rules
sudo ufw status verbose
```

Expected output:

```
Status: active
Logging: on (low)
Default: deny (incoming), allow (outgoing), disabled (routed)

To                         Action      From
--                         ------      ----
22/tcp                     ALLOW IN    Anywhere
19132/udp                  ALLOW IN    Anywhere
22/tcp (v6)                ALLOW IN    Anywhere (v6)
19132/udp (v6)             ALLOW IN    Anywhere (v6)
```

---

## Step 7: Automated Backups

### Backup Script

Create `/opt/pmmp/scripts/backup.sh`:

```bash
#!/bin/bash
# PocketMine-MP Automated Backup Script

# Configuration
PMMP_DIR="/opt/pmmp"
BACKUP_DIR="/backups/pmmp"
RETENTION_DAYS=14
DATE=$(date +%Y%m%d-%H%M%S)
BACKUP_NAME="pmmp-backup-${DATE}.tar.gz"

# Create backup directory if it doesn't exist
mkdir -p "$BACKUP_DIR"

# Log start
echo "[$(date)] Starting backup..."

# Create compressed backup (exclude unnecessary files)
tar -czf "${BACKUP_DIR}/${BACKUP_NAME}" \
    --exclude='${PMMP_DIR}/vendor' \
    --exclude='${PMMP_DIR}/*.phar' \
    -C "$(dirname $PMMP_DIR)" \
    "$(basename $PMMP_DIR)"

# Check if backup was successful
if [ $? -eq 0 ]; then
    BACKUP_SIZE=$(du -h "${BACKUP_DIR}/${BACKUP_NAME}" | cut -f1)
    echo "[$(date)] Backup successful: ${BACKUP_NAME} (${BACKUP_SIZE})"
else
    echo "[$(date)] ERROR: Backup failed!"
    exit 1
fi

# Delete old backups
DELETED=$(find "$BACKUP_DIR" -name "pmmp-backup-*.tar.gz" -mtime +${RETENTION_DAYS} -delete -print | wc -l)
echo "[$(date)] Cleaned up ${DELETED} old backup(s)"

# List current backups
echo "[$(date)] Current backups:"
ls -lh "$BACKUP_DIR"/pmmp-backup-*.tar.gz 2>/dev/null

echo "[$(date)] Backup complete."
```

Make it executable and set up the cron job:

```bash
chmod +x /opt/pmmp/scripts/backup.sh

# Create backups directory
sudo mkdir -p /backups/pmmp
sudo chown mcserver:mcserver /backups/pmmp

# Add to crontab (as mcserver user)
crontab -e
```

Add this line for backups every 6 hours:

```
0 */6 * * * /opt/pmmp/scripts/backup.sh >> /var/log/pmmp-backup.log 2>&1
```

### Restoring from Backup

```bash
# Stop the server
sudo systemctl stop pmmp

# Restore from backup
cd /opt
tar -xzf /backups/pmmp/pmmp-backup-20260713-143000.tar.gz

# Fix ownership
sudo chown -R mcserver:mcserver /opt/pmmp

# Start the server
sudo systemctl start pmmp
```

---

## Step 8: Linux Performance Optimization

### Swappiness

Swappiness controls how aggressively Linux moves data from RAM to swap. For game servers, keep things in RAM:

```bash
# Check current value (default is usually 60)
cat /proc/sys/vm/swappiness

# Set to 10 (prefer RAM, only swap when necessary)
sudo sysctl vm.swappiness=10

# Make permanent
echo 'vm.swappiness=10' | sudo tee -a /etc/sysctl.conf
```

### File Descriptor Limits

Game servers can open many files simultaneously. Increase the limits:

```bash
# Check current limits
ulimit -n
# 1024 (usually too low)

# Edit limits configuration
sudo nano /etc/security/limits.conf
```

Add these lines:

```
mcserver    soft    nofile    65535
mcserver    hard    nofile    65535
*           soft    nofile    65535
*           hard    nofile    65535
```

Also edit the systemd defaults:

```bash
sudo nano /etc/systemd/system.conf
```

Uncomment and set:

```ini
DefaultLimitNOFILE=65535
```

### TCP Network Tuning

Optimize network performance for game servers:

```bash
sudo nano /etc/sysctl.conf
```

Add these settings:

```ini
# Network performance tuning for game servers

# Increase network buffer sizes
net.core.rmem_max = 16777216
net.core.wmem_max = 16777216
net.core.rmem_default = 1048576
net.core.wmem_default = 1048576

# TCP buffer auto-tuning
net.ipv4.tcp_rmem = 4096 1048576 16777216
net.ipv4.tcp_wmem = 4096 1048576 16777216

# Connection backlog
net.core.somaxconn = 65535
net.core.netdev_max_backlog = 65535

# Reuse TIME_WAIT connections
net.ipv4.tcp_tw_reuse = 1

# Reduce keepalive time
net.ipv4.tcp_keepalive_time = 600
net.ipv4.tcp_keepalive_intvl = 30
net.ipv4.tcp_keepalive_probes = 5

# Enable BBR congestion control (better throughput)
net.core.default_qdisc = fq
net.ipv4.tcp_congestion_control = bbr

# VM tuning
vm.swappiness = 10
vm.dirty_ratio = 20
vm.dirty_background_ratio = 5
```

Apply changes:

```bash
sudo sysctl -p
```

### Disable Unnecessary Services

Reduce resource usage by disabling services you don't need:

```bash
# List all running services
systemctl list-units --type=service --state=running

# Disable common unnecessary services
sudo systemctl disable --now snapd.service      # Snap package manager
sudo systemctl disable --now snapd.socket
sudo systemctl disable --now snap.lxd.activate.service
sudo systemctl disable --now ModemManager.service
sudo systemctl disable --now bluetooth.service
sudo systemctl disable --now cups.service        # Printing
```

---

## Step 9: Security Hardening

### SSH Security — Key-Only Authentication

After copying your SSH key to the server (see [Introduction](./introduction.md)):

```bash
sudo nano /etc/ssh/sshd_config
```

Apply these settings:

```bash
# Disable password authentication (key-only)
PasswordAuthentication no
PubkeyAuthentication yes

# Disable root login
PermitRootLogin no

# Change SSH port (optional but recommended)
Port 2222

# Other hardening
MaxAuthTries 3
ClientAliveInterval 300
ClientAliveCountMax 2
X11Forwarding no
AllowTcpForwarding no
PermitEmptyPasswords no
UsePAM yes

# Only allow specific users
AllowUsers mcserver youradminuser
```

Restart SSH (keep your current session open in case something goes wrong):

```bash
sudo systemctl restart ssh

# Test from a NEW terminal before closing the current one!
ssh -p 2222 mcserver@your-server-ip
```

:::danger Test Before Disconnecting!
After changing SSH settings, ALWAYS test the new configuration from a second terminal before closing your current session. If the new settings are wrong, you'll be locked out permanently.
:::

### Install and Configure fail2ban

fail2ban blocks IP addresses after repeated failed login attempts:

```bash
# Install
sudo apt install fail2ban -y

# Create local config (don't edit the main config)
sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
sudo nano /etc/fail2ban/jail.local
```

Configure the SSH jail:

```ini
[DEFAULT]
# Ban for 1 hour after 3 failed attempts in 10 minutes
bantime = 3600
findtime = 600
maxretry = 3
banaction = ufw

[sshd]
enabled = true
port = 2222
filter = sshd
logpath = /var/log/auth.log
maxretry = 3
```

Start and enable:

```bash
sudo systemctl enable --now fail2ban

# Check status
sudo fail2ban-client status
sudo fail2ban-client status sshd

# Unban an IP (if you accidentally get blocked)
sudo fail2ban-client set sshd unbanip 203.0.113.50
```

### Automatic Security Updates

```bash
# Install unattended-upgrades
sudo apt install unattended-upgrades -y

# Enable automatic security updates
sudo dpkg-reconfigure -plow unattended-upgrades
# Select "Yes"

# Verify configuration
cat /etc/apt/apt.conf.d/20auto-upgrades
# Should show:
# APT::Periodic::Update-Package-Lists "1";
# APT::Periodic::Unattended-Upgrade "1";
```

### Additional Security Measures

```bash
# Disable unused network protocols
echo 'install dccp /bin/true' | sudo tee /etc/modprobe.d/disable-dccp.conf
echo 'install sctp /bin/true' | sudo tee /etc/modprobe.d/disable-sctp.conf

# Set proper permissions on critical files
sudo chmod 600 /etc/shadow
sudo chmod 600 /etc/gshadow
sudo chmod 644 /etc/passwd
sudo chmod 644 /etc/group

# Enable process accounting
sudo apt install acct -y
sudo systemctl enable --now acct

# Install and run rootkit checker
sudo apt install rkhunter -y
sudo rkhunter --check --skip-keypress
```

---

## Step 10: Running Multiple Servers

### Directory Structure

```bash
/opt/pmmp/
├── server1/          # Survival server (port 19132)
│   ├── PocketMine-MP.phar
│   ├── server.properties
│   ├── pocketmine.yml
│   ├── worlds/
│   └── plugins/
├── server2/          # Creative server (port 19133)
│   ├── PocketMine-MP.phar
│   ├── server.properties
│   ├── pocketmine.yml
│   ├── worlds/
│   └── plugins/
└── server3/          # Minigames server (port 19134)
    ├── PocketMine-MP.phar
    ├── server.properties
    ├── pocketmine.yml
    ├── worlds/
    └── plugins/
```

### Setup Script

```bash
#!/bin/bash
# setup-multi-server.sh — Set up multiple PocketMine-MP instances

SERVERS=("server1" "server2" "server3")
PORTS=(19132 19133 19134)
NAMES=("Survival" "Creative" "Minigames")
BASE_DIR="/opt/pmmp"

for i in "${!SERVERS[@]}"; do
    DIR="${BASE_DIR}/${SERVERS[$i]}"
    mkdir -p "$DIR"
    cd "$DIR"
    
    # Download PocketMine-MP
    curl -sL https://get.pmmp.io | bash
    
    # Configure server port and name
    sed -i "s/server-port=19132/server-port=${PORTS[$i]}/" server.properties
    sed -i "s/motd=.*/motd=${NAMES[$i]} Server/" server.properties
    
    echo "Set up ${SERVERS[$i]} on port ${PORTS[$i]}"
done

chown -R mcserver:mcserver "$BASE_DIR"
```

### Systemd Template Service

Instead of creating individual service files, use a template:

```bash
sudo nano /etc/systemd/system/pmmp@.service
```

```ini
[Unit]
Description=PocketMine-MP Server - %i
After=network-online.target
Wants=network-online.target

[Service]
Type=simple
User=mcserver
Group=mcserver
WorkingDirectory=/opt/pmmp/%i
ExecStart=/usr/bin/php /opt/pmmp/%i/PocketMine-MP.phar
Restart=on-failure
RestartSec=15
StandardOutput=journal
StandardError=journal
SyslogIdentifier=pmmp-%i
LimitNOFILE=65535
NoNewPrivileges=true
ProtectSystem=strict
ReadWritePaths=/opt/pmmp/%i

[Install]
WantedBy=multi-user.target
```

Now manage each server with the same template:

```bash
# Reload systemd
sudo systemctl daemon-reload

# Enable and start each server
sudo systemctl enable --now pmmp@server1
sudo systemctl enable --now pmmp@server2
sudo systemctl enable --now pmmp@server3

# Manage individually
sudo systemctl status pmmp@server1
sudo systemctl restart pmmp@server2
journalctl -u pmmp@server3 -f

# Stop all servers
sudo systemctl stop pmmp@server1 pmmp@server2 pmmp@server3
```

### Firewall for Multiple Servers

```bash
sudo ufw allow 19132/udp    # Server 1
sudo ufw allow 19133/udp    # Server 2
sudo ufw allow 19134/udp    # Server 3
```

---

## Step 11: Nginx Reverse Proxy for Web Panels

If you're running a web-based admin panel (like a custom dashboard or any web interface), nginx handles HTTP traffic and provides SSL termination.

### Install nginx

```bash
sudo apt install nginx -y
sudo systemctl enable --now nginx
```

### Basic Configuration

Create a site config:

```bash
sudo nano /etc/nginx/sites-available/panel.conf
```

```nginx
server {
    listen 80;
    server_name panel.yourdomain.com;

    # Redirect HTTP to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name panel.yourdomain.com;

    # SSL configuration (use certbot for free certificates)
    ssl_certificate /etc/letsencrypt/live/panel.yourdomain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/panel.yourdomain.com/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Strict-Transport-Security "max-age=63072000" always;

    # Root directory for static files
    root /var/www/panel;
    index index.php index.html;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    # PHP processing
    location ~ \.php$ {
        fastcgi_pass unix:/run/php/php8.3-fpm.sock;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include fastcgi_params;
    }

    # Deny access to hidden files
    location ~ /\. {
        deny all;
    }

    # Proxy to a Node.js panel (alternative)
    # location /api/ {
    #     proxy_pass http://127.0.0.1:3000;
    #     proxy_http_version 1.1;
    #     proxy_set_header Upgrade $http_upgrade;
    #     proxy_set_header Connection "upgrade";
    #     proxy_set_header Host $host;
    #     proxy_set_header X-Real-IP $remote_addr;
    # }

    access_log /var/log/nginx/panel-access.log;
    error_log /var/log/nginx/panel-error.log;
}
```

### Enable the Site

```bash
# Enable the site
sudo ln -s /etc/nginx/sites-available/panel.conf /etc/nginx/sites-enabled/

# Remove default site
sudo rm /etc/nginx/sites-enabled/default

# Test configuration
sudo nginx -t

# Reload nginx
sudo systemctl reload nginx
```

### Free SSL with Let's Encrypt

```bash
# Install certbot
sudo apt install certbot python3-certbot-nginx -y

# Obtain certificate (nginx will be configured automatically)
sudo certbot --nginx -d panel.yourdomain.com

# Automatic renewal is set up by default. Verify:
sudo certbot renew --dry-run

# Certificates auto-renew via systemd timer
sudo systemctl status certbot.timer
```

:::tip SSL is Free and Essential
Let's Encrypt provides free SSL certificates that auto-renew. There's no reason to run any web service without HTTPS in 2026. The `certbot --nginx` command handles everything automatically.
:::

---

## Monitoring Your Server

### Real-Time Monitoring with htop

```bash
htop
```

Key htop shortcuts:
| Key | Action |
|---|---|
| `F2` | Setup (configure display) |
| `F3` | Search process by name |
| `F4` | Filter processes |
| `F5` | Tree view (show process hierarchy) |
| `F6` | Sort by column |
| `F9` | Kill selected process |
| `F10` | Quit |
| `t` | Toggle tree view |
| `u` | Filter by user |
| `M` | Sort by memory |
| `P` | Sort by CPU |

### Monitoring Script with Alerts

Create `/opt/pmmp/scripts/monitor.sh`:

```bash
#!/bin/bash
# Server monitoring script with basic alerts

# Thresholds
CPU_THRESHOLD=90
MEM_THRESHOLD=85
DISK_THRESHOLD=80

# Check CPU load
CPU_LOAD=$(awk '{print $1}' /proc/loadavg)
CPU_CORES=$(nproc)
CPU_PERCENT=$(echo "$CPU_LOAD $CPU_CORES" | awk '{printf "%.0f", ($1/$2)*100}')

# Check memory usage
MEM_PERCENT=$(free | awk '/Mem:/ {printf "%.0f", ($3/$2)*100}')

# Check disk usage
DISK_PERCENT=$(df / | awk 'NR==2 {print $5}' | tr -d '%')

# Check if PocketMine is running
PMMP_STATUS=$(systemctl is-active pmmp 2>/dev/null)

# Report
echo "=== Server Monitor [$(date)] ==="
echo "CPU Load: ${CPU_PERCENT}% (threshold: ${CPU_THRESHOLD}%)"
echo "Memory:   ${MEM_PERCENT}% (threshold: ${MEM_THRESHOLD}%)"
echo "Disk:     ${DISK_PERCENT}% (threshold: ${DISK_THRESHOLD}%)"
echo "PMMP:     ${PMMP_STATUS}"

# Alerts
if [ "$CPU_PERCENT" -gt "$CPU_THRESHOLD" ]; then
    echo "⚠️ WARNING: CPU usage is critically high!"
fi

if [ "$MEM_PERCENT" -gt "$MEM_THRESHOLD" ]; then
    echo "⚠️ WARNING: Memory usage is critically high!"
fi

if [ "$DISK_PERCENT" -gt "$DISK_THRESHOLD" ]; then
    echo "⚠️ WARNING: Disk usage is critically high!"
fi

if [ "$PMMP_STATUS" != "active" ]; then
    echo "🔴 CRITICAL: PocketMine-MP is not running!"
    echo "Attempting restart..."
    sudo systemctl restart pmmp
fi
```

Schedule it to run every 5 minutes:

```bash
chmod +x /opt/pmmp/scripts/monitor.sh

# Add to crontab
crontab -e
# Add:
*/5 * * * * /opt/pmmp/scripts/monitor.sh >> /var/log/pmmp-monitor.log 2>&1
```

---

## Complete Setup Checklist

Use this checklist to verify your server is properly configured:

| Step | Command to Verify | Expected Result |
|---|---|---|
| System updated | `apt list --upgradable` | "Listing... Done" (no packages) |
| PHP installed | `php -v` | PHP 8.3.x |
| PocketMine installed | `ls /opt/pmmp/PocketMine-MP.phar` | File exists |
| Service running | `systemctl status pmmp` | Active (running) |
| Service enabled | `systemctl is-enabled pmmp` | enabled |
| Firewall active | `sudo ufw status` | Status: active |
| Port 19132 open | `ss -ulnp \| grep 19132` | UNCONN... 19132 |
| SSH hardened | `grep PasswordAuth /etc/ssh/sshd_config` | PasswordAuthentication no |
| fail2ban running | `sudo fail2ban-client status` | Number of jail: 1+ |
| Backups scheduled | `crontab -l` | Backup cron entry |
| Auto-updates | `cat /etc/apt/apt.conf.d/20auto-upgrades` | "1" for both settings |
| Swap tuned | `cat /proc/sys/vm/swappiness` | 10 |

---

## Summary

| Component | Configuration |
|---|---|
| **PHP** | 8.3 via ppa:ondrej/php, opcache + JIT enabled |
| **PocketMine** | `/opt/pmmp/`, owned by `mcserver` user |
| **Systemd** | Auto-restart on failure, starts on boot |
| **Firewall** | UFW: deny all, allow 22/tcp + 19132/udp |
| **Backups** | Every 6 hours via cron, 14-day retention |
| **Performance** | swappiness=10, 65535 file descriptors, BBR TCP |
| **Security** | SSH keys only, fail2ban, auto-updates, no root login |
| **Multiple Servers** | systemd template `pmmp@.service` per instance |
| **Web Panel** | nginx reverse proxy with Let's Encrypt SSL |

---

## Quiz

import Quiz from '@site/src/components/Quiz';

<Quiz questions={[
  {
    question: "Why should you create a dedicated 'mcserver' user instead of running PocketMine-MP as root?",
    options: [
      "Root cannot run PHP applications",
      "Limiting blast radius — if the server is compromised, the attacker has limited privileges",
      "Root is slower for game servers",
      "PocketMine-MP doesn't work as root"
    ],
    correctAnswer: 1,
    explanation: "Running as a dedicated user follows the principle of least privilege. If a vulnerability is exploited, the attacker only has access to that user's permissions, not full system control."
  },
  {
    question: "Which PPA provides the latest PHP versions for Ubuntu?",
    options: ["ppa:php/latest", "ppa:ondrej/php", "ppa:ubuntu/php", "ppa:sury/php"],
    correctAnswer: 1,
    explanation: "ppa:ondrej/php (maintained by Ondřej Surý) is the most widely-used and trusted PPA for PHP on Ubuntu, providing quick updates and multiple PHP versions."
  },
  {
    question: "What protocol does Minecraft Bedrock Edition use for game traffic?",
    options: ["TCP", "UDP", "HTTP", "WebSocket"],
    correctAnswer: 1,
    explanation: "Minecraft Bedrock uses RakNet over UDP for game traffic. This is why firewall rules must allow UDP on port 19132, not TCP."
  },
  {
    question: "What does the 'Restart=on-failure' directive in a systemd service do?",
    options: [
      "Restarts the service every hour",
      "Restarts only when the process exits with a non-zero code or is killed by a signal",
      "Restarts the service when manually stopped",
      "Prevents the service from restarting"
    ],
    correctAnswer: 1,
    explanation: "'on-failure' restarts the service when the process exits abnormally (crash, non-zero exit code, killed by signal) but NOT when it's stopped manually with 'systemctl stop'. This prevents restart loops while still recovering from crashes."
  },
  {
    question: "What swappiness value is recommended for game servers and why?",
    options: [
      "60 — the default is best for all workloads",
      "10 — keeps data in RAM, only using swap when necessary",
      "0 — completely disables swap",
      "100 — maximizes swap usage for more available RAM"
    ],
    correctAnswer: 1,
    explanation: "A swappiness of 10 tells Linux to prefer keeping data in RAM and only use swap when memory is truly low. Game servers need fast memory access, and swapping introduces significant latency."
  },
  {
    question: "What is the purpose of the 'ProtectSystem=strict' directive in a systemd service file?",
    options: [
      "Enables the firewall for the service",
      "Makes the filesystem read-only except for paths listed in ReadWritePaths",
      "Prevents the service from using the network",
      "Limits CPU usage"
    ],
    correctAnswer: 1,
    explanation: "'ProtectSystem=strict' makes the entire filesystem read-only for the service, except for paths explicitly listed in 'ReadWritePaths'. This prevents a compromised service from modifying system files."
  },
  {
    question: "How does a systemd template service (pmmp@.service) work for multiple servers?",
    options: [
      "It runs all servers in one process",
      "The %i variable is replaced with the instance name passed after @",
      "It automatically discovers server directories",
      "Templates can only run two instances"
    ],
    correctAnswer: 1,
    explanation: "In pmmp@.service, %i is replaced with whatever comes after @ in the command. So 'systemctl start pmmp@server1' sets %i to 'server1', pointing WorkingDirectory to /opt/pmmp/server1."
  },
  {
    question: "Why should you test SSH configuration changes from a SECOND terminal before closing your current session?",
    options: [
      "SSH only applies changes to new connections",
      "If the new configuration is wrong, you'll be permanently locked out if you close your only session",
      "The first terminal can't see the changes",
      "SSH requires two connections to verify changes"
    ],
    correctAnswer: 1,
    explanation: "SSH configuration errors (like disabling password auth without a working key, or wrong AllowUsers) take effect on new connections. If you close your only session first and can't connect with the new settings, you'll be locked out with no way to fix it."
  },
  {
    question: "What does fail2ban do?",
    options: [
      "Encrypts network traffic",
      "Monitors log files and bans IPs after repeated failed authentication attempts",
      "Blocks all traffic from foreign countries",
      "Scans files for viruses"
    ],
    correctAnswer: 1,
    explanation: "fail2ban monitors log files (like /var/log/auth.log) for patterns indicating failed login attempts. After a configurable number of failures, it adds a firewall rule to ban the offending IP address temporarily."
  },
  {
    question: "What is the correct cron expression for running a backup every 6 hours?",
    options: ["*/6 * * * *", "0 */6 * * *", "0 6 * * *", "6 0 * * *"],
    correctAnswer: 1,
    explanation: "'0 */6 * * *' runs at minute 0 of every 6th hour (midnight, 6am, noon, 6pm). '*/6 * * * *' would run every 6 MINUTES. '0 6 * * *' runs only at 6:00 AM daily."
  }
]} />
