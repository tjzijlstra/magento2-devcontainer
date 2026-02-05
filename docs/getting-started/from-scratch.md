# Starting from Scratch

Start a new Magento project with the devcontainer when you don't have an existing codebase.

## Prerequisites

- [VS Code](https://code.visualstudio.com/) with the [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
- [Docker](https://www.docker.com/products/docker-desktop/)

## Steps

1. Create a project directory and add the devcontainer:

```bash
mkdir my-magento-store && cd my-magento-store
mkdir -p .devcontainer
git submodule add https://github.com/graycoreio/magento2-devcontainer.git .devcontainer/magento2-devcontainer
```

2. Run the init script and select your desired Magento version:

```bash
.devcontainer/magento2-devcontainer/bin/init.sh
```

3. Open in VS Code and click **Reopen in Container** when prompted.

4. Create the Magento project inside the container:

```bash
composer create-project \
  --repository-url=https://mirror.mage-os.org/ \
  magento/project-community-edition /tmp/magento

cp -r /tmp/magento/. /workspace/
rm -rf /tmp/magento
```

5. Run setup:

```bash
.devcontainer/magento2-devcontainer/bin/setup-install.sh | bash
```

6. Verify the installation:

```bash
bin/magento --version
```

## Next Steps

- [Docker Compose Configuration](/customization/docker-compose) - Customize your environment
- [TLS Setup](/customization/tls) - Enable HTTPS for local development
