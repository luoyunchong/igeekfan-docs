## 方法级别的权限控制（API级别）

Lin的定位在于实现一整套 CMS的解决方案，它是一个设计方案，提供了不同的后端，不同的前端，而且也支持不同的数据库

目前官方团队维护 lin-cms-vue,lin-cms-spring-boot,lin-cms-koa,lin-cms-flask
社区维护了 lin-cms-tp5,lin-cms-react,lin-cms-dotnetcore，即已支持vue,react二种前端框架，java,nodejs,python,php,c#等五种后端语言。

下面我们来讲一下.NET Core这个项目中权限控制的实现。

对于CMS来说，一个完善的权限模块是必不可少的，是系统内置实现的。为了更加简单地理解权限，我们先来理解一下ASP.NET Core有哪些权限控制。

1.**AuthorizeAttribute**的作用？

这个特性标签授权通过属性参数配置，可应用于控制器或操作方法上，对用户的身份进行验证。

如果没有授权，会返回403状态码，我们可以通过重写，来实现返回JSON字符串，让前台提示。前提是请求中间件配置了如下二行。

- **app.UseAuthentication();** 认证，明确是谁在操作，认证方式如用户名密码,登录后，可以得到一个token，或者写入cookies，这样可以确定这个用户是谁

- **app.UseAuthorization();** 授权中间件，明确你是否有某个权限。在http请求时，中间件会在带有权限特性标签 **[Authorize]** 的操作，进行权限判断，包括角色，策略等。

该控制器下的操作都必须经过身份验证，
```
[Authorize]
public class AccountController : Controller
{
    public ActionResult Login()
    {
    }

    public ActionResult Logout()
    {
    }
}
```

这样只显示单个方法必须应用授权。
```
public class AccountController : Controller
{
   public ActionResult Login()
   {
   }

   [Authorize]
   public ActionResult Logout()
   {
   }
}
```
如果我们通过**AllowAnonymous**特性标签去掉身份验证。Login方法无须进行验证。即可匿名访问。
```
[Authorize]
public class AccountController : Controller
{
    [AllowAnonymous]
    public ActionResult Login()
    {
    }

    public ActionResult Logout()
    {
    }
}
```

2. 基于角色的授权

我们可以通过给这个特性标签加参数，配置，某个方法，控制器是否有这个角色，如果有此角色才能访问这些资源。

单个角色
```
[Authorize(Roles = "Administrator")]
public class AdministrationController : Controller
{
}
```

多个角色，我们可以这样配置,即用逗号分隔。用户有其中一个角色即可访问。

```
[Authorize(Roles = "HRManager,Finance")]
public class SalaryController : Controller
{
}
```

当某个方法必须同时有二个角色怎么办呢。该控制器只有同时有PowerUser，和ControlPanelUser的角色才能访问这些资源了。
```
[Authorize(Roles = "PowerUser")]
[Authorize(Roles = "ControlPanelUser")]
public class ControlPanelController : Controller
{
}
```

