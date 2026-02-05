# Using in GitHub Codespaces

If your repository already has the devcontainer configured, you can open it in GitHub Codespaces with zero local setup.

## Prerequisites

- A GitHub account with access to [Codespaces](https://github.com/features/codespaces)
- A repository with the devcontainer already configured

## Steps

1. Navigate to your repository on GitHub

2. Click **Code** → **Codespaces** → **Create codespace on main**

3. Wait for the environment to build

4. Install dependencies and run setup:

```bash
composer install
.devcontainer/magento2-devcontainer/bin/setup-install.sh | bash
```

5. Verify the installation:

```bash
bin/magento --version
```

## Next Steps

- [Docker Compose Configuration](/customization/docker-compose) - Customize your environment
