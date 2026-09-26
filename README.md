# .NET 开发者指北

本仓库使用 Docusaurus 构建文档站，界面参考 FreeKitModules 的 `docs-site`。文档内容保存在 `docs/`，站点主题与首页保存在 `src/`。

## 本地运行

需要 Node.js 20+ 和 pnpm 11.18.0。

```bash
pnpm install
pnpm dev
```

构建静态站点：

```bash
pnpm build
```

输出目录为 `build/`。用 `BASE=/igeekfan-docs/ pnpm build` 可以生成 GitHub Pages 子路径版本；默认 `BASE=/` 用于 `igeekfan.cn`。

## 文档与配置

- `docs/`：Markdown 文档和随文图片
- `sidebars.ts`：栏目侧栏
- `docusaurus.config.ts`：导航、搜索、主题与页脚
- `src/pages/index.tsx`：首页
- `src/css/custom.css`：文档主题样式
- `static/`：公开静态资源

文档源码：[GitHub](https://github.com/luoyunchong/igeekfan-docs) · [Gitee](https://gitee.com/igeekfan/igeekfan-docs)。
