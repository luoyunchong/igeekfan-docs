# aspnetcore identity freesql 的实现

## IGeekFan.AspNetCore.Identity.FreeSql

`asp.net core 6` 的`identity`的`freesql`实现

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
public class IdentityContext : IdentityDbContext<AppUser, AppRole, Guid>
{
    public IdentityContext(IOptions<IdentityOptions> identityOptions, IFreeSql fsql, DbContextOptions options)
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

    //只有实例化了ToDoContext，才能正常调用OnModelCreating，不然直接使用仓储，无法调用DbContext中的OnModelCreating方法，，配置的TodoConfiguration 就会没有生效
    services.AddFreeDbContext<IdentityContext>(options => options
                .UseFreeSql(fsql)
                .UseOptions(new DbContextOptions()
                {
                    EnableAddOrUpdateNavigateList = true
                })
    );

    services.AddIdentityCore<AppUser>(options => options.SignIn.RequireConfirmedAccount = true)
            .AddRoles<AppRole>()
            .AddSignInManager()
            .AddFreeSqlStores<IdentityContext>()
            .AddDefaultTokenProviders();;

    //fsql.CodeFirst.ApplyConfiguration(new TodoConfiguration());

    return services;
}
```
