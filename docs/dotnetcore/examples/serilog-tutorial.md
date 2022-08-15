# Serilog指北

- 原文：[https://blog.datalust.co/serilog-tutorial/#3eventsandlevels](https://blog.datalust.co/serilog-tutorial/#3eventsandlevels)
- github: [https://github.com/serilog/serilog](https://github.com/serilog/serilog)

### 1.概述
serilog是一个完全结构化事件的简单.NET日志记录

`fully-structured`,结构化

- 支持多种Provider，可将日志推送到不同的中间件，如文件，数据库(mysql,sql server,mariadb等)

### 2. Hello, Serilog!
让我们从最简单的开始，跟随以下教程，你需要创建一个Console项目，适用于.NET FrameWork 和.NET Core。

`Serilog` 通过 `NuGet`  分发包. 该项目以Serilog包为核心组织，配合许多 `sinks`（接收器） (超过上百!), 用于将事件写入终端,文件，数据库，日志服务器的插件中。

我们从 `Serilog` 和 `Serilog.Sinks.Console`开始, 稍后再讨论其他选项:

```
Install-Package Serilog
Install-Package Serilog.Sinks.Console
```

以下是世界上最简单的 Serilog 配置：

```
using Serilog;

class Program
{
    public static void Main(string[] args)
    {
        using (var log = new LoggerConfiguration()
            .WriteTo.Console()
            .CreateLogger())
        {
            log.Information("Hello, Serilog!");
            log.Warning("Goodbye, Serilog.");
        }
    }
}
```

明确以下几点

- `LoggerConfiguration` 类提供 了一个fluent 接口 构建一个日志管道
- `WriteTo.Console() ` 将一个控制台接收器 添加到管道中
- `CreateLogger()` 集合构建后会 返回一个 `Logger` 对象, 他实现了 `ILogger`的接口
-  `Logger` 接口继承 `IDisposable`, 所以我们使用 `using` 块
-  最后, `log.Information()` 和 `log.Warning()` 通过logger记录所有的发出的事件


运行程序

![image](https://note.youdao.com/yws/api/personal/file/261B46CA8E7E474D889CC2D6312BA39E?method=download&shareKey=b47ca475a270339f81b8af4ba28a1954)



现在最迫切的问题是: 在我们的应用程序中，其他类如何得到这个Log对象? 除了通过参数进行传递, 有两种可能性

- 如果您使用的是 `IoC` 容器, 你 可以使用组件接收`ILogger`对象，即通过 `dependency injection`(依赖注入)` ILogger`的方式使用. 像集成 [AutofacSerilogIntegration](https://github.com/nblumhardt/autofac-serilog-integration)等包即可。

或者,你可以把Logger存储到一个已知的位置中;为此 `Serilog`有一个静态日志类

```csharp
Log.Logger = new LoggerConfiguration()
    .WriteTo.Console()
    .CreateLogger();

Log.Information("Hello again, Serilog!");

Log.CloseAndFlush();
```


 `Log` 类提供了与`ILogger`接口相同的所有方法.用于替换使用using 块,我们可以调用 `Log.CloseAndFlush()`，重置`Serilog.Log.Logger`,并释放原有的资源
 
 > 你可能选择基于`ILogger`的注入方式使用，或使用静态Log类 -这种选择是基于个人口味和爱好的问题. 为了保持简单 我们将在此教程中使用静态日志类。
 
 
 ### 3. 事件和级别

如果使用过`log4net`等较旧的库，在使`Serilog`时，您需要在思维方式上做的最大改变是从日志事件而不是日志消息的角度来思考。活动由以下部分组成：

- 记录事件发生时的时间戳
- 描述何时应捕获事件的级别
- 记录事件所代表内容的消息
- 描述事件的命名属性
- 可能是一个异常对象


您可以将日志事件格式化为控制台的可读文本，正如我们在第一个示例中看到的：

```
11:33:01 [INF] Hello, Serilog!
```
或者，您可以将同一事件格式化为JSON，并将其发送到远程日志服务器：
```
{"@t":"2017-11-20T11:33:01.22138","@m":"Hello, Serilog!"}`
```

在幕后，应用程序中的日志语句创建LogEvent对象，而连接到管道的接收器则确定如何记录它们。

### Logging levels

`Serilog`速度很快，但始终构造和记录详细的日志事件可能会浪费CPU、磁盘和网络资源。为了管理这一点，`Serilog`事件被分配了调试、信息、警告和错误等级别。每个支持的级别都有一个`Log.*（）`方法。

在开发过程中，可能会打开调试级别事件：

```
Log.Logger = new LoggerConfiguration()
    .MinimumLevel.Debug() // <- Set the minimum level
    .WriteTo.Console()
    .CreateLogger();

// In a tight loop...
Log.Debug("Processing item {ItemNumber} of {ItemCount}", itemNumber, itemCount);
```

在生产中，通常关闭调试事件并将最低级别设置为信息，以便只记录重要事件。阅读文档中有关`Serilog`级别的[更多信息](https://github.com/serilog/serilog/wiki/Writing-Log-Events#log-event-levels)。


### 4. 发送和收集结构化数据

```
var itemNumber = 10;
var itemCount = 999;
Log.Debug("Processing item {ItemNumber} of {ItemCount}", itemNumber, itemCount);
```


您注意到日志消息中的`{ItemNumber}`之类的命名占位符了吗？这不是C#插值字符串：Log.*（）方法接受消息模板，这是.NET格式字符串的一种变体，除了通常的{0}位置字符串外，还支持{Named}占位符。

这似乎有点奇怪，直到您意识到，通过这样做，`Serilog`可以将消息的一部分作为一级属性与人性化文本一起捕获：


```
{
    "@t": "2017-11-20T11:33:01.22138",
    "@l": "Debug",
    "@m": "Processing item 10 of 999",
    "ItemNumber": 10,
    "ItemCount": 999
}
```

我们为什么要这样做？由于日志事件附带了一些有趣的字段作为属性，因此我们可以立即使用简单的过滤器（如`ItemNumber>900`）来查找事件，而不必通过正则表达式从消息中提取信息。

更进一步，我们可以使用`@structure`捕获操作符不仅获取平面属性值，还获取完整的对象：

```
var user = new { Name = "Nick", Id = "nblumhardt" };
Log.Information("Logged on user {@User}", user);
```

在这里，用户对象被捕获到生成的JSON中，因此我们可以使用诸如`user.Id='nblumhardt'`之类的查询来查找事件：


```
{
    "@t": "2017-11-20T11:33:01.22138",
    "@m": "Logged on user {\"Name\": \"Nick\", \"Id\": \"nblumhardt\"}",
    "User": {"Name": "Nick", "Id": "nblumhardt"}
}
```

生产监控和调试已经是一项艰巨、耗时且经常充满压力的任务：通常这些相关数据触手可及，`Serilog`消除了与操作相关 活动中最大的分歧之一。

> 提示：从`VisualStudioMarketplace`安装了不起的[Serilog分析器](https://marketplace.visualstudio.com/items?itemName=Suchiman.SerilogAnalyzer)，以便在键入时检查消息模板语法


这实际上会产生多大的差异，很大程度上取决于您如何从`Serilog`收集事件。传统上，日志事件进入文本文件并使用`grep`进行搜索。`Serilog`也可以记录文本文件，但您不能在记事本中执行`ItemNumber>900`，因此您需要评估更强大的工具来实现这一点。

## 将事件写入JSON日志文件
如果您的需求很简单，可以将`JSON`写入日志文件，并使用`JSON`感知工具直接查询文件。`Serilog`的文件接收器和紧凑的`JSON`格式化程序使第一部分变得简单。让我们尝试另一个安装了以下软件包的小型控制台应用程序：

```
Install-Package Serilog;
Install-Package Serilog.Sinks.File
Install-Package Serilog.Formatting.Compact
```


在Main（）方法中：

```
Log.Logger = new LoggerConfiguration()
    .MinimumLevel.Debug()
    .WriteTo.File(new CompactJsonFormatter(), "log.clef")
    .CreateLogger();

var itemCount = 99;
for (var itemNumber = 0; itemNumber < itemCount; ++itemNumber)
    Log.Debug("Processing item {ItemNumber} of {ItemCount}", itemNumber, itemCount);

Log.CloseAndFlush();
```


运行此应用程序将使用`Serilog`的压缩日志事件格式在`log.clef`中生成一个[新行分隔的`JSON`流](https://en.wikipedia.org/wiki/JSON_streaming)。（如果没有`CompactJsonFormatter`，我们将创建一个简单的平面日志文件。）


如果在文本编辑器中打开该文件，您将看到JSON事件，如我们上面使用的示例。


### 将事件写入日志服务器

```
Install-Package Serilog.Sinks.Seq
```

```
Log.Logger = new LoggerConfiguration()
    .MinimumLevel.Debug()
    .WriteTo.Seq("http://localhost:5341")
    .CreateLogger();
```


### 5.标记用于筛选和关联的事件


#### 增加固定属性

最简单的充实方法是向源自日志管道的所有事件添加固定属性值。这是使用记录器配置中的`Enrich.WithProperty()`完成的：

```
Log.Logger = new LoggerConfiguration()
    .Enrich.WithProperty("Application", "Demo")
    .WriteTo.Seq("http://localhost:5341")
    .CreateLogger();
```

在`LogEvents`上，通过扩展添加的属性与源自消息模板的属性相同：
```
{
    "@t": "2017-11-20T11:33:01.22138",
    "@l": "Debug",
    "@m": "Processing item 10 of 999",
    "ItemNumber": 10,
    "ItemCount": 999,
    "Application": "Demo"
}
```

这种策略有助于放大集中日志流中的特定日志源；以这种方式添加的属性包括应用程序、环境和版本等内容。

## 增加事件或记录器特定属性

通过创建和使用上下文记录器，可以将属性添加到一个或几个相关事件中，而不是使用相同的值丰富所有事件：

```
var orderLog = Log.ForContext("OrderId", order.Id);
orderLog.Information("Looking up product codes");
// ...
orderLog.Information("Product lookup took {Elapsed} ms", elapsed.TotalMilliseconds);
```

在这里，通过`orderLog`发出的两个事件都将附加`OrderId`属性。

扩展是可添加的：如果`Application`属性设置在管道级别，则上面的第二个事件将携带经过（来自消息）、`OrderId`（来自上下文记录器）和`Application`（来自日志管道）。


### 丰富源类型信息

特定于记录器的充实的一个特例是如何用创建事件的类标记事件。

在名为`HomeController`的类中，使用以下方法创建特定于类型的记录器：

```
private readonly ILogger _log = Log.ForContext<HomeController>();
```

通过`_log`发出的事件将携带值为`MyApp.Controller.HomeController`的`SourceContext`属性。

### 丰富环境语境

为了丰富工作单元中引发的所有事件，`Serilog`提供了`LogContext`。首先需要在`LoggerConfiguration`级别使用`Enrich.FromLogContext()`启用此功能：

```
Log.Logger = new LoggerConfiguraition()
     .Enrich.FromLogContext()
     // ...
```

`LogContext`可以看作是（键、值）对的堆栈；当从日志上下文中丰富事件时，这些事件将作为属性添加到事件中。

```
using (LogContext.PushProperty("MessageId", message.Id))
{
    Log.Debug("Dispatching message of type {MessageType}", message.GetType());
    await handler.HandleAsync(message);
}
```

`LogContext`的有趣之处在于不需要传递任何信息。在示例代码中，`HandleAsync()`的实现以及它调用的任何其他方法都可以直接使用`Log`和`ILogger`、 `MessageId`属性将被提取并添加到后台。

> 提示：`LogContext`是一个堆栈；推送到堆栈上的属性必须通过处理从`PushProperty()`返回的对象再次弹出-必须使用块。