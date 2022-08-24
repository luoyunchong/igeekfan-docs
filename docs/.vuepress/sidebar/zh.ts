import { sidebar } from "vuepress-theme-hope";

export const zhSidebarConfig = sidebar({
    '/dotnetcore/examples/': [
        {
            text: '.NET Core示例',
            collapsable: true,
            children: [
                'README.md',
                'console-hello-world',
                'console-news-types',
                'freesql-in-aspnetcore-webapi-how-to-use',
                'freesql-sample-blog-restful-use-automapper',
                'identityserver4',
                'qiniu-object-storages',
                'imcore-chat',
                'nacos-aspnetcore',
                'serilog-tutorial',
                'NET6Startup',
                'ASPNETCore6-Add-Startup-Clean'
            ]
        }
    ],
    '/dotnetcore/lin-cms/': [{
        text: '起步',
        collapsable: true,
        children: [
            'README.md',
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
        collapsable: true,
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
        collapsable: true,
        children: [
            'dev-start',
            'newtonsoft-json-question',
            'dependency-injection-scrutor',
            'dynamic-authorization-in-aspnetcore',
            'Reflex-Assembly',
            'identityserver4-jwt',
            'stopwords',
            'spa-github-login',
            'qq-login',
            'rabbitmq',
            'scriban-README.md'
        ]
    }],
    '/dotnetcore/': [
        {
            text: 'FreeKit',
            collapsable: true,
            link: 'freekit/README.md',
            children: [
                'freekit/README.md',
                'freekit/Core.md',
                'freekit/Extras.md',
                'freekit/AspNetCore.Identity.FreeSql.md',
                'freekit/Email.md',
                'freekit/Modularity.md',
                'freekit/Localization.FreeSql.md',
            ]
        }, {
            text: 'Docker',
            collapsable: true,
            link: 'docker/README.md',
            children: [
                'docker/README.md',
                'docker/Docker-Command.md',
                'docker/Docker-Baget.md',
                'docker/Docker-Jenkins.md',
                'docker/Docker-MySql.md',
                'docker/Docker-Nacos.md',
                'docker/Docker-Portainer.md',
                'docker/Docker-Redis.md',
                'docker/Docker-CMS.md',
            ]
        }
    ],
    '/about/': [
        {
            text: '关于',
            prefix: "/about/",
            link: "/about/",
            collapsable: true
        }
    ],
    '/blogs/': [
        {
            text: '技术分享',
            collapsable: true,
            children: [
                'README.md',
                'git-emoji',
                'net-sqlite-encryption',
                'net-encoded-1',
                'delegate',
                'idlebus-freesql'
            ]
        }
    ],
    '/colorui/': [
        {
            text: 'ColorUI文档',
            collapsable: true,
            children: [
                'docs/button',
                'docs/text',
            ]
        }
    ],
});
