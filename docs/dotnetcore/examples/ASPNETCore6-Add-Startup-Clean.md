---
title: 在 ASP.NET Core 6 中添加Startup.cs的整洁方式
category:
  - ASP.NET Core
tag:
  - ASP.NET Core
  - Startup
author: Talking Dotnet
---
>- <https://www.talkingdotnet.com/clean-way-to-add-startup-class-in-asp-net-core-6-project/>
>- 作者: Talking Dotnet

如果您关注`ASP.NET Core 6`，那么您可能发现，对于`ASP.NET Core 6`项目，没有`Startup.cs`文件。我发布了关于[如何在ASP.NETCore 6项目中添加Startup.cs](https://igeekfan.cn/dotnetcore/examples/NET6Startup.html)，这种方法以传统的方式将类引入到项目中，这是我们今天使用的`ASP.NET Core 5`及其早期版本。但是，如果我们能够改进，让它变得更好呢。好的，在这篇文章中，让我们看一看在`ASP.NET Core6`中添加`Startup`类的整洁方法

为了以整洁的方式实现，我们将利用[扩展方法](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/extension-methods)。扩展方法允许您向现有类型“添加”方法，而无需创建新的派生类型、重新编译或以其他方式修改原始类型。`ASP.NET Core 6.0`使用和来引导`ASP.NET Core应用程序`。因此，我们将为这二个(`WebApplicationBuilder`、`WebApplication`)类创建扩展方法

记住，这2个是`ASP.NET Core 6.0`新引入的。阅读[Comparing WebApplicationBuilder to the Generic Host](https://andrewlock.net/exploring-dotnet-6-part-2-comparing-webapplicationbuilder-to-the-generic-host/)，并[Exploring the code behind WebApplicationBuilder](https://andrewlock.net/exploring-dotnet-6-part-3-exploring-the-code-behind-webapplicationbuilder/)以了解有关此新引导模型的更多信息。

该类用于注册/配置服务或依赖项。由于扩展方法是静态方法，所以请使用名为的静态方法创建一个静态类。现在，将依赖项注册代码从移动到这里。如下

```csharp
public static class RegisterStartupServices
{
    public static WebApplicationBuilder RegisterServices(this WebApplicationBuilder builder)
    {
        builder.Services.AddControllers();
        // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();
        return builder;
    }
}
```

现在，让我们创建另一个静态类`RegisterStartupMiddlewares`，它扩展了用于中间件注册的类`WebApplication`。在这个类中，从中移动中间件注册码并将其引入方法。Program.cs中的`SetupMiddleware`

```csharp
public static class RegisterStartupMiddlewares
{
    public static WebApplication SetupMiddleware(this WebApplication app)
    {
        // Configure the HTTP request pipeline.
        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }

        app.UseHttpsRedirection();

        app.UseAuthorization();

        app.MapControllers();

        return app;
    }
}
```

完成后，让我们返回到`Program.cs`中更新代码并使用这些扩展方法。如下

```csharp
var builder = WebApplication.CreateBuilder(args)
             .RegisterServices();

var app = builder.Build()
        .SetupMiddleware();

app.Run();
```

或者，我们可以让他更加整洁，并将其排成一行，如下

```csharp
WebApplication.CreateBuilder(args)
    .RegisterServices()
    .Build()
    .SetupMiddleware()
    .Run();
```

现在，这看起来更加清晰、可读和易于管理。就是这么简单。

## 源码

- [dotnetcore-examples/Program.cs at master · luoyunchong/dotnetcore-examples (github.com)](https://github.com/luoyunchong/dotnetcore-examples/blob/master/999-Others/NET6/NET6Extensions/Program.cs)
