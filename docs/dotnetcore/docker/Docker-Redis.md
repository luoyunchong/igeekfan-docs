# Docker 配置 Redis

## 目录

- [Docker 配置 Redis](#docker-配置-redis)
  - [目录](#目录)
  - [2.本地配置文件映射](#2本地配置文件映射)
  - [3.启动Docker](#3启动docker)

## 2.本地配置文件映射

创建/etc/redis/conf/redis.conf文件，并且daemonize=no。一定要是非后台模式，如果 是YES,会导致redis无法启动，因为后台会导致docker无任务可做而退出

```bash
mkdir -p /etc/redis/conf/
cd /etc/redis/conf/
vim redis.conf

##redis.conf文件内容
daemonize no
port 6379
requirepass 123456
bind 0.0.0.0

```

## 3.启动Docker

```bash
docker run \
-p 6379:6379 \
--name redis \
-v /etc/redis/conf/redis.conf:/etc/redis/redis.conf \
-v /etc/redis/data:/data \
-d redis \
redis-server /etc/redis/redis.conf \
--requirepass '123456' \
--appendonly yes

```

**docker 镜像reids 默认 无配置文件启动**

- -p：表示端口映射，冒号左面的是我们的服务器的端口，右侧则表示的是容器内mysql的端口
- `--`name：是我们给redis容器取的名字
- -v：表示挂载路径\映射配置文件

/etc/redis/conf/redis.conf左侧，代表linux上的路径，映射到容器上的/etc/redis/redis.conf。

/etc/redis/data代现linux上的redis的数据路径，映射到窗口中的/data目录

- -d redis  后台模式启动 redis
- redis-server /etc/redis/redis.conf    redis 将以 /etc/redis/redis.conf 为配置文件启动
- --appendonly yes  开启redis 持久化
- --requirepass '123456' 指定密码为123456
- --appendonly yes：开启持久化

后续可通过修改linux上的/etc/redis/conf/redis.conf文件来修改容器的redis服务，如密码requireapss+ 密码
