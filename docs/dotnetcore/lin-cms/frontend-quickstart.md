# 前端快速入门

本文档将指导你如何在本地运行 LinCMS Vue 2 前端项目。

## 环境要求

- [Node.js](https://nodejs.org/) (建议使用 LTS 版本，如 16.x 或 18.x)
- [pnpm](https://pnpm.io/) (推荐的包管理器)

```bash
# 安装 pnpm (如果尚未安装)
npm install -g pnpm
```

## 获取源码

```bash
git clone https://github.com/luoyunchong/lin-cms-vue.git
cd lin-cms-vue
```

## 安装依赖

```bash
pnpm install
```

## 配置

主要的配置文件是根目录下的 `.env` 系列文件：

- `.env`: 基础配置，所有环境都会加载。
- `.env.development`: 开发环境配置。
- `.env.production`: 生产环境配置。

**关键配置项:**

- `VITE_APP_BASE_URL`: 后端 API 的基础地址。在开发环境中，通常需要配置为你的本地后端服务地址，例如 `http://localhost:5000`。
- `VITE_APP_TITLE`: 网站标题。

**示例 `.env.development`:**
```env
# 开发环境配置
NODE_ENV = 'development'

# API 基础路径 (指向你的本地后端服务)
VITE_APP_BASE_URL = 'http://localhost:5000'

# 网站标题
VITE_APP_TITLE = 'Lin CMS Vue3 Dev'
```

**注意**: 如果你的后端 API 部署在不同的域或端口，并且遇到了跨域问题，你可能需要在 `vite.config.ts` 中配置 `server.proxy` 来解决开发环境的跨域请求。

## 运行开发服务器

```bash
pnpm run serve
# 或者
pnpm run dev
```

此命令会启动一个本地开发服务器，通常监听在 `http://localhost:8080` (具体端口可在 `vite.config.ts` 中配置)。在浏览器中打开该地址即可访问前端页面。

## 项目结构 (简述)

前端代码主要位于 `src` 目录下：

- `api/`: 存放 API 请求模块。
- `assets/`: 存放静态资源，如图片、字体。
- `components/`: 存放全局或可复用的 UI 组件。
- `config/`: 存放项目配置，如网站设置、路由白名单等。
- `directive/`: 存放自定义 Vue 指令。
- `layout/`: 存放布局组件 (如基础布局、页面容器)。
- `plugins/`: 存放 Vue 插件。
- `router/`: 存放路由配置。
- `store/`: 存放 Pinia 状态管理模块。
- `styles/`: 存放全局样式和变量。
- `utils/`: 存放工具函数。
- `views/`: 存放页面级组件。
- `App.vue`: 根组件。
- `main.ts`: 应用入口文件。

更详细的结构说明请参考 [项目结构](./project-structure.md)。

## 构建项目

```bash
pnpm run build
```

此命令会将项目打包到 `dist` 目录下，生成用于生产环境部署的静态文件。

## 下一步

- 查看 [项目结构](./project-structure.md) 了解代码组织方式。
- 学习如何 [部署项目](./deployment.md)。
- 查看 [常见问题](./faq.md)。
