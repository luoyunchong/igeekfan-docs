//侧边栏
module.exports = {
    '/dotnetcore/examples/': [
        {
            title: '.NET Core示例',
            collapsable: true,
            children: [
                'console-hello-world',
                'console-news-types',
                'freesql-in-asp.net-core-webapi-how-to-use',
                'freesql-sample-blog-restful-use-automapper',
                'identityserver4',
                'qiniu-object-storage',
                'imcore-chat'
            ]
        }
    ],
    '/dotnetcore/lin-cms/': [{
        title: 'lin-cms-dotnetcore起步',
        collapsable: true,
        children: [
            'dotnetcore-start.md',
            'vue-start.md',
            'open-source-road.md',
            'pm-design-modules.md',
            'production-design.md',
            'devops-ci-cd.md',
        ]
    }, {
        title: '开发者文档',
        collapsable: true,
        children: [
            'dev-start',
            'newtonsoft-json-question',
            'dependency-injection',
            'dynamic-authorization-in-asp-net-core',
            'reflex-assembly-get-controller-methods-attribute',
            'identityserver4-jwt',
            'stopwords',
            'spa-github-login'
        ]
    }],
    '/colorui/': [
        {
            title: 'ColorUI文档',
            collapsable: true,
            children: [
                'docs/button',
                'docs/text',
            ]
        }
    ],
}
