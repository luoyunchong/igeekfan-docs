
# 前端准备

## 开源地址

- [https://github.com/luoyunchong/lin-cms-vvlog](https://github.com/luoyunchong/lin-cms-vvlog)
- [https://github.com/luoyunchong/lin-cms-vue](https://github.com/luoyunchong/lin-cms-vue)

## 文档地址
- 介绍 [http://doc.cms.7yue.pro/](http://doc.cms.7yue.pro/)
- 前端 [http://doc.cms.7yue.pro/lin/client/](http://doc.cms.7yue.pro/lin/client/s)

## 官方预览地址

- [http://face.cms.7yue.pro/](http://face.cms.7yue.pro/)

## 博客模块线上地址 
- 后端swagger地址 [https://baimocore.cn/swagger/index.html](https://baimocore.cn/swagger/index.html)
- 用户端 lin-cms-vvlog [http://47.106.80.39:8080/#/index](http://47.106.80.39:8080/#/index) 
  - 普通用户：710277267@qq.com
  - 密码：123qwe

- 管理员 lin-cms-vue [http://47.106.80.39:8081/#/](http://47.106.80.39:8081/#/)
  - 管理员： admin
  - 密码：123qwe

## 快速上手

开发必备

- [Node.js 10+](https://nodejs.org/en/) 版本即可，我须安装12.7
- [yarn](https://yarnpkg.com/zh-Hant/docs/install#windows-stable)

如果以下命令有问题，请删除yarn.lock，node_modules文件夹后，重新执行yarn，yarn serve
```
# clone the project
git clone https://github.com/luoyunchong/lin-cms-vue.git

# install dependency
yarn

# develop
yarn serve

# deploy
yarn deploy
```

## deploy 发布
scp2方便快速发布，一行命令就能快速发布成功。

必备条件：（参数）
- 一台linux的服务器，ip
- 用户名
- 密码
- 端口：默认是22
- 发布的地址。这里放到/var/www/lin-cms-vue目录中。

## 步骤
根目录新建deploy目录，创建index.js文件。

```
'use strict'
// 引入scp2模块
var client = require('scp2');
const ora = require('ora')
const chalk = require('chalk')
const spinner = ora('正在发布到生产服务器...')
spinner.start()
client.scp('dist/', {
    "host": "",
    "username": "",
    "password": "",
    "port": "22",
    "path": "/var/www/lin-cms-vue"
}, function (err) {
    spinner.stop()
    if (!err) {
        console.log("npm run build-scp2: scp2工具上传完毕,远端服务路径：/var/www/lin-cms-vue")
    } else {
        console.log("err", err)
    }
})
```

快速发布，需要安装 scp2
```
cnpm install scp2
```
package.json中增加

```
  "scripts": {
    "deploy": "yarn build:production && node ./deploy",
}
```


```
yarn deploy
```

## nginx 配置
- vue 使用history的配置
```
server {
    listen 8080;
    root /var/www/lin-cms-vue;

   charset utf-8;
   location / {
       try_files $uri $uri/ /index.html; 

     }
        
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   html;
    }

}
```


## 配置项

1. 配置 api 地址： 打开配置文件 src/config/index.js 配置 baseUrl ，本地开发阶段配置本地虚拟域名(https://localhost:5001/)，线上部署生产域名。





