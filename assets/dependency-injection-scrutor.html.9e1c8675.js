import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";import{r as t,c as l,a as e,b as a,F as i,e as n,d as c,o as p}from"./app.45f37c13.js";const b={},d=e("h1",{id:"\u4F9D\u8D56\u6CE8\u5165scrutor",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u4F9D\u8D56\u6CE8\u5165scrutor","aria-hidden":"true"},"#"),n(" \u4F9D\u8D56\u6CE8\u5165scrutor")],-1),u=e("p",null,"\u5B98\u7F51\u4ECB\u7ECD",-1),o={href:"https://docs.microsoft.com/zh-cn/aspnet/core/fundamentals/dependency-injection?view=aspnetcore-2.2",target:"_blank",rel:"noopener noreferrer"},m=n("https://docs.microsoft.com/zh-cn/aspnet/core/fundamentals/dependency-injection?view=aspnetcore-2.2"),h=n("\u5F00\u6E90\u5730\u5740"),g={href:"https://github.com/khellang/Scrutor",target:"_blank",rel:"noopener noreferrer"},v=n("https://github.com/khellang/Scrutor"),f=n("\u53C2\u8003\u6587\u6863 "),x={href:"https://www.cnblogs.com/catcher1994/p/10316928.html",target:"_blank",rel:"noopener noreferrer"},_=n("https://www.cnblogs.com/catcher1994/p/10316928.html"),I=n(" \u624B\u52A8\u7BA1\u7406\u4F9D\u8D56\u6CE8\u5165\u8FC7\u4E8E\u9EBB\u70E6,\u5F53\u6709\u591A\u4E2A\u4ED3\u50A8\uFF0C\u670D\u52A1\uFF0C\u65E0\u6CD5\u7EDF\u4E00\u6CE8\u5165\uFF0CScrutor\u80FD\u5E2E\u52A9\u6211\u4EEC\u7B80\u5316ASP.NET Core\u7684DI\u6CE8\u518C\u3002"),y=c(`<p>\u5728ConfigServices\u4E2D\uFF0C\u6211\u4EEC\u539F\u672C\u9700\u8981\u8FD9\u6837\u5B50\u4F9D\u6B21\u6CE8\u5165\u4ED3\u50A8\uFF0C\u670D\u52A1\u548C\u5176\u4ED6\u63A5\u53E3\u53CA\u5B9E\u73B0\uFF0C\u5F53\u6709\u591A\u4E2A\u4ED3\u50A8\u65F6\uFF0C\u8FD9\u6837\u5C31\u8FC7\u4E8E\u7E41\u7410\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>services.AddTransient&lt;IUserRepository, UserRepository&gt;();
services.AddTransient&lt;IUserService, UserService&gt;();
services.AddTransient&lt;ICurrentUser, CurrentUser&gt;();
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="serivce\u540E\u7F00\u670D\u52A1\u6CE8\u5165di" tabindex="-1"><a class="header-anchor" href="#serivce\u540E\u7F00\u670D\u52A1\u6CE8\u5165di" aria-hidden="true">#</a> Serivce\u540E\u7F00\u670D\u52A1\u6CE8\u5165DI</h2><p>\u5F53\u6211\u4EEC\u6709\u591A\u4E2AService\u540E\u7F00\u7684\u670D\u52A1\u65F6\uFF0C\u4F7F\u7528\u4EE5\u4E0B\u65B9\u6CD5\uFF0C\u53EF\u5C06\u670D\u52A1\u626B\u63CF\u53EA\u7559\u4E0B\u4EE5Serivce\u7ED3\u5C3E\u7684\u7C7B\uFF0C\u5C06\u5176\u7C7B\u578B\u6CE8\u518C\u4E3A\u63D0\u4F9B\u6240\u6709\u516C\u5171\u63A5\u53E3\u751F\u6210\u670D\u52A1\uFF0C\u5176\u751F\u547D\u5468\u671F\u4E3ATransient\uFF0C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>services.Scan(scan =&gt; scan
        //\u52A0\u8F7DStartup\u8FD9\u4E2A\u7C7B\u6240\u5728\u7684\u7A0B\u5E8F\u96C6
        .FromAssemblyOf&lt;Startup&gt;()
        // \u8868\u793A\u8981\u6CE8\u518C\u90A3\u4E9B\u7C7B\uFF0C\u4E0A\u9762\u7684\u4EE3\u7801\u8FD8\u505A\u4E86\u8FC7\u6EE4\uFF0C\u53EA\u7559\u4E0B\u4E86\u4EE5 Service \u7ED3\u5C3E\u7684\u7C7B
        .AddClasses(classes =&gt; classes.Where(t =&gt; t.Name.EndsWith(&quot;Service&quot;, StringComparison.OrdinalIgnoreCase)))
        //\u8868\u793A\u5C06\u7C7B\u578B\u6CE8\u518C\u4E3A\u63D0\u4F9B\u5176\u6240\u6709\u516C\u5171\u63A5\u53E3\u4F5C\u4E3A\u670D\u52A1
        .AsImplementedInterfaces()
        //\u8868\u793A\u6CE8\u518C\u7684\u751F\u547D\u5468\u671F\u4E3A Transient
        .WithTransientLifetime()
         );

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="itransientdependency" tabindex="-1"><a class="header-anchor" href="#itransientdependency" aria-hidden="true">#</a> ITransientDependency</h2><p>\u65B0\u5EFA\u4E00\u4E2A\u7A7A\u63A5\u53E3\uFF0C\u5F53\u5176\u4ED6\u7C7B\u7EE7\u627F\u6B64\u63A5\u53E3\u540E\uFF0C\u7EDF\u4E00\u6CE8\u5165\u5230DI\u4E2D\uFF0C\u4EE5Transient\u7684\u751F\u547D\u5468\u671F\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>namespace LinCms.Zero.Dependency
{
    public interface ITransientDependency
    {
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u63A5\u53E3" aria-hidden="true">#</a> \u63A5\u53E3</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public interface ICurrentUser
{
    int? Id { get; }

    int? GroupId { get; }

    bool? IsAdmin { get; }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="\u6A21\u62DF\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u6A21\u62DF\u5B9E\u73B0" aria-hidden="true">#</a> \u6A21\u62DF\u5B9E\u73B0</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    public class CurrentUser : ICurrentUser, ITransientDependency
    {
     
        public int? Id =&gt; 1;
        public int? GroupId =&gt; 2;
        public bool? IsAdmin =&gt; true;
    }
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u626B\u63CF\u6240\u6709\u7EE7\u627FITransientDependency\u7684\u5B9E\u73B0\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>   services.Scan(scan =&gt; scan
       // We start out with all types in the assembly of ITransientService
        .FromAssemblyOf&lt;ITransientDependency&gt;()
        // AddClasses starts out with all public, non-abstract types in this assembly.
        // These types are then filtered by the delegate passed to the method.
        // In this case, we filter out only the classes that are assignable to ITransientService.
        .AddClasses(classes =&gt; classes.AssignableTo&lt;ITransientDependency&gt;())
        // We then specify what type we want to register these classes as.
        // In this case, we want to register the types as all of its implemented interfaces.
        // So if a type implements 3 interfaces; A, B, C, we&#39;d end up with three separate registrations.
        .AsImplementedInterfaces()
        // And lastly, we specify the lifetime of these registrations.
        .WithTransientLifetime()
         );

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="\u5982\u4F55\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u4F7F\u7528" aria-hidden="true">#</a> \u5982\u4F55\u4F7F\u7528</h2><p>\u5728\u5176\u4ED6\u7C7B\u4E2D\u4F7F\u7528\u6B64\u63A5\u53E3</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[ApiController]
[Route(&quot;cms/user&quot;)]
public class UserController : ControllerBase
{
    private readonly ICurrentUser _currentUser;

    public UserController(ICurrentUser currentUser)
    {
        _currentUser = currentUser;
    }

    [HttpGet]
    public int GetUser()
    {
        return _currentUser.Id;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="\u7EDF\u4E00\u6CE8\u5165" tabindex="-1"><a class="header-anchor" href="#\u7EDF\u4E00\u6CE8\u5165" aria-hidden="true">#</a> \u7EDF\u4E00\u6CE8\u5165</h2><p>\u5F53\u7136\uFF0C\u6211\u4EEC\u53EF\u4EE5\u7EDF\u4E00\u6CE8\u5165\uFF0C\u800C\u975E\u5199\u4E8C\u6B21servics.Scan</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>services.Scan(scan =&gt; scan
            .FromAssemblyOf&lt;Startup&gt;()
            .AddClasses(classes =&gt; classes.Where(t =&gt; t.Name.EndsWith(&quot;Service&quot;,StringComparison.OrdinalIgnoreCase)))
            .AsImplementedInterfaces()
            .WithTransientLifetime()
            .FromAssemblyOf&lt;ITransientDependency&gt;()
            .AddClasses(classes =&gt; classes.AssignableTo&lt;ITransientDependency&gt;())
            .AsImplementedInterfaces()
            .WithTransientLifetime()
      );
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,20);function S(C,T){const s=t("ExternalLinkIcon");return p(),l(i,null,[d,u,e("p",null,[e("a",o,[m,a(s)])]),e("ul",null,[e("li",null,[h,e("a",g,[v,a(s)])]),e("li",null,[f,e("a",x,[_,a(s)]),I])]),y],64)}var U=r(b,[["render",S],["__file","dependency-injection-scrutor.html.vue"]]);export{U as default};
