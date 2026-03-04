# OpenSearch

[OpenSearch](https://opensearch.org/) provides the search engine for Magento's catalog and site search. Older versions of Magento may use [Elasticsearch](https://www.elastic.co/elasticsearch) instead.

For more details, see the [OpenSearch documentation](https://opensearch.org/docs/latest/).

## Health Check

You can verify that OpenSearch is running from the workspace:

```bash
curl http://opensearch:9200/_cluster/health?pretty
```
