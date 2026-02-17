# Services

The devcontainer runs a complete Magento stack matching [Adobe's official system requirements](https://experienceleague.adobe.com/en/docs/commerce-operations/installation-guide/system-requirements). Service versions and underlying applications may vary between Magento versions (e.g. OpenSearch vs. Elasticsearch, Valkey vs. Redis, MariaDB vs. MySQL).

| Service                            | Name         |
| ---------------------------------- | ------------ |
| [PHP](/services/php)               | `php`        |
| [Nginx](/services/nginx)           | `nginx`      |
| [Database](/services/database)     | `db`         |
| [OpenSearch](/services/opensearch) | `opensearch` |
| [RabbitMQ](/services/rabbitmq)     | `rabbitmq`   |
| [Cache](/services/cache)           | `redis`      |
