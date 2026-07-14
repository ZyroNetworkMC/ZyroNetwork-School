---
title: Load Balancing
description: Learn how load balancers distribute network traffic across multiple servers to ensure reliability and performance.
---

# Load Balancing

Load balancing refers to efficiently distributing incoming network traffic across a group of backend servers, also known as a server farm or server pool.

## Why Use Load Balancing?

Modern high-traffic websites must serve hundreds of thousands of concurrent requests. A single server simply cannot handle that load. 

Load balancing solves this by:
1. **Increasing Capacity:** Multiple servers work together to handle the traffic.
2. **Redundancy & Reliability:** If Server A crashes, the load balancer automatically stops sending traffic to it and routes everything to Server B and C. The user never notices the crash.
3. **Flexibility:** System administrators can add or remove servers from the pool seamlessly without downtime.

## How it Works

The Load Balancer acts as the "traffic cop" sitting in front of your servers and routing client requests across all servers capable of fulfilling those requests.

When a user visits `www.example.com`, they are actually connecting to the Public IP of the Load Balancer, not the backend web servers.

### Common Load Balancing Algorithms

1. **Round Robin:** Requests are distributed sequentially. Request 1 goes to Server A, Request 2 to Server B, Request 3 to Server C, Request 4 to Server A, and so on.
2. **Least Connections:** Traffic is directed to the server with the fewest active connections. Best when sessions take varying amounts of time to process.
3. **IP Hash:** The client's IP address is used to determine which server receives the request. This ensures a specific user always connects to the same backend server (useful for maintaining session state).

## Layer 4 vs. Layer 7 Load Balancing

- **Layer 4 (Transport):** Routes traffic based purely on IP addresses and ports (TCP/UDP). It does not look at the content of the packets. It is extremely fast.
- **Layer 7 (Application):** Routes traffic based on the content of the request. For example, if a user requests `example.com/video`, the load balancer can send them to servers optimized for video streaming, while requests for `example.com/images` go to different servers.

## Popular Linux Load Balancers

Linux is heavily used for load balancing. Software load balancers are widely preferred over expensive hardware appliances in cloud environments.

- **Nginx:** Primarily a web server, but widely used as a highly performant Layer 7 load balancer.
- **HAProxy:** (High Availability Proxy) The industry standard open-source load balancer, capable of both Layer 4 and Layer 7 balancing.
- **Keepalived:** Often used in conjunction with HAProxy to provide failover (if the main load balancer crashes, a backup load balancer instantly takes over its IP address).
