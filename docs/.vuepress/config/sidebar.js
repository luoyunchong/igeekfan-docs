//侧边栏
module.exports = {
    '/dotnetcore/examples/': [
        {
            title: 'Examples',
            collapsable: true,
            children: [
                'Console-Hello-World',
                'Console-News-Types',
                'FreeSql-in-asp.net-core-webapi-how-to-use',
                'FreeSql-sample-blog-RESTful-use-automapper',
                'IdentityServer4',
                'Qiniu-Object-Storage',
                'ImCore-Chat'
            ]
        }
    ],
    '/dotnetcore/lin-cms/': [{
        title: 'lin-cms-dotnetcore起步',
        collapsable: true,
        children: [
            'dotnetcore-start.md',
            'vue-start.md',
            'Open-source-road.md',
            'Production-Design.md',
            'pm-design-modules.md',
        ]
    }, {
        title: '开发者文档',
        collapsable: true,
        children: [
            'dev-start',
            'Newtonsoft.Json-question',
            'dependency-injection',
            'dynamic-authorization-in-asp-net-core',
            'Reflex-Assembly-Get-Controller-Methods-Attribute',
            'IdentityServer4-JWT',
            'ToolGood.Words',
            'StopWords',
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
