# 后端快速入门

本文档将指导你如何在本地运行 LinCMS.NET Core 的后端项目。

## 环境要求

- [.NET 9 SDK](https://dotnet.microsoft.com/download/dotnet/6.0) 或更高版本
- 关系型数据库，如 MySql 5.7+, PostgreSQL 12+, SQLServer 2012+, Sqlite3 (默认)
- Redis (可选，用于分布式缓存和消息队列)
- IDE (Visual Studio 2022 / VS Code / JetBrains Rider)

## 获取源码

```bash
git clone https://github.com/luoyunchong/lin-cms-dotnetcore.git
cd lin-cms-dotnetcore
```

## 配置

主要的配置文件位于 `src/LinCms.Web/appsettings.json` 和特定环境的 `appsettings.{Environment}.json` (如 `appsettings.Development.json`)。

### 数据库配置

默认使用 Sqlite 数据库，文件位于 `src/LinCms.Web/lin-cms.db`。

如需切换数据库，请修改 `ConnectionStrings` 节点：

**MySql:**
```json
"ConnectionStrings": {
  "MySql": "server=localhost;port=3306;database=lincms;userid=root;password=root;sslmode=none;AllowPublicKeyRetrieval=True;"
},
"DbType": "MySql" // 同时修改 DbType
```

**PostgreSQL:**
```json
"ConnectionStrings": {
  "PostgreSQL": "Host=localhost;Port=5432;Database=lincms;Username=postgres;Password=root;"
},
"DbType": "PostgreSQL" // 同时修改 DbType
```

**SQLServer:**
```json
"ConnectionStrings": {
  "SqlServer": "Data Source=.;Initial Catalog=lincms;Integrated Security=True;Encrypt=True;TrustServerCertificate=True;"
},
"DbType": "SqlServer" // 同时修改 DbType
```

**注意**: 修改 `DbType` 字段以匹配你选择的数据库类型。

### 其他配置

- **Redis**: 如果需要使用 Redis，请在 `appsettings.json` 中配置 `ConnectionStrings:Redis` 并设置 `UseRedis` 为 `true`。
- **JWT**: 可以在 `Jwt` 节点下配置 Token 的密钥 (`SecretKey`)、过期时间 (`Expires`) 等。
- **文件上传**: 在 `File` 节点下配置上传设置，如存储位置 (`StoreDir`)、单个文件大小限制 (`SingleLimit`) 等。

## 数据库迁移与初始化

项目使用 FreeSql 的 CodeFirst 模式进行数据库迁移。

1.  **设置启动项目**: 在 IDE 或命令行中，确保 `src/LinCms.Web` 是启动项目。
2.  **执行迁移**:
    ```bash
    # 进入 Web 项目目录
    cd src/LinCms.Web

    # 执行数据库迁移 (如果表结构有变更)
    dotnet run --sync-structure

    # (可选) 初始化种子数据 (如果需要示例数据)
    dotnet run --init-db
    ```
    或者直接运行 `src/LinCms.Web` 项目，启动时会自动执行迁移（如果配置了 `SyncStructure` 为 `true`）。

## 运行项目

### 使用 IDE

- **Visual Studio / Rider**: 打开 `lin-cms-dotnetcore.sln` 解决方案文件，将 `LinCms.Web` 设置为启动项目，直接按 F5 或点击运行按钮。
- **VS Code**: 打开项目根目录，确保已安装 C# 扩展。按 F5 启动调试，选择 `.NET Core Launch (web)` 配置。

### 使用命令行

```bash
# 进入 Web 项目目录
cd src/LinCms.Web

# 运行项目 (自动监听文件变化并重启)
dotnet watch run
# 或者直接运行
# dotnet run
```

项目启动后，默认监听 `http://localhost:5000` 和 `https://localhost:5001`。

你可以在浏览器中访问 `https://localhost:5001/swagger/index.html` 查看 API 文档。

## 下一步

- 查看 [项目结构](./project-structure.md) 了解代码组织方式。
- 浏览 [API 参考](./api-reference.md) (Swagger)。
- 学习如何 [部署项目](./deployment.md)。
- 查看 [常见问题](./faq.md)。
