# 前端准备

## 项目仓库

- 管理端 UI：[lin-cms-vue](https://github.com/luoyunchong/lin-cms-vue)
- 用户端 UI：[lin-cms-vvlog](https://github.com/luoyunchong/lin-cms-vvlog)

## 线上演示

- 后端API文档：[Swagger](https://igeekfan.cn/lincms_api/swagger/index.html)
- 用户端演示：[VVLog](https://igeekfan.cn/vvlog)
  - 普通用户：710277267@qq.com
  - 密码：123qwe
- 管理端演示：[CMS后台](https://igeekfan.cn/cms/)
  - 管理员账号：admin
  - 密码：123qwe

## 开发环境

开发必备：
- [Node.js 16+](https://nodejs.org/en/)
- [pnpm](https://www.pnpm.cn/)

## 快速启动

```bash
# 克隆项目
git clone https://github.com/luoyunchong/lin-cms-vue.git

# 全局安装pnpm
npm install -g pnpm

# 安装依赖
pnpm install

# 启动开发服务器
pnpm run serve
```

## 部署配置

### HTTP部署

```nginx
server {
    listen 8080;
    root /var/www/lin-cms-vue;

    charset utf-8;
    location / {
        try_files $uri $uri/ /index.html;
    }

    error_page 500 502 503 504 /50x.html;
    location = /50x.html {
        root html;
    }
}
```

### HTTPS部署

```nginx
server {  
    listen 443 ssl;
    server_name igeekfan.cn;
    ssl_certificate conf.d/igeekfan.cn/cms_nginx/igeekfan.cn/cms_bundle.crt;
    ssl_certificate_key conf.d/igeekfan.cn/cms_nginx/igeekfan.cn/cms.key;
    ssl_session_timeout 5m;
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
    ssl_prefer_server_ciphers on;
    root /var/www/lin-cms-vue;
    
    location / {
       try_files $uri $uri/ /index.html; 
    }
        
    error_page 500 502 503 504 /50x.html;
    location = /50x.html {
        root html;
    }
}

server {
    listen 80;
    server_name igeekfan.cn;
    return 301 https://$server_name$request_uri;
}
```

## 环境配置参数

前端项目支持通过`.env`文件配置不同环境的参数，如API地址、静态资源CDN等。具体配置请参考项目根目录下的环境配置文件.
