﻿﻿
# Lin CMS By .NET

<h1  align="center">
  <a href="http://doc.cms.7yue.pro/">
    <img width="200" src="https://consumerminiaclprd01.blob.core.chinacloudapi.cn/miniappbackground/sfgmember/lin/left-logo.png">
  </a>
  <h1>
  </h1>
</h1>

😃 A simple and practical CMS implemented by [ASP.NET Core 6](https://docs.microsoft.com/zh-cn/aspnet/core/introduction-to-aspnet-core?view=aspnetcore-6.0)

本项目是完全出于个人喜爱，看到 Lin-cms 有了 python,node.js,社区也有人出了[lin-cms-tp5](https://github.com/ChenJinchuang/lin-cms-tp5)的版本

本项目是 Lin CMS 后端的 [ASP.NET6](https://docs.microsoft.com/zh-cn/dotnet/core/introduction) 的实现，通过 Vue.js 实现的前后端分离 CMS 平台，目前实现简约的权限管理系统、基础字典项管理、随笔专栏，评论点赞，消息通知，标签等仿掘金模块。

## 什么是 Lin CMS？

Lin-CMS 是林间有风团队经过大量项目实践所提炼出的一套**内容管理系统框架**。Lin-CMS 可以有效的帮助开发者提高 CMS 的开发效率, 需要前端？请访问[**前端仓库**](https://github.com/TaleLin/lin-cms-vue)。官方团队产品了解请访问[**TaleLin**](https://github.com/TaleLin)

## 开源地址

- 后端接口 Gitee 链接 [https://gitee.com/igeekfan/lin-cms-dotnetcore](https://gitee.com/igeekfan/lin-cms-dotnetcore)
- 后端接口 GitHub 链接 [https://github.com/luoyunchong/lin-cms-dotnetcore](https://github.com/luoyunchong/lin-cms-dotnetcore)
- 适配管理端 UI [https://github.com/luoyunchong/lin-cms-vue](https://github.com/luoyunchong/lin-cms-vue)
- 适配用户端 UI [https://github.com/luoyunchong/lin-cms-vvlog](https://github.com/luoyunchong/lin-cms-vvlog)

## 线上文档地址(完善中)

- [https://luoyunchong.github.io/igeekfan-docs/dotnetcore/lin-cms/](https://luoyunchong.github.io/igeekfan-docs/dotnetcore/lin-cms/)
- [https://igeekfan.gitee.io/igeekfan-docs/dotnetcore/lin-cms/](https://igeekfan.gitee.io/igeekfan-docs/dotnetcore/lin-cms/)

## 线上 Demo

- 本项目 swagger 地址 [https://api.igeekfan.cn/swagger/index.html](https://api.igeekfan.cn/swagger/index.html)
- 用户端 lin-cms-vvlog [https://vvlog.baimocore.cn](https://vvlog.baimocore.cn)
  - 普通用户：710277267@qq.com
  - 密码：123qwe
- 管理员 lin-cms-vue [https://cms.baimocore.cn/](https://cms.baimocore.cn)
  - 管理员： admin
  - 密码：123qwe

## 前端

- 在原[开源项目](https://github.com/TaleLin/lin-cms-vue)中增加了博客随笔、标签、随笔评论、关注用户、关注标签、技术频道（标签分类）、插件式功能（目前还没有）
  ，具体特点查看如下[lin-cms-dotnetcore 功能模块的设计](https://blog.igeekfan.cn/2019/11/24/lin-cms-dotnetcore/design/),开源地址见下方。

### Lin CMS 的特点

Lin CMS 的构筑思想是有其自身特点的。下面我们阐述一些 Lin 的主要特点。

### Lin CMS 是一个前后端分离的 CMS 解决方案

这意味着，Lin 既提供后台的支撑，也有一套对应的前端系统，

首先，传统的网站开发更多的是采用服务端渲染的方式，需用使用一种模板语言在服务端完成页面渲染：比如 Razor 等模板技术。

服务端渲染的好处在于可以比较好的支持 SEO，但作为内部使用的 CMS 管理系统，SEO 并不重要。

但一个不可忽视的事实是，服务器渲染的页面到底是由前端开发者来完成，还是由服务器开发者来完成？其实都不太合适。现在已经没有多少前端开发者是了解这些服务端模板语言的，而服务器开发者本身是不太擅长开发页面的。那还是分开吧，前端用最熟悉的 Vue 写 JS 和 CSS，而服务器只关注自己的 API 即可。

其次，单页面应用程序的体验本身就要好于传统网站。

### 框架本身已内置了 CMS 常用的功能

Lin 已经内置了 CMS 中最为常见的需求：用户管理、权限管理、日志系统等。开发者只需要集中精力开发自己的 CMS 业务即可

更多关于 Lin CMS 的介绍请访问[Lin CMS 线上文档](http://doc.cms.7yue.pro/)

## 所需基础

由于 Lin 采用的是前后端分离的架构，所以你至少需要熟悉 C# 和 Vue。

### 后端 C#

该项目的 Lin 的服务端框架是基于[.NET Core 3.1](https://docs.microsoft.com/zh-cn/dotnet/core/)构建的，所以如果你比较熟悉 Mvc、WebAPI、过滤器等概念，或者是 有.NET Framework 中 Mvc 开发经验，相信你一定很容易写出代码。

### 相关技术

- 数据库相关：ORM:[FreeSql](https://github.com/2881099/FreeSql)+DataBase:MySQL5.6/MsSqlServer/Oracle/Sqlite/PostgreSQL
- ASP.NET Core 6 +WebAPI+RESTful
- 简化对象映射：[AutoMapper](https://automapper.org/)
- 身份认证框架：[IdentityServer4](https://github.com/IdentityServer/IdentityServer4)
- Json Web 令牌:JWT
- 文档 API：Swagger([Swashbuckle.AspNetCore](https://github.com/domaindrivendev/Swashbuckle.AspNetCore))
  - RapiDoc([RapiDoc](https://github.com/luoyunchong/IGeekFan.AspNetCore.RapiDoc))
  - Knife4jUI([Knife4jUI](https://github.com/luoyunchong/IGeekFan.AspNetCore.Knife4jUI))
- 序列化：Newtonsoft.Json
- 测试框架：Xunit
- 日志 [Serilog](https://github.com/serilog/serilog-aspnetcore)
- 依赖注入服务[AutoFac](https://github.com/autofac/Autofac.Extensions.DependencyInjection)
- 通用扩展方法 Z.ExtensionMethods
- 云存储：七牛云 [MQiniu.Core](https://github.com/Hello-Mango/MQiniu.Core)
- 分布式事务、EventBus：[DotNeteCore.CAP](https://github.com/dotnetcore/CAP)
- GitHub 第三方授权登录[AspNet.Security.OAuth.GitHub](https://github.com/aspnet-contrib/AspNet.Security.OAuth.Providers/tree/dev/src/AspNet.Security.OAuth.GitHub)
- QQ 第三方授权登录[AspNet.Security.OAuth.QQ](https://github.com/aspnet-contrib/AspNet.Security.OAuth.Providers/tree/dev/src/AspNet.Security.OAuth.QQ)
- Gitee 第三方授权登录[AspNet.Security.OAuth.Gitee](https://github.com/aspnet-contrib/AspNet.Security.OAuth.Providers/tree/dev/src/AspNet.Security.OAuth.Gitee)
- [Docker](https://docs.docker.com/)
- [Azure DevOps](https://dev.azure.com/)
- 健康检查[AspNetCore.HealthChecks.UI.Client](https://github.com/xabaril/AspNetCore.Diagnostics.HealthChecks)
- [GitHub Action](https://help.github.com/en/actions)

### 实践

- DDD(Domain-Driven Design)领域驱动设计
- Logging（日志）
- DevOps(CI/CD,自动化构建)
- Database Migrations（数据库自动迁移)
- Authentication(身份认证)
- Authorization（授权）
- Separation of Concerns（关注点分离）
- Repository Pattern（仓储模式）
- SOLID Principles（单一职责）
- Clean Code（代码整洁之道）

### 分层结构（Layers）

- identityserver4
  - LinCms.IdentityServer4:使用 id4 授权登录
- src
  - LinCms.Web：接口 API（ASP.NET Core)
  - LinCms.Application:应用服务
  - LinCms.Application.Contracts:DTO,数据传输对象，应用服务接口
  - LinCms.Infrastructure:基础设施，数据库持久性的操作
  - LinCms.Core:该应用的核心，实体类，通用操作类，AOP 扩展，分页对象，基础依赖对象接口，时间扩展方法，当前用户信息，异常类，值对象
  - LinCms.Plugins 使用单项目实现某个业务的扩展，不是该项目的主要结构，可暂时忽略。
  - LinCms.Scaffolding [代码生成器](https://igeekfan.gitee.io/igeekfan-docs/dotnetcore/lin-cms/lincms-scaffolding.html)
- test
  - LinCms.Test:对仓储，应用服务或工具类进行测试

### 前端

前端需要开发者比较熟悉 Vue 的，另外需要了解 ES6,axios,ElementUi、webpack、Vuex、Vue-Router 等等等

## 更新日志

[https://github.com/luoyunchong/lin-cms-dotnetcore/wiki/%E6%9B%B4%E6%96%B0%E6%97%A5%E5%BF%97](https://github.com/luoyunchong/lin-cms-dotnetcore/wiki/%E6%9B%B4%E6%96%B0%E6%97%A5%E5%BF%97)