---
title: 在 ASP.NET Core 6 如何添加 Startup.cs
category:
  - ASP.NET Core
tag:
  - ASP.NET Core
  - Startup
author: Talking Dotnet
---


> - 原文：[https://www.talkingdotnet.com/how-to-add-startup-cs-in-asp-net-core-6-project/#more-8202](https://www.talkingdotnet.com/how-to-add-startup-cs-in-asp-net-core-6-project/#more-8202)
> - 作者: Talking Dotnet

使用 `ASP.NET Core 6.0`项目，您将找不到`Startup.cs`文件。默认情况下，此文件将被删除，并且是将注册依赖项和中间件放到了`Program.cs`中。但是，如果您是 `Startup.cs` 的粉丝或将项目升级到 `ASP.NET Core 6.0`，你可能仍想要使用 `Startup.cs` 文件。因此，在这篇文章中，让我们将了解如何在 `ASP.NET Core 6` 项目中添加 `Startup.cs`

使用 `ASP.NET Core 6.0`项目时，您的`Program.cs`文件可能会这样。`Program.cs`是 ASP.NET Core Web 6应用模板的文件

```cs
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorPages();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}
app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();
app.UseAuthorization();
app.MapRazorPages();
app.Run();
```

正如您在此处看到的，服务和中间件注册现在是此文件的一部分。而 `Statup.cs` 有 2 个方法 `ConfigureServices()` 和 `Configure()`，我们在方法 `ConfigureServices` 中注册依赖关系/服务，在 `Configure` 中注册中间件。

现在使用 `Program.cs`，您需要在第 4 行之后注册您的服务/依赖项`builder.Services.AddRazorPages();`，并在第 6 行之后注册中间件`var app = builder.Build();`。请记住，在管道中注册中间件时，顺序很重要。

若要将 `Startup.cs` 添加到 `ASP.NET Core 6.0` 项目中 ，请添加一个名为`Startup.cs`的新文件 并添加以下代码。

```cs
public class Startup
{
    public Startup(IConfiguration configuration)
    {
        Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    public void ConfigureServices(IServiceCollection services)
    {
        services.AddRazorPages();
    }

    public void Configure(WebApplication app, IWebHostEnvironment env)
    {
        if (!app.Environment.IsDevelopment())
        {
            app.UseExceptionHandler("/Error");
            // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
            app.UseHsts();
        }
        app.UseHttpsRedirection();
        app.UseStaticFiles();
        app.UseRouting();
        app.UseAuthorization();
        app.MapRazorPages();
        app.Run();
    }
}
```

构造函数和这两个方法中的代码是非常熟悉。从文件`Program.cs`中删除依赖项注册的代码并将其放入`ConfigureService()`方法中。同样，中间件注册码也从文件中删除并放入`Configure()` 方法中。

接下来，我们需要介绍 `Program.cs` 如何调用 `Startup.cs` 。因此，请将文件代码更新为以下内容。

```cs
var builder = WebApplication.CreateBuilder(args);

var startup = new Startup(builder.Configuration);
startup.ConfigureServices(builder.Services);

var app = builder.Build();
startup.Configure(app, builder.Environment);
```

Startup.cs 类所需的所有对象都存在于 builder 对象中，因此我们可以将所需的对象传递给`ConfigureService()`和`Configure()`方法。就是这样。您的项目应该正常运行

## 我们还能做什么？

这是添加`Startup.cs`的自定义方式，因此实际上我们不必遵循任何与该类相关的内置规则。我从不喜欢`ConfigureService()`和`Configure()`这两个名称，因为它们并没有确切定义它们的用途。以前，无法重命名这些名称，但现在我可以给出一个有意义的名称。类似地，`ConfigureService`变成`RegisterServices`，`Configure`变成`SetupMiddleware`。

```cs
var startup = new Startup(builder.Configuration);
startup.RegisterServices(builder.Services);

var app = builder.Build();
startup.SetupMiddlewares(app, builder.Environment);
```

## 源码

- [dotnetcore-examples/Program.cs at master · luoyunchong/dotnetcore-examples (github.com)](https://github.com/luoyunchong/dotnetcore-examples/blob/master/999-Others/NET6/NET6Startup/Program.cs)

