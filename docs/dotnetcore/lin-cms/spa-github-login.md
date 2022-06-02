---
title: GitHub第三方授权登录
tags:
  - 开源
  - .NET Core
  - lin-cms
  - GitHub
category:
  - lin-cms-dotnetcore
---

使用 SPA+.NET Core3.1 实现 GitHub 第三方授权登录 类似使用 AspNet.Security.OAuth.GitHub，前端使用如下：VUE+Vue-Router+axios

## AspNet.Security.OAuth.GitHub

- GitHub [https://github.com/aspnet-contrib/AspNet.Security.OAuth.Providers](https://github.com/aspnet-contrib/AspNet.Security.OAuth.Providers)

## GitHub 授权登录

什么配置的过程不说了。。有一推。

- [GitHub 第三方登录](https://www.jianshu.com/p/78d186aeb526)
- [给你的网站添加第三方登录以及短信验证功能](https://juejin.im/post/5dfb04cee51d45583a66c2f3)

下面为示例

```
client_id:0be6b05fc717bfc4fb67
client_secret:xxxxxxxxxxxxxxx
```

Get

```text
https://github.com/login/oauth/authorize?client_id=0be6b05fc717bfc4fb67&redirect_uri=https://localhost:5001/signin-github
```

会重定向到

[https://localhost:5001/signin-github?code=07537a84d12bbae08361](https://localhost:5001/signin-github?code=07537a84d12bbae08361)

这个 code 放到下面的请求中，获取 access_token
POST 方式（PostMan 去请求）

```text
https://github.com/login/oauth/access_token?client_id=0be6b05fc717bfc4fb67&client_secret=xxxxxxxxxxxxxxx&code=07537a84d12bbae08361
```

Get 方式

```text
https://api.github.com/user?access_token=787506afa3271d077b98f18af56d7cfdc8db43b4
```

然后就能获取用户信息

```json
{
  "login": "luoyunchong",
  "id": 18613266,
  "node_id": "MDQ6VXNlcjE4NjEzMjY2",
  "avatar_url": "https://avatars1.githubusercontent.com/u/18613266?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/luoyunchong",
  "html_url": "https://github.com/luoyunchong",
  "followers_url": "https://api.github.com/users/luoyunchong/followers",
  "following_url": "https://api.github.com/users/luoyunchong/following{/other_user}",
  "gists_url": "https://api.github.com/users/luoyunchong/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/luoyunchong/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/luoyunchong/subscriptions",
  "organizations_url": "https://api.github.com/users/luoyunchong/orgs",
  "repos_url": "https://api.github.com/users/luoyunchong/repos",
  "events_url": "https://api.github.com/users/luoyunchong/events{/privacy}",
  "received_events_url": "https://api.github.com/users/luoyunchong/received_events",
  "type": "User",
  "site_admin": false,
  "name": "IGeekFan",
  "company": null,
  "blog": "https://blog.igeekfan.cn",
  "location": null,
  "email": "luoyunchong@foxmail.com",
  "hireable": null,
  "bio": "学习之路漫漫无期。",
  "public_repos": 14,
  "public_gists": 0,
  "followers": 16,
  "following": 11,
  "created_at": "2016-04-22T10:33:44Z",
  "updated_at": "2019-12-21T14:49:33Z"
}
```

## .NET Core3.1

以下代码为主要代码，完整代码看下面的 DEMO 链接。

使用 WebApi 时，看了一些项目，全是基于 MVC 结构的，都不是我想要的。看了一些博客上面介绍 ,步骤都是千篇一律，都是配合前后端分离的。

- 前端运行在:http://localhost:8081
- 后端运行在:https://localhost:5001

### 前后端分离的 SPA 配合第三方授权登录流程如下

本地测试时，gitHub 回调地址设置 http(s)://ip:端口/signin-github

- 如: https://localhost:5001/signin-github。

#### 1. 上面这个明明填写的后端的地址，那后端怎么把结果通知前端呢？

前端请求**https://localhost:5001/signin?provider=GitHub&redirectUrl=http://localhost:8080/login-result**

- 提供参数 provider 为 GitHub，
- redirectUrl 为 GitHub 授权登录后，回调 signin-github 后，后端再去重定向的地址，这里填前端的一个路由。

#### 2. 后端只提供了 signin，signin-callback 路由，没有 signin-github，那 github 上配置的路由是怎么回调回来呢？

[google-登录，微软文档](https://docs.microsoft.com/zh-cn/aspnet/core/security/authentication/social/google-logins?view=aspnetcore-3.1)，其中有一个**更改默认回调 URI**,通过 AddGitHub 中的 CallbackPath 属性配置。

介绍了回调地址应配置 signin-google,所以这里应该是 signin-github，他是可以配置的，不需要自己写程序处理 signin-google 这个路由，内部有中间件已经处理了。

#### 3. 回调到 signin-github 后，后端怎么处理，才能让前端刷新。获取登录后的信息呢。

具体上面的根据 code 获取 access_token，根据 access_token 获取用户的信息的过程，这些处理的过程，都不需要我们自己处理。我们可以用直接获取用户信息。

一个方法 SignIn,只要**return Challenge(properties, provider);**，

- provider 为 GitHub，
- properties var properties = new AuthenticationProperties { RedirectUri = url };

这个 url 为另一个获取用户信息的路由，只要拼接好地址即可。

```
var authenticateResult = await _contextAccessor.HttpContext.AuthenticateAsync(provider);
string email = authenticateResult.Principal.FindFirst(ClaimTypes.Email)?.Value;
string name = authenticateResult.Principal.FindFirst(ClaimTypes.Name)?.Value;
```

需要注入

```
private readonly IHttpContextAccessor _contextAccessor;
public AuthenticationController( IHttpContextAccessor contextAccessor)
{
    _contextAccessor = contextAccessor;
}
```

### 代码部署（简化）

打开 NuGet 包管理,安装包

```
Install-Package AspNet.Security.OAuth.GitHub
```

appSettings.json

```
"Authentication": {
    "GitHub": {
      "ClientId": "0be6b05fc717bfc4fb67",
      "ClientSecret": "xxxxxxxxxxxxxxx"
    }
}
```

add 扩展方法

```
public static class JwtConfiguration
{
    public static void AddJwtConfiguration(this IServiceCollection services, IConfiguration configuration)
    {

        services.AddAuthentication(opts =>
            {
                opts.DefaultScheme = CookieAuthenticationDefaults.AuthenticationScheme;
                opts.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddCookie(options =>
        {
            options.LoginPath = "/signin";
            options.LogoutPath = "/signout";
        }).AddGitHub(options =>
        {
            options.ClientId = configuration["Authentication:GitHub:ClientId"];
            options.ClientSecret = configuration["Authentication:GitHub:ClientSecret"];
        });
    }
}
```

默认情况下，如头像，email，是没有获取的。

```
.AddGitHub(options =>
{
    options.ClientId = configuration["Authentication:GitHub:ClientId"];
    options.ClientSecret = configuration["Authentication:GitHub:ClientSecret"];
    //options.CallbackPath = new PathString("~/signin-github");//与GitHub上的回调地址相同，默认即是/signin-github
    options.Scope.Add("user:email");
    //authenticateResult.Principal.FindFirst(LinConsts.Claims.AvatarUrl)?.Value;  得到GitHub头像
    options.ClaimActions.MapJsonKey(LinConsts.Claims.AvatarUrl, "avatar_url");
    options.ClaimActions.MapJsonKey(LinConsts.Claims.BIO, "bio");
    options.ClaimActions.MapJsonKey(LinConsts.Claims.BlogAddress, "blog");
});

#其中LinConsts类为静态常量
public static class LinConsts
{
    public static class Claims
    {
        public const string BIO = "urn:github:bio";
        public const string AvatarUrl = "urn:github:avatar_url";
        public const string BlogAddress = "urn:github:blog";
    }
}
```

startup.cs

ConfigureServices 中配置此服务

```
    services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
    services.AddJwtConfiguration(Configuration);
```

创建 AuthenticationController.cs
增加 SignIn，用于处理用户授权成功后，重定回 signin-callback,并将参数带回。

```
        private readonly IHttpContextAccessor _contextAccessor;
        private readonly IConfiguration _configuration;

        public AuthenticationController(IHttpContextAccessor contextAccessor, IConfiguration configuration)
        {
            _contextAccessor = contextAccessor;
            _configuration = configuration;
        }

        [HttpGet("~/signin")]
        public async Task<IActionResult> SignIn(string provider, string redirectUrl)
        {
            var request = _contextAccessor.HttpContext.Request;
            var url =
                $"{request.Scheme}://{request.Host}{request.PathBase}{request.Path}-callback?provider={provider}&redirectUrl={redirectUrl}";
            var properties = new AuthenticationProperties { RedirectUri = url };
            properties.Items["LoginProviderKey"] = provider;
            return Challenge(properties, provider);

        }
```

在 signin 方法中，用户点击授权后（第一次），会根据其传递的 URL，重定向到这个地址，signin-callback,参数也会一同携带。provider 为 GitHub,redirectUrl 为：http://localhost:8081/login-result.

```
[HttpGet("~/signin-callback")]
public async Task<IActionResult> Home(string provider = null, string redirectUrl = "")
{
    var authenticateResult = await _contextAccessor.HttpContext.AuthenticateAsync(provider);
    if (!authenticateResult.Succeeded) return Redirect(redirectUrl);
    var openIdClaim = authenticateResult.Principal.FindFirst(ClaimTypes.NameIdentifier);
    if (openIdClaim == null || string.IsNullOrWhiteSpace(openIdClaim.Value))
        return Redirect(redirectUrl);

    //TODO 记录授权成功后的信息

    string email = authenticateResult.Principal.FindFirst(ClaimTypes.Email)?.Value;
    string name = authenticateResult.Principal.FindFirst(ClaimTypes.Name)?.Value;
    string gitHubName = authenticateResult.Principal.FindFirst(GitHubAuthenticationConstants.Claims.Name)?.Value;
    string gitHubUrl = authenticateResult.Principal.FindFirst(GitHubAuthenticationConstants.Claims.Url)?.Value;
    //startup 中 AddGitHub配置项  options.ClaimActions.MapJsonKey(LinConsts.Claims.AvatarUrl, "avatar_url");
    string avatarUrl = authenticateResult.Principal.FindFirst(LinConsts.Claims.AvatarUrl)?.Value;

    return Redirect($"{redirectUrl}?openId={openIdClaim.Value}");
}
```

这时候我们能获取用户信息了。那么前端怎么办呢。我们写个方法，获取用户信息，看看效果。

- 浏览器直接打开能得到 github 的 id。
- axios GET 请求 https://localhost:5001/OpenId 得到 null

```
[HttpGet("~/OpenId")]
public async Task<string> OpenId(string provider = null)
{
   var authenticateResult = await _contextAccessor.HttpContext.AuthenticateAsync(provider);
   if (!authenticateResult.Succeeded) return null;
   var openIdClaim = authenticateResult.Principal.FindFirst(ClaimTypes.NameIdentifier);
   return openIdClaim?.Value;
}
```

我记得之前传 Token 时，后台是可以这样获取的。

```
[HttpGet("~/GetOpenIdByToken")]
public string GetOpenIdByToken()
{
    return User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
}
```

LoginResult.vue 在 created 生命周期中。都是得到 null

```
axios({
  methods: "get",
  url: "https://localhost:5001/OpenId?provider=GitHub"
})
  .then(function(response) {
    // handle success
    console.log(response);
  })

axios({
  methods: "get",
  url: "https://localhost:5001/GetOpenIdByToken"
})
  .then(function(response) {
    // handle success
    console.log(response);
  })
```

### 为什么呢？？？

因为前后端分离，不是基于 Cookies 的。http 是无状态的。每次请求无法区分用户的。我们可以根据当前的 ClaimsPrincipal，根据 JWT 生成相应的 Token，axios 请求时，放到 headers 中。

安装包

```
Install-Package Microsoft.AspNetCore.Authentication.JwtBearer
```

AppSettings.json 配置改成

```
"Authentication": {
"JwtBearer": {
  "SecurityKey": "JWTStudyWebsite_DI20DXU3",
  "Issuer": "JWTStudy",
  "Audience": "JWTStudyWebsite"
},
"GitHub": {
  "ClientId": "0be6b05fc717bfc4fb67",
  "ClientSecret": "xxxxxxxxxxxxxxx"
}
}
```

在 signin-callback 路由中，得到 authenticateResult.Principal，其中默认包含了(id,login,name,url)，授权得到 eamil，另外 MapJsonKey 扩展了以下字段（avatar_url、bio、blog)

```cs
var authenticateResult = await _contextAccessor.HttpContext.AuthenticateAsync(provider);
string token = this.CreateToken(authenticateResult.Principal);
```

根据 ClaimsPrincipal 值生成 token 值。

```cs
private string CreateToken(ClaimsPrincipal claimsPrincipal)
{

    var handler = new JwtSecurityTokenHandler();
    var key = new SymmetricSecurityKey(
        Encoding.UTF8.GetBytes(_configuration["Authentication:JwtBearer:SecurityKey"]));
    var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
    var token = new JwtSecurityToken(
        _configuration["Authentication:JwtBearer:Issuer"],
        _configuration["Authentication:JwtBearer:Audience"],
        claimsPrincipal.Claims,
        expires: DateTime.Now.AddMinutes(30),
        signingCredentials: credentials
    );

    return handler.WriteToken(token);
}
```

这里的 claimsPrincipal 是什么呢。简单的说就是一个存有 github 授权信息的对象，可以解析出对应的 Clamis，这里其实就是用了 Clamis 的属性值。

| Claim                            | ClaimsIdentity                                                | ClaimsPrincipal         |
| -------------------------------- | ------------------------------------------------------------- | ----------------------- |
| id、name,url,email,avatar_url 等 | 由多组 Claim 组成，这里可指 GitHub 授权登录后得到的那个对象。 | ClaimsIdentity 的持有者 |

具体 Jwt 的生成与配置项。这里不详细说明。可以看这个示例（.NET Core2.2）[https://github.com/luoyunchong/BasicTemplate](https://github.com/luoyunchong/BasicTemplate)

AddJwtConfiguration 改成如下内容

```cs
public static void AddJwtConfiguration(this IServiceCollection services, IConfiguration configuration)
{

    services.AddAuthentication(opts =>
        {
            opts.DefaultScheme = CookieAuthenticationDefaults.AuthenticationScheme;
            opts.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
        }).AddCookie(options =>
    {
        options.LoginPath = "/signin";
        options.LogoutPath = "/signout";
    }).AddJwtBearer(JwtBearerDefaults.AuthenticationScheme, options =>
    {
        options.Audience = configuration["Authentication:JwtBearer:Audience"];

        options.TokenValidationParameters = new TokenValidationParameters
        {
            // The signing key must match!
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(
                Encoding.ASCII.GetBytes(configuration["Authentication:JwtBearer:SecurityKey"])),

            // Validate the JWT Issuer (iss) claim
            ValidateIssuer = true,
            ValidIssuer = configuration["Authentication:JwtBearer:Issuer"],

            // Validate the JWT Audience (aud) claim
            ValidateAudience = true,
            ValidAudience = configuration["Authentication:JwtBearer:Audience"],

            // Validate the token expiry
            ValidateLifetime = true,

            // If you want to allow a certain amount of clock drift, set that here
            //ClockSkew = TimeSpan.Zero
        };
    }).AddGitHub(options =>
    {
        options.ClientId = configuration["Authentication:GitHub:ClientId"];
        options.ClientSecret = configuration["Authentication:GitHub:ClientSecret"];
        //options.CallbackPath = new PathString("~/signin-github");//与GitHub上的回调地址相同，默认即是/signin-github
        options.Scope.Add("user:email");
        //authenticateResult.Principal.FindFirst(LinConsts.Claims.AvatarUrl)?.Value;  得到GitHub头像
        options.ClaimActions.MapJsonKey(LinConsts.Claims.AvatarUrl, "avatar_url");
        options.ClaimActions.MapJsonKey(LinConsts.Claims.BIO, "bio");
        options.ClaimActions.MapJsonKey(LinConsts.Claims.BlogAddress, "blog");
    });
}
```

[前端 LoginResult.vue 代码](https://github.com/luoyunchong/dotnetcore-examples/blob/master/aspnetcore-oatuth2/spa-vue-oauth2/src/components/LoginResult.vue)

前端运行

```bash
yarn install
yarn serve
```

点击 GitHub 登录

GetOpenIdByToken 根据生成的 token 值，解析出了用户 id,这样前端在 login-result 这个组件中，把 token 保存好，并重定向自己的主页，获取用户所有信息即可。

```
data: 18613266
status: 200
config: {url: "https://localhost:5001/GetOpenIdByToken"}
```

OpenId?provider=GitHub 则得不到数据，只能浏览器直接请求 https://localhost:5001/OpenId?provider=GitHub，才能到 github 的 id。这个适应于前后端不分离，或者属于之前我们经常使用 MVC 结构，同一域名下，同一端口，基于 Cookies 登录的判断。

## 参考

- [.net Core2.2 WebApi 通过 OAuth2.0 实现微信登录](https://www.cnblogs.com/rsls/p/10522649.html)
- [AspNetCore3.0 和 JWT](https://blog.csdn.net/weixin_30414305/article/details/101389325)
- [用户系统设计：第三方授权、账号绑定及解绑（下）](http://www.woshipm.com/pd/509712.html)

## Demo 示例

- GitHub [https://github.com/luoyunchong/dotnetcore-examples/blob/master/aspnetcore-oatuth2](https://github.com/luoyunchong/dotnetcore-examples/blob/master/aspnetcore-oatuth2)
