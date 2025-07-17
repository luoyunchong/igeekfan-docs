# Docker 配置 Elasticsearch

- 拉取 Elasticsearch 镜像

```bash
docker pull docker.elastic.co/elasticsearch/elasticsearch:7.11.2
```

- 启动 Elasticsearch 容器

```bash
docker run \
-p 9200:9200 \
--name elasticsearch \
-p 9300:9300 \
-d \
-e "discovery.type=single-node" \
docker.elastic.co/elasticsearch/elasticsearch:7.11.2
```
