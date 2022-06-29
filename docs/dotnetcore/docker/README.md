# Docker

Docker 中的三个概念，镜像（Image)、容器（Container)、仓库（Repository）

一个Image可有多个Container，我们可以把Image发布至Dokcer Hub提供的Repository中或阿里云Docker镜像仓库（Docker Registry），供他人使用。

## Docker 安装

[Ubuntu Docker 安装 - 云+社区 - 腾讯云 (tencent.com)](https://cloud.tencent.com/developer/article/1853467 "Ubuntu Docker 安装 - 云+社区 - 腾讯云 (tencent.com)")

## Docker 理论到实战

[Docker最全教程——从理论到实战(一)](https://www.cnblogs.com/codelove/p/10030439.html "Docker最全教程——从理论到实战(一)")

[八个Docker的真实应用场景](http://dockone.io/article/126 "八个Docker的真实应用场景")

[docker pull很慢解决办法、配置阿里镜像](https://blog.csdn.net/julien71/article/details/79760919 "docker pull很慢解决办法、配置阿里镜像")

[ASP.NET Core开发Docker部署](https://www.cnblogs.com/zxtceq/p/7403953.html "ASP.NET Core开发Docker部署")

## Docker学习记录

Docker Desktop 在windows 10下安装正常，Hyper-V也正常安装，但Hyper-V下无法打开虚拟交换机管理器，提示“尝试检索虚拟交换列表时出错”，也无法快速创建虚拟机，提示“xx异常”。事件查看器->Windows日志->系统中，Hyper-V-VmSwitch 一直提示 类似"VMSwitch driver due to error"

[Hyper-V管理器无法打开虚拟交换机管理，别人的方法，但无济于事](https://www.cnblogs.com/GeDiao/p/7975667.html "Hyper-V管理器无法打开虚拟交换机管理，别人的方法，但无济于事")

别人都是说去在windows功能上打开Hyper-v即可，而我开启了一直不行，我这个主要是Hyper-V问题，导致Docker服务一直无法正常启动。微软的论坛也找了，没人能解决，说重装系统？这只能终极解决方案。下面这个链接，我也回答了一下。

[hyperv 无法打开虚拟交换机管理器，报错“尝试检索虚拟交换机列表时出错](https://social.msdn.microsoft.com/Forums/healthvault/zh-CN/cf5c267b-1ca0-40dd-9959-5ecb3475a06c/hyperv?forum=window10app "hyperv 无法打开虚拟交换机管理器，报错“尝试检索虚拟交换机列表时出错")

后来找到解决办法，在设置-更新和安全-Windows预览体验计划，先去官网申请，申请后，升级系统，他会帮我修复Hyper-V.

AMD 启用了虚拟化也无法使用,命令行设置hyper-v参数.管理员模式下的命令提示符中输入

```bash
bcdedit /set hypervisorlaunchtype Auto
```

然后重启电脑，启动docker

## docker运行aspnetcore项目

```bash
docker run --restart unless-stopped -p 5020:80 --name lincms-web-1 -d registry.cn-hangzhou.aliyuncs.com/igeekfan/lincms-web

docker run --restart unless-stopped -p 5021:80 --name lincms-web-2 -d registry.cn-hangzhou.aliyuncs.com/igeekfan/lincms-web

docker run --restart unless-stopped -p 5022:80 --name lincms-web-3 -d registry.cn-hangzhou.aliyuncs.com/igeekfan/lincms-web
```

docker 提示hype-v冲突，以管理员身份运行命令提示符 执行命令

```bash
bcdedit /set hypervisorlaunchtype off 
```

重启，运行vm即可。

如果想要恢复hyper启动

```bash
bcdedit /set hypervisorlaunchtype auto
```
