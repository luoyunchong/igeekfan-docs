# 技术栈

## 后端 (.NET Core)

- **开发框架**: [.NET 9](https://dotnet.microsoft.com/zh-cn/download/dotnet/6.0) / [.NET 7](https://dotnet.microsoft.com/zh-cn/download/dotnet/7.0)
- **ORM**: [FreeSql](https://github.com/dotnetcore/FreeSql) - 支持 CodeFirst 模式，灵活强大的国产 ORM。
- **数据库支持**:
    - MySQL (5.7+)
    - PostgreSQL (12+)
    - SQL Server (2012+)
    - Sqlite3 (默认)
    - Oracle
    - Firebird
    - ClickHouse
    - QuestDB
    - ... (更多请参考 FreeSql 文档)
- **API 文档**: [Swagger (Swashbuckle.AspNetCore)](https://github.com/domaindrivendev/Swashbuckle.AspNetCore) - 自动生成交互式 API 文档。
- **对象映射**: [Mapster](https://github.com/MapsterMapper/Mapster) - 高性能的对象映射库。
- **日志**: [Serilog](https://github.com/serilog/serilog) - 结构化日志框架。
- **身份认证**: [JWT (JSON Web Tokens)](https://jwt.io/) - 用于 API 认证。
- **访问控制**: 基于策略 (Policy-Based) 和角色 (Role-Based) 的授权。
- **缓存**:
    - `MemoryCache` (内存缓存)
    - `DistributedMemoryCache` (分布式内存缓存)
    - `Redis` (通过 `FreeRedis` 或 `StackExchange.Redis`)
- **消息队列**: [RabbitMQ](https://www.rabbitmq.com/) (通过 `RabbitMQ.Client`) - 可选，用于异步任务处理。
- **依赖注入**: .NET Core 内建 DI 容器。
- **后台任务**: [BackgroundService](https://docs.microsoft.com/zh-cn/dotnet/core/extensions/workers) / [Quartz.NET](https://www.quartz-scheduler.net/) (可选)
- **单元测试**: [xUnit](https://xunit.net/) / [NSubstitute](https://nsubstitute.github.io/)
- **代码校验**: [FluentValidation](https://github.com/FluentValidation/FluentValidation) - 用于 DTO 模型验证。
- **跨域处理**: .NET Core 内建 CORS 支持。

## 开发工具

- **IDE**:
    - Visual Studio 2022+ (推荐用于 .NET 开发)
    - JetBrains Rider (跨平台 .NET IDE)
    - Visual Studio Code (前端和 .NET Core 开发)
- **数据库管理**:
    - DBeaver
    - Navicat
    - pgAdmin (PostgreSQL)
    - SQL Server Management Studio (SSMS)
- **API 测试**:
    - Postman
    - Insomnia
    - Swagger UI (内置)
- **版本控制**: Git
