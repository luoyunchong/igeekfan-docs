import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{r as t,c as l,a as n,b as a,F as p,d as r,e,o}from"./app.7c79074e.js";const u={},c=r(`<h1 id="\u65B9\u6CD5\u7EA7\u522B\u7684\u6743\u9650\u63A7\u5236-api\u7EA7\u522B" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5\u7EA7\u522B\u7684\u6743\u9650\u63A7\u5236-api\u7EA7\u522B" aria-hidden="true">#</a> \u65B9\u6CD5\u7EA7\u522B\u7684\u6743\u9650\u63A7\u5236\uFF08API\u7EA7\u522B\uFF09</h1><p>Lin\u7684\u5B9A\u4F4D\u5728\u4E8E\u5B9E\u73B0\u4E00\u6574\u5957 CMS\u7684\u89E3\u51B3\u65B9\u6848\uFF0C\u5B83\u662F\u4E00\u4E2A\u8BBE\u8BA1\u65B9\u6848\uFF0C\u63D0\u4F9B\u4E86\u4E0D\u540C\u7684\u540E\u7AEF\uFF0C\u4E0D\u540C\u7684\u524D\u7AEF\uFF0C\u800C\u4E14\u4E5F\u652F\u6301\u4E0D\u540C\u7684\u6570\u636E\u5E93</p><p>\u76EE\u524D\u5B98\u65B9\u56E2\u961F\u7EF4\u62A4 lin-cms-vue,lin-cms-spring-boot,lin-cms-koa,lin-cms-flask \u793E\u533A\u7EF4\u62A4\u4E86 lin-cms-tp5,lin-cms-react,lin-cms-dotnetcore\uFF0C\u5373\u5DF2\u652F\u6301vue,react\u4E8C\u79CD\u524D\u7AEF\u6846\u67B6\uFF0Cjava,nodejs,python,php,c#\u7B49\u4E94\u79CD\u540E\u7AEF\u8BED\u8A00\u3002</p><p>\u4E0B\u9762\u6211\u4EEC\u6765\u8BB2\u4E00\u4E0B.NET Core\u8FD9\u4E2A\u9879\u76EE\u4E2D\u6743\u9650\u63A7\u5236\u7684\u5B9E\u73B0\u3002</p><p>\u5BF9\u4E8ECMS\u6765\u8BF4\uFF0C\u4E00\u4E2A\u5B8C\u5584\u7684\u6743\u9650\u6A21\u5757\u662F\u5FC5\u4E0D\u53EF\u5C11\u7684\uFF0C\u662F\u7CFB\u7EDF\u5185\u7F6E\u5B9E\u73B0\u7684\u3002\u4E3A\u4E86\u66F4\u52A0\u7B80\u5355\u5730\u7406\u89E3\u6743\u9650\uFF0C\u6211\u4EEC\u5148\u6765\u7406\u89E3\u4E00\u4E0BASP.NET Core\u6709\u54EA\u4E9B\u6743\u9650\u63A7\u5236\u3002</p><p>1.<strong>AuthorizeAttribute</strong>\u7684\u4F5C\u7528\uFF1F</p><p>\u8FD9\u4E2A\u7279\u6027\u6807\u7B7E\u6388\u6743\u901A\u8FC7\u5C5E\u6027\u53C2\u6570\u914D\u7F6E\uFF0C\u53EF\u5E94\u7528\u4E8E\u63A7\u5236\u5668\u6216\u64CD\u4F5C\u65B9\u6CD5\u4E0A\uFF0C\u5BF9\u7528\u6237\u7684\u8EAB\u4EFD\u8FDB\u884C\u9A8C\u8BC1\u3002</p><p>\u5982\u679C\u6CA1\u6709\u6388\u6743\uFF0C\u4F1A\u8FD4\u56DE403\u72B6\u6001\u7801\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u91CD\u5199\uFF0C\u6765\u5B9E\u73B0\u8FD4\u56DEJSON\u5B57\u7B26\u4E32\uFF0C\u8BA9\u524D\u53F0\u63D0\u793A\u3002\u524D\u63D0\u662F\u8BF7\u6C42\u4E2D\u95F4\u4EF6\u914D\u7F6E\u4E86\u5982\u4E0B\u4E8C\u884C\u3002</p><ul><li><p><strong>app.UseAuthentication();</strong> \u8BA4\u8BC1\uFF0C\u660E\u786E\u662F\u8C01\u5728\u64CD\u4F5C\uFF0C\u8BA4\u8BC1\u65B9\u5F0F\u5982\u7528\u6237\u540D\u5BC6\u7801,\u767B\u5F55\u540E\uFF0C\u53EF\u4EE5\u5F97\u5230\u4E00\u4E2Atoken\uFF0C\u6216\u8005\u5199\u5165cookies\uFF0C\u8FD9\u6837\u53EF\u4EE5\u786E\u5B9A\u8FD9\u4E2A\u7528\u6237\u662F\u8C01</p></li><li><p><strong>app.UseAuthorization();</strong> \u6388\u6743\u4E2D\u95F4\u4EF6\uFF0C\u660E\u786E\u4F60\u662F\u5426\u6709\u67D0\u4E2A\u6743\u9650\u3002\u5728http\u8BF7\u6C42\u65F6\uFF0C\u4E2D\u95F4\u4EF6\u4F1A\u5728\u5E26\u6709\u6743\u9650\u7279\u6027\u6807\u7B7E <strong>[Authorize]</strong> \u7684\u64CD\u4F5C\uFF0C\u8FDB\u884C\u6743\u9650\u5224\u65AD\uFF0C\u5305\u62EC\u89D2\u8272\uFF0C\u7B56\u7565\u7B49\u3002</p></li></ul><p>\u8BE5\u63A7\u5236\u5668\u4E0B\u7684\u64CD\u4F5C\u90FD\u5FC5\u987B\u7ECF\u8FC7\u8EAB\u4EFD\u9A8C\u8BC1\uFF0C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[Authorize]
public class AccountController : Controller
{
    public ActionResult Login()
    {
    }

    public ActionResult Logout()
    {
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u8FD9\u6837\u53EA\u663E\u793A\u5355\u4E2A\u65B9\u6CD5\u5FC5\u987B\u5E94\u7528\u6388\u6743\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class AccountController : Controller
{
   public ActionResult Login()
   {
   }

   [Authorize]
   public ActionResult Logout()
   {
   }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u5982\u679C\u6211\u4EEC\u901A\u8FC7<strong>AllowAnonymous</strong>\u7279\u6027\u6807\u7B7E\u53BB\u6389\u8EAB\u4EFD\u9A8C\u8BC1\u3002Login\u65B9\u6CD5\u65E0\u987B\u8FDB\u884C\u9A8C\u8BC1\u3002\u5373\u53EF\u533F\u540D\u8BBF\u95EE\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[Authorize]
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><ol start="2"><li>\u57FA\u4E8E\u89D2\u8272\u7684\u6388\u6743</li></ol><p>\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u7ED9\u8FD9\u4E2A\u7279\u6027\u6807\u7B7E\u52A0\u53C2\u6570\uFF0C\u914D\u7F6E\uFF0C\u67D0\u4E2A\u65B9\u6CD5\uFF0C\u63A7\u5236\u5668\u662F\u5426\u6709\u8FD9\u4E2A\u89D2\u8272\uFF0C\u5982\u679C\u6709\u6B64\u89D2\u8272\u624D\u80FD\u8BBF\u95EE\u8FD9\u4E9B\u8D44\u6E90\u3002</p><p>\u5355\u4E2A\u89D2\u8272</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[Authorize(Roles = &quot;Administrator&quot;)]
public class AdministrationController : Controller
{
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u591A\u4E2A\u89D2\u8272\uFF0C\u6211\u4EEC\u53EF\u4EE5\u8FD9\u6837\u914D\u7F6E,\u5373\u7528\u9017\u53F7\u5206\u9694\u3002\u7528\u6237\u6709\u5176\u4E2D\u4E00\u4E2A\u89D2\u8272\u5373\u53EF\u8BBF\u95EE\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[Authorize(Roles = &quot;HRManager,Finance&quot;)]
public class SalaryController : Controller
{
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u5F53\u67D0\u4E2A\u65B9\u6CD5\u5FC5\u987B\u540C\u65F6\u6709\u4E8C\u4E2A\u89D2\u8272\u600E\u4E48\u529E\u5462\u3002\u8BE5\u63A7\u5236\u5668\u53EA\u6709\u540C\u65F6\u6709PowerUser\uFF0C\u548CControlPanelUser\u7684\u89D2\u8272\u624D\u80FD\u8BBF\u95EE\u8FD9\u4E9B\u8D44\u6E90\u4E86\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[Authorize(Roles = &quot;PowerUser&quot;)]
[Authorize(Roles = &quot;ControlPanelUser&quot;)]
public class ControlPanelController : Controller
{
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,23),b=e("3.\u66F4\u591A\u3002\u8BF7\u770B\u5B98\u7F51 "),m={href:"https://docs.microsoft.com/zh-cn/aspnet/core/security/authorization/roles?view=aspnetcore-3.1",target:"_blank",rel:"noopener noreferrer"},d=e("https://docs.microsoft.com/zh-cn/aspnet/core/security/authorization/roles?view=aspnetcore-3.1"),h=r(`<p>\u66F4\u591A\u8BE5\u7279\u6027\u6807\u7B7E\u7684\u4ECB\u7ECD\uFF0C\u4E5F\u53EF\u53C2\u8003\u5B98\u7F51\uFF0C\u8FD9\u91CC\u5C31\u4E0D\u5C55\u5F00\u4E86\u3002</p><p>\u90A3\u8FD9\u4E2A\u89D2\u8272\uFF0C\u5230\u5E95\u5728\u54EA\u914D\u7F6E\u7684\uFF1F\uFF1F</p><p>\u767B\u5F55\u65F6\u751F\u6210\u7684Token,\u662F\u57FA\u4E8EJWT\u7684\uFF0C\u5176\u4E2D\u7684Claim\u7684type\u4E3A<strong>ClaimTypes.Role</strong>\uFF08\u679A\u4E3E\u503C\uFF09\uFF0C\u89D2\u8272\u540D\u79F0\u4E3A\u5B57\u7B26\u4E32\uFF0C\u4E0E\u7279\u6027\u6807\u7B7E\u4E2D\u7684Roles\u5C5E\u6027\u503C\u76F8\u540C\u3002 \u5982</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>new Claim(ClaimTypes.Role, &quot;Administrator&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u6709\u591A\u4E2A\u89D2\u8272\u65F6\uFF0C**List Claim ** \u591A\u52A0\u51E0\u4E2A <strong>new Claim(ClaimTypes.Role, &quot;PowerUser&quot;);</strong> \u4E5F\u662F\u652F\u6301\u7684\u3002user\u4E3A\u7528\u6237\u4FE1\u606F\uFF0CLinGroups\u4E3A\u5F53\u524D\u7528\u6237\u7684\u5206\u7EC4\uFF08\u591A\u4E2A\uFF09</p><p>\u5373\u5982\u4E0B\u4EE3\u7801\u793A\u4F8B\uFF0C\u591A\u4E2A\u5206\u7EC4\uFF08\u89D2\u8272\uFF09</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var claims = new List&lt;Claim&gt;()
{
    new Claim(ClaimTypes.NameIdentifier, user.Email ?? &quot;&quot;),
    new Claim(ClaimTypes.GivenName, user.Nickname ?? &quot;&quot;),
    new Claim(ClaimTypes.Name, user.Username ?? &quot;&quot;),
};

user.LinGroups?.ForEach(r =&gt;
 {
     claims.Add(new Claim(ClaimTypes.Role, r.Name));
 });
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="authorizeattribute\u6E90\u7801" tabindex="-1"><a class="header-anchor" href="#authorizeattribute\u6E90\u7801" aria-hidden="true">#</a> AuthorizeAttribute\u6E90\u7801</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method, AllowMultiple = true, Inherited = true)]
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\uFF0C\u5B83\u7EE7\u627F\u4E86Attribute\uFF0C\u8BF4\u660E\u8FD9\u662F\u4E00\u4E2A\u7279\u6027\u6807\u7B7E\uFF0CIAuthorizeData\u662F\u4E00\u4E2A\u63A5\u53E3\uFF0C\u6709\u8FD9\u4E09\u4E2A\u5C5E\u6027\uFF0C\u7EA6\u675F\u4E86 \u4E00\u4E2A\u89C4\u8303\uFF0C\u5373\u6709\u89D2\u8272Roles\uFF0C\u6709\u7B56\u7565Policy\uFF0C\u6709\u8EAB\u4EFD\u9A8C\u8BC1\u65B9\u6848AuthenticationSchemes\uFF0C\u8BE5\u7279\u6027\u652F\u6301Class,\u652F\u6301\u65B9\u6CD5\uFF0C\u8BE5\u7279\u6027\u6807\u7B7E\u652F\u6301\u591A\u4E2A\u5171\u7528\uFF0C\u8BE5\u7279\u6027\u6807\u7B7E\u652F\u6301\u88AB\u7EE7\u627F\u3002</p><p>\u57FA\u4E8E\u89D2\u8272\u7684\u6388\u6743\u548C\u57FA\u4E8E\u58F0\u660E\u7684\u6388\u6743\u662F\u4E00\u79CD\u9884\u914D\u7F6E\u7684\u7B56\u7565\uFF0C\u5373\u56FA\u5B9A\u7684\u89D2\u8272\uFF0C\u56FA\u5B9A\u7684Claims\u9A8C\u8BC1\u3002</p><p>\u6211\u4EEC\u53EF\u4EE5\u57FA\u4E8E\u81EA\u5B9A\u4E49\u7B56\u7565\u7684\u5B9E\u73B0\u66F4\u591A\u7684\u6743\u9650\u9A8C\u8BC1\u6216\u67D0\u4E9B\u89C4\u5219\u9A8C\u8BC1\u3002</p><p>AuthorizeAttribute\u80FD\u505A\u7684\u6743\u9650\u63A7\u5236\u5982\u4E0B</p><ul><li>\u57FA\u4E8E\u89D2\u8272\u7EA7\u522B\u7684\u6743\u9650\u63A7\u5236\uFF08\u591A\u4E2A\u89D2\u8272\uFF0C\u5355\u4E2A\u89D2\u8272\uFF09</li><li>\u57FA\u4E8E\u58F0\u660E\u7684\u6388\u6743\uFF1A\u53EF\u81EA\u5B9A\u4E49\u58F0\u660E\u7279\u6027\u3002</li><li>\u57FA\u4E8E\u7B56\u7565\u7684\u6388\u6743\uFF1A</li></ul><h2 id="lin-cms-dotnetcore\u4E2D\u7684\u6743\u9650\u8BBE\u8BA1" tabindex="-1"><a class="header-anchor" href="#lin-cms-dotnetcore\u4E2D\u7684\u6743\u9650\u8BBE\u8BA1" aria-hidden="true">#</a> lin-cms-dotnetcore\u4E2D\u7684\u6743\u9650\u8BBE\u8BA1</h2><p>\u8BF4\u4E86\u8FD9\u4E48\u591A\u5B98\u65B9\u63D0\u4F9B\u7684\uFF0C\u6211\u4EEC\u8BB2\u4E00\u4E0Blin-cms-dotnetcore\u4E2D\u7684\u6743\u9650\u8BBE\u8BA1</p>`,16),g=e("\u5B8C\u6574\u7684\u8868\u7ED3\u6784\u5982\u4E0B "),A={href:"https://luoyunchong.github.io/igeekfan-docs/dotnetcore/lin-cms/table.html",target:"_blank",rel:"noopener noreferrer"},v=e("https://luoyunchong.github.io/igeekfan-docs/dotnetcore/lin-cms/table.html"),x=r(`<h4 id="lincmsauthorizeattribute" tabindex="-1"><a class="header-anchor" href="#lincmsauthorizeattribute" aria-hidden="true">#</a> LinCmsAuthorizeAttribute</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method, AllowMultiple = true)]
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
                HandlerAuthenticationFailed(context, &quot;\u8BA4\u8BC1\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u8BF7\u6C42\u5934\u6216\u8005\u91CD\u65B0\u767B\u9646&quot;, ErrorCode.AuthenticationFailed);
                return;
            }

            IAuthorizationService authorizationService = (IAuthorizationService)context.HttpContext.RequestServices.GetService(typeof(IAuthorizationService));
            AuthorizationResult authorizationResult = await authorizationService.AuthorizeAsync(context.HttpContext.User, null, new OperationAuthorizationRequirement() { Name = Permission });
            if (!authorizationResult.Succeeded)
            {
                HandlerAuthenticationFailed(context, $&quot;\u60A8\u6CA1\u6709\u6743\u9650\uFF1A{Module}-{Permission}&quot;, ErrorCode.NoPermission);
            }
        }

        public void HandlerAuthenticationFailed(AuthorizationFilterContext context, string errorMsg, ErrorCode errorCode)
        {
            context.HttpContext.Response.StatusCode = StatusCodes.Status401Unauthorized;
            context.Result = new JsonResult(new UnifyResponseDto(errorCode, errorMsg, context.HttpContext));
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><p>\u4E0A\u9762\u7684\u5B9E\u73B0\u975E\u5E38\u7B80\u5355,LinCmsAuthorizeAttribute\u7EE7\u627F\u4E8EAttribute\uFF0C\u8BF4\u660E\u662F\u4E00\u4E2A\u7279\u6027\u6807\u7B7E\uFF0C\u6709\u4E8C\u4E2A\u5C5E\u6027Permission\uFF0CModule\uFF0C\u4EE3\u8868\u6743\u9650\u540D\uFF0C\u6A21\u5757\u540D\uFF08\u7528\u4E8E\u533A\u5206\u54EA\u4E2A\u529F\u80FD\u6A21\u5757\uFF09\uFF0C\u7136\u540E\u5C06\u6743\u9650\u540D\u79F0\u8F6C\u5316\u4E3AOperationAuthorizationRequirement\uFF0C\u7136\u540E\u8C03\u7528authorizationService\u4E2D\u7684\u65B9\u6CD5AuthorizeAsync\u6765\u5B8C\u6210\u6388\u6743\u3002</p><p>\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u5728\u63A7\u5236\u5668\u4E0A\u4F7F\u7528LinCmsAuthorizeAttribute,\u90A3\u4E48\u6211\u4EEC</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[Route(&quot;cms/admin/group&quot;)]
[ApiController]
public class GroupController : ControllerBase
{
    private readonly IGroupService _groupService;
    public GroupController(IGroupService groupService)
    {
        _groupService = groupService;
    }

    [HttpGet(&quot;all&quot;)]
    [LinCmsAuthorize(&quot;\u67E5\u8BE2\u6240\u6709\u6743\u9650\u7EC4&quot;,&quot;\u7BA1\u7406\u5458&quot;)]
    public Task&lt;List&lt;LinGroup&gt;&gt; GetListAsync()
    {
        return _groupService.GetListAsync();
    }

    [HttpGet(&quot;{id}&quot;)]
    [LinCmsAuthorize(&quot;\u67E5\u8BE2\u4E00\u4E2A\u6743\u9650\u7EC4\u53CA\u5176\u6743\u9650&quot;,&quot;\u7BA1\u7406\u5458&quot;)]
    public async Task&lt;GroupDto&gt; GetAsync(long id)
    {
        GroupDto groupDto = await _groupService.GetAsync(id);
        return groupDto;
    }

    [HttpPost]
    [LinCmsAuthorize(&quot;\u65B0\u5EFA\u6743\u9650\u7EC4&quot;,&quot;\u7BA1\u7406\u5458&quot;)]
    public async Task&lt;UnifyResponseDto&gt; CreateAsync([FromBody] CreateGroupDto inputDto)
    {
        await _groupService.CreateAsync(inputDto);
        return UnifyResponseDto.Success(&quot;\u65B0\u5EFA\u5206\u7EC4\u6210\u529F&quot;);
    }

    [HttpPut(&quot;{id}&quot;)]
    [LinCmsAuthorize(&quot;\u66F4\u65B0\u4E00\u4E2A\u6743\u9650\u7EC4&quot;,&quot;\u7BA1\u7406\u5458&quot;)]
    public async Task&lt;UnifyResponseDto&gt; UpdateAsync(long id, [FromBody] UpdateGroupDto updateGroupDto)
    {
        await _groupService.UpdateAsync(id, updateGroupDto);
        return UnifyResponseDto.Success(&quot;\u66F4\u65B0\u5206\u7EC4\u6210\u529F&quot;);
    }

    [HttpDelete(&quot;{id}&quot;)]
    [LinCmsAuthorize(&quot;\u5220\u9664\u4E00\u4E2A\u6743\u9650\u7EC4&quot;,&quot;\u7BA1\u7406\u5458&quot;)]
    public async Task&lt;UnifyResponseDto&gt; DeleteAsync(long id)
    {
        await _groupService.DeleteAsync(id);
        return UnifyResponseDto.Success(&quot;\u5220\u9664\u5206\u7EC4\u6210\u529F&quot;);
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br></div></div>`,5),_=e("\u8FD9\u6837\u5728\u65B9\u6CD5\u4E0A\u5DF2\u7ECF\u52A0\u4E86\u6743\u9650\u7684\u6807\u7B7E\uFF0C\u4F46\u6211\u4EEC\u600E\u4E48\u5F97\u5230\u7CFB\u7EDF\u4E2D\u7684\u6240\u6709\u6743\u9650\uFF0C\u8BA9\u7528\u6237\u914D\u7F6E\u5462\u3002 "),z={href:"https://igeekfan.gitee.io/igeekfan-docs/dotnetcore/lin-cms/reflex-assembly-get-controller-methods-attribute.html#%E8%8E%B7%E5%8F%96%E6%8E%A7%E5%88%B6%E5%99%A8%E5%8F%8A%E6%96%B9%E6%B3%95%E7%89%B9%E6%80%A7%E6%A0%87%E7%AD%BE",target:"_blank",rel:"noopener noreferrer"},y=e("\u83B7\u53D6\u63A7\u5236\u5668\u53CA\u65B9\u6CD5\u7279\u6027\u6807\u7B7E"),C=e("\u3002\u672C\u8D28\u4E0A\uFF0C\u662F\u901A\u8FC7\u53CD\u5C04,\u626B\u63CF\u5F53\u524D\u7A0B\u5E8F\u96C6\uFF0C\u4F1A\u83B7\u53D6\u5230\u4E00\u4E2AList\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5728\u7CFB\u7EDF\u542F\u52A8\u65F6\u628A\u8FD9\u4E9B\u6570\u636E\u5B58\u5230\u6570\u636E\u5E93\u4E2D\u3002"),q=r(`<p>\u6700\u65B0\u7684\u65B9\u5F0F\u662F\u91C7\u7528\u6B64\u65B9\u6CD5\uFF0C\u539F\u7406\u90FD\u76F8\u540C\u3002name\uFF0Cmodule\u552F\u4E00\u503C\u3002\u5B58\u5165lin_permission\u8868\u4E2D\uFF0C\u8FD9\u65F6\u5C31\u6709id\u503C\u4E86\u3002lin_group_permission\u5C31\u80FD\u7528\u5206\u7EC4\u5173\u8054\u4E86\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public async Task SeedAsync()
{
    List&lt;PermissionDefinition&gt; linCmsAttributes = ReflexHelper.GeAssemblyLinCmsAttributes();

    List&lt;LinPermission&gt; insertPermissions = new List&lt;LinPermission&gt;();
    List&lt;LinPermission&gt;allPermissions=await  _permissionRepository.Select.ToListAsync();
    
    linCmsAttributes.ForEach(r =&gt;
    {
        bool exist = allPermissions.Any(u =&gt; u.Module == r.Module &amp;&amp; u.Name == r.Permission);
        if (!exist)
        {
            insertPermissions.Add(new LinPermission(r.Permission, r.Module));
        }
    });
    await _permissionRepository.InsertAsync(insertPermissions);
 }
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="\u5B9E\u73B0\u65B9\u6CD5\u7EA7\u7684\u6743\u9650\u63A7\u5236\u6E90\u7801\u89E3\u6790" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u65B9\u6CD5\u7EA7\u7684\u6743\u9650\u63A7\u5236\u6E90\u7801\u89E3\u6790" aria-hidden="true">#</a> \u5B9E\u73B0\u65B9\u6CD5\u7EA7\u7684\u6743\u9650\u63A7\u5236\u6E90\u7801\u89E3\u6790</h3>`,3),f=e("\u539F\u7406\u53EF\u4EE5\u770B\u8FD9\u4E2A\u6587\u7AE0"),R={href:"https://www.cnblogs.com/RainingNight/p/dynamic-authorization-in-asp-net-core.html",target:"_blank",rel:"noopener noreferrer"},P=e("ASP.NET Core \u8BA4\u8BC1\u4E0E\u6388\u6743[7]:\u52A8\u6001\u6388\u6743"),S=e("\u4E2D\u7684"),H=n("strong",null,"\u81EA\u5B9A\u4E49\u6388\u6743\u8FC7\u6EE4\u5668",-1),I=r(`<p>\u6211\u4EEC\u9700\u8981\u4E86\u89E3\u4E00\u4E0B\u8FD9\u4E9B\u7C7B/\u63A5\u53E3/\u62BD\u8C61\u7C7B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- IAuthorizationService(interface)
- AuthorizationService(class)
- IAuthorizationHandler(interface)
- AuthorizationHandler&lt;TRequirement&gt;(abstract class)
- PermissionAuthorizationHandler\uFF08class \u81EA\u5B9A\u4E49\u7684\u7C7B,\u7EE7\u627FAuthorizationHandler\uFF09
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="\u603B\u7ED3\u8C03\u7528\u94FE\u5982\u4E0B" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3\u8C03\u7528\u94FE\u5982\u4E0B" aria-hidden="true">#</a> \u603B\u7ED3\u8C03\u7528\u94FE\u5982\u4E0B</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>LinCmsAuthorizeAttribute\uFF08\u7EE7\u627F\u4E86IAsyncAuthorizationFilter\u7684\u7279\u6027\u6807\u7B7E\uFF09
\u8C03\u7528\u4E86----&gt;
IAuthorizationService\u4E2D\u7684AuthorizeAsync\u65B9\u6CD5
\u8C03\u7528\u4E86----&gt;
IAuthorizationHandler\u4E2D\u7684HandleAsync
\u8C03\u7528\u4E86----&gt;
AuthorizationHandler\u4E2D\u7684HandleRequirementAsync\u62BD\u8C61\u65B9\u6CD5
\u76F8\u5F53\u4E8E\u8C03\u7528----&gt;
PermissionAuthorizationHandler\u7C7B\u4E2D\u7684\u5B9E\u73B0\u65B9\u6CD5HandleRequirementAsync
\u8C03\u7528\u4E86----&gt;
IPermissionService\u7C7B\u4E2D\u7684CheckPermissionAsync\u65B9\u6CD5\u3002
\u8C03\u7528\u4E86----&gt;
IAuditBaseRepository&lt;LinPermission,long&gt;
IAuditBaseRepository&lt;LinGroupPermission, long&gt;
\u4F7F\u7528FreeSql,\u5224\u65AD\u5F53\u524D\u7528\u6237\u6240\u5728\u5206\u7EC4\u662F\u5426\u62E5\u6709\u6B64\u6743\u9650\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>IAuthorizationService\u662F\u4EC0\u4E48\u5462\u3002\u6211\u4EEC\u53EF\u4EE5\u7406\u89E3\u4E3A\uFF0C\u9A8C\u8BC1\u5F53\u524D\u7528\u6237\u662F\u5426\u62E5\u6709\u5BF9\u5E94\u7684\u8D44\u6E90\u6743\u9650\u3002\u7CFB\u7EDF\u9ED8\u8BA4\u5B9E\u73B0\u4E86\u8BE5\u65B9\u6CD5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public interface IAuthorizationService
{
    Task&lt;AuthorizationResult&gt; AuthorizeAsync(ClaimsPrincipal user, object resource, IEnumerable&lt;IAuthorizationRequirement&gt; requirements);

    Task&lt;AuthorizationResult&gt; AuthorizeAsync(ClaimsPrincipal user, object resource, string policyName);
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>AuthorizationService\u662F\u4EC0\u4E48\u5462.\u4ED6\u5B9E\u73B0\u4E86IAuthorizationService\u63A5\u53E3. \u901A\u8FC7\u6E90\u7801\u6211\u4EEC\u77E5\u9053\uFF0C\u5B83\u8C03\u7528 <strong>await authorizationHandler.HandleAsync(authContext);</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> public async Task&lt;AuthorizationResult&gt; AuthorizeAsync(
  ClaimsPrincipal user,
  object resource,
  IEnumerable&lt;IAuthorizationRequirement&gt; requirements)
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>IAuthorizationHandler \u4EC5\u4E00\u4E2A\u63A5\u53E3\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public interface IAuthorizationHandler
{
    /// &lt;summary&gt;
    /// Makes a decision if authorization is allowed.
    /// &lt;/summary&gt;
    /// &lt;param name=&quot;context&quot;&gt;The authorization information.&lt;/param&gt;
    Task HandleAsync(AuthorizationHandlerContext context);
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>AuthorizationHandler\uFF0C\u5B83\u7EE7\u627F<strong>IAuthorizationHandler</strong> \u800C\u4E14\u4ED6\u662F\u4E00\u4E2A\u62BD\u8C61\u7C7B\uFF0C\u9ED8\u8BA4\u5B9E\u73B0\u4E86HandleAsync\u65B9\u6CD5\uFF0C\u5B50\u7C7B\u53EA\u7528\u5B9E\u73B0HandleRequirementAsync\u5373\u53EF\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  public abstract class AuthorizationHandler&lt;TRequirement&gt; : IAuthorizationHandler
    where TRequirement : IAuthorizationRequirement
  {
    public virtual async Task HandleAsync(AuthorizationHandlerContext context)
    {
      foreach (TRequirement requirement in context.Requirements.OfType&lt;TRequirement&gt;())
        await this.HandleRequirementAsync(context, requirement);
    }

    protected abstract Task HandleRequirementAsync(
      AuthorizationHandlerContext context,
      TRequirement requirement);
  }
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u6211\u4EEC\u5C31\u53EF\u4EE5\u7EE7\u627FAuthorizationHandler\uFF0C\u5B50\u7C7B\u5B9E\u73B0\u4ECE\u6570\u636E\u5E93\u4E2D\u53D6\u6570\u636E\u505A\u5BF9\u6BD4\uFF0C\u5176\u4E2D\u6CDB\u578B\u53C2\u6570\u4F7F\u7528\u7CFB\u7EDF\u5185\u7F6E\u7684\u4E00\u4E2A\u53EA\u6709Name\u7684\u7C7BOperationAuthorizationRequirement\uFF0C\u5F53\u7136\uFF0C\u5982\u679C\u6211\u4EEC\u9700\u8981\u66F4\u591A\u7684\u53C2\u6570\uFF0C\u53EF\u4EE5\u7EE7\u627FIAuthorizationRequirement\uFF0C\u589E\u52A0\u66F4\u591A\u7684\u53C2\u6570\u3002</p><p>\u5224\u65AD\u5F53\u524D\u7528\u6237\u662F\u5426\u4E0D\u4E3Anull,\u5F53\u8C03\u7528CheckPermissionAsync\uFF0C\u5224\u65AD\u662F\u5426\u6709\u6B64\u6743\u9650\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>   public class PermissionAuthorizationHandler : AuthorizationHandler&lt;OperationAuthorizationRequirement&gt;
    {
        private readonly IPermissionService _permissionService;

        public PermissionAuthorizationHandler(IPermissionService permissionService)
        {
            _permissionService = permissionService;
        }

        protected override async Task HandleRequirementAsync(AuthorizationHandlerContext context, OperationAuthorizationRequirement requirement)
        {
            Claim userIdClaim = context.User?.FindFirst(_ =&gt; _.Type == ClaimTypes.NameIdentifier);
            if (userIdClaim != null)
            {
                if (await _permissionService.CheckPermissionAsync(requirement.Name))
                {
                    context.Succeed(requirement);
                }
            }
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>\u53E6\u5916\u6211\u4EEC\u8FD8\u9700\u8981\u628A\u8FD9\u4E2AHandler\u6CE8\u5165\u5230\u6211\u4EEC\u7684DI\u4E2D\uFF0C\u5728ConfigureServices\u4E2D\u66FF\u6362\u5982\u4E0B\u670D\u52A1</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>services.AddScoped&lt;IAuthorizationHandler, PermissionAuthorizationHandler&gt;();
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5176\u4E2D\u7684PermssionAppService\u4E2D\u7684\u5B9E\u73B0,\u68C0\u67E5\u5F53\u524D\u767B\u5F55\u7684\u7528\u6237\u7684\u662F\u5426\u6709\u6B64\u6743\u9650</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public async Task&lt;bool&gt; CheckPermissionAsync(string permission)
{
    long[] groups = _currentUser.Groups;

    LinPermission linPermission = await _permissionRepository.Where(r =&gt; r.Name == permission).FirstAsync();

    bool existPermission = await _groupPermissionRepository.Select
        .AnyAsync(r =&gt; groups.Contains(r.GroupId) &amp;&amp; r.PermissionId == linPermission.Id);

    return existPermission;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="\u66F4\u591A\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u66F4\u591A\u53C2\u8003" aria-hidden="true">#</a> \u66F4\u591A\u53C2\u8003</h3>`,20),k={href:"https://www.cnblogs.com/RainingNight/p/introduce-basic-authentication-in-asp-net-core.html",target:"_blank",rel:"noopener noreferrer"},w=e("ASP.NET Core \u8BA4\u8BC1\u4E0E\u6388\u6743[1]:\u521D\u8BC6\u8BA4\u8BC1"),T=n("h2",{id:"\u5F00\u6E90\u5730\u5740",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5F00\u6E90\u5730\u5740","aria-hidden":"true"},"#"),e(" \u5F00\u6E90\u5730\u5740")],-1),L=e("\u540E\u7AEF\u63A5\u53E3Gitee \u94FE\u63A5 "),E={href:"https://gitee.com/igeekfan/lin-cms-dotnetcore",target:"_blank",rel:"noopener noreferrer"},U=e("https://gitee.com/igeekfan/lin-cms-dotnetcore"),G=e("\u540E\u7AEF\u63A5\u53E3GitHub \u94FE\u63A5 "),D={href:"https://github.com/luoyunchong/lin-cms-dotnetcore",target:"_blank",rel:"noopener noreferrer"},F=e("https://github.com/luoyunchong/lin-cms-dotnetcore"),N=e("\u7BA1\u7406\u7AEFUI "),M={href:"https://github.com/luoyunchong/lin-cms-vue",target:"_blank",rel:"noopener noreferrer"},B=e("https://github.com/luoyunchong/lin-cms-vue"),O=e("\u7528\u6237\u7AEFUI "),j={href:"https://github.com/luoyunchong/lin-cms-vvlog",target:"_blank",rel:"noopener noreferrer"},V=e("https://github.com/luoyunchong/lin-cms-vvlog");function J(W,$){const s=t("ExternalLinkIcon");return o(),l(p,null,[c,n("ul",null,[n("li",null,[b,n("a",m,[d,a(s)])])]),h,n("p",null,[g,n("a",A,[v,a(s)])]),x,n("p",null,[_,n("a",z,[y,a(s)]),C]),q,n("p",null,[f,n("a",R,[P,a(s)]),S,H]),I,n("ul",null,[n("li",null,[n("a",k,[w,a(s)])])]),T,n("ul",null,[n("li",null,[L,n("a",E,[U,a(s)])]),n("li",null,[G,n("a",D,[F,a(s)])]),n("li",null,[N,n("a",M,[B,a(s)])]),n("li",null,[O,n("a",j,[V,a(s)])])])],64)}var X=i(u,[["render",J],["__file","authorize.html.vue"]]);export{X as default};
