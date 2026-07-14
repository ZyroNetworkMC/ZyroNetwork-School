---
title: "Automating with Git Hooks"
description: "How to use client-side and server-side Git hooks to automate tasks and enforce policies."
---

# Automating with Git Hooks

Git hooks are custom scripts that Git executes before or after events such as committing, pushing, and receiving. They are incredibly powerful for automating tasks, enforcing coding standards, and triggering deployments.

Hooks reside in the `.git/hooks/` directory of your repository. By default, Git populates this directory with sample scripts (e.g., `pre-commit.sample`).

## Client-Side Hooks

These run on the developer's or admin's local machine.

### `pre-commit`
Runs before a commit is created. It is primarily used to inspect the snapshot that's about to be committed.
**Use case:** Linting configuration files (like checking JSON or YAML syntax), preventing commits with hardcoded secrets, or enforcing code style.

*Example pre-commit script to check bash syntax:*
```bash
#!/bin/bash
for file in $(git diff --cached --name-only | grep '\.sh$'); do
    bash -n "$file" || exit 1
done
```

### `commit-msg`
Runs after the user enters the commit message.
**Use case:** Enforcing a specific format for commit messages (e.g., ensuring a Jira ticket number is included).

### `pre-push`
Runs prior to a `git push` communicating with a remote.
**Use case:** Running a local test suite before allowing code to be pushed to the central server.

## Server-Side Hooks

These run on the remote repository server (where you push your code).

### `pre-receive`
The first script to run when a push is received.
**Use case:** Enforcing policy. For example, denying pushes to the `main` branch from non-administrators, or ensuring all commits are cryptographically signed.

### `post-receive`
Runs after the entire process is completed and all refs have been updated.
**Use case:** Triggering notifications (email, Slack), or executing a deployment script. 

*Example post-receive hook for simple deployment:*
```bash
#!/bin/bash
# Deploy website directly to the web root
GIT_WORK_TREE=/var/www/html git checkout -f
systemctl reload nginx
```

## Challenges and Best Practices

- **Client Hooks aren't automatically cloned:** When you `git clone`, the `.git/hooks` directory is NOT copied. To share client-side hooks across a team, you must store them in a tracked directory (e.g., `.githooks/`) and configure Git to look there: `git config core.hooksPath .githooks/`.
- **Bypassing:** Client-side hooks can easily be bypassed by users (`git commit --no-verify`). Therefore, critical policy enforcement (like security checks) must always rely on server-side hooks or a CI/CD pipeline.
