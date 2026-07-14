---
title: RHCE Certification Prep
description: Study guide for the Red Hat Certified Engineer (RHCE) exam, focusing on automation with Ansible.
---

# RHCE Certification Prep

The Red Hat Certified Engineer (RHCE) certification focuses heavily on automation, specifically using Ansible to configure and manage systems. You must hold an RHCSA before becoming an RHCE.

## Core Competencies

### 1. Ansible Basics
- Understand Ansible inventory files (INI and YAML formats).
- Understand Ansible configuration files (`ansible.cfg`).
- Use ad-hoc commands to query and modify nodes.

### 2. Playbooks
- Write playbooks using YAML syntax.
- Understand privilege escalation (`become: yes`).
- Run playbooks and limit execution to specific hosts.

### 3. Variables and Facts
- Define variables in playbooks, inventory, and group_vars.
- Gather facts from managed nodes and use them in conditionals.
- Use Ansible Vault to encrypt sensitive data (passwords, keys).

### 4. Task Control
- Use loops (`loop`, `with_items`) to iterate over lists/dictionaries.
- Use conditionals (`when`) to execute tasks based on variables/facts.
- Use handlers to restart services only when configurations change.

### 5. Roles
- Create and use Ansible roles to modularize code.
- Download roles from Ansible Galaxy.

## Practical Study Example
**Task:** Write an Ansible playbook to install, configure, and start Apache.

```yaml
---
- name: Configure Web Server
  hosts: webservers
  become: yes
  tasks:
    - name: Install HTTPD
      yum:
        name: httpd
        state: present

    - name: Start and enable HTTPD
      service:
        name: httpd
        state: started
        enabled: yes
```
