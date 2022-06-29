# Docker 配置 Jenkins

[docker安装jenkins - hanease - 博客园 (cnblogs.com)](https://www.cnblogs.com/hanease/p/15690225.html)

## 配置 Docker 镜像

```bash
curl -sSL https://get.daocloud.io/daotools/set_mirror.sh | sh -s http://f1361db2.m.daocloud.io
```

## Docker拉取镜像

```bash
docker pull jenkins/jenkins:lts
```

## 配置本地存储目录

```bash
mkdir -p /apps/devops/jenkins
chmod 777 /apps/devops/jenkins
```

### 启动Jenkins容器

```bash
docker stop jenkins
docker rmi jenkins

sudo usermod -a -G docker root
sudo chmod 666 /var/run/docker.sock


docker run -itd -p 9003:8080 -p 9004:50000 \
--restart always \
-v /apps/devops/jenkins:/var/jenkins_home \
--name jenkins \
--volume /var/run/docker.sock:/var/run/docker.sock \
-v $(which docker):/usr/bin/docker \
-v $(which docker):/usr/bin/com.docker.cli \
jenkins/jenkins:lts
```

## Docker 运行aspnetcore项目

```bash
docker run -it -d -p 7000:80 --name aspnetcoredemo aspnetcoredemo
```

## 构建项目

```bash
docker build -f src/aspnetcoredemo/Dockerfile -t aspnetcoredemo .

GITHASH=`git rev-parse --short HEAD`
docker build -f src/aspnetcoredemo/Dockerfile -t aspnetcoredemo:$GITHASH .
docker tag aspnetcoredemo:$GITHASH aspnetcoredemo:latest

docker build -f src/Services/ToDo/IGeekFan.FreeKit.Todos.API/Dockerfile -t igeekfan.freekit.todos.api .
  

```

IGeekFan.Freekit.Service bash脚本

```bash
#!/bin/bash
# 获取短版本号
GITHASH=`git rev-parse --short HEAD`
docker stop igeekfan.freekit.todos.api
docker rm igeekfan.freekit.todos.api
echo ---------------Building Docker Image...------------------
docker build -f src/Services/ToDo/IGeekFan.FreeKit.Todos.API/Dockerfile -t igeekfan.freekit.todos.api:$GITHASH .
docker tag igeekfan.freekit.todos.api:$GITHASH igeekfan.freekit.todos.api:latest
echo ---------------Launching Container..igeekfan.freekit.todos.api.------------------
docker run -it -d -p 7002:80 --name igeekfan.freekit.todos.api igeekfan.freekit.todos.api -v


docker stop igeekfan.freekit.files.api
docker rm igeekfan.freekit.files.api
echo ---------------Building Docker Image...------------------
docker build -f src/Services/File/IGeekFan.FreeKit.Files.API/Dockerfile -t igeekfan.freekit.files.api:$GITHASH .
docker tag igeekfan.freekit.files.api:$GITHASH igeekfan.freekit.files.api:latest
echo ---------------Launching Container..igeekfan.freekit.files.api.------------------
docker run -it -d -p 7003:80 --name igeekfan.freekit.files.api igeekfan.freekit.files.api -v

docker stop igeekfan.freekit.identity.api
docker rm igeekfan.freekit.identity.api
echo ---------------Building Docker Image...------------------
docker build -f src/Services/Identity/IGeekFan.FreeKit.Identity.API/Dockerfile -t igeekfan.freekit.identity.api:$GITHASH .
docker tag igeekfan.freekit.identity.api:$GITHASH igeekfan.freekit.identity.api:latest
echo ---------------Launching Container..igeekfan.freekit.identity.api.------------------
docker run -it -d -p 7004:80 --name igeekfan.freekit.identity.api igeekfan.freekit.identity.api -v


```

aspnetcoredemo项目 bash脚本

```bash
#!/bin/bash
# 获取短版本号
GITHASH=`git rev-parse --short HEAD`
docker stop aspnetcoredemo
docker rm aspnetcoredemo
echo ---------------Building Docker Image..aspnetcoredemo.------------------
docker build -f src/aspnetcoredemo/Dockerfile -t aspnetcoredemo:$GITHASH .
docker tag aspnetcoredemo:$GITHASH aspnetcoredemo:latest
echo ---------------Launching Container..aspnetcoredemo.------------------
docker run -it -d -p 7000:80 --name aspnetcoredemo aspnetcoredemo -v 

echo ---------------Finish..aspnetcoredemo.------------------

docker stop webapplicationdemo
docker rm webapplicationdemo
echo ---------------Building Docker Image..webapplicationdemo.------------------
docker build -f src/webapplicationdemo/Dockerfile -t webapplicationdemo:$GITHASH .
docker tag webapplicationdemo:$GITHASH webapplicationdemo:latest
echo ---------------Launching Container..webapplicationdemo.------------------
docker run -it -d -p 7001:80 --name webapplicationdemo webapplicationdemo -v 

```
