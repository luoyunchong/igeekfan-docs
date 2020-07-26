# scriban 本模板语言

### 目录 
- [【翻译】Scriban是一种快速、强大、安全和轻量级的文本模板语言和.NET引擎，具有解析liquid模板的兼容模式](https://www.cnblogs.com/igeekfan/p/13343331.html)
- [【翻译】 Scriban  language（ 待完成）]()
- [【翻译】Scriban runtime（ 待完成）]()
###  原文Github：https://github.com/lunet-io/scriban#readme

[![Build Status](https://github.com/lunet-io/scriban/workflows/ci/badge.svg?branch=master)](https://github.com/lunet-io/scriban/actions) [![Coverage Status](https://coveralls.io/repos/github/lunet-io/scriban/badge.svg?branch=master)](https://coveralls.io/github/lunet-io/scriban?branch=master) [![NuGet](https://img.shields.io/nuget/v/Scriban.svg)](https://www.nuget.org/packages/Scriban/)

<img align="right" width="160px" height="160px" src="img/scriban.png">

Scriban是一种快速、强大、安全和轻量级的文本模板语言和.NET引擎，具有解析`liquid`模板的兼容模式

```
// Parse a scriban template
var template = Template.Parse("Hello {{name}}!");
var result = template.Render(new { Name = "World" }); // => "Hello World!" 
```

使用Liquid语言解析Liquid模板：

```
// Parse a liquid template
var template = Template.ParseLiquid("Hello {{name}}!");
var result = template.Render(new { Name = "World" }); // => "Hello World!" 
```

语言非常通用，易于阅读和使用，类似于[liquid](https://shopify.github.io/liquid/) 模板:

```
var template = Template.Parse(@"
<ul id='products'>
  {{ for product in products }}
    <li>
      <h2>{{ product.name }}</h2>
           Price: {{ product.price }}
           {{ product.description | string.truncate 15 }}
    </li>
  {{ end }}
</ul>
");
var result = template.Render(new { Products = this.ProductList });
```

> **注意**
>
> 默认情况下, .NET对象的属性和方法会自动以小写和`_`命名，这意味着像`MyMethodIsNice`这样的属性将被公开为`my_method_is_nice`.这是默认约定，最初是为了匹配`liquid`模板的行为。
>如果要改变此行为，则需要使用 [`MemberRenamer`](doc/runtime.md#member-renamer) 委托

## 特性

- 非常**高效**,**快速** 解析器和**轻量级**的运行时. 对CPU和垃圾收集器友好. 查看 
-  [benchmarks](https://github.com/lunet-io/scriban/blob/devel-3.0/doc/benchmarks.md)获取更多细节.
- 由Lexer / Parser提供一个**完整的抽象语法树，fast, versatile and robust(快速，通用且强大)**, 比基于regex的解析器更高效
  - 错误报告:能提供精确的源代码位置 ，包括(path, column and line) 
  - **将AST写入脚本文本的形式**,  使用 [`Template.ToText`](https://github.com/lunet-io/scriban/blob/devel-3.0/doc/runtime.md#ast-to-text), 可以操作内存中的脚本并将其重新保存到磁盘, 对于 **roundtrip（往返）的脚本更新方案**是有用的
- **兼容`liquid`** 模板 可使用`Template.ParseLiquid`  方法
  - 虽然 `liquid` 语言不如`scriban`强大, 但该模式从 `liquid` 则更容易地迁移至 `scriban` 
  - 在 [AST to text](https://github.com/lunet-io/scriban/blob/devel-3.0/doc/runtime.md#ast-to-text) 模式下,将对模板`Template.ParseLiquid`进行解析，替换成`Template.ToText`,即可将`liquid` 脚本 转换成 `scriban` 脚本 
  - 由于  liquid 语言没有严格定义 并且它有着不同版本的liquid语法，在使用scriban的liquid模板时会有一些限制, 查看此文档了解详情 [liquid support in scriban](https://github.com/lunet-io/scriban/blob/devel-3.0/doc/liquid-support.md) 
- **可扩展的运行时** 提供许多扩展点
- 支持 `async`/`await` 的脚本支持 (e.g `Template.RenderAsync`)
- [精确控制空白文本输出](https://github.com/lunet-io/scriban/blob/devel-3.0/doc/language.md#14-whitespace-control)
- [完整的语言特性](https://github.com/lunet-io/scriban/blob/devel-3.0/doc/language.md) 包括 `if`/`else`/`for`/`while`, [expressions](doc/language.md#8-expressions) (`x = 1 + 2`), conditions... etc.
- [函数调用和管道](https://github.com/lunet-io/scriban/blob/devel-3.0/doc/language.md#89-function-call-expression) (`myvar | string.capitalize`)
  - [自定义函数](https://github.com/lunet-io/scriban/blob/devel-3.0/doc/language.md#7-functions) 通过`func`语句直接将函数自定义到语言中 通过`alias @ directive`可使用**function pointers/delegates** 
  - 从runtime API绑定 [.NET自定义函数](https://github.com/lunet-io/scriban/blob/devel-3.0/doc/runtime.md#imports-functions-from-a-net-class)，并提供许多与.NET对象接口的[选项](https://github.com/lunet-io/scriban/blob/devel-3.0/doc/runtime.md#the-scriptobject) 。
- [Complex objects (复杂对象)](doc/language.md#5-objects) (javascript/json like objects `x = {mymember: 1}`) and [arrays](https://github.com/lunet-io/scriban/blob/devel-3.0/doc/language.md#6-arrays) (e.g `x = [1,2,3,4]`)
- 通常由`wrap`语句使用可以将 [a block of statements （语句块）](https://github.com/lunet-io/scriban/blob/devel-3.0/doc/language.md#98-wrap-function-arg1argn--end) 传递给函数, 
- 一些[内置函数](https://github.com/lunet-io/scriban/blob/devel-3.0/doc/builtins.md):
  - [`arrays functions`](https://github.com/lunet-io/scriban/blob/devel-3.0/doc/builtins.md#array-functions)
  - [`date`](https://github.com/lunet-io/scriban/blob/devel-3.0/doc/builtins.md#date-functions)
  - [`html`](https://github.com/lunet-io/scriban/blob/devel-3.0/doc/builtins.md#html-functions)
  - [`maths functions`](https://github.com/lunet-io/scriban/blob/devel-3.0/doc/builtins.md#math-functions)
  - [`object`](doc/builtins.md#object-functions)
  - [`regex functions`](https://github.com/lunet-io/scriban/blob/devel-3.0/doc/builtins.md#regex-functions)
  - [`string functions`](https://github.com/lunet-io/scriban/blob/devel-3.0/doc/builtins.md#string-functions)
  - [`timespan`](doc/builtins.md#timespan-functions)
-  [Multi-line statements 多行语句](https://github.com/lunet-io/scriban/blob/devel-3.0/doc/language.md#11-code-block) 不必在每行都使用 

```
{{...}}
```
- [Safe parser](https://github.com/lunet-io/scriban/blob/devel-3.0/doc/runtime.md#the-lexer-and-parser) and [safe runtime](https://github.com/lunet-io/scriban/blob/devel-3.0/doc/runtime.md#safe-runtime), 使您可以控制公开哪些对象和功能

## Syntax  Coloring(语法着色)

您可以安装 [Scriban Extension for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=xoofx.scriban) 获取 scriban 脚本 (without HTML) 和 scriban html文件的语法颜色提示

## 文档
* 有关[语言语法](https://github.com/lunet-io/scriban/blob/devel-3.0/doc/language.md)的说明，请参阅语言文档。
* 内置函数见文档[内置函数](https://github.com/lunet-io/scriban/blob/devel-3.0/doc/builtins.md)列表。
* 有关编译和运行模板的.NET运行时API的说明，请参阅[运行时](https://github.com/lunet-io/scriban/blob/devel-3.0/doc/runtime.md)文档。
* 有关支持liquid模板的更多详细信息，请参阅[Liquid support]文档。
* 请参阅我的博客文章"[实现.NET的文本模板引擎](http://xoofx.com/blog/2017/11/13/implementing-a-text-templating-language-and-engine-for-dotnet/)"，了解一些幕后细节。


## 二进制包 

Scriban提供一个可获取的 NuGet 包: [![NuGet](https://img.shields.io/nuget/v/Scriban.svg)](https://www.nuget.org/packages/Scriban/)

兼容以下 .NET framework 版本:

- .NET Framework 3.5
- .NET Framework 4.0
- .NET Framework 4.5+ (supports asynchronous code and timeouts for regular expressions)
- .NET Standard1.1+ (some features are not available)
- .NET Standard1.3+ (which means .NET Core, Xamarin, UWP, Unity etc.)


还有提供签名的NuGet包 [Scriban.Signed](https://www.nuget.org/packages/Scriban.Signed/)  

## Benchmarks（基准测试）

**Scriban 速度极快**! 更多细节, 你可以查看此文档 [benchmarks（基准测试） 文档](https://github.com/lunet-io/scriban/blob/devel-3.0/doc/benchmarks.md).

## License

该软件是在[BSD-Clause 2 license](https://opensource.org/licenses/BSD-2-Clause)协议下发布的 

## 相关项目

* [dotliquid](https://github.com/dotliquid/dotliquid): Liquid模板语言的.NET端口。
* [Fluid](https://github.com/sebastienros/fluid/) .NET liquid 模板引擎
* [Nustache](https://github.com/jdiamond/Nustache):  .NET 无逻辑模板（Logic-less templates for .NET）
* [Handlebars.Net](https://github.com/rexm/Handlebars.Net): .NET port of handlebars.js

## 在线示例

* (https://scribanonline.azurewebsites.net/): ASP.NET Core Sample.

## Credits

Adapted logo `Puzzle` by [Andrew Doane](https://thenounproject.com/andydoane/) from the Noun Project

## 作者

Alexandre Mutel aka [xoofx](http://xoofx.com).
