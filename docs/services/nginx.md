# Nginx

[Nginx](https://nginx.org/) serves as the web server for the Magento application, proxying requests to the PHP container via FastCGI.

## Configuration

The devcontainer's Nginx configuration includes Magento's default `nginx.conf.sample` from the workspace. This file ships with every Magento installation and contains the built-in Nginx rules for URL rewrites, static file handling, PHP location blocks, and more.

### Environment Variables

These variables are set in the docker-compose configuration and substituted into the template at startup:

| Variable                | Default     | Description                          |
| ----------------------- | ----------- | ------------------------------------ |
| `MAGENTO2_UPSTREAM`     | `php`       | Hostname of the PHP container        |
| `MAGENTO2_UPSTREAM_PORT`| `9000`      | FastCGI port on the PHP container    |
| `NGINX_PORT`            | `8000`      | HTTP listen port inside the container|
| `NGINX_TLS_PORT`        | `8443`      | HTTPS listen port inside the container|
| `MAGE_ROOT_DIR`         | `/workspace`| Path to the Magento root directory   |

## Reloading

If for any reason you need to make changes to the Nginx configuration, you can reload the web server from the workspace:

```bash
docker exec $DEVCONTAINER_NAME-nginx-1 nginx -s reload
```

## TLS

A separate TLS template is available at `nginx/tls/default.conf.template` that adds an HTTPS server block. See the [TLS Setup](/customization/tls) guide for details on enabling it.
