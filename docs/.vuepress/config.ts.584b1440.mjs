// docs/.vuepress/config.ts
import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";

// docs/.vuepress/theme.ts
import { hopeTheme } from "vuepress-theme-hope";

// docs/.vuepress/navbar/en.ts
import { navbar } from "vuepress-theme-hope";
var enNavbarConfig = navbar([
  { text: "\u5173\u4E8E", link: "/about/" }
]);

// docs/.vuepress/navbar/zh.ts
import { navbar as navbar2 } from "vuepress-theme-hope";
var zhNavbarConfig = navbar2([
  { text: "CMS", link: "/dotnetcore/lin-cms/" },
  { text: ".NET\u6307\u5317", link: "/dotnetcore/examples/" },
  { text: "FreeKit", link: "/dotnetcore/freekit/" },
  { text: "Docker", link: "/dotnetcore/docker/" },
  { text: "\u5173\u4E8E", link: "/about/" },
  { text: "\u535A\u5BA2", link: "/blogs/" },
  {
    text: "API",
    icon: "api",
    children: [
      {
        text: "\u5B66\u4E60\u4E0E\u4EA4\u6D41",
        children: [
          {
            text: "\u6D4F\u89C8API",
            link: "https://luoyunchong.github.io/FreeKit/api/index.html"
          },
          {
            text: "\u6D4F\u89C8API\uFF08\u56FD\u5185\u955C\u50CF\uFF09",
            link: "https://igeekfan.gitee.io/freekit/api/index.html"
          },
          {
            text: "\u63D0Issues",
            link: "https://github.com/luoyunchong/FreeKit/issues/new"
          },
          {
            text: "NuGet",
            link: "https://www.nuget.org/packages?q=igeekfan.freekit"
          }
        ]
      }
    ]
  }
]);

// docs/.vuepress/sidebar/en.ts
import { sidebar } from "vuepress-theme-hope";
var enSidebarConfig = sidebar({
  "/dotnetcore/examples/": [
    {
      text: ".NET Core\u793A\u4F8B",
      collapsible: true,
      children: [
        "console-hello-world",
        "console-news-types",
        "freesql-in-aspnetcore-webapi-how-to-use",
        "freesql-sample-blog-restful-use-automapper",
        "identityserver4",
        "qiniu-object-storage",
        "imcore-chat",
        "nacos-aspnetcore",
        "serilog-tutorial"
      ]
    }
  ],
  "/dotnetcore/lin-cms/": [{
    text: "\u8D77\u6B65",
    collapsible: true,
    children: [
      "dotnetcore-start.md",
      "cms-start.md",
      "technology.md",
      "vue-start.md",
      "open-source-road.md",
      "pm-design-modules.md",
      "production-design.md",
      "github-actions.md",
      "change-sqlserver.md"
    ]
  }, {
    text: ".NET Core",
    collapsible: true,
    children: [
      "file-upload.md",
      "logger.md",
      "table.md",
      "authorize.md",
      "lincms-scaffolding.md",
      "autofac.md",
      "aspnetcore-repository-unitofwork.md"
    ]
  }, {
    text: "\u5F00\u53D1\u8005\u6587\u6863",
    collapsible: true,
    children: [
      "dev-start",
      "newtonsoft-json-question",
      "dependency-injection-scrutor",
      "dynamic-authorization-in-aspnetcore",
      "reflex-assembly-get-controller-methods-attribute",
      "identityserver4-jwt",
      "stopwords",
      "spa-github-login",
      "qq-login",
      "rabbitmq",
      "scriban-README.md"
    ]
  }],
  "/about/": [
    {
      text: "\u5173\u4E8E",
      prefix: "/about/",
      link: "/about/",
      collapsible: true
    }
  ],
  "/ai/": [
    {
      text: "HuggingFace",
      collapsible: true,
      children: [
        "HuggingFace"
      ]
    }
  ],
  "/blogs/": [
    {
      text: "\u6280\u672F\u5206\u4EAB",
      collapsible: true,
      children: [
        "git-emoji",
        "net-sqlite-encryption",
        "net-encoded-1"
      ]
    }
  ],
  "/colorui/": [
    {
      text: "ColorUI\u6587\u6863",
      collapsible: true,
      children: [
        "docs/button",
        "docs/text"
      ]
    }
  ]
});

// docs/.vuepress/sidebar/zh.ts
import { sidebar as sidebar2 } from "vuepress-theme-hope";
var zhSidebarConfig = sidebar2({
  "/dotnetcore/examples/": [
    {
      text: ".NET Core\u793A\u4F8B",
      collapsible: true,
      children: [
        "README.md",
        "console-hello-world",
        "console-news-types",
        "freesql-in-aspnetcore-webapi-how-to-use",
        "freesql-sample-blog-restful-use-automapper",
        "identityserver4",
        "qiniu-object-storages",
        "imcore-chat",
        "nacos-aspnetcore",
        "serilog-tutorial",
        "NET6Startup",
        "ASPNETCore6-Add-Startup-Clean",
        "ASPNETCore-Supervisord-Ubuntu",
        "ASPNETCore-Systemd-Ubuntu"
      ]
    }
  ],
  "/dotnetcore/lin-cms/": [
    {
      text: "\u8D77\u6B65",
      collapsible: true,
      children: [
        "README.md",
        "dotnetcore-start.md",
        "cms-start.md",
        "technology.md",
        "vue-start.md",
        "open-source-road.md",
        "pm-design-modules.md",
        "production-design.md",
        "github-actions.md",
        "change-sqlserver.md"
      ]
    },
    {
      text: ".NET Core",
      collapsible: true,
      children: [
        "file-upload.md",
        "logger.md",
        "table.md",
        "authorize.md",
        "lincms-scaffolding.md",
        "autofac.md",
        "aspnetcore-repository-unitofwork.md"
      ]
    },
    {
      text: "\u5F00\u53D1\u8005\u6587\u6863",
      collapsible: true,
      children: [
        "dev-start",
        "newtonsoft-json-question",
        "dependency-injection-scrutor",
        "dynamic-authorization-in-aspnetcore",
        "Reflex-Assembly",
        "identityserver4-jwt",
        "stopwords",
        "spa-github-login",
        "qq-login",
        "rabbitmq",
        "scriban-README.md"
      ]
    }
  ],
  "/dotnetcore/": [
    {
      text: "FreeKit",
      collapsible: true,
      link: "freekit/README.md",
      children: [
        "freekit/README.md",
        "freekit/Core.md",
        "freekit/Extras.md",
        "freekit/AspNetCore.Identity.FreeSql.md",
        "freekit/Email.md",
        "freekit/Modularity.md",
        "freekit/Localization.FreeSql.md"
      ]
    },
    {
      text: "Docker",
      collapsible: true,
      link: "docker/README.md",
      children: [
        "docker/README.md",
        "docker/Docker-Command.md",
        "docker/DockerHub.md",
        "docker/Docker-Baget.md",
        "docker/Docker-Jenkins.md",
        "docker/Docker-Elasticsearch.md",
        "docker/Docker-MySql.md",
        "docker/Docker-Nacos.md",
        "docker/Docker-Portainer.md",
        "docker/Docker-Redis.md",
        "docker/Docker-Nginx.md",
        "docker/Docker-RabbitMQ.md",
        "docker/Docker-CMS.md",
        "docker/Docker-ASPNETCore.md"
      ]
    }
  ],
  "/about/": [
    {
      text: "\u5173\u4E8E",
      prefix: "/about/",
      link: "/about/",
      collapsible: true
    }
  ],
  "/blogs/": [
    {
      text: "\u6280\u672F\u5206\u4EAB",
      collapsible: true,
      children: [
        "README.md",
        "git-emoji",
        "fluent-emoji-ms",
        "net-sqlite-encryption",
        "net-encoded-1",
        "delegate",
        "idlebus-freesql"
      ]
    }
  ],
  "/colorui/": [
    {
      text: "ColorUI\u6587\u6863",
      collapsible: true,
      children: ["docs/button", "docs/text"]
    }
  ]
});

