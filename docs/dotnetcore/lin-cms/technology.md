
### 相关技术
- 数据库相关：ORM:[FreeSql](https://github.com/2881099/FreeSql)+DataBase:MySQL5.6
- ASP.NET Core3.1+WebAPI+RESTful
- 简化对象映射：[AutoMapper](https://automapper.org/)
- 身份认证框架：[IdentityServer4](https://github.com/IdentityServer/IdentityServer4)
- Json Web令牌:JWT
- 文档API：Swagger([Swashbuckle.AspNetCore](https://github.com/domaindrivendev/Swashbuckle.AspNetCore))
- 序列化：Newtonsoft.Json
- 测试框架：Xunit
- 日志 NLog
- 依赖注入服务[AutoFac](https://github.com/autofac/Autofac.Extensions.DependencyInjection)
- 通用扩展方法 Z.ExtensionMethods
- 云存储：七牛云 [MQiniu.Core](https://github.com/Hello-Mango/MQiniu.Core)
- 分布式事务、EventBus：[DotNeteCore.CAP](https://github.com/dotnetcore/CAP)
- GitHub第三方授权登录[AspNet.Security.OAuth.GitHub](https://github.com/aspnet-contrib/AspNet.Security.OAuth.Providers)
- QQ第三方授权登录[AspNet.Security.OAuth.QQ](https://github.com/aspnet-contrib/AspNet.Security.OAuth.Providers)
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
- framework
   - VoVo.CAP.MySql：为CAP实现了配合FreeSql的事务一致性扩展
- identityserver4
   - LinCms.IdentityServer4:使用id4授权登录
- src
  - LinCms.Web：接口API（ASP.NET Core)
  - LinCms.Application:应用服务
  - LinCms.Application.Contracts:DTO,数据传输对象，应用服务接口
  - LinCms.Infrastructure:基础设施，数据库持久性的操作
  - LinCms.Core:该应用的核心，实体类，通用操作类，AOP扩展，分页对象，基础依赖对象接口，时间扩展方法，当前用户信息，异常类，值对象
  - LinCms.Plugins 使用单项目实现某个业务的扩展，不需要主要项目结构，可暂时忽略。
- test
  - LinCms.Test:对仓储，应用服务或工具类进行测试
