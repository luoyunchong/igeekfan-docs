# AspNetCore Identity FreeSql的实现

## IGeekFan.AspNetCore.Identity.FreeSql

是`asp.net core 6` 的`identity`的`freesql`存储的实现

- 支持.NET 9.0
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
    public string FirstName { get; set; }
    public string LastName { get; set; }
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
        //批量
        //codefirst.ApplyConfigurationsFromAssembly(typeof(AppUserConfiguration).Assembly);
        codefirst.ApplyConfiguration(new AppUserConfiguration());
        codefirst.ApplyConfiguration(new AppRoleConfiguration());
    }
}

```

### 配置用户、角色的FulentAPI

```csharp
public class AppUserConfiguration : IEntityTypeConfiguration<AppUser>
{
    public void Configure(EfCoreTableFluent<AppUser> builder)
    {
        builder.Property(x => x.FirstName).HasMaxLength(50);
        builder.Property(x => x.LastName).HasMaxLength(50);
    }
}
public class AppRoleConfiguration : IEntityTypeConfiguration<AppRole>
{
    public void Configure(EfCoreTableFluent<AppRole> builder)
    {
    }
}
```

- appsettings.json
  该配置通过方法`UseConnectionString`读取如下配置

```json
"ConnectionStrings": {
    "MySql": "Data Source=localhost;Port=3306;User ID=root;Password=root;Initial Catalog=aspnetcoreidentity;Charset=utf8mb4;SslMode=none;Max pool size=1;Connection LifeTime=20"
}
```

### 配置 Identity+FreeSql

- 新增一个扩展方法，引用 aspnetcore identity 相关服务

```csharp
public static IServiceCollection AddFreeSqlIdentity(this IServiceCollection services, IConfiguration configuration)
{
    Func<IServiceProvider, IFreeSql> fsql = r =>
    {
        IFreeSql fsql = new FreeSqlBuilder()
                .UseConnectionString(DataType.MySql, configuration["ConnectionStrings:MySql"])
               //.UseNameConvert(NameConvertType.PascalCaseToUnderscoreWithLower)
                .UseAutoSyncStructure(true) //自动同步实体结构到数据库，FreeSql不会扫描程序集，只有CRUD时才会生成表。
                .UseMappingPriority(MappingPriorityType.FluentApi, MappingPriorityType.Attribute, MappingPriorityType.Aop)
                .UseMonitorCommand(cmd =>
                {
                    Trace.WriteLine(cmd.CommandText + ";");
                })
                .Build();
        //软删除
        fsql.GlobalFilter.Apply<ISoftDelete>("IsDeleted", a => a.IsDeleted == false);      
        return fsql;
    };

    services.AddSingleton<IFreeSql>(fsql);
    services.AddFreeRepository();
    services.AddScoped<UnitOfWorkManager>();

    using (var scope = services.BuildServiceProvider().CreateScope())
    {
        var orm = scope.ServiceProvider.GetRequiredService<IFreeSql>();

        //只有实例化了AppIdentityDbContext，才能正常调用OnModelCreating，不然直接使用仓储，无法调用DbContext中的OnModelCreating方法，配置的TodoConfiguration 就会没有生效
        services.AddFreeDbContext<AppIdentityDbContext>(options => options
                    .UseFreeSql(orm)
                    .UseOptions(new DbContextOptions()
                    {
                        EnableCascadeSave = true
                    }));
    }

    services.AddAuthentication(o =>
    {
        o.DefaultScheme = IdentityConstants.ApplicationScheme;
        o.DefaultSignInScheme = IdentityConstants.ExternalScheme;
    })
    .AddIdentityCookies(o => { });
    
    services.AddIdentityCore<AppUser>(o =>
            {
                o.SignIn.RequireConfirmedEmail = false;
                o.Stores.MaxLengthForKeys = 128;
            })
            .AddRoles<AppRole>()
            .AddSignInManager()
            .AddFreeSqlStores<AppIdentityDbContext>()
            .AddDefaultTokenProviders();;

    // 如果是MVC 另外安装包 <PackageReference Include="Microsoft.AspNetCore.Identity.UI" Version="6.0.7" /> 使用AddDefaultIdentity方法
    // services.AddDefaultIdentity<AppUser>(options => options.SignIn.RequireConfirmedAccount = true).AddRoles<AppRole>()
    //        .AddFreeSqlStores<AppIdentityDbContext>().AddDefaultTokenProviders();

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
/// 自定义Scope 的Serivce 执行 DbContext中的OnModelCreating
/// </summary>
/// <param name="serviceProvider"></param>
/// <returns></returns>

public static IServiceProvider RunScopeService(this IServiceProvider serviceProvider)
{
    //在项目启动时，从容器中获取IFreeSql实例，并执行一些操作：同步表，种子数据,FluentAPI等
    using (IServiceScope serviceScope = serviceProvider.CreateScope())
    {
        var freeSql = serviceScope.ServiceProvider.GetRequiredService<IFreeSql>();
        using var dbContext = serviceScope.ServiceProvider.GetRequiredService<AppIdentityDbContext>();

        freeSql.CodeFirst.SyncStructure(
            typeof(AppUser),
            typeof(AppRole),
            typeof(IdentityUserLogin<Guid>),
            typeof(IdentityUserRole<Guid>),
            typeof(IdentityUserClaim<Guid>),
            typeof(IdentityRoleClaim<Guid>),
            typeof(IdentityUserToken<Guid>)
            );
    }
    return serviceProvider;
}
```

在`Program`中Build后，我们执行此方法，以保证DbContext中的OnModelCreating生效

```csharp
WebApplicationBuilder builder = WebApplication.CreateBuilder(args);
builder.Services.AddFreeSqlIdentity(builder.Configuration);

WebApplication app = builder.Build();
//自定义Scope 的Serivce 执行 DbContext中的OnModelCreating
app.Services.RunScopeService();

```


```cs
[ApiController]
[Route("api/[controller]")]
public class AppUserController : ControllerBase
{
    private readonly ILogger<AppUserController> _logger;
    private readonly UserManager<AppUser> _userManager;
    private readonly IUserStore<AppUser> _userStore;
    private readonly IUserEmailStore<AppUser> _emailStore;
    private readonly SignInManager<AppUser> _signInManager;
    public AppUserController(ILogger<AppUserController> logger, UserManager<AppUser> userManager, SignInManager<AppUser> signInManager, IUserStore<AppUser> userStore)
    {
        _logger = logger;
        _userManager = userManager;
        _signInManager = signInManager;
        _userStore = userStore;
        _emailStore = GetEmailStore();
    }
    private IUserEmailStore<AppUser> GetEmailStore()
    {
        if (!_userManager.SupportsUserEmail)
        {
            throw new NotSupportedException("The default UI requires a user store with email support.");
        }
        return (IUserEmailStore<AppUser>)_userStore;
    }
    /// <summary>
    /// 创建用户示例
    /// </summary>
    /// <param name="createAppUser"></param>
    /// <returns></returns>
    /// <exception cref="ArgumentException"></exception>
    [HttpPost]
    public async Task<IResult> CreateUserAsync([FromBody] CreateAppUser createAppUser)
    {
        AppUser user = new AppUser()
        {
            FirstName = createAppUser.FirstName,
            LastName = createAppUser.LastName,
            EmailConfirmed = true //直接让邮件激活
        };
        await _userStore.SetUserNameAsync(user, createAppUser.Email, CancellationToken.None);
        await _emailStore.SetEmailAsync(user, createAppUser.Email, CancellationToken.None);
        var identityResult = await _userManager.CreateAsync(user, createAppUser.Password);

        if (identityResult.Succeeded)
        {
            _logger.LogInformation("User created a new account with password.");
            //获取userid
            var userId = await _userManager.GetUserIdAsync(user);
            //生成邮件激活码
            var code = await _userManager.GenerateEmailConfirmationTokenAsync(user);
            code = WebEncoders.Base64UrlEncode(Encoding.UTF8.GetBytes(code));
            return Results.Ok("Register Success");
            //如果邮件 EmailConfirmed 为false时，通过此方式发送激活邮件
            //await _emailSender.SendEmailAsync(Input.Email, "Confirm your email",
            //    $"Please confirm your account by <a href='{HtmlEncoder.Default.Encode(callbackUrl)}'>clicking here</a>.");
        }
        if (identityResult.Errors == null)
        {
            throw new ArgumentException("identityResult.Errors should not be null.");
        }
        string errorMsg = string.Join(',', identityResult.Errors.Select(r => r.Description));

        _logger.LogInformation(errorMsg);

        return Results.BadRequest(errorMsg);
    }

    /// <summary>
    /// 登录
    /// </summary>
    /// <param name="userLoginInfo"></param>
    /// <returns></returns>
    [HttpPost("login")]
    public async Task<IResult> LoginAsync([FromBody] UserLoginInput userLoginInfo)
    {
        _logger.LogInformation("JwtLogin Begin");
        var result = await _signInManager.PasswordSignInAsync(userLoginInfo.Email, userLoginInfo.Password, userLoginInfo.RememberMe, lockoutOnFailure: false);

        if (result.Succeeded)
        {
            AppUser user = await _userManager.FindByEmailAsync(userLoginInfo.Email);

            //创建Token等等
            var token = Guid.NewGuid().ToString();

            _logger.LogInformation($"User {userLoginInfo},Login Success");

            return Results.Ok(token);
        }
        else
        {
            return Results.BadRequest(result.ToString());
        }
    }
}

/// <summary>
/// 创建用户实体
/// </summary>
/// <param name="FirstName">姓</param>
/// <param name="LastName">名</param>
/// <param name="Email">邮件、登录名</param>
/// <param name="Password">密码</param>
public record CreateAppUser(string FirstName, string LastName, string Email, string Password);

/// <summary>
/// 
/// </summary>
/// <param name="Email">邮件、登录名</param>
/// <param name="Password">密码</param>
/// <param name="RememberMe">记住密码</param>
public record UserLoginInput(string Email, string Password, bool RememberMe);
```

