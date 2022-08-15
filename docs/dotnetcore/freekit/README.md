# FreeKit 指北

<div align="center">

## <img src=/images/dotnet-bot_skating.png width=100 /> .NET <img src=/images/dotnet-20-years.png width=80  /> YEARS

**Freekit** 为.NET Core提供了更多的扩展实现

[![.NET IDE Rider](https://img.shields.io/static/v1?style=float&logo=rider&label=Rider&message=jetbrains&color=red)](https://www.jetbrains.com/rider/)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/luoyunchong/IGeekFan.AspNetCore.RapiDoc/master/LICENSE)

</div>

## Nuget Packages

| Package name                           | Version                                                                                                                                                                                              | Downloads                                                                              |
| -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `IGeekFan.AspNetCore.Identity.FreeSql` | [![NuGet](https://img.shields.io/nuget/v/IGeekFan.AspNetCore.Identity.FreeSql.svg?style=flat-square&label=nuget&color=fedcba)](https://www.nuget.org/packages/IGeekFan.AspNetCore.Identity.FreeSql/) | ![downloads](https://img.shields.io/nuget/dt/IGeekFan.AspNetCore.Identity.FreeSql.svg) |
| `IGeekFan.FreeKit`                     | [![NuGet](https://img.shields.io/nuget/v/IGeekFan.FreeKit.svg?style=flat-square&label=nuget)](https://www.nuget.org/packages/IGeekFan.FreeKit/)                                                      | ![downloads](https://img.shields.io/nuget/dt/IGeekFan.FreeKit.svg)                     |
| `IGeekFan.FreeKit.Extras`              | [![NuGet](https://img.shields.io/nuget/v/IGeekFan.FreeKit.Extras.svg?style=flat-square&label=nuget)](https://www.nuget.org/packages/IGeekFan.FreeKit.Extras/)                                        | ![downloads](https://img.shields.io/nuget/dt/IGeekFan.FreeKit.Extras.svg)              |
| `IGeekFan.FreeKit.Modularity`          | [![NuGet](https://img.shields.io/nuget/v/IGeekFan.FreeKit.Modularity.svg?style=flat-square&label=nuget)](https://www.nuget.org/packages/IGeekFan.FreeKit.Modularity/)                                | ![downloads](https://img.shields.io/nuget/dt/IGeekFan.FreeKit.Modularity.svg)          |
| `IGeekFan.FreeKit.Email`               | [![NuGet](https://img.shields.io/nuget/v/IGeekFan.FreeKit.Email.svg?style=flat-square&label=nuget)](https://www.nuget.org/packages/IGeekFan.FreeKit.Email/)                                          | ![downloads](https://img.shields.io/nuget/dt/IGeekFan.FreeKit.Email.svg)               |
| `IGeekFan.Localization.FreeSql`        | [![NuGet](https://img.shields.io/nuget/v/IGeekFan.Localization.FreeSql.svg?style=flat-square&label=nuget)](https://www.nuget.org/packages/IGeekFan.Localization.FreeSql/)                            | ![downloads](https://img.shields.io/nuget/dt/IGeekFan.Localization.FreeSql.svg)        |
| `IGeekFan.AspNetCore.DataProtection.FreeRedis`| [![NuGet](https://img.shields.io/nuget/v/IGeekFan.AspNetCore.DataProtection.FreeRedis.svg?style=flat-square&label=nuget)](https://www.nuget.org/packages/IGeekFan.AspNetCore.DataProtection.FreeRedis/)| ![downloads](https://img.shields.io/nuget/dt/IGeekFan.AspNetCore.DataProtection.FreeRedis.svg)|
| `IGeekFan.AspNetCore.DataProtection.FreeSql`| [![NuGet](https://img.shields.io/nuget/v/IGeekFan.AspNetCore.DataProtection.FreeSql.svg?style=flat-square&label=nuget)](https://www.nuget.org/packages/IGeekFan.AspNetCore.DataProtection.FreeSql/)| ![downloads](https://img.shields.io/nuget/dt/IGeekFan.AspNetCore.DataProtection.FreeSql.svg)|

## BaGet Packages

| Package name                           | Version                                                                          |
| -------------------------------------- | -------------------------------------------------------------------------------- |
| `IGeekFan.AspNetCore.Identity.FreeSql` | [BaGet](http://124.70.130.97:5555/packages/IGeekFan.AspNetCore.Identity.FreeSql) |
| `IGeekFan.FreeKit`                     | [BaGet](http://124.70.130.97:5555/packages/IGeekFan.FreeKit)                     |
| `IGeekFan.FreeKit.Extras`              | [BaGet](http://124.70.130.97:5555/packages/IGeekFan.FreeKit.Extras)              |
| `IGeekFan.FreeKit.Modularity`          | [BaGet](http://124.70.130.97:5555/packages/IGeekFan.FreeKit.Modularity)          |
| `IGeekFan.FreeKit.Email`               | [BaGet](http://124.70.130.97:5555/packages/IGeekFan.FreeKit.Email)               |
| `IGeekFan.Localization.FreeSql`        | [BaGet](http://124.70.130.97:5555/packages/IGeekFan.Localization.FreeSql)        |
| `IGeekFan.AspNetCore.DataProtection.FreeRedis`          | [BaGet](http://124.70.130.97:5555/packages/IGeekFan.AspNetCore.DataProtection.FreeRedis)|
| `IGeekFan.AspNetCore.DataProtection.FreeSql`            | [BaGet](http://124.70.130.97:5555/packages/IGeekFan.AspNetCore.DataProtection.FreeSql)|

## IGeekFan.AspNetCore.Identity.FreeSql

- 查看[IGeekFan.AspNetCore.Identity.FreeSql](./AspNetCore.Identity.FreeSql.md)**文档**

## IGeekFan.FreeKit

- AuditEntity 审计日志实体
- Dependency 依赖注入接口
- 查看[IGeekFan.FreeKit](./Core.md)**文档**

## IGeekFan.FreeKit.Extras

- FreeSql 扩展+AOP基于特性标签的事务 UnitOfWork
- FreeSql中的复合主键仓储实现
- FreeSql+AuditEntity 审计日志实体
- Autofac+继承接口`ITransientDependency+IScopedDependency+ISingletonDependency` 即可实现依赖注入
- CaseQuery
- Security 登录人信息
- 查看[IGeekFan.FreeKit.Extras](./Extras.md)**文档**

## IGeekFan.FreeKit.Email

- 基于MailKit实现发送邮件[IGeekFan.FreeKit.Email](./Email.md)**文档**

## IGeekFan.Localization.FreeSql

- 数据库多语言本地化[IGeekFan.Localization.FreeSql](./Localization.FreeSql.md)**文档**

## IGeekFan.FreeKit.Modularity

- 单体模块化[IGeekFan.FreeKit.Modularity](./Modularity.md)**文档**
