import { hopeTheme } from "vuepress-theme-hope";
import { enNavbarConfig, zhNavbarConfig } from "./navbar";
import { zhSidebarConfig, enSidebarConfig } from "./sidebar";

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
            footer: "MIT Licensed | Copyright © 2021-present luoyunchong",
            copyright: '<a href="https://beian.miit.gov.cn/" data-v-c3cf170c="">苏ICP备16046457号-1</a>',
            displayFooter: true,
            metaLocales: {
                lastUpdated: "上次编辑于",
                editLink: "在 GitHub 上编辑此页",
            },
        },
        "/en/": {
            navbar: enNavbarConfig,
            sidebar: enSidebarConfig,
            footer: "MIT Licensed | Copyright © 2021-present luoyunchong",
            copyright: '<a href="https://beian.miit.gov.cn/" data-v-c3cf170c="">苏ICP备16046457号-1</a>',
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
            enableAll: true,
            presentation: {
                plugins: ["highlight", "math", "search", "notes", "zoom"],
            },
        },
    },
});
