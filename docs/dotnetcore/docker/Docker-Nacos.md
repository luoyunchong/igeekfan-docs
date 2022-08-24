# Docker 配置 Nacos

## 1、创建本地的映射文件

创建目录

```bash
mkdir -p  /usr/local/docker/nacos/logs /usr/local/docker/nacos/conf
```

配置数据库 application.properties

```bash
vim /usr/local/docker/nacos/conf/application.properties
```

- application.properties

```bash
spring.datasource.platform=mysql
db.num=1
db.url.0=jdbc:mysql://localhost:3310/nacos_config?characterEncoding=utf8&connectTimeout=1000&socketTimeout=3000&autoReconnect=true
db.user=user
db.password=password
```

下面通过配置来暴露除了/shutdown之外的所有端点。下面通过配置来暴露除了/shutdown之外的所有端点

```bash
management.endpoints.web.exposure.include=* 
```

## 2、运行容器

使用`standalone`(单机)模式并开放8848端口，并映射配置文件和日志目录，数据库在application.properties中配置

其中 `\`(空格+反斜杠)来支持命令行换行

```bash
docker run -d \
-p 8848:8848 -p 9848:9848 -p 9555:9555 \
-e MODE=standalone \
-e TZ="Asia/Shanghai" \
-e PREFER_HOST_MODE=hostname \
-v /usr/local/docker/nacos/logs:/home/nacos/logs \
-v /usr/local/docker/nacos/conf/application.properties:/home/nacos/conf/application.properties \
--restart always \
--name nacos \
nacos/nacos-server
```

其中-v 指定映射配置。左侧为linux文件，右侧为docker目录

```bash
docker network create mysql-net
# 创建桥接网络 mysql-net
docker network connect mysql-net mysql
# 容器 mysql 连入 mysql-net
docker network connect mysql-net nacos
# 同上，nacos
docker network inspect mysql-net
# 配置完后容器运行起来使用该命令查看该桥接网络下容器信息
```
