# 项目结构

本文档介绍 LinCMS.NET Core (后端) 和 LinCMS Vue 2 (前端) 的项目结构。

## 后端 (lin-cms-dotnetcore)

后端项目遵循领域驱动设计 (DDD) 的分层思想，但进行了简化以适应 Web API 开发。

```
lin-cms-dotnetcore/
├── src/
│   ├── LinCms.Application/             # 应用服务层 (Application Layer)
│   │   ├── v1/                         # API 版本 v1
│   │   │   ├── Books/                  # 示例：图书管理服务实现
│   │   │   ├── Files/                  # 文件服务实现
│   │   │   ├── Logs/                   # 日志服务实现
│   │   │   └── ...                     # 其他业务模块
│   │   ├── AutoMapper/                 # AutoMapper 配置
│   │   ├── Base/                       # 应用层基类 (如 CrudAppService)
│   │   └── LinCmsAppModule.cs          # 应用层模块定义 (Autofac)
│   │
│   ├── LinCms.Application.Contracts/   # 应用服务接口与DTO层 (Contracts Layer)
│   │   ├── v1/                         # API 版本 v1
│   │   │   ├── Books/                  # 示例：图书管理 DTO 和服务接口
│   │   │   └── ...                     # 其他业务模块接口和 DTO
│   │   ├── Base/                       # 基础 DTO 和接口 (分页, 结果等)
│   │   └── LinCmsApplicationContractsModule.cs # 契约层模块定义
│   │
│   ├── LinCms.Core/                    # 核心层 (Domain Layer)
│   │   ├── Aop/                        # AOP 相关 (如权限、日志切面)
│   │   ├── Common/                     # 通用常量、枚举等
│   │   ├── Entities/                   # 数据库实体定义
│   │   │   ├── Base/                   # 基础实体 (审计字段等)
│   │   │   └── ...                     # 各模块实体
│   │   ├── Exceptions/                 # 自定义异常
│   │   ├── Extensions/                 # 扩展方法
│   │   ├── IRenderers/                 # (特定功能，如模板渲染)
│   │   ├── IRepositories/              # 仓储接口定义
│   │   ├── Security/                   # 安全相关 (如 CurrentUser)
│   │   └── LinCmsCoreModule.cs         # 核心层模块定义
│   │
│   ├── LinCms.Infrastructure/          # 基础设施层 (Infrastructure Layer)
│   │   ├── Data/                       # FreeSql 配置、种子数据等
│   │   ├── Middleware/                 # 中间件
│   │   ├── Repositories/               # 仓储实现 (基于 FreeSql)
│   │   │   └── Base/                   # 基础仓储实现
│   │   └── LinCmsInfrastructureModule.cs # 基础设施层模块定义
│   │
│   ├── LinCms.Web/                     # Web API 层 (Presentation Layer)
│   │   ├── Controllers/                # API 控制器
│   │   │   ├── cms/                    # CMS 管理相关 API
│   │   │   └── v1/                     # 业务 API (版本 v1)
│   │   ├── Filter/                     # Web API 过滤器
│   │   ├── Middleware/                 # Web 中间件
│   │   ├── Models/                     # Web 层特定模型
│   │   ├── Services/                   # Web 层特定服务 (如启动配置)
│   │   ├── appsettings.json            # 配置文件
│   │   ├── lin-cms.db                  # Sqlite 数据库文件 (默认)
│   │   ├── Program.cs                  # 应用启动入口 (.NET 9+)
│   │   └── LinCmsWebModule.cs          # Web 层模块定义
│   │
│   └── LinCms.WorkerService/           # (可选) 后台任务服务
│
├── test/                               # 测试项目
│   └── LinCms.Test/                    # 单元测试/集成测试
│
└── lin-cms-dotnetcore.sln              # 解决方案文件
```

**分层职责:**

- **Core**: 定义核心业务规则、实体、仓储接口和领域事件。不依赖其他层。
- **Application.Contracts**: 定义应用服务的接口 (Interface) 和数据传输对象 (DTO)。用于层间解耦。
- **Application**: 实现应用服务接口，编排领域逻辑，处理 DTO 与实体的转换。依赖 Core 和 Contracts。
- **Infrastructure**: 提供具体的技术实现，如数据库访问 (仓储实现)、缓存、消息队列、第三方服务集成等。依赖 Core。
- **Web**: 处理 HTTP 请求，调用应用服务，处理用户认证授权，配置 API 路由和过滤器。依赖 Application, Application.Contracts, Infrastructure。

## 前端 (lin-cms-vue)

前端项目使用 Vite 构建，基于 Vue 2 和 Element Plus。

```
lin-cms-vue/
├── public/
│   └── favicon.ico             # 网站图标
├── src/
│   ├── api/                    # API 请求模块 (按业务划分)
│   ├── assets/                 # 静态资源 (图片, 字体等)
│   ├── components/             # 全局/可复用 UI 组件
│   │   ├── Lin/                # Lin CMS 风格的基础组件
│   │   └── ...
│   ├── config/                 # 项目配置 (网站设置, 路由白名单等)
│   ├── directive/              # 自定义 Vue 指令
│   ├── hooks/                  # Composition API Hooks
│   ├── layout/                 # 布局组件 (基础布局, 页面容器)
│   ├── plugins/                # Vue 插件 (Element Plus, Pinia 等)
│   ├── router/                 # Vue Router 配置 (路由表, 导航守卫)
│   ├── store/                  # Pinia 状态管理 (按模块划分)
│   ├── styles/                 # 全局样式, SCSS 变量, Mixins
│   ├── utils/                  # 工具函数 (请求封装, 日期处理等)
│   ├── views/                  # 页面级组件 (按路由/功能划分)
│   │   ├── about/
│   │   ├── admin/
│   │   ├── book/
│   │   └── ...
│   ├── App.vue                 # 根组件
│   ├── main.ts                 # 应用入口文件 (初始化 Vue, Router, Pinia)
│   └── vite-env.d.ts           # Vite 环境变量类型定义
├── tests/                    # 测试目录 (单元测试, E2E 测试)
├── .env                      # 基础环境变量
├── .env.development          # 开发环境变量
├── .env.production           # 生产环境变量
├── .eslintrc.js              # ESLint 配置
├── .gitignore                # Git 忽略配置
├── .prettierrc.js            # Prettier 配置
├── index.html                # HTML 入口文件
├── package.json              # 项目依赖和脚本
├── pnpm-lock.yaml            # pnpm 锁定文件
├── tsconfig.json             # TypeScript 配置
└── vite.config.ts            # Vite 配置文件 (构建, 代理, 插件)
```

**主要目录职责:**

- **`src/api`**: 封装对后端接口的调用。
- **`src/components`**: 存放可以在多个页面复用的 UI 组件。
- **`src/layout`**: 定义应用的基本页面结构，如包含导航栏、侧边栏的布局。
- **`src/router`**: 配置页面路由和访问权限控制。
- **`src/store`**: 使用 Pinia 管理全局或模块化的状态。
- **`src/views`**: 存放与特定路由对应的页面组件。
- **`src/styles`**: 定义全局 CSS 样式、变量和主题。
- **`src/utils`**: 存放通用的辅助函数。
- **`vite.config.ts`**: 配置开发服务器、构建选项、代理等。
- **`.env*`**: 配置不同环境下的环境变量，如 API 地址。
