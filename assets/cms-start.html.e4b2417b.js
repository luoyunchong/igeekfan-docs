import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";import{r,c as o,a as s,b as t,F as l,d as a,e as n,o as i}from"./app.9d31e028.js";const c={},u=a('<h1 id="\u540E\u7AEF\u5FEB\u901F\u4E0A\u624B" tabindex="-1"><a class="header-anchor" href="#\u540E\u7AEF\u5FEB\u901F\u4E0A\u624B" aria-hidden="true">#</a> \u540E\u7AEF\u5FEB\u901F\u4E0A\u624B</h1><p>\u672C\u5C0F\u8282\u6211\u4EEC\u5C06\u5728 lin-cms \u7684\u57FA\u7840\u4E0A\u5F00\u53D1\u4E00\u4E2A\u7B80\u5355\u7684\u56FE\u4E66\u7BA1\u7406 demo,\u5E2E\u52A9\u5927\u5BB6\u6765\u719F\u6089\u548C\u5165\u95E8 lin-cms\u3002</p><p>lin-cms \u662F\u4E00\u4E2A lin \u56E2\u961F\u7ECF\u6570\u6253\u78E8\u7684\u6A21\u677F\u9879\u76EE\uFF0C\u672C\u4EBA\u662F c#\u7684\u5F00\u53D1\u8005\uFF0C\u4E3A lin-cms \u5B8C\u5584\u5728.net \u4E0B\u7684\u751F\u6001\uFF0C\u662F\u57FA\u4E8E asp.netcore \u7684\u57FA\u7840\u4E0A\uFF0C\u6C89\u6DC0\u4E0B\u6765\u7684\u4E00\u5957\u5B9E\u8DF5\uFF0C \u5E2E\u52A9\u5F00\u53D1\u8005\u8282\u7EA6\u65F6\u95F4\u3002</p><blockquote><p>\u6CE8\u610F\uFF1A\u672C\u5C0F\u8282\u5EFA\u7ACB\u5728\u4F60\u6709\u4E00\u5B9A\u7684 asp.net mvc\uFF0Cfreesql\uFF0C.net core \u7684\u57FA\u7840\u4E0A\u3002</p></blockquote><h2 id="\u6570\u636E\u5C42" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u5C42" aria-hidden="true">#</a> \u6570\u636E\u5C42</h2><p>\u7531\u4E8E\u6211\u4EEC\u7528\u7684.net core \u4E2D\u4F18\u79C0\u7684\u5F00\u6E90\u9879\u76EE FreeSql,codefirst \u6A21\u5F0F\uFF0C\u4ED6\u80FD\u6839\u636E\u7C7B\u751F\u6210\u8868\u7ED3\u6784\u3002\u6240\u4EE5\uFF0C\u4E0D\u9700\u8981\u6211\u4EEC\u624B\u52A8\u521B\u5EFA\u8868\u7ED3\u6784\u3002</p><h3 id="book-\u4E66" tabindex="-1"><a class="header-anchor" href="#book-\u4E66" aria-hidden="true">#</a> book \u4E66</h3><table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td>id</td><td>bigint</td><td>\u4E3B\u952E Id</td></tr><tr><td>author</td><td>varchar</td><td>\u4F5C\u8005</td></tr><tr><td>image</td><td>varchar</td><td>\u56FE\u7247</td></tr><tr><td>summary</td><td>varchar</td><td>\u7B80\u4ECB</td></tr><tr><td>title</td><td>varchar</td><td>\u6807\u9898</td></tr></tbody></table><p>\u53EF\u589E\u52A0\u4E00\u4E9B\u5BA1\u8BA1\u5B57\u6BB5\uFF0C\u5982</p><table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td>create_time</td><td>datetime</td><td>\u521B\u5EFA\u65F6\u95F4</td></tr><tr><td>create_user_id</td><td>datetime</td><td>\u521B\u5EFA\u8005 ID</td></tr><tr><td>update_time</td><td>datetime</td><td>\u4FEE\u6539\u65F6\u95F4</td></tr><tr><td>update_user_id</td><td>datetime</td><td>\u6700\u540E\u4FEE\u6539\u4EBA Id</td></tr><tr><td>delete_time</td><td>datetime</td><td>\u5220\u9664\u65F6\u95F4</td></tr><tr><td>delete_user_id</td><td>datetime</td><td>\u5220\u9664\u4EBA id</td></tr><tr><td>is_deleted</td><td>datetime</td><td>\u662F\u5426\u5220\u9664</td></tr></tbody></table><p>\u5BA1\u8BA1\u5B57\u6BB5\u53EF\u901A\u8FC7\u7EE7\u627F\u7236\u7C7B<strong>FullAduitEntity</strong>\u5373\u53EF,\u5F53\u7136\uFF0C\u4E5F\u53EF\u53EA\u6709\u521B\u5EFA\u65F6\u95F4\uFF0C\u521B\u5EFA\u4EBA\u4E8C\u4E2A\u5B57\u6BB5\uFF0C\u7EE7\u627F<strong>ICreateAduitEntity</strong>\u63A5\u53E3\uFF0C\u5B9E\u73B0\u4E8C\u4E2A\u5B57\u6BB5\u5373\u53EF\u3002\u5982\u679C\u4E0D\u60F3\u8981\u8FD9\u4E9B\u8BB0\u5F55\uFF0C\u53EA\u9700\u8981\u7EE7\u627F<strong>Entity</strong>\u7C7B\uFF0C\u4EC5\u6709\u4E00\u4E2A ID \u5B57\u6BB5\uFF0C\u652F\u6301\u6CDB\u578B\u3002</p>',11),b=s("strong",null,"is_deleted",-1),d=n("\u5B57\u6BB5\u672C\u8EAB\u6CA1\u6709\u4EC0\u4E48\u7A00\u5947\u7684\uFF0C\u4F46\u6211\u4EEC\u53EF\u4EE5\u914D\u5408 FreeSql \u5B9E\u73B0\u903B\u8F91\u5220\u9664\uFF08\u8F6F\u5220\u9664\uFF09\uFF0C\u5728 LinCms.Web/Configs/DependencyInjectionExtensions.cs \u6587\u4EF6\u4E2D\u3002\u914D\u7F6E \u4E86\u5982\u4E0B\u5185\u5BB9\uFF0C\u5982\u679C\u6211\u4EEC\u7B5B\u9009\u6570\u636E\u65F6\uFF0C\u4F1A\u5168\u5C40\u542F\u7528 "),m={href:"https://github.com/dotnetcore/FreeSql/wiki/%E8%BF%87%E6%BB%A4%E5%99%A8",target:"_blank",rel:"noopener noreferrer"},k=n("\u8FC7\u6EE4\u5668"),g=n("\u3002\u50CF\u521B\u5EFA\u65F6\u95F4\uFF0C\u521B\u5EFA\u4EBA\u3002\u8FD9\u4E9B\u5B57\u6BB5\u90FD\u4E0D\u9700\u8981\u6211\u4EEC\u8D4B\u503C\uFF0C\u5982\u679C\u6211\u4EEC\u5168\u90E8\u4F7F\u7528\u4ED3\u50A8"),h=s("strong",null,"IAuditBaseRepository",-1),v=n("\u8BBF\u95EE\u6570\u636E\u5E93\uFF0C\u8FD9\u4E9B\u5B57\u6BB5\u4F1A\u81EA\u52A8\u8D4B\u503C\u3002"),y=a(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>fsql.GlobalFilter.Apply&lt;IDeleteAduitEntity&gt;(&quot;IsDeleted&quot;, a =&gt; a.IsDeleted == false);
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u6A21\u578B\u5C42" tabindex="-1"><a class="header-anchor" href="#\u6A21\u578B\u5C42" aria-hidden="true">#</a> \u6A21\u578B\u5C42</h2><p>\u6211\u4EEC\u5EFA\u7ACB\u5355\u7EAF\u7684\u5B9E\u4F53\u7C7B\uFF08Entities)\uFF0C\u5728\u8DEF\u5F84<strong>lin-cms-dotnetcore\\src\\LinCms.Core\\Entities</strong>,\u540D\u4E3A Book.cs \u7684\u5B9E\u4F53\u7C7B</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">FreeSql<span class="token punctuation">.</span>DataAnnotations</span><span class="token punctuation">;</span>

