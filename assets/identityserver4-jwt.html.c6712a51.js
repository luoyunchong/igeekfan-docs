import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{d as s}from"./app.0632e0aa.js";const e={},a=s(`<h1 id="\u8BA4\u8BC1\u9274\u6743\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#\u8BA4\u8BC1\u9274\u6743\u72B6\u6001" aria-hidden="true">#</a> \u8BA4\u8BC1\u9274\u6743\u72B6\u6001</h1><p>\u8BA4\u8BC1\u5206\u4E3A\u4EE5\u4E0B\u60C5\u51B5\uFF1A\u5F53\u524D\u89D2\u8272\u4E3A\u7BA1\u7406\u5458\uFF0C\u8BE5\u5206\u7EC4\u914D\u7F6E\u4E86\u6743\u9650\uFF0C\u8BE5\u5206\u7EC4\u672A\u5206\u914D\u67D0\u4E00\u65B9\u6CD5\u7684\u6743\u9650.</p><p>\u72B6\u6001\u7801\uFF08StatusCode):401 UnAuthorized</p><table><thead><tr><th>StatusCode</th><th>\u542B\u4E49</th></tr></thead><tbody><tr><td>401 UnAuthorized</td><td>\u672A\u6388\u6743\u3001\u65E0\u6743\u9650\u3001\u672A\u767B\u5F55</td></tr><tr><td>422 UNPROCESSABLE ENTITY</td><td>\u4EE4\u724C\u5931\u6548</td></tr><tr><td>200</td><td>\u8BBF\u95EE\u6B63\u5E38</td></tr></tbody></table><ol><li>\u672A\u767B\u5F55\uFF0C\u4E0D\u5E26access_token\uFF0C\u76F4\u63A5\u8BF7\u6C42\u9700\u8981\u767B\u5F55\u7684\u63A5\u53E3\u3001\u7BA1\u7406\u5458\u63A5\u53E3\u7ED3\u679C\u4E00\u6837\u3002</li></ol><p>\u8FD4\u56DE\u7ED3\u679C\u5E94\u4E3A\uFF1A\u72B6\u6001\u7801\uFF1A401 UNAUTHORIZED</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;error_code&quot;: 10000,
    &quot;msg&quot;: &quot;\u8BA4\u8BC1\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u8BF7\u6C42\u5934\u6216\u8005\u91CD\u65B0\u767B\u9646&quot;,
    &quot;request&quot;: &quot;GET  /cms/admin/authority&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol start="2"><li>\u643A\u5E26access_token\uFF0C\u4F46\u975E\u8D85\u7EA7\u7BA1\u7406\u5458(admin\u5B57\u6BB5\u4E3A2),\u8BBF\u95EE\u7684\u65B9\u6CD5\u4E3A\u89D2\u8272\u4E3A\u8D85\u7BA1\u624D\u6709\u6743\u9650\u7684\u65B9\u6CD5\u3002</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[LinCmsAuthorize(Roles = LinGroup.Administrator)]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u8FD4\u56DE\u7ED3\u679C\u5E94\u4E3A\uFF1A\uFF1A\u72B6\u6001\u7801\uFF1A401 UNAUTHORIZED</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;error_code&quot;: 10000,
    &quot;msg&quot;: &quot;\u53EA\u6709\u8D85\u7EA7\u7BA1\u7406\u5458\u53EF\u64CD\u4F5C&quot;,
    &quot;request&quot;: &quot;GET  /cms/admin/authority&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol start="3"><li>\u643A\u5E26access_token \uFF0C\u8BBF\u95EE\u53EA\u9700\u8981\u767B\u5F55\u7684\u63A5\u53E3\uFF08/cms/user/auths\uFF09</li></ol><p>\u63A7\u5236\u5668\u6216\u65B9\u6CD5\u4E0A\u6307\u5B9A <strong>[Authorize]</strong> \u6216 <strong>[LinCmsAuthorize]</strong> \u7279\u6027\u6807\u7B7E\u65F6\uFF0C\u5FC5\u987B\u767B\u5F55\u624D\u80FD\u8BBF\u95EE\uFF0C\u5426\u5219\u8FD4\u56DE\u7B2C\u4E00\u79CD\u7ED3\u679C\u3002</p><p>\u8FD4\u56DE\u7ED3\u679C\u5E94\u4E3A\uFF1A\u72B6\u6001\u7801\uFF1A200</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;active&quot;: 1,
    &quot;admin&quot;: 1,
    &quot;auths&quot;: [
        {
            &quot;\u4FE1\u606F&quot;: [
                {
                    &quot;auth&quot;: &quot;\u67E5\u770Blin\u7684\u4FE1\u606F&quot;,
                    &quot;module&quot;: &quot;\u4FE1\u606F&quot;
                }
            ]
        }
    ],
    &quot;avatar&quot;: null,
    &quot;create_time&quot;: 1564372600000,
    &quot;email&quot;: &quot;acs@acs.com&quot;,
    &quot;group_id&quot;: 54,
    &quot;id&quot;: 112,
    &quot;nickname&quot;: &quot;alan&quot;,
    &quot;update_time&quot;: 1564487059000
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><ol start="4"><li>\u643A\u5E26access_token\uFF0C\u4F46\u6B64\u7528\u6237\u65E0\u8BBF\u95EE\u6B64\u65B9\u6CD5\u7684\u6743\u9650\uFF08\u5373\u8BE5\u7528\u6237\u7684\u7EC4\u522B\u672A\u914D\u7F6E\u6B64\u6743\u9650\uFF09\u3002</li></ol><p>\u8FD4\u56DE\u7ED3\u679C\u5E94\u4E3A\uFF1A\u72B6\u6001\u7801\uFF1A401 UNAUTHORIZED</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;error_code&quot;: 10000,
    &quot;msg&quot;: &quot;\u6743\u9650\u4E0D\u591F\uFF0C\u8BF7\u8054\u7CFB\u8D85\u7EA7\u7BA1\u7406\u5458\u83B7\u5F97\u6743\u9650&quot;,
    &quot;request&quot;: &quot;GET  /cms/log/search&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol start="5"><li>\u643A\u5E26\u8FC7\u671F\u7684access_token\u503C \u8FD4\u56DE\u7ED3\u679C\u5E94\u4E3A\uFF1A\u72B6\u6001\u7801\uFF1A401 UNAUTHORIZED</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;error_code&quot;: 10050,
    &quot;msg&quot;: &quot;\u4EE4\u724C\u8FC7\u671F&quot;,
    &quot;request&quot;: &quot;GET  /cms/admin/users&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol start="6"><li>\u643A\u5E26\u4E0D\u6B63\u5E38\u7684access_token\u503C\uFF0C\u540E\u53F0\u65E0\u6CD5\u4E0B\u6B63\u5E38\u89E3\u6790\u51FA\u7528\u6237\u4FE1\u606F \u8FD4\u56DE\u7ED3\u679C\u5E94\u4E3A\uFF1A\u72B6\u6001\u7801\uFF1A422 UNPROCESSABLE ENTITY</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;error_code&quot;: 10040,
    &quot;msg&quot;: &quot;\u4EE4\u724C\u5931\u6548&quot;,
    &quot;request&quot;: &quot;GET  /cms/admin/users&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,22);function t(r,u){return a}var i=n(e,[["render",t],["__file","identityserver4-jwt.html.vue"]]);export{i as default};
