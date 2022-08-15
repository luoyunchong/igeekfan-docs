# Extras 扩展包

该项目是基于 FreeSql 实现的一些扩展包、AOP 事务，当前用户，简化依赖注入

## IGeekFan.FreeKit.Extras的依赖项

- FreeSql.DbContext
- Autofac.Extensions.DependencyInjection
- Autofac.Extras.DynamicProxy
- Castle.Core.AsyncInterceptor

根据自己访问数据库的不同，安装FreeSql对应的[Provider](http://freesql.net/guide/install.html#packages)

```bash
dotnet add package IGeekFan.FreeKit.Extras
dotnet add package FreeSql.Provider.Sqlite
```

## 一些扩展包

- 审计类
- 简化 FreeSql 单库的配置：UseConnectionString 扩展方法
- 基于特性标签的 AOP 事务
- 基于接口的注入
- Security 当前登录人信息
- 注入以 Service 为后缀接口所在的程序集
- CaseQuery 支持 Get 请求参数 key，大小驼峰转换
- 基于审计类的FreeSql仓储
- 复合主键仓储

### 审计类

- `Entity<T>`、`Entity`，仅主键的实体类型,其中T为主键类型
- `FullAuditEntity<T, U>` 包含审计实体基类,包含**创建、修改、删除**加主键等10个字段，其实T为当前主键类型，U为用户表主键类型

### 简化 FreeSql 单库的配置

UseConnectionString 扩展方法，DefaultDB 配置 4 代表使用配置串 MySql。需要安装`FreeSql.Provider.Sqlite`,`DefaultDB`配置的值实际为`FreeSql.DataType`的枚举值

- appsettings.json

```json
"ConnectionStrings": {
    "DefaultDB": "4",
    "DataType": {
        "MySql": 0,
        "SqlServer": 1,
        "PostgreSQL": 2,
        "Oracle": 3,
        "Sqlite": 4
     },
    "MySql": "Data Source=localhost;Port=3306;User ID=root;Password=root;Initial Catalog=freekit;Charset=utf8mb4;SslMode=none;Max pool size=1;Connection LifeTime=20",
    "SqlServer": "Data Source=.;User ID=sa;Password=123456;Integrated Security=True;Initial Catalog=LinCMS;Pooling=true;Min Pool Size=1",
    "PostgreSQL": "Host=localhost;Port=5432;Username=postgres;Password=123456; Database=lincms;Pooling=true;Minimum Pool Size=1",
    "Oracle": "user id=user1;password=123456; data source=//127.0.0.1:1521/ORCL;Pooling=true;Min Pool Size=1",
    "Sqlite": "Data Source=|DataDirectory|/freekit.db; Attachs=freekit.db; Pooling=true;Min Pool Size=1"
    }
```

```csharp
    public static IServiceCollection AddFreeSql(this IServiceCollection services, IConfiguration c)
    {
        IFreeSql fsql = new FreeSqlBuilder()
                  .UseConnectionString(c)
                  .UseNameConvert(NameConvertType.PascalCaseToUnderscoreWithLower)
                  .UseAutoSyncStructure(true) //自动同步实体结构到数据库，FreeSql不会扫描程序集，只有CRUD时才会生成表。
                  .UseMonitorCommand(cmd =>
                  {
                      Trace.WriteLine(cmd.CommandText + ";");
                  })
                  .Build();

        //fsql.GlobalFilter.Apply<ISoftDelete>("IsDeleted", a => a.IsDeleted == false);

        services.AddSingleton<IFreeSql>(fsql);
        services.AddFreeRepository();
        services.AddScoped<UnitOfWorkManager>();

        return services;
    }
```

### 基于特性标签的 AOP 事务

该特性支持以Service为后缀的方法，并且需要继承接口

- 特性标签 **[Transactional]**
- `Propagation` 事务传播方式
  - Required  如果当前没有事务，就新建一个事务，如果已存在一个事务中，加入到这个事务中，默认的选择。
  - Supports 支持当前事务，如果没有当前事务，就以非事务方法执行
  - Mandatory 使用当前事务，如果没有当前事务，就抛出异常。
  - NotSupported 以非事务方式执行操作，如果当前存在事务，就把当前事务挂起。
  - Never 以非事务方式执行操作，如果当前事务存在则抛出异常。
  - Nested 以嵌套事务方式执行
- `IsolationLevel` 事务隔离级别（默认为ReadCommitted）
  - ReadUncommitted 该事务可以读取还未被别的事务提交的数据（脏读）
  - ReadCommitted  (sql server的默认隔离) 事务只可读取到别的事务中已经被提交的(Committed)数据，避免了"脏读"
  - RepeatableRead  (InnoDB 的默认隔离级别) 为了保证多次读取数据的一致性，解决不可重复读(non-repeatable reads)
  - Serializable 为了解决"幻读"(Phantom reads)问题

- 配置默认的事务级别（可不配置）

```csharp
builder.Services.Configure<UnitOfWorkDefualtOptions>(c =>
{
    c.IsolationLevel=System.Data.IsolationLevel.ReadCommitted;//（默认为null时未指定时，依旧为null，根据数据库的事务隔离级别）
    c.Propagation = Propagation.Required;//（默认为null时未指定时，则指定Required）
});
```

|数据库|默认隔离级别|
|---|---|
|Oracle| read committed|
|SqlServer| read committed|
|MySQL(InnoDB)|Read-Repeatable|

通过 Autofac 配置哪些类需要基于特性标签的 AOP 事务

```csharp
public interface IGroupService
{
    Task DeleteAsync(long id);
}
public class GroupService : IGroupService
{
    private readonly IBaseRepository<LinGroup, long> _groupRepository;
    private readonly IBaseRepository<LinGroupPermission, long> _groupPermissionRepository;

    public GroupService(IBaseRepository<LinGroup, long> groupRepository,IBaseRepository<LinGroupPermission, long> groupPermissionRepository)
    {
        _groupRepository = groupRepository;
        _groupPermissionRepository = groupPermissionRepository;
    }
    /// <summary>
    /// 删除group拥有的权限、删除group表的数据
    /// </summary>
    /// <param name="id"></param>
    /// <returns></returns>
    [Transactional]
    public async Task DeleteAsync(long id)
    {
        await _groupRepository.DeleteAsync(id);
        await _groupPermissionRepository.DeleteAsync(r => r.GroupId == id);
    }
}
```

如果依旧是 Startup 的模式，可通过 ConfigureContainer 配置服务，其中`ServiceModule`是一个Autofac的Module，此外为Demo

- Program.cs 配置

```csharp
    Host.CreateDefaultBuilder(args)
                .UseServiceProviderFactory(new AutofacServiceProviderFactory())
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
```

- Startup.cs 配置

```csharp
    public void ConfigureContainer(ContainerBuilder builder)
    {
           Assembly[] currentAssemblies = AppDomain.CurrentDomain.GetAssemblies().Where(r =>
r.FullName.Contains("IGeekFan.FreeKit.Extras")||
r.FullName.Contains("Module1")
).ToArray();
        builder.RegisterModule(new UnitOfWorkModule(currentAssemblies));
    }
```

.NET6 配置Autofac服务

```csharp
builder.Host
    .UseServiceProviderFactory(new AutofacServiceProviderFactory())
    .ConfigureContainer<ContainerBuilder>((webBuilder, containerBuilder) =>
    {
           Assembly[] currentAssemblies = AppDomain.CurrentDomain.GetAssemblies().Where(r =>
r.FullName.Contains("IGeekFan.FreeKit.Extras")||
r.FullName.Contains("Module1")
).ToArray();
        builder.RegisterModule(new UnitOfWorkModule(currentAssemblies));
    });
```

### 基于接口的注入

只需要继承如下接口，会自动按照对应的生命周期注入到 DI 中。

- IScopedDependency 范围
- ISingletonDependency 单例
- ITransientDependency 瞬时

```csharp
namespace Module1
{
    public interface ITestService : ITransientDependency
    {
        bool ExecuteConnectTest();
    }
}

namespace Module1
{
    public class TestService : ITestService
    {
        private readonly IFreeSql _fsql;
        public TestService(IFreeSql fsql)
        {
            _fsql = fsql;
        }

        public bool ExecuteConnectTest()
        {
            return _fsql.Ado.ExecuteConnectTest();
        }
    }
}

public class TestController : Controller
{
    ILogger<TestController> logger;
    private readonly ITestService testService;

    public TestController(ILogger<TestController> logger, ITestService testService)
    {
        this.logger = logger;
        this.testService = testService;
    }

    [HttpGet("ExecuteConnectTest")]
    public ActionResult<bool> ExecuteConnectTest()
    {
        return testService.ExecuteConnectTest();
    }
}

```

1.获取所有的程序集合，然后根据 FullName，一般为项目名，过滤具体的程序集

```csharp
builder.Host
    .UseServiceProviderFactory(new AutofacServiceProviderFactory())
    .ConfigureContainer<ContainerBuilder>((webBuilder, containerBuilder) =>
    {
        Assembly[] currentAssemblies = AppDomain.CurrentDomain.GetAssemblies().Where(r =>
r.FullName.Contains("IGeekFan.FreeKit.Extras")||
r.FullName.Contains("Module1")
).ToArray();

        containerBuilder.RegisterModule(new FreeKitModule(currentAssemblies));
    });
```

其中`FreeKitModule`的参数支持`params Type[]types`或`params Assembly[]assemblies`,即哪些[程序集](https://docs.microsoft.com/zh-cn/dotnet/standard/assembly/)中的类需要注入到依赖注入的集合中。

2.根据程序集中的某个类获取程序集

```csharp
Assembly[] currentAssemblies2 = new Assembly[] { typeof(FreeKitModule).Assembly, typeof(Module1.Module1Startup).Assembly };
containerBuilder.RegisterModule(new FreeKitModule(currentAssemblies2));
```

3.直接使用 params Assembly[] 的特性，直接作为 FreeKitModule 的参数

```csharp
containerBuilder.RegisterModule(new FreeKitModule( typeof(FreeKitModule).Assembly, typeof(Program).Assembly))
```

4，通过 params Type[]，内部解析 Assembly。

```csharp
containerBuilder.RegisterModule(new FreeKitModule(typeof(FreeKitModule), typeof(Program)))
```

其中，此程序集中的类 如果继承了`IScopedDependency`,`ISingletonDependency`、`ITransientDependency`这些接口， 都会按照对应的生命周期注入到依赖注入的集合中 ，可直接使用。

### CurrentUser 当前登录人信息

如何使用，先注入`IHttpContextAccessor`

```csharp
    services.AddHttpContextAccessor();
```

因为我们无法确定用户 Id 的类型，可能是`long`,也可能是`Guid`，ICurrentUser\<T\>是泛型的，默认有一个实现`ICurrentUser:ICurrentUser<string>`,所以通过 `ICurrentUser`，默认Id为string?类型，如果想改变类型，可使用`ICurrentUser`接口`FindUserIdToLong`扩展方法，获取`long?`类型的用户`Id`,或使用`ICurrentUser`接口`FindUserIdToGuid`的扩展方法

此接口定义如下继承了`ITransientDependency`,所以他是瞬时

```csharp
public interface ICurrentUser<T> : ITransientDependency
{
    /// <summary>
    /// 是否登录
    /// </summary>
    bool IsAuthenticated { get; }

    /// <summary>
    /// 用户Id
    /// </summary>
    T? Id { get; }

    /// <summary>
    /// 登录名，用户名，唯一值
    /// </summary>
    string UserName { get; }

    /// <summary>
    /// 昵称
    /// </summary>
    string? NickName { get; }

    /// <summary>
    /// 邮件
    /// </summary>
    string? Email { get; }

    /// <summary>
    /// 角色
    /// </summary>
    string[] Roles { get; }

    Claim FindClaim(string claimType);

    Claim[] FindClaims(string claimType);

    Claim[] GetAllClaims();

    bool IsInRole(string roleId);
}
```

当然可增加一个扩展方法，用于不确定主键类型,所有的方法都调用此方法，需要更改类型，则只用更改此方法即可,比如如果用户Id类型是int类型，可自行创建此扩展类进行处理

```csharp
public static class Extensions
｛
    public static int? FindUserId(this ICurrentUser currentUser)
    {
        if (currentUser.Id == null) return null;
        return int.Parse(currentUser.Id);
    }
}
```

### 实体审计类

- FullAuditEntity

### CaseQuery 支持 Get 请求参数 key，大小驼峰转换

`HttpGet`请求时，参数的 key 和实体相同，比如创建如下类。

```csharp
public class QueryModel
{
    public string Title { get; set; }
    public string UserName { get; set; }
}
```

```csharp
[HttpGet]
public IEnumerable<WeatherForecast> Get([FromQuery] QueryModel queryModel)
{
    return null;
}
```

在 swagger 下就会生成如下内容

![DefaultQueryValue](./images/DefaultQueryValue.png)
如果实现，GET 请求参数的 key 转换呢。

### 查询参数转换支持

- SnakeCase（下划线写法）
- LowerCase（小写）
- CamelCase（首字母小写）

- 使用方式

在 AddControllers 中注入实现

```csharp
    services.AddControllers(options =>
    {
        options.ValueProviderFactories.Add(new CamelCaseValueProviderFactory());
    });
```

swagger 渲染需要替换 provider

```csharp
    services.TryAddEnumerable(ServiceDescriptor.Transient<IApiDescriptionProvider, CamelCaseApiDescriptionProvider>());
```

![CamelCaseValueProviderFactory](./images/CamelCaseValueProviderFactory.png)

其中支持的 Factory 如下

- SnakeCaseValueProviderFactory（下划线写法）
- LowerCaseValueProviderFactory（小写）
- CamelCaseValueProviderFactory（首字母小写）

Provider 支持如下

- SnakeApiDescriptionProvider（下划线写法）
- LowerApiDescriptionProvider（小写）
- CamelCaseApiDescriptionProvider（首字母小写）

### 基于审计类的FreeSql仓储

`IAuditBaseRepository<TEntity, TKey>`、`IAuditBaseRepository<TEntity>`

什么是实体审计：记录修改实体的时间，修改实体的用户，创建人，创建的时间，删除人，删除时间等

```csharp
services.AddCurrentUser().AddAuditRepostiory();
```

`AddAuditRepostiory`支持配置用户表的主键类型,默认为Guid,可指定类型，比如`AddAuditRepostiory(typeof(Long))`,

用户表主键类型支持情况

- Guid
- Long
- Int

- 定义实体类

```csharp
public class Todo : FullAuditEntity
{
    public string Message { get; set; }
    public DateTime? NotifictionTime { get; set; }
    public bool IsDone { get; set; }
}
```

- AuditRepositoryTest

```csharp
public class AuditRepositoryTest
{
    private readonly IAuditBaseRepository<Todo> _repository;

    public AuditRepositoryTest(IAuditBaseRepository<Todo> repository)
    {
        _repository = repository;
    }

    [Fact]
    public void InsertEntityListTest()
    {
        var list = new List<Todo>()
        {
            new Todo {Message = "这是一个要完成的TODO______1", NotifictionTime = null, IsDone = false},
            new Todo {Message = "这是一个要完成的TODO______2", NotifictionTime = null, IsDone = false}
        };
        _repository.Insert(list);
        _repository.Delete(list);
    }
}
```

```sql
INSERT INTO "Todo"("Id", "CreateUserId", "CreateUserName", "CreateTime", "UpdateUserId", "UpdateUserName", "UpdateTime", "DeleteUserId", "DeleteUserName", "DeleteTime", "IsDeleted", "Message", "NotifictionTime", "IsDone") VALUES('62eeeb97-ab46-67ec-00be-3ffb646bebab', 'f56b95fa-3f6c-4b75-a597-b1a7dd032516', 'Name', '2022-08-06 22:30:45', 'f56b95fa-3f6c-4b75-a597-b1a7dd032516', 'Name', '2022-08-06 22:30:45', NULL, NULL, NULL, 0, '这是一个要完成的TODO______1', NULL, 0), ('62eeeb97-ab46-67ec-00be-3ffc4461ef3c', 'f56b95fa-3f6c-4b75-a597-b1a7dd032516', 'Name', '2022-08-06 22:30:47', 'f56b95fa-3f6c-4b75-a597-b1a7dd032516', 'Name', '2022-08-06 22:30:47', NULL, NULL, NULL, 0, '这是一个要完成的TODO______2', NULL, 0)

UPDATE "Todo" SET "DeleteUserId" = CASE "Id" 
WHEN '62eeeb97-ab46-67ec-00be-3ffb646bebab' THEN 'f56b95fa-3f6c-4b75-a597-b1a7dd032516' 
WHEN '62eeeb97-ab46-67ec-00be-3ffc4461ef3c' THEN 'f56b95fa-3f6c-4b75-a597-b1a7dd032516' END, "DeleteUserName" = CASE "Id" 
WHEN '62eeeb97-ab46-67ec-00be-3ffb646bebab' THEN 'Name' 
WHEN '62eeeb97-ab46-67ec-00be-3ffc4461ef3c' THEN 'Name' END, "DeleteTime" = CASE "Id" 
WHEN '62eeeb97-ab46-67ec-00be-3ffb646bebab' THEN '2022-08-06 22:30:47' 
WHEN '62eeeb97-ab46-67ec-00be-3ffc4461ef3c' THEN '2022-08-06 22:30:47' END, "IsDeleted" = CASE "Id" 
WHEN '62eeeb97-ab46-67ec-00be-3ffb646bebab' THEN 1 
WHEN '62eeeb97-ab46-67ec-00be-3ffc4461ef3c' THEN 1 END 
WHERE ("Id" IN ('62eeeb97-ab46-67ec-00be-3ffb646bebab','62eeeb97-ab46-67ec-00be-3ffc4461ef3c')) AND ("IsDeleted" = 0)
```

### 复合主键仓储

- 配置服务

```csharp
services.AddCompositeRepostiory();
```

- 定义复合主键的类

```csharp
public class UserRole
{
    [Column(IsPrimary = true)]
    public int UserId { get; set; }
    [Column(IsPrimary = true)]
    public int RoleId { get; set; }
    public DateTime CreateTime { get; set; }
}
```

- 调用实例

```csharp
public class BaseRepositoryTest
{
    private readonly IBaseRepository<UserRole, int, int> _repository;
    public BaseRepositoryTest(IBaseRepository<UserRole, int, int> repository)
    {
        _repository = repository;
    }

    [Fact]
    public void GetTest()
    {
        _repository.Insert(new UserRole() { UserId = 1, RoleId = 1, CreateTime = DateTime.Now });
        UserRole userRole = _repository.Get(1, 1);
        _repository.Delete(1, 1);
    }
}
```

```sql
INSERT INTO "UserRole"("UserId", "RoleId", "CreateTime") VALUES(1, 1, '2022-08-06 22:33:02')

SELECT a."UserId", a."RoleId", a."CreateTime" 
FROM "UserRole" a 
WHERE (a."UserId" = 1 AND a."RoleId" = 1) 
limit 0,1

DELETE FROM "UserRole" WHERE ("UserId" = 1 AND "RoleId" = 1)
```
