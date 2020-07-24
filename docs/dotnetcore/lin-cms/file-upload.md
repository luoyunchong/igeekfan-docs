# 文件上传系统

lin-cms-dotnetcore 默认集成了文件上传功能，并可自由切换存储位置，前端也有相应的组件匹配使用.

目前后端实现了七牛云文件（QiniuService）上传，本地文件（LocalFileService）上传。


接口 **IFileService**
```
public interface IFileService
{
    /// <summary>
    /// 单文件上传，键为file
    /// </summary>
    /// <param name="file"></param>
    /// <param name="key"></param>
    /// <returns></returns>
    Task<FileDto> UploadAsync(IFormFile file, int key = 0);
}
```


配置项 appsettings.json

## 本地文件上传

- PrefixPath：默认为wwwroot下的文件目录配置项，assets，多级目录，前后不要加**/**，如assets/file
- Host:  文件上传后，访问域名配置，这里配置https://localhost:5001/
- ServiceName :配置当前系统上传时使用哪个实现，可选配置项（LocalFileService、QiniuService）
    - 当为LocalFileService时，文件保存路径为**wwwroot**静态文件目录下，上传至本地，
    - QiniuService 上传至七牛云


实际文件路径

**/assets/2020/5/8/xxxxxx-1111-12-12-12--1-21.png**

参数化

**/{STORE_DIR}/{year}/{month}/{day}/{guid}.文件后缀**

```
  "FileStorage": {
    "ServiceName": "LocalFileService",//LocalFileService、QiniuService
    "LocalFile":{
      "PrefixPath": "assets",
      "Host": "https://localhost:5001/"
    }
  },
```

## 七牛云文件上传
SERVICE为QiniuService时，系统将需要使用如下配置项，

- AK :七牛云密钥AccessKey
- SK :七牛云密钥SecretKey
- Bucket :七牛云新建存储空间的名称（唯一值）
- PrefixPath 文件根目录前缀
- Host:七牛云配置的CDN 加速域名，可使用临时分配的域名，仅一个月有效期，绑定自己的域名，可配置泛子域名
- UseHttps：使用https，这个参数好像没啥用。

上传文件名

**assets/20191218150043868887.jpg**

参数

**{PrefixPath}/{yyyyMMddHHmmssffffff}.文件后缀**

```
  "FileStorage": {
   "ServiceName": "QiniuService",
    "Qiniu": {
      "AK": "",
      "SK": "",
      "Bucket": "vvv",
      "PrefixPath": "assets",
      "Host": "http://images.igeekfan.cn/",
      "UseHttps": false
    }
  },
```


lin-cms 默认对外暴露了cms/file/作为文件上传接口，通过该接口可以直接使用 HTTP post 方法上传文件。


运行项目后，我们可以看到swagger，找到cms/file
[https://localhost:5001/swagger/index.html](https://localhost:5001/swagger/index.html)


| 请求方式 | 路径             | 功能       |
| -------- | ---------------- | ---------- |
| HttpPost | /cms/file/upload | 单文件上传 |

直接可通过swagger选择文件后，输入key为0，执行Execute

```
{
  "key": "file_0",
  "path": "assets/2020/05/08/64263e57-9a24-4933-9116-25616c801e93.png",
  "url": "https://localhost:5001/assets/2020/05/08/64263e57-9a24-4933-9116-25616c801e93.png",
  "id": 19
}
```

 
 | 请求方式 | 路径      | 功能       |
 | -------- | --------- | ---------- |
 | HttpPost | /cms/file | 多文件上传 |

由于swagger-ui的规范，目前多文件无法正确显示，即时正常显示出选择多文件，后台却得不到请求的数据。。


我们通过postman上传多文件。


[![](https://pic.downk.cc/item/5ebaba6bc2a9a83be5afe50b.png)](https://pic.downk.cc/item/5ebaba6bc2a9a83be5afe50b.png)

由于上传了两个文件，因此我们得到了两个元素的数组，它们的结构如下：
```
[
    {
        "key": "file_0",
        "path": "assets/20200512234540511428.png",
        "url": "http://images.igeekfan.cn/assets/20200512234540511428.png",
        "id": 38
    },
    {
        "key": "file_1",
        "path": "assets/20200512234540321269.jpg",
        "url": "http://images.igeekfan.cn/assets/20200512234540321269.jpg",
        "id": 37
    }
]
```

| name | 说明                 | 类型   |
| ---- | -------------------- | ------ |
| key  | 文件上传的key        | string |
| id   | 文件存储到数据库的id | string |
| path | 文件存储的路径path   | string |
| url  | 可访问的 url         | string |

>TIP
>系统会自动帮助我们上传的文件做md5，因此你大可不必担心文件重复上传，如果你上传了 重复的文件，服务器会返回已传文件的数据。



## 其他特性

Kestrel是内置的ASP.NET Core的内置WEB服务器，是一个中间件，支持跨平台

1.运行示意：Internet---(通过HTTP访问)--->Kestrel(Kestrel WEB Server Port 5001)--内部HttpContext通过--->>访问到ApplicationCode

2. 在Internet到Kesterl中间加一个反向代理（nginx,iis,apache)


第一种方式，文件大小的配置与Kestrel有关。也和应用代码有关。

Kestrel默认的最大请求正文大小为 30,000,000 个字节，约为 28.6 MB.

在Program.cs中配置Kestrel的文件大小
```
webBuilder.ConfigureKestrel((context, options) =>
{
    //设置应用服务器Kestrel请求体最大为8MB
    
    options.Limits.MaxRequestBodySize = 1024*1024*8;
});
```

或者在StartUp中配置应用程序级别的设置
```
services.Configure<FormOptions>(options =>
{
    //单个文件上传的大小限制为8 MB      默认134217728 应该是128MB
    options.MultipartBodyLengthLimit = 1024 * 1024 * 8;     //8MB
});
```

如果部署在反向代理后，还与代理服务器有关。


## 文件上传其他配置项

- MaxFileSize:上传文件总大小,```1024*1024*80=83886080=80MB```
- NumLimit:上传文件总数量
- Include，允许某些类型文件上传,文件格式以,隔开
- Exclude：禁止某些类型文件上传，文件格式以,隔开
```
"FileStorage": {
    "MaxFileSize": 83886080,
    "NumLimit": 3,
    "Include": "",
    "Exclude": ".exe,.dll",
}
```

**exclude**和**include**这两项配置，默认情况下，这两者只会有一 项生效；若这二者中有一项为空，则另一项不为空的配置会生效；如果两项皆为空的话，会 通过所有文件类型；如果二者都不为空，则**include**为有效配置，而exclude会失效；总 而言之，系统只会支持使用一项，二者都为为空的情况下，则通过所有文件类型。


完整配置项

```
 "FileStorage": {
    "MaxFileSize": 83886080,
    "NumLimit": 3,
    "Include": ".png,.jpg",
    "Exclude": ".exe,.dll",
    "ServiceName": "LocalFileService",//LocalFileService、QiniuService
    "LocalFile":{
      "PrefixPath": "assets",
      "Host": "https://localhost:5001/"
    },
    "Qiniu": {
      "AK": "eUH1O-ft66S4XM2GIK7FGmj7czuYkcAyNGDAc-wq",
      "SK": "4dOi1daSr2-YgofhAfWb8JaLrbgozCmgD6AUmmM9",
      "Bucket": "vvv",
      "PrefixPath": "assets",
      "Host": "http://images.igeekfan.cn/",
      "UseHttps": false
    }
  },
```



- 官网 https://docs.microsoft.com/zh-cn/aspnet/core/mvc/models/file-uploads?view=aspnetcore-3.1