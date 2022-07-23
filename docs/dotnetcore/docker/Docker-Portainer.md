# Docker 配置 Portainer

## Docker 可视化管

* portainer 默认9000端口

```bash
docker pull portainer/portainer
```

```bash
sudo docker run -d -p 9000:9000 \
--restart=always \
-v /var/run/docker.sock:/var/run/docker.sock \
-v portainer_data:/data \
--name portainer \
-d portainer/portainer
```

* -d 后台运行
* -p 端口映射 主机端口9000:容器端口9000
* --restart=always 容器退出时总是重启
* -v 本地docker.sock
* `--`name指定容器名
* -d 指定镜像名
