## 简介
项目使用vuepress，其可专注于文档构建


## vuepress

该采用`vuepress`搭建，内置`md`，可以采用`vue`语法，vue作者出品,UI主题是vuepress-theme-reco

- [https://github.com/vuejs/vuepress](https://github.com/vuejs/vuepress)
- [https://vuepress-theme-reco.recoluan.com/](https://vuepress-theme-reco.recoluan.com/)

## 文档源码
- [https://github.com/luoyunchong/vovo-docs](https://github.com/luoyunchong/vovo-docs)
- [https://gitee.com/igeekfan/vovo-docs](httpsgiteegithub.com/igeekfan/vovo-docs)

## 部署地址

- [https://luoyunchong.github.io/vovo-docs/](https://luoyunchong.github.io/vovo-docs)
- [https://igeekfan.gitee.io/vovo-docs/](https://igeekfan.gitee.io/vovo-docs)
- [https://igeekfan.cn](https://igeekfan.cn)

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

# 自动发布 至github pages
## 在git bash中执行
``` 
yarn deploy
```
或

## powershell中执行如下内容
```
.\deploy.ps1
```


## 自动发布至 linux

根目录创建deploy文件夹，新增一个index.js文件。里面放至如下代码，修改自己的ip，用户名，密码，目录
```
'use strict'
// 引入scp2模块
var client = require('scp2');
const ora = require('ora')
const spinner = ora('正在发布到生产服务器...')
spinner.start()
client.scp('docs/.vuepress/dist/', {
    "host": "ip",
    "username": "username",
    "password": "password",
    "port": "22",
    "path": "目录"
}, function (err) {
    spinner.stop()
    if (!err) {
        console.log("npm run build-scp2: scp2工具上传完毕,远端服务路径：/var/www/html/vovo-docs")
    } else {
        console.log("err", err)
    }
})
```
执行如下代码
```
yarn deploy:linux
```

nginx相关配置，/etc/nginx/conf.d/新建一个以.conf为后缀的文件即可。
```bash
touch vovo-docs.conf
```
```conf
server {  
    listen 80;
    server_name www.igeekfan.cn;
    root /var/www/html/vovo-docs;	
    charset utf-8;
    location /  {
        proxy_set_header   X-Real-IP $remote_addr;
        proxy_set_header   Host      $http_host;
    }
}
```

```
# 判断配置是否有效
nginx -t
# 加载配置项
nginx -s reload
```
