import { navbar } from "vuepress-theme-hope";

export const zhNavbarConfig = navbar([
    { text: 'CMS', link: '/dotnetcore/lin-cms/' },
    { text: '.NET指南', link: '/dotnetcore/examples/' },
    { text: 'FreeKit', link: '/dotnetcore/freekit/' },
    { text: 'Docker', link: '/dotnetcore/docker/' },
    { text: '关于', link: '/about/' },
    { text: '博客', link: '/blogs/' },
    {
        text: 'API',
        icon: "api",
        children: [
            {
                text: '学习与交流',
                children: [
                    {
                        text: '浏览API',
                        link: 'https://luoyunchong.github.io/FreeKit/api/index.html'
                    },
                    {
                        text: '浏览API（国内镜像）',
                        link: 'https://igeekfan.gitee.io/freekit/api/index.html'
                    },
                    {
                        text: '提Issues',
                        link: 'https://github.com/luoyunchong/FreeKit/issues/new'
                    },
                    {
                        text: 'NuGet',
                        link: 'https://www.nuget.org/packages?q=igeekfan.freekit'
                    }
                ]

            }
        ]
    },
]);
