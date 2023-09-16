import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{r as p,c,a as n,b as o,F as r,e as s,d as l,o as t}from"./app.bb04582d.js";const i={},m=n("h1",{id:"docker-\u547D\u4EE4\u884C",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#docker-\u547D\u4EE4\u884C","aria-hidden":"true"},"#"),s(" Docker \u547D\u4EE4\u884C")],-1),k=s("Command-Line Interfaces "),b={href:"https://docs.docker.com/engine/reference/run/",title:"https://docs.docker.com/engine/reference/run/",target:"_blank",rel:"noopener noreferrer"},u=s("https://docs.docker.com/engine/reference/run/"),d=l(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> images  <span class="token comment"># \u67E5\u770B\u6240\u6709\u955C\u50CF</span>

<span class="token function">docker</span> <span class="token function">ps</span> -a <span class="token comment">#\u663E\u793A\u6240\u6709\u7684\u5BB9\u5668\uFF0C\u5305\u62EC\u672A\u8FD0\u884C\u7684\u3002</span>
<span class="token function">docker</span> <span class="token function">ps</span> -l <span class="token comment">#\u6700\u540E\u542F\u52A8\u7684\u5BB9\u5668</span>

<span class="token function">docker</span> <span class="token function">rm</span> \u5BB9\u5668id   <span class="token comment">#\u5220\u9664\u5BB9\u5668</span>
<span class="token function">docker</span> <span class="token function">rm</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> <span class="token function">ps</span> -q -a<span class="token variable">)</span></span> <span class="token comment">#\u4E00\u6B21\u6027\u5220\u9664\u6240\u6709\u7684\u5BB9\u5668</span>

<span class="token function">docker</span> rmi \u955C\u50CFid/\u955C\u50CF\u540D\u79F0  <span class="token comment">#\u5220\u9664\u955C\u50CF</span>
<span class="token function">docker</span> rmi <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> images -q<span class="token variable">)</span></span> <span class="token comment">#\u4E00\u6B21\u6027\u5220\u9664\u6240\u6709\u7684\u955C\u50CF\u3002</span>

<span class="token function">docker</span> build -t igeekfan/demo <span class="token builtin class-name">.</span>  <span class="token comment">#\u8FD0\u884C\u6784\u5EFA\u547D\u4EE4,\u6784\u5EFADocker \u955C\u50CF\u3002 </span>

<span class="token function">docker</span> run \u955C\u50CF <span class="token comment">#\u8FD0\u884C</span>
<span class="token function">docker</span> run -it -p <span class="token number">5000</span>:80 igeekfan/demo
<span class="token comment">#5000\u662F\u8FD0\u884C\u540E\uFF0Cdocker\u5BF9\u5916\u7684\u7AEF\u53E3\uFF0C80\u662F\u8FD9\u4E2A\u670D\u52A1\u5BF9\u5916\u7684\u7AEF\u53E3\uFF0C\u5176\u4E2DDockerfile \u5B58\u5728\u8BED\u53E5EXPOSE 80</span>
<span class="token function">docker</span> run -d -p <span class="token number">5000</span>:80 igeekfan/demo 
-d \u53C2\u6570\u540E\u53F0\u8FD0\u884C

<span class="token function">docker</span> start \u5BB9\u5668id
<span class="token function">docker</span> restart \u5BB9\u5668id
<span class="token function">docker</span> stop \u5BB9\u5668id <span class="token comment">#\u7EC8\u6B62\u5BB9\u5668\u3002</span>
<span class="token function">docker</span> logs <span class="token variable">$CONTAINER_ID</span> <span class="token comment">##\u5728container\u5916\u9762\u67E5\u770B\u5B83\u7684\u8F93\u51FA </span>
<span class="token function">docker</span> attach <span class="token variable">$CONTAINER_ID</span> <span class="token comment">##\u8FDE\u63A5\u4E0A\u5BB9\u5668\u5B9E\u65F6\u67E5\u770B\uFF1A</span>

<span class="token function">docker</span> pull microsoft/dotnet  <span class="token comment">#\u5355\u72EC\u5B89\u88C5\u67D0\u4E00\u955C\u50CF</span>

<span class="token function">docker</span> save \u955C\u50CFid <span class="token operator">&gt;</span> \u6587\u4EF6 <span class="token comment">#\u6301\u4E45\u5316\u955C\u50CF</span>
<span class="token function">docker</span> load <span class="token operator">&lt;</span> \u6587\u4EF6
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><p>\u6211\u4EEC\u5982\u679C\u60F3\u5C06Docker \u653E\u7F6E\u5230\u5176\u4ED6\u673A\u5668\u8FD0\u884C\uFF0C\u5F88\u7B80\u5355\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u76F4\u63A5\u4FDD\u5B58\u955C\u50CF\uFF0C\u7136\u540E\u590D\u5236\u955C\u50CF\u5230\u5176\u4ED6\u673A\u5668\uFF0C\u7136\u540E\u4F7F\u7528docker \u547D\u4EE4load \u65E2\u53EF\u3002</span>

<span class="token function">docker</span> save igeekfan/demo <span class="token operator">&gt;</span> demo.tar

<span class="token comment">#\u7136\u540E\u52A0\u8F7D\u547D\u4EE4</span>

<span class="token function">docker</span> load <span class="token operator">&lt;</span> demo.tar
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u6211\u4EEC\u5982\u679C\u60F3\u5C06Docker \u653E\u7F6E\u5230\u5176\u4ED6\u673A\u5668\u8FD0\u884C\uFF0C\u5F88\u7B80\u5355\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u76F4\u63A5\u4FDD\u5B58\u955C\u50CF\uFF0C\u7136\u540E\u590D\u5236\u955C\u50CF\u5230\u5176\u4ED6\u673A\u5668\uFF0C\u7136\u540E\u4F7F\u7528docker \u547D\u4EE4load \u65E2\u53EF\u3002</span>

<span class="token function">docker</span> save igeekfan/demo <span class="token operator">&gt;</span> demo.tar

<span class="token comment">#\u7136\u540E\u52A0\u8F7D\u547D\u4EE4</span>

<span class="token function">docker</span> load <span class="token operator">&lt;</span> demo.tar
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>Docker\u5220\u9664</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u8BE2\u76F8\u5173\u8F6F\u4EF6\u5305</span>
dpkg -l <span class="token operator">|</span> <span class="token function">grep</span> <span class="token function">docker</span>
<span class="token comment"># \u5220\u9664\u8FD9\u4E2A\u5305 \u4E0A\u9762\u67E5\u5230\u4EC0\u4E48\uFF0C\u5220\u9664\u4EC0\u4E48</span>
<span class="token function">sudo</span> <span class="token function">apt</span> remove --purge docker.io
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,7);function f(g,h){const a=p("ExternalLinkIcon");return t(),c(r,null,[m,n("ul",null,[n("li",null,[k,n("a",b,[u,o(a)])])]),d],64)}var x=e(i,[["render",f],["__file","Docker-Command.html.vue"]]);export{x as default};
