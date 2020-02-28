## 简介
项目使用vuepress，其可专注于文档构建

## 文档源码
[https://github.com/luoyunchong/vovo-docs](https://github.com/luoyunchong/vovo-docs)
[https://gitee.com/igeekfan/vovo-docs](httpsgiteegithub.com/igeekfan/vovo-docs)

## vuepress

该采用`vuepress`搭建，内置`md`，可以采用`vue`语法，vue作者出品,UI主题是vuepress-theme-reco

- [https://github.com/vuejs/vuepress](https://github.com/vuejs/vuepress)
- [https://vuepress-theme-reco.recoluan.com/](https://vuepress-theme-reco.recoluan.com/)
## 完整文档

- [https://luoyunchong.github.io/vovo-docs/](https://luoyunchong.github.io/vovo-docs)
- [https://igeekfan.gitee.io/vovo-docs/](https://igeekfan.github.io/vovo-docs)


## 如何构建运行
前提
- node.js
- yarn或npm
- vuepress 

最好是安装yarn [https://yarnpkg.com/lang/zh-hans/docs/install/#windows-stable](https://yarnpkg.com/lang/zh-hans/docs/install/#windows-stable)

## 安装依赖包，开发运行
~~~
PS D:\code\github\vovo-docs>yarn install
PS D:\code\github\vovo-docs>yarn dev
~~~

如果不能正常运行，就删除 yarn.lock、node_modules文件夹,再重新执行上面的命令

## 生成发布包
```ps1
PS D:\code\github\vovo-docs>yarn build 
```

## 发布

发布至github pages 中的gh-pages分支

```ps1
PS D:\code\github\vovo-docs>.\deploy.ps1
```

.sh 也不懂，关键我本地是windows，不能正常执行，git bash 也许可以 


### package.json介绍
package.json有这些命令
```
  "scripts": {
    "dev": "vuepress dev docs",
    "build": "vuepress build docs",
    "deploy": "bash deploy.sh"
  },
```

所以我们可以 yarn dev或yarn build 

bash无法推送,这个命令要在git bash中执行
``` 
yarn deploy
```


## 自动发布 至github pages
```
.\deploy.ps1
```