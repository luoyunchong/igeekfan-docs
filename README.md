# Freekit Docs

项目使用 vuepress，其可专注于文档构建

## install

```bash
npm install -g pnpm@next-7
```

```bash
pnpm install
```

## run

```bash
pnpm dev:vite
```

## build

```bash
pnpm build:vite
```

## upgrade package

```bash
pnpm i -D vuepress@next
```

## vuepress

该采用`vuepress-next`搭建，内置`md`，可以采用`vue`语法，vue 作者出品,UI 主题是 vuepress-theme-hope

- [https://vuepress-theme-hope.github.io/v2/](https://vuepress-theme-hope.github.io/v2/)

## 文档源码

- [https://github.com/luoyunchong/igeekfan-docs](https://github.com/luoyunchong/igeekfan-docs)
- [https://gitee.com/igeekfan/igeekfan-docs](httpsgiteegithub.com/igeekfan/igeekfan-docs)

## 部署地址

- [https://luoyunchong.github.io/igeekfan-docs/](https://luoyunchong.github.io/igeekfan-docs)
- [https://igeekfan.gitee.io/igeekfan-docs/](https://igeekfan.gitee.io/igeekfan-docs)
- [https://igeekfan.cn](https://igeekfan.cn)

## package.json 介绍

package.json 有这些命令

```bash
  "scripts": {
    "build:vite": "vuepress-vite build docs",
    "dev:vite": "vuepress-vite dev docs",
  },
```

所以我们可以 pnpm dev:vite 或 pnpm build:vite

## 自动发布 至 github pages

### 在 git bash 中执行

```bash
pnpm deploy
```

或

### powershell 中执行如下内容

```bash
.\deploy.ps1
```

## 自动发布至 linux

```bash
npm install scp2 
```

根目录创建 deploy 文件夹，新增一个 index.js 文件。里面放至如下代码，修改自己的 ip，用户名，密码，目录

```js
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
        console.log("npm run build-scp2: scp2工具上传完毕,远端服务路径：/var/www/html/igeekfan-docs")
    } else {
        console.log("err", err)
    }
})
```

执行如下代码

```bash
yarn deploy:linux
```

## nginx 配置 

nginx 相关配置，/etc/nginx/conf.d/新建一个以.conf 为后缀的文件即可。

```bash
cd /etc/nginx/conf.d/
touch igeekfan-docs.conf
```

```conf
server {
    listen 80;
    server_name www.igeekfan.cn;
    root /var/www/html/igeekfan-docs;
    charset utf-8;
    location /  {
        proxy_set_header   X-Real-IP $remote_addr;
        proxy_set_header   Host      $http_host;
    }
}
```

```bash
# 判断配置是否有效
nginx -t
# 加载配置项
nginx -s reload
```