<span class="token keyword">namespace</span> <span class="token namespace">LinCms<span class="token punctuation">.</span>Core<span class="token punctuation">.</span>Entities</span>
<span class="token punctuation">{</span>
    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Table</span><span class="token attribute-arguments"><span class="token punctuation">(</span>Name <span class="token operator">=</span> <span class="token string">&quot;book&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Book</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">FullAduitEntity</span></span>
    <span class="token punctuation">{</span>
        <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>DbType <span class="token operator">=</span> <span class="token string">&quot;varchar(30)&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
        <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Author <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">string</span><span class="token punctuation">.</span>Empty<span class="token punctuation">;</span>

        <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>DbType <span class="token operator">=</span> <span class="token string">&quot;varchar(50)&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
        <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Image <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">string</span><span class="token punctuation">.</span>Empty<span class="token punctuation">;</span>

        <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>DbType <span class="token operator">=</span> <span class="token string">&quot;varchar(1000)&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
        <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Summary <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">string</span><span class="token punctuation">.</span>Empty<span class="token punctuation">;</span>

        <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>DbType <span class="token operator">=</span> <span class="token string">&quot;varchar(50)&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
        <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Title <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">string</span><span class="token punctuation">.</span>Empty<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div>`,4),C=n("\u66F4\u591A\u7279\u6027\u6807\u7B7E\u652F\u6301\u60C5\u51B5\uFF0C\u8BF7\u67E5\u770B"),_={href:"https://github.com/dotnetcore/FreeSql/wiki/%E5%AE%9E%E4%BD%93%E7%89%B9%E6%80%A7",target:"_blank",rel:"noopener noreferrer"},x=n("FreeSql \u5B98\u65B9\u6587\u6863\u5B9E\u4F53\u7279\u6027"),q=n("\u3002"),B=a(`<p>\u7531\u4E8E\u9ED8\u8BA4 FreeSql,\u53EA\u6709\u8BBF\u95EE\u5230\u8FD9\u4E2A\u7C7B\u65F6\u624D\u4F1A\u751F\u6210\u8868\uFF0C\u4F46\u6211\u4EEC\u53EF\u4EE5\u624B\u52A8\u626B\u63CF\u6240\u6709\u5E26\u6709 Table \u7279\u6027\u6807\u7B7E\u7684\u7C7B\uFF0C\u540C\u6B65\u8868\u7ED3\u6784\u3002\u4EC5\u5EFA\u8BAE\u5F00\u53D1\u65F6\u542F\u52A8\u8868\u7ED3\u6784\u5168\u90E8\u540C\u6B65\u3002</p><p>LinCms.Web/Configs/DependencyInjectionExtensions.cs \u4E2D\u7684 AddContext \u914D\u7F6E\u9879\u4E2D.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u5728\u8FD0\u884C\u65F6\u76F4\u63A5\u751F\u6210\u8868\u7ED3\u6784
fsql.CodeFirst.SyncStructure(ReflexHelper.GetEntityTypes(typeof(IEntity)));
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u4E1A\u52A1\u5C42" tabindex="-1"><a class="header-anchor" href="#\u4E1A\u52A1\u5C42" aria-hidden="true">#</a> \u4E1A\u52A1\u5C42</h2><p>\u6709\u4E86\u5B9E\u4F53\u7C7B\uFF0C\u6211\u4EEC\u521B\u5EFA IBookRepository<code>&lt;Book,long&gt;</code>\uFF0C\u4E5F\u53EF\u4EE5\u4E0D\u521B\u5EFA\uFF0C\u76F4\u63A5\u4F7F\u7528 IAuditBaseRepository<code>&lt;Book&gt;</code>\u5728 Service \u5C42\u5199\u76F8\u5E94\u7684\u4E1A\u52A1\u3002\u8FD9\u91CC\u6211\u4EEC\u5C31\u4E0D\u521B\u5EFA\u4ED3\u50A8\u670D\u52A1\u4E86\uFF0C\u6846\u67B6\u4E2D\u643A\u5E26\u7684\u4ED3\u50A8\u5DF2\u7ECF\u6EE1\u8DB3\u6211\u4EEC\u7684\u8981\u6C42\u3002</p><p>\u4ED3\u50A8\u662F\u4EC0\u4E48\u5462\u3002\u5728\u8FD9\u91CC\u6211\u4EEC\u53EF\u4EE5\u7406\u89E3 DAL,\u4E5F\u7406\u89E3\u4E3A\u4ED3\u5E93\uFF0C\u4ED6\u63D0\u4F9B\u4E86\u5BF9\u5355\u4E2A\u8868\u7684 CURD \u64CD\u4F5C\u65B9\u6CD5\uFF0C\u6709\u4E86\u4E00\u4E2A\u7EDF\u4E00\u7684\u89C4\u8303\u3002</p><p>\u4F5C\u7528\u5373\u6570\u636E\u7684\u6301\u4E45\u5316\uFF0C\u5E94\u7528\u670D\u52A1\u901A\u8FC7\u4ED3\u50A8\u5BF9\u6570\u636E\u8FDB\u884C\u64CD\u4F5C\uFF0C\u8BA9\u5F00\u53D1\u8005\u4E0D\u7528\u5173\u6CE8\u4ED3\u50A8\u5185\u90E8\u7684\u5B9E\u73B0\u3002</p><p>\u4E1A\u52A1\u5C42 Services\uFF0C\u6211\u4EEC\u76F4\u63A5\u4F7F\u7528\u4ED3\u50A8\u8BBF\u95EE\u6570\u636E\u5E93\u3002</p><p>\u5728 LinCms.Application.Contracts \u9879\u76EE\u4E2D\uFF0C\u5728 v1 \u6587\u4EF6\u5939\u65B0\u5EFA\u4E00\u4E2A Books \u7684\u6587\u4EF6\u5939,\u7528\u4E8E\u5B58\u653E\u4E66\u7684\u76F8\u5173\u63A5\u53E3\uFF0C\u521B\u5EFA IBookService \u7684\u63A5\u53E3</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>using System.Threading.Tasks;
using LinCms.Application.Contracts.v1.Books.Dtos;
using LinCms.Core.Data;

namespace LinCms.Application.Contracts.v1.Books
{
    public interface IBookService
    {
        Task&lt;BookDto&gt; GetAsync(long id);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u65B0\u5EFA\u4E00\u4E2A Dtos \u6587\u4EF6\u5939\uFF0C\u7528\u4E8E\u5B58\u653E\u4E1A\u52A1\u4F20\u8F93\u7684\u6570\u636E\u5BF9\u8C61\uFF0C\u518D\u521B\u5EFA\u4E00\u4E2A BookDto\uFF0C\u4EC5\u5305\u542B\u5FC5\u8981\u7684\u5B57\u6BB5\uFF0C\u800C\u975E\u5168\u90E8\u3002\u8BE5\u7C7B\u4EE5 Dto \u7ED3\u5C3E\uFF0C\u4EE3\u8868\u6570\u636E\u4F20\u8F93\u5BF9\u8C61\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>using System;
using LinCms.Core.Entities;

namespace LinCms.Application.Contracts.v1.Books.Dtos
{
    public class BookDto:EntityDto
    {
        public string Author { get; set; }
        public string Image { get; set; }
        public string Summary { get; set; }
        public string Title { get; set; }
        public DateTime CreateTime { get; set; }
        public DateTime UpdateTime { get; set; }
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u5728 BookService \u5B9E\u73B0\u5982\u4E0B\uFF0C\u5728\u8FD9\u91CC\u6211\u4EEC\u6CE8\u5165 IAuditBaseRepository\uFF0C\u901A\u8FC7 \u8C03\u7528 <strong>_bookRepository.Select.Where(a =&gt; a.Id == id).ToOneAsync();</strong> ,\u6839\u636E id \u5F97\u5230\u4E66\u7684\u5B9E\u4F53\u5BF9\u8C61\u3002\u7136\u540E\u4F7F\u7528 AutoMappeer,\u5C06 Book \u7C7B\u8F6C\u6362\u6210 BookDto \u7C7B\uFF0C\u7136\u540E\u8FD4\u56DE\u3002 \u81F3\u4E8E\u4E3A\u4EC0\u4E48 \u8FD9\u91CC\u6211\u4EEC\u53EF\u4EE5\u6CE8\u5165 IAuditBaseRepository\uFF0CIMapper \u7C7B\uFF0C\u540E\u9762\u6211\u4EEC\u4F1A\u8BB2\u5230\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using LinCms.Application.Contracts.v1.Books;
using LinCms.Application.Contracts.v1.Books.Dtos;
using LinCms.Core.Data;
using LinCms.Core.Entities;
using LinCms.Core.Exceptions;
using LinCms.Core.Extensions;
using LinCms.Core.IRepositories;

namespace LinCms.Application.v1.Books
{
    public class BookService : IBookService
    {
        private readonly IAuditBaseRepository&lt;Book&gt; _bookRepository;
        private readonly IMapper _mapper;
        public BookService(IAuditBaseRepository&lt;Book&gt; bookRepository, IMapper mapper)
        {
            _bookRepository = bookRepository;
            _mapper = mapper;
        }


        public async Task&lt;BookDto&gt; GetAsync(long id)
        {
            Book book = await _bookRepository.Select.Where(a =&gt; a.Id == id).ToOneAsync();
            return _mapper.Map&lt;BookDto&gt;(book);
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><p>\u56E0\u4E3A\u4F7F\u7528 AutoMapper \u7B80\u5316\u4E8C\u4E2A\u5BF9\u8C61\u7684\u6620\u5C04\uFF0C\u6211\u4EEC\u5728\u540C\u4E00\u76EE\u5F55\u4E0B\uFF0C\u521B\u5EFA\u4E00\u4E2A\u7EE7\u627F Profile \u7C7B\u7684\u914D\u7F6E\u9879\u3002\u5728\u6784\u9020\u51FD\u6570\u4E2D\uFF0C\u6211\u4EEC\u914D\u7F6E\u4E86\u8C03\u7528 CreateMap \u65B9\u6CD5\uFF0C\u4EE3\u8868\uFF0C\u4ECE Book-&gt;BookDto \u7684\u6620\u5C04\u5173\u7CFB\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>using AutoMapper;
using LinCms.Application.Contracts.v1.Books.Dtos;
using LinCms.Core.Entities;

namespace LinCms.Application.v1.Books
{
    public class BookProfile:Profile
    {
        public BookProfile()
        {
            CreateMap&lt;Book, BookDto&gt;();
        }
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u5728 ASP.NET Core \u4E2D\uFF0C\u6211\u4EEC\u4F1A\u626B\u63CF\u8BE5\u7A0B\u5E8F\u96C6\uFF08LinCms.Applicaiton\uFF09\u4E2D\u6240\u6709\u7EE7\u627F\u4E86 Profile \u7C7B\u7684\u5B50\u7C7B\uFF0C\u5728 LinCms.Web \u4E2D ConfiguartionService \u914D\u7F6E\u5982\u4E0B\uFF0C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>services.AddAutoMapper(typeof(BookProfile).Assembly);
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u4E00\u4E2A\u9879\u76EE\u5373\u4E00\u4E2A\u7A0B\u5E8F\u96C6(\u751F\u6210\u4E00\u4E2A dll)\uFF0C\u4EC5\u914D\u7F6E\u4E00\u6B21\u3002</p><p>\u6211\u4EEC\u5B8C\u5584\u4E00\u4E0B\u63A7\u5236\u5668\u7684\u4EE3\u7801\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>using System.Threading.Tasks;
using AutoMapper;
using LinCms.Application.Contracts.v1.Books;
using LinCms.Application.Contracts.v1.Books.Dtos;
using LinCms.Core.Aop;
using LinCms.Core.Aop.Filter;
using LinCms.Core.Data;
using LinCms.Core.Entities;
using LinCms.Core.Exceptions;
using LinCms.Core.Extensions;
using LinCms.Core.IRepositories;
using LinCms.Web.Data.Authorization;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace LinCms.Web.Controllers.v1
{
    [Route(&quot;v1/book&quot;)]
    [ApiController]
    [Authorize]
    public class BookController : ControllerBase
    {
        private readonly IBookService _bookService;
        public BookController(IBookService bookService)
        {
            _bookService = bookService;
        }

        [HttpGet(&quot;{id}&quot;)]
        public async Task&lt;BookDto&gt; GetAsync(int id)
        {
            return await _bookService.GetAsync(id);
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><p>\u5728 LinCms.Web/Controllers/v1 \u6587\u4EF6\u5939\uFF0C\u521B\u5EFA\u6211\u4EEC\u7684 Book \u63A7\u5236\u5668\u3002 \u6211\u4EEC\u4F9D\u65E7\u901A\u8FC7\u6784\u9020\u51FD\u6570\u6CE8\u5165\u670D\u52A1<strong>IBookService</strong>,\u8FD9\u91CC\u7528\u5230\u7684\u662F async await \u65B9\u6CD5\uFF0C\u4E0E\u540C\u6B65\u65B9\u6CD5\u6267\u884C\u987A\u5E8F\u4E00\u81F4\uFF0C\u4EC5\u591A\u4E8C\u4E2A\u5173\u952E\u5B57\uFF0C\u5E76\u4F7F\u7528 Task&lt;\u8FD4\u56DE\u503C&gt;\u6765\u8FD4\u56DE\u6570\u636E\uFF0C\u901A\u5E38\u6211\u4EEC\u4F7F\u7528 Async \u6807\u8BC6\u5F02\u6B65\u65B9\u6CD5\u3002</p><p>\u542F\u52A8\u9879\u76EE\uFF0C\u53EF\u901A\u8FC7 Visual Studio \u70B9\u51FB\u4E0A\u65B9\u7684\u8FD0\u884C\u5373\u53EF\u3002</p><p>\u8FD8\u53EF\u901A\u8FC7\u7EC8\u7AEF\u8FD0\u884C\u9879\u76EE</p><p>\u5148 cd \u5230\u76EE\u5F55 lin-cms-dotnetcore/src/LinCms.Web</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>dotnet run
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u6253\u5F00\u6D4F\u89C8\u5668\uFF0Chttps://localhost:5001/swagger/index.html\uFF0C ctrl+f \u641C\u7D22\uFF0Cbook\uFF0C\u627E\u5230 GET /v1/book/{id}\uFF0C\u70B9\u51FB try it out,\u8F93\u5165 id\uFF0C\u70B9\u51FB Execute\u3002</p><p>\u56E0\u4E3A\u6211\u4EEC\u6CA1\u767B\u5F55\u767B\u5F55\uFF0C\u5728 BookController \u4E0A\u5199\u4E86\u7279\u6027\u6807\u7B7E <strong>[Authorize]</strong> \uFF0C\u6240\u4EE5\u4F1A\u8FD4\u56DE</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
  &quot;code&quot;: 10000,
  &quot;message&quot;: &quot;\u8BF7\u5148\u767B\u5F55&quot;,
  &quot;request&quot;: &quot;GET /v1/book/131&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u6211\u4EEC\u53EF\u4EE5\u5148\u53BB\u6389\u8FD9\u4E2A\u7279\u6027\u6807\u7B7E\uFF0C\u4E5F\u53EF\u4EE5\u8D70\u767B\u5F55\u6D4F\u89C8\uFF0C\u628A Token \u653E\u5230 Header \u4E2D\u7684 Authoriaztion \u4E2D\u3002\u3002</p><p>\u8FD9\u91CC\u6211\u4EEC\u5148\u53BB\u6389\u8FD9\u884C\u7279\u6027\u6807\u7B7E\u3002\u53BB\u6389\u540E\uFF0C\u9700\u8981 ctrl+c\uFF0C\u5373\u51FA\u8FD0\u884C\u72B6\u6001\uFF0C\u5982\u679C\u611F\u89C9\u9EBB\u70E6\uFF0C\u53EF\u4EE5\u4F7F\u7528 <strong>dotnet run watch</strong> \u547D\u4EE4\uFF0C\u4FEE\u6539\u540E\uFF0C\u81EA\u52A8\u91CD\u542F\uFF0C\u4E0D\u9700\u8981\u624B\u52A8\u91CD\u542F\u3002\u3002</p><p>\u8FD9\u91CC\u6211\u4EEC\u91CD\u65B0\u6D4B\u8BD5\uFF0C\u624B\u52A8\u7ED9\u6570\u636E\u5E93\u52A0\u4E00\u4E9B\u6570\u636E\uFF0C\u8BB0\u5F97 is_deleted \u8981\u662F false\uFF0C\u7136\u540E\u8F93\u5165\u5BF9\u5E94\u7684 id\uFF0C\u4F1A\u5F97\u5230\u5BF9\u5E94\u7684\u503C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
  &quot;author&quot;: &quot;891dc185-2&quot;,
  &quot;image&quot;: &quot;f6d0c1e9-fcb2-446a-9093-d773e6515579&quot;,
  &quot;summary&quot;: &quot;8aea38f8-a6e0-4053-bd7a-ae4476432bdd&quot;,
  &quot;title&quot;: &quot;2d0c2e44-ee02-4d40-b4b7-eed03bb48aa4&quot;,
  &quot;create_time&quot;: 1588485910430,
  &quot;update_time&quot;: 1588485910430,
  &quot;id&quot;: 139
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,33);function A(f,E){const e=r("ExternalLinkIcon");return i(),o(l,null,[u,s("p",null,[b,d,s("a",m,[k,t(e)]),g,h,v]),y,s("p",null,[C,s("a",_,[x,t(e)]),q]),B],64)}var D=p(c,[["render",A],["__file","cms-start.html.vue"]]);export{D as default};
