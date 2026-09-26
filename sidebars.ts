import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'README',
    {
      type: 'category', label: 'FreeKit', link: {type: 'doc', id: 'dotnetcore/freekit/README'},
      items: [
        'dotnetcore/freekit/Core', 'dotnetcore/freekit/Extras',
        'dotnetcore/freekit/AspNetCore.Identity.FreeSql', 'dotnetcore/freekit/Email',
        'dotnetcore/freekit/Modularity', 'dotnetcore/freekit/Localization.FreeSql',
      ],
    },
    {
      type: 'category', label: 'Lin CMS', link: {type: 'doc', id: 'dotnetcore/lin-cms/README'},
      items: [
        {type: 'category', label: '入门指南', items: [
          'dotnetcore/lin-cms/backend-quickstart', 'dotnetcore/lin-cms/frontend-quickstart',
          'dotnetcore/lin-cms/deployment', 'dotnetcore/lin-cms/faq',
        ]},
        {type: 'category', label: '核心概念', items: [
          'dotnetcore/lin-cms/technology-stack', 'dotnetcore/lin-cms/project-structure',
          'dotnetcore/lin-cms/database-design', 'dotnetcore/lin-cms/authorize',
          'dotnetcore/lin-cms/logger', 'dotnetcore/lin-cms/file-upload',
        ]},
        {type: 'category', label: '开发进阶', items: [
          'dotnetcore/lin-cms/development-guide', 'dotnetcore/lin-cms/api-reference',
          'dotnetcore/lin-cms/lincms-scaffolding', 'dotnetcore/lin-cms/autofac',
          'dotnetcore/lin-cms/aspnetcore-repository-unitofwork',
          'dotnetcore/lin-cms/newtonsoft-json-question', 'dotnetcore/lin-cms/dependency-injection-scrutor',
          'dotnetcore/lin-cms/dynamic-authorization-in-aspnetcore', 'dotnetcore/lin-cms/Reflex-Assembly',
          'dotnetcore/lin-cms/identityserver4-jwt', 'dotnetcore/lin-cms/stopwords',
          'dotnetcore/lin-cms/spa-github-login', 'dotnetcore/lin-cms/qq-login',
          'dotnetcore/lin-cms/rabbitmq', 'dotnetcore/lin-cms/scriban-README',
        ]},
        {type: 'category', label: '其他', items: [
          'dotnetcore/lin-cms/error-code', 'dotnetcore/lin-cms/contributing',
          'dotnetcore/lin-cms/github-actions', 'dotnetcore/lin-cms/change-sqlserver',
          'dotnetcore/lin-cms/open-source-road', 'dotnetcore/lin-cms/pm-design-modules',
          'dotnetcore/lin-cms/production-design',
        ]},
      ],
    },
    {
      type: 'category', label: '.NET Core 示例', link: {type: 'doc', id: 'dotnetcore/examples/README'},
      items: [
        'dotnetcore/examples/freesql-in-aspnetcore-webapi-how-to-use',
        'dotnetcore/examples/freesql-sample-blog-restful-use-automapper',
        'dotnetcore/examples/identityserver4', 'dotnetcore/examples/qiniu-object-storages',
        'dotnetcore/examples/imcore-chat', 'dotnetcore/examples/nacos-aspnetcore',
        'dotnetcore/examples/serilog-tutorial', 'dotnetcore/examples/NET6Startup',
        'dotnetcore/examples/ASPNETCore6-Add-Startup-Clean',
        'dotnetcore/examples/ASPNETCore-Supervisord-Ubuntu',
        'dotnetcore/examples/ASPNETCore-Systemd-Ubuntu',
      ],
    },
    {
      type: 'category', label: 'Docker', link: {type: 'doc', id: 'dotnetcore/docker/README'},
      items: [
        'dotnetcore/docker/Docker-Command', 'dotnetcore/docker/DockerHub',
        'dotnetcore/docker/Docker-Baget', 'dotnetcore/docker/Docker-Jenkins',
        'dotnetcore/docker/Docker-Elasticsearch', 'dotnetcore/docker/Docker-MySql',
        'dotnetcore/docker/Docker-Nacos', 'dotnetcore/docker/Docker-Portainer',
        'dotnetcore/docker/Docker-Redis', 'dotnetcore/docker/Docker-Nginx',
        'dotnetcore/docker/Docker-RabbitMQ', 'dotnetcore/docker/Docker-CMS',
        'dotnetcore/docker/Docker-ASPNETCore',
      ],
    },
    {
      type: 'category', label: '技术分享', link: {type: 'doc', id: 'blogs/README'},
      items: [
        'blogs/git-emoji', 'blogs/fluent-emoji-ms', 'blogs/net-sqlite-encryption',
        'blogs/net-encoded-1', 'blogs/delegate', 'blogs/idlebus-freesql',
      ],
    },
    {type: 'category', label: 'AI', items: ['ai/HuggingFace']},
    'navigation/README',
    'about/README',
  ],
};

export default sidebars;
