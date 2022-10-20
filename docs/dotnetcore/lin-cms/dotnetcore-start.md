# 后端准备

## Server 端必备环境

- 安装软件开发包 [.NET SDK 6.0](https://dotnet.microsoft.com/zh-cn/download/dotnet/6.0)
- 安装开发工具 [Visual Studio 2022](https://visualstudio.microsoft.com/zh-hans/vs/) 或 [Rider](https://www.jetbrains.com/rider/)
- 安装 MySQL（version 5.7+)及以上版本
- Redis 4.0.14.2 for Windows [https://github.com/tporadowski/redis/releases](https://github.com/tporadowski/redis/releases)
- [Rabbitmq](rabbitmq.md)（非必要），默认基于Memory级别，


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

`LinCms.IdentityServer4` 项目不是必须的，根据`LinCms.Web`中的`appsettings.json`配置 项 `Service.IdentityServer4`设置成了true,LinCms.Web项目中的登录接口才会访问Ids4项目，

如需运行，则修改数据库配置项

`identityserver4/LinCms.IdentityServer4/appsettings.json` 数据库配置、同`LinCms.Web`中的配置项相同

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
    "MySql": "Data Source=localhost;Port=3308;User ID=root;Password=root;Initial Catalog=lincms;Charset=utf8mb4;SslMode=none;Max pool size=1;Connection LifeTime=20",
  },
```

其中 MariaDB（看做 MySql）,通过`Serilog`记录日志，需要配置相应的链接串。

```json
{
    "Name": "MariaDB",
    "Args": {
        "connectionString": "Data Source=localhost;Port=3306;User ID=root;Password=root;Initial Catalog=lincms;Charset=utf8mb4;SslMode=none;Max pool size=1;Connection LifeTime=20",
    }
}
```

## 数据迁移

该项目使用[FreeSql](https://github.com/dotnetcore/FreeSql)，会自动根据配置项创建数据库，默认自动迁移数据表结构，初始化种子数据

默认会创建用户`admin`，密码`123qwe`

## visual studio 2022 运行项目

双击 LinCms.sln，使用 vs2022 打开项目。右键解决方案，点击生成解决方案。

## Ids4 服务端

默认情况下 `Service.IdentityServer4`设置成了false，即`LinCms.IdentityServer4`不需要运行，我们就只需要运行`LinCms.Web`项目即可

```json
  "Service": {
    "IdentityServer4": false,
    "Name": "LinCms.Web",
    "GrantType": "password",
    "ClientId": "lin-cms-dotnetcore-client-id",
    "ClientSecret": "lin-cms-dotnetcore-client-secrets",
    "Authority": "https://localhost:5003",
    "UseHttps": true
  },
```

如果`Service.IdentityServer4`设置成了true

由于将 identityserver4 单独拆成了一个项目，所以需要同时启动二个项目，**右键解决方案，属性。**,选择多个启动项目，勾选二个项目同时启动。如下图所示。

![](https://pic.downk.cc/item/5e83fd74504f4bcb04cf5474.png)

这时候会打开二个网页 https://localhost:5001/swagger/index.html，即可看到 swagger 页面。

![](https://pic.downk.cc/item/5e83ffd1504f4bcb04d0f039.jpg)

会打开浏览器，访问[https://localhosst:5001/swagger/index.html](https://localhosst:5001/swagger/index.html)，会看到 swagger 的文档。
访问[https://localhosst:5003/swagger/index.html](https://localhosst:5001/swagger/index.html) 是 ids4 的接口文档，什么也看不到。

LinCms.Web 运行效果：
![](https://ae01.alicdn.com/kf/He52bc4d3708242d2995419bb584e1f53Q.jpg)

## 部署

- [部署至 Linux(Ubuntu16.06)](https://blog.igeekfan.cn/2022/06/09/dotnetcore/ASP.NET-Core-Deploy-To-Ubuntu)
- [部署至 Linux(Ubuntu16.06)下的 Docker](https://blog.igeekfan.cn/2022/06/09/dotnetcore/ASP.NET-Core-Deploy-To-Docker-Ubuntu/)

## 部署前准备

因为该项目基于 IdentityServer4,实现的授权认证服务，

开发阶段使用`AddDeveloperSigningCredential()`方法即可完成签名认证，但是在生产环境，我们必须使用`AddSigningCredential()`方法并且使用 OpenSSL 生成自己的签名证书

Startup.cs

```
            services.AddIdentityServer()
#if  DEBUG
                .AddDeveloperSigningCredential()
#endif
#if !DEBUG
                .AddSigningCredential(new X509Certificate2(Path.Combine(AppContext.BaseDirectory,
                        Configuration["Certificates:Path"]),
                    Configuration["Certificates:Password"]))
#endif
                .AddInMemoryIdentityResources(InMemoryConfiguration.GetIdentityResources())
                .AddInMemoryApiResources(InMemoryConfiguration.GetApis())
                .AddInMemoryClients(InMemoryConfiguration.GetClients())
                .AddProfileService<LinCmsProfileService>()
                .AddResourceOwnerValidator<LinCmsResourceOwnerPasswordValidator>();
```

appsettings.Production.json

```json
{
    "Certificates":
    {
        "Path":"ids4.pfx",
        "Password":"123qwe"
    }
}
```

### 使用 OpenSSL 生成证书

官网下载并安装 OpenSSL [OpenSSL 官网](https://slproweb.com/products/Win32OpenSSL.html)

下载 Win64 OpenSSL v1.1.1b 版本

在 OpenSSL 的 bin 文件夹，以管理员身份打开 CMD 执行以下命令：

```txt
openssl req -newkey rsa:2048 -nodes -keyout ids4.key -x509 -days 365 -out ids4.cer
```

下面将生成的证书和 Key 封装成一个文件，以便 IdentityServer 可以使用它们去正确地签名 tokens

```txt
openssl pkcs12 -export -in ids4.cer -inkey ids4.key -out ids4.pfx
```

### (注：在生成的过程中会让我们输入 Export Password)

这个 密码与 appsettings.Production.json 配置项相同。

发布时，把 ids4.pfx，放到项目根目录

## 参考

- [IdentityServer4 之 JWT 签名(RSA 加密证书)及验签](https://www.cnblogs.com/guolianyu/p/9872661.html)
