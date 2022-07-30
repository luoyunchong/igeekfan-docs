# 后端快速上手

本小节我们将在 lin-cms 的基础上开发一个简单的图书管理 demo,帮助大家来熟悉和入门 lin-cms。

lin-cms 是一个 lin 团队经数打磨的模板项目，本人是 c#的开发者，为 lin-cms 完善在.net 下的生态，是基于 asp.netcore 的基础上，沉淀下来的一套实践， 帮助开发者节约时间。

> 注意：本小节建立在你有一定的 asp.net mvc，freesql，.net core 的基础上。

## 数据层

由于我们用的.net core 中优秀的开源项目 FreeSql,codefirst 模式，他能根据类生成表结构。所以，不需要我们手动创建表结构。

### book 书

| 字段    | 类型    | 备注    |
| ------- | ------- | ------- |
| id      | bigint  | 主键 Id |
| author  | varchar | 作者    |
| image   | varchar | 图片    |
| summary | varchar | 简介    |
| title   | varchar | 标题    |

可增加一些审计字段，如

| 字段           | 类型     | 备注          |
| -------------- | -------- | ------------- |
| create_time    | datetime | 创建时间      |
| create_user_id | datetime | 创建者 ID     |
| update_time    | datetime | 修改时间      |
| update_user_id | datetime | 最后修改人 Id |
| delete_time    | datetime | 删除时间      |
| delete_user_id | datetime | 删除人 id     |
| is_deleted     | datetime | 是否删除      |

审计字段可通过继承父类**FullAuditEntity**即可,当然，也可只有创建时间，创建人二个字段，继承**ICreateAuditEntity**接口，实现二个字段即可。如果不想要这些记录，只需要继承**Entity**类，仅有一个 ID 字段，支持泛型。

**is_deleted**字段本身没有什么稀奇的，但我们可以配合 FreeSql 实现逻辑删除（软删除），在 LinCms.Web/Configs/DependencyInjectionExtensions.cs 文件中。配置 了如下内容，如果我们筛选数据时，会全局启用 [过滤器](https://github.com/dotnetcore/FreeSql/wiki/%E8%BF%87%E6%BB%A4%E5%99%A8)。像创建时间，创建人。这些字段都不需要我们赋值，如果我们全部使用仓储**IAuditBaseRepository**访问数据库，这些字段会自动赋值。

```
fsql.GlobalFilter.Apply<IDeleteAuditEntity>("IsDeleted", a => a.IsDeleted == false);
```

## 模型层

我们建立单纯的实体类（Entities)，在路径**lin-cms-dotnetcore\src\LinCms.Core\Entities**,名为 Book.cs 的实体类

```csharp
using FreeSql.DataAnnotations;

namespace LinCms.Core.Entities
{
    [Table(Name = "book")]
    public class Book : FullAuditEntity
    {
        [Column(DbType = "varchar(30)")]
        public string Author { get; set; } = string.Empty;

        [Column(DbType = "varchar(50)")]
        public string Image { get; set; } = string.Empty;

        [Column(DbType = "varchar(1000)")]
        public string Summary { get; set; } = string.Empty;

        [Column(DbType = "varchar(50)")]
        public string Title { get; set; } = string.Empty;
    }
}
```

