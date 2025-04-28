# 后端准备

## Server 端必备环境

- 安装软件开发包 [.NET SDK 9.0](https://dotnet.microsoft.com/zh-cn/download/dotnet/9.0)
- 安装开发工具 [Visual Studio 2022](https://visualstudio.microsoft.com/zh-hans/vs/) 或 [Rider](https://www.jetbrains.com/rider/)
- 安装 MySQL（version 5.7+)及以上版本
- Redis 4.0.14.2 for Windows [https://github.com/tporadowski/redis/releases](https://github.com/tporadowski/redis/releases)
- [Rabbitmq](rabbitmq.md)（非必要），默认基于Memory级别

## 获取工程项目

```bash
git clone https://github.com/luoyunchong/lin-cms-dotnetcore.git
```

## 数据库配置

文件位置`src/LinCms.Web/appsettings.json`，当数据库中存储表情包是，`Charset`为`utf8mb4`

**请务必根据自己的实际情况修改此配置项**，`DefaultDB`为 0 时，代表使用`MySQL`，`DefaultDB`为 1 时，代表使用`SqlServer`,以此类推。

```json
 "ConnectionStrings": {
    "DefaultDB": "0",
    "DataType": {
      "MySql": 0,
      "SqlServer": 1,
      "PostgreSQL": 2,
      "Oracle": 3,
      "Sqlite": 4
    },
    "MySql": "Data Source=localhost;Port=3306;User ID=root;Password=root;Initial Catalog=lincms;Charset=utf8mb4;SslMode=none;Max pool size=1;Connection LifeTime=20",
    "SqlServer": "Data Source=.;User ID=sa;Password=123456;Integrated Security=True;Initial Catalog=LinCMS;Pooling=true;Min Pool Size=1",
    "PostgreSQL": "Host=localhost;Port=5432;Username=postgres;Password=123456; Database=lincms;Pooling=true;Minimum Pool Size=1",
    "Oracle": "user id=root;password=root; data source=//127.0.0.1:1521/ORCL;Pooling=true;Min Pool Size=1",
    "Sqlite": "Data Source=|DataDirectory|\\lincms.db; Attachs=lincms.db; Pooling=true;Min Pool Size=1",
    "CsRedis": "127.0.0.1:6379,password=,defaultDatabase=0"
  },
```


## 数据迁移

该项目使用[FreeSql](https://github.com/dotnetcore/FreeSql)，会自动根据配置项创建数据库，默认自动迁移数据表结构，初始化种子数据

默认会创建用户`admin`，密码`123qwe`

## visual studio 2022 运行项目

双击 LinCms.sln，使用 vs2022 打开项目。右键解决方案，点击生成解决方案。

会打开浏览器，访问[https://localhosst:5001/swagger/index.html](https://localhosst:5001/swagger/index.html)，会看到 swagger 的文档。

LinCms.Web 运行效果：
![](https://ae01.alicdn.com/kf/He52bc4d3708242d2995419bb584e1f53Q.jpg)

## 部署

- [部署至 Linux(Ubuntu16.06)](https://blog.igeekfan.cn/2022/06/09/dotnetcore/ASP.NET-Core-Deploy-To-Ubuntu)
- [部署至 Linux(Ubuntu16.06)下的 Docker](https://blog.igeekfan.cn/2022/06/09/dotnetcore/ASP.NET-Core-Deploy-To-Docker-Ubuntu/)