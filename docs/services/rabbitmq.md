# RabbitMQ

[RabbitMQ](https://www.rabbitmq.com/) provides the message queue for Magento's asynchronous operations such as bulk API processing and message consumers.

## Default Credentials

| | |
| -------- | ---------- |
| Username | `magento`  |
| Password | `magento`  |

## Connecting from the workspace

RabbitMQ is available at `rabbitmq` on port `5672` (AMQP):

```bash
curl -u magento:magento http://rabbitmq:15672/api/healthchecks/node
```

## Management UI

The devcontainer uses the `rabbitmq:management` image variant, which includes a built-in web UI for monitoring queues, exchanges, and connections. Navigate to the **Ports** tab in VS Code and open port `15672` in your browser.
