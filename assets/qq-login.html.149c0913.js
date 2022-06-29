import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";import{r as p,c as i,a as n,b as e,F as l,d as t,e as s,o}from"./app.bf5b5af2.js";const c={},u=t(`<h1 id="qq\u7B2C\u4E09\u65B9\u6388\u6743\u767B\u5F55" tabindex="-1"><a class="header-anchor" href="#qq\u7B2C\u4E09\u65B9\u6388\u6743\u767B\u5F55" aria-hidden="true">#</a> QQ\u7B2C\u4E09\u65B9\u6388\u6743\u767B\u5F55</h1><h2 id="\u5B89\u88C5\u5305" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u5305" aria-hidden="true">#</a> \u5B89\u88C5\u5305</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>dotnet add package AspNet.Security.OAuth.QQ
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,3),d={href:"https://luoyunchong.github.io/igeekfan-docs/dotnetcore/lin-cms/spa-github-login.html",target:"_blank",rel:"noopener noreferrer"},b=s("\u63A5\u4E0A\u6587GitHub\u7B2C\u4E09\u65B9\u6388\u6743\u767B\u5F55"),m=s("\u7533\u8BF7\u8FC7\u7A0B\u4E0D\u4ECB\u7ECD\u4E86\uFF0C"),h={href:"https://wiki.connect.qq.com/%E5%87%86%E5%A4%87%E5%B7%A5%E4%BD%9C_oauth2-0",target:"_blank",rel:"noopener noreferrer"},g=s("\u7533\u8BF7\u8005\u8D44\u6599"),q=s(",\u4E2A\u4EBA\u4E5F\u662F\u53EF\u4EE5\u7533\u8BF7\u6210\u529F\u7684\u3002"),k=t(`<p>\u8FD9\u65F6\u5019\u6709\u4E8C\u4E2A\u53C2\u6570\u5C31\u662Fclientid clientsecret</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>APP ID\uFF1Axxxx
APP Key\uFF1Axxxxxx
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5176\u4E2D<strong>\u5E73\u53F0\u4FE1\u606F</strong>\uFF0C\u8FD9\u4E2A\u7533\u8BF7\u5BA1\u6838\u901A\u8FC7\u540E\uFF0C<strong>\u4E0D\u8981\u4FEE\u6539\uFF0C\u5343\u4E07\u4E0D\u8981\u968F\u4FBF\u4FEE\u6539</strong>\uFF0C\u4E00\u4FEE\u6539\u5C31\u8981\u91CD\u65B0\u5BA1\u6838\u3002</p><p>\u7F51\u7AD9\u56DE\u8C03\u57DF:\u53EF\u4EE5\u968F\u4FBF\u4FEE\u6539\uFF0C\u5E76\u4E14\u53EF\u4EE5\u5199\u591A\u4E2A\uFF0C\u4E2D\u95F4\u7528\u82F1\u6587\u9017\u53F7\u5206\u9694\u5373\u53EF\u3002 \u6BD4\u5982\uFF0C\u7F51\u7AD9\u5730\u5740\u586B\u7684\uFF1Ahttps://api.igeekfan.cn\uFF0C\u4E0B\u9762\u5982\u679C\u662Flocalhost\uFF0C\u662F\u53EF\u4EE5\u7684\uFF0C\u4F46\u5982\u679C\u662F\u57DF\u540D,\u4FBF\u53EA\u80FD\u662Fhttps://api.igeekfan.cn\u8FD9\u4E2A\u57DF\u540D\u4E0B\u7684\u8DEF\u5F84\u3002</p><p>\u7F51\u7AD9\u56DE\u8C03\u57DF\u914D\u7F6E,\u540E\u53F0\u662F\u8FD0\u884C\u5728https://localhost:5001\u7AEF\u53E3\u4E0A\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>https://api.igeekfan.cn/signin-qq;https://localhost:5001/signin-qq
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u63A5\u53E3\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u63A5\u53E3\u4ECB\u7ECD" aria-hidden="true">#</a> \u63A5\u53E3\u4ECB\u7ECD</h2><p>server-side\u6A21\u5F0F\uFF0C\u662FOAuth2.0\u8BA4\u8BC1\u7684\u4E00\u79CD\u6A21\u5F0F\uFF0C\u53C8\u79F0Web Server Flow\uFF1B</p><p><img src="http://qzonestyle.gtimg.cn/qzone/vas/opensns/res/img/OAuth_guide_V2_1.png" alt="image" loading="lazy"></p><p>\u83B7\u53D6Authorization Code https://graph.qq.com/oauth2.0/authorize</p><p>\u901A\u8FC7Authorization Code\u83B7\u53D6Access Token https://graph.qq.com/oauth2.0/token</p><p>\u83B7\u53D6\u7528\u6237OpenID_OAuth2.0 https://graph.qq.com/oauth2.0/me</p><p>\u83B7\u53D6\u7528\u6237\u4E2A\u4EBA\u4FE1\u606F https://graph.qq.com/user/get_user_info</p>`,13),_={id:"\u4F7F\u7528authorization-code\u83B7\u53D6access-token",tabindex:"-1"},C=n("a",{class:"header-anchor",href:"#\u4F7F\u7528authorization-code\u83B7\u53D6access-token","aria-hidden":"true"},"#",-1),x=s(),y={href:"https://wiki.connect.qq.com/%E4%BD%BF%E7%94%A8authorization_code%E8%8E%B7%E5%8F%96access_token",target:"_blank",rel:"noopener noreferrer"},A=s("\u4F7F\u7528Authorization_Code\u83B7\u53D6Access_Token"),v=t(`<p>\u63A5\u5165\u6D41\u7A0B\u5982\u4E0B\uFF1A</p><ol><li>\u5148\u83B7\u53D6Authorization Code\uFF1B</li><li>\u901A\u8FC7Authorization Code\u83B7\u53D6Access Token</li></ol><p>1.Step1\uFF1A\u83B7\u53D6Authorization Code</p><p>GET</p><p>https://graph.qq.com/oauth2.0/authorize?response_type=code&amp;client_id=client_id&amp;redirect_uri=https://localhost:5001/signin-qq&amp;state=123abc</p><p>\u5177\u4F53\u53C2\u6570\u53EF\u67E5\u770B\u5B98\u7F51\u3002</p><p>state\u7531\u7528\u6237\u81EA\u5DF1\u521B\u5EFA\u4E00\u4E2A\u968F\u673A\u6570\uFF0C\u4EE5\u9632\u6B62CSRF\u653B\u51FB\u3002</p><p>\u5982\u679C\u7528\u6237\u6210\u529F\u767B\u5F55\u5E76\u6388\u6743\uFF0C\u5219\u4F1A\u8DF3\u8F6C\u5230\u6307\u5B9A\u7684\u56DE\u8C03\u5730\u5740\uFF0C\u5E76\u5728redirect_uri\u5730\u5740\u540E\u5E26\u4E0AAuthorization Code\u548C\u539F\u59CB\u7684state\u503C\u3002\u5982\uFF1A</p><p>https://localhost:5001/signin-qq?code=B6D497755EACE4635115FC82BE24F280&amp;state=123abc</p><p>\u540E\u53F0\u5148\u6839\u636Estate\u9A8C\u8BC1\u662F\u81EA\u5DF1\u53D1\u51FA\u7684\u8BF7\u6C42\uFF0C\u5224\u65AD\u662F\u5426\u76F8\u540C\uFF0C\u4E0D\u76F8\u540C\uFF0C\u5219\u4EE3\u8868\u975E\u672C\u9879\u76EE\u53D1\u51FA\u7684\u6388\u6743\u767B\u5F55\u8BF7\u6C42\u3002</p><ol start="2"><li>\u6839\u636Ecode\u83B7\u53D6access_token</li></ol><p>GET</p><p>https://graph.qq.com/oauth2.0/token?grant_type=authorization_code&amp;client_id=client_id&amp;client_secret=client_secret&amp;code=B6D497755EACE4635115FC82BE24F280&amp;redirect_uri=https://localhost:5001/signin-qq</p><p>\u8FD9\u65F6\u5019\u4F60\u4F1A\u5F97\u5230</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>access_token=1B6E45FA99BA3D6B347713440C9BCEFE&amp;expires_in=7776000&amp;refresh_token=8DB1D48D95C85D3EF593936B8ACE5EE0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u83B7\u53D6\u7528\u6237openid-oauth2-0" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u7528\u6237openid-oauth2-0" aria-hidden="true">#</a> \u83B7\u53D6\u7528\u6237OpenID_OAuth2.0</h2><p>GET</p><p>https://graph.qq.com/oauth2.0/me?access_token=1B6E45FA99BA3D6B347713440C9BCEFE</p><p>openid\u662F\u6B64\u7F51\u7AD9\u4E0A\u552F\u4E00\u5BF9\u5E94\u7528\u6237\u8EAB\u4EFD\u7684\u6807\u8BC6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>callback( {&quot;client_id&quot;:&quot;101867513&quot;,&quot;openid&quot;:&quot;951560F5C7A5AA9E5E599CF9B4ECFFB2&quot;} );
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u83B7\u53D6\u7528\u6237\u7684\u5176\u4ED6\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u7528\u6237\u7684\u5176\u4ED6\u4FE1\u606F" aria-hidden="true">#</a> \u83B7\u53D6\u7528\u6237\u7684\u5176\u4ED6\u4FE1\u606F</h2><p>\u7528\u6237\u4FE1\u606F</p><p>https://graph.qq.com/user/get_user_info?access_token=1B6E45FA99BA3D6B347713440C9BCEFE&amp;oauth_consumer_key=YOUR_APP_ID&amp;openid=951560F5C7A5AA9E5E599CF9B4ECFFB2</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
<span class="token property">&quot;ret&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> 
<span class="token property">&quot;msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> 
<span class="token property">&quot;is_lost&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span> 
<span class="token property">&quot;nickname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u3001\u5929\u4E0A\u6709\u6728\u6708OvO&quot;</span><span class="token punctuation">,</span> 
<span class="token property">&quot;gender&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span> 
<span class="token property">&quot;gender_type&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> 
<span class="token property">&quot;province&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span> 
<span class="token property">&quot;city&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span> 
<span class="token property">&quot;year&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2019&quot;</span><span class="token punctuation">,</span> 
<span class="token property">&quot;constellation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> 
<span class="token property">&quot;figureurl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http:\\/\\/qzapp.qlogo.cn\\/qzapp\\/101867513\\/951560F5C7A5AA9E5E599CF9B4ECFFB2\\/30&quot;</span><span class="token punctuation">,</span> 
<span class="token property">&quot;figureurl_1&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http:\\/\\/qzapp.qlogo.cn\\/qzapp\\/101867513\\/951560F5C7A5AA9E5E599CF9B4ECFFB2\\/50&quot;</span><span class="token punctuation">,</span> 
<span class="token property">&quot;figureurl_2&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http:\\/\\/qzapp.qlogo.cn\\/qzapp\\/101867513\\/951560F5C7A5AA9E5E599CF9B4ECFFB2\\/100&quot;</span><span class="token punctuation">,</span> 
<span class="token property">&quot;figureurl_qq_1&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://thirdqq.qlogo.cn/g?b=oidb&amp;k=bjXoWmdlu8fk1m80MCkibMg&amp;s=40&amp;t=1559108425&quot;</span><span class="token punctuation">,</span> 
<span class="token property">&quot;figureurl_qq_2&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://thirdqq.qlogo.cn/g?b=oidb&amp;k=bjXoWmdlu8fk1m80MCkibMg&amp;s=100&amp;t=1559108425&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;figureurl_qq&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://thirdqq.qlogo.cn/g?b=oidb&amp;k=bjXoWmdlu8fk1m80MCkibMg&amp;s=640&amp;t=1559108425&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801" aria-hidden="true">#</a> \u4EE3\u7801</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>services.AddAuthentication(xxx)
.AddGitHub(xxx)
\u52A0\u4E0AAddQQ\u7684\u914D\u7F6E\u9879
.AddQQ(options =&gt;
{
   options.ClientId = Configuration[&quot;Authentication:QQ:ClientId&quot;];
   options.ClientSecret = Configuration[&quot;Authentication:QQ:ClientSecret&quot;];
})
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>appsettings.json\u4E2D\u914D\u7F6E\u9879</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  &quot;Authentication&quot;: {
   //\u4E0B\u9762\u4E3A\u65B0\u589E\u9879
   &quot;QQ&quot;: {
     &quot;ClientId&quot;: &quot;xx&quot;,
     &quot;ClientSecret&quot;: &quot;xxx&quot;
   }
 }
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u5BF9\uFF0C\u6CA1\u9519\uFF0CQQ\u767B\u5F55\uFF0C\u5DF2\u7ECF\u7ED3\u675F\u4E86\u3002\u63A5\u4E0B\u6765\u5C31\u662F\u628A\u8FD9\u4E9B\u7528\u6237\u7684\u4FE1\u606F\u4FDD\u5B58\u5230\u6570\u636E\u5E93\uFF0C\u751F\u6210token\u7684\u8FC7\u7A0B\u3002</p><p>\u8FD9\u91CC</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[HttpGet(&quot;signin-callback&quot;)]
public async Task&lt;IActionResult&gt; Home(string provider, string redirectUrl = &quot;&quot;)
{

   AuthenticateResult authenticateResult = await _contextAccessor.HttpContext.AuthenticateAsync(provider);
   if (!authenticateResult.Succeeded) return Redirect(redirectUrl);
   var openIdClaim = authenticateResult.Principal.FindFirst(ClaimTypes.NameIdentifier);
   if (openIdClaim == null || string.IsNullOrWhiteSpace(openIdClaim.Value))
       return Redirect(redirectUrl);
       
       
   ClaimsPrincipal principal=authenticateResult.Principal;
   //\u6839\u636Eprovider\uFF0C\u5904\u7406\u7528\u6237\u7684\u57FA\u7840\u4FE1\u606F\uFF0C
   
   long id =SaveQQAsync(principal, openIdClaim.Value)
   
   //xxx
   
}       
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>openIdClaimopenIdClaim\u662F\u552F\u4E00\u503C</p><h3 id="lin-user\u8868" tabindex="-1"><a class="header-anchor" href="#lin-user\u8868" aria-hidden="true">#</a> lin_user\u8868</h3><table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td>Id</td><td>long</td><td>\u4E3B\u952E</td></tr><tr><td>Username</td><td>varchar(50)</td><td>\u7528\u6237\u540D</td></tr><tr><td>Avatar</td><td>varchar(50)</td><td>\u5934\u50CF</td></tr></tbody></table><h3 id="lin-user-identity\u8868" tabindex="-1"><a class="header-anchor" href="#lin-user-identity\u8868" aria-hidden="true">#</a> lin_user_identity\u8868</h3><p>\u7528\u6237\u6388\u6743\u4FE1\u606F\u8868\uFF0C\u7528\u4E8E\u5B58\u50A8\u4E0D\u540C\u767B\u5F55\u7C7B\u578B\u7684\u7528\u6237\u4FE1\u606F\uFF0C\u5982\u624B\u673A\u53F7\u3001\u90AE\u4EF6\u3001\u7528\u6237\u540D\u3001\u7B2C\u4E09\u65B9\u5E94\u7528\uFF08\u5FAE\u4FE1\u3001QQ\u3001GitHub\uFF09\u7684\u767B\u5F55</p><table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td>Id</td><td>long</td><td>\u4E3B\u952E</td></tr><tr><td>IdentityType</td><td>varchar(50)</td><td>\u8BA4\u8BC1\u7C7B\u578B\uFF0C\u5982 Password\uFF0CGitHub\u3001QQ\u3001WeiXin\u7B49</td></tr><tr><td>Identifier</td><td>varchar(24)</td><td>\u8BA4\u8BC1\u8005\uFF0C\u4F8B\u5982 \u7528\u6237\u540D\uFF08PassWord\u8BA4\u8BC1\u7C7B\u578B\uFF09,\u6388\u6743\u5F97\u5230\u7684\u6635\u79F0(QQ),\u6388\u6743\u5F97\u5230\u7684\u7528\u6237\u540D\uFF08\u552F\u4E00\uFF0CGitHub)</td></tr><tr><td>Credential</td><td>varchar(50)</td><td>\u51ED\u8BC1\uFF0C\u4F8B\u5982 \u5BC6\u7801,\u5B58OpenId\u3001Id\uFF0C\u540C\u4E00IdentityType\u7684OpenId\u7684\u503C\u662F\u552F\u4E00\u7684</td></tr><tr><td>CreateUserId</td><td>long</td><td>\u7ED1\u5B9A\u7684\u7528\u6237Id</td></tr></tbody></table><p>\u6839\u636EopenId,\u5224\u65ADlin_user_identity\u8868\u4E2D\u662F\u5426\u5B58\u5728\u8FD9\u4E00\u7B2C\u4E09\u65B9\u6388\u6743\u4FE1\u606F\uFF0C\u5982\u679C\u5B58\u5728\uFF0C\u5219\u8FD4\u56DE\u5F53\u524D\u7528\u6237lin_user\u8868\u4E2D\u7684id\uFF0C\u5982\u679C\u4E0D\u5B58\u5728\uFF0C\u5219\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u7528\u6237\u4FE1\u606F\uFF0C\u63D2\u5165lin_user\u3001lin_user_identity\u8868\u4E2D\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
public async Task&lt;long&gt; SaveQQAsync(ClaimsPrincipal principal, string openId)
{
   string nickname = principal.FindFirst(ClaimTypes.Name)?.Value;
   string gender = principal.FindFirst(ClaimTypes.Gender)?.Value;
   string picture = principal.FindFirst(QQAuthenticationConstants.Claims.PictureUrl)?.Value;
   string picture_medium = principal.FindFirst(QQAuthenticationConstants.Claims.PictureMediumUrl)?.Value;
   string picture_full = principal.FindFirst(QQAuthenticationConstants.Claims.PictureFullUrl)?.Value;
   string avatar = principal.FindFirst(QQAuthenticationConstants.Claims.AvatarUrl)?.Value;
   string avatar_full = principal.FindFirst(QQAuthenticationConstants.Claims.AvatarFullUrl)?.Value;
   
    Expression&lt;Func&lt;LinUserIdentity, bool&gt;&gt; expression = r =&gt; 
               r.IdentityType == LinUserIdentity.QQ&amp;&amp; r.Credential == openId;

   LinUserIdentity linUserIdentity =await _userIdentityRepository.Where(expression).FirstAsync();

   long userId = 0;
   if (linUserIdentity == null)
   {
       LinUser user = new LinUser
       {
           Avatar = avatar_full,
           Nickname = nickname,
           Username = &quot;&quot;,
           LinUserIdentitys = new List&lt;LinUserIdentity&gt;()
           {
               new LinUserIdentity
               {
                   CreateTime = DateTime.Now,
                   Credential = openId,
                   IdentityType = LinUserIdentity.GitHub,
                   Identifier = nickname,
               }
           }
       };
       await _userRepository.InsertAsync(user);
       userId = user.Id;
   }
   else
   {
       userId = linUserIdentity.CreateUserId;
   }
   return userId;
}

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div><p>\u4E0A\u6587\u4E2D\u7684CreateToken\uFF0C\u76F4\u63A5\u5C06 authenticateResult.Principal.Claims.ToList()\uFF0C\u751F\u6210token\u503C\uFF0C\u4F1A\u7F3A\u5C11\u4E00\u4E9B\u7CFB\u7EDF\u9700\u8981\u7684\u503C\uFF0C\u6BD4\u5982\u952E\u4E3AClaimTypes.NameIdentifier\uFF0C\u5E94\u4E3A\u7528\u6237\u7684id\uFF0C\u7528\u6237\u7684\u5176\u4ED6\u4FE1\u606F\uFF0C\u5982\u89D2\u8272/\u5206\u7EC4\uFF0C\u6635\u79F0\u3002\u4E0D\u540C\u5E73\u53F0\u7684\u6388\u6743\u767B\u5F55\uFF0C\u952E\u6709\u6240\u4E0D\u540C\uFF0C\u6240\u4EE5\u8FD9\u91CC\u9700\u8981\u4E8C\u6B21\u5904\u7406\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[HttpGet(&quot;signin-callback&quot;)]
public async Task&lt;IActionResult&gt; Home(string provider, string redirectUrl = &quot;&quot;)
{
 
    //xxx
        
        
    ClaimsPrincipal principal=authenticateResult.Principal;
    
    List&lt;Claim&gt; authClaims = principal.Claims.ToList();
    
    long id =SaveQQAsync(principal, openIdClaim.Value)
    
    LinUser user =await _userRepository.Select.IncludeMany(r =&gt; r.LinGroups)
        .WhereCascade(r =&gt; r.IsDeleted == false).Where(r =&gt; r.Id == id).FirstAsync();

    List&lt;Claim&gt; claims = new List&lt;Claim&gt;()
    {
        new Claim(ClaimTypes.NameIdentifier,user.Id.ToString()),
        new Claim(ClaimTypes.GivenName,user.Nickname??&quot;&quot;),
        new Claim(ClaimTypes.Name,user.Username??&quot;&quot;),
    };
        
    user.LinGroups?.ForEach(r =&gt;
    {
        claims.Add(new Claim(LinCmsClaimTypes.Groups, r.Id.ToString()));
    });

    claims.AddRange(authClaims);
    string token = this.CreateToken(claims);
    return Redirect($&quot;{redirectUrl}?token={token}#login-result&quot;);
 }       
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><p>\u524D\u53F0login-result\u8DEF\u7531\uFF0C\u89E3\u6790\u5230token\u503C\uFF0C\u5E76\u4FDD\u5B58\u8D77\u6765\uFF0C\u4E0E\u7528\u6237\u5BC6\u7801\u767B\u5F55\u540E\u7684\u6D41\u7A0B\u76F8\u540C\u3002</p>`,42),I={id:"\u9879\u76EE\u6E90\u7801",tabindex:"-1"},F=n("a",{class:"header-anchor",href:"#\u9879\u76EE\u6E90\u7801","aria-hidden":"true"},"#",-1),f=s(),E={href:"https://github.com/luoyunchong/lin-cms-dotnetcore/blob/master/src/LinCms.Web/Controllers/Cms/Oauth2Controller.cs",target:"_blank",rel:"noopener noreferrer"},Q=s("\u9879\u76EE\u6E90\u7801");function B(T,U){const a=p("ExternalLinkIcon");return o(),i(l,null,[u,n("ul",null,[n("li",null,[n("a",d,[b,e(a)])])]),n("p",null,[m,n("a",h,[g,e(a)]),q]),k,n("h2",_,[C,x,n("a",y,[A,e(a)])]),v,n("h2",I,[F,f,n("a",E,[Q,e(a)])])],64)}var P=r(c,[["render",B],["__file","qq-login.html.vue"]]);export{P as default};
