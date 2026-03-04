# PHP

The PHP container is based on [`mappia/magento-php`](https://hub.docker.com/r/mappia/magento-php) and serves as the devcontainer's **workspace container**. This is where your terminal sessions run, your code is edited, and where VS Code connects to. It runs PHP-FPM, which Nginx connects to via FastCGI.

All [devcontainer features](/features/claude-code) and [VS Code extensions](/features/vscode-extensions) are installed into this container.

## Default Credentials (Magento Admin)

| | |
| -------- | ----------- |
| Username | `admin`     |
| Password | `admin123`  |

## CLI Tools

The following tools are pre-installed in the container:

| Tool                                                    | Description                      |
| ------------------------------------------------------- | -------------------------------- |
| [Composer](https://getcomposer.org/)                    | PHP dependency manager           |
| [n98-magerun2](https://github.com/netz98/n98-magerun2) | Magento CLI utilities            |
| MySQL client                                            | Connect to the database from CLI |
| Redis CLI                                               | Connect to Redis/Valkey from CLI |
| Git                                                     | Version control                  |
| curl, wget                                              | HTTP utilities                   |
| vim                                                     | Text editor                      |

## Extensions

The PHP container includes all extensions required by Magento. The exact set of extensions varies by Magento version and matches [Adobe's system requirements](https://experienceleague.adobe.com/en/docs/commerce-operations/installation-guide/system-requirements).
