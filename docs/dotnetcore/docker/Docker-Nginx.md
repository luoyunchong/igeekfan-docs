# Docker配置 Nginx

## 拉取nginx镜像

```bash
docker pull nginx
```

## 启动nginx

直接启动一个nginx容器，端口映射到本地80端口，然后将容器的配置文件拷贝到本地，然后停止并移除容器，最后启动容器并挂载本地目录

```bash
docker run --name nginx -p 80:80 -d nginx
docker ps
```

因为nginx需要经常需要变更配置并需要发布静态文件，需要最好通过文件映射出来

## 本地创建管理目录

```bash
mkdir -p /etc/nginx
mkdir -p /etc/nginx/www
mkdir -p /var/www/html
mkdir -p /etc/nginx/conf
mkdir -p /etc/nginx/logs
```

## copy到刚创建的管理目录

```bash
docker cp nginx:/etc/nginx/nginx.conf /etc/nginx/
docker cp nginx:/etc/nginx/conf.d /etc/nginx/conf/
docker cp nginx:/usr/share/nginx/html/ /etc/nginx/www/
docker cp nginx:/var/log/nginx/ /etc/nginx/logs/
```

## 停止并移除容器

```bash
docker stop nginx
docker rm nginx
```

## 启动容器并目录挂载

```bash
docker run --name nginx -p 80:80 \
-v /etc/nginx/nginx.conf:/etc/nginx/nginx.conf \
-v /etc/nginx/www/:/usr/share/nginx/html/ \
-v /var/www/html/:/var/www/html/ \
-v /etc/nginx/logs/:/var/log/nginx/ \
-v /etc/nginx/conf/:/etc/nginx/conf.d \
--privileged=true -d nginx
```

- `--name` 容器名称
- `-p` 端口映射
- `-v` 目录映射
- `--privileged=true` 以root权限运行
- `-d` 后台运行
