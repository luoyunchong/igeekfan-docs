# 技术栈

## 核心技术

- **后端框架**：ASP.NET Core 9.0 + WebAPI + RESTful
- **数据访问**：[FreeSql](https://github.com/dotnetcore/FreeSql) - 支持多种数据库
  - MySQL / SqlServer / PostgreSQL / Oracle / SQLite 等
- **认证授权**：JWT + [IdentityServer4](https://github.com/IdentityServer/IdentityServer4)
- **对象映射**：[AutoMapper](https://automapper.org/)
- **API文档**：
  - [Swagger (Swashbuckle.AspNetCore)](https://github.com/domaindrivendev/Swashbuckle.AspNetCore)
  - [RapiDoc](https://github.com/luoyunchong/IGeekFan.AspNetCore.RapiDoc) 
  - [Knife4jUI](https://github.com/luoyunchong/IGeekFan.AspNetCore.Knife4jUI)
- **依赖注入**：[AutoFac](https://github.com/autofac/Autofac.Extensions.DependencyInjection)
- **日志框架**：[Serilog](https://github.com/serilog/serilog-aspnetcore)
- **模板引擎**：[Scriban](https://github.com/lunet-io/scriban)

## 扩展功能

- **文件存储**：本地存储 + 七牛云存储 [MQiniu.Core](https://github.com/Hello-Mango/MQiniu.Core)
- **分布式事务**：[DotNetCore.CAP](https://github.com/dotnetcore/CAP)
- **第三方登录**：
  - [GitHub OAuth](https://github.com/aspnet-contrib/AspNet.Security.OAuth.Providers/tree/dev/src/AspNet.Security.OAuth.GitHub)
  - [QQ OAuth](https://github.com/aspnet-contrib/AspNet.Security.OAuth.Providers/tree/dev/src/AspNet.Security.OAuth.QQ)
  - [Gitee OAuth](https://github.com/aspnet-contrib/AspNet.Security.OAuth.Providers/tree/dev/src/AspNet.Security.OAuth.Gitee)
- **容器化**：[Docker](https://docs.docker.com/)
- **CI/CD**：
  - [Azure DevOps](https://dev.azure.com/)
  - [GitHub Actions](https://help.github.com/en/actions)
- **健康检查**：[AspNetCore.HealthChecks](https://github.com/xabaril/AspNetCore.Diagnostics.HealthChecks)

## 架构实践

- **设计模式**：领域驱动设计 (DDD)
- **代码质量**：Clean Code、SOLID原则
- **架构模式**：
  - 仓储模式 (Repository Pattern)
  - 关注点分离 (Separation of Concerns)
  - 单元测试 (Xunit)
- **DevOps**：CI/CD、自动化构建
- **数据处理**：数据库自动迁移、审计日志

## 项目分层结构

```
├─ src
│  ├─ LinCms.Web               // 接口API层 (ASP.NET Core)
│  ├─ LinCms.Application       // 应用服务层
│  ├─ LinCms.Application.Contracts // 应用服务接口与DTO
│  ├─ LinCms.Infrastructure    // 基础设施层，数据持久化
│  ├─ LinCms.Core              // 核心领域层
│  └─ LinCms.Plugins          // 插件模块扩展
│
└─ test
   └─ LinCms.Test             // 测试项目