// docs/.vuepress/theme.ts
var theme_default = hopeTheme({
  hostname: "https://igeekfan.cn",
  logo: "/logo.png",
  repo: "luoyunchong/igeekfan-docs",
  docsRepo: "https://github.com/luoyunchong/igeekfan-docs",
  docsBranch: "main",
  docsDir: "docs",
  iconPrefix: "iconfont icon-",
  locales: {
    "/": {
      navbar: zhNavbarConfig,
      sidebar: zhSidebarConfig,
      footer: "MIT Licensed | Copyright \xA9 2021-present luoyunchong",
      copyright: '<a href="https://beian.miit.gov.cn/" data-v-c3cf170c="">\u82CFICP\u590716046457\u53F7-1</a>',
      displayFooter: true,
      metaLocales: {
        lastUpdated: "\u4E0A\u6B21\u7F16\u8F91\u4E8E",
        editLink: "\u5728 GitHub \u4E0A\u7F16\u8F91\u6B64\u9875"
      }
    },
    "/en/": {
      navbar: enNavbarConfig,
      sidebar: enSidebarConfig,
      footer: "MIT Licensed | Copyright \xA9 2021-present luoyunchong",
      copyright: '<a href="https://beian.miit.gov.cn/" data-v-c3cf170c="">\u82CFICP\u590716046457\u53F7-1</a>',
      displayFooter: true
    }
  },
  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime", "Word"],
  encrypt: {},
  shouldPrefetch: false,
  plugins: {
    git: {
      createdTime: true,
      updatedTime: true,
      contributors: true
    },
    pwa: true,
    feed: {
      atom: true,
      json: true,
      rss: true
    },
    mdEnhance: {
      gfm: true,
      tabs: true,
      footnote: true,
      katex: true,
      flowchart: true
    }
  }
});

