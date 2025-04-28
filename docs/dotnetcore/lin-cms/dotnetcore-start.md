# 后端准备

## 开发环境要求

开发LinCMS后端需要准备以下环境：

- [.NET SDK 9.0](https://dotnet.microsoft.com/zh-cn/download/dotnet/9.0) 或更高版本
- 开发IDE（二选一）：
  - [Visual Studio 2022](https://visualstudio.microsoft.com/zh-hans/vs/) 
  - [JetBrains Rider](https://www.jetbrains.com/rider/)
- 数据库：MySQL 5.7+ 或其他支持的数据库（SqlServer/PostgreSQL/Oracle/SQLite）
- Redis：[Redis for Windows](https://github.com/tporadowski/redis/releases) - 可选，用于分布式缓存
- 消息队列：[RabbitMQ](rabbitmq.md) - 可选，用于事件总线

## 获取源码

```bash
# 克隆项目仓库
git clone https://github.com/luoyunchong/lin-cms-dotnetcore.git

# 进入项目目录
cd lin-cms-dotnetcore
```

## 数据库配置

配置文件位置：`src/LinCms.Web/appsettings.json`

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
}
```

通过修改`DefaultDB`的值可以切换数据库类型：
- `0`: MySQL
- `1`: SqlServer
- `2`: PostgreSQL
- `3`: Oracle
- `4`: SQLite

> **注意**：请根据实际环境修改连接字符串。如果需要存储emoji表情，请确保MySQL使用`utf8mb4`字符集。

## 数据库迁移

项目使用[FreeSql](https://github.com/dotnetcore/FreeSql)进行数据访问，会根据配置自动创建数据库、迁移表结构并初始化种子数据。

默认会创建以下账号：
- 管理员用户：`admin`
- 密码：`123qwe`

## 运行项目

### 使用Visual Studio

1. 双击`LinCms.sln`，使用Visual Studio打开项目
2. 右键解决方案，点击"生成解决方案"
3. 按`F5`运行项目，或使用"调试 > 开始调试"

系统将自动打开浏览器，访问Swagger接口文档：`https://localhost:5001/swagger/index.html`

### 使用命令行

```bash
# 进入Web项目目录
cd src/LinCms.Web

# 运行项目
dotnet run

# 使用watch模式(修改代码自动重启)
dotnet watch run
```

## 部署指南

详细的部署文档请参考：

- [部署至Linux(Ubuntu)](https://blog.igeekfan.cn/2022/06/09/dotnetcore/ASP.NET-Core-Deploy-To-Ubuntu)
- [部署至Docker](https://blog.igeekfan.cn/2022/06/09/dotnetcore/ASP.NET-Core-Deploy-To-Docker-Ubuntu/)

## 常见问题

### 数据库连接失败

- 检查数据库服务是否启动
- 验证连接字符串中的用户名和密码是否正确
- 确认数据库名称是否存在，如不存在将自动创建

### 项目无法启动

- 确保已安装正确版本的.NET SDK
- 使用`dotnet --info`查看当前安装的SDK版本
- 查看启动日志，定位具体错误