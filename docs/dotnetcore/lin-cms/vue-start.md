# 前端准备

## 开源地址

- 管理端 UI [https://github.com/luoyunchong/lin-cms-vue](https://github.com/luoyunchong/lin-cms-vue)
- 用户端 UI [https://github.com/luoyunchong/lin-cms-vvlog](https://github.com/luoyunchong/lin-cms-vvlog)

## 博客模块线上地址

- 本项目 swagger 地址 [https://api.igeekfan.cn/swagger/index.html](https://api.igeekfan.cn/swagger/index.html)
- 用户端 lin-cms-vvlog [https://igeekfan.cn/vvlog](https://igeekfan.cn/vvlog)
  - 普通用户：<710277267@qq.com>
  - 密码：123qwe
- 管理员 lin-cms-vue [https://igeekfan.cn/cms/](https://igeekfan.cn/cms)
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

- http 80 部署

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

- https

目录：`/etc/nginx/conf.d`
证书：也放到`/etc/nginx/conf.d/igeekfan.cn/cms_nginx`目录中

```nginx
server {  
    listen 443  ssl;
    server_name igeekfan.cn/cms;
    ssl_certificate conf.d/igeekfan.cn/cms_nginx/igeekfan.cn/cms_bundle.crt; #证书文件名称
    ssl_certificate_key conf.d/igeekfan.cn/cms_nginx/igeekfan.cn/cms.key; #私钥文件名称
    ssl_session_timeout 5m;
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2; #请按照这个协议配置
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE; #请按照这个套件配置，配置加密套件，写法遵循 openssl 标准。
    ssl_prefer_server_ciphers on;
    root /var/www/lin-cms-vue;
    location / {
       try_files $uri $uri/ /index.html; 
   }
        
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   html;
    }
}

server {
    listen 80;
    server_name igeekfan.cn/cms;
    return 301 https://$server_name$request_uri;
}
```

## 配置项

1. 配置 api 地址： 打开配置文件 `.env.development`

#### lin-cms-vvlog

- ``VUE_APP_BASE_URL`` 配置后端 api 地址（必填）
- ``VUE_APP_CURRENT_URL`` 配置当前前端地址，仅用于QQ\微信登录\GitHub快速登录回调地址

用户名：**admin** 密码 **123qwe**

#### lin-cms-vue

- ``VUE_APP_BASE_URL`` 配置后端 api 地址（必填）
- ``VUE_APP_VVLOG_URL`` 配置lin-cms-vvlog运行的地址，方便跳转至lin-cms-vvlog项目

用户名：**710277267@qq.com** 密码 **123qwe**
