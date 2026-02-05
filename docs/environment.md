# The Environment

This page documents what's included in the devcontainer environment.

## Services

The devcontainer runs a complete Magento stack matching [Adobe's official system requirements](https://experienceleague.adobe.com/en/docs/commerce-operations/installation-guide/system-requirements). Service versions vary based on your Magento version.

| Service    | Name         | Image                          |
| ---------- | ------------ | ------------------------------ |
| PHP        | `php`        | `mappia/magento-php`           |
| Nginx      | `nginx`      | `nginx`                        |
| MariaDB    | `db`         | `mariadb`                      |
| OpenSearch | `opensearch` | `opensearchproject/opensearch` |
| RabbitMQ   | `rabbitmq`   | `rabbitmq`                     |
| Valkey     | `redis`      | `valkey/valkey`                |

## PHP Container

The PHP container is based on [`mappia/magento-php`](https://hub.docker.com/r/mappia/magento-php) and includes everything needed for Magento development.

### CLI Tools

| Tool         | Description                      |
| ------------ | -------------------------------- |
| Composer     | PHP dependency manager           |
| n98-magerun2 | Magento CLI utilities            |
| MySQL client | Connect to the database from CLI |
| Redis CLI    | Connect to Redis/Valkey from CLI |
| Git          | Version control                  |
| curl, wget   | HTTP utilities                   |
| vim          | Text editor                      |

### Xdebug

Xdebug is pre-installed and configured for debugging:

- Mode: `debug`
- Port: `9003`

Use the [PHP Debug VS Code](https://marketplace.visualstudio.com/items?itemName=xdebug.php-debug) extension to connect.

## Devcontainer Features

The following [devcontainer features](https://containers.dev/features) are installed automatically:

| Feature     | Description                             |
| ----------- | --------------------------------------- |
| Git         | Version control (latest)                |
| GitHub CLI  | `gh` command for GitHub operations      |
| Node.js     | JavaScript runtime for frontend tooling |
| Claude Code | AI coding assistant                     |

## VS Code Extensions

These extensions are installed automatically when opening in VS Code:

| Extension                                                                                                   | Description          |
| ----------------------------------------------------------------------------------------------------------- | -------------------- |
| [PHP Intelephense](https://marketplace.visualstudio.com/items?itemName=bmewburn.vscode-intelephense-client) | PHP language support |
| [PHP Debug](https://marketplace.visualstudio.com/items?itemName=xdebug.php-debug)                           | Xdebug integration   |
| Prettier                                                                                                    | Code formatter       |
