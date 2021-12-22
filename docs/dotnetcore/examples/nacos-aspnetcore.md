# Nacos配置中心

`nacos` 是一个构建云原生应用的动态服务发现、配置管理和服务管理平台。。

## 配置管理
asp.net core中所有的配置项，如appsetting.json进行集中管理,支持热加载，支持服务发现。

- nacos github [https://github.com/alibaba/nacos](https://github.com/alibaba/nacos)
- csharp sdk github [https://github.com/nacos-group/nacos-sdk-csharp](https://github.com/nacos-group/nacos-sdk-csharp)
- csharp sdk 文档：[https://nacos-sdk-csharp.readthedocs.io/en/latest/introduction/gettingstarted.html](https://nacos-sdk-csharp.readthedocs.io/en/latest/introduction/gettingstarted.html)
- [https://nacos.io/zh-cn/](https://nacos.io/zh-cn/)

安装请参考：[https://nacos.io/zh-cn/docs/quick-start.html](https://nacos.io/zh-cn/docs/quick-start.html)

### 开始

- windows 进入nacos的bin目录，或把目录 `D:\work\tools\nacos\bin`（我本地）配置到环境变量中的Path中。

即可在任意位置，执行命令
```bash
startup.cmd -m standalone
```

- standalone代表着单机模式运行，非集群模式

```
C:\WINDOWS\system32>startup.cmd -m standalone
"nacos is starting with standalone"

         ,--.
       ,--.'|
   ,--,:  : |                                           Nacos 2.0.3
,`--.'`|  ' :                       ,---.               Running in stand alone mode, All function modules
|   :  :  | |                      '   ,'\   .--.--.    Port: 8848
:   |   \ | :  ,--.--.     ,---.  /   /   | /  /    '   Pid: 14504
|   : '  '; | /       \   /     \.   ; ,. :|  :  /`./   Console: http://192.168.0.10:8848/nacos/index.html
'   ' ;.    ;.--.  .-. | /    / ''   | |: :|  :  ;_
|   | | \   | \__\/: . ..    ' / '   | .; : \  \    `.      https://nacos.io
'   : |  ; .' ," .--.; |'   ; :__|   :    |  `----.   \
|   | '`--'  /  /  ,.  |'   | '.'|\   \  /  /  /`--'  /
'   : |     ;  :   .'   \   :    : `----'  '--'.     /
;   |.'     |  ,     .-./\   \  /            `--'---'
'---'        `--`---'     `----'

```
默认运行在8848端口
- http://localhost:8848/nacos/#/login
- nacos
- nacos

## 必做
登录后，打开**命名空间**->新建命名空间->
- ` 命名空间ID`:这里填，`cs-test`，注意下方的配置项Namespace请填写此值。
- `命名空间名：`这个只是用于展示区分，填`cs-test`，建议直接和命名空间id相同即可。
- `描述：`:这个随便填


## Nacos+Console
新建一个控制台项目

引入包
```
<PackageReference Include="Microsoft.Extensions.Hosting" Version="6.0.0" />
<PackageReference Include="nacos-sdk-csharp" Version="1.2.2" />
```

```csharp
static IHost AppStartup()
{
    var host = Host.CreateDefaultBuilder()
                .ConfigureServices((context, services) =>
                {
                    ConfigureServices(context, services);
                    services.AddTransient<App>();
                })
                .ConfigureAppConfiguration((host, config) =>
                {

                })
                .Build(); // Build the Host

    return host;
}

```

配置`nacos`的服务
```csharp
static void ConfigureServices(HostBuilderContext context,IServiceCollection services)
{
    services.AddNacosV2Config(x =>
    {
        x.ServerAddresses = new System.Collections.Generic.List<string> { "http://localhost:8848/" };
        x.EndPoint = "";
        x.Namespace = "cs-test";

        /*x.UserName = "nacos";
       x.Password = "nacos";*/

        // swich to use http or rpc
        x.ConfigUseRpc = true;
    });

    services.AddNacosV2Naming(x =>
    {
        x.ServerAddresses = new System.Collections.Generic.List<string> { "http://localhost:8848/" };
        x.EndPoint = "";
        x.Namespace = "cs-test";

        /*x.UserName = "nacos";
       x.Password = "nacos";*/

        // swich to use http or rpc
        x.NamingUseRpc = true;
    });
}
```

调用 
```csharp
var host = AppStartup();
var service = ActivatorUtilities.CreateInstance<App>(host.Services);
await service.RunAsync(args);
```
App.cs文件配置

```csharp
public class App
{
    private readonly ILogger<App> _logger;
    private readonly INacosConfigService _ns;
    public App(ILogger<App> logger, INacosConfigService ns)
    {
        _logger = logger;
        _ns = ns;
    }

    public async Task RunAsync(string[] args)
    {
        await PublishConfig(_ns);
        await GetConfig(_ns);
        await RemoveConfig(_ns);
    }

    static async Task PublishConfig(INacosConfigService svc)
    {
        var dataId = "demo-dateid";
        var group = "demo-group";
        var val = "test-value-" + DateTimeOffset.Now.ToUnixTimeSeconds().ToString();

        await Task.Delay(500);
        var flag = await svc.PublishConfig(dataId, group, val);
        Console.WriteLine($"======================发布配置结果，{flag}");
    }

    static async Task GetConfig(INacosConfigService svc)
    {
        var dataId = "demo-dateid";
        var group = "demo-group";

        await Task.Delay(500);
        var config = await svc.GetConfig(dataId, group, 5000L);
        Console.WriteLine($"======================获取配置结果，{config}");
    }

    static async Task RemoveConfig(INacosConfigService svc)
    {
        var dataId = "demo-dateid";
        var group = "demo-group";

        await Task.Delay(500);
        var flag = await svc.RemoveConfig(dataId, group);
        Console.WriteLine($"=====================删除配置结果，{flag}");
    }
}

```

f5运行后可看到输出如下内容 

```
======================发布配置结果，True
======================获取配置结果，test-value-1637000754
=====================删除配置结果，True
```

我们把`await RemoveConfig(_ns);`这行删除，即可在nacos的网站上看到信息。

配置管理 -选`cs-test`,可以看到`Data Id为demo-dateid`，`Group`为`demo-group`的一行数据，点击行内的编辑即可看到具体信息。


## Nacso+Asp.NET Core

新增包
```xml
<PackageReference Include="nacos-sdk-csharp.AspNetCore" Version="1.2.2" />
<PackageReference Include="nacos-sdk-csharp.Extensions.Configuration" Version="1.2.2" />
```

在Program中配置服务
```csharp
builder.Host.ConfigureAppConfiguration((context, builder) =>
        {
            var c = builder.Build();

            // 从配置文件读取Nacos相关配置
            // 默认会使用JSON解析器来解析存在Nacos Server的配置
            builder.AddNacosV2Configuration(c.GetSection("NacosConfig"));
            // 也可以按需使用ini或yaml的解析器
            // builder.AddNacosV2Configuration(c.GetSection("NacosConfig"), Nacos.IniParser.IniConfigurationStringParser.Instance);
            // builder.AddNacosV2Configuration(c.GetSection("NacosConfig"), Nacos.YamlParser.YamlConfigurationStringParser.Instance);
        });
```


`appsetting.json`配置

```json
{
    "NacosConfig": {
        "Listeners": [
            {
                "Optional": false,
                "DataId": "common",
                "Group": "DEFAULT_GROUP"
            },
            {
                "Optional": false,
                "DataId": "demo",
                "Group": "DEFAULT_GROUP"
            }
        ],
        "Namespace": "cs-test",
        "ServerAddresses": [
            "http://localhost:8848/"
        ],
        "UserName": "nacos",
        "Password": "nacos",
        "AccessKey": "",
        "SecretKey": "",
        "EndPoint": "",
        "ConfigFilterAssemblies": [
        ],
        "ConfigFilterExtInfo": ""
    }
}
```
在上面我们可以看到`DataId`为`common`的、我们去管理端UI，命名空间为`cs-test`新增一个配置

新增二个配置项

- Data ID:common
- Group:DEFAULT_GROUP
- 配置内容：选择json。
```json
{
    "UserInfo":{
        "Name":"luo",
        "Sex":"Boy",
        "Age":99
    },
    "commonkey":"commonkey_value_值"
}
```

- Data ID:demo
- Group:DEFAULT_GROUP
- 配置内容：选择json。
```json
{
    "demokey":"demo_value_值"
}
```

那我们如何获取的这么一个json值和demokey中的值呢。

我们新增一个类
```csharp
    public class UserInfo
    {
        public string Name { get; set; }
        public string Sex { get; set; }
        public int Age { get; set; }
    }
```

在默认的控制器注入 `IConfiguration`,像从appsettings.json中获取数据一样，可直接取出来。
```csharp
    private readonly ILogger<ConfigController> _logger;
    private readonly IConfiguration _configuration;

    public ConfigController(ILogger<WeatherForecastController> logger, IConfiguration configuration)
    {
        _logger = logger;
        _configuration = configuration;
    }

    [HttpGet("getconfig")]
    public UserInfo GetConfig()
    {
        var userInfo1 = _configuration.GetSection("UserInfo").Get<UserInfo>();
        var commonvalue = _configuration["commonkey"];
        var demovalue = _configuration["demokey"];
        _logger.LogInformation("commonkey:" + commonvalue);
        _logger.LogInformation("demokey:" + demovalue);
        return userInfo1;
    }
```

会输出如下内容
```log
info: NacosApi.Controllers.WeatherForecastController[0]
      commonkey:commonkey_value_值
info: NacosApi.Controllers.WeatherForecastController[0]
      demokey:demo_value_值
```
并在界面上返回 UserInfo的信息。
```json
{
  "name": "luo",
  "sex": "Boy",
  "age": 99
}
```
#### 注意
- 当二个`DataId`中配置的json,包含相同的Key时，实际会依后面的Key中值为准。顺序以appsetting.json中的配置Listeners的数组顺序为依据。


当然我们通过强类型绑定`UserInfo`,在`Program`配置服务
```csharp
builder.Services.Configure<UserInfo>(builder.Configuration.GetSection("UserInfo"));
```


```csharp
public ConfigController(ILogger<ConfigController> logger,
        IConfiguration configuration,
        IOptions<UserInfo> options1,
        IOptionsSnapshot<UserInfo> options2,
        IOptionsMonitor<UserInfo> options3
    )
{
    _logger = logger;
    _configuration = configuration;
    _user1 = options1.Value;
    _user2 = options2.Value;
    _user3 = options3.CurrentValue;
}

[HttpGet]
public string Get()
{
    string id = Guid.NewGuid().ToString("N");

    _logger.LogInformation($"============== begin {id} =====================");

    var str1 = Newtonsoft.Json.JsonConvert.SerializeObject(_user1);
    _logger.LogInformation($"{id} IOptions = {str1}");

    var str2 = Newtonsoft.Json.JsonConvert.SerializeObject(_user2);
    _logger.LogInformation($"{id} IOptionsSnapshot = {str2}");

    var str3 = Newtonsoft.Json.JsonConvert.SerializeObject(_user3);
    _logger.LogInformation($"{id} IOptionsMonitor = {str3}");

    _logger.LogInformation($"===============================================");

    return "ok";
}
```

当然输出是一模一样的。我们在界面上再次调整下数据
```log
info: NacosApi.Controllers.ConfigController[0]
      7bafb7f9cd2a46ec95324e38d01048aa IOptions = {"Name":"luo","Sex":"Boy","Age":99}
info: NacosApi.Controllers.ConfigController[0]
      7bafb7f9cd2a46ec95324e38d01048aa IOptionsSnapshot = {"Name":"luo","Sex":"Boy","Age":99}
info: NacosApi.Controllers.ConfigController[0]
      7bafb7f9cd2a46ec95324e38d01048aa IOptionsMonitor = {"Name":"luo","Sex":"Boy","Age":99}
```

只有`IOptions<UserInfo>`不会变化，其他是会跟着变化的。
```log
info: NacosApi.Controllers.ConfigController[0]
      604d8db7b0ad48ccbc64c3ccd06eb524 IOptions = {"Name":"luo","Sex":"Boy","Age":99}
info: NacosApi.Controllers.ConfigController[0]
      604d8db7b0ad48ccbc64c3ccd06eb524 IOptionsSnapshot = {"Name":"abc","Sex":"Boy","Age":99}
info: NacosApi.Controllers.ConfigController[0]
      604d8db7b0ad48ccbc64c3ccd06eb524 IOptionsMonitor = {"Name":"abc","Sex":"Boy","Age":99}
```


## Docker 安装 Nacos
- [https://www.cnblogs.com/niunafei/p/12803965.html](https://www.cnblogs.com/niunafei/p/12803965.html)

1.拉取镜像
```
docker pull nacos/nacos-server
```

2、创建本地的映射文件，application.properties，
```
mkdir -p  /root/nacos/logs /root/nacos/conf
```

配置数据库
```
vim /root/nacos/conf/application.properties
```
- application.properties
```
spring.datasource.platform=mysql
db.num=1
db.url.0=jdbc:mysql://ip:3306/nacos_config?characterEncoding=utf8&connectTimeout=1000&socketTimeout=3000&autoReconnect=true
db.user=userid
db.password=userpassword

```
下面通过配置来暴露除了/shutdown之外的所有端点。下面通过配置来暴露除了/shutdown之外的所有端点
```
management.endpoints.web.exposure.include=*
```

运行容器：使用`standalone`模式并开放8848端口，并映射配置文件和日志目录，数据库在application.properties中配置
```docker
docker run -d -p 8848:8848 -p 9848:9848 -p 9555:9555 -e MODE=standalone -e PREFER_HOST_MODE=hostname -v /root/nacos/logs:/home/nacos/logs -v /root/nacos/conf/application.properties:/home/nacos/conf/application.properties --restart always --name nacos nacos/nacos-server
```

其中-v 指定映射配置。左侧为linux文件，右侧为docker目录 



### 更多指令

启动容器
```
docker start 容器id
或者
docker start nacos
```
关闭容器
```
docker stop nacos
```

## 博客
- [聊一聊如何在.NET Core中使用Nacos 2.0](https://mp.weixin.qq.com/s/iC6lFJJsHUFUveSJhoZxgA)
