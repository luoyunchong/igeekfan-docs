
# 依赖注入scrutor

官网介绍

[https://docs.microsoft.com/zh-cn/aspnet/core/fundamentals/dependency-injection?view=aspnetcore-2.2](https://docs.microsoft.com/zh-cn/aspnet/core/fundamentals/dependency-injection?view=aspnetcore-2.2)

- 开源地址[https://github.com/khellang/Scrutor](https://github.com/khellang/Scrutor)
- 参考文档 [https://www.cnblogs.com/catcher1994/p/10316928.html](https://www.cnblogs.com/catcher1994/p/10316928.html)
手动管理依赖注入过于麻烦,当有多个仓储，服务，无法统一注入，Scrutor能帮助我们简化ASP.NET Core的DI注册。

在ConfigServices中，我们原本需要这样子依次注入仓储，服务和其他接口及实现，当有多个仓储时，这样就过于繁琐。

```cs
services.AddTransient<IUserRepository, UserRepository>();
services.AddTransient<IUserService, UserService>();
services.AddTransient<ICurrentUser, CurrentUser>();
```

## Serivce后缀服务注入DI

当我们有多个Service后缀的服务时，使用以下方法，可将服务扫描只留下以Serivce结尾的类，将其类型注册为提供所有公共接口生成服务，其生命周期为Transient，

```cs
services.Scan(scan => scan
        //加载Startup这个类所在的程序集
        .FromAssemblyOf<Startup>()
        // 表示要注册那些类，上面的代码还做了过滤，只留下了以 Service 结尾的类
        .AddClasses(classes => classes.Where(t => t.Name.EndsWith("Service", StringComparison.OrdinalIgnoreCase)))
        //表示将类型注册为提供其所有公共接口作为服务
        .AsImplementedInterfaces()
        //表示注册的生命周期为 Transient
        .WithTransientLifetime()
         );

```

## ITransientDependency

新建一个空接口，当其他类继承此接口后，统一注入到DI中，以Transient的生命周期。

```cs
namespace LinCms.Zero.Dependency
{
    public interface ITransientDependency
    {
    }
}
```

## 接口

```cs
public interface ICurrentUser
{
    int? Id { get; }

    int? GroupId { get; }

    bool? IsAdmin { get; }
}
 ```

## 模拟实现

```cs
    public class CurrentUser : ICurrentUser, ITransientDependency
    {
     
        public int? Id => 1;
        public int? GroupId => 2;
        public bool? IsAdmin => true;
    }
```

扫描所有继承ITransientDependency的实现。

```cs
   services.Scan(scan => scan
       // We start out with all types in the assembly of ITransientService
        .FromAssemblyOf<ITransientDependency>()
        // AddClasses starts out with all public, non-abstract types in this assembly.
        // These types are then filtered by the delegate passed to the method.
        // In this case, we filter out only the classes that are assignable to ITransientService.
        .AddClasses(classes => classes.AssignableTo<ITransientDependency>())
        // We then specify what type we want to register these classes as.
        // In this case, we want to register the types as all of its implemented interfaces.
        // So if a type implements 3 interfaces; A, B, C, we'd end up with three separate registrations.
        .AsImplementedInterfaces()
        // And lastly, we specify the lifetime of these registrations.
        .WithTransientLifetime()
         );

```

## 如何使用

在其他类中使用此接口

```cs
[ApiController]
[Route("cms/user")]
public class UserController : ControllerBase
{
    private readonly ICurrentUser _currentUser;

    public UserController(ICurrentUser currentUser)
    {
        _currentUser = currentUser;
    }

    [HttpGet]
    public int GetUser()
    {
        return _currentUser.Id;
    }
}
```

## 统一注入

当然，我们可以统一注入，而非写二次servics.Scan

```cs
services.Scan(scan => scan
            .FromAssemblyOf<Startup>()
            .AddClasses(classes => classes.Where(t => t.Name.EndsWith("Service",StringComparison.OrdinalIgnoreCase)))
            .AsImplementedInterfaces()
            .WithTransientLifetime()
            .FromAssemblyOf<ITransientDependency>()
            .AddClasses(classes => classes.AssignableTo<ITransientDependency>())
            .AsImplementedInterfaces()
            .WithTransientLifetime()
      );
```
