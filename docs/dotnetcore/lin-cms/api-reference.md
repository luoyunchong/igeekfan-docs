# API 参考

LinCMS.NET Core 使用 Swagger (Swashbuckle) 自动生成交互式 API 文档。

当后端项目运行时，你可以通过访问以下路径来浏览和测试 API：

- **Swagger UI**: `/swagger` (例如: `http://localhost:5000/swagger`)
- **Swagger JSON**: `/swagger/v1/swagger.json` (或其他版本)

Swagger UI 提供了一个用户友好的界面，你可以：

- 查看所有可用的 API 端点及其 HTTP 方法。
- 查看每个端点的请求参数、请求体结构和响应结构。
- 直接在界面中发送请求并查看响应，方便调试。
- 查看 DTO 模型的定义和验证规则。

建议在开发和集成过程中经常参考 Swagger 文档。
