# 开发指南示例：添加图书管理功能

本指南将通过一个简单的示例——添加图书管理功能，来演示如何在 LinCMS.NET Core 项目中进行后端开发。

## 1. 定义实体 (Entity)

在 `src/LinCms.Core/Entities` 目录下创建一个新的实体类 `Book.cs`，用于映射数据库中的图书表。

```csharp
// src/LinCms.Core/Entities/Book.cs
using FreeSql.DataAnnotations;
using System;

namespace LinCms.Core.Entities
{
    [Table(Name = "book")] // 指定数据库表名
    public class Book : FullAuditedEntity<long> // 继承 FullAuditedEntity 获取审计字段 (创建/修改时间/人, 删除标记)
    {
        [Column(StringLength = 50)]
        public string Title { get; set; }

        [Column(StringLength = 30)]
        public string Author { get; set; }

        [Column(StringLength = 1000)]
        public string Summary { get; set; }

        [Column(StringLength = 100)]
        public string Image { get; set; }

        // 可以在这里添加更多字段，如 PublishDate, ISBN 等
    }
}
```

## 2. 定义数据传输对象 (DTO)

在 `src/LinCms.Application.Contracts/v1/Books` 目录下创建 DTO 文件。DTO 用于接口的数据输入和输出，避免直接暴露实体。

**`BookDto.cs` (输出 DTO):**
```csharp
// src/LinCms.Application.Contracts/v1/Books/BookDto.cs
using System;

namespace LinCms.Application.Contracts.v1.Books
{
    public class BookDto
    {
        public long Id { get; set; }
        public string Title { get; set; }
        public string Author { get; set; }
        public string Summary { get; set; }
        public string Image { get; set; }
        public DateTime CreateTime { get; set; }
    }
}
```

**`CreateUpdateBookDto.cs` (输入 DTO):**
```csharp
// src/LinCms.Application.Contracts/v1/Books/CreateUpdateBookDto.cs
using System.ComponentModel.DataAnnotations;

namespace LinCms.Application.Contracts.v1.Books
{
    public class CreateUpdateBookDto
    {
        [Required(ErrorMessage = "必须传入图书标题")]
        [StringLength(50, ErrorMessage = "图书标题长度不能超过50")]
        public string Title { get; set; }

        [Required(ErrorMessage = "必须传入图书作者")]
        [StringLength(30, ErrorMessage = "图书作者长度不能超过30")]
        public string Author { get; set; }

        [StringLength(1000, ErrorMessage = "图书摘要长度不能超过1000")]
        public string Summary { get; set; }

        [StringLength(100, ErrorMessage = "图书封面图片URL长度不能超过100")]
        public string Image { get; set; }
    }
}
```
*注意*: 我们使用了 `System.ComponentModel.DataAnnotations` 来进行基础的模型验证。更复杂的验证可以使用 FluentValidation。

## 3. 定义应用服务接口

在 `src/LinCms.Application.Contracts/v1/Books` 目录下定义图书服务的接口 `IBookService.cs`。

```csharp
// src/LinCms.Application.Contracts/v1/Books/IBookService.cs
using LinCms.Application.Contracts.Base.BaseTypes;
using LinCms.Application.Contracts.Base.Localizations;
using LinCms.Core.Entities;
using System.Threading.Tasks;
using LinCms.Application.Contracts.Base.Services;

namespace LinCms.Application.Contracts.v1.Books
{
    public interface IBookService : ICrudAppService<BookDto, BookDto, long, PageDto, CreateUpdateBookDto, CreateUpdateBookDto>
    {
        // ICrudAppService 已包含常用的 CRUD 方法声明:
        // Task<PagedResultDto<BookDto>> GetListAsync(PageDto input);
        // Task<BookDto> GetAsync(long id);
        // Task<BookDto> CreateAsync(CreateUpdateBookDto createBookDto);
        // Task<BookDto> UpdateAsync(long id, CreateUpdateBookDto updateBookDto);
        // Task DeleteAsync(long id);

        // 如果需要额外的业务方法，可以在这里添加声明
        // 例如: Task<List<BookDto>> GetBooksByAuthorAsync(string author);
    }
}
```
*说明*: 我们继承了 `ICrudAppService`，它提供了标准的 CRUD 接口定义，简化了代码。泛型参数分别代表：列表输出 DTO、单个输出 DTO、主键类型、分页输入 DTO、创建输入 DTO、更新输入 DTO。

## 4. 实现应用服务

