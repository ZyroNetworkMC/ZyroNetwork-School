---
title: DDoS Protection
description: Understand Distributed Denial of Service attacks and the network concepts used to mitigate them.
---

# DDoS Protection

A Distributed Denial of Service (DDoS) attack is a malicious attempt to disrupt the normal traffic of a targeted server, service, or network by overwhelming the target or its surrounding infrastructure with a flood of Internet traffic.

## How DDoS Attacks Work

Unlike a standard DoS (Denial of Service) attack which originates from one source, a *Distributed* attack uses multiple compromised computer systems as sources of attack traffic. 

These compromised devices (often called a botnet) can include computers, IoT devices (like smart cameras), and servers. Because the incoming traffic is from thousands of different IP addresses, simply blocking a single IP on a firewall is ineffective.

## Types of DDoS Attacks

1. **Volumetric Attacks:** The goal is to consume the bandwidth of the target network. 
   - *Example: UDP Floods, ICMP (Ping) Floods.*
2. **Protocol Attacks:** These consume actual server resources or intermediate communication equipment like firewalls and load balancers.
   - *Example: SYN Floods (exploiting the TCP handshake by starting a connection but never finishing it, leaving the server waiting).*
3. **Application Layer Attacks (Layer 7):** Target the application itself, mimicking legitimate user traffic to crash the web server. 
   - *Example: HTTP Floods (sending millions of complex database search requests).*

## Mitigation Strategies

Handling a massive DDoS attack locally on a Linux server is almost impossible; if a 100 Gbps attack hits your 1 Gbps network interface, your server is offline regardless of your firewall rules.

Mitigation must happen upstream at the network edge.

### 1. Anycast Routing

Anycast distributes traffic across a network of distributed servers. Instead of all traffic routing to one IP address in one data center, the IP address is broadcast from data centers all over the world. An attack originating in Europe is absorbed by the European servers, while users in America can still access the site via American servers.

### 2. Rate Limiting (Linux/Nginx)

For smaller Layer 7 attacks, rate limiting restricts the number of requests a single IP address can make within a certain timeframe.

```nginx
# Example Nginx Rate Limiting
limit_req_zone $binary_remote_addr zone=mylimit:10m rate=10r/s;

server {
    location /login {
        limit_req zone=mylimit;
    }
}
```

### 3. Blackholing (Null Routing)

In extreme cases, an ISP may route all traffic directed at the targeted IP address to a "black hole" (a non-existent route). While this stops the attack from affecting the rest of the ISP's network, it also takes the target completely offline, essentially completing the attacker's goal.

### 4. Cloud Mitigation Providers

Services like Cloudflare, AWS Shield, and Akamai sit between the Internet and your server. They use massive global networks to absorb the attack traffic, scrub out the malicious packets using advanced AI, and only forward the legitimate traffic to your actual Linux server.
