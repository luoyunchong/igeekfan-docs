# 文件上传系统

LinCMS内置了灵活的文件上传管理功能，支持本地存储和云存储多种方式，前端提供了配套的组件方便使用。

## 功能概述

- 支持单文件、多文件上传
- 支持上传至本地文件系统或七牛云对象存储
- 自动文件去重（基于MD5），支持"秒传"功能
- 可配置文件大小、类型、数量限制
- 统一的文件管理API

## 系统设计

### 核心接口

系统定义了`IFileService`接口作为文件服务的抽象：

```csharp
public interface IFileService
{
    /// <summary>
    /// 单文件上传，键为file
    /// </summary>
    /// <param name="file">上传的文件对象</param>
    /// <param name="key">文件对应的key，默认为0</param>
    /// <returns>文件信息DTO</returns>
    Task<FileDto> UploadAsync(IFormFile file, int key = 0);
}
```

### 存储实现

系统提供了两种实现：
- **本地存储**：`LocalFileService`，文件保存在服务器本地文件系统
- **七牛云存储**：`QiniuService`，文件上传至七牛云对象存储

## 配置说明

在`appsettings.json`中配置文件上传相关参数：

```json
"FileStorage": {
  "MaxFileSize": 83886080,  // 最大文件大小(单位:字节)，默认80MB
  "NumLimit": 3,            // 单次上传文件数量限制
  "Include": "",            // 允许的文件类型，如：".png,.jpg"
  "Exclude": ".exe,.dll",   // 禁止的文件类型
  
  "ServiceName": "LocalFileService",  // 使用的存储服务类型：LocalFileService或QiniuService
  
  "LocalFile": {
    "PrefixPath": "assets",            // 文件存储子目录
    "Host": "https://localhost:5001/"  // 访问域名
  },
  
  "Qiniu": {
    "AK": "your-access-key",           // 七牛云AccessKey
    "SK": "your-secret-key",           // 七牛云SecretKey
    "Bucket": "your-bucket-name",      // 七牛云存储空间名称
    "PrefixPath": "assets",            // 存储路径前缀
    "Host": "http://images.example.com/", // CDN加速域名
    "UseHttps": false                  // 是否使用HTTPS
  }
}
```

### 本地存储配置

使用本地存储时（`ServiceName`设为`LocalFileService`）：

- `PrefixPath`：文件存储目录，相对于`wwwroot`目录的相对路径
- `Host`：访问文件的域名，通常是应用的域名

存储路径格式：`/{STORE_DIR}/{year}/{month}/{day}/{guid}.文件后缀`  
例如：`/assets/2023/8/15/64263e57-9a24-4933-9116-25616c801e93.png`

### 七牛云存储配置

使用七牛云存储时（`ServiceName`设为`QiniuService`）：

- `AK`：七牛云账号的AccessKey
- `SK`：七牛云账号的SecretKey
- `Bucket`：存储空间名称
- `PrefixPath`：存储路径前缀
- `Host`：七牛云分配的域名或绑定的自定义域名

存储路径格式：`{PrefixPath}/{yyyyMMddHHmmssffffff}.文件后缀`  
例如：`assets/20230815150043868887.jpg`

## API说明

LinCMS提供了两个主要的文件上传API：

| 请求方式 | 路径             | 功能       | 参数                             |
| -------- | ---------------- | ---------- | -------------------------------- |
| POST     | /cms/file/upload | 单文件上传 | file：文件对象<br>key：文件序号 |
| POST     | /cms/file        | 多文件上传 | files：多个文件对象             |

### 返回结果

文件上传成功后返回的JSON示例：

```json
{
  "key": "file_0",       // 文件标识符
  "path": "assets/2023/08/15/64263e57-9a24-4933-9116-25616c801e93.png", // 存储路径
  "url": "https://example.com/assets/2023/08/15/64263e57-9a24-4933-9116-25616c801e93.png", // 访问URL
  "id": 19               // 文件ID
}
```

多文件上传则返回文件对象数组。

## 用法示例

### 通过Swagger测试

1. 打开Swagger UI：`https://localhost:5001/swagger/index.html`
2. 找到`/cms/file/upload`接口
3. 点击"Try it out"按钮
4. 选择文件并设置key参数（默认0）
5. 点击"Execute"按钮提交

### 在前端中使用

LinCMS的前端项目中包含`lin-file-upload`组件，用于文件上传：

```vue
<template>
  <lin-file-upload 
    v-model="uploadFiles"
    :multiple="true"
    :file-list="fileList"
    @success="handleSuccess" 
  />
</template>

<script>
export default {
  data() {
    return {
      uploadFiles: [],
      fileList: []
    }
  },
  methods: {
    handleSuccess(response) {
      console.log('上传成功', response)
      // 处理上传成功后的响应
    }
  }
}
</script>
```

## 高级配置

### 文件大小限制

**在应用程序级别**：

```csharp
services.Configure<FormOptions>(options =>
{
    // 限制为8MB
    options.MultipartBodyLengthLimit = 1024 * 1024 * 8;
});
```

**在Kestrel服务器级别**：

```csharp
webBuilder.ConfigureKestrel((context, options) =>
{
    // 设置Kestrel请求体最大为8MB
    options.Limits.MaxRequestBodySize = 1024 * 1024 * 8;
});
```

### 文件类型过滤

通过`Include`和`Exclude`配置项控制允许上传的文件类型：

- 当`Include`不为空时，只允许上传`Include`中指定的文件类型
- 当`Include`为空且`Exclude`不为空时，禁止上传`Exclude`中指定的文件类型
- 当两者都为空时，允许上传任何类型的文件

## 常见问题

### 文件大小超出限制

如果出现文件上传失败，请检查：
1. 文件大小是否超过`MaxFileSize`设置
2. 是否超过Kestrel或应用程序的请求体大小限制

### 无法访问上传的文件

对于本地存储，请确认：
1. `wwwroot/assets`目录是否有正确的读写权限
2. 应用程序是否正确配置了静态文件中间件：`app.UseStaticFiles()`

### 七牛云配置问题

使用七牛云存储时：
1. 确保AK和SK填写正确
2. 检查Bucket名称是否存在
3. 确认Host配置了正确的域名（包括协议头）
