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
    '/dotnetcore/lin-cms/': [
        {
            text: 'Getting Started',
            collapsible: true,
            children: [
                'README.md',
                'backend-quickstart.md',
                'frontend-quickstart.md',
                'deployment.md',
                'faq.md',
            ]
        },
        {
            text: 'Core Concepts',
            collapsible: true,
            children: [
                'technology-stack.md',
                'project-structure.md',
                'database-design.md',
                'authorize.md',
                'logger.md',
                'file-upload.md',
            ]
        },
        {
            text: 'Advanced Development',
            collapsible: true,
            children: [
                'development-guide.md',
                'api-reference.md',
                'lincms-scaffolding.md',
                'autofac.md',
                'aspnetcore-repository-unitofwork.md',
                'newtonsoft-json-question.md',
                'dependency-injection-scrutor.md',
                'dynamic-authorization-in-aspnetcore.md',
                'reflex-assembly-get-controller-methods-attribute.md',
                'identityserver4-jwt.md',
                'stopwords.md',
                'spa-github-login.md',
                'qq-login.md',
                'rabbitmq.md',
                'scriban-README.md'
            ]
        },
        {
            text: 'Others',
            collapsible: true,
            children: [
                'contributing.md',
                'github-actions.md',
                'change-sqlserver.md',
                'open-source-road.md',
                'pm-design-modules.md',
                'production-design.md',
            ]
        }
    ],
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
    ]
});
