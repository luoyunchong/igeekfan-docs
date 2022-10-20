# CAP实现EventBus

分布式事务一致性，使用的是 [CAP](https://github.com/dotnetcore/cap)，那么我们在什么情况下使用它呢。

EventBus:事件总线，是一个基于观察者模块的事件发布/订阅框架，可以将一些复杂的，重复的操作，异步的操作，交给系统去处理，当前系统直接返回成功的操作。

简单的说就是解耦，

比如用户发布文章后，需要将消息推送给关注的用户，这时候，推送会浪费许多时间，本来这个操作与当前登录的用户没有关系，用户也只关注文章发布是否成功，。后续，将推送等操作，交给另一件事件去处理，这样速度更快，屏蔽了一些细节。就类似一种消息通知，我不关心后续是什么操作，只将自己的一些状态传递过去。

我们先来了解一下CAP中的EventBus，主要特点是发布订阅模式，内部使用RabbitMQ实现异构系统的消息同步，通过本地消息表对信息持久化，保证由EventBus发出的消息是可靠的，即高可用。

如果系统启动后在log/log200xxx.txt日志错误原因，RabbitMQ

```txt
DotNetCore.CAP.BrokerConnectionException: Broker Unreachable
 ---> RabbitMQ.Client.Exceptions.BrokerUnreachableException: None of the specified endpoints were reachable
 ---> RabbitMQ.Client.Exceptions.OperationInterruptedException: The AMQP operation was interrupted: AMQP close-reason, initiated by Peer, code=530, text="- to NOT_ALLOWED access vhost '/admin' refused for user 'admin'", classId=10, methodId=40, cause=
   at RabbitMQ.Client.Impl.SimpleBlockingRpcContinuation.GetReply(TimeSpan timeout)
   at RabbitMQ.Client.Impl.ModelBase.ConnectionOpen(String virtualHost, String capabilities, Boolean insist)
   at RabbitMQ.Client.Framing.Impl.Connection.Open(Boolean insist)
   at RabbitMQ.Client.Framing.Impl.Connection..ctor(IConnectionFactory factory, Boolean insist, IFrameHandler frameHandler, String clientProvidedName)
   at RabbitMQ.Client.Framing.Impl.AutorecoveringConnection.Init(IFrameHandler fh)
   at RabbitMQ.Client.Framing.Impl.AutorecoveringConnection.Init(IEndpointResolver endpoints)
   at RabbitMQ.Client.ConnectionFactory.CreateConnection(IEndpointResolver endpointResolver, String clientProvidedName)
   --- End of inner exception stack trace ---
   at RabbitMQ.Client.ConnectionFactory.CreateConnection(IEndpointResolver endpointResolver, String clientProvidedName)
   at RabbitMQ.Client.ConnectionFactory.CreateConnection(String clientProvidedName)
   at DotNetCore.CAP.RabbitMQ.ConnectionChannelPool.<>c__DisplayClass19_0.<CreateConnection>b__1()
   at DotNetCore.CAP.RabbitMQ.ConnectionChannelPool.GetConnection()
   at DotNetCore.CAP.RabbitMQ.RabbitMQConsumerClient.Connect()
   at DotNetCore.CAP.RabbitMQ.RabbitMQConsumerClientFactory.Create(String groupId)
   --- End of inner exception stack trace ---
   at DotNetCore.CAP.RabbitMQ.RabbitMQConsumerClientFactory.Create(String groupId)
   at DotNetCore.CAP.Internal.ConsumerRegister.<>c__DisplayClass17_0.<Start>b__0()
2020-04-26 15:59:54.280 +08:00 [DBG] Transport connection checking...
2020-04-26 15:59:54.281 +08:00 [WRN] Transport connection is unhealthy, reconnection...
2020-04-26 15:59:54.467 +08:00 [ERR] Broker Unreachable
```

## 安装下载

我们就需要安装rabbitmq了后，配置好用户，密码，virtual_hosts，因为rabbimq是erlang写的，所以
前提要安装erlang,官网下载比百度网盘还慢，也可自行去官网下载。

erlang 安装包 链接：<https://pan.baidu.com/s/1T1_dI7iPMpEgiP8QC5tlaw>
提取码：86jm

rabbitmq 安装包  链接：<https://pan.baidu.com/s/1wD22_gKFX2LW9oOx69rnCA>
提取码：ohea

## 配置RabbitMQ

> 服务开启后，管理地址：<http://localhost:15672/>

* 帐号：guest 密码 : guest

如果遇到RabbitmMQ安装后，web管理端口<http://localhost:15672/> 无法访问的解决

先进入rabbitMQ安装目录下的sbin目录,在目录下shift+右键打开命令行

使用rabbitmq-plugins.bat enable rabbitmq_management开启网页管理界面,然后重启rabbitMQ

1.[https://blog.csdn.net/sxf359/article/details/78239382](https://blog.csdn.net/sxf359/article/details/78239382)

2.![示例](https://note.youdao.com/yws/api/personal/file/7FA20220D5454DF9B0788B33E3A41FED?method=download&shareKey=c2e5f279b574304e3bd777a75a4e3045)

3. 此命令执行要先定位到rabbitmq的安装目录下的sbin文件夹下。

~~~
 rabbitmq-plugins enable rabbitmq_management
~~~

## docker下安装rabbitmq

通过docker来安装rabbitmq,并启动
1.拉取镜像

```bash
docker pull rabbitmq:3.7.7-management
```

2.创建和启动容器

```
docker run -d --name rabbitmq3.7.7 -p 5672:5672 -p 15672:15672 -v `pwd`/data:/var/lib/rabbitmq --hostname myRabbit -e RABBITMQ_DEFAULT_VHOST=my_vhost  -e RABBITMQ_DEFAULT_USER=admin -e RABBITMQ_DEFAULT_PASS=admin df80af9ca0c9
```

说明：

-d 后台运行容器；

--name 指定容器名；

-p 指定服务运行的端口（5672：应用访问端口；15672：控制台Web端口号）；

-v 映射目录或文件；

--hostname  主机名（RabbitMQ的一个重要注意事项是它根据所谓的 “节点名称” 存储数据，默认为主机名）；

-e 指定环境变量；（RABBITMQ_DEFAULT_VHOST：默认虚拟机名；RABBITMQ_DEFAULT_USER：默认的用户名；RABBITMQ_DEFAULT_PASS：默认用户名的密码）

其他，可查看正在运行的容器

```bash
docker ps 
```

打开浏览器，进入web管理端:<http://Server-IP:15672，用户名密码都是admin>

## 开发配置项

lin-cms-dotnetcore 中 appsettings.json中配置如下，默认guest,不太安全，所以需要我们稍微学习一下rabbitmq的工具的使用。

```json
 "RabbitMQ": {
    "HostName": "localhost",
    "UserName": "admin",
    "Password": "123456",
    "Port": 5672,
    "VirtualHost": "/admin"
  }
```

1. 新增一个admin用户，配置这个账号的密码是123455(好像也不安全)，配置tag,这里我们选择management
![](https://pic.downk.cc/item/5ea54319c2a9a83be5d27c56.png)

2. 新建一个virtual hosts，啥意思就不BB了。
![](https://pic.downk.cc/item/5ea54392c2a9a83be5d2f596.png)

3.给admin这个用户配置virtual hosts

先选择第一个图中的admin用户。
![](https://pic.downk.cc/item/5ea5446ac2a9a83be5d3ab26.jpg)

然后set permission选择virtual hosts /admin 点击set permission，万事大吉
![](https://pic.downk.cc/item/5ea5449bc2a9a83be5d3d674.jpg)

重新启动项目，日志不会显示错误。

![](https://pic.downk.cc/item/5ea545d8c2a9a83be5d4e4e4.jpg)
