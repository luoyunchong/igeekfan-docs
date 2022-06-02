# .NET Core 简单测试项目

使用 PowerShell 的 dotnet cli 命令行创建控制台项目，测试项目，测试项目引用控制台项目。

## 源码

代码托管在 GitHub 上 [https://github.com/luoyunchong/dotnetcore-examples/tree/master/console-news-types](https://github.com/luoyunchong/dotnetcore-examples/tree/master/console-news-types)

## 相关参考

code :[https://github.com/dotnet/samples/blob/master/core/console-apps/NewTypesMsBuild/README.md](https://github.com/dotnet/samples/blob/master/core/console-apps/NewTypesMsBuild/README.md)

docs: [https://docs.microsoft.com/zh-cn/dotnet/core/tutorials/testing-with-cli](https://docs.microsoft.com/zh-cn/dotnet/core/tutorials/testing-with-cli)

dotnet-add-reference 使用文档 [https://docs.microsoft.com/zh-cn/dotnet/core/tools/dotnet-add-reference](https://docs.microsoft.com/zh-cn/dotnet/core/tools/dotnet-add-reference)

总结如下命令行

```PowerShell
PS dotnetcore-examples> mkdir console-news-types
PS dotnetcore-examples> cd .\console-news-types\
PS dotnetcore-examples\console-news-types> mkdir src

PS dotnetcore-examples\console-news-types> mkdir test
PS dotnetcore-examples\console-news-types> ls
Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d----           2019/6/27    20:51                src
d----           2019/6/27    20:51                test

PS dotnetcore-examples\console-news-types> cd .\src\
PS dotnetcore-examples\console-news-types\src> dotnet new console -n NewTypes
PS dotnetcore-examples\console-news-types\src> cd ..\test\
PS dotnetcore-examples\console-news-types\test> dotnet new xunit -n NewTypesTests
PS dotnetcore-examples\console-news-types\test> cd .\NewTypesTests\
PS dotnetcore-examples\console-news-types\test\NewTypesTests> dotnet add reference ../../src/NewTypes/NewTypes.csproj
#Reference `..\..\src\NewTypes\NewTypes.csproj` added to the project.
```

其他的代码就看上面的二个链接，把代码复制进去，代码很简单，一个接口，二个实现，main 函数调用，测试项目引用控制台项目，

先 cd 到 src\NewTypes 目录中，执行 **dotnet run**

```PowerShell
PS dotnetcore-examples\console-news-types\src\NewTypes> dotnet run
Woof!
Meow!
```

先 cd 到 test\NewTypesTests 目录中，执行 **dotnet test**，看好代码，测试类 Assert.Equal() 是成功的，如果是 Assert.NotEqual() 则 Failure

```PowerShell
PS dotnetcore-examples\console-news-types\test\NewTypesTests> dotnet test
dotnetcore-examples\console-news-types\test\NewTypesTests\bin\Debug\netcoreapp3.0\NewTypesTests.dll 的测试运行(.NETCoreApp,Version=v3.0)
Microsoft (R) 测试执行命令行工具版本 16.0.1
版权所有 (C) Microsoft Corporation。保留所有权利。

正在启动测试执行，请稍候...

总测试: 2。已通过: 2。失败: 0。已跳过: 0。
测试运行成功。
测试执行时间: 1.5134 秒
```
