import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{r as t,c as l,a as n,b as a,F as p,e as s,d as r,o as c}from"./app.307ae017.js";const o={},b=n("h1",{id:"github-actions",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#github-actions","aria-hidden":"true"},"#"),s(" GitHub Actions")],-1),u=n("h2",{id:"gitee-\u4E0E-github-\u81EA\u52A8\u540C\u6B65",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#gitee-\u4E0E-github-\u81EA\u52A8\u540C\u6B65","aria-hidden":"true"},"#"),s(" Gitee \u4E0E GitHub \u81EA\u52A8\u540C\u6B65")],-1),d=n("p",null,"\u5F53 github \u4E0A\u7684\u9879\u76EE\u4EE3\u7801 master \u5206\u652F\u63D0\u4EA4\u540E\uFF0Cgitee \u81EA\u52A8\u540C\u6B65\u3002\u5982\u4F55\u5B9E\u73B0\u5462\u3002\u4E3B\u8981\u901A\u8FC7 github action \u5B9E\u73B0",-1),m=n("p",null,"\u6211\u4EEC\u60F3\u5C06 luoyunchong/lin-cms-dotnetcore \u540C\u6B65\u5230 igeekfan/lin-cms-dotnetcore \u4E0A\u9762\uFF0C\u9700\u8981\u505A\u7684\u975E\u5E38\u7B80\u5355\uFF0C\u53EA\u9700\u8981 2 \u6B65\uFF1A",-1),h=s("1.\u5C06 Gitee \u7684\u79C1\u94A5\uFF0C\u4E0A\u4F20\u5230\u9879\u76EE\u7684 setting \u7684 Secrets \u4E2D\u3002 "),g={href:"https://pic.downk.cc/item/5e9725f5c2a9a83be5dcdec3.png",target:"_blank",rel:"noopener noreferrer"},_=n("img",{src:"https://pic.downk.cc/item/5e9725f5c2a9a83be5dcdec3.png",alt:"",loading:"lazy"},null,-1),v=s("\u524D\u63D0\uFF0C\u8BE5\u79C1\u94A5\u5BF9\u5E94\u7684\u516C\u94A5\u5728 gitee \u4E0A\uFF0Cwindows(C:\\Users\\Computer.ssh)\uFF0C\u5176\u4E2D id_rsa \u662F\u79C1\u94A5\uFF0Cid_rsa.pub \u5185\u5BB9\u662F\u516C\u94A5\uFF0C\u5177\u4F53\u5728 gitee \u4E0A\u589E\u52A0 ssh \u516C\u94A5\u7684\u8FC7\u7A0B\uFF0C\u8BF7\u53C2\u8003"),x={href:"https://gitee.com/help/articles/4191",target:"_blank",rel:"noopener noreferrer"},E=s("SSH \u516C\u94A5\u8BBE\u7F6E"),S=r(`<ol start="2"><li>\u6539 source-repo\u3001destination-repo \u7684\u503C</li></ol><h2 id="lin-cms-dotnetcore-gitee-\u540C\u6B65\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#lin-cms-dotnetcore-gitee-\u540C\u6B65\u811A\u672C" aria-hidden="true">#</a> lin-cms-dotnetcore gitee \u540C\u6B65\u811A\u672C</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>name: Publish
on:
    push:
        branches:
            - master

jobs:
    build:
        runs-on: ubuntu-latest
        steps:
            - name: Sync to Gitee \u{1F495}
              uses: wearerequired/git-mirror-action@master
              env:
                  SSH_PRIVATE_KEY: \${{ secrets.SSH_PRIVATE_KEY }}
              with:
                  source-repo: &quot;git@github.com:luoyunchong/lin-cms-dotnetcore.git&quot;
                  destination-repo: &quot;git@gitee.com:igeekfan/lin-cms-dotnetcore.git&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>\u6BCF\u4E00\u4E2A steps \u5C31\u662F\u5728 jobs \u91CC\u6267\u884C\u547D\u4EE4\uFF0C\u4E00\u4E2A jobs \u53EF\u4EE5\u6709\u591A\u4E2A steps, steps \u5B57\u6BB5\u6307\u5B9A\u6BCF\u4E2A Job \u7684\u8FD0\u884C\u6B65\u9AA4\u7684\u4ECB\u7ECD</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>jobs.&lt;job_id&gt;.steps.name \u6B65\u9AA4\u540D\u79F0
jobs.&lt;job_id&gt;.steps.env \u8BE5\u6B65\u9AA4\u6240\u9700\u7684\u73AF\u5883\u53D8\u91CF\u3002
jobs.&lt;job_id&gt;.steps.uses  \u4F7F\u7528\u7684\u7EC4\u4EF6
jobs.&lt;job_id&gt;.steps.with \u591A\u4E2A\u503C(\u8FD9\u4E2A\u53C2\u6570\u5176\u5B9E\u662F\u63D0\u4EA4\u7ED9\u5BB9\u5668\u7684CMD)

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="ci-cd-\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#ci-cd-\u90E8\u7F72" aria-hidden="true">#</a> CI/CD \u90E8\u7F72</h2><ul><li>\u5B8C\u6574\u7684\u914D\u7F6E\u9879</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># This workflow will do a clean install of node dependencies, build the source code and run tests across different versions of node
# For more information see: https://help.github.com/actions/language-and-framework-guides/using-nodejs-with-github-actions

name: Node.js CI

on:
  push:
    branches:
      - master

jobs:
  build:
    name: \u7F16\u8BD1
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [&#39;8&#39;,&#39;10&#39;,&#39;12&#39;]
    steps:
    - uses: actions/checkout@v2
    - name: Use Node.js \${{ matrix.node-version }}
      uses: actions/setup-node@v1
      with:
        node-version: \${{ matrix.node-version }}
    - name: \u5B89\u88C5\u4F9D\u8D56
      run: npm i
    - name: \u7F16\u8BD1\u6587\u4EF6
      run: |
        npm run lint
        npm run build
  deploy:
    name: \u90E8\u7F72
    runs-on: ubuntu-latest
    steps:
      - name: \u62C9\u53D6\u4EE3\u7801
        uses: actions/checkout@v2
      - name: \u5B89\u88C5 Node.js 12
        uses: actions/setup-node@v1
        with:
          node-version: 12
      - name: \u5B89\u88C5\u4F9D\u8D56
        run: npm i
      - name: \u7F16\u8BD1\u6587\u4EF6
        run: |
          npm run lint
          npm run build
      - name: \u4E0A\u4F20\u6587\u4EF6
        uses: easingthemes/ssh-deploy@v2.1.4
        env:
          ARGS: &quot;-rltgoDzvO --delete&quot;
          SOURCE: &quot;dist/&quot;
          REMOTE_HOST: \${{ secrets.HOST }}
          REMOTE_USER: \${{ secrets.USER }}
          SSH_PRIVATE_KEY: \${{ secrets.SERVER_SSH_KEY }}
          TARGET: \${{ secrets.REMOTE_TARGET }}

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br></div></div><h3 id="ssh-deploy-\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#ssh-deploy-\u63D2\u4EF6" aria-hidden="true">#</a> ssh-deploy \u63D2\u4EF6</h3><ul><li>https://github.com/easingthemes/ssh-deploy</li></ul><p>\u53EF\u67E5\u770B README \u4E86\u89E3\u5177\u4F53\u53C2\u6570</p><p>\u4EE5\u4E0A\u5171\u6709\u56DB\u4E2A\u53C2\u6570\u9700\u8981\u914D\u7F6E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>REMOTE_HOST: \${{ secrets.HOST }}
REMOTE_USER: \${{ secrets.USER }}
SSH_PRIVATE_KEY: \${{ secrets.SERVER_SSH_KEY }}
TARGET: \${{ secrets.REMOTE_TARGET }}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u6253\u5F00 Settings-&gt;Secrets-&gt;New secret \u914D\u7F6E\u5982\u4E0B\u5185\u5BB9\u3002</p><ul><li>HOST eg: mydomain.com \u8FD9\u91CC\u6211\u4EEC\u914D\u7F6E\u4E86\u670D\u52A1\u5668\u7684 ip 111.231.197.142</li><li>USER centos \u670D\u52A1\u5668\u7684\u7528\u6237\u540D</li><li>REMOTE_TARGET \u76EE\u6807\u670D\u52A1\u5668\u7684\u6587\u4EF6\u5939\u4F4D\u7F6E\uFF0C eg: /var/www/lin-cms-vvlog</li><li>SERVER_SSH_KEY\uFF1ASSH \u5BC6\u94A5\u5BF9\u7684\u79C1\u94A5\u90E8\u5206\uFF0C\u516C\u94A5\u5E94\u8BE5\u6DFB\u52A0\u5230\u670D\u52A1\u5668\u4E0A\u7684 authorized_keys \u6587\u4EF6\u4E2D\u3002\u3002eg /root/.ssh/authorized_keys</li></ul><p>\u6700\u540E\u4E00\u4E2A\u53C2\u6570\u8BF4\u660E\uFF1A\u8FD9\u4E2A\u76F8\u5F53\u4E8E\u628A\u79C1\u94A5\u7ED9 github\uFF0C\u8BA9\u4ED6\u80FD\u8FDC\u7A0B\u4E0A\u4F20\u6587\u4EF6\u5230 centos \u4E2D\uFF0C\u516C\u94A5\u653E\u5230\u670D\u52A1\u5668\u4E0A\u3002\u516C\u94A5\u751F\u6210\u7684\u8FC7\u7A0B\u4E0D BB \u4E86\uFF0C</p><h3 id="ssh-\u751F\u6210" tabindex="-1"><a class="header-anchor" href="#ssh-\u751F\u6210" aria-hidden="true">#</a> .ssh \u751F\u6210</h3>`,17),f={href:"https://help.github.com/en/articles/connecting-to-github-with-ssh",target:"_blank",rel:"noopener noreferrer"},R=s("https://help.github.com/en/articles/connecting-to-github-with-ssh"),T=n("li",null,"https://www.ssh.com/ssh/public-key-authentication",-1),w=r(`<p>\u672C\u5730 windows .ssh \u9ED8\u8BA4\u751F\u6210\u76EE\u5F55</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>C:\\Users\\\u8BA1\u7B97\u673A\u540D\\.ssh
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u6211\u7684.ssh \u76EE\u5F55\u4F4D\u7F6E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>C:\\Users\\Computer\\.ssh
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>dir \u67E5\u770B\u6587\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>C:\\Users\\Computer\\.ssh&gt;dir
2020/02/22  19:45             3,243 id_rsa
2020/02/22  19:45               750 id_rsa.pub
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>id_rsa \u662F\u79C1\u94A5\uFF0C\u7528 vscode \u7B49\u8BB0\u4E8B\u672C\u7F16\u8F91\u5668\u6253\u5F00\uFF0C\u5E76\u590D\u5236\u914D\u7F6E\u5230 github \u4E0A\u3002New secret,id_rsa.pub \u662F\u516C\u94A5\uFF0C\u628A\u4ED6\u590D\u5236\u5230 linux \u6587\u4EF6\u5939<code>/root/.ssh/</code>\u76EE\u5F55\u4E2D\uFF0C\u8FD9\u65F6\u628A\u4ED6\u7684\u540D\u5B57\u7531<code>id_rsa.pub</code>\u6539\u6210<code>authorized_keys</code>\u5373\u53EF\u3002</p><p><code>/\u7528\u6237\u540D/.ssh</code> \u6CA1\u6709.ssh \u6587\u4EF6\u5939\u5C31\u521B\u5EFA\u4E00\u4E2A\u3002</p><h3 id="xsheel-ssh-\u767B\u5F55" tabindex="-1"><a class="header-anchor" href="#xsheel-ssh-\u767B\u5F55" aria-hidden="true">#</a> XSheel ssh \u767B\u5F55</h3><p>\u53EF\u901A\u8FC7 xshell \u5DE5\u5177\u9A8C\u8BC1\uFF0CPublic Key \u767B\u5F55\u3002</p><p>\u65B0\u5EFA\u4F1A\u8BDD\u5C5E\u6027-&gt;\u8F93\u5165\u4E3B\u673A\uFF08H\uFF09\u5373 IP \u5730\u5740\u3002</p><p>\u9009\u62E9\u7528\u6237\u8EAB\u4EFD\u9A8C\u8BC1-&gt;\u65B9\u6CD5\u9009\u62E9 public Key,\u8F93\u5165\u7528\u6237\u540D\uFF0C\u6BD4\u5982 root</p><ul><li>\u9009\u62E9\u79C1\u94A5\u767B\u5F55 \u5728\u7528\u6237\u5BC6\u94A5\u53F3\u4FA7\u70B9\u51FB\u6D4F\u89C8-&gt;\u7528\u6237\u5BC6\u94A5-&gt;\u5BFC\u5165-&gt;\u9009\u62E9 id_rsa.pub \u79C1\u94A5\uFF0C\u5BFC\u5165\u6210\u529F\u540E\uFF0C\u9009\u62E9\u6B64\u5BC6\u94A5\uFF0C\u786E\u5B9A\u3002\u518D\u5728 SSH \u7528\u6237\u8EAB\u4EFD\u9A8C\u8BC1\u754C\u9762\u786E\u5B9A,\u5373\u53EF\u767B\u5F55\u6210\u529F\u3002\u8868\u660E\u79C1\u94A5\uFF0C\u516C\u94A5\u914D\u7F6E\u6210\u529F</li></ul><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,14),k={href:"https://github.com/marketplace/actions/mirror-a-repository-using-ssh",target:"_blank",rel:"noopener noreferrer"},y=s("https://github.com/marketplace/actions/mirror-a-repository-using-ssh"),H={href:"https://help.github.com/en/actions",target:"_blank",rel:"noopener noreferrer"},j=s("https://help.github.com/en/actions");function O(A,C){const e=t("ExternalLinkIcon");return c(),l(p,null,[b,u,d,m,n("p",null,[h,n("a",g,[_,a(e)])]),n("p",null,[v,n("a",x,[E,a(e)])]),S,n("ul",null,[n("li",null,[n("a",f,[R,a(e)])]),T]),w,n("ul",null,[n("li",null,[n("a",k,[y,a(e)])]),n("li",null,[n("a",H,[j,a(e)])])])],64)}var V=i(o,[["render",O],["__file","github-actions.html.vue"]]);export{V as default};
