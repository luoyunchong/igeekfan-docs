import { sidebar } from "vuepress-theme-hope";

export const enSidebarConfig = sidebar({
    '/dotnetcore/examples/': [
        {
            text: '.NET Core示例',
            collapsible: true,
            children: [
                'console-hello-world',
                'console-news-types',
                'freesql-in-aspnetcore-webapi-how-to-use',
                'freesql-sample-blog-restful-use-automapper',
                'identityserver4',
                'qiniu-object-storage',
                'imcore-chat',
                'nacos-aspnetcore',
                'serilog-tutorial'
            ]
        }
    ],
    '/dotnetcore/lin-cms/': [{
        text: '起步',
        collapsible: true,
        children: [
            'dotnetcore-start.md',
            'cms-start.md',
            'technology.md',
            'vue-start.md',
            'open-source-road.md',
            'pm-design-modules.md',
            'production-design.md',
            'github-actions.md',
            'change-sqlserver.md',
        ]
    }, {
        text: '.NET Core',
        collapsible: true,
        children: [
            'file-upload.md',
            'logger.md',
            'table.md',
            'authorize.md',
            'lincms-scaffolding.md',
            'autofac.md',
            'aspnetcore-repository-unitofwork.md'
        ]
    }, {
        text: '开发者文档',
        collapsible: true,
        children: [
            'dev-start',
            'newtonsoft-json-question',
            'dependency-injection-scrutor',
            'dynamic-authorization-in-aspnetcore',
            'reflex-assembly-get-controller-methods-attribute',
            'identityserver4-jwt',
            'stopwords',
            'spa-github-login',
            'qq-login',
            'rabbitmq',
            'scriban-README.md'
        ]
    }],
    '/about/': [
        {
            text: '关于',
            prefix: "/about/",
            link: "/about/",
            collapsible: true
        }
    ],
    '/ai/': [
        {
            text: 'HuggingFace',
            collapsible: true,
            children: [
                'HuggingFace'
            ]
        }
    ],
    '/blogs/': [
        {
            text: '技术分享',
            collapsible: true,
            children: [
                'git-emoji',
                'net-sqlite-encryption',
                'net-encoded-1',
            ]
        }
    ],
    '/colorui/': [
        {
            text: 'ColorUI文档',
            collapsible: true,
            children: [
                'docs/button',
                'docs/text',
            ]
        }
    ],
});
