## 获取控制器及方法特性标签

> .NET Core 反射获取所有控制器及方法上特定标签.

有个需求，就是在. NET Core中，我们想在项目 启动时，获取LinCmsAuthorizeAttribute这个特性标签所有出现的地方，把他的参数，放入一个集合并缓存起来，以便后面使用此数据用于权限验证。

我们通过反射获取所有控制器下及方法的Attribute。

## LinCmsAuthorizeAttribute是什么
其代码非常简单，用于自定义权限验证，通过重写OnAuthorizationAsync方法，实现固定权限可分配给动态角色（也能分配给动态用户）。主要就**基于权限的授权**的实现进行研究，实现方法级别的权限验证。
- [https://www.cnblogs.com/RainingNight/p/dynamic-authorization-in-aspnetcore.html](https://www.cnblogs.com/RainingNight/p/dynamic-authorization-in-aspnetcore.html)

当然，这个只是部分代码，完整代码请查看最下方开源地址，其中LinCmsAuthorizeAttribute继承AuthorizeAttribute，拥有指定角色权限控制，当Permission未指定时，当过滤器与Authorize功能相同。Module是指模块，即多个权限，属于同一个模块，方便前台展示为树型结构。Permission属性的值不可重复。


```
[AttributeUsage(AttributeTargets.Class | AttributeTargets.Method, AllowMultiple = true)]
public class LinCmsAuthorizeAttribute : AuthorizeAttribute, IAsyncAuthorizationFilter
{
    public string Permission { get; set; }
    public string Module { get; set; }

    public LinCmsAuthorizeAttribute()
    {

    }

    public LinCmsAuthorizeAttribute(string permission,string module)
    {
        Permission = permission;
        Module = module;
    }

    public LinCmsAuthorizeAttribute(string permission,string module, string policy) : base(policy)
    {
        Permission = permission;
        Module = module;
    }

    public async Task OnAuthorizationAsync(AuthorizationFilterContext context)
    {
        if (Permission == null) return;
        var authorizationService = (IAuthorizationService)context.HttpContext.RequestServices.GetService(typeof(IAuthorizationService));
        var authorizationResult = await authorizationService.AuthorizeAsync(context.HttpContext.User, null, new OperationAuthorizationRequirement() { Name = Permission });
        if (!authorizationResult.Succeeded)
        {
            context.Result = new ForbidResult();
        }
    }

    public override string ToString()
    {
        return $"\"{base.ToString()}\",\"Permission:{Permission}\",\"Module:{Module}\",\"Roles:{Roles}\",\"Policy:{Policy}\",\"AuthenticationSchemes:{AuthenticationSchemes}\"";
    }
}
```
## Controller
在 LinCms.Web中的Controller，至于为什么Permission为中文，目前的主要原因，此项目用于适配 [Lin-CMS-VUE](https://github.com/TaleLin/lin-cms-vue)项目,所以于平常我们以某个字符串作为权限名不同，但不须大惊小怪，道理相同。

```
[Route("cms/log")]
[ApiController]
public class LogController : ControllerBase
{
    private readonly ILogService _logService;

    public LogController(ILogService logService)
    {
        _logService = logService;
    }

    [HttpGet("users")]
    [LinCmsAuthorize("查询日志记录的用户", "日志")]
    public List<string> GetLoggedUsers([FromQuery]PageDto pageDto)
    {
        return _logService.GetLoggedUsers(pageDto);
    }

 
    [HttpGet]
    [LinCmsAuthorize("查询所有日志", "日志")]
    public PagedResultDto<LinLog> GetLogs([FromQuery]LogSearchDto searchDto)
    {
        return _logService.GetLogUsers(searchDto);
    }

    [HttpGet("search")]
    [LinCmsAuthorize("搜索日志", "日志")]
    public PagedResultDto<LinLog> SearchLogs([FromQuery]LogSearchDto searchDto)
    {
        return _logService.GetLogUsers(searchDto);
    }
}
```
## 测试类获取方法上的特定标签
in xunit test 项目工程中，开始我们的测试

```
[Fact]
public void GetAssemblyMethodsAttributes()
{
    var assembly = typeof(Startup).Assembly.GetTypes().AsEnumerable()
        .Where(type => typeof(ControllerBase).IsAssignableFrom(type)).ToList();

    assembly.ForEach(r =>
    {
        foreach (var methodInfo in r.GetMethods())
        {
            foreach (Attribute attribute in methodInfo.GetCustomAttributes())
            {
                if (attribute is LinCmsAuthorizeAttribute linCmsAuthorize)
                {
                    _testOutputHelper.WriteLine(linCmsAuthorize.ToString());
                }
            }
        }
    });
}    
```
## 方法结果
可在输出文本中查看，正是我们想要的东西，最后一行，是其他Controller中的内容，而且我们重写了ToString(),所以我们能看到其属性。

```
"LinCms.Zero.Authorization.LinCmsAuthorizeAttribute","Permission:查询日志记录的用户","Module:日志","Roles:","Policy:","AuthenticationSchemes:"
"LinCms.Zero.Authorization.LinCmsAuthorizeAttribute","Permission:查询所有日志","Module:日志","Roles:","Policy:","AuthenticationSchemes:"
"LinCms.Zero.Authorization.LinCmsAuthorizeAttribute","Permission:搜索日志","Module:日志","Roles:","Policy:","AuthenticationSchemes:"
"LinCms.Zero.Authorization.LinCmsAuthorizeAttribute","Permission:查看lin的信息","Module:信息","Roles:","Policy:","AuthenticationSchemes:"

```

## 获取控制器上特性标签
```
/// <summary>
/// 获取控制器上的LinCmsAuthorizeAttribute
/// </summary>
/// "LinCms.Zero.Authorization.LinCmsAuthorizeAttribute","Permission:","Module:","Roles:Administrator","Policy:","AuthenticationSchemes:"
[Fact]
public void GetControllerAttributes()
{
    var assembly = typeof(Startup).Assembly.GetTypes().AsEnumerable()
        .Where(type => typeof(ControllerBase).IsAssignableFrom(type)).ToList();

    assembly.ForEach(d =>
    {
        var linCmsAuthorize = d.GetCustomAttribute<LinCmsAuthorizeAttribute>();
        if (linCmsAuthorize != null)
        {
            _testOutputHelper.WriteLine(linCmsAuthorize.ToString());
        }
    });
}
```

## Controller结果
只有AdminController加了此标签，所以只有一行。
```
"LinCms.Zero.Authorization.LinCmsAuthorizeAttribute","Permission:","Module:","Roles:Administrator","Policy:","AuthenticationSchemes:"
```

此时Roles为Administrator，Permission及Module都是null，
这是因为只有AdminController中加了LinGroup.Administrator="Administrator"字符串，在登录过程中，已经给当前登录用户设置了 new Claim(ClaimTypes.Role,user.IsAdmin()?LinGroup.Administrator:user.GroupId.ToString())，即"Administrator,当用户访问AdminController中的方法时，LinCmsAuthorize并没有做相关验证，都是AuthorizeAttribute，实现了固定角色权限的判断及登录的判断。LinCmsAuthorize完成了固定权限设置为不同的动态角色后，判断用户是否拥有此权限。
```
[LinCmsAuthorize(Roles = LinGroup.Administrator)]
public class AdminController : ControllerBase
{
    ...
}
```



## 参考
- c# – 如何在asp. net core rc2中获取控制器的自定义属性 [https://codeday.me/bug/20181207/453278.html](https://codeday.me/bug/20181207/453278.html)
- 



## 开源地址
- [github.com/luoyunchong/lin-cms-dotnetcore](github.com/luoyunchong/lin-cms-dotnetcore)

