# ASP.NET Core+Systemd部署至Ubuntu

# Systemd部署至Ubuntu

本指南介绍如何在 Ubuntu 16.04 服务器上设置生产就绪 [ASP.NET](http://asp.net/) Core 环境。 这些说明可能适用于较新版本的 Ubunt

> 对于 Ubuntu 14.04，建议使用 supervisord 作为监视 Kestrel 进程的解决方案。 systemd 不适用于 Ubuntu 14.04。
> 

有关 Ubuntu 14.04 的说明，请参阅[本主题的以前版本](https://github.com/dotnet/AspNetCore.Docs/blob/e9c1419175c4dd7e152df3746ba1df5935aaafd5/aspnetcore/publishing/linuxproduction.md)。

## 下载源码

部署devops/Devops.Api.csproj，打包，将所有文件上传至linux的 `/var/www/devops_api` 目录中

[https://github.com/luoyunchong/devops](https://github.com/luoyunchong/devops)

```bash
cd e:/code:/devops/DevOps.Api
dotnet publish --configuration Release
```

## Systemd

服务器设置为将对 `http://<serveraddress>:80` 发起的请求转发到在 `http://127.0.0.1:5000` 中的 Kestrel 上运行的 [ASP.NET](http://asp.net/) Core 应用。 但是，未将 Nginx 设置为管理 Kestrel 进程。 `systemd` 可用于创建服务文件以启动和监视基础 Web 应用。 `systemd` 是一个初始系统，可以提供启动、停止和管理进程的许多强大的功能。

创建服务定义文件：

```bash
sudo vim /etc/systemd/system/kestrel-devops-api.service
```

下示例是应用的一个 `.ini` 服务文件：

```bash
[Unit]
Description=Example .NET Web API App running on Ubuntu
After=network.target

[Service]
WorkingDirectory=/var/www/devops_api
ExecStart=/usr/bin/dotnet /var/www/devops_api/DevOps.Api.dll --urls="http://*:7000"
Restart=always
# Restart service after 10 seconds if the dotnet service crashes:
RestartSec=10
KillSignal=SIGINT
SyslogIdentifier=devops-api
User=www-data
Environment=ASPNETCORE_ENVIRONMENT=Production
Environment=DOTNET_PRINT_TELEMETRY_MESSAGE=false

[Install]
WantedBy=multi-user.target
```

在前面的示例中，管理服务的用户由 `User` 选项指定。 用户 (`www-data`) 必须存在并且拥有正确应用文件的所有权。

使用 `TimeoutStopSec` 配置在收到初始中断信号后等待应用程序关闭的持续时间。 如果应用程序在此时间段内未关闭，则将发出 SIGKILL 以终止该应用程序。 提供作为无单位秒数的值（例如，`150`）、时间跨度值（例如，`2min 30s`）或 `infinity` 以禁用超时。 `TimeoutStopSec` 默认为管理器配置文件 (`systemd-system.conf`, `system.conf.d`, `systemd-user.conf`, `user.conf.d`) 中 `DefaultTimeoutStopSec` 的值。 大多数分发版的默认超时时间为 90 秒。

```bash
# The default value is 90 seconds for most distributions.
TimeoutStopSec=90
```

Linux 具有区分大小写的文件系统。 将 `ASPNETCORE_ENVIRONMENT` 设置为 `Production` 时，将搜索配置文件 `appsettings.Production.json`，而不搜索 `appsettings.production.json`。

必须转义某些值（例如，SQL 连接字符串）以供配置提供程序读取环境变量。 使用以下命令生成适当的转义值以供在配置文件中使用：

```bash
systemd-escape "<value-to-escape>"
```

环境变量名不支持冒号 (`:`) 分隔符。 使用双下划线 (`__`) 代替冒号。 环境变量读入配置时，[环境变量配置提供程序](https://docs.microsoft.com/zh-cn/aspnet/core/fundamentals/configuration/?view=aspnetcore-6.0#environment-variables)将双下划线转换为冒号。 以下示例中，连接字符串密钥 `ConnectionStrings:DefaultConnection` 以 `ConnectionStrings__DefaultConnection` 形式设置到服务定义文件中：

```bash
Environment=ConnectionStrings__DefaultConnection={Connection String}
```

`After=network.target` 是systemd服务单元文件中的一个设置，它指定了服务单元应该在哪个系统目标（target）之后启动。在这种情况下，`network.target` 指的是网络服务的启动。这个设置确保了在网络服务启动之后，才会启动你的服务单元。这是因为在某些情况下，你的服务可能需要依赖于网络服务。这个设置可以确保你的服务在网络服务可用时启动，避免了启动服务时出现问题的可能性。

保存该文件并启用该服务。

```bash
sudo systemctl enable kestrel-devops-api.service
```

启用该服务，并确认它正在运行

```bash
sudo systemctl start kestrel-devops-api.service
sudo systemctl status kestrel-devops-api.service
sudo systemctl stop kestrel-devops-api.service
```

```bash
● kestrel-devops-api.service - Example .NET Web API App running on Ubuntu
     Loaded: loaded (/etc/systemd/system/kestrel-devops-api.service; enabled; vendor preset: enabled)
     Active: active (running) since Sun 2022-06-12 01:41:00 CST; 2min 2s ago
   Main PID: 2395006 (dotnet)
      Tasks: 14 (limit: 4612)
     Memory: 26.8M
     CGroup: /system.slice/kestrel-devops-api.service
             └─2395006 /usr/bin/dotnet /var/www/devops_api/DevOps.Api.dll --urls=http://*:7000

Jun 12 01:41:00 hecs-x-large-2-linux-20200616150407 dotnet-example[2395006]: info: Microsoft.Hosting.Lifetime[14]
Jun 12 01:41:00 hecs-x-large-2-linux-20200616150407 dotnet-example[2395006]:       Now listening on: http://[::]:7000
Jun 12 01:41:00 hecs-x-large-2-linux-20200616150407 dotnet-example[2395006]: info: Microsoft.Hosting.Lifetime[0]
Jun 12 01:41:00 hecs-x-large-2-linux-20200616150407 dotnet-example[2395006]:       Application started. Press Ctrl+C to shut down.
Jun 12 01:41:00 hecs-x-large-2-linux-20200616150407 dotnet-example[2395006]: info: Microsoft.Hosting.Lifetime[0]
Jun 12 01:41:00 hecs-x-large-2-linux-20200616150407 dotnet-example[2395006]:       Hosting environment: Production
Jun 12 01:41:00 hecs-x-large-2-linux-20200616150407 dotnet-example[2395006]: info: Microsoft.Hosting.Lifetime[0]
Jun 12 01:41:00 hecs-x-large-2-linux-20200616150407 dotnet-example[2395006]:       Content root path: /var/www/devops_api/
Jun 12 01:41:12 hecs-x-large-2-linux-20200616150407 dotnet-example[2395006]: warn: Microsoft.AspNetCore.HttpsPolicy.HttpsRedirectionMiddleware[3]
Jun 12 01:41:12 hecs-x-large-2-linux-20200616150407 dotnet-example[2395006]:       Failed to determine the https port for redirect.
```

## 查看日志

使用 Kestrel 的 Web 应用是通过 `systemd` 进行管理的，因此所有事件和进程都被记录到集中日志。 但是，此日志包含由 `systemd` 管理的所有服务和进程的全部条目。 若要查看特定于 `kestrel-helloapp.service` 的项，请使用以下命令：

```bash
sudo journalctl -fu kestrel-devops-api.service
```

有关进一步筛选，使用时间选项（如 `--since today`、`--until 1 hour ago`）或这些选项的组合可以减少返回的条目数。

```bash
sudo journalctl -fu kestrel-devops-api.service --since "2016-10-18" --until "2016-10-18 04:00"
```

[使用 Nginx 在 Linux 上托管 ASP.NET Core | Microsoft Docs](https://docs.microsoft.com/zh-cn/aspnet/core/host-and-deploy/linux-nginx?view=aspnetcore-6.0)

[https://github.com/luoyunchong/devops](https://github.com/luoyunchong/devops)