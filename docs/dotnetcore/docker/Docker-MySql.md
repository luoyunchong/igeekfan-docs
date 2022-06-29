# Docker 配置 MySql

## 1.拉取镜像

```bash
docker pull mysql:5.7   # 拉取 mysql 5.7
docker pull mysql       # 拉取最新版mysql镜像
```

## 2不指定目录映射

```bash
sudo docker run -p 3306:3306 --name mysql -e MYSQL_ROOT_PASSWORD=123456 -d mysql
```

\-p 端口配置 主机3306/容器3306
\-name 容器名，此处为mysql
\-e 配置信息 MYSQL\_ROOT\_PASSWORD=123456 指定密码为123456
\-d 指定镜像
sudo docker run -p 3306:3306 --name mysql -e MYSQL\_ROOT\_PASSWORD=123456 -d mysql

> 默认的配置文件是：/etc/mysql/my.cnf
> 默认的数据目录是：/var/lib/mysql

我们进入mysql容器中，查看my.cnf.

```bash
docker exec -it mysql bash
cat /etc/mysql/my.cnf
```

my.cnf 加载了 /etc/mysql/conf.d目录中所有以后缀为.cnf的配置文件，所以我们映射目录，只需要映射conf.d目录即可。

先在linux上创建目录

```bash
sudo mkdir -p /usr/local/docker/mysql/conf.d
sudo vim mysql-docker.cnf
```

保存内容

```bash
[mysqld]
server-id = 1 #服务Id唯一
port = 3306
log-error    = /var/log/mysql/error.log
#只能用IP地址
skip_name_resolve 
#数据库默认字符集
character-set-server = utf8mb4
#数据库字符集对应一些排序等规则 
collation-server = utf8mb4_general_ci
#设置client连接mysql时的字符集,防止乱码
init_connect='SET NAMES utf8mb4'
#最大连接数
max_connections = 300
```

```bash
#如果遇到这个错就执行下权限
#mysqld: [Warning] World-writable config file '/etc/mysql/conf.d/mysql-docker.cnf' is ignored
sudo chmod 644 mysql-docker.cnf
```

## 3.建立目录映射

在linux上创建目录，用于存放mysql的日志和数据。

```bash
sudo mkdir -p /usr/local/docker/mysql/logs
sudo mkdir -p /usr/local/docker/mysql/data
```

```bash
sudo docker run -p 3310:3306 --name mysql \
-v /usr/local/docker/mysql/conf.d:/etc/mysql/conf.d \
-v /usr/local/docker/mysql/logs:/var/log/mysql \
-v /usr/local/docker/mysql/data:/var/lib/mysql \
-e MYSQL_ROOT_PASSWORD=123456 \
--restart=always \
-d mysql

```

```bash
#查看docker 下进程，mysql是否启动
docker ps 
#由于 mysql /var/log/mysql 默认情况下查看
docker exec mysql chown mysql:root /var/log/mysql
```

- -p 端口配置 linux主机3310/容器3306
- -name 容器名，此处为mysql
- -v 指定容器及其挂载的卷，此外为 宿主机文件目录:容器文件目录，可指定多个数据文件目录
- -e 配置信息 MYSQL_ROOT_PASSWORD=123456 设置 MySql服务的root密码为123456
- --restart=always 容器退出时总是重启
- -d 后台运行。
- 镜像名

## Docker相关命令

其中mysql为容器的name或id

```bash
#重启容器
docker restart mysql
#暂停容器
docker stop mysql
#删除容器
docker rm mysql
#启动容器
docker start mysql
#更新容器 开机也能重启
docker update mysql --restart=always
```

### 配置远程Navicat可访问

如果遇到无法访问时，可以使用此方式

```bash
sudo docker exec -it mysql /bin/bash
mysql -uroot -p123456
use mysql;
ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY '123456';
flush privileges;
```

### Restart参数

Docker 中restart参数用于指定自动重启docker容器策略，包含3个选项：no，on-failure\[:times]，always，unless-stopped

no 默认值，表示容器退出时，docker不自动重启容器

```bash
docker run --restart=no [容器名]
```

on-failure 若容器的退出状态非0，则docker自动重启容器，还可以指定重启次数，若超过指定次数未能启动容器则放弃**

```bash
docker run --restart=on-failure:3 [容器名]
```

always 容器退出时总是重启**

```bash
docker run --restart=always [容器名]
```

unless-stopped 容器退出时总是重启，但不考虑Docker守护进程启动时就已经停止的容器**

```bash
docker run --restart=unless-stopped [容器名]
```

如果容器启动时没有设置–restart参数，则通过下面命令进行更新：* *

```bash
docker update --restart=always [容器名]
```
