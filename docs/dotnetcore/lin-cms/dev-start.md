# 开发起步


## 项目结构

- framework
   - VoVo.CAP.MySql：为CAP实现了配合FreeSql的事务一致性扩展
- identityserver4
   - LinCms.IdentityServer4:使用id4授权登录
- src
  - LinCms.Web：接口API（ASP.NET Core)、中间件，权限验证
  - LinCms.Application:应用服务
  - LinCms.Application.Contracts:DTO,数据传输对象,应用服务接口
  - LinCms.Infrastructure:基础设施，数据库持久性的操作，仓储接口的实现
  - LinCms.Core:该应用的核心，实体类，通用操作类，AOP扩展，分页对象，基础依赖对象接口，时间扩展方法，当前用户信息，异常类，值对象，仓储接口
  - LinCms.Plugins 使用单项目实现某个业务的扩展，不需要主要项目结构，可暂时忽略。
- test
  - LinCms.Test:对仓储，应用服务或工具类进行测试
```
├─framework
│  └─src
│      └─VoVo.CAP.MySql
├─identityserver4
│  └─LinCms.IdentityServer4
│      ├─Controllers
│      ├─IdentityServer4
├─src
│  ├─LinCms.Application
│  │  ├─Cms
│  │  │  ├─Admin
│  │  │  ├─Files
│  │  │  ├─Groups
│  │  │  ├─Logs
│  │  │  ├─Permissions
│  │  │  ├─Settings
│  │  │  └─Users
│  ├─LinCms.Application.Contracts
│  │  ├─Cms
│  │  │  ├─Account
│  │  │  ├─Admins
│  │  │  │  └─Dtos
│  │  │  ├─Files
│  │  │  │  └─Dtos
│  │  │  ├─Groups
│  │  │  │  └─Dtos
│  │  │  ├─Logs
│  │  │  │  └─Dtos
│  │  │  ├─Permissions
│  │  │  │  └─Dtos
│  │  │  ├─Settings
│  │  │  │  └─Dtos
│  │  │  └─Users
│  │  │      └─Dtos
│  ├─LinCms.Core
│  │  ├─Aop
│  │  ├─Common
│  │  ├─Data
│  │  │  └─Enums
│  │  ├─Dependency
│  │  ├─Entities
│  │  │  ├─Base
│  │  │  ├─Blog
│  │  │  └─Settings
│  │  ├─Exceptions
│  │  ├─Extensions
│  │  ├─IRepositories
│  │  ├─LinCms
│  │  │  └─Core
│  │  ├─Middleware
│  │  └─Security
│  ├─LinCms.Infrastructure
│  │  └─Repositories
│  ├─LinCms.Plugins
│  │  └─Poem
│  │      ├─AutoMapper
│  │      ├─Controllers
│  │      └─Models
│  └─LinCms.Web
│      ├─Configs
│      ├─Controllers
│      │  ├─Cms
│      ├─Data
│      │  └─Authorization
│      ├─Properties
│      ├─SnakeCaseQuery
│      ├─Uow
│      ├─Utils
│      └─wwwroot
└─test
    └─LinCms.Test
        ├─Controller
        │  ├─Cms
        ├─Properties
        ├─Service
        │  └─Cms
        └─Utils
```
## 相关技术

### FreeSql

- [主要在介绍FreeSql在ASP.NTE Core WebApi中如何使用的过程，完成一个最简单的博客系统的后端接口](https://luoyunchong.github.io/vuepress-docs/dotnetcore/examples/FreeSql-in-asp.net-core-webapi-how-to-use.html)

- [本文使用ASP .NET Core的WEB API，构建一个RESTful风格的接口，使用Freesql访问MySQL数据库，实现二个表的简单博客，并集成AutoMapper。](https://luoyunchong.github.io/vuepress-docs/dotnetcore/examples/FreeSql-sample-blog-RESTful-use-automapper.html)

### IdentityServer4


- [IdentityServer4 在本项目中的应用](/dotnetcore/examples/IdentityServer4.html)

