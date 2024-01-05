# ASP.NET Core+Supervisord部署至Ubuntu

# ASP.NET Core+Supervisord部署至Ubuntu

asp.netcore中内置了kestrel,如果不通过代理工具，如IIS，Nginx,Apache，HTTP请求内容如下

## 前提条件

- ubuntu服务器
- 安装nginx
- 服务器已安装.net sdk 6
- 安装守护进程 supervisor

## supervisor 守护进程

- 官网 [http://supervisord.org/](http://supervisord.org/)

什么是守护进程

守护进程(Daemon)是一个运行在后台的特殊进程，它独立于终端，并且以周期性地执行某些任务,在linux中，由于在linux中，每个系统与用户进行交流的界面称为终端，每一个从此终端开始运行的进程都会依附于这个终端，这个终端被称为这些进程的控制终端，当控制终端被关闭的时候，相应的进程都会自动关闭。但是守护进程却能突破这种限制，它脱离于终端并且在后台运行，并且它脱离终端的目的是为了避免进程在运行的过程中的信息在任何终端中显示并且进程也不会被任何终端所产生的终端信息所打断。它从被执行的时候开始运转，直到整个系统关闭才退出。在 Linux 上有很多可以管理进程的工具，我们使用 Supervisor 来做这个事情。

为什么部署asp.netcore项目需要一个守护进程

因为asp.netcore项目部署后，服务器可能存在关机，断开终端，无法保证web程序自启动。

## Ubuntu安装supervisor

```bash
sudo apt-get install supervisor  # 安装 守护进程 supervisor
cd /etc/supervisor/conf.d/     # 进入配置目录 
vim devops_api.conf        # 新建 一个配置文件 ，只要以 .conf结尾即可。
```

## 配置devops_api.conf

```bash
[program:devops_api]
command=dotnet DevOps.Api.dll --urls="http://*:7000"
directory=/home/igeekfan/code/devops_api
environment=ASPNETCORE__ENVIRONMENT=Production
user=www-data
stopsignal=INT
autostart=true
autorestart=true
startsecs=1
stderr_logfile=/home/igeekfan/code/devops_api/DevOps_Api.err.log
stdout_logfile=/home/igeekfan/code/devops_api/DevOps_Api.out.log
```

把linux的发布包放到了/home/igeekfan/code/devops_api目录中

有相应注释的，conf不能有注释，虽然没有任何异常，但无法启动服务。

```bash
[program:devops_api]##程序名称，终端控制时需要的标识
command=dotnet DevOps.Api.dll --urls="http://*:7000"  #要执行的命令
directory=/home/igeekfan/code/devops_api #命令执行的目录
environment=ASPNETCORE__ENVIRONMENT=Production #环境变量
user=www-data  #进程执行的用户身份
stopsignal=INT
autostart=true #是否自动启动
autorestart=true #是否自动重启
startsecs=1 #自动重启间隔
stderr_logfile=/home/igeekfan/code/devops_api/DevOps_Api.err.log #标准错误日志
stdout_logfile=/home/igeekfan/code/devops_api/DevOps_Api.out.log #标准输出日志
```

### 重启守护进程

（重新发布后，或服务崩溃后）

```bash
#重启守护进程
sudo /etc/init.d/supervisor restart
sudo service supervisor restart 
# 暂停服务supervisor
sudo service supervisor stop
# 启动服务supervisor
sudo service supervisor start
```

## supervisorctl 常用的相关命令

```bash
# 查看所有任务状态
supervisorctl status
# 关闭所有任务 
supervisorctl shutdown 
#重启指定应用
supervisorctl restart <application name>  
#停止指定应用
supervisorctl stop <application name>
#启动指定应用
supervisorctl start <application name>  
#重启所有应用
supervisorctl restart all
#停止所有应用
supervisorctl stop all 
#启动所有应用
supervisorctl start all 
# 修改配置文件可用
sudo supervisorctl  reload
```

查看日志

```bash
# 查看日志
tail -f  /home/igeekfan/code/devops_api/DevOps_Api.err.log
```

查看devops_api进程

```bash
ps -ef | grep devops_api
www-data    38    31  0 02:57 ?        00:00:00 dotnet /home/igeekfan/code/devops_api/DevOps.Api.dll --urls=http://*:7000
igeekfan   124     9  0 03:00 pts/0    00:00:00 grep --color=auto devops_api
```

## supervisor设置开机

设置`ubuntu`下的supervisor开机 自启动

```bash
sudo vim /etc/rc.local
```

在exit 0 之前加入以下命令

```bash
/usr/local/bin/supervisord
```

## Supervisor UI 管理台

Supervisor 默认给我们提供了一个图形界面来供我们管理进程和任务，linux下需要我们手动开启

```bash
sudo vim /etc/supervisor/supervisord.conf
```

增加配置,我们就能直接访问localhost:7002

```bash
[inet_http_server]port=0.0.0.0:7002username=userpassword=123
```

如果有防火墙

```bash
firewall-cmd --zone=public --add-port=7002/tcp --permanent
firewall-cmd --reload
```

## Nginx反向代理

一般情况下，我们建议使用nginx进行代理

![356361-5afcd9e65421b9e5.webp](./356361-5afcd9e65421b9e5.webp)

```bash
sudo apt-get install nginx
```

安装好以后，定位到 /etc/nginx/sites-available/default 文件。更改server 节点如下

```bash
server {
    listen 80;
    location / {
        proxy_pass http://localhost:7000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection keep-alive;
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

然后重新启动 Nginx

```bash
sudo service nginx restart 
sudo nginx -s reload　  #也可以使用这条命令重新加载配置项
```