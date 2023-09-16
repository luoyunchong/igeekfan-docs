# 前端准备

## 开源地址

- 管理端 UI [https://github.com/luoyunchong/lin-cms-vue](https://github.com/luoyunchong/lin-cms-vue)
- 用户端 UI [https://github.com/luoyunchong/lin-cms-vvlog](https://github.com/luoyunchong/lin-cms-vvlog)

## 博客模块线上地址

- 本项目 swagger 地址 [https://api.igeekfan.cn/swagger/index.html](https://api.igeekfan.cn/swagger/index.html)
- 用户端 lin-cms-vvlog [https://vvlog.igeekfan.cn](https://vvlog.igeekfan.cn)
  - 普通用户：710277267@qq.com
  - 密码：123qwe
- 管理员 lin-cms-vue [https://cms.igeekfan.cn/](https://cms.igeekfan.cn)
  - 管理员： admin
  - 密码：123qwe

## 快速上手

开发必备

- [Node.js 16+](https://nodejs.org/en/)
- [pnpm](https://www.pnpm.cn/)

```bash
# clone the project
git clone https://github.com/luoyunchong/lin-cms-vue.git

npm install -g pnpm

# install dependency
pnpm install

# develop
pnpm run serve
```


## nginx 配置

- vue 使用 history 的配置

```nginx
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

1. 配置 api 地址： 打开配置文件 `.env.development` 

- ``VUE_APP_BASE_URL`` 配置后端 api 地址
- ``VUE_APP_CURRENT_URL`` 配置当前前端地址，仅用于QQ\微信登录\GitHub快速登录回调地址

2. 用户名：**admin** 密码 **123qwe**
