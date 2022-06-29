# Docker 命令行

* Command-Line Interfaces [https://docs.docker.com/engine/reference/run/](https://docs.docker.com/engine/reference/run/ "https://docs.docker.com/engine/reference/run/")

```bash
docker images  # 查看所有镜像

docker ps -a #显示所有的容器，包括未运行的。
docker ps -l #最后启动的容器

docker rm 容器id   #删除容器
docker rm $(docker ps -q -a) #一次性删除所有的容器

docker rmi 镜像id/镜像名称  #删除镜像
docker rmi $(docker images -q) #一次性删除所有的镜像。

docker build -t igeekfan/demo .  #运行构建命令,构建Docker 镜像。 

docker run 镜像 #运行
docker run -it -p 5000:80 igeekfan/demo
#5000是运行后，docker对外的端口，80是这个服务对外的端口，其中Dockerfile 存在语句EXPOSE 80
docker run -d -p 5000:80 igeekfan/demo 
-d 参数后台运行

docker start 容器id
docker restart 容器id
docker stop 容器id #终止容器。
docker logs $CONTAINER_ID ##在container外面查看它的输出 
docker attach $CONTAINER_ID ##连接上容器实时查看：

docker pull microsoft/dotnet  #单独安装某一镜像

docker save 镜像id > 文件 #持久化镜像
docker load < 文件
```

我们如果想将Docker 放置到其他机器运行，很简单。

```bash
#直接保存镜像，然后复制镜像到其他机器，然后使用docker 命令load 既可。

docker save igeekfan/demo > demo.tar

#然后加载命令

docker load < demo.tar
```

我们如果想将Docker 放置到其他机器运行，很简单。

```bash
#直接保存镜像，然后复制镜像到其他机器，然后使用docker 命令load 既可。

docker save igeekfan/demo > demo.tar

#然后加载命令

docker load < demo.tar
```

Docker删除

```bash
# 查询相关软件包
dpkg -l | grep docker
# 删除这个包 上面查到什么，删除什么
sudo apt remove --purge docker.io
```
