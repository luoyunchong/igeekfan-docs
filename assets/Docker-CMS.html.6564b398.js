import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{d as s}from"./app.494e1756.js";const a={},e=s(`<h1 id="docker\u90E8\u7F72cms\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#docker\u90E8\u7F72cms\u547D\u4EE4" aria-hidden="true">#</a> Docker\u90E8\u7F72CMS\u547D\u4EE4</h1><h2 id="\u90E8\u7F72docker" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72docker" aria-hidden="true">#</a> \u90E8\u7F72docker</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u5224\u65AD\u662F\u5426\u5B58\u5728webnotebook\u5BB9\u5668</span>
<span class="token function">docker</span> <span class="token function">ps</span> <span class="token operator">|</span> <span class="token function">grep</span> lincms-web-1 <span class="token operator">&amp;&gt;</span> /dev/null
<span class="token comment">#\u5982\u679C\u4E0D\u5B58\u5728\uFF0C\u5219Remove</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> -ne <span class="token number">0</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;lincms-web container not exist continue.. &quot;</span>
<span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;remove lincms-web-1 container&quot;</span>
    <span class="token function">docker</span> <span class="token function">rm</span> lincms-web-1 -f
<span class="token keyword">fi</span>

<span class="token function">docker</span> images <span class="token operator">|</span> <span class="token function">grep</span> registry.cn-hangzhou.aliyuncs.com/igeekfan/lincms-web <span class="token operator">&amp;&gt;</span> /dev/null

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> -ne <span class="token number">0</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;image does not exist , continue...&quot;</span>
<span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;image exists !!! remove it&quot;</span>
    <span class="token function">docker</span> rmi --force registry.cn-hangzhou.aliyuncs.com/igeekfan/lincms-web
<span class="token keyword">fi</span>
<span class="token comment">#\u4ECE\u963F\u91CC\u4E91\u62C9\u53D6\u521A\u521Apush\u7684\u955C\u50CF</span>
<span class="token function">docker</span> pull registry.cn-hangzhou.aliyuncs.com/igeekfan/lincms-web

<span class="token function">docker</span> run --restart unless-stopped -p <span class="token number">5011</span>:80 --name lincms-web-1 -d registry.cn-hangzhou.aliyuncs.com/igeekfan/lincms-web

<span class="token function">docker</span> <span class="token function">rm</span> lincms-web-2 -f
<span class="token function">docker</span> <span class="token function">rm</span> lincms-web-3 -f
<span class="token function">docker</span> <span class="token function">rm</span> lincms-web-4 -f

<span class="token function">docker</span> run --restart unless-stopped -p <span class="token number">5012</span>:80 --name lincms-web-2 -d registry.cn-hangzhou.aliyuncs.com/igeekfan/lincms-web
<span class="token function">docker</span> run --restart unless-stopped -p <span class="token number">5020</span>:80 --name lincms-web-3 -d registry.cn-hangzhou.aliyuncs.com/igeekfan/lincms-web
<span class="token function">docker</span> run --restart unless-stopped -p <span class="token number">5021</span>:80 --name lincms-web-4 -d registry.cn-hangzhou.aliyuncs.com/igeekfan/lincms-web


</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><h2 id="nuget-api-key" tabindex="-1"><a class="header-anchor" href="#nuget-api-key" aria-hidden="true">#</a> nuget api key</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Your-API-Key
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>nuget SetApiKey Your-API-Key
dotnet nuget push IGeekFan.AspNetCore.Knife4jUI.0.0.11.nupkg --api-key Your-API-Key --source https://api.nuget.org/v3/index.json

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token comment">//&quot;DefaultConnection&quot;: &quot;Data Source=|DataDirectory|\\\\SampleApp.db;&quot;,</span>
  <span class="token property">&quot;Sqlite1&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Data Source=d:\\\\SampleApp1.db&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;Sqlite2&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Data Source=d:\\\\SampleApp2.db&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;Oracle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;user id=test;password=123qwe; data source=//127.0.0.1:1521/ORCL;Pooling=true;Min Pool Size=1&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;MySql&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Data Source=127.0.0.1;Port=3306;User ID=root;Password=root; Initial Catalog=cccddd;Charset=utf8; SslMode=none;Min pool size=1&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;SqlServer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Data Source=(localdb)\\\\MSSQLLocalDB;Initial Catalog=cccddd;Pooling=true;Min Pool Size=1&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;PostgreSQL&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Host=127.0.0.1;Port=5432;Username=postgres;Password=postgresql; Database=postgres;Pooling=true;Minimum Pool Size=1&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,7);function p(o,t){return e}var l=n(a,[["render",p],["__file","Docker-CMS.html.vue"]]);export{l as default};
