# Starting from Scratch

Start a new Magento project with the devcontainer when you don't have an existing codebase.

## Prerequisites

- [Git](https://git-scm.com/)
- [VS Code](https://code.visualstudio.com/) with the [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
- [Docker](https://www.docker.com/products/docker-desktop/)

## Steps

1. Clone the [starter project from GitHub](https://github.com/graycoreio/magento2-devcontainer-starter)

```bash
git clone git@github.com:graycoreio/magento2-devcontainer-starter.git
```

<details>
<summary>Alternative: manual setup without the starter project</summary>

If you don't want to use the starter project, you can initialize your store manually (this assumes that you have a unix shell):

```bash
mkdir my-magento-store && cd my-magento-store
git init
mkdir -p .devcontainer
git submodule add https://github.com/graycoreio/magento2-devcontainer.git .devcontainer/magento2-devcontainer
.devcontainer/magento2-devcontainer/bin/init.sh
```

</details>

2. Open in VS Code and click **Reopen in Container** when prompted.

```bash
code magento2-devcontainer-starter
```

![Reopen in Container prompt](/devcontainer-init.webp)

3. Create the Magento project inside the container:

```bash
composer create-project \
  --repository-url=https://mirror.mage-os.org/ \
  magento/project-community-edition /tmp/magento

cp -r /tmp/magento/. /workspace/
rm -rf /tmp/magento
```

:::warning
As of Magento 2.4.5, the `.gitignore` which previously was previously installed natively by Magento is no longer present. You can copy the one from the Magento 2 repository:

```bash
curl -o .gitignore https://raw.githubusercontent.com/magento/magento2/2.4-develop/.gitignore
```

Alternatively, you can [use the Magento Cloud `.gitignore`](https://github.com/magento/magento-cloud/blob/master/.gitignore) or define your own.
:::

:::danger
Do not commit `vendor` to source control (with the exception of `vendor/.htaccess`).
:::

4. Create your own repo on [Github](https://github.com/) and follow the instructions to push your project.

```bash
# Since this was a clone of the existing starter repo, you can safely remove the 
# The now irrelevant .git of the devcontainer-starter and start afresh
rm -rf .git
git init
git add .
git rm --cached .devcontainer/magento2-devcontainer -r
rm -rf .devcontainer/magento2-devcontainer
git submodule add https://github.com/graycoreio/magento2-devcontainer.git .devcontainer/magento2-devcontainer

git commit -m "chore: init Magento project"
git branch -M main

# (!) Adjust this line based upon your Github project's information
git remote add origin ...
git push
```

5. Run setup:

```bash
.devcontainer/magento2-devcontainer/bin/setup-install.sh | bash
```

6. Reload the nginx service:

```bash
docker exec magento2-devcontainer-nginx-1 nginx -s reload
```

7. Verify the installation:

```bash
bin/magento --version
```

8. View the app in your browser

Navigate to the **Ports** tab in VS Code and click **Open in Browser** on the Nginx port.

![VS Code Ports tab](/view-in-browser.webp)

You should see the default Magento Luma homepage.

![Luma homepage](/luma-homepage.webp)



9.  Cleanup resources for the environment

:::info
This is only necessary if you never plan to use the devcontainer again. To return to the environment later, simply close VS Code and reopen the devcontainer to start where you left off.
:::

:::danger
This is destructive. Please run these commands carefully.
:::
```bash
## List the relevant containers for review
docker ps -a --format '{{.ID}} {{.Names}}' \
| awk '$2 ~ /^magento2-devcontainer-/'

## Stop and remove those containers
docker ps -a --format '{{.ID}} {{.Names}}' \
| awk '$2 ~ /^magento2-devcontainer-/ {print $1}' \
| xargs -r docker rm -f

## List the relevant volumes for review.
docker volume ls --format '{{.Name}}' \
| awk '/^magento2-devcontainer_/'

# Stop and remove the created volumes
docker volume ls --format '{{.Name}}' \
| awk '/^magento2-devcontainer_/' \
| xargs -r docker volume rm
```

## Next Steps

- [Docker Compose Configuration](/customization/docker-compose) - Customize your environment
- [TLS Setup](/customization/tls) - Enable HTTPS for local development
