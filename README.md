# Magento 2.4.8 DevContainer

This devcontainer provides a complete development environment for Magento 2.4.8 that meets all official system requirements.

## System Requirements Met

- **PHP**: 8.3 with all required extensions
- **Database**: MariaDB 11.4
- **Search**: OpenSearch 2.19
- **Message Queue**: RabbitMQ 4.1
- **Cache**: Valkey 8 (Redis alternative)
- **Web Server**: Nginx 1.28
- **Composer**: 2.8

## Prerequisites

- Docker Desktop or Docker Engine
- Visual Studio Code with Dev Containers extension
- At least 8GB RAM allocated to Docker
- 20GB free disk space

## Getting Started

1. **Open in DevContainer**
   - Open this folder in VS Code
   - Click "Reopen in Container" when prompted
   - Or use Command Palette: "Dev Containers: Reopen in Container"

2. **Initial Setup** (runs automatically via postCreateCommand)
   ```bash
   composer install
   bin/magento setup:upgrade
   bin/magento cache:flush
   ```

3. **Configure Magento** (first time only)
   ```bash
   bin/magento setup:install \
     --base-url=http://admin.magento2.test \
     --db-host=db \
     --db-name=magento \
     --db-user=magento \
     --db-password=magento \
     --admin-firstname=Admin \
     --admin-lastname=User \
     --admin-email=admin@example.com \
     --admin-user=admin \
     --admin-password=Admin123! \
     --language=en_US \
     --currency=USD \
     --timezone=America/Chicago \
     --use-rewrites=1 \
     --search-engine=opensearch \
     --opensearch-host=opensearch \
     --opensearch-port=9200 \
     --opensearch-index-prefix=magento2 \
     --opensearch-timeout=15 \
     --cache-backend=redis \
     --cache-backend-redis-server=redis \
     --cache-backend-redis-db=0 \
     --page-cache=redis \
     --page-cache-redis-server=redis \
     --page-cache-redis-db=1 \
     --session-save=redis \
     --session-save-redis-host=redis \
     --session-save-redis-db=2 \
     --amqp-host=rabbitmq \
     --amqp-port=5672 \
     --amqp-user=magento \
     --amqp-password=magento \
     --amqp-virtualhost=/
   ```

4. **Configure Developer Mode**
   ```bash
   bin/magento deploy:mode:set developer
   bin/magento cache:disable layout block_html full_page
   ```

5. **Access Your Store**
   - Frontend: http://admin.magento2.test
   - Admin: http://admin.magento2.test/admin
   - Admin credentials: admin / Admin123!

   **Note**: Add `127.0.0.1 admin.magento2.test` to your host machine's `/etc/hosts` file (Mac/Linux) or `C:\Windows\System32\drivers\etc\hosts` (Windows)

## Services & Ports

| Service | Port | Credentials |
|---------|------|-------------|
| Nginx | 80 | - |
| PHP-FPM | 9000 | - |
| MariaDB | 3306 | root: magento / user: magento:magento |
| OpenSearch | 9200, 9600 | No auth |
| RabbitMQ | 5672 (AMQP), 15672 (Management UI) | magento:magento |
| Valkey/Redis | 6379 | No auth |

## Useful Commands

### Magento CLI
```bash
# Clear cache
bin/magento cache:flush

# Reindex
bin/magento indexer:reindex

# Enable/disable modules
bin/magento module:enable Module_Name
bin/magento module:disable Module_Name

# Static content deploy
bin/magento setup:static-content:deploy -f

# Database upgrade
bin/magento setup:upgrade

# Compilation
bin/magento setup:di:compile
```

### Composer
```bash
# Install dependencies
composer install

# Update dependencies
composer update

# Require new package
composer require vendor/package
```

### Database
```bash
# Connect to database
mysql -h db -u magento -pmagento magento

# Import database
mysql -h db -u magento -pmagento magento < backup.sql
```

### RabbitMQ Management
Access RabbitMQ Management UI at http://localhost:15672
- Username: magento
- Password: magento

## Debugging with Xdebug

Xdebug is pre-configured and ready to use:

1. Set breakpoints in VS Code
2. Start debugging (F5)
3. Xdebug will connect automatically on port 9003

## Troubleshooting

### Permissions Issues
```bash
# Fix file permissions
sudo chown -R www-data:www-data /workspace
find /workspace -type d -exec chmod 755 {} \;
find /workspace -type f -exec chmod 644 {} \;
chmod -R 777 /workspace/var /workspace/pub/static /workspace/generated
```

### Clear All Caches
```bash
bin/magento cache:flush
bin/magento cache:clean
redis-cli -h redis FLUSHALL
rm -rf var/cache/* var/page_cache/* generated/*
```

### Reset Database
```bash
bin/magento setup:uninstall
# Then run setup:install again
```

### Check Service Status
```bash
# From host machine
docker compose -f .devcontainer/docker-compose.yml ps

# Check service logs
docker compose -f .devcontainer/docker-compose.yml logs [service-name]
```

## Performance Optimization

For better performance during development:

1. **Disable modules you don't need**
   ```bash
   bin/magento module:disable Magento_TwoFactorAuth Magento_AdminAdobeImsTwoFactorAuth
   ```

2. **Use production mode for testing performance**
   ```bash
   bin/magento deploy:mode:set production
   ```

3. **Increase Docker resources** (Docker Desktop settings)
   - Memory: 8GB minimum, 12GB recommended
   - CPUs: 4 cores minimum

## Environment Files

The devcontainer includes:

- `devcontainer.json` - Main devcontainer configuration
- `Dockerfile` - PHP environment with all extensions
- `docker-compose.yml` - Multi-service orchestration
- `nginx.conf` - Nginx configuration for Magento
- `mysql.cnf` - Optimized MariaDB settings

## VS Code Extensions Included

- PHP Intelephense - PHP intelligence
- PHP Debug - Xdebug integration
- EditorConfig - Consistent coding style
- Prettier - Code formatting

## Additional Resources

- [Magento 2 DevDocs](https://developer.adobe.com/commerce/docs/)
- [Magento 2.4.8 Release Notes](https://experienceleague.adobe.com/docs/commerce-operations/release/notes/overview.html)
- [System Requirements](https://experienceleague.adobe.com/en/docs/commerce-operations/installation-guide/system-requirements)
