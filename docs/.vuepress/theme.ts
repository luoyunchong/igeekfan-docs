import { hopeTheme } from "vuepress-theme-hope";
import { enNavbarConfig, zhNavbarConfig } from "./navbar";
import { zhSidebarConfig, enSidebarConfig } from "./sidebar";

const icpFooter =
    'MIT Licensed | Copyright © 2021-present luoyunchong | <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">豫ICP备2025116077号-2</a>';

export default hopeTheme({
    hostname: "https://igeekfan.cn",
    logo: '/logo.png',
    repo: 'luoyunchong/igeekfan-docs',
    docsRepo: 'https://github.com/luoyunchong/igeekfan-docs',
    docsBranch: "main",
    docsDir: 'docs',
    iconPrefix: "iconfont icon-",
    locales: {
        "/": {
            navbar: zhNavbarConfig,
            sidebar: zhSidebarConfig,
            footer: icpFooter,
            displayFooter: true,
            metaLocales: {
                lastUpdated: "上次编辑于",
                editLink: "在 GitHub 上编辑此页",
            },
        },
        "/en/": {
            navbar: enNavbarConfig,
            sidebar: enSidebarConfig,
            footer: icpFooter,
            displayFooter: true,
        },
    },

    pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime", "Word"],
    encrypt: {

    },
    shouldPrefetch: false,
    plugins: {
        git: {
            createdTime: true,
            updatedTime: true,
            contributors: true,
        },
        pwa: true,
        feed: {
            atom: true,
            json: true,
            rss: true,
        },
        mdEnhance: {
            gfm: true,
            tabs: true,
            footnote: true,
            katex: true,
            flowchart: true,
        },
    },
});