// docs/.vuepress/config.ts
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";
var base = process.env.BASE || "/";
var config_default = defineUserConfig({
  bundler: viteBundler(),
  locales: {
    "/": {
      lang: "zh-CN",
      title: ".NET \u5F00\u53D1\u8005\u6307\u5317",
      description: "\u95EE\u541B\u80FD\u6709\u51E0\u591A\u6101\uFF1F\u6070\u4F3C\u4E00\u6C5F\u6625\u6C34\u5411\u4E1C\u6D41\u3002"
    },
    "/en/": {
      lang: "en-US",
      title: ".NET Devlopement Guide",
      description: ".NET Devlopement Guide"
    }
  },
  port: 3e3,
  base,
  shouldPrefetch: false,
  head: [
    ["meta", { name: "application-name", content: "IGeekFan" }],
    ["meta", { name: "apple-mobile-web-app-title", content: "IGeekFan" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" }
    ],
    [
      "link",
      { rel: "apple-touch-icon", href: `/apple-touch-icon.png` }
    ],
    ["link", { rel: "stylesheet", href: "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css" }],
    [
      "script",
      {
        type: "text/javascript",
        crossorigin: "anonymous",
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7223766210897652"
      }
    ],
    [
      "script",
      {
        type: "text/javascript",
        src: "/js/base.js"
      }
    ]
  ],
  theme: theme_default,
  plugins: [
    docsearchPlugin({
      appId: "PIKEGX2V6X",
      apiKey: "249d0288a940c78dd9f7224054af745d",
      indexName: "igeekfan",
      locales: {
        "/zh/": {
          placeholder: "\u641C\u7D22\u6587\u6863",
          translations: {
            button: {
              buttonText: "\u641C\u7D22\u6587\u6863",
              buttonAriaLabel: "\u641C\u7D22\u6587\u6863"
            },
            modal: {
              searchBox: {
                resetButtonTitle: "\u6E05\u9664\u67E5\u8BE2\u6761\u4EF6",
                resetButtonAriaLabel: "\u6E05\u9664\u67E5\u8BE2\u6761\u4EF6",
                cancelButtonText: "\u53D6\u6D88",
                cancelButtonAriaLabel: "\u53D6\u6D88"
              },
              startScreen: {
                recentSearchesTitle: "\u641C\u7D22\u5386\u53F2",
                noRecentSearchesText: "\u6CA1\u6709\u641C\u7D22\u5386\u53F2",
                saveRecentSearchButtonTitle: "\u4FDD\u5B58\u81F3\u641C\u7D22\u5386\u53F2",
                removeRecentSearchButtonTitle: "\u4ECE\u641C\u7D22\u5386\u53F2\u4E2D\u79FB\u9664",
                favoriteSearchesTitle: "\u6536\u85CF",
                removeFavoriteSearchButtonTitle: "\u4ECE\u6536\u85CF\u4E2D\u79FB\u9664"
              },
              errorScreen: {
                titleText: "\u65E0\u6CD5\u83B7\u53D6\u7ED3\u679C",
                helpText: "\u4F60\u53EF\u80FD\u9700\u8981\u68C0\u67E5\u4F60\u7684\u7F51\u7EDC\u8FDE\u63A5"
              },
              footer: {
                selectText: "\u9009\u62E9",
                navigateText: "\u5207\u6362",
                closeText: "\u5173\u95ED",
                searchByText: "\u641C\u7D22\u63D0\u4F9B\u8005"
              },
              noResultsScreen: {
                noResultsText: "\u65E0\u6CD5\u627E\u5230\u76F8\u5173\u7ED3\u679C",
                suggestedQueryText: "\u4F60\u53EF\u4EE5\u5C1D\u8BD5\u67E5\u8BE2",
                reportMissingResultsText: "\u4F60\u8BA4\u4E3A\u8BE5\u67E5\u8BE2\u5E94\u8BE5\u6709\u7ED3\u679C\uFF1F",
                reportMissingResultsLinkText: "\u70B9\u51FB\u53CD\u9988"
              }
            }
          }
        }
      }
    }),
    googleAnalyticsPlugin({
      id: "G-ZPF56S01D2"
    })
  ]
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udnVlcHJlc3MvY29uZmlnLnRzIiwgImRvY3MvLnZ1ZXByZXNzL3RoZW1lLnRzIiwgImRvY3MvLnZ1ZXByZXNzL25hdmJhci9lbi50cyIsICJkb2NzLy52dWVwcmVzcy9uYXZiYXIvemgudHMiLCAiZG9jcy8udnVlcHJlc3Mvc2lkZWJhci9lbi50cyIsICJkb2NzLy52dWVwcmVzcy9zaWRlYmFyL3poLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRTovY29kZS9naXRodWIvbHVveXVuY2hvbmcvaWdlZWtmYW4tZG9jcy9kb2NzLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcY29kZVxcXFxnaXRodWJcXFxcbHVveXVuY2hvbmdcXFxcaWdlZWtmYW4tZG9jc1xcXFxkb2NzXFxcXC52dWVwcmVzc1xcXFxjb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L2NvZGUvZ2l0aHViL2x1b3l1bmNob25nL2lnZWVrZmFuLWRvY3MvZG9jcy8udnVlcHJlc3MvY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lVXNlckNvbmZpZyB9IGZyb20gJ3Z1ZXByZXNzJ1xyXG5pbXBvcnQgeyB2aXRlQnVuZGxlciB9IGZyb20gJ0B2dWVwcmVzcy9idW5kbGVyLXZpdGUnXHJcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi90aGVtZVwiO1xyXG5pbXBvcnQgeyBkb2NzZWFyY2hQbHVnaW4gfSBmcm9tIFwiQHZ1ZXByZXNzL3BsdWdpbi1kb2NzZWFyY2hcIjtcclxuaW1wb3J0IHsgZ29vZ2xlQW5hbHl0aWNzUGx1Z2luIH0gZnJvbSBcIkB2dWVwcmVzcy9wbHVnaW4tZ29vZ2xlLWFuYWx5dGljc1wiO1xyXG5cclxuY29uc3QgYmFzZSA9IChwcm9jZXNzLmVudi5CQVNFIGFzIFwiL1wiIHwgYC8ke3N0cmluZ30vYCkgfHwgXCIvXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVVc2VyQ29uZmlnKHtcclxuICAgIGJ1bmRsZXI6IHZpdGVCdW5kbGVyKCksXHJcbiAgICBsb2NhbGVzOiB7XHJcbiAgICAgICAgXCIvXCI6IHtcclxuICAgICAgICAgICAgbGFuZzogXCJ6aC1DTlwiLFxyXG4gICAgICAgICAgICB0aXRsZTogXCIuTkVUIFx1NUYwMFx1NTNEMVx1ODAwNVx1NjMwN1x1NTMxN1wiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJcdTk1RUVcdTU0MUJcdTgwRkRcdTY3MDlcdTUxRTBcdTU5MUFcdTYxMDFcdUZGMUZcdTYwNzBcdTRGM0NcdTRFMDBcdTZDNUZcdTY2MjVcdTZDMzRcdTU0MTFcdTRFMUNcdTZENDFcdTMwMDJcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiL2VuL1wiOiB7XHJcbiAgICAgICAgICAgIGxhbmc6IFwiZW4tVVNcIixcclxuICAgICAgICAgICAgdGl0bGU6IFwiLk5FVCBEZXZsb3BlbWVudCBHdWlkZVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCIuTkVUIERldmxvcGVtZW50IEd1aWRlXCIsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBwb3J0OiAzMDAwLFxyXG4gICAgYmFzZTogYmFzZSxcclxuICAgIHNob3VsZFByZWZldGNoOiBmYWxzZSxcclxuICAgIGhlYWQ6IFtcclxuICAgICAgICBbJ21ldGEnLCB7IG5hbWU6ICdhcHBsaWNhdGlvbi1uYW1lJywgY29udGVudDogJ0lHZWVrRmFuJyB9XSxcclxuICAgICAgICBbJ21ldGEnLCB7IG5hbWU6ICdhcHBsZS1tb2JpbGUtd2ViLWFwcC10aXRsZScsIGNvbnRlbnQ6ICdJR2Vla0ZhbicgfV0sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnbWV0YScsXHJcbiAgICAgICAgICAgIHsgbmFtZTogJ2FwcGxlLW1vYmlsZS13ZWItYXBwLXN0YXR1cy1iYXItc3R5bGUnLCBjb250ZW50OiAnYmxhY2snIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdsaW5rJyxcclxuICAgICAgICAgICAgeyByZWw6ICdhcHBsZS10b3VjaC1pY29uJywgaHJlZjogYC9hcHBsZS10b3VjaC1pY29uLnBuZ2AgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIFsnbGluaycsIHsgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6ICcvL2F0LmFsaWNkbi5jb20vdC9mb250XzI0MTAyMDZfbWZqNmUxdmJ3by5jc3MnIH1dLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ3NjcmlwdCcsIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0L2phdmFzY3JpcHQnLFxyXG4gICAgICAgICAgICAgICAgY3Jvc3NvcmlnaW46ICdhbm9ueW1vdXMnLFxyXG4gICAgICAgICAgICAgICAgc3JjOiAnaHR0cHM6Ly9wYWdlYWQyLmdvb2dsZXN5bmRpY2F0aW9uLmNvbS9wYWdlYWQvanMvYWRzYnlnb29nbGUuanM/Y2xpZW50PWNhLXB1Yi03MjIzNzY2MjEwODk3NjUyJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdzY3JpcHQnLCB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dC9qYXZhc2NyaXB0JyxcclxuICAgICAgICAgICAgICAgIHNyYzogJy9qcy9iYXNlLmpzJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgXSxcclxuICAgIHRoZW1lLFxyXG4gICAgcGx1Z2luczogW1xyXG4gICAgICAgIGRvY3NlYXJjaFBsdWdpbih7XHJcbiAgICAgICAgICAgIGFwcElkOiBcIlBJS0VHWDJWNlhcIixcclxuICAgICAgICAgICAgYXBpS2V5OiBcIjI0OWQwMjg4YTk0MGM3OGRkOWY3MjI0MDU0YWY3NDVkXCIsXHJcbiAgICAgICAgICAgIGluZGV4TmFtZTogXCJpZ2Vla2ZhblwiLFxyXG4gICAgICAgICAgICBsb2NhbGVzOiB7XHJcbiAgICAgICAgICAgICAgICBcIi96aC9cIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlx1NjQxQ1x1N0QyMlx1NjU4N1x1Njg2M1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b246IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiXHU2NDFDXHU3RDIyXHU2NTg3XHU2ODYzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25BcmlhTGFiZWw6IFwiXHU2NDFDXHU3RDIyXHU2NTg3XHU2ODYzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGFsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hCb3g6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNldEJ1dHRvblRpdGxlOiBcIlx1NkUwNVx1OTY2NFx1NjdFNVx1OEJFMlx1Njc2MVx1NEVGNlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2V0QnV0dG9uQXJpYUxhYmVsOiBcIlx1NkUwNVx1OTY2NFx1NjdFNVx1OEJFMlx1Njc2MVx1NEVGNlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiXHU1M0Q2XHU2RDg4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uQXJpYUxhYmVsOiBcIlx1NTNENlx1NkQ4OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0U2NyZWVuOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjZW50U2VhcmNoZXNUaXRsZTogXCJcdTY0MUNcdTdEMjJcdTUzODZcdTUzRjJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub1JlY2VudFNlYXJjaGVzVGV4dDogXCJcdTZDQTFcdTY3MDlcdTY0MUNcdTdEMjJcdTUzODZcdTUzRjJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXZlUmVjZW50U2VhcmNoQnV0dG9uVGl0bGU6IFwiXHU0RkREXHU1QjU4XHU4MUYzXHU2NDFDXHU3RDIyXHU1Mzg2XHU1M0YyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlUmVjZW50U2VhcmNoQnV0dG9uVGl0bGU6IFwiXHU0RUNFXHU2NDFDXHU3RDIyXHU1Mzg2XHU1M0YyXHU0RTJEXHU3OUZCXHU5NjY0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmF2b3JpdGVTZWFyY2hlc1RpdGxlOiBcIlx1NjUzNlx1ODVDRlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZUZhdm9yaXRlU2VhcmNoQnV0dG9uVGl0bGU6IFwiXHU0RUNFXHU2NTM2XHU4NUNGXHU0RTJEXHU3OUZCXHU5NjY0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JTY3JlZW46IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZVRleHQ6IFwiXHU2NUUwXHU2Q0Q1XHU4M0I3XHU1M0Q2XHU3RUQzXHU2NzlDXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscFRleHQ6IFwiXHU0RjYwXHU1M0VGXHU4MEZEXHU5NzAwXHU4OTgxXHU2OEMwXHU2N0U1XHU0RjYwXHU3Njg0XHU3RjUxXHU3RURDXHU4RkRFXHU2M0E1XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9vdGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0VGV4dDogXCJcdTkwMDlcdTYyRTlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRleHQ6IFwiXHU1MjA3XHU2MzYyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VUZXh0OiBcIlx1NTE3M1x1OTVFRFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaEJ5VGV4dDogXCJcdTY0MUNcdTdEMjJcdTYzRDBcdTRGOUJcdTgwMDVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub1Jlc3VsdHNTY3JlZW46IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub1Jlc3VsdHNUZXh0OiBcIlx1NjVFMFx1NkNENVx1NjI3RVx1NTIzMFx1NzZGOFx1NTE3M1x1N0VEM1x1Njc5Q1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Z2dlc3RlZFF1ZXJ5VGV4dDogXCJcdTRGNjBcdTUzRUZcdTRFRTVcdTVDMURcdThCRDVcdTY3RTVcdThCRTJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBvcnRNaXNzaW5nUmVzdWx0c1RleHQ6IFwiXHU0RjYwXHU4QkE0XHU0RTNBXHU4QkU1XHU2N0U1XHU4QkUyXHU1RTk0XHU4QkU1XHU2NzA5XHU3RUQzXHU2NzlDXHVGRjFGXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwb3J0TWlzc2luZ1Jlc3VsdHNMaW5rVGV4dDogXCJcdTcwQjlcdTUxRkJcdTUzQ0RcdTk5ODhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgZ29vZ2xlQW5hbHl0aWNzUGx1Z2luKHtcclxuICAgICAgICAgICAgaWQ6ICdHLVpQRjU2UzAxRDInXHJcbiAgICAgICAgfSlcclxuICAgIF0sXHJcbn0pO1xyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkU6L2NvZGUvZ2l0aHViL2x1b3l1bmNob25nL2lnZWVrZmFuLWRvY3MvZG9jcy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXGNvZGVcXFxcZ2l0aHViXFxcXGx1b3l1bmNob25nXFxcXGlnZWVrZmFuLWRvY3NcXFxcZG9jc1xcXFwudnVlcHJlc3NcXFxcdGhlbWUudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L2NvZGUvZ2l0aHViL2x1b3l1bmNob25nL2lnZWVrZmFuLWRvY3MvZG9jcy8udnVlcHJlc3MvdGhlbWUudHNcIjtpbXBvcnQgeyBob3BlVGhlbWUgfSBmcm9tIFwidnVlcHJlc3MtdGhlbWUtaG9wZVwiO1xyXG5pbXBvcnQgeyBlbk5hdmJhckNvbmZpZywgemhOYXZiYXJDb25maWcgfSBmcm9tIFwiLi9uYXZiYXJcIjtcclxuaW1wb3J0IHsgemhTaWRlYmFyQ29uZmlnLCBlblNpZGViYXJDb25maWcgfSBmcm9tIFwiLi9zaWRlYmFyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBob3BlVGhlbWUoe1xyXG4gICAgaG9zdG5hbWU6IFwiaHR0cHM6Ly9pZ2Vla2Zhbi5jblwiLFxyXG4gICAgbG9nbzogJy9sb2dvLnBuZycsXHJcbiAgICByZXBvOiAnbHVveXVuY2hvbmcvaWdlZWtmYW4tZG9jcycsXHJcbiAgICBkb2NzUmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9sdW95dW5jaG9uZy9pZ2Vla2Zhbi1kb2NzJyxcclxuICAgIGRvY3NCcmFuY2g6IFwibWFpblwiLFxyXG4gICAgZG9jc0RpcjogJ2RvY3MnLFxyXG4gICAgaWNvblByZWZpeDogXCJpY29uZm9udCBpY29uLVwiLFxyXG4gICAgbG9jYWxlczoge1xyXG4gICAgICAgIFwiL1wiOiB7XHJcbiAgICAgICAgICAgIG5hdmJhcjogemhOYXZiYXJDb25maWcsXHJcbiAgICAgICAgICAgIHNpZGViYXI6IHpoU2lkZWJhckNvbmZpZyxcclxuICAgICAgICAgICAgZm9vdGVyOiBcIk1JVCBMaWNlbnNlZCB8IENvcHlyaWdodCBcdTAwQTkgMjAyMS1wcmVzZW50IGx1b3l1bmNob25nXCIsXHJcbiAgICAgICAgICAgIGNvcHlyaWdodDogJzxhIGhyZWY9XCJodHRwczovL2JlaWFuLm1paXQuZ292LmNuL1wiIGRhdGEtdi1jM2NmMTcwYz1cIlwiPlx1ODJDRklDUFx1NTkwNzE2MDQ2NDU3XHU1M0Y3LTE8L2E+JyxcclxuICAgICAgICAgICAgZGlzcGxheUZvb3RlcjogdHJ1ZSxcclxuICAgICAgICAgICAgbWV0YUxvY2FsZXM6IHtcclxuICAgICAgICAgICAgICAgIGxhc3RVcGRhdGVkOiBcIlx1NEUwQVx1NkIyMVx1N0YxNlx1OEY5MVx1NEU4RVwiLFxyXG4gICAgICAgICAgICAgICAgZWRpdExpbms6IFwiXHU1NzI4IEdpdEh1YiBcdTRFMEFcdTdGMTZcdThGOTFcdTZCNjRcdTk4NzVcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiL2VuL1wiOiB7XHJcbiAgICAgICAgICAgIG5hdmJhcjogZW5OYXZiYXJDb25maWcsXHJcbiAgICAgICAgICAgIHNpZGViYXI6IGVuU2lkZWJhckNvbmZpZyxcclxuICAgICAgICAgICAgZm9vdGVyOiBcIk1JVCBMaWNlbnNlZCB8IENvcHlyaWdodCBcdTAwQTkgMjAyMS1wcmVzZW50IGx1b3l1bmNob25nXCIsXHJcbiAgICAgICAgICAgIGNvcHlyaWdodDogJzxhIGhyZWY9XCJodHRwczovL2JlaWFuLm1paXQuZ292LmNuL1wiIGRhdGEtdi1jM2NmMTcwYz1cIlwiPlx1ODJDRklDUFx1NTkwNzE2MDQ2NDU3XHU1M0Y3LTE8L2E+JyxcclxuICAgICAgICAgICAgZGlzcGxheUZvb3RlcjogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBwYWdlSW5mbzogW1wiQXV0aG9yXCIsIFwiT3JpZ2luYWxcIiwgXCJEYXRlXCIsIFwiQ2F0ZWdvcnlcIiwgXCJUYWdcIiwgXCJSZWFkaW5nVGltZVwiLCBcIldvcmRcIl0sXHJcbiAgICBlbmNyeXB0OiB7XHJcblxyXG4gICAgfSxcclxuICAgIHNob3VsZFByZWZldGNoOiBmYWxzZSxcclxuICAgIHBsdWdpbnM6IHtcclxuICAgICAgICBnaXQ6IHtcclxuICAgICAgICAgICAgY3JlYXRlZFRpbWU6IHRydWUsXHJcbiAgICAgICAgICAgIHVwZGF0ZWRUaW1lOiB0cnVlLFxyXG4gICAgICAgICAgICBjb250cmlidXRvcnM6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwd2E6IHRydWUsXHJcbiAgICAgICAgZmVlZDoge1xyXG4gICAgICAgICAgICBhdG9tOiB0cnVlLFxyXG4gICAgICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgICAgICAgICByc3M6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZEVuaGFuY2U6IHtcclxuICAgICAgICAgICAgZ2ZtOiB0cnVlLFxyXG4gICAgICAgICAgICB0YWJzOiB0cnVlLFxyXG4gICAgICAgICAgICBmb290bm90ZTogdHJ1ZSxcclxuICAgICAgICAgICAga2F0ZXg6IHRydWUsXHJcbiAgICAgICAgICAgIGZsb3djaGFydDogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufSk7XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRTovY29kZS9naXRodWIvbHVveXVuY2hvbmcvaWdlZWtmYW4tZG9jcy9kb2NzLy52dWVwcmVzcy9uYXZiYXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXGNvZGVcXFxcZ2l0aHViXFxcXGx1b3l1bmNob25nXFxcXGlnZWVrZmFuLWRvY3NcXFxcZG9jc1xcXFwudnVlcHJlc3NcXFxcbmF2YmFyXFxcXGVuLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi9jb2RlL2dpdGh1Yi9sdW95dW5jaG9uZy9pZ2Vla2Zhbi1kb2NzL2RvY3MvLnZ1ZXByZXNzL25hdmJhci9lbi50c1wiO2ltcG9ydCB7IG5hdmJhciB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZW5OYXZiYXJDb25maWcgPSBuYXZiYXIoW1xyXG4gICAgeyB0ZXh0OiAnXHU1MTczXHU0RThFJywgbGluazogJy9hYm91dC8nIH0sXHJcbl0pO1xyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkU6L2NvZGUvZ2l0aHViL2x1b3l1bmNob25nL2lnZWVrZmFuLWRvY3MvZG9jcy8udnVlcHJlc3MvbmF2YmFyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFxjb2RlXFxcXGdpdGh1YlxcXFxsdW95dW5jaG9uZ1xcXFxpZ2Vla2Zhbi1kb2NzXFxcXGRvY3NcXFxcLnZ1ZXByZXNzXFxcXG5hdmJhclxcXFx6aC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovY29kZS9naXRodWIvbHVveXVuY2hvbmcvaWdlZWtmYW4tZG9jcy9kb2NzLy52dWVwcmVzcy9uYXZiYXIvemgudHNcIjtpbXBvcnQgeyBuYXZiYXIgfSBmcm9tIFwidnVlcHJlc3MtdGhlbWUtaG9wZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHpoTmF2YmFyQ29uZmlnID0gbmF2YmFyKFtcclxuICAgIHsgdGV4dDogJ0NNUycsIGxpbms6ICcvZG90bmV0Y29yZS9saW4tY21zLycgfSxcclxuICAgIHsgdGV4dDogJy5ORVRcdTYzMDdcdTUzMTcnLCBsaW5rOiAnL2RvdG5ldGNvcmUvZXhhbXBsZXMvJyB9LFxyXG4gICAgeyB0ZXh0OiAnRnJlZUtpdCcsIGxpbms6ICcvZG90bmV0Y29yZS9mcmVla2l0LycgfSxcclxuICAgIHsgdGV4dDogJ0RvY2tlcicsIGxpbms6ICcvZG90bmV0Y29yZS9kb2NrZXIvJyB9LFxyXG4gICAgeyB0ZXh0OiAnXHU1MTczXHU0RThFJywgbGluazogJy9hYm91dC8nIH0sXHJcbiAgICB7IHRleHQ6ICdcdTUzNUFcdTVCQTInLCBsaW5rOiAnL2Jsb2dzLycgfSxcclxuICAgIHtcclxuICAgICAgICB0ZXh0OiAnQVBJJyxcclxuICAgICAgICBpY29uOiBcImFwaVwiLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdcdTVCNjZcdTRFNjBcdTRFMEVcdTRFQTRcdTZENDEnLFxyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdcdTZENEZcdTg5QzhBUEknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly9sdW95dW5jaG9uZy5naXRodWIuaW8vRnJlZUtpdC9hcGkvaW5kZXguaHRtbCdcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1x1NkQ0Rlx1ODlDOEFQSVx1RkYwOFx1NTZGRFx1NTE4NVx1OTU1Q1x1NTBDRlx1RkYwOScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbms6ICdodHRwczovL2lnZWVrZmFuLmdpdGVlLmlvL2ZyZWVraXQvYXBpL2luZGV4Lmh0bWwnXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdcdTYzRDBJc3N1ZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL2x1b3l1bmNob25nL0ZyZWVLaXQvaXNzdWVzL25ldydcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ051R2V0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluazogJ2h0dHBzOi8vd3d3Lm51Z2V0Lm9yZy9wYWNrYWdlcz9xPWlnZWVrZmFuLmZyZWVraXQnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH0sXHJcbl0pO1xyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkU6L2NvZGUvZ2l0aHViL2x1b3l1bmNob25nL2lnZWVrZmFuLWRvY3MvZG9jcy8udnVlcHJlc3Mvc2lkZWJhclwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcY29kZVxcXFxnaXRodWJcXFxcbHVveXVuY2hvbmdcXFxcaWdlZWtmYW4tZG9jc1xcXFxkb2NzXFxcXC52dWVwcmVzc1xcXFxzaWRlYmFyXFxcXGVuLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi9jb2RlL2dpdGh1Yi9sdW95dW5jaG9uZy9pZ2Vla2Zhbi1kb2NzL2RvY3MvLnZ1ZXByZXNzL3NpZGViYXIvZW4udHNcIjtpbXBvcnQgeyBzaWRlYmFyIH0gZnJvbSBcInZ1ZXByZXNzLXRoZW1lLWhvcGVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBlblNpZGViYXJDb25maWcgPSBzaWRlYmFyKHtcclxuICAgICcvZG90bmV0Y29yZS9leGFtcGxlcy8nOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiAnLk5FVCBDb3JlXHU3OTNBXHU0RjhCJyxcclxuICAgICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXHJcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgICAnY29uc29sZS1oZWxsby13b3JsZCcsXHJcbiAgICAgICAgICAgICAgICAnY29uc29sZS1uZXdzLXR5cGVzJyxcclxuICAgICAgICAgICAgICAgICdmcmVlc3FsLWluLWFzcG5ldGNvcmUtd2ViYXBpLWhvdy10by11c2UnLFxyXG4gICAgICAgICAgICAgICAgJ2ZyZWVzcWwtc2FtcGxlLWJsb2ctcmVzdGZ1bC11c2UtYXV0b21hcHBlcicsXHJcbiAgICAgICAgICAgICAgICAnaWRlbnRpdHlzZXJ2ZXI0JyxcclxuICAgICAgICAgICAgICAgICdxaW5pdS1vYmplY3Qtc3RvcmFnZScsXHJcbiAgICAgICAgICAgICAgICAnaW1jb3JlLWNoYXQnLFxyXG4gICAgICAgICAgICAgICAgJ25hY29zLWFzcG5ldGNvcmUnLFxyXG4gICAgICAgICAgICAgICAgJ3Nlcmlsb2ctdHV0b3JpYWwnXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgJy9kb3RuZXRjb3JlL2xpbi1jbXMvJzogW3tcclxuICAgICAgICB0ZXh0OiAnXHU4RDc3XHU2QjY1JyxcclxuICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAnZG90bmV0Y29yZS1zdGFydC5tZCcsXHJcbiAgICAgICAgICAgICdjbXMtc3RhcnQubWQnLFxyXG4gICAgICAgICAgICAndGVjaG5vbG9neS5tZCcsXHJcbiAgICAgICAgICAgICd2dWUtc3RhcnQubWQnLFxyXG4gICAgICAgICAgICAnb3Blbi1zb3VyY2Utcm9hZC5tZCcsXHJcbiAgICAgICAgICAgICdwbS1kZXNpZ24tbW9kdWxlcy5tZCcsXHJcbiAgICAgICAgICAgICdwcm9kdWN0aW9uLWRlc2lnbi5tZCcsXHJcbiAgICAgICAgICAgICdnaXRodWItYWN0aW9ucy5tZCcsXHJcbiAgICAgICAgICAgICdjaGFuZ2Utc3Fsc2VydmVyLm1kJyxcclxuICAgICAgICBdXHJcbiAgICB9LCB7XHJcbiAgICAgICAgdGV4dDogJy5ORVQgQ29yZScsXHJcbiAgICAgICAgY29sbGFwc2libGU6IHRydWUsXHJcbiAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgJ2ZpbGUtdXBsb2FkLm1kJyxcclxuICAgICAgICAgICAgJ2xvZ2dlci5tZCcsXHJcbiAgICAgICAgICAgICd0YWJsZS5tZCcsXHJcbiAgICAgICAgICAgICdhdXRob3JpemUubWQnLFxyXG4gICAgICAgICAgICAnbGluY21zLXNjYWZmb2xkaW5nLm1kJyxcclxuICAgICAgICAgICAgJ2F1dG9mYWMubWQnLFxyXG4gICAgICAgICAgICAnYXNwbmV0Y29yZS1yZXBvc2l0b3J5LXVuaXRvZndvcmsubWQnXHJcbiAgICAgICAgXVxyXG4gICAgfSwge1xyXG4gICAgICAgIHRleHQ6ICdcdTVGMDBcdTUzRDFcdTgwMDVcdTY1ODdcdTY4NjMnLFxyXG4gICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICdkZXYtc3RhcnQnLFxyXG4gICAgICAgICAgICAnbmV3dG9uc29mdC1qc29uLXF1ZXN0aW9uJyxcclxuICAgICAgICAgICAgJ2RlcGVuZGVuY3ktaW5qZWN0aW9uLXNjcnV0b3InLFxyXG4gICAgICAgICAgICAnZHluYW1pYy1hdXRob3JpemF0aW9uLWluLWFzcG5ldGNvcmUnLFxyXG4gICAgICAgICAgICAncmVmbGV4LWFzc2VtYmx5LWdldC1jb250cm9sbGVyLW1ldGhvZHMtYXR0cmlidXRlJyxcclxuICAgICAgICAgICAgJ2lkZW50aXR5c2VydmVyNC1qd3QnLFxyXG4gICAgICAgICAgICAnc3RvcHdvcmRzJyxcclxuICAgICAgICAgICAgJ3NwYS1naXRodWItbG9naW4nLFxyXG4gICAgICAgICAgICAncXEtbG9naW4nLFxyXG4gICAgICAgICAgICAncmFiYml0bXEnLFxyXG4gICAgICAgICAgICAnc2NyaWJhbi1SRUFETUUubWQnXHJcbiAgICAgICAgXVxyXG4gICAgfV0sXHJcbiAgICAnL2Fib3V0Lyc6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdcdTUxNzNcdTRFOEUnLFxyXG4gICAgICAgICAgICBwcmVmaXg6IFwiL2Fib3V0L1wiLFxyXG4gICAgICAgICAgICBsaW5rOiBcIi9hYm91dC9cIixcclxuICAgICAgICAgICAgY29sbGFwc2libGU6IHRydWVcclxuICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgJy9haS8nOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiAnSHVnZ2luZ0ZhY2UnLFxyXG4gICAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICAgICdIdWdnaW5nRmFjZSdcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgIF0sXHJcbiAgICAnL2Jsb2dzLyc6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdcdTYyODBcdTY3MkZcdTUyMDZcdTRFQUInLFxyXG4gICAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICAgICdnaXQtZW1vamknLFxyXG4gICAgICAgICAgICAgICAgJ25ldC1zcWxpdGUtZW5jcnlwdGlvbicsXHJcbiAgICAgICAgICAgICAgICAnbmV0LWVuY29kZWQtMScsXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgJy9jb2xvcnVpLyc6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdDb2xvclVJXHU2NTg3XHU2ODYzJyxcclxuICAgICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXHJcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgICAnZG9jcy9idXR0b24nLFxyXG4gICAgICAgICAgICAgICAgJ2RvY3MvdGV4dCcsXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICBdLFxyXG59KTtcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOi9jb2RlL2dpdGh1Yi9sdW95dW5jaG9uZy9pZ2Vla2Zhbi1kb2NzL2RvY3MvLnZ1ZXByZXNzL3NpZGViYXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXGNvZGVcXFxcZ2l0aHViXFxcXGx1b3l1bmNob25nXFxcXGlnZWVrZmFuLWRvY3NcXFxcZG9jc1xcXFwudnVlcHJlc3NcXFxcc2lkZWJhclxcXFx6aC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovY29kZS9naXRodWIvbHVveXVuY2hvbmcvaWdlZWtmYW4tZG9jcy9kb2NzLy52dWVwcmVzcy9zaWRlYmFyL3poLnRzXCI7aW1wb3J0IHsgc2lkZWJhciB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgemhTaWRlYmFyQ29uZmlnID0gc2lkZWJhcih7XHJcbiAgXCIvZG90bmV0Y29yZS9leGFtcGxlcy9cIjogW1xyXG4gICAge1xyXG4gICAgICB0ZXh0OiBcIi5ORVQgQ29yZVx1NzkzQVx1NEY4QlwiLFxyXG4gICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICBcIlJFQURNRS5tZFwiLFxyXG4gICAgICAgIFwiY29uc29sZS1oZWxsby13b3JsZFwiLFxyXG4gICAgICAgIFwiY29uc29sZS1uZXdzLXR5cGVzXCIsXHJcbiAgICAgICAgXCJmcmVlc3FsLWluLWFzcG5ldGNvcmUtd2ViYXBpLWhvdy10by11c2VcIixcclxuICAgICAgICBcImZyZWVzcWwtc2FtcGxlLWJsb2ctcmVzdGZ1bC11c2UtYXV0b21hcHBlclwiLFxyXG4gICAgICAgIFwiaWRlbnRpdHlzZXJ2ZXI0XCIsXHJcbiAgICAgICAgXCJxaW5pdS1vYmplY3Qtc3RvcmFnZXNcIixcclxuICAgICAgICBcImltY29yZS1jaGF0XCIsXHJcbiAgICAgICAgXCJuYWNvcy1hc3BuZXRjb3JlXCIsXHJcbiAgICAgICAgXCJzZXJpbG9nLXR1dG9yaWFsXCIsXHJcbiAgICAgICAgXCJORVQ2U3RhcnR1cFwiLFxyXG4gICAgICAgIFwiQVNQTkVUQ29yZTYtQWRkLVN0YXJ0dXAtQ2xlYW5cIixcclxuICAgICAgICBcIkFTUE5FVENvcmUtU3VwZXJ2aXNvcmQtVWJ1bnR1XCIsXHJcbiAgICAgICAgXCJBU1BORVRDb3JlLVN5c3RlbWQtVWJ1bnR1XCIsXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgXCIvZG90bmV0Y29yZS9saW4tY21zL1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIHRleHQ6IFwiXHU4RDc3XHU2QjY1XCIsXHJcbiAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgIFwiUkVBRE1FLm1kXCIsXHJcbiAgICAgICAgXCJkb3RuZXRjb3JlLXN0YXJ0Lm1kXCIsXHJcbiAgICAgICAgXCJjbXMtc3RhcnQubWRcIixcclxuICAgICAgICBcInRlY2hub2xvZ3kubWRcIixcclxuICAgICAgICBcInZ1ZS1zdGFydC5tZFwiLFxyXG4gICAgICAgIFwib3Blbi1zb3VyY2Utcm9hZC5tZFwiLFxyXG4gICAgICAgIFwicG0tZGVzaWduLW1vZHVsZXMubWRcIixcclxuICAgICAgICBcInByb2R1Y3Rpb24tZGVzaWduLm1kXCIsXHJcbiAgICAgICAgXCJnaXRodWItYWN0aW9ucy5tZFwiLFxyXG4gICAgICAgIFwiY2hhbmdlLXNxbHNlcnZlci5tZFwiLFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGV4dDogXCIuTkVUIENvcmVcIixcclxuICAgICAgY29sbGFwc2libGU6IHRydWUsXHJcbiAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgXCJmaWxlLXVwbG9hZC5tZFwiLFxyXG4gICAgICAgIFwibG9nZ2VyLm1kXCIsXHJcbiAgICAgICAgXCJ0YWJsZS5tZFwiLFxyXG4gICAgICAgIFwiYXV0aG9yaXplLm1kXCIsXHJcbiAgICAgICAgXCJsaW5jbXMtc2NhZmZvbGRpbmcubWRcIixcclxuICAgICAgICBcImF1dG9mYWMubWRcIixcclxuICAgICAgICBcImFzcG5ldGNvcmUtcmVwb3NpdG9yeS11bml0b2Z3b3JrLm1kXCIsXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0ZXh0OiBcIlx1NUYwMFx1NTNEMVx1ODAwNVx1NjU4N1x1Njg2M1wiLFxyXG4gICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICBcImRldi1zdGFydFwiLFxyXG4gICAgICAgIFwibmV3dG9uc29mdC1qc29uLXF1ZXN0aW9uXCIsXHJcbiAgICAgICAgXCJkZXBlbmRlbmN5LWluamVjdGlvbi1zY3J1dG9yXCIsXHJcbiAgICAgICAgXCJkeW5hbWljLWF1dGhvcml6YXRpb24taW4tYXNwbmV0Y29yZVwiLFxyXG4gICAgICAgIFwiUmVmbGV4LUFzc2VtYmx5XCIsXHJcbiAgICAgICAgXCJpZGVudGl0eXNlcnZlcjQtand0XCIsXHJcbiAgICAgICAgXCJzdG9wd29yZHNcIixcclxuICAgICAgICBcInNwYS1naXRodWItbG9naW5cIixcclxuICAgICAgICBcInFxLWxvZ2luXCIsXHJcbiAgICAgICAgXCJyYWJiaXRtcVwiLFxyXG4gICAgICAgIFwic2NyaWJhbi1SRUFETUUubWRcIixcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgXSxcclxuICBcIi9kb3RuZXRjb3JlL1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIHRleHQ6IFwiRnJlZUtpdFwiLFxyXG4gICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgbGluazogXCJmcmVla2l0L1JFQURNRS5tZFwiLFxyXG4gICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgIFwiZnJlZWtpdC9SRUFETUUubWRcIixcclxuICAgICAgICBcImZyZWVraXQvQ29yZS5tZFwiLFxyXG4gICAgICAgIFwiZnJlZWtpdC9FeHRyYXMubWRcIixcclxuICAgICAgICBcImZyZWVraXQvQXNwTmV0Q29yZS5JZGVudGl0eS5GcmVlU3FsLm1kXCIsXHJcbiAgICAgICAgXCJmcmVla2l0L0VtYWlsLm1kXCIsXHJcbiAgICAgICAgXCJmcmVla2l0L01vZHVsYXJpdHkubWRcIixcclxuICAgICAgICBcImZyZWVraXQvTG9jYWxpemF0aW9uLkZyZWVTcWwubWRcIixcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRleHQ6IFwiRG9ja2VyXCIsXHJcbiAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICBsaW5rOiBcImRvY2tlci9SRUFETUUubWRcIixcclxuICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICBcImRvY2tlci9SRUFETUUubWRcIixcclxuICAgICAgICBcImRvY2tlci9Eb2NrZXItQ29tbWFuZC5tZFwiLFxyXG4gICAgICAgIFwiZG9ja2VyL0RvY2tlckh1Yi5tZFwiLFxyXG4gICAgICAgIFwiZG9ja2VyL0RvY2tlci1CYWdldC5tZFwiLFxyXG4gICAgICAgIFwiZG9ja2VyL0RvY2tlci1KZW5raW5zLm1kXCIsXHJcbiAgICAgICAgXCJkb2NrZXIvRG9ja2VyLUVsYXN0aWNzZWFyY2gubWRcIixcclxuICAgICAgICBcImRvY2tlci9Eb2NrZXItTXlTcWwubWRcIixcclxuICAgICAgICBcImRvY2tlci9Eb2NrZXItTmFjb3MubWRcIixcclxuICAgICAgICBcImRvY2tlci9Eb2NrZXItUG9ydGFpbmVyLm1kXCIsXHJcbiAgICAgICAgXCJkb2NrZXIvRG9ja2VyLVJlZGlzLm1kXCIsXHJcbiAgICAgICAgXCJkb2NrZXIvRG9ja2VyLU5naW54Lm1kXCIsXHJcbiAgICAgICAgXCJkb2NrZXIvRG9ja2VyLVJhYmJpdE1RLm1kXCIsXHJcbiAgICAgICAgXCJkb2NrZXIvRG9ja2VyLUNNUy5tZFwiLFxyXG4gICAgICAgIFwiZG9ja2VyL0RvY2tlci1BU1BORVRDb3JlLm1kXCIsXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgXCIvYWJvdXQvXCI6IFtcclxuICAgIHtcclxuICAgICAgdGV4dDogXCJcdTUxNzNcdTRFOEVcIixcclxuICAgICAgcHJlZml4OiBcIi9hYm91dC9cIixcclxuICAgICAgbGluazogXCIvYWJvdXQvXCIsXHJcbiAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgfSxcclxuICBdLFxyXG4gIFwiL2Jsb2dzL1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIHRleHQ6IFwiXHU2MjgwXHU2NzJGXHU1MjA2XHU0RUFCXCIsXHJcbiAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgIFwiUkVBRE1FLm1kXCIsXHJcbiAgICAgICAgXCJnaXQtZW1vamlcIixcclxuICAgICAgICBcImZsdWVudC1lbW9qaS1tc1wiLFxyXG4gICAgICAgIFwibmV0LXNxbGl0ZS1lbmNyeXB0aW9uXCIsXHJcbiAgICAgICAgXCJuZXQtZW5jb2RlZC0xXCIsXHJcbiAgICAgICAgXCJkZWxlZ2F0ZVwiLFxyXG4gICAgICAgIFwiaWRsZWJ1cy1mcmVlc3FsXCIsXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgXCIvY29sb3J1aS9cIjogW1xyXG4gICAge1xyXG4gICAgICB0ZXh0OiBcIkNvbG9yVUlcdTY1ODdcdTY4NjNcIixcclxuICAgICAgY29sbGFwc2libGU6IHRydWUsXHJcbiAgICAgIGNoaWxkcmVuOiBbXCJkb2NzL2J1dHRvblwiLCBcImRvY3MvdGV4dFwiXSxcclxuICAgIH0sXHJcbiAgXSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBcVYsU0FBUyx3QkFBd0I7QUFDdFgsU0FBUyxtQkFBbUI7OztBQ0R1VCxTQUFTLGlCQUFpQjs7O0FDQVYsU0FBUyxjQUFjO0FBRW5YLElBQU0saUJBQWlCLE9BQU87QUFBQSxFQUNqQyxFQUFFLE1BQU0sZ0JBQU0sTUFBTSxVQUFVO0FBQ2xDLENBQUM7OztBQ0prVyxTQUFTLFVBQUFBLGVBQWM7QUFFblgsSUFBTSxpQkFBaUJDLFFBQU87QUFBQSxFQUNqQyxFQUFFLE1BQU0sT0FBTyxNQUFNLHVCQUF1QjtBQUFBLEVBQzVDLEVBQUUsTUFBTSxvQkFBVSxNQUFNLHdCQUF3QjtBQUFBLEVBQ2hELEVBQUUsTUFBTSxXQUFXLE1BQU0sdUJBQXVCO0FBQUEsRUFDaEQsRUFBRSxNQUFNLFVBQVUsTUFBTSxzQkFBc0I7QUFBQSxFQUM5QyxFQUFFLE1BQU0sZ0JBQU0sTUFBTSxVQUFVO0FBQUEsRUFDOUIsRUFBRSxNQUFNLGdCQUFNLE1BQU0sVUFBVTtBQUFBLEVBQzlCO0FBQUEsSUFDSSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixVQUFVO0FBQUEsTUFDTjtBQUFBLFFBQ0ksTUFBTTtBQUFBLFFBQ04sVUFBVTtBQUFBLFVBQ047QUFBQSxZQUNJLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxVQUNWO0FBQUEsVUFDQTtBQUFBLFlBQ0ksTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFVBQ1Y7QUFBQSxVQUNB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Q0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sYUFBYTtBQUFBLE1BQ2IsVUFBVTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLGFBQWE7QUFBQSxNQUNiLFVBQVU7QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsZ0JBQWdCO0FBQUEsSUFDZDtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sYUFBYTtBQUFBLE1BQ2IsTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLGFBQWE7QUFBQSxNQUNiLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsV0FBVztBQUFBLElBQ1Q7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLGFBQWE7QUFBQSxJQUNmO0FBQUEs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
