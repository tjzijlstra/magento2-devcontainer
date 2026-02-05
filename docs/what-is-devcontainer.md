# What is the Magento 2 Devcontainer?

A devcontainer is a development environment that runs inside a Docker container. Instead of installing PHP, MySQL, OpenSearch, and other services directly on your machine, everything runs in isolated containers that are configured identically for every developer.

::: tip
If you're familiar with [`docker-compose`](https://docs.docker.com/compose/), devcontainers are essentially the same thing but instead of editing files on your host machine, your editor and terminal are actually running inside one of the containers of your `docker-compose` environment.
:::

## The Problem

Setting up a local Magento development environment traditionally requires:

- Installing the correct PHP version with 20+ extensions
- Configuring a web server (Nginx or Apache)
- Setting up MySQL or MariaDB
- Installing and configuring OpenSearch or Elasticsearch
- Running Redis for caching and sessions
- Optionally running RabbitMQ for message queues

Every developer is different. Every developer has a distinct operating system, on a distinct version, with distinct tools versions and preferences. As a result, every developer installs Magento differently, leading to "it works on my machine" issues. Version mismatches between local and production environments cause bugs that only appear after deployment.

## The Solution

This devcontainer packages the entire Magento stack into a reproducible configuration.

When you open the project in [VS Code](https://code.visualstudio.com/) (or any editor that supports devcontainers), the devcontainer:

1. Pulls pre-configured Docker images
2. Starts all required services
3. Mounts your project code into the container
4. Connects your editor to the container's PHP runtime

## Benefits

### Consistency

Every developer gets the exact same environment. No more debugging configuration differences between machines.

### Production Parity

Service versions match [Adobe's official system requirements](https://experienceleague.adobe.com/en/docs/commerce-operations/installation-guide/system-requirements). If it works in the devcontainer, it will work in production.

### Zero Local Installation

Your host machine stays clean. No PHP installations to manage, no MySQL servers running in the background. Just Docker.

### Works in Codespaces

The same configuration works in [GitHub Codespaces](https://github.com/features/codespaces), giving you a cloud-hosted development environment accessible from any browser.

### Onboarding

New team members clone the repo, open in VS Code, and start coding. No setup documentation to follow or troubleshoot.

## How It Works

The devcontainer is defined by files in your `.devcontainer/` directory:

| File                        | Purpose                                                      | Committed |
| --------------------------- | ------------------------------------------------------------ | --------- |
| `devcontainer.json`         | VS Code settings, extensions, and container configuration    | Yes       |
| `docker-compose.yml`        | Sets the Docker Compose working directory                    | Yes       |
| `docker-compose.shared.yml` | Shared project-specific config (volumes, env vars)           | Yes       |
| `docker-compose.local.yml`  | Personal developer overrides (resource limits, extra mounts) | No        |
| `.env`                      | Environment variables for the services                       | No        |

The compose files are loaded in order, with later files overriding earlier ones. This the devcontainer core provide base configuration while your project customizes it.

When VS Code opens the project, it reads `devcontainer.json`, starts the Docker Compose services, and attaches to the PHP container as your development environment.