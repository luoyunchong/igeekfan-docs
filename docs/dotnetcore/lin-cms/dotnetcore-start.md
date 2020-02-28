# 后端准备

## Server 端必备环境
* 安装软件开发包 [.NET Core SDK 2.2](https://dotnet.microsoft.com/download/dotnet-core/2.2)   
* 安装开发工具  [Visual Studio 2019](https://visualstudio.microsoft.com/zh-hans/vs/?rr=https%3A%2F%2Fcn.bing.com%2F)  
* 安装MySQL（version： 5.6+,别装8.0+，未测试）


## 获取工程项目
```bash
git clone https://github.com/luoyunchong/lin-cms-dotnetcore.git
```

## 数据库配置

文件位置src/LinCms.Web/appsettings.json，当数据库中存储表情包是，Charset为utf8mb4

**请务必根据自己的实际情况修改此配置项**
```json
"ConnectionStrings": {
    "Default": "Data Source=127.0.0.1;Port=3306;User ID=root;Password=123456;Initial Catalog=LinCms;Charset=utf8;SslMode=none;Max pool size=10"
}
```
## 数据迁移
该项目使用[FreeSql](https://github.com/2881099/FreeSql)，默认自动迁移数据表结构，**需要自己创建数据库，名字为LinCms**，无须用户操作，但无数据，而且只有访问到表时才会创建某个表，所以用户可将[备份SQL](https://github.com/luoyunchong/lin-cms-dotnetcore/blob/master/docs/sql/lincms.sql)放到Mysql中生成，还原表结构及数据。


## 1.vscode命令行运行
使用vscode打开项目，
### 切换到LinCms.Web目录
```
 D:\code\github\lin-cms-dotnetcore> cd src\LinCms.Web
```
### 编译、安装依赖包
```
D:\code\github\lin-cms-dotnetcore\src\LinCms.Web> dotnet build
```
### 运行
```
D:\code\github\lin-cms-dotnetcore\src\LinCms.Web> dotnet run watch
Now listening on: https://localhost:5001
Now listening on: http://localhost:5000
Application started. Press Ctrl+C to shut down.
```
这时候打开 https://localhost:5001/swagger/index.html，即可看到swagger页面。

## 2.visual studio 2019运行

双击lin-cms-dotnetcore.sln即可使用vs2019打开项目。右键解决方案，点击生成解决方案，然后,再单击LinCms .Web，即可自动启动后台服务。

![](https://ae01.alicdn.com/kf/H70086026eaca4dc8ab4806ee1d07443bP.jpg)

会打开浏览器，访问[https://localhosst:5001/swagger/index.html](https://localhosst:5001/swagger/index.html)，会看到swagger的文档。

![](https://ae01.alicdn.com/kf/He52bc4d3708242d2995419bb584e1f53Q.jpg)



## 部署至linux(Ubuntu16.06)

- [https://blog.igeekfan.cn/2019/06/09/dotnetcore/ASP.NET-Core-Deploy-To-Ubuntu/](https://blog.igeekfan.cn/2019/06/09/dotnetcore/ASP.NET-Core-Deploy-To-Ubuntu/)

## 部署至Docker

- [https://blog.igeekfan.cn/2019/06/09/dotnetcore/ASP.NET-Core-Deploy-To-Docker-Ubuntu/](https://blog.igeekfan.cn/2019/06/09/dotnetcore/ASP.NET-Core-Deploy-To-Docker-Ubuntu/)

## 部署前准备
因为该项目基于IdentityServer4,实现的授权认证服务，

开发阶段使用`AddDeveloperSigningCredential()`方法即可完成签名认证，但是在生产环境，我们必须使用`AddSigningCredential()`方法并且使用OpenSSL生成自己的签名证书

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

```
{
    "Certificates":
    {
        "Path":"ids4.pfx",
        "Password":"123qwe"
    }
}
```

### 使用OpenSSL生成证书

官网下载并安装OpenSSL [OpenSSL官网](https://slproweb.com/products/Win32OpenSSL.html)

下载 Win64 OpenSSL v1.1.1b 版本

在OpenSSL的bin文件夹，以管理员身份打开CMD执行以下命令：

```
openssl req -newkey rsa:2048 -nodes -keyout ids4.key -x509 -days 365 -out ids4.cer
```
下面将生成的证书和Key封装成一个文件，以便IdentityServer可以使用它们去正确地签名tokens
```
openssl pkcs12 -export -in ids4.cer -inkey ids4.key -out ids4.pfx 
```
##### (注：在生成的过程中会让我们输入Export Password)
这个 密码与appsettings.Production.json配置项相同。

发布时，把ids4.pfx，放到项目根目录

## 参考
- [IdentityServer4之JWT签名(RSA加密证书)及验签](https://www.cnblogs.com/guolianyu/p/9872661.html)

