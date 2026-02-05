# Using with an Existing Magento Project

If you already have a Magento project with a `composer.json`, follow these steps to add the devcontainer.

## Prerequisites

- [VS Code](https://code.visualstudio.com/) with the [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
- [Docker](https://www.docker.com/products/docker-desktop/)

## Steps

1. Add the devcontainer as a submodule:

```bash
mkdir -p .devcontainer
git submodule add https://github.com/graycoreio/magento2-devcontainer.git .devcontainer/magento2-devcontainer
```

2. Run the init script:

```bash
.devcontainer/magento2-devcontainer/bin/init.sh
```

The script auto-detects your Magento version from `composer.json` and generates the devcontainer configuration.

3. Open in VS Code and click **Reopen in Container** when prompted.

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
- [TLS Setup](/customization/tls) - Enable HTTPS for local development
