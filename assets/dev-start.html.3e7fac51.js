import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";import{r as l,c as i,a as n,b as a,F as p,d as b,e as s,o as t}from"./app.4fe6120a.js";const c={},m=b(`<h1 id="\u5F00\u53D1\u8D77\u6B65" tabindex="-1"><a class="header-anchor" href="#\u5F00\u53D1\u8D77\u6B65" aria-hidden="true">#</a> \u5F00\u53D1\u8D77\u6B65</h1><h2 id="\u9879\u76EE\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u7ED3\u6784" aria-hidden="true">#</a> \u9879\u76EE\u7ED3\u6784</h2><ul><li>framework</li><li>identityserver4 <ul><li>LinCms.IdentityServer4:\u4F7F\u7528id4\u6388\u6743\u767B\u5F55</li></ul></li><li>src <ul><li>LinCms.Web\uFF1A\u63A5\u53E3API\uFF08ASP.NET Core)\u3001\u4E2D\u95F4\u4EF6\uFF0C\u6743\u9650\u9A8C\u8BC1</li><li>LinCms.Application:\u5E94\u7528\u670D\u52A1</li><li>LinCms.Application.Contracts:DTO,\u6570\u636E\u4F20\u8F93\u5BF9\u8C61,\u5E94\u7528\u670D\u52A1\u63A5\u53E3</li><li>LinCms.Infrastructure:\u57FA\u7840\u8BBE\u65BD\uFF0C\u6570\u636E\u5E93\u6301\u4E45\u6027\u7684\u64CD\u4F5C\uFF0C\u4ED3\u50A8\u63A5\u53E3\u7684\u5B9E\u73B0</li><li>LinCms.Core:\u8BE5\u5E94\u7528\u7684\u6838\u5FC3\uFF0C\u5B9E\u4F53\u7C7B\uFF0C\u901A\u7528\u64CD\u4F5C\u7C7B\uFF0CAOP\u6269\u5C55\uFF0C\u5206\u9875\u5BF9\u8C61\uFF0C\u57FA\u7840\u4F9D\u8D56\u5BF9\u8C61\u63A5\u53E3\uFF0C\u65F6\u95F4\u6269\u5C55\u65B9\u6CD5\uFF0C\u5F53\u524D\u7528\u6237\u4FE1\u606F\uFF0C\u5F02\u5E38\u7C7B\uFF0C\u503C\u5BF9\u8C61\uFF0C\u4ED3\u50A8\u63A5\u53E3</li><li>LinCms.Plugins \u4F7F\u7528\u5355\u9879\u76EE\u5B9E\u73B0\u67D0\u4E2A\u4E1A\u52A1\u7684\u6269\u5C55\uFF0C\u4E0D\u9700\u8981\u4E3B\u8981\u9879\u76EE\u7ED3\u6784\uFF0C\u53EF\u6682\u65F6\u5FFD\u7565\u3002</li></ul></li><li>test <ul><li>LinCms.Test:\u5BF9\u4ED3\u50A8\uFF0C\u5E94\u7528\u670D\u52A1\u6216\u5DE5\u5177\u7C7B\u8FDB\u884C\u6D4B\u8BD5</li></ul></li></ul><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>\u251C\u2500framework
\u2502  \u2514\u2500src
\u2502      \u2514\u2500IGeekFan.Localization.FreeSql
\u251C\u2500identityserver4
\u2502  \u2514\u2500LinCms.IdentityServer4
\u2502      \u251C\u2500Controllers
\u2502      \u251C\u2500IdentityServer4
\u251C\u2500src
\u2502  \u251C\u2500LinCms.Application
\u2502  \u2502  \u251C\u2500Cms
\u2502  \u2502  \u2502  \u251C\u2500Admin
\u2502  \u2502  \u2502  \u251C\u2500Files
\u2502  \u2502  \u2502  \u251C\u2500Groups
\u2502  \u2502  \u2502  \u251C\u2500Logs
\u2502  \u2502  \u2502  \u251C\u2500Permissions
\u2502  \u2502  \u2502  \u251C\u2500Settings
\u2502  \u2502  \u2502  \u2514\u2500Users
\u2502  \u251C\u2500LinCms.Application.Contracts
\u2502  \u2502  \u251C\u2500Cms
\u2502  \u2502  \u2502  \u251C\u2500Account
\u2502  \u2502  \u2502  \u251C\u2500Admins
\u2502  \u2502  \u2502  \u2502  \u2514\u2500Dtos
\u2502  \u2502  \u2502  \u251C\u2500Files
\u2502  \u2502  \u2502  \u2502  \u2514\u2500Dtos
\u2502  \u2502  \u2502  \u251C\u2500Groups
\u2502  \u2502  \u2502  \u2502  \u2514\u2500Dtos
\u2502  \u2502  \u2502  \u251C\u2500Logs
\u2502  \u2502  \u2502  \u2502  \u2514\u2500Dtos
\u2502  \u2502  \u2502  \u251C\u2500Permissions
\u2502  \u2502  \u2502  \u2502  \u2514\u2500Dtos
\u2502  \u2502  \u2502  \u251C\u2500Settings
\u2502  \u2502  \u2502  \u2502  \u2514\u2500Dtos
\u2502  \u2502  \u2502  \u2514\u2500Users
\u2502  \u2502  \u2502      \u2514\u2500Dtos
\u2502  \u251C\u2500LinCms.Core
\u2502  \u2502  \u251C\u2500Aop
\u2502  \u2502  \u251C\u2500Common
\u2502  \u2502  \u251C\u2500Data
\u2502  \u2502  \u2502  \u2514\u2500Enums
\u2502  \u2502  \u251C\u2500Dependency
\u2502  \u2502  \u251C\u2500Entities
\u2502  \u2502  \u2502  \u2514\u2500Settings
\u2502  \u2502  \u251C\u2500Exceptions
\u2502  \u2502  \u251C\u2500Extensions
\u2502  \u2502  \u251C\u2500IRepositories
\u2502  \u2502  \u251C\u2500LinCms
\u2502  \u2502  \u2502  \u2514\u2500Core
\u2502  \u2502  \u251C\u2500Middleware
\u2502  \u2502  \u2514\u2500Security
\u2502  \u251C\u2500LinCms.Infrastructure
\u2502  \u2502  \u2514\u2500Repositories
\u2502  \u251C\u2500LinCms.Plugins
\u2502  \u2502  \u2514\u2500Poem
\u2502  \u2502      \u251C\u2500AutoMapper
\u2502  \u2502      \u251C\u2500Controllers
\u2502  \u2502      \u2514\u2500Models
\u2502  \u2514\u2500LinCms.Web
\u2502      \u251C\u2500Configs
\u2502      \u251C\u2500Controllers
\u2502      \u2502  \u251C\u2500Cms
\u2502      \u251C\u2500Data
\u2502      \u2502  \u2514\u2500Authorization
\u2502      \u251C\u2500Properties
\u2502      \u251C\u2500SnakeCaseQuery
\u2502      \u251C\u2500Uow
\u2502      \u251C\u2500Utils
\u2502      \u2514\u2500wwwroot
\u2514\u2500test
    \u2514\u2500LinCms.Test
        \u251C\u2500Controller
        \u2502  \u251C\u2500Cms
        \u251C\u2500Properties
        \u251C\u2500Service
        \u2502  \u2514\u2500Cms
        \u2514\u2500Utils
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br></div></div><h2 id="\u76F8\u5173\u6280\u672F" tabindex="-1"><a class="header-anchor" href="#\u76F8\u5173\u6280\u672F" aria-hidden="true">#</a> \u76F8\u5173\u6280\u672F</h2><h3 id="freesql" tabindex="-1"><a class="header-anchor" href="#freesql" aria-hidden="true">#</a> FreeSql</h3>`,6),o={href:"/dotnetcore/examples/freesql-in-aspnetcore-webapi-how-to-use.html",target:"_blank",rel:"noopener noreferrer"},u=s("\u4E3B\u8981\u5728\u4ECB\u7ECDFreeSql\u5728ASP.NTE Core WebApi\u4E2D\u5982\u4F55\u4F7F\u7528\u7684\u8FC7\u7A0B\uFF0C\u5B8C\u6210\u4E00\u4E2A\u6700\u7B80\u5355\u7684\u535A\u5BA2\u7CFB\u7EDF\u7684\u540E\u7AEF\u63A5\u53E3"),d={href:"/dotnetcore/examples/freesql-sample-blog-restful-use-automapper.html",target:"_blank",rel:"noopener noreferrer"},h=s("\u672C\u6587\u4F7F\u7528ASP .NET Core\u7684WEB API\uFF0C\u6784\u5EFA\u4E00\u4E2ARESTful\u98CE\u683C\u7684\u63A5\u53E3\uFF0C\u4F7F\u7528Freesql\u8BBF\u95EEMySQL\u6570\u636E\u5E93\uFF0C\u5B9E\u73B0\u4E8C\u4E2A\u8868\u7684\u7B80\u5355\u535A\u5BA2\uFF0C\u5E76\u96C6\u6210AutoMapper\u3002"),C=n("h3",{id:"identityserver4",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#identityserver4","aria-hidden":"true"},"#"),s(" IdentityServer4")],-1),_={href:"/dotnetcore/examples/IdentityServer4.html",target:"_blank",rel:"noopener noreferrer"},f=s("IdentityServer4 \u5728\u672C\u9879\u76EE\u4E2D\u7684\u5E94\u7528");function L(S,v){const e=l("ExternalLinkIcon");return t(),i(p,null,[m,n("ul",null,[n("li",null,[n("p",null,[n("a",o,[u,a(e)])])]),n("li",null,[n("p",null,[n("a",d,[h,a(e)])])])]),C,n("ul",null,[n("li",null,[n("a",_,[f,a(e)])])])],64)}var g=r(c,[["render",L],["__file","dev-start.html.vue"]]);export{g as default};
