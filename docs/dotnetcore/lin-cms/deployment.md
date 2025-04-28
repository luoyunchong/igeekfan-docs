# 部署指南

本文档介绍如何部署 LinCMS.NET Core 后端和 LinCMS Vue 2 前端项目。

## 概述

通常部署包含以下步骤：

1.  **环境准备**: 安装必要的运行时和依赖 (如 .NET Runtime, ASP.NET Core Runtime, Node.js, Web 服务器, 数据库)。
2.  **构建/发布项目**: 生成生产环境可用的文件。
3.  **配置**: 配置数据库连接、API 地址、Web 服务器等。
4.  **部署文件**: 将生成的文件复制到服务器。
5.  **运行与托管**: 使用 Web 服务器 (如 Nginx, IIS) 或进程管理工具 (如 Systemd, Supervisor, Docker) 运行和托管应用。

## 后端部署 (LinCMS.NET Core)

### 1. 环境准备

- **操作系统**: Linux (推荐 CentOS, Ubuntu) 或 Windows Server。
- **.NET Runtime**: 安装与项目匹配的 [.NET Runtime](https://dotnet.microsoft.com/download/dotnet) 和 [ASP.NET Core Runtime](https://dotnet.microsoft.com/download/dotnet/aspnetcore)。
- **数据库**: 安装和配置你选择的数据库 (MySQL, PostgreSQL, SQL Server, etc.)。
- **Web 服务器 (可选但推荐)**: Nginx (Linux) 或 IIS (Windows)。
- **进程管理器 (Linux)**: Systemd 或 Supervisor。

### 2. 发布项目

在你的开发机器或构建服务器上，进入后端项目根目录 (`lin-cms-dotnetcore`)，执行发布命令：

```bash
# 发布到 bin/Release/netX.0/publish 目录 (X 是 .NET 版本)
dotnet publish src/LinCms.Web/LinCms.Web.csproj -c Release -o ./publish_output

# 如果需要指定运行时 (例如部署到不支持自包含部署的 Linux x64)
# dotnet publish src/LinCms.Web/LinCms.Web.csproj -c Release -r linux-x64 --self-contained false -o ./publish_output
```

这将生成包含所有依赖项的可执行文件和配置文件到 `publish_output` 目录。

### 3. 配置

- 将 `publish_output` 目录下的 `appsettings.json` 或创建 `appsettings.Production.json` 文件，修改其中的数据库连接字符串 (`ConnectionStrings`)、`DbType`、JWT 密钥 (`Jwt:SecretKey`)、文件存储路径 (`File:StoreDir`) 等生产环境配置。
- **确保 `ASPNETCORE_ENVIRONMENT` 环境变量在服务器上设置为 `Production`**，这样 `appsettings.Production.json` 才会生效。

### 4. 部署文件

将 `publish_output` 目录下的所有文件复制到服务器的目标部署目录 (例如 `/var/www/lincms-backend`)。

### 5. 运行与托管

**方式一: 使用 Nginx + Systemd (推荐用于 Linux)**

1.  **创建 Systemd 服务单元文件**: `/etc/systemd/system/lincms-backend.service`

    ```ini
    [Unit]
    Description=LinCMS.NET Core Backend Service
    After=network.target

    [Service]
    WorkingDirectory=/var/www/lincms-backend # 你的部署目录
    ExecStart=/usr/bin/dotnet /var/www/lincms-backend/LinCms.Web.dll # 确保 dotnet 路径正确
    Restart=always
    RestartSec=10 # Restart service after 10 seconds if dotnet service crashes
    SyslogIdentifier=lincms-backend
    User=www-data # 建议使用非 root 用户运行
    Environment=ASPNETCORE_ENVIRONMENT=Production
    Environment=DOTNET_PRINT_TELEMETRY_MESSAGE=false

    [Install]
    WantedBy=multi-user.target
    ```

2.  **启用并启动服务**:
    ```bash
    sudo systemctl enable lincms-backend.service
    sudo systemctl start lincms-backend.service
    sudo systemctl status lincms-backend.service # 查看状态
    ```

3.  **配置 Nginx 反向代理**: 编辑 Nginx 配置文件 (通常在 `/etc/nginx/sites-available/` 或 `/etc/nginx/conf.d/`)。

    ```nginx
    server {
        listen 80;
        listen [::]:80;
        server_name your_backend_domain.com; # 替换为你的域名或 IP

        # 可选：HTTP 到 HTTPS 跳转
        # return 301 https://$host$request_uri;

        location / {
            proxy_pass         http://localhost:5000; # 指向你的 .NET Core 应用监听的地址和端口
            proxy_http_version 1.1;
            proxy_set_header   Upgrade $http_upgrade;
            proxy_set_header   Connection keep-alive;
            proxy_set_header   Host $host;
            proxy_cache_bypass $http_upgrade;
            proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header   X-Forwarded-Proto $scheme;
        }
    }

    # 如果启用了 HTTPS (需要 SSL 证书)
    # server {
    #     listen 443 ssl http2;
    #     listen [::]:443 ssl http2;
    #     server_name your_backend_domain.com;
    #
    #     ssl_certificate /path/to/your/fullchain.pem;
    #     ssl_certificate_key /path/to/your/privkey.pem;
    #     include /etc/nginx/snippets/ssl-params.conf; # 可选的 SSL 参数配置
    #
    #     location / {
    #         proxy_pass         http://localhost:5000;
    #         # ... 其他 proxy_set_header 同上 ...
    #     }
    # }
    ```

4.  **测试 Nginx 配置并重载**:
    ```bash
    sudo nginx -t
    sudo systemctl reload nginx
    ```

**方式二: 使用 Docker**

1.  **创建 Dockerfile**: 在后端项目根目录创建 `Dockerfile`。

    ```dockerfile
    FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
    WORKDIR /app
    EXPOSE 80
    EXPOSE 443

    FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
    WORKDIR /src
    COPY ["src/LinCms.Web/LinCms.Web.csproj", "src/LinCms.Web/"]
    COPY ["src/LinCms.Application/LinCms.Application.csproj", "src/LinCms.Application/"]
    COPY ["src/LinCms.Application.Contracts/LinCms.Application.Contracts.csproj", "src/LinCms.Application.Contracts/"]
    COPY ["src/LinCms.Infrastructure/LinCms.Infrastructure.csproj", "src/LinCms.Infrastructure/"]
    COPY ["src/LinCms.Core/LinCms.Core.csproj", "src/LinCms.Core/"]
    # 根据你的项目结构调整 COPY 命令

    RUN dotnet restore "src/LinCms.Web/LinCms.Web.csproj"
    COPY . .
    WORKDIR "/src/src/LinCms.Web"
    RUN dotnet build "LinCms.Web.csproj" -c Release -o /app/build

    FROM build AS publish
    RUN dotnet publish "LinCms.Web.csproj" -c Release -o /app/publish

    FROM base AS final
    WORKDIR /app
    COPY --from=publish /app/publish .
    # 确保 appsettings.Production.json 被包含或通过卷挂载
    ENTRYPOINT ["dotnet", "LinCms.Web.dll"]
    ```

2.  **构建 Docker 镜像**:
    ```bash
    docker build -t lincms-backend:latest .
    ```

3.  **运行 Docker 容器**:
    ```bash
    docker run -d -p 5000:80 \
           -e ASPNETCORE_ENVIRONMENT=Production \
           -v /path/on/host/appsettings.Production.json:/app/appsettings.Production.json \
           # 可选：挂载文件存储目录
           # -v /path/on/host/uploads:/app/uploads \
           --name lincms-backend-container \
           lincms-backend:latest
    ```
    *`-p 5000:80` 将容器的 80 端口映射到宿主机的 5000 端口。*
    *`-v` 用于挂载生产配置文件和可能的持久化目录。*

4.  (可选) 使用 Nginx 作为反向代理指向 Docker 容器暴露的端口 (如 5000)。

**方式三: 使用 IIS (Windows)**

1.  安装 [ASP.NET Core Hosting Bundle](https://dotnet.microsoft.com/download/dotnet/aspnetcore)。
2.  在 IIS 管理器中创建新的网站。
3.  将物理路径指向你部署文件的目录。
4.  配置应用程序池的 .NET CLR 版本为 "无托管代码"。
5.  确保应用程序池用户具有部署目录的读取权限。
6.  配置绑定 (域名、IP、端口)。

## 前端部署 (LinCMS Vue 2)

前端项目是静态文件，需要部署到 Web 服务器上。

### 1. 环境准备

- **Web 服务器**: Nginx, Apache, IIS, 或其他可以托管静态文件的服务器。
- **Node.js 和 pnpm**: 用于构建项目 (通常在开发或构建服务器上)。

### 2. 构建项目

在前端项目根目录 (`lin-cms-vue`) 执行构建命令：

```bash
pnpm run build
```

这将生成静态文件到 `dist` 目录下。

### 3. 配置

- **API 地址**: 确保构建时使用的 `.env.production` 文件中的 `VITE_APP_BASE_URL` 指向你部署的后端 API 地址。
- **Web 服务器配置**: 配置 Web 服务器以正确处理单页应用 (SPA) 的路由。

### 4. 部署文件

将 `dist` 目录下的所有文件复制到 Web 服务器的网站根目录或指定子目录 (例如 `/var/www/lincms-frontend`)。

### 5. 配置 Web 服务器 (Nginx 示例)

编辑 Nginx 配置文件，添加或修改 `server` 块：

```nginx
server {
    listen 80; # 或 443 (如果使用 HTTPS)
    server_name your_frontend_domain.com; # 替换为你的前端域名
    root /var/www/lincms-frontend; # 指向 dist 目录内容的位置
    index index.html index.htm;

    # SSL 配置 (如果使用 HTTPS)
    # ssl_certificate /path/to/your/fullchain.pem;
    # ssl_certificate_key /path/to/your/privkey.pem;
    # include /etc/nginx/snippets/ssl-params.conf;

    location / {
        try_files $uri $uri/ /index.html;
        # try_files 指令是处理 SPA 路由的关键
        # 它会尝试查找请求的文件或目录，如果找不到，则返回 /index.html
    }

    # 可选：配置 API 代理 (如果前端和后端部署在同一域名下不同路径)
    # location /api/ { # 假设 API 路径以 /api/ 开头
    #     proxy_pass http://your_backend_domain.com; # 指向后端服务
    #     proxy_set_header Host $host;
    #     proxy_set_header X-Real-IP $remote_addr;
    #     proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    #     proxy_set_header X-Forwarded-Proto $scheme;
    # }

    # 可选：配置 Gzip 压缩
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_proxied expired no-cache no-store private auth;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml application/javascript application/json;
    gzip_disable "MSIE [1-6]\.";

    # 可选：配置浏览器缓存
    location ~* \.(?:css|js)$ {
        expires 1y;
        add_header Cache-Control "public";
    }
    location ~* \.(?:png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1M;
        add_header Cache-Control "public";
    }
}
```

**关键配置**: `try_files $uri $uri/ /index.html;` 确保了当用户直接访问或刷新非根路径 (如 `/user/list`) 时，Nginx 仍然返回 `index.html`，由前端 Vue Router 处理路由。

**测试 Nginx 配置并重载**:
```bash
sudo nginx -t
sudo systemctl reload nginx
```

## 自动化部署 (CI/CD)

考虑使用 GitHub Actions, GitLab CI, Jenkins 等工具实现自动化构建和部署流程，以提高效率和减少错误。

- **GitHub Actions 示例**: 参考项目中的 `.github/workflows` 目录 (如果存在) 或查阅 [GitHub Actions 文档](https://docs.github.com/en/actions)。
- **文档站点部署脚本**: 项目根目录下的 [`deploy.ps1`](deploy.ps1) 是用于部署本文档站点的示例脚本。
