**English** | [简体中文](README.md)

# .NET Developer's Guide

This repository uses Docusaurus to build its documentation site, with an interface based on the `docs-site` in FreeKitModules. Documentation lives in `docs/`; the site theme and homepage live in `src/`.

## Run locally

Node.js 20+ and pnpm 11.18.0 are required.

```bash
pnpm install
pnpm dev
```

Build the static site:

```bash
pnpm build
```

The output is written to `build/`. Use `BASE=/igeekfan-docs/ pnpm build` for a GitHub Pages subpath deployment; the default `BASE=/` is used for `igeekfan.cn`.

## Documentation and configuration

- `docs/`: Markdown documentation and accompanying images
- `sidebars.ts`: section sidebars
- `docusaurus.config.ts`: navigation, search, theme, and footer
- `src/pages/index.tsx`: homepage
- `src/css/custom.css`: documentation theme styles
- `static/`: public static assets

Documentation source: [GitHub](https://github.com/luoyunchong/igeekfan-docs) · [Gitee](https://gitee.com/igeekfan/igeekfan-docs).
