---
title: "CI/CD with GitHub Actions"
description: "Introduction to GitHub Actions for automating workflows, building, testing, and deploying code."
---

# CI/CD with GitHub Actions

GitHub Actions is a continuous integration and continuous delivery (CI/CD) platform integrated directly into GitHub. It allows you to automate your build, test, and deployment pipelines without needing external servers like Jenkins.

## Core Concepts

- **Workflows:** Configurable automated processes made up of one or more jobs. Defined via YAML files located in the `.github/workflows/` directory.
- **Events:** Specific activities that trigger a workflow (e.g., a push to `main`, a Pull Request, or a schedule).
- **Jobs:** A set of steps that execute on the same runner. Jobs run in parallel by default.
- **Steps:** Individual tasks within a job. A step can either run a shell command or an "Action".
- **Actions:** Standalone commands that perform complex but frequently repeated tasks (like checking out code or setting up a Node.js environment).
- **Runners:** The servers that execute your workflows. GitHub provides hosted runners, or you can host your own.

## Basic Workflow Syntax

Here is an example of a workflow that runs a simple Bash script test whenever code is pushed to the `main` branch.

```yaml
name: Test Bash Script

on:
  push:
    branches:
      - main
  pull_request:

jobs:
  test-script:
    runs-on: ubuntu-latest

    steps:
      # Step 1: Use a pre-built action to pull the code onto the runner
      - name: Checkout code
        uses: actions/checkout@v3

      # Step 2: Run a shell command
      - name: Make script executable
        run: chmod +x my_script.sh

      # Step 3: Run the script
      - name: Execute script
        run: ./my_script.sh
```

## Best Practices

1. **Use Secrets for Credentials:** Never hardcode API keys, SSH keys, or passwords in your workflow YAML. Use GitHub Secrets and reference them in the workflow as variables.
2. **Pin Action Versions:** When using third-party Actions (like `actions/checkout@v3`), always pin to a specific version or commit hash to prevent unexpected breaking changes if the action is updated.
3. **Use Matrices:** If you need to test your code against multiple environments (e.g., Python 3.8, 3.9, and 3.10), use a `matrix` strategy instead of creating separate jobs.
4. **Caching:** Utilize caching Actions for dependencies (like `npm` or `pip` modules) to significantly speed up workflow execution times.
