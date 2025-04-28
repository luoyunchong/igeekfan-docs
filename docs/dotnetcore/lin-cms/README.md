﻿
# LinCMS.NET 

<div align="center">
  <img width="200" src="https://consumerminiaclprd01.blob.core.chinacloudapi.cn/miniappbackground/sfgmember/lin/left-logo.png">
</div>

<div align="center">😃 基于ASP.NET Core的简洁实用的CMS开发框架</div>

## 项目介绍

Lin CMS .NET是[Lin-CMS](https://github.com/TaleLin)的.NET实现，采用ASP.NET Core 9.0构建，基于Vue.js的前后端分离CMS平台。项目实现了以下功能：

- 核心权限管理系统
- 基础字典项管理
- 随笔专栏系统
- 评论点赞功能
- 消息通知中心
- 标签管理系统
- 仿掘金社区模块

> LinCMS源于林间有风团队的项目实践，是一套内容管理系统解决方案。该项目是完全开源的.NET Core社区实现版本。

## 线上演示

- API文档：[Swagger](https://api.igeekfan.cn/swagger/index.html)
- 用户端：[VVLog](https://igeekfan.cn/vvlog)
  - 普通用户账号：710277267@qq.com
  - 密码：123qwe
- 管理端：[CMS后台](https://igeekfan.cn/cms/)
  - 管理员账号：admin
  - 密码：123qwe

## 开源地址

- 后端源码：
  - [GitHub](https://github.com/luoyunchong/lin-cms-dotnetcore)
  - [Gitee](https://gitee.com/igeekfan/lin-cms-dotnetcore)
- 前端源码：
  - 管理后台：[lin-cms-vue](https://github.com/luoyunchong/lin-cms-vue)
  - 用户前台：[lin-cms-vvlog](https://github.com/luoyunchong/lin-cms-vvlog)

## 项目文档

- **快速开始**
  - [后端快速入门](./backend-quickstart.md)
  - [前端快速入门](./frontend-quickstart.md)
- **核心概念**
  - [技术栈](./technology-stack.md)
  - [项目结构](./project-structure.md)
  - [数据库设计](./database-design.md)
- **开发**
  - [开发指南示例](./development-guide.md)
  - [API 参考](./api-reference.md) (Swagger)
- **部署**
  - [部署指南](./deployment.md)
  - [GitHub Actions CI/CD](./github-actions.md)
- **其他**
  - [常见问题](./faq.md)
  - [贡献指南](./contributing.md)
  - [权限认证](./authorize.md)
  - [文件上传](./file-upload.md)

## 核心特性

### 前后端分离架构

LinCMS采用前后端分离的开发模式：

- 后端：ASP.NET Core API，提供数据和业务逻辑
- 前端：基于Vue的单页面应用，提供交互界面

相比传统的服务端渲染方式（如Razor），前后端分离模式具有以下优势：

- 前端开发者和后端开发者可以专注各自的领域
- 更流畅的用户体验和更灵活的界面交互
- 更好的可扩展性和可维护性

### 完整的权限解决方案

系统内置了完整的RBAC权限管理功能：

- 基于角色的用户分组
- 细粒度的API权限控制
- 动态权限分配
- 操作日志记录
- 支持第三方OAuth登录（GitHub、Gitee等）

### 丰富的扩展功能

- 文件上传系统：支持本地存储和七牛云
- 内容管理系统：标签、分类、文章管理
- 互动系统：评论、点赞、关注
- 消息通知：系统消息、互动提醒

## 技术栈

### 后端技术

- ASP.NET Core 9.0：Web框架
- FreeSql：ORM框架，支持多种数据库
- IdentityServer4：认证授权框架
- AutoMapper：对象映射
- Serilog：日志框架
- CAP：分布式事务和事件总线

### 前端技术

- Vue.js：渐进式JavaScript框架
- Element Plus：UI组件库
- Vuex：状态管理
- Vue Router：前端路由
- Axios：HTTP请求库

## 快速开始

### 环境要求

- .NET SDK 9.0+
- MySQL 5.7+ / SqlServer / PostgreSQL / Oracle / SQLite
- Node.js 16+（前端开发）

### 后端启动

```bash
# 克隆项目
git clone https://github.com/luoyunchong/lin-cms-dotnetcore.git

# 进入项目目录
cd lin-cms-dotnetcore/src/LinCms.Web

# 修改数据库连接
# 编辑 appsettings.json 中的ConnectionStrings配置

# 运行项目
dotnet run
```

详细安装指南请参考[后端准备指南](dotnetcore-start.md)

### 前端启动

```bash
# 克隆项目
git clone https://github.com/luoyunchong/lin-cms-vue.git

# 安装依赖
pnpm install

# 启动开发服务器
pnpm run serve
```

详细安装指南请参考[前端准备指南](vue-start.md)

## 目录结构

```
├─ src
│  ├─ LinCms.Web         // API层
│  ├─ LinCms.Application // 应用服务层
│  ├─ LinCms.Application.Contracts // 应用服务接口与DTO
│  ├─ LinCms.Infrastructure // 基础设施层
│  ├─ LinCms.Core        // 核心领域层
│  └─ LinCms.Plugins     // 插件扩展
├─ test
│  └─ LinCms.Test        // 单元测试
└─ LinCms.Scaffolding    // 代码生成器
```

## 社区贡献

欢迎加入LinCMS社区，您可以通过以下方式参与项目：

- 提交Bug或功能请求到[GitHub Issues](https://github.com/luoyunchong/lin-cms-dotnetcore/issues)

## 许可证

本项目采用[MIT许可证](https://github.com/luoyunchong/lin-cms-dotnetcore/blob/master/LICENSE)
