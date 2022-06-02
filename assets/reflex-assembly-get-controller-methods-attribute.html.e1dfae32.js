import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{r as i,c as l,a as n,b as r,F as o,d as t,e,o as u}from"./app.c32635e1.js";const p={},b=t('<h2 id="\u83B7\u53D6\u63A7\u5236\u5668\u53CA\u65B9\u6CD5\u7279\u6027\u6807\u7B7E" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u63A7\u5236\u5668\u53CA\u65B9\u6CD5\u7279\u6027\u6807\u7B7E" aria-hidden="true">#</a> \u83B7\u53D6\u63A7\u5236\u5668\u53CA\u65B9\u6CD5\u7279\u6027\u6807\u7B7E</h2><blockquote><p>.NET Core \u53CD\u5C04\u83B7\u53D6\u6240\u6709\u63A7\u5236\u5668\u53CA\u65B9\u6CD5\u4E0A\u7279\u5B9A\u6807\u7B7E.</p></blockquote><p>\u6709\u4E2A\u9700\u6C42\uFF0C\u5C31\u662F\u5728. NET Core\u4E2D\uFF0C\u6211\u4EEC\u60F3\u5728\u9879\u76EE \u542F\u52A8\u65F6\uFF0C\u83B7\u53D6LinCmsAuthorizeAttribute\u8FD9\u4E2A\u7279\u6027\u6807\u7B7E\u6240\u6709\u51FA\u73B0\u7684\u5730\u65B9\uFF0C\u628A\u4ED6\u7684\u53C2\u6570\uFF0C\u653E\u5165\u4E00\u4E2A\u96C6\u5408\u5E76\u7F13\u5B58\u8D77\u6765\uFF0C\u4EE5\u4FBF\u540E\u9762\u4F7F\u7528\u6B64\u6570\u636E\u7528\u4E8E\u6743\u9650\u9A8C\u8BC1\u3002</p><p>\u6211\u4EEC\u901A\u8FC7\u53CD\u5C04\u83B7\u53D6\u6240\u6709\u63A7\u5236\u5668\u4E0B\u53CA\u65B9\u6CD5\u7684Attribute\u3002</p><h2 id="lincmsauthorizeattribute\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#lincmsauthorizeattribute\u662F\u4EC0\u4E48" aria-hidden="true">#</a> LinCmsAuthorizeAttribute\u662F\u4EC0\u4E48</h2><p>\u5176\u4EE3\u7801\u975E\u5E38\u7B80\u5355\uFF0C\u7528\u4E8E\u81EA\u5B9A\u4E49\u6743\u9650\u9A8C\u8BC1\uFF0C\u901A\u8FC7\u91CD\u5199OnAuthorizationAsync\u65B9\u6CD5\uFF0C\u5B9E\u73B0\u56FA\u5B9A\u6743\u9650\u53EF\u5206\u914D\u7ED9\u52A8\u6001\u89D2\u8272\uFF08\u4E5F\u80FD\u5206\u914D\u7ED9\u52A8\u6001\u7528\u6237\uFF09\u3002\u4E3B\u8981\u5C31<strong>\u57FA\u4E8E\u6743\u9650\u7684\u6388\u6743</strong>\u7684\u5B9E\u73B0\u8FDB\u884C\u7814\u7A76\uFF0C\u5B9E\u73B0\u65B9\u6CD5\u7EA7\u522B\u7684\u6743\u9650\u9A8C\u8BC1\u3002</p>',6),c={href:"https://www.cnblogs.com/RainingNight/p/dynamic-authorization-in-aspnetcore.html",target:"_blank",rel:"noopener noreferrer"},m=e("https://www.cnblogs.com/RainingNight/p/dynamic-authorization-in-aspnetcore.html"),d=t(`<p>\u5F53\u7136\uFF0C\u8FD9\u4E2A\u53EA\u662F\u90E8\u5206\u4EE3\u7801\uFF0C\u5B8C\u6574\u4EE3\u7801\u8BF7\u67E5\u770B\u6700\u4E0B\u65B9\u5F00\u6E90\u5730\u5740\uFF0C\u5176\u4E2DLinCmsAuthorizeAttribute\u7EE7\u627FAuthorizeAttribute\uFF0C\u62E5\u6709\u6307\u5B9A\u89D2\u8272\u6743\u9650\u63A7\u5236\uFF0C\u5F53Permission\u672A\u6307\u5B9A\u65F6\uFF0C\u5F53\u8FC7\u6EE4\u5668\u4E0EAuthorize\u529F\u80FD\u76F8\u540C\u3002Module\u662F\u6307\u6A21\u5757\uFF0C\u5373\u591A\u4E2A\u6743\u9650\uFF0C\u5C5E\u4E8E\u540C\u4E00\u4E2A\u6A21\u5757\uFF0C\u65B9\u4FBF\u524D\u53F0\u5C55\u793A\u4E3A\u6811\u578B\u7ED3\u6784\u3002Permission\u5C5E\u6027\u7684\u503C\u4E0D\u53EF\u91CD\u590D\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[AttributeUsage(AttributeTargets.Class | AttributeTargets.Method, AllowMultiple = true)]
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
        return $&quot;\\&quot;{base.ToString()}\\&quot;,\\&quot;Permission:{Permission}\\&quot;,\\&quot;Module:{Module}\\&quot;,\\&quot;Roles:{Roles}\\&quot;,\\&quot;Policy:{Policy}\\&quot;,\\&quot;AuthenticationSchemes:{AuthenticationSchemes}\\&quot;&quot;;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><h2 id="controller" tabindex="-1"><a class="header-anchor" href="#controller" aria-hidden="true">#</a> Controller</h2>`,3),h=e("\u5728 LinCms.Web\u4E2D\u7684Controller\uFF0C\u81F3\u4E8E\u4E3A\u4EC0\u4E48Permission\u4E3A\u4E2D\u6587\uFF0C\u76EE\u524D\u7684\u4E3B\u8981\u539F\u56E0\uFF0C\u6B64\u9879\u76EE\u7528\u4E8E\u9002\u914D "),q={href:"https://github.com/TaleLin/lin-cms-vue",target:"_blank",rel:"noopener noreferrer"},g=e("Lin-CMS-VUE"),A=e("\u9879\u76EE,\u6240\u4EE5\u4E8E\u5E73\u5E38\u6211\u4EEC\u4EE5\u67D0\u4E2A\u5B57\u7B26\u4E32\u4F5C\u4E3A\u6743\u9650\u540D\u4E0D\u540C\uFF0C\u4F46\u4E0D\u987B\u5927\u60CA\u5C0F\u602A\uFF0C\u9053\u7406\u76F8\u540C\u3002"),C=t(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[Route(&quot;cms/log&quot;)]
[ApiController]
public class LogController : ControllerBase
{
    private readonly ILogService _logService;

    public LogController(ILogService logService)
    {
        _logService = logService;
    }

    [HttpGet(&quot;users&quot;)]
    [LinCmsAuthorize(&quot;\u67E5\u8BE2\u65E5\u5FD7\u8BB0\u5F55\u7684\u7528\u6237&quot;, &quot;\u65E5\u5FD7&quot;)]
    public List&lt;string&gt; GetLoggedUsers([FromQuery]PageDto pageDto)
    {
        return _logService.GetLoggedUsers(pageDto);
    }

 
    [HttpGet]
    [LinCmsAuthorize(&quot;\u67E5\u8BE2\u6240\u6709\u65E5\u5FD7&quot;, &quot;\u65E5\u5FD7&quot;)]
    public PagedResultDto&lt;LinLog&gt; GetLogs([FromQuery]LogSearchDto searchDto)
    {
        return _logService.GetLogUsers(searchDto);
    }

    [HttpGet(&quot;search&quot;)]
    [LinCmsAuthorize(&quot;\u641C\u7D22\u65E5\u5FD7&quot;, &quot;\u65E5\u5FD7&quot;)]
    public PagedResultDto&lt;LinLog&gt; SearchLogs([FromQuery]LogSearchDto searchDto)
    {
        return _logService.GetLogUsers(searchDto);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><h2 id="\u6D4B\u8BD5\u7C7B\u83B7\u53D6\u65B9\u6CD5\u4E0A\u7684\u7279\u5B9A\u6807\u7B7E" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5\u7C7B\u83B7\u53D6\u65B9\u6CD5\u4E0A\u7684\u7279\u5B9A\u6807\u7B7E" aria-hidden="true">#</a> \u6D4B\u8BD5\u7C7B\u83B7\u53D6\u65B9\u6CD5\u4E0A\u7684\u7279\u5B9A\u6807\u7B7E</h2><p>in xunit test \u9879\u76EE\u5DE5\u7A0B\u4E2D\uFF0C\u5F00\u59CB\u6211\u4EEC\u7684\u6D4B\u8BD5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[Fact]
public void GetAssemblyMethodsAttributes()
{
    var assembly = typeof(Startup).Assembly.GetTypes().AsEnumerable()
        .Where(type =&gt; typeof(ControllerBase).IsAssignableFrom(type)).ToList();

    assembly.ForEach(r =&gt;
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="\u65B9\u6CD5\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5\u7ED3\u679C" aria-hidden="true">#</a> \u65B9\u6CD5\u7ED3\u679C</h2><p>\u53EF\u5728\u8F93\u51FA\u6587\u672C\u4E2D\u67E5\u770B\uFF0C\u6B63\u662F\u6211\u4EEC\u60F3\u8981\u7684\u4E1C\u897F\uFF0C\u6700\u540E\u4E00\u884C\uFF0C\u662F\u5176\u4ED6Controller\u4E2D\u7684\u5185\u5BB9\uFF0C\u800C\u4E14\u6211\u4EEC\u91CD\u5199\u4E86ToString(),\u6240\u4EE5\u6211\u4EEC\u80FD\u770B\u5230\u5176\u5C5E\u6027\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&quot;LinCms.Zero.Authorization.LinCmsAuthorizeAttribute&quot;,&quot;Permission:\u67E5\u8BE2\u65E5\u5FD7\u8BB0\u5F55\u7684\u7528\u6237&quot;,&quot;Module:\u65E5\u5FD7&quot;,&quot;Roles:&quot;,&quot;Policy:&quot;,&quot;AuthenticationSchemes:&quot;
&quot;LinCms.Zero.Authorization.LinCmsAuthorizeAttribute&quot;,&quot;Permission:\u67E5\u8BE2\u6240\u6709\u65E5\u5FD7&quot;,&quot;Module:\u65E5\u5FD7&quot;,&quot;Roles:&quot;,&quot;Policy:&quot;,&quot;AuthenticationSchemes:&quot;
&quot;LinCms.Zero.Authorization.LinCmsAuthorizeAttribute&quot;,&quot;Permission:\u641C\u7D22\u65E5\u5FD7&quot;,&quot;Module:\u65E5\u5FD7&quot;,&quot;Roles:&quot;,&quot;Policy:&quot;,&quot;AuthenticationSchemes:&quot;
&quot;LinCms.Zero.Authorization.LinCmsAuthorizeAttribute&quot;,&quot;Permission:\u67E5\u770Blin\u7684\u4FE1\u606F&quot;,&quot;Module:\u4FE1\u606F&quot;,&quot;Roles:&quot;,&quot;Policy:&quot;,&quot;AuthenticationSchemes:&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="\u83B7\u53D6\u63A7\u5236\u5668\u4E0A\u7279\u6027\u6807\u7B7E" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u63A7\u5236\u5668\u4E0A\u7279\u6027\u6807\u7B7E" aria-hidden="true">#</a> \u83B7\u53D6\u63A7\u5236\u5668\u4E0A\u7279\u6027\u6807\u7B7E</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/// &lt;summary&gt;
/// \u83B7\u53D6\u63A7\u5236\u5668\u4E0A\u7684LinCmsAuthorizeAttribute
/// &lt;/summary&gt;
/// &quot;LinCms.Zero.Authorization.LinCmsAuthorizeAttribute&quot;,&quot;Permission:&quot;,&quot;Module:&quot;,&quot;Roles:Administrator&quot;,&quot;Policy:&quot;,&quot;AuthenticationSchemes:&quot;
[Fact]
public void GetControllerAttributes()
{
    var assembly = typeof(Startup).Assembly.GetTypes().AsEnumerable()
        .Where(type =&gt; typeof(ControllerBase).IsAssignableFrom(type)).ToList();

    assembly.ForEach(d =&gt;
    {
        var linCmsAuthorize = d.GetCustomAttribute&lt;LinCmsAuthorizeAttribute&gt;();
        if (linCmsAuthorize != null)
        {
            _testOutputHelper.WriteLine(linCmsAuthorize.ToString());
        }
    });
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="controller\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#controller\u7ED3\u679C" aria-hidden="true">#</a> Controller\u7ED3\u679C</h2><p>\u53EA\u6709AdminController\u52A0\u4E86\u6B64\u6807\u7B7E\uFF0C\u6240\u4EE5\u53EA\u6709\u4E00\u884C\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&quot;LinCms.Zero.Authorization.LinCmsAuthorizeAttribute&quot;,&quot;Permission:&quot;,&quot;Module:&quot;,&quot;Roles:Administrator&quot;,&quot;Policy:&quot;,&quot;AuthenticationSchemes:&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u6B64\u65F6Roles\u4E3AAdministrator\uFF0CPermission\u53CAModule\u90FD\u662Fnull\uFF0C \u8FD9\u662F\u56E0\u4E3A\u53EA\u6709AdminController\u4E2D\u52A0\u4E86LinGroup.Administrator=&quot;Administrator&quot;\u5B57\u7B26\u4E32\uFF0C\u5728\u767B\u5F55\u8FC7\u7A0B\u4E2D\uFF0C\u5DF2\u7ECF\u7ED9\u5F53\u524D\u767B\u5F55\u7528\u6237\u8BBE\u7F6E\u4E86 new Claim(ClaimTypes.Role,user.IsAdmin()?LinGroup.Administrator:user.GroupId.ToString())\uFF0C\u5373&quot;Administrator,\u5F53\u7528\u6237\u8BBF\u95EEAdminController\u4E2D\u7684\u65B9\u6CD5\u65F6\uFF0CLinCmsAuthorize\u5E76\u6CA1\u6709\u505A\u76F8\u5173\u9A8C\u8BC1\uFF0C\u90FD\u662FAuthorizeAttribute\uFF0C\u5B9E\u73B0\u4E86\u56FA\u5B9A\u89D2\u8272\u6743\u9650\u7684\u5224\u65AD\u53CA\u767B\u5F55\u7684\u5224\u65AD\u3002LinCmsAuthorize\u5B8C\u6210\u4E86\u56FA\u5B9A\u6743\u9650\u8BBE\u7F6E\u4E3A\u4E0D\u540C\u7684\u52A8\u6001\u89D2\u8272\u540E\uFF0C\u5224\u65AD\u7528\u6237\u662F\u5426\u62E5\u6709\u6B64\u6743\u9650\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[LinCmsAuthorize(Roles = LinGroup.Administrator)]
public class AdminController : ControllerBase
{
    ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,15),v=e("c# \u2013 \u5982\u4F55\u5728asp. net core rc2\u4E2D\u83B7\u53D6\u63A7\u5236\u5668\u7684\u81EA\u5B9A\u4E49\u5C5E\u6027 "),L={href:"https://codeday.me/bug/20181207/453278.html",target:"_blank",rel:"noopener noreferrer"},_=e("https://codeday.me/bug/20181207/453278.html"),x=n("li",null,null,-1),z=n("h2",{id:"\u5F00\u6E90\u5730\u5740",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5F00\u6E90\u5730\u5740","aria-hidden":"true"},"#"),e(" \u5F00\u6E90\u5730\u5740")],-1),y=n("ul",null,[n("li",null,[n("a",{href:"github.com/luoyunchong/lin-cms-dotnetcore"},"github.com/luoyunchong/lin-cms-dotnetcore")])],-1);function f(S,P){const s=i("ExternalLinkIcon");return u(),l(o,null,[b,n("ul",null,[n("li",null,[n("a",c,[m,r(s)])])]),d,n("p",null,[h,n("a",q,[g,r(s)]),A]),C,n("ul",null,[n("li",null,[v,n("a",L,[_,r(s)])]),x]),z,y],64)}var M=a(p,[["render",f],["__file","reflex-assembly-get-controller-methods-attribute.html.vue"]]);export{M as default};
