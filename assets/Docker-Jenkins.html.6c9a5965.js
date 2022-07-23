import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{r as p,c as i,a as n,b as c,F as l,e as s,d as o,o as r}from"./app.ff1c3ba9.js";const t={},k=n("h1",{id:"docker-\u914D\u7F6E-jenkins",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#docker-\u914D\u7F6E-jenkins","aria-hidden":"true"},"#"),s(" Docker \u914D\u7F6E Jenkins")],-1),u={href:"https://www.cnblogs.com/hanease/p/15690225.html",target:"_blank",rel:"noopener noreferrer"},b=s("docker\u5B89\u88C5jenkins - hanease - \u535A\u5BA2\u56ED (cnblogs.com)"),d=o(`<h2 id="\u914D\u7F6E-docker-\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E-docker-\u955C\u50CF" aria-hidden="true">#</a> \u914D\u7F6E Docker \u955C\u50CF</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> -sSL https://get.daocloud.io/daotools/set_mirror.sh <span class="token operator">|</span> <span class="token function">sh</span> -s http://f1361db2.m.daocloud.io
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="docker\u62C9\u53D6\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#docker\u62C9\u53D6\u955C\u50CF" aria-hidden="true">#</a> Docker\u62C9\u53D6\u955C\u50CF</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> pull jenkins/jenkins:lts
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u914D\u7F6E\u672C\u5730\u5B58\u50A8\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u672C\u5730\u5B58\u50A8\u76EE\u5F55" aria-hidden="true">#</a> \u914D\u7F6E\u672C\u5730\u5B58\u50A8\u76EE\u5F55</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> -p /apps/devops/jenkins
<span class="token function">chmod</span> <span class="token number">777</span> /apps/devops/jenkins
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u542F\u52A8jenkins\u5BB9\u5668" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8jenkins\u5BB9\u5668" aria-hidden="true">#</a> \u542F\u52A8Jenkins\u5BB9\u5668</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> stop jenkins
<span class="token function">docker</span> rmi jenkins

<span class="token function">sudo</span> <span class="token function">usermod</span> -a -G <span class="token function">docker</span> root
<span class="token function">sudo</span> <span class="token function">chmod</span> <span class="token number">666</span> /var/run/docker.sock


<span class="token function">docker</span> run -itd -p <span class="token number">9003</span>:8080 -p <span class="token number">9004</span>:50000 <span class="token punctuation">\\</span>
--restart always <span class="token punctuation">\\</span>
-v /apps/devops/jenkins:/var/jenkins_home <span class="token punctuation">\\</span>
--name jenkins <span class="token punctuation">\\</span>
--volume /var/run/docker.sock:/var/run/docker.sock <span class="token punctuation">\\</span>
-v <span class="token variable"><span class="token variable">$(</span><span class="token function">which</span> <span class="token function">docker</span><span class="token variable">)</span></span>:/usr/bin/docker <span class="token punctuation">\\</span>
-v <span class="token variable"><span class="token variable">$(</span><span class="token function">which</span> <span class="token function">docker</span><span class="token variable">)</span></span>:/usr/bin/com.docker.cli <span class="token punctuation">\\</span>
jenkins/jenkins:lts
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="docker-\u8FD0\u884Caspnetcore\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#docker-\u8FD0\u884Caspnetcore\u9879\u76EE" aria-hidden="true">#</a> Docker \u8FD0\u884Caspnetcore\u9879\u76EE</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run -it -d -p <span class="token number">7000</span>:80 --name aspnetcoredemo aspnetcoredemo
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u6784\u5EFA\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u6784\u5EFA\u9879\u76EE" aria-hidden="true">#</a> \u6784\u5EFA\u9879\u76EE</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> build -f src/aspnetcoredemo/Dockerfile -t aspnetcoredemo <span class="token builtin class-name">.</span>

<span class="token assign-left variable">GITHASH</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">git</span> rev-parse --short HEAD<span class="token variable">\`</span></span>
<span class="token function">docker</span> build -f src/aspnetcoredemo/Dockerfile -t aspnetcoredemo:<span class="token variable">$GITHASH</span> <span class="token builtin class-name">.</span>
<span class="token function">docker</span> tag aspnetcoredemo:<span class="token variable">$GITHASH</span> aspnetcoredemo:latest

<span class="token function">docker</span> build -f src/Services/ToDo/IGeekFan.FreeKit.Todos.API/Dockerfile -t igeekfan.freekit.todos.api <span class="token builtin class-name">.</span>
  

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>IGeekFan.Freekit.Service bash\u811A\u672C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># \u83B7\u53D6\u77ED\u7248\u672C\u53F7</span>
<span class="token assign-left variable">GITHASH</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">git</span> rev-parse --short HEAD<span class="token variable">\`</span></span>
<span class="token function">docker</span> stop igeekfan.freekit.todos.api
<span class="token function">docker</span> <span class="token function">rm</span> igeekfan.freekit.todos.api
<span class="token builtin class-name">echo</span> ---------------Building Docker Image<span class="token punctuation">..</span>.------------------
<span class="token function">docker</span> build -f src/Services/ToDo/IGeekFan.FreeKit.Todos.API/Dockerfile -t igeekfan.freekit.todos.api:<span class="token variable">$GITHASH</span> <span class="token builtin class-name">.</span>
<span class="token function">docker</span> tag igeekfan.freekit.todos.api:<span class="token variable">$GITHASH</span> igeekfan.freekit.todos.api:latest
<span class="token builtin class-name">echo</span> ---------------Launching Container<span class="token punctuation">..</span>igeekfan.freekit.todos.api.------------------
<span class="token function">docker</span> run -it -d -p <span class="token number">7002</span>:80 --name igeekfan.freekit.todos.api igeekfan.freekit.todos.api -v


<span class="token function">docker</span> stop igeekfan.freekit.files.api
<span class="token function">docker</span> <span class="token function">rm</span> igeekfan.freekit.files.api
<span class="token builtin class-name">echo</span> ---------------Building Docker Image<span class="token punctuation">..</span>.------------------
<span class="token function">docker</span> build -f src/Services/File/IGeekFan.FreeKit.Files.API/Dockerfile -t igeekfan.freekit.files.api:<span class="token variable">$GITHASH</span> <span class="token builtin class-name">.</span>
<span class="token function">docker</span> tag igeekfan.freekit.files.api:<span class="token variable">$GITHASH</span> igeekfan.freekit.files.api:latest
<span class="token builtin class-name">echo</span> ---------------Launching Container<span class="token punctuation">..</span>igeekfan.freekit.files.api.------------------
<span class="token function">docker</span> run -it -d -p <span class="token number">7003</span>:80 --name igeekfan.freekit.files.api igeekfan.freekit.files.api -v

<span class="token function">docker</span> stop igeekfan.freekit.identity.api
<span class="token function">docker</span> <span class="token function">rm</span> igeekfan.freekit.identity.api
<span class="token builtin class-name">echo</span> ---------------Building Docker Image<span class="token punctuation">..</span>.------------------
<span class="token function">docker</span> build -f src/Services/Identity/IGeekFan.FreeKit.Identity.API/Dockerfile -t igeekfan.freekit.identity.api:<span class="token variable">$GITHASH</span> <span class="token builtin class-name">.</span>
<span class="token function">docker</span> tag igeekfan.freekit.identity.api:<span class="token variable">$GITHASH</span> igeekfan.freekit.identity.api:latest
<span class="token builtin class-name">echo</span> ---------------Launching Container<span class="token punctuation">..</span>igeekfan.freekit.identity.api.------------------
<span class="token function">docker</span> run -it -d -p <span class="token number">7004</span>:80 --name igeekfan.freekit.identity.api igeekfan.freekit.identity.api -v


</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><p>aspnetcoredemo\u9879\u76EE bash\u811A\u672C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># \u83B7\u53D6\u77ED\u7248\u672C\u53F7</span>
<span class="token assign-left variable">GITHASH</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">git</span> rev-parse --short HEAD<span class="token variable">\`</span></span>
<span class="token function">docker</span> stop aspnetcoredemo
<span class="token function">docker</span> <span class="token function">rm</span> aspnetcoredemo
<span class="token builtin class-name">echo</span> ---------------Building Docker Image<span class="token punctuation">..</span>aspnetcoredemo.------------------
<span class="token function">docker</span> build -f src/aspnetcoredemo/Dockerfile -t aspnetcoredemo:<span class="token variable">$GITHASH</span> <span class="token builtin class-name">.</span>
<span class="token function">docker</span> tag aspnetcoredemo:<span class="token variable">$GITHASH</span> aspnetcoredemo:latest
<span class="token builtin class-name">echo</span> ---------------Launching Container<span class="token punctuation">..</span>aspnetcoredemo.------------------
<span class="token function">docker</span> run -it -d -p <span class="token number">7000</span>:80 --name aspnetcoredemo aspnetcoredemo -v 

<span class="token builtin class-name">echo</span> ---------------Finish<span class="token punctuation">..</span>aspnetcoredemo.------------------

<span class="token function">docker</span> stop webapplicationdemo
<span class="token function">docker</span> <span class="token function">rm</span> webapplicationdemo
<span class="token builtin class-name">echo</span> ---------------Building Docker Image<span class="token punctuation">..</span>webapplicationdemo.------------------
<span class="token function">docker</span> build -f src/webapplicationdemo/Dockerfile -t webapplicationdemo:<span class="token variable">$GITHASH</span> <span class="token builtin class-name">.</span>
<span class="token function">docker</span> tag webapplicationdemo:<span class="token variable">$GITHASH</span> webapplicationdemo:latest
<span class="token builtin class-name">echo</span> ---------------Launching Container<span class="token punctuation">..</span>webapplicationdemo.------------------
<span class="token function">docker</span> run -it -d -p <span class="token number">7001</span>:80 --name webapplicationdemo webapplicationdemo -v 

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div>`,16);function m(f,h){const a=p("ExternalLinkIcon");return r(),i(l,null,[k,n("p",null,[n("a",u,[b,c(a)])]),d],64)}var H=e(t,[["render",m],["__file","Docker-Jenkins.html.vue"]]);export{H as default};