更多特性标签支持情况，请查看[FreeSql 官方文档实体特性](https://github.com/dotnetcore/FreeSql/wiki/%E5%AE%9E%E4%BD%93%E7%89%B9%E6%80%A7)。

由于默认 FreeSql,只有访问到这个类时才会生成表，但我们可以手动扫描所有带有 Table 特性标签的类，同步表结构。仅建议开发时启动表结构全部同步。

LinCms.Web/Configs/DependencyInjectionExtensions.cs
中的 AddContext 配置项中.

```
//在运行时直接生成表结构
fsql.CodeFirst.SyncStructure(ReflexHelper.GetEntityTypes(typeof(IEntity)));
```

## 业务层

有了实体类，我们创建 IBookRepository`<Book,long>`，也可以不创建，直接使用 IAuditBaseRepository`<Book>`在 Service 层写相应的业务。这里我们就不创建仓储服务了，框架中携带的仓储已经满足我们的要求。

仓储是什么呢。在这里我们可以理解 DAL,也理解为仓库，他提供了对单个表的 CURD 操作方法，有了一个统一的规范。

作用即数据的持久化，应用服务通过仓储对数据进行操作，让开发者不用关注仓储内部的实现。

业务层 Services，我们直接使用仓储访问数据库。

在 LinCms.Application.Contracts 项目中，在 v1 文件夹新建一个 Books 的文件夹,用于存放书的相关接口，创建 IBookService 的接口

```
using System.Threading.Tasks;
using LinCms.Application.Contracts.v1.Books.Dtos;
using LinCms.Core.Data;

namespace LinCms.Application.Contracts.v1.Books
{
    public interface IBookService
    {
        Task<BookDto> GetAsync(long id);
    }
}
```

新建一个 Dtos 文件夹，用于存放业务传输的数据对象，再创建一个 BookDto，仅包含必要的字段，而非全部。该类以 Dto 结尾，代表数据传输对象。

```
using System;
using LinCms.Core.Entities;

namespace LinCms.Application.Contracts.v1.Books.Dtos
{
    public class BookDto:EntityDto
    {
        public string Author { get; set; }
        public string Image { get; set; }
        public string Summary { get; set; }
        public string Title { get; set; }
        public DateTime CreateTime { get; set; }
        public DateTime UpdateTime { get; set; }
    }
}

```

在 BookService 实现如下，在这里我们注入 IAuditBaseRepository，通过 调用 **\_bookRepository.Select.Where(a => a.Id == id).ToOneAsync();** ,根据 id 得到书的实体对象。然后使用 AutoMappeer,将 Book 类转换成 BookDto 类，然后返回。
至于为什么 这里我们可以注入 IAuditBaseRepository，IMapper 类，后面我们会讲到。

```
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using LinCms.Application.Contracts.v1.Books;
using LinCms.Application.Contracts.v1.Books.Dtos;
using LinCms.Core.Data;
using LinCms.Core.Entities;
using LinCms.Core.Exceptions;
using LinCms.Core.Extensions;
using LinCms.Core.IRepositories;

namespace LinCms.Application.v1.Books
{
    public class BookService : IBookService
    {
        private readonly IAuditBaseRepository<Book> _bookRepository;
        private readonly IMapper _mapper;
        public BookService(IAuditBaseRepository<Book> bookRepository, IMapper mapper)
        {
            _bookRepository = bookRepository;
            _mapper = mapper;
        }


        public async Task<BookDto> GetAsync(long id)
        {
            Book book = await _bookRepository.Select.Where(a => a.Id == id).ToOneAsync();
            return _mapper.Map<BookDto>(book);
        }
    }
}
```

因为使用 AutoMapper 简化二个对象的映射，我们在同一目录下，创建一个继承 Profile 类的配置项。在构造函数中，我们配置了调用 CreateMap 方法，代表，从 Book->BookDto 的映射关系。

```
using AutoMapper;
using LinCms.Application.Contracts.v1.Books.Dtos;
using LinCms.Core.Entities;

namespace LinCms.Application.v1.Books
{
    public class BookProfile:Profile
    {
        public BookProfile()
        {
            CreateMap<Book, BookDto>();
        }
    }
}

```

在 ASP.NET Core 中，我们会扫描该程序集（LinCms.Applicaiton）中所有继承了 Profile 类的子类，在 LinCms.Web 中 ConfiguartionService 配置如下，

```
services.AddAutoMapper(typeof(BookProfile).Assembly);
```

一个项目即一个程序集(生成一个 dll)，仅配置一次。

我们完善一下控制器的代码。

```
using System.Threading.Tasks;
using AutoMapper;
using LinCms.Application.Contracts.v1.Books;
using LinCms.Application.Contracts.v1.Books.Dtos;
using LinCms.Core.Aop;
using LinCms.Core.Aop.Filter;
using LinCms.Core.Data;
using LinCms.Core.Entities;
using LinCms.Core.Exceptions;
using LinCms.Core.Extensions;
using LinCms.Core.IRepositories;
using LinCms.Web.Data.Authorization;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace LinCms.Web.Controllers.v1
{
    [Route("v1/book")]
    [ApiController]
    [Authorize]
    public class BookController : ControllerBase
    {
        private readonly IBookService _bookService;
        public BookController(IBookService bookService)
        {
            _bookService = bookService;
        }

        [HttpGet("{id}")]
        public async Task<BookDto> GetAsync(int id)
        {
            return await _bookService.GetAsync(id);
        }
    }
}
```

在 LinCms.Web/Controllers/v1 文件夹，创建我们的 Book 控制器。
我们依旧通过构造函数注入服务**IBookService**,这里用到的是 async await 方法，与同步方法执行顺序一致，仅多二个关键字，并使用 Task<返回值>来返回数据，通常我们使用 Async 标识异步方法。

启动项目，可通过 Visual Studio 点击上方的运行即可。

还可通过终端运行项目

先 cd 到目录 lin-cms-dotnetcore/src/LinCms.Web

```
dotnet run
```

打开浏览器，https://localhost:5001/swagger/index.html， ctrl+f 搜索，book，找到 GET /v1/book/{id}，点击 try it out,输入 id，点击 Execute。

因为我们没登录登录，在 BookController 上写了特性标签 **[Authorize]** ，所以会返回

```
{
  "code": 10000,
  "message": "请先登录",
  "request": "GET /v1/book/131"
}
```

我们可以先去掉这个特性标签，也可以走登录浏览，把 Token 放到 Header 中的 Authoriaztion 中。。

这里我们先去掉这行特性标签。去掉后，需要 ctrl+c，即出运行状态，如果感觉麻烦，可以使用 **dotnet run watch** 命令，修改后，自动重启，不需要手动重启。。

这里我们重新测试，手动给数据库加一些数据，记得 is_deleted 要是 false，然后输入对应的 id，会得到对应的值

```
{
  "author": "891dc185-2",
  "image": "f6d0c1e9-fcb2-446a-9093-d773e6515579",
  "summary": "8aea38f8-a6e0-4053-bd7a-ae4476432bdd",
  "title": "2d0c2e44-ee02-4d40-b4b7-eed03bb48aa4",
  "create_time": 1588485910430,
  "update_time": 1588485910430,
  "id": 139
}
```
