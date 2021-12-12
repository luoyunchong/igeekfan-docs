const sidebar = require('./config/sidebar')
const nav = require('./config/nav')
const path = require('path')

module.exports = {
    title: 'IGeekFan的文档',
    description: '小楼昨夜又东风',
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
    ],
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    base: '/vovo-docs/',//vovo-docs/
    theme: 'reco',
    themeConfig: {
        huawei: true,
        lastUpdated: '最后更新时间',
        search: true,
        searchMaxSuggestions: 10,
        activeHeaderLinks: true,
        displayAllHeaders: false,
        startYear: '2019',
        author: 'IGeekFan',
        record: '苏ICP备16046457号-3',
        recordLink: 'http://www.beian.miit.gov.cn/',
        // 文档仓库
        docsRepo: 'https://github.com/luoyunchong/vovo-docs',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '在 GitHub 上编辑此页',
        sidebarDepth: 2,
        nav: nav,
        sidebar: sidebar,
        // valine 设置
        // valineConfig: {
        //     appId: '',
        //     appKey: '',
        //     placeholder: '填写邮箱可以收到回复提醒哦！',
        //     notify: true,
        //     recordIP: true
        // },
    },
    plugins: [
        [
            '@vuepress/pwa',
            {
                serviceWorker: true,
                updatePopup: {
                    message: "发现新内容可用",
                    buttonText: "刷新"
                }
            }
        ],
        // [
        //     '@vuepress/google-analytics',
        //     {
        //         ga: 'UA-149716079-1'
        //     }
        // ],
        // [
        //     '@vuepress/plugin-register-components',
        //     {
        //         components: [
        //             {
        //                 name: 'reco-home-page-one',
        //                 path: path.resolve(__dirname, './components/HomePageOne.vue')
        //             }
        //         ],
        //         componentsDir: path.resolve(__dirname, './demo')
        //     }
        // ],
        '@vuepress-reco/extract-code',
        'flowchart',
        ['sitemap', {
            hostname: 'https://igeekfan.cn'
        }],
        // require('./plugins/notification/index')
    ]
};