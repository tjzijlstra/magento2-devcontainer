# Database (MySQL / MariaDB)

[MariaDB](https://mariadb.org/) is the default relational database for the Magento application. Older versions of Magento may use MySQL instead.

## Default Credentials

| | |
| -------- | ---------- |
| Username | `magento`  |
| Password | `magento`  |
| Database | `magento`  |

## Connecting from the workspace

The MySQL client is pre-installed in the PHP container. Connect to the database with:

```bash
mysql -h db -u magento -pmagento magento
```
