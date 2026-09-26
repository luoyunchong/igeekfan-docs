import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const baseUrl = process.env.BASE || '/';

const config: Config = {
  title: '.NET 开发者指北',
  tagline: '.NET、FreeKit、Lin CMS 与开发实践文档',
  favicon: 'logo.png',
  url: 'https://igeekfan.cn',
  baseUrl,
  onBrokenLinks: 'throw',
  markdown: {
    format: 'md',
    hooks: {
      onBrokenMarkdownLinks: 'throw',
      onBrokenMarkdownImages: 'throw',
    },
  },
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/luoyunchong/igeekfan-docs/tree/main/',
        },
        blog: false,
        theme: {customCss: './src/css/custom.css'},
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
        docsRouteBasePath: '/docs',
        language: ['zh', 'en'],
        highlightSearchTermsOnTargetPage: true,
        searchResultLimits: 8,
        explicitSearchResultPath: true,
      },
    ],
  ],
  themeConfig: {
    colorMode: {defaultMode: 'light', disableSwitch: false, respectPrefersColorScheme: false},
    navbar: {
      title: '.NET 开发者指北',
      logo: {alt: 'IGeekFan', src: 'logo.png'},
      items: [
        {type: 'docSidebar', sidebarId: 'docsSidebar', position: 'left', label: '文档'},
        {to: '/docs/dotnetcore/lin-cms/', label: 'Lin CMS', position: 'left'},
        {to: '/docs/dotnetcore/examples/', label: '.NET 指北', position: 'left'},
        {to: '/docs/dotnetcore/freekit/', label: 'FreeKit', position: 'left'},
        {to: '/docs/dotnetcore/docker/', label: 'Docker', position: 'left'},
        {to: '/docs/blogs/', label: '博客', position: 'left'},
        {to: '/docs/navigation/', label: '导航', position: 'right'},
        {to: '/docs/about/', label: '关于', position: 'right'},
        {href: 'https://github.com/luoyunchong/igeekfan-docs', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'light',
      links: [
        {title: '文档', items: [
          {label: 'FreeKit', to: '/docs/dotnetcore/freekit/'},
          {label: '.NET 示例', to: '/docs/dotnetcore/examples/'},
          {label: 'Docker', to: '/docs/dotnetcore/docker/'},
        ]},
        {title: '更多', items: [
          {label: '博客', to: '/docs/blogs/'},
          {label: '导航', to: '/docs/navigation/'},
          {label: '关于', to: '/docs/about/'},
        ]},
        {title: '项目', items: [
          {label: 'GitHub 仓库', href: 'https://github.com/luoyunchong/igeekfan-docs'},
          {label: '提交 Issue', href: 'https://github.com/luoyunchong/igeekfan-docs/issues'},
        ]},
      ],
      copyright: `MIT Licensed | Copyright © ${new Date().getFullYear()} luoyunchong | <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">豫ICP备2025116077号-2</a>`,
    },
    prism: {theme: prismThemes.github, darkTheme: prismThemes.dracula},
  } satisfies Preset.ThemeConfig,
};

export default config;
