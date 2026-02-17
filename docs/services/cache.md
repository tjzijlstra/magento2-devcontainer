# Cache (Redis / Valkey)

[Valkey](https://valkey.io/) is the default in-memory key-value store used for caching and session storage. It is fully compatible with [Redis](https://redis.io/). Older versions of Magento may use Redis instead.

## Connecting from the workspace

The Redis CLI is pre-installed in the PHP container:

```bash
redis-cli -h redis
```

You can verify the connection with a ping:

```bash
redis-cli -h redis ping
```