- 3.更多。请看官网 [https://docs.microsoft.com/zh-cn/aspnet/core/security/authorization/roles?view=aspnetcore-3.1](https://docs.microsoft.com/zh-cn/aspnet/core/security/authorization/roles?view=aspnetcore-3.1)

更多该特性标签的介绍，也可参考官网，这里就不展开了。

那这个角色，到底在哪配置的？？

登录时生成的Token,是基于JWT的，其中的Claim的type为**ClaimTypes.Role**（枚举值），角色名称为字符串，与特性标签中的Roles属性值相同。
如

```
new Claim(ClaimTypes.Role, "Administrator");
```
有多个角色时，**List Claim ** 多加几个 **new Claim(ClaimTypes.Role, "PowerUser");** 也是支持的。user为用户信息，LinGroups为当前用户的分组（多个）

即如下代码示例，多个分组（角色）

```
var claims = new List<Claim>()
{
    new Claim(ClaimTypes.NameIdentifier, user.Email ?? ""),
    new Claim(ClaimTypes.GivenName, user.Nickname ?? ""),
    new Claim(ClaimTypes.Name, user.Username ?? ""),
};

user.LinGroups?.ForEach(r =>
 {
     claims.Add(new Claim(ClaimTypes.Role, r.Name));
 });
```


### AuthorizeAttribute源码

```
 [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method, AllowMultiple = true, Inherited = true)]
  public class AuthorizeAttribute : Attribute, IAuthorizeData
  {
    public AuthorizeAttribute()
    {
    }

    public AuthorizeAttribute(string policy)
    {
      this.Policy = policy;
    }

    public string Policy { get; set; }

    public string Roles { get; set; }

    public string AuthenticationSchemes { get; set; }
  }
```

我们可以看到，它继承了Attribute，说明这是一个特性标签，IAuthorizeData是一个接口，有这三个属性，约束了 一个规范，即有角色Roles，有策略Policy，有身份验证方案AuthenticationSchemes，该特性支持Class,支持方法，该特性标签支持多个共用，该特性标签支持被继承。

基于角色的授权和基于声明的授权是一种预配置的策略，即固定的角色，固定的Claims验证。

我们可以基于自定义策略的实现更多的权限验证或某些规则验证。

AuthorizeAttribute能做的权限控制如下
- 基于角色级别的权限控制（多个角色，单个角色）
- 基于声明的授权：可自定义声明特性。
- 基于策略的授权：


##  lin-cms-dotnetcore中的权限设计

说了这么多官方提供的，我们讲一下lin-cms-dotnetcore中的权限设计

完整的表结构如下
[https://luoyunchong.github.io/vovo-docs/dotnetcore/lin-cms/table.html](https://luoyunchong.github.io/vovo-docs/dotnetcore/lin-cms/table.html)


#### LinCmsAuthorizeAttribute

```
 [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method, AllowMultiple = true)]
    public class LinCmsAuthorizeAttribute : Attribute, IAsyncAuthorizationFilter
    {
        public string Permission { get; }
        public string Module { get; }

        public LinCmsAuthorizeAttribute(string permission, string module)
        {
            Permission = permission;
            Module = module;
        }

        public async Task OnAuthorizationAsync(AuthorizationFilterContext context)
        {
            ClaimsPrincipal claimsPrincipal = context.HttpContext.User;

            if (!claimsPrincipal.Identity.IsAuthenticated)
            {
                HandlerAuthenticationFailed(context, "认证失败，请检查请求头或者重新登陆", ErrorCode.AuthenticationFailed);
                return;
            }

            IAuthorizationService authorizationService = (IAuthorizationService)context.HttpContext.RequestServices.GetService(typeof(IAuthorizationService));
            AuthorizationResult authorizationResult = await authorizationService.AuthorizeAsync(context.HttpContext.User, null, new OperationAuthorizationRequirement() { Name = Permission });
            if (!authorizationResult.Succeeded)
            {
                HandlerAuthenticationFailed(context, $"您没有权限：{Module}-{Permission}", ErrorCode.NoPermission);
            }
        }

        public void HandlerAuthenticationFailed(AuthorizationFilterContext context, string errorMsg, ErrorCode errorCode)
        {
            context.HttpContext.Response.StatusCode = StatusCodes.Status401Unauthorized;
            context.Result = new JsonResult(new UnifyResponseDto(errorCode, errorMsg, context.HttpContext));
        }
    }
```
上面的实现非常简单,LinCmsAuthorizeAttribute继承于Attribute，说明是一个特性标签，有二个属性Permission，Module，代表权限名，模块名（用于区分哪个功能模块），然后将权限名称转化为OperationAuthorizationRequirement，然后调用authorizationService中的方法AuthorizeAsync来完成授权。

接下来，我们在控制器上使用LinCmsAuthorizeAttribute,那么我们
```
[Route("cms/admin/group")]
[ApiController]
public class GroupController : ControllerBase
{
    private readonly IGroupService _groupService;
    public GroupController(IGroupService groupService)
    {
        _groupService = groupService;
    }

    [HttpGet("all")]
    [LinCmsAuthorize("查询所有权限组","管理员")]
    public Task<List<LinGroup>> GetListAsync()
    {
        return _groupService.GetListAsync();
    }

    [HttpGet("{id}")]
    [LinCmsAuthorize("查询一个权限组及其权限","管理员")]
    public async Task<GroupDto> GetAsync(long id)
    {
        GroupDto groupDto = await _groupService.GetAsync(id);
        return groupDto;
    }

    [HttpPost]
    [LinCmsAuthorize("新建权限组","管理员")]
    public async Task<UnifyResponseDto> CreateAsync([FromBody] CreateGroupDto inputDto)
    {
        await _groupService.CreateAsync(inputDto);
        return UnifyResponseDto.Success("新建分组成功");
    }

    [HttpPut("{id}")]
    [LinCmsAuthorize("更新一个权限组","管理员")]
    public async Task<UnifyResponseDto> UpdateAsync(long id, [FromBody] UpdateGroupDto updateGroupDto)
    {
        await _groupService.UpdateAsync(id, updateGroupDto);
        return UnifyResponseDto.Success("更新分组成功");
    }

    [HttpDelete("{id}")]
    [LinCmsAuthorize("删除一个权限组","管理员")]
    public async Task<UnifyResponseDto> DeleteAsync(long id)
    {
        await _groupService.DeleteAsync(id);
        return UnifyResponseDto.Success("删除分组成功");
    }

}
```

这样在方法上已经加了权限的标签，但我们怎么得到系统中的所有权限，让用户配置呢。
[获取控制器及方法特性标签](https://igeekfan.gitee.io/vovo-docs/dotnetcore/lin-cms/reflex-assembly-get-controller-methods-attribute.html#%E8%8E%B7%E5%8F%96%E6%8E%A7%E5%88%B6%E5%99%A8%E5%8F%8A%E6%96%B9%E6%B3%95%E7%89%B9%E6%80%A7%E6%A0%87%E7%AD%BE)。本质上，是通过反射,扫描当前程序集，会获取到一个List，我们可以在系统启动时把这些数据存到数据库中。

 最新的方式是采用此方法，原理都相同。name，module唯一值。存入lin_permission表中，这时就有id值了。lin_group_permission就能用分组关联了。
```
public async Task SeedAsync()
{
    List<PermissionDefinition> linCmsAttributes = ReflexHelper.GeAssemblyLinCmsAttributes();

    List<LinPermission> insertPermissions = new List<LinPermission>();
    List<LinPermission>allPermissions=await  _permissionRepository.Select.ToListAsync();
    
    linCmsAttributes.ForEach(r =>
    {
        bool exist = allPermissions.Any(u => u.Module == r.Module && u.Name == r.Permission);
        if (!exist)
        {
            insertPermissions.Add(new LinPermission(r.Permission, r.Module));
        }
    });
    await _permissionRepository.InsertAsync(insertPermissions);
 }
```

### 实现方法级的权限控制源码解析
原理可以看这个文章[ASP.NET Core 认证与授权[7]:动态授权](https://www.cnblogs.com/RainingNight/p/dynamic-authorization-in-asp-net-core.html)中的**自定义授权过滤器**

我们需要了解一下这些类/接口/抽象类
```
- IAuthorizationService(interface)
- AuthorizationService(class)
- IAuthorizationHandler(interface)
- AuthorizationHandler<TRequirement>(abstract class)
- PermissionAuthorizationHandler（class 自定义的类,继承AuthorizationHandler）
```
### 总结调用链如下

```
LinCmsAuthorizeAttribute（继承了IAsyncAuthorizationFilter的特性标签）
调用了---->
IAuthorizationService中的AuthorizeAsync方法
调用了---->
IAuthorizationHandler中的HandleAsync
调用了---->
AuthorizationHandler中的HandleRequirementAsync抽象方法
相当于调用---->
PermissionAuthorizationHandler类中的实现方法HandleRequirementAsync
调用了---->
IPermissionService类中的CheckPermissionAsync方法。
调用了---->
IAuditBaseRepository<LinPermission,long>
IAuditBaseRepository<LinGroupPermission, long>
使用FreeSql,判断当前用户所在分组是否拥有此权限。
```


IAuthorizationService是什么呢。我们可以理解为，验证当前用户是否拥有对应的资源权限。系统默认实现了该方法
```
public interface IAuthorizationService
{
    Task<AuthorizationResult> AuthorizeAsync(ClaimsPrincipal user, object resource, IEnumerable<IAuthorizationRequirement> requirements);

    Task<AuthorizationResult> AuthorizeAsync(ClaimsPrincipal user, object resource, string policyName);
}
```

AuthorizationService是什么呢.他实现了IAuthorizationService接口.
通过源码我们知道，它调用 **await authorizationHandler.HandleAsync(authContext);**

```
 public async Task<AuthorizationResult> AuthorizeAsync(
  ClaimsPrincipal user,
  object resource,
  IEnumerable<IAuthorizationRequirement> requirements)
{
  if (requirements == null)
    throw new ArgumentNullException(nameof (requirements));
  AuthorizationHandlerContext authContext = this._contextFactory.CreateContext(requirements, user, resource);
  foreach (IAuthorizationHandler authorizationHandler in await this._handlers.GetHandlersAsync(authContext))
  {
    await authorizationHandler.HandleAsync(authContext);
    if (!this._options.InvokeHandlersAfterFailure)
    {
      if (authContext.HasFailed)
        break;
    }
  }
  AuthorizationResult authorizationResult = this._evaluator.Evaluate(authContext);
  if (authorizationResult.Succeeded)
    this._logger.UserAuthorizationSucceeded();
  else
    this._logger.UserAuthorizationFailed();
  return authorizationResult;
}
```

IAuthorizationHandler 仅一个接口。
```
public interface IAuthorizationHandler
{
    /// <summary>
    /// Makes a decision if authorization is allowed.
    /// </summary>
    /// <param name="context">The authorization information.</param>
    Task HandleAsync(AuthorizationHandlerContext context);
}
```

AuthorizationHandler，它继承**IAuthorizationHandler**
而且他是一个抽象类，默认实现了HandleAsync方法，子类只用实现HandleRequirementAsync即可。
```
  public abstract class AuthorizationHandler<TRequirement> : IAuthorizationHandler
    where TRequirement : IAuthorizationRequirement
  {
    public virtual async Task HandleAsync(AuthorizationHandlerContext context)
    {
      foreach (TRequirement requirement in context.Requirements.OfType<TRequirement>())
        await this.HandleRequirementAsync(context, requirement);
    }

    protected abstract Task HandleRequirementAsync(
      AuthorizationHandlerContext context,
      TRequirement requirement);
  }
```

我们就可以继承AuthorizationHandler，子类实现从数据库中取数据做对比，其中泛型参数使用系统内置的一个只有Name的类OperationAuthorizationRequirement，当然，如果我们需要更多的参数，可以继承IAuthorizationRequirement，增加更多的参数。

判断当前用户是否不为null,当调用CheckPermissionAsync，判断是否有此权限。
```
   public class PermissionAuthorizationHandler : AuthorizationHandler<OperationAuthorizationRequirement>
    {
        private readonly IPermissionService _permissionService;

        public PermissionAuthorizationHandler(IPermissionService permissionService)
        {
            _permissionService = permissionService;
        }

        protected override async Task HandleRequirementAsync(AuthorizationHandlerContext context, OperationAuthorizationRequirement requirement)
        {
            Claim userIdClaim = context.User?.FindFirst(_ => _.Type == ClaimTypes.NameIdentifier);
            if (userIdClaim != null)
            {
                if (await _permissionService.CheckPermissionAsync(requirement.Name))
                {
                    context.Succeed(requirement);
                }
            }
        }
    }
```

另外我们还需要把这个Handler注入到我们的DI中，在ConfigureServices中替换如下服务
```
services.AddScoped<IAuthorizationHandler, PermissionAuthorizationHandler>();
```

其中的PermssionAppService中的实现,检查当前登录的用户的是否有此权限
```
public async Task<bool> CheckPermissionAsync(string permission)
{
    long[] groups = _currentUser.Groups;

    LinPermission linPermission = await _permissionRepository.Where(r => r.Name == permission).FirstAsync();

    bool existPermission = await _groupPermissionRepository.Select
        .AnyAsync(r => groups.Contains(r.GroupId) && r.PermissionId == linPermission.Id);

    return existPermission;
}
```

### 更多参考
- [ASP.NET Core 认证与授权[1]:初识认证](https://www.cnblogs.com/RainingNight/p/introduce-basic-authentication-in-asp-net-core.html)

##  开源地址
- 后端接口Gitee 链接 [https://gitee.com/igeekfan/lin-cms-dotnetcore](https://gitee.com/igeekfan/lin-cms-dotnetcore)
- 后端接口GitHub 链接 [https://github.com/luoyunchong/lin-cms-dotnetcore](https://github.com/luoyunchong/lin-cms-dotnetcore)
- 管理端UI [https://github.com/luoyunchong/lin-cms-vue](https://github.com/luoyunchong/lin-cms-vue)
- 用户端UI [https://github.com/luoyunchong/lin-cms-vvlog](https://github.com/luoyunchong/lin-cms-vvlog)