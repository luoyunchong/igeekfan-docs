import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{d as s}from"./app.9d31e028.js";const a={},p=s(`<h1 id="aspnetcore-identity-freesql-\u7684\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#aspnetcore-identity-freesql-\u7684\u5B9E\u73B0" aria-hidden="true">#</a> aspnetcore identity freesql \u7684\u5B9E\u73B0</h1><h2 id="igeekfan-aspnetcore-identity-freesql" tabindex="-1"><a class="header-anchor" href="#igeekfan-aspnetcore-identity-freesql" aria-hidden="true">#</a> IGeekFan.AspNetCore.Identity.FreeSql</h2><p><code>asp.net core 6</code> \u7684<code>identity</code>\u7684<code>freesql</code>\u5B9E\u73B0</p><ul><li>\u5B89\u88C5\u5305</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>dotnet <span class="token function">add</span> package IGeekFan.AspNetCore.Identity.FreeSql
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>\u65B0\u589E FreeSql\u7684Provider \u76F8\u5173\u5305</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>dotnet <span class="token function">add</span> package FreeSql.Provider.MySqlConnector
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="\u6269\u5C55\u7528\u6237\u3001\u89D2\u8272" tabindex="-1"><a class="header-anchor" href="#\u6269\u5C55\u7528\u6237\u3001\u89D2\u8272" aria-hidden="true">#</a> \u6269\u5C55\u7528\u6237\u3001\u89D2\u8272</h3><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AppUser</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IdentityUser<span class="token punctuation">&lt;</span>Guid<span class="token punctuation">&gt;</span></span></span>
<span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AppRole</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IdentityRole<span class="token punctuation">&lt;</span>Guid<span class="token punctuation">&gt;</span></span></span>
<span class="token punctuation">{</span>

<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">IdentityContext</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IdentityDbContext<span class="token punctuation">&lt;</span>AppUser<span class="token punctuation">,</span> AppRole<span class="token punctuation">,</span> Guid<span class="token punctuation">&gt;</span></span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token function">IdentityContext</span><span class="token punctuation">(</span><span class="token class-name">IOptions<span class="token punctuation">&lt;</span>IdentityOptions<span class="token punctuation">&gt;</span></span> identityOptions<span class="token punctuation">,</span> <span class="token class-name">IFreeSql</span> fsql<span class="token punctuation">,</span> <span class="token class-name">DbContextOptions</span> options<span class="token punctuation">)</span>
    <span class="token punctuation">:</span> <span class="token keyword">base</span><span class="token punctuation">(</span>identityOptions<span class="token punctuation">.</span>Value<span class="token punctuation">,</span> fsql<span class="token punctuation">,</span> options<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">protected</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">OnConfiguring</span><span class="token punctuation">(</span><span class="token class-name">DbContextOptionsBuilder</span> builder<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//\u8FD9\u91CC\u76F4\u63A5\u6307\u5B9A\u4E00\u4E2A\u9759\u6001\u7684 IFreeSql \u5BF9\u8C61\u5373\u53EF\uFF0C\u5207\u52FF\u91CD\u65B0 Build()</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">protected</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">OnModelCreating</span><span class="token punctuation">(</span><span class="token class-name">ICodeFirst</span> codefirst<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">base</span><span class="token punctuation">.</span><span class="token function">OnModelCreating</span><span class="token punctuation">(</span>codefirst<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h3 id="\u914D\u7F6E\u7528\u6237\u3001\u89D2\u8272\u7684fulentapi" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u7528\u6237\u3001\u89D2\u8272\u7684fulentapi" aria-hidden="true">#</a> \u914D\u7F6E\u7528\u6237\u3001\u89D2\u8272\u7684FulentAPI</h3><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AppUserConfiguration</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IEntityTypeConfiguration<span class="token punctuation">&lt;</span>AppUser<span class="token punctuation">&gt;</span></span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Configure</span><span class="token punctuation">(</span><span class="token class-name">EfCoreTableFluent<span class="token punctuation">&lt;</span>AppUser<span class="token punctuation">&gt;</span></span> model<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        model<span class="token punctuation">.</span><span class="token function">ToTable</span><span class="token punctuation">(</span><span class="token string">&quot;app_user&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AppRoleConfiguration</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IEntityTypeConfiguration<span class="token punctuation">&lt;</span>AppRole<span class="token punctuation">&gt;</span></span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Configure</span><span class="token punctuation">(</span><span class="token class-name">EfCoreTableFluent<span class="token punctuation">&lt;</span>AppRole<span class="token punctuation">&gt;</span></span> model<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        model<span class="token punctuation">.</span><span class="token function">ToTable</span><span class="token punctuation">(</span><span class="token string">&quot;app_role&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><ul><li>appsettings.json \u8BE5\u914D\u7F6E\u901A\u8FC7\u65B9\u6CD5<code>UseConnectionString</code>\u8BFB\u53D6\u5982\u4E0B\u914D\u7F6E</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;ConnectionStrings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;MySql&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Data Source=localhost;Port=3306;User ID=root;Password=root;Initial Catalog=file;Charset=utf8mb4;SslMode=none;Max pool size=1;Connection LifeTime=20&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u914D\u7F6E-identity-freesql" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E-identity-freesql" aria-hidden="true">#</a> \u914D\u7F6E Identity+FreeSql</h3><ul><li>\u65B0\u589E\u4E00\u4E2A\u6269\u5C55\u65B9\u6CD5\uFF0C\u5F15\u7528 aspnetcore identity \u76F8\u5173\u670D\u52A1</li></ul><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name">IServiceCollection</span> <span class="token function">AddFreeSql</span><span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token class-name">IServiceCollection</span> services<span class="token punctuation">,</span> <span class="token class-name">IConfiguration</span> configuration<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">IFreeSql</span> fsql <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">FreeSqlBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">UseConnectionString</span><span class="token punctuation">(</span>DataType<span class="token punctuation">.</span>MySql<span class="token punctuation">,</span> configuration<span class="token punctuation">[</span><span class="token string">&quot;ConnectionStrings:MySql&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">UseNameConvert</span><span class="token punctuation">(</span>NameConvertType<span class="token punctuation">.</span>PascalCaseToUnderscoreWithLower<span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">UseAutoSyncStructure</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">//\u81EA\u52A8\u540C\u6B65\u5B9E\u4F53\u7ED3\u6784\u5230\u6570\u636E\u5E93\uFF0CFreeSql\u4E0D\u4F1A\u626B\u63CF\u7A0B\u5E8F\u96C6\uFF0C\u53EA\u6709CRUD\u65F6\u624D\u4F1A\u751F\u6210\u8868\u3002</span>
            <span class="token punctuation">.</span><span class="token function">UseMonitorCommand</span><span class="token punctuation">(</span>cmd <span class="token operator">=&gt;</span>
            <span class="token punctuation">{</span>
                Trace<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>cmd<span class="token punctuation">.</span>CommandText <span class="token operator">+</span> <span class="token string">&quot;;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//\u8F6F\u5220\u9664</span>
    fsql<span class="token punctuation">.</span>GlobalFilter<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Apply</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>ISoftDelete<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&quot;IsDeleted&quot;</span><span class="token punctuation">,</span> a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>IsDeleted <span class="token operator">==</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    services<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">AddSingleton</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IFreeSql<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>fsql<span class="token punctuation">)</span><span class="token punctuation">;</span>
    services<span class="token punctuation">.</span><span class="token function">AddFreeRepository</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    services<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">AddScoped</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>UnitOfWorkManager<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//\u53EA\u6709\u5B9E\u4F8B\u5316\u4E86ToDoContext\uFF0C\u624D\u80FD\u6B63\u5E38\u8C03\u7528OnModelCreating\uFF0C\u4E0D\u7136\u76F4\u63A5\u4F7F\u7528\u4ED3\u50A8\uFF0C\u65E0\u6CD5\u8C03\u7528DbContext\u4E2D\u7684OnModelCreating\u65B9\u6CD5\uFF0C\uFF0C\u914D\u7F6E\u7684TodoConfiguration \u5C31\u4F1A\u6CA1\u6709\u751F\u6548</span>
    services<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">AddFreeDbContext</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IdentityContext<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>options <span class="token operator">=&gt;</span> options
                <span class="token punctuation">.</span><span class="token function">UseFreeSql</span><span class="token punctuation">(</span>fsql<span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">UseOptions</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">DbContextOptions</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">{</span>
                    EnableAddOrUpdateNavigateList <span class="token operator">=</span> <span class="token boolean">true</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

    services<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">AddIdentityCore</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>AppUser<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>options <span class="token operator">=&gt;</span> options<span class="token punctuation">.</span>SignIn<span class="token punctuation">.</span>RequireConfirmedAccount <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token generic-method"><span class="token function">AddFreeSqlStores</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IdentityContext<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//fsql.CodeFirst.ApplyConfiguration(new TodoConfiguration());</span>

    <span class="token keyword">return</span> services<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div>`,16);function e(t,o){return p}var u=n(a,[["render",e],["__file","AspNetCore.Identity.FreeSql.html.vue"]]);export{u as default};