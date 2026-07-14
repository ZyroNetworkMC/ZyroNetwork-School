---
title: "Automation with Jenkins"
description: "Setting up and using Jenkins for continuous integration and continuous delivery."
---

# Automation with Jenkins

Jenkins is the most widely used open-source automation server. While modern SaaS platforms like GitHub Actions and GitLab CI are gaining popularity, Jenkins remains deeply entrenched in enterprise environments due to its infinite flexibility and massive plugin ecosystem.

## Core Concepts

- **Master/Agent Architecture:** Jenkins operates with a central Controller (Master) that manages scheduling and UI, and distributes work to multiple Agents (Nodes/Slaves) running on different operating systems or containers.
- **Plugins:** Jenkins' functionality is extended almost entirely via plugins (over 1,800 available).
- **Pipelines:** A suite of plugins that allows you to define the lifecycle of your CI/CD process as code.
- **Jenkinsfile:** A text file containing the definition of a Jenkins Pipeline, checked into source control alongside your code.

## Jenkins Pipelines: Declarative vs. Scripted

Jenkins supports two syntaxes for defining pipelines:
1. **Scripted Pipeline:** Uses raw Groovy code. Highly flexible but steep learning curve.
2. **Declarative Pipeline:** A more structured, restricted, and user-friendly syntax. (Recommended).

### Declarative Pipeline Example (`Jenkinsfile`)

```groovy
pipeline {
    agent any // Run on any available Jenkins agent

    stages {
        stage('Build') {
            steps {
                echo 'Building the application...'
                sh 'make build'
            }
        }
        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'make test'
            }
        }
        stage('Deploy') {
            when {
                branch 'main' // Only deploy if on the main branch
            }
            steps {
                echo 'Deploying to staging server...'
                sh './deploy.sh staging'
            }
        }
    }
    post {
        always {
            echo 'This runs no matter what happens.'
        }
        failure {
            // Send email on failure
            mail to: 'admin@example.com', subject: 'Build Failed', body: 'Check Jenkins.'
        }
    }
}
```

## Best Practices for Jenkins Administrators

1. **Configuration as Code (JCasC):** Historically, configuring Jenkins meant clicking through hundreds of UI menus. JCasC allows you to define Jenkins' own configuration (security, plugins, credentials) in YAML files, treating the CI server itself as infrastructure-as-code.
2. **Keep the Master Clean:** Never execute jobs on the Master node. It should only be used for scheduling and serving the web UI. Always spin up agents to do the actual work.
3. **Backup Everything:** Jenkins stores its configuration, job history, and build artifacts in `$JENKINS_HOME`. Ensure this directory is backed up regularly.
4. **Credential Management:** Never hardcode passwords in shell scripts. Use Jenkins' built-in Credentials store to securely inject secrets as environment variables into your pipeline at runtime.
