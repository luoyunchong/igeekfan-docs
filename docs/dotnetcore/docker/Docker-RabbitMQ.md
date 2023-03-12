# Docker配置 RabbitMQ

## 创建本地目录

```bash
mkdir -p /usr/local/rabbitmq/1/lib
mkdir -p /usr/local/rabbitmq/1/log
chmod -R 777 /usr/local/rabbitmq/1/log
```

## 运行容器

- 映射路径需要加privileged的配置

```bash
sudo docker run -d \
--hostname rabbitmq \
--name rabbitmq \
-p 15672:15672 \
-p 5672:5672 \
-e RABBITMQ_DEFAULT_USER=admin \
-e RABBITMQ_DEFAULT_PASS=123qwe \
-e RABBITMQ_ERLANG_COOKIE='rabbitmq_cookie' \
--privileged=true \
-v /usr/local/rabbitmq/1/lib:/var/lib/rabbitmq \
-v /usr/local/rabbitmq/1/log:/var/log/rabbitmq \
rabbitmq:management

```

## 参数说明

```bash
-i: 交互式操作
-t: 终端
-d:参数默认不会进入容器
```

- `-d` 后台模式
- `-p`：表示端口映射，冒号左面的是我们的服务器的端口，右侧则表示的是容器内rabbimt的端口,多个 `-p` 支持多个端口映射
- `--name`：指定容器的名字（非必填）
- `--hostname` 自定义Docker容器的 hostname
- `--privileged=true` 使用该参数，container内的root拥有真正的root权限，否则容器出现permission denied
- `-v` ****Volumes 卷****

打开网站

- `http://localhost:15672`
- 账号：admin
- 密码 123qwe
