# Localization 本地化

## IGeekFan.Localization.FreeSql

基于数据库存储的本地化，可以让你的程序支持多语言，会创建二个表。

## LocalCulture(本地化语言)

|类型|名称|长度|
|---|---|---|
|long | Id |11|
|string | Name |50|
|string |DisplayName |50|

## LocalResource(资源)

|类型|名称|长度|
|---|---|---|
|long | Id |11|
|string | Key |50|
|string |Value |500|
|long |CultureId |11|

可支持自定义长度，通过FluentAPI进行设置

## 安装包

```bash
dotnet add package IGeekFan.Localization.FreeSql
dotnet add package FreeSql.Provider.Sqlite
```

## 配置FreeSql服务

- 定义扩展方法

```csharp
public static IServiceCollection AddFreeSql(this IServiceCollection services, IConfiguration c)
{
    IFreeSql fsql = new FreeSqlBuilder()
                .UseConnectionString(DataType.Sqlite, c["ConnectionStrings:DefaultConnection"])
                .UseAutoSyncStructure(true)
                .UseNameConvert(NameConvertType.PascalCaseToUnderscoreWithLower)
                .UseMonitorCommand(
                    cmd => Trace.WriteLine("\r\n线程" + Thread.CurrentThread.ManagedThreadId + ": " + cmd.CommandText)
                ).Build();

    services.AddSingleton(fsql);

    return services;
}
```

- appsettings.json

```json
  "ConnectionStrings": {
    "DefaultConnection": "Data Source=|DataDirectory|\\web.db;"
  }
```

- Program.cs配置服务

```csharp
builder.Services.AddFreeSql(c);
```

## 替换默认的IStringLocalizerFactory

```csharp
builder.Services.AddSingleton<IStringLocalizerFactory, FreeSqlStringLocalizerFactory>(); 
builder.Services.TryAddTransient(typeof(IStringLocalizer<>), typeof(StringLocalizer<>));
```

## 中间件引用

```csharp
var supportedCultures = new List<CultureInfo>
{
    new("en-US"),
    new("ja-JP"),
    new("fr-FR"),
    new("zh-CN")
};
var options = new RequestLocalizationOptions
{
    DefaultRequestCulture = new RequestCulture("zh-CN"),
    SupportedCultures = supportedCultures,
    SupportedUICultures = supportedCultures
};
app.UseRequestLocalization(options);
```

## 增加一些默认数据

```csharp
 public static class CodeFirstExtension
    {
        public static ICodeFirst SeedData(this ICodeFirst @this)
        {
            @this.Entity<LocalCulture>(e =>
            {
                e.HasData(new List<LocalCulture>()
                    {
                        new("en-US","en-US") ,
                        new("ja-JP","ja-JP")
                        {
                            Resources=new List<LocalResource>()
                            {
                                new("Hello","こんにちは"),
                                new("Request Localization Sample","リクエストローカライズ"),
                            }
                        },
                        new("fr-FR","fr-FR")
                        {
                            Resources=new List<LocalResource>()
                            {
                                new("Hello","Bonjour"),
                                new("Request Localization Sample","Demander un échantillon localisé"),
                            }
                        },
                        new("zh-CN","中文")
                        {
                            Resources=new List<LocalResource>()
                            {
                                new("Hello","你好"),
                                new("Request Localization Sample","请求资源示例"),
                            }
                        }
                    });
            });
            return @this;
        }
    }
```

在fsql定义中增加此方法的引用

```diff
+ fsql.CodeFirst.SeedData();
services.AddSingleton(fsql);
```

```csharp
[Route("[controller]/[action]")]
public class CultureController : Controller
{      
    private readonly ILogger<CultureController> _logger;
    private readonly IStringLocalizer<CultureController> _stringLocalizer;

    public CultureController(ILogger<CultureController> logger, IStringLocalizer<CultureController> stringLocalizer)
    {
        _logger = logger;
        _stringLocalizer = stringLocalizer;
    }
    
    [HttpGet]
    public string Hello()
    {
        return _stringLocalizer["Hello"];
    } 
}
```

- <https://localhost:7273/Culture/Hello?culture=en-US&ui-culture=en-US>
- <https://localhost:7273/Culture/Hello?culture=zh-CN&ui-culture=zh-CN>
