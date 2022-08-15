# Autofac 依赖注入小知识

## 控制反转/依赖注入 IOC/DI

依赖接口而不依赖于实现，是面向对象的六大设计原则（SOLID)之一。即依赖倒置原则(`Dependence Inversion Principle`)

aspnetcore中的生命周期通常分为三种，具体如下

- `Singleton` 单例（全局唯一实例）
- `Scoped` 范围 （在同一个生命周期内是同一个实例）
- `Transient` 瞬时（每次请求都是一个新的实例）

Autofac命名有一些不同，但功能是一样的。

- Instance Per Dependency瞬时的
- Single Instance 单例
- Instance Per Lifetime Scope 作用域

### Autofac 生命周期

- Instance Per Dependency 瞬时

```csharp
builder.RegisterType<Worker>().InstancePerDependency();
// 如果不指定,默认就是InstancePerDependency
builder.RegisterType<Worker>();
```

- Instance Per Lifetime Scope 作用域

```csharp
// 在同一个作用域中获得的是相同实例，在不同作用域获得的是不同实例
builder.RegisterType<Worker>().InstancePerLifetimeScope();
```

- Single Instance 单例

```csharp
// 注册Worker类为SIngle Instance（单例），每次获取均返回同一个实例
builder.RegisterType<Worker>().SingleInstance();
```

## 使用说明

创建`ASP.NET Core 3.0+`的项目，并安装`Autofac`包

```bash
dotnet add package Autofac.Extensions.DependencyInjection
```

在 Program 中 Host 主机指定 `.UseServiceProviderFactory(new AutofacServiceProviderFactory())`.

UseServiceProviderFactory 调用 Autofac 提供程序,附加到通用宿主机制。

```diff
public class Program
{
    public static void Main(string[] args)
    {
        var host = Host.CreateDefaultBuilder(args)
+       .UseServiceProviderFactory(new AutofacServiceProviderFactory())
        .ConfigureWebHostDefaults(webHostBuilder => {
            webHostBuilder
            .UseContentRoot(Directory.GetCurrentDirectory())
            .UseIISIntegration()
            .UseStartup<Startup>();
        })
        .Build();

        host.Run();
    }
}
```

在 StartUp 中配置

```diff
public class Startup
{
  public Startup(IConfiguration configuration)
  {
    this.Configuration = configuration;
  }

  public IConfiguration Configuration { get; private set; }

+  public ILifetimeScope AutofacContainer { get; private set; }

  public void ConfigureServices(IServiceCollection services)
  {
    services.AddOptions();
  }

  // ConfigureContainer is where you can register things directly
  // with Autofac. This runs after ConfigureServices so the things
  // here will override registrations made in ConfigureServices.
  // Don't build the container; that gets done for you by the factory.
  public void ConfigureContainer(ContainerBuilder builder)
  {
    // Register your own things directly with Autofac here. Don't
    // call builder.Populate(), that happens in AutofacServiceProviderFactory
    // for you.
+    builder.RegisterModule(new MyApplicationModule());
  }

  public void Configure(
    IApplicationBuilder app,
    ILoggerFactory loggerFactory)
  {
+   this.AutofacContainer = app.ApplicationServices.GetAutofacRoot();

    loggerFactory.AddConsole(this.Configuration.GetSection("Logging"));
    loggerFactory.AddDebug();
    app.UseMvc();
  }
}
```

定义注入实现

```csharp
public class MyApplicationModule : Autofac.Module
{
    protected override void Load(ContainerBuilder builder)
    {
      builder.RegisterType<HttpContextAccessor>().As<IHttpContextAccessor>().SingleInstance();
    }
}
```

- 注册泛型仓储

```csharp
builder.RegisterGeneric(typeof(AuditBaseRepository<>)).As(typeof(IAuditBaseRepository<>)).InstancePerLifetimeScope();
builder.RegisterGeneric(typeof(AuditBaseRepository<,>)).As(typeof(IAuditBaseRepository<,>)).InstancePerLifetimeScope();
```

- 一个接口多个实现,使用 Named，区分、参数为字符串即可。

注册服务

```csharp
builder.RegisterType<IdentityServer4Service>().Named<ITokenService>(typeof(IdentityServer4Service).Name).InstancePerLifetimeScope();
builder.RegisterType<JwtTokenService>().Named<ITokenService>(typeof(JwtTokenService).Name).InstancePerLifetimeScope();
```

根据 Name 获取哪个服务

```csharp
private readonly ITokenService _tokenService;
public AccountController(IComponentContext componentContext, IConfiguration configuration)
{
    bool isIdentityServer4 = configuration.GetSection("Service:IdentityServer4").Value?.ToBoolean() ?? false;
    _tokenService = componentContext.ResolveNamed<ITokenService>(isIdentityServer4 ? typeof(IdentityServer4Service).Name : typeof(JwtTokenService).Name);
}
```

可通过 appsettings.json 中配置,可决定是哪个服务

```json
  "Service": {
    "IdentityServer4": false
  }
```

- 基于接口的注入

`AsImplementedInterfaces` Specifies that a type from a scanned assembly is registered as providing all of its implemented interfaces.
指定将扫描程序集中的类型注册为提供其所有实现的接口。

根据接口`ITransientDependency`可以得到有哪些类继承了此接口，并判断是类，不是抽象类，不是泛型。

所有继承类接口的类，将以接口的方式自动注入实例。可直接使用接口即可。

- InstancePerDependency 瞬时 （每次请求都是一个新的实例）
- InstancePerLifetimeScope 范围（在同一个生命周期内是同一个实例）
- SingleInstance 单例（全局唯一实例）

