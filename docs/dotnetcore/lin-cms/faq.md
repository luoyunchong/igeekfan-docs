# 常见问题解答 (FAQ)

## 后端 (LinCMS.NET Core)

**Q1: 如何切换数据库类型？**

A1: 修改 `src/LinCms.Web/appsettings.json` (或 `appsettings.Production.json`) 中的 `ConnectionStrings` 和 `DbType` 节点。例如，要切换到 MySQL，你需要：
1.  提供 MySQL 的连接字符串。
2.  将 `DbType` 的值改为 `MySql`。
详细配置请参考 [后端快速入门 - 数据库配置](./backend-quickstart.md#数据库配置)。

**Q2: 运行 `dotnet run` 

A2: 
- 确保 `src/LinCms.Web` 是当前的启动项目。
- 检查 `appsettings.json` 中的数据库连接字符串和 `DbType` 是否正确配置。
- 确保数据库服务正在运行，并且网络连接正常。
- 检查数据库用户是否具有创建/修改表结构以及插入数据的权限。
- 查看控制台输出的详细错误信息，根据具体错误进行排查。

**Q3: API 返回 401 Unauthorized？**

A3: 
- 确认请求的 Header 中是否包含了有效的 `Authorization: Bearer <your_token>`。
- 检查 Token 是否过期。
- 确认 `appsettings.json` 中的 `Jwt:SecretKey` 配置与生成 Token 时使用的密钥一致。
- 确认 `Jwt:Issuer` 和 `Jwt:Audience` 配置是否正确 (如果启用了验证)。

**Q4: API 返回 403 Forbidden？**

A4: 
- 表示用户已认证但没有访问该接口所需的权限。
- 登录前端管理界面，检查当前用户所属的分组是否已被分配了访问该接口所需的权限。
- 检查后端 Controller Action 上的 `[LinCmsAuthorize]` 特性定义的权限是否正确。

**Q5: 如何添加新的权限？**

A5: 
1.  在需要权限控制的 Controller 或 Action 方法上添加 `[LinCmsAuthorize("模块名", "权限名")]` 特性。
2.  重新启动后端服务，系统会自动扫描并注册新的权限。
3.  登录前端管理界面，在 "管理员" -> "权限管理" 中可以看到新权限。
4.  在 "管理员" -> "分组管理" 中，为相应的分组分配新权限。

**Q6: 文件上传失败？**

A6: 
- 检查 `appsettings.json` 中的 `File` 配置节点，特别是 `StoreDir` (存储目录) 是否存在且具有写入权限。
- 检查 `SingleLimit` (单个文件大小限制) 和 `TotalLimit` (总大小限制) 是否足够。
- 检查 Nginx 或其他反向代理是否配置了 `client_max_body_size` 以允许足够大的请求体。

## 前端 (LinCMS Vue 2)

**Q1: 运行 `pnpm run serve` 后无法访问页面？**

A1: 
- 检查控制台输出，确认 Vite 开发服务器是否成功启动，并查看监听的端口号 (默认为 8080)。
- 确保没有其他程序占用了该端口。
- 检查防火墙设置是否允许访问该端口。
- 清除浏览器缓存或尝试使用无痕模式访问。

**Q2: 页面显示空白或报错？**

A2: 
- 打开浏览器开发者工具 (按 F12)，查看控制台 (Console) 和网络 (Network) 选项卡。
- **控制台错误**: 查看是否有 JavaScript 运行时错误，根据错误信息定位问题。
- **网络错误**: 检查 API 请求是否成功 (状态码 2xx)。
    - 如果 API 请求失败 (4xx, 5xx)，检查后端服务是否正常运行，API 地址 (`.env` 文件中的 `VITE_APP_BASE_URL`) 是否配置正确。
    - 如果 API 请求出现跨域错误 (CORS)，检查后端是否正确配置了跨域策略，或者在 `vite.config.ts` 中配置 `server.proxy` 进行开发环境代理。

**Q3: 登录失败？**

A3: 
- 确认输入的用户名和密码是否正确 (默认管理员：super / 123456)。
- 打开浏览器开发者工具，检查登录接口 (`/cms/user/login`) 的请求和响应。
- 确认后端服务运行正常且前端配置的 API 地址正确。

**Q4: 如何修改前端访问端口？**

A4: 修改 `vite.config.ts` 文件中的 `server.port` 配置项。

```typescript
// vite.config.ts
import { defineConfig } from 'vite'

export default defineConfig({
  // ... 其他配置
  server: {
    host: '0.0.0.0', // 允许外部访问
    port: 8081, // 修改为你想要的端口
    // proxy: { ... } // 代理配置
  },
})
```

**Q5: 如何配置开发环境的 API 代理以解决跨域问题？**

A5: 修改 `vite.config.ts` 文件，配置 `server.proxy`。

```typescript
// vite.config.ts
import { defineConfig } from 'vite'

export default defineConfig({
  // ... 其他配置
  server: {
    // ... 其他 server 配置
    proxy: {
      // 字符串简写写法
      // '/foo': 'http://localhost:4567/foo',
      // 带选项写法：/api/user -> http://localhost:5000/user
      '/api': {
        target: 'http://localhost:5000', // 你的后端 API 地址
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '') // 可选：如果后端 API 没有 /api 前缀
      },
      // ... 可以配置多个代理
    }
  },
})
```
配置代理后，前端代码中请求 API 时，可以直接写代理路径，例如请求 `/api/cms/user/info`，Vite 会将其代理到 `http://localhost:5000/cms/user/info`。