在 `src/LinCms.Application/v1/Books` 目录下创建图书服务的实现类 `BookService.cs`。

```csharp
// src/LinCms.Application/v1/Books/BookService.cs
using AutoMapper; // 或者 Mapster
using LinCms.Application.Contracts.v1.Books;
using LinCms.Core.Entities;
using LinCms.Core.Exceptions;
using LinCms.Core.IRepositories;
using LinCms.Application.Base.Services; // 引入 CrudAppService
using LinCms.Application.Contracts.Base.BaseTypes; // 引入 PageDto
using LinCms.Application.Contracts.Base.Services; // 引入 ICrudAppService

namespace LinCms.Application.v1.Books
{
    public class BookService : CrudAppService<Book, BookDto, BookDto, long, PageDto, CreateUpdateBookDto, CreateUpdateBookDto>, IBookService
    {
        private readonly IAuditBaseRepository<Book, long> _bookRepository;

        // 构造函数注入仓储和 Mapper
        public BookService(IAuditBaseRepository<Book, long> repository, IMapper mapper)
            : base(repository, mapper)
        {
            _bookRepository = repository;
        }

        // CrudAppService 已经实现了基础的 CRUD 方法
        // 如果需要覆盖或添加特定逻辑，可以在这里重写方法

        // 示例：覆盖 GetListAsync 添加自定义查询条件或排序
        // public override async Task<PagedResultDto<BookDto>> GetListAsync(PageDto input)
        // {
        //     var (items, total) = await _bookRepository.Select
        //         .WhereIf(!string.IsNullOrEmpty(input.SearchText), b => b.Title.Contains(input.SearchText) || b.Author.Contains(input.SearchText)) // 假设 PageDto 有 SearchText 属性
        //         .OrderByDescending(b => b.CreateTime)
        //         .ToPageListAsync(input.Page, input.Count);
        //
        //     var dtoList = Mapper.Map<List<BookDto>>(items);
        //     return new PagedResultDto<BookDto>(total, dtoList);
        // }

        // 示例：覆盖 CreateAsync 添加业务校验
        // public override async Task<BookDto> CreateAsync(CreateUpdateBookDto createBookDto)
        // {
        //     // 检查是否存在同名书籍
        //     bool exist = await _bookRepository.Select.AnyAsync(b => b.Title == createBookDto.Title);
        //     if (exist)
        //     {
        //         throw new LinCmsException($"已存在标题为 {createBookDto.Title} 的图书");
        //     }
        //     return await base.CreateAsync(createBookDto);
        // }

        // 如果在 IBookService 中添加了额外方法，在这里实现
        // public async Task<List<BookDto>> GetBooksByAuthorAsync(string author)
        // {
        //     var books = await _bookRepository.Select.Where(b => b.Author == author).ToListAsync();
        //     return Mapper.Map<List<BookDto>>(books);
        // }
    }
}
```
*说明*:
- 我们继承了 `CrudAppService`，它使用仓储和对象映射库 (AutoMapper/Mapster) 实现了 `ICrudAppService` 定义的大部分方法。
- 通过构造函数注入了 `IAuditBaseRepository<Book, long>` (或 `IBaseRepository`) 和 `IMapper`。
- 你可以根据需要重写基类的方法，添加自定义的查询、排序、验证或业务逻辑。

## 5. 配置对象映射 (AutoMapper / Mapster)

你需要配置实体 `Book` 和 DTO (`BookDto`, `CreateUpdateBookDto`) 之间的映射关系。

**使用 AutoMapper:**
在 `src/LinCms.Application/AutoMapper/BookProfile.cs` (如果不存在则创建) 中添加映射配置：

```csharp
// src/LinCms.Application/AutoMapper/BookProfile.cs
using AutoMapper;
using LinCms.Application.Contracts.v1.Books;
using LinCms.Core.Entities;

namespace LinCms.Application.AutoMapper
{
    public class BookProfile : Profile
    {
        public BookProfile()
        {
            // 创建映射: Book -> BookDto
            CreateMap<Book, BookDto>();

            // 创建映射: CreateUpdateBookDto -> Book
            CreateMap<CreateUpdateBookDto, Book>();
        }
    }
}
```
*确保这个 Profile 被添加到 AutoMapper 的配置中 (通常在 `Startup.cs` 或扩展方法里)*。

**使用 Mapster:**
Mapster 通常不需要显式配置简单映射，但如果需要自定义，可以在服务的配置阶段进行。

## 6. 创建控制器 (Controller)