```csharp
    public class DependencyModule : Autofac.Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            Assembly[] currentAssemblies = AppDomain.CurrentDomain.GetAssemblies().Where(r => r.FullName.Contains("LinCms.")).ToArray();

            //每次调用，都会重新实例化对象；每次请求都创建一个新的对象；
            Type transientDependency = typeof(ITransientDependency);
            builder.RegisterAssemblyTypes(currentAssemblies)
                .Where(t => transientDependency.GetTypeInfo().IsAssignableFrom(t) && t.IsClass && !t.IsAbstract && !t.IsGenericType)
                .AsImplementedInterfaces().InstancePerDependency();

            //同一个Lifetime生成的对象是同一个实例
            Type scopeDependency = typeof(IScopedDependency);
            builder.RegisterAssemblyTypes(currentAssemblies)
                .Where(t => scopeDependency.GetTypeInfo().IsAssignableFrom(t) && t.IsClass && !t.IsAbstract && !t.IsGenericType)
                .AsImplementedInterfaces().InstancePerLifetimeScope();

            //单例模式，每次调用，都会使用同一个实例化的对象；每次都用同一个对象；
            Type singletonDependency = typeof(ISingletonDependency);
            builder.RegisterAssemblyTypes(currentAssemblies)
                .Where(t => singletonDependency.GetTypeInfo().IsAssignableFrom(t) && t.IsClass && !t.IsAbstract &&!t.IsGenericType)
                .AsImplementedInterfaces().SingleInstance();

        }
    }
```

如果不写继承，如何批量注入呢。 1.类名有规则 2.基于特殊标签 3.继承接口。

- 类名有规则
  比如仓储后缀，全是`Repository`,其中`Assembly`为仓储的实现所在程序集。将自动注入所有的仓储，仓储必须有接口。

```csharp
    Assembly assemblysRepository = Assembly.Load("LinCms.Infrastructure");
    builder.RegisterAssemblyTypes(assemblysRepository)
            .Where(a => a.Name.EndsWith("Repository"))
            .AsImplementedInterfaces()
            .InstancePerLifetimeScope();
```

- 注入服务后就执行一段逻辑

```csharp
builder.RegisterType<MigrationStartupTask>().SingleInstance();
builder.RegisterBuildCallback(async (c) => await c.Resolve<MigrationStartupTask>().StartAsync());
```

### 动态代理

```csharp
dotnet add package Autofac.Extras.DynamicProxy
dotnet add package Castle.Core.AsyncInterceptor
```

- 服务注册

AOP+属性注入+以后缀为 Service 的服务实现，注入 Scope 范围的生命周期+启用接口的拦截器。

- 使用`EnableInterfaceInterceptors`创建执行拦截的接口代理，
- 使用`EnableClassInterceptors()` 动态对子类进行重写, 执行 virtual 方法的拦截

```csharp
builder.RegisterType<UnitOfWorkInterceptor>();
builder.RegisterType<UnitOfWorkAsyncInterceptor>();


List<Type> interceptorServiceTypes = new List<Type>()
{
    typeof(UnitOfWorkInterceptor),
};

Assembly servicesDllFile = Assembly.Load("LinCms.Application");
builder.RegisterAssemblyTypes(servicesDllFile)
    .Where(a => a.Name.EndsWith("Service") && !a.IsAbstract && !a.IsInterface && a.IsPublic)
    .AsImplementedInterfaces()//接口注入
    .InstancePerLifetimeScope()//生命周期：范围
    .PropertiesAutowired()// 属性注入
    .InterceptedBy(interceptorServiceTypes.ToArray())//声明拦截器
    .EnableInterfaceInterceptors();//启用接口的拦截器。
```

这二个类，请参考如下代码

- 同步：UnitOfWorkInterceptor.cs <https://github.com/luoyunchong/lin-cms-dotnetcore/blob/master/src/LinCms.Web/Middleware/UnitOfWorkInterceptor.cs>
- 异步拦截：UnitOfWorkAsyncInterceptor.cs <https://github.com/luoyunchong/lin-cms-dotnetcore/blob/master/src/LinCms.Web/Middleware/UnitOfWorkInterceptor.cs>

`Autofac.Extras.DynamicProxy`依赖 Castle.Core,即只支持同步方法的拦截。
异步方法的拦截需要安装包：`Castle.Core.AsyncInterceptor`。

- 异步方法,分为有/无返回值：`async Task RunAsync()`,`asyn Task<Result> RunAsync()`
- 同步方法：`void Run()`,`Result Run()`

### 同步拦截

1.定义拦截器

```csharp
public class CallLogger : IInterceptor
{
  TextWriter _output;

  public CallLogger(TextWriter output)
  {
    _output = output;
  }

  public void Intercept(IInvocation invocation)
  {
    _output.Write("Calling method {0} with parameters {1}... ",
      invocation.Method.Name,
      string.Join(", ", invocation.Arguments.Select(a => (a ?? "").ToString()).ToArray()));

    invocation.Proceed();

    _output.WriteLine("Done: result was {0}.", invocation.ReturnValue);
  }
}
```

2.注册拦截器。

```csharp
// Named registration
builder.Register(c => new CallLogger(Console.Out))
       .Named<IInterceptor>("log-calls");

// Typed registration
builder.Register(c => new CallLogger(Console.Out));
```

将拦截器与要拦截的类型 关联

```csharp
[Intercept(typeof(CallLogger))]
public class First
{
  public virtual int GetValue()
  {
    // Do some calculation and return a value
  }
}

// This attribute will look for a NAMED
// interceptor registration:
[Intercept("log-calls")]
public class Second
{
  public virtual int GetValue()
  {
    // Do some calculation and return a value
  }
}
```

## 链接

- 官网 https://autofac.org/
- GitHub https://github.com/autofac/Autofac
- 文档 https://autofac.readthedocs.io/en/latest/
