# aspnetcore identity freesql实现

## IGeekFan.AspNetCore.Identity.FreeSql

是`asp.net core 6` 的`identity`的`freesql`的实现

- 支持.NET 6.0
- 安装包

```bash
dotnet add package IGeekFan.AspNetCore.Identity.FreeSql
```

- 新增 FreeSql的Provider 相关包

```bash
dotnet add package FreeSql.Provider.MySqlConnector
```

### 扩展用户、角色

```csharp
public class AppUser : IdentityUser<Guid>
{
}
public class AppRole : IdentityRole<Guid>
{

}
public class AppIdentityDbContext : IdentityDbContext<AppUser, AppRole, Guid>
{
    public AppIdentityDbContext(IOptions<IdentityOptions> identityOptions, IFreeSql fsql, DbContextOptions options)
    : base(identityOptions.Value, fsql, options)
    {
    }

    protected override void OnConfiguring(DbContextOptionsBuilder builder)
    {
        //这里直接指定一个静态的 IFreeSql 对象即可，切勿重新 Build()
    }

    protected override void OnModelCreating(ICodeFirst codefirst)
    {
        base.OnModelCreating(codefirst);
        codefirst.ApplyConfigurationsFromAssembly(typeof(AppUserConfiguration).Assembly);
    }
}

```

### 配置用户、角色的FulentAPI

```csharp
public class AppUserConfiguration : IEntityTypeConfiguration<AppUser>
{
    public void Configure(EfCoreTableFluent<AppUser> model)
    {
        model.ToTable("app_user");
    }
}
public class AppRoleConfiguration : IEntityTypeConfiguration<AppRole>
{
    public void Configure(EfCoreTableFluent<AppRole> model)
    {
        model.ToTable("app_role");
    }
}
```

- appsettings.json
  该配置通过方法`UseConnectionString`读取如下配置

```json
"ConnectionStrings": {
    "MySql": "Data Source=localhost;Port=3306;User ID=root;Password=root;Initial Catalog=file;Charset=utf8mb4;SslMode=none;Max pool size=1;Connection LifeTime=20"
}
```

### 配置 Identity+FreeSql

- 新增一个扩展方法，引用 aspnetcore identity 相关服务

```csharp
public static IServiceCollection AddFreeSql(this IServiceCollection services, IConfiguration configuration)
{
    IFreeSql fsql = new FreeSqlBuilder()
            .UseConnectionString(DataType.MySql, configuration["ConnectionStrings:MySql"])
            .UseNameConvert(NameConvertType.PascalCaseToUnderscoreWithLower)
            .UseAutoSyncStructure(true) //自动同步实体结构到数据库，FreeSql不会扫描程序集，只有CRUD时才会生成表。
            .UseMonitorCommand(cmd =>
            {
                Trace.WriteLine(cmd.CommandText + ";");
            })
            .Build();
    //软删除
    fsql.GlobalFilter.Apply<ISoftDelete>("IsDeleted", a => a.IsDeleted == false);

    services.AddSingleton<IFreeSql>(fsql);
    services.AddFreeRepository();
    services.AddScoped<UnitOfWorkManager>();

    //只有实例化了AppIdentityDbContext，才能正常调用OnModelCreating，不然直接使用仓储，无法调用DbContext中的OnModelCreating方法，，配置的AppUserConfiguration 就会没有生效
    services.AddFreeDbContext<AppIdentityDbContext>(options => options
                .UseFreeSql(fsql)
                .UseOptions(new DbContextOptions()
                {
                    EnableCascadeSave = true
                })
    );

    services.AddIdentityCore<AppUser>(o =>
            {
                o.SignIn.RequireConfirmedEmail = false;
                o.Stores.MaxLengthForKeys = 128;
            })
            .AddRoles<AppRole>()
            .AddSignInManager()
            .AddFreeSqlStores<AppIdentityDbContext>()
            .AddDefaultTokenProviders();;

    return services;
}
```

### 软删除

```csharp
public interface ISoftDelete
{
    bool IsDeleted { get; set; }
}
```

因为FreeSql只有运行时才会生成表,我们增加定义一个扩展方法

```csharp
/// <summary>
/// 获取一下Scope Service 以执行 DbContext中的OnModelCreating
/// </summary>
/// <param name="serviceProvider"></param>
public static void RunScopeService<T>(this IServiceProvider serviceProvider) where T : DbContext
{
    using var serviceScope = serviceProvider.CreateScope();
    try
    {
        using var myDependency = serviceScope.ServiceProvider.GetRequiredService<T>();
    }
    catch (Exception ex)
    {
        var logger = serviceScope.ServiceProvider.GetRequiredService<ILogger<Program>>();
        logger.LogError(ex, "An error occurred.");
    }
}
```

在`Program`中Build后，我们执行此方法，以保证DbContext中的OnModelCreating生效

```csharp
WebApplication app = builder.Build();
//自定义Scope 的Serivce 执行 DbContext中的OnModelCreating
app.Services.RunScopeService<IdentityFreeSqlContext>();
```