在 `src/LinCms.Web/Controllers/v1` 目录下创建 `BookController.cs`，用于暴露 API 接口。

```csharp
// src/LinCms.Web/Controllers/v1/BookController.cs
using LinCms.Application.Contracts.v1.Books;
using LinCms.Core.Aop; // For LinCmsAuthorize
using LinCms.Core.Entities;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using LinCms.Application.Contracts.Base.BaseTypes; // For PageDto
using LinCms.Application.Contracts.Base.Services; // For ICrudAppService

namespace LinCms.Web.Controllers.v1
{
    [ApiExplorerSettings(GroupName = "v1")] // Swagger 分组
    [Route("v1/book")]
    [ApiController]
    [LinCmsAuthorize("图书管理", "图书")] // 添加权限控制
    public class BookController : ControllerBase
    {
        private readonly IBookService _bookService;

        public BookController(IBookService bookService)
        {
            _bookService = bookService;
        }

        [HttpGet]
        [LinCmsAuthorize("获取所有图书")]
        public async Task<PagedResultDto<BookDto>> GetListAsync([FromQuery] PageDto pageDto)
        {
            return await _bookService.GetListAsync(pageDto);
        }

        [HttpGet("{id}")]
        [LinCmsAuthorize("获取图书详情")]
        public async Task<BookDto> GetAsync(long id)
        {
            return await _bookService.GetAsync(id);
        }

        [HttpPost]
        [LinCmsAuthorize("新建图书")]
        public async Task<BookDto> CreateAsync([FromBody] CreateUpdateBookDto createBookDto)
        {
            return await _bookService.CreateAsync(createBookDto);
        }

        [HttpPut("{id}")]
        [LinCmsAuthorize("更新图书")]
        public async Task<BookDto> UpdateAsync(long id, [FromBody] CreateUpdateBookDto updateBookDto)
        {
            return await _bookService.UpdateAsync(id, updateBookDto);
        }

        [HttpDelete("{id}")]
        [LinCmsAuthorize("删除图书")]
        public async Task DeleteAsync(long id)
        {
            await _bookService.DeleteAsync(id);
        }

        // 如果 IBookService 有额外方法，在这里添加对应的 Action
        // [HttpGet("author/{author}")]
        // [LinCmsAuthorize("按作者查询图书")]
        // public async Task<List<BookDto>> GetBooksByAuthorAsync(string author)
        // {
        //     return await _bookService.GetBooksByAuthorAsync(author);
        // }
    }
}
```
*说明*:
- 使用 `[Route]` 定义路由前缀。
- 使用 `[ApiController]` 启用 API 行为。
- 使用 `[LinCmsAuthorize]` 特性来定义接口所需的权限。第一个参数是权限模块，第二个参数是权限名称。系统启动时会自动扫描这些特性并注册权限。
- 通过构造函数注入 `IBookService`。
- 每个 Action 方法对应一个 HTTP 谓词和路由，并调用相应的服务层方法。
- `[FromQuery]` 和 `[FromBody]` 指定参数来源。

## 7. 数据库迁移

由于我们添加了新的实体 `Book`，需要更新数据库结构。

```bash
# 进入 Web 项目目录
cd src/LinCms.Web

# 执行
dotnet run
```
或者直接运行 Web 项目，如果配置了自动迁移，它会自动创建 `book` 表。

## 8. (可选) 添加权限到分组

1.  运行项目，访问 Swagger UI (`/swagger`)。
2.  使用管理员账号登录前端界面。
3.  进入 **管理员 -> 权限管理**。
4.  你应该能看到新添加的 "图书管理" 模块和其下的权限 ("获取所有图书", "新建图书" 等)。
5.  进入 **管理员 -> 分组管理**。
6.  选择一个分组 (如 "普通用户" 或 "管理员")，点击 "分配权限"。
7.  在弹出的权限列表中勾选你想要分配给该分组的图书管理权限。
8.  保存。

现在，属于该分组的用户就拥有了操作图书的相应权限。

## 总结

通过以上步骤，我们完成了一个简单的图书管理功能的后端开发，包括：

- 定义数据库实体
- 定义 DTO
- 定义应用服务接口
- 实现应用服务逻辑 (利用了 CrudAppService 基类)
- 配置对象映射
- 创建 API 控制器并添加权限控制
- 更新数据库结构
- (可选) 在前端界面分配权限

这个流程展示了 LinCMS.NET Core 项目分层架构的基本开发模式。你可以基于此模式开发更复杂的业务功能。
