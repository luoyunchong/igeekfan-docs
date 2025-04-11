import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,b as e,o as l}from"./app-CU_36ULm.js";const i={};function p(t,s){return l(),a("div",null,s[0]||(s[0]=[e(`<h1 id="全局敏感词处理" tabindex="-1"><a class="header-anchor" href="#全局敏感词处理"><span>全局敏感词处理</span></a></h1><p>基于ToolGood.Words类库，配合敏感字的文本文件，写的API接口。</p><ul><li><a href="https://github.com/luoyunchong/dotnetcore-examples/tree/master/aspnetcore-stopwords" target="_blank" rel="noopener noreferrer">https://github.com/luoyunchong/dotnetcore-examples/tree/master/aspnetcore-stopwords</a></li></ul><p>一共二种方式</p><h2 id="_1-toolgood-words" tabindex="-1"><a class="header-anchor" href="#_1-toolgood-words"><span>1.ToolGood.Words</span></a></h2><p>类库配合敏感库</p><ul><li><a href="https://github.com/toolgood/ToolGood.Words" target="_blank" rel="noopener noreferrer">ToolGood.Words</a></li></ul><p>简单用法</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[Fact]</span></span>
<span class="line"><span>public void IssuesTest_17()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    var illegalWordsSearch = new IllegalWordsSearch();</span></span>
<span class="line"><span>    string s = &quot;中国|zg人|abc&quot;;</span></span>
<span class="line"><span>    illegalWordsSearch.SetKeywords(s.Split(&#39;|&#39;));</span></span>
<span class="line"><span>    var str = illegalWordsSearch.Replace(&quot;我是中美国人厉害中国完美ａｂｃddb好的&quot;, &#39;*&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    Assert.Equal(&quot;我是中美国人厉害**完美***ddb好的&quot;, str);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配合敏感库文本文件，写的工具类</p><p>二个文件放到wwwroot/_Illegal目录下，通过ReplaceStopWords方法调用即可对</p><ul><li><a href="https://github.com/toolgood/ToolGood.Words/blob/master/csharp/ToolGood.Words.Test/_Illegal/IllegalKeywords.txt" target="_blank" rel="noopener noreferrer">https://github.com/toolgood/ToolGood.Words/blob/master/csharp/ToolGood.Words.Test/_Illegal/IllegalKeywords.txt</a></li><li><a href="https://github.com/toolgood/ToolGood.Words/blob/master/csharp/ToolGood.Words.Test/_Illegal/IllegalUrls.txt" target="_blank" rel="noopener noreferrer">https://github.com/toolgood/ToolGood.Words/blob/master/csharp/ToolGood.Words.Test/_Illegal/IllegalUrls.txt</a></li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>public class ToolGoodUtils</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    //敏感库只要这二个文件存在即可</span></span>
<span class="line"><span>    //本地敏感库缓存-https://github.com/toolgood/ToolGood.Words/tree/master/csharp/ToolGood.Words.Test/_Illegal</span></span>
<span class="line"><span>    //因为需要上传至github并同步gitee,安全起见，所以未上传至git，需要自行下载并复制</span></span>
<span class="line"><span>    private const string KeywordsPath = &quot;wwwroot/_Illegal/IllegalKeywords.txt&quot;;</span></span>
<span class="line"><span>    private const string UrlsPath = &quot;wwwroot/_Illegal/IllegalUrls.txt&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private const string InfoPath = &quot;wwwroot/_Illegal/IllegalInfo.txt&quot;;</span></span>
<span class="line"><span>    private const string BitPath = &quot;wwwroot/_Illegal/IllegalBit.iws&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private static IllegalWordsSearch _search;</span></span>
<span class="line"><span>    /// &lt;summary&gt;</span></span>
<span class="line"><span>    /// 本地敏感库,文件修改后，重新创建缓存Bit</span></span>
<span class="line"><span>    /// &lt;/summary&gt;</span></span>
<span class="line"><span>    /// &lt;returns&gt;&lt;/returns&gt;</span></span>
<span class="line"><span>    public static IllegalWordsSearch GetIllegalWordsSearch()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        if (_search == null)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            string ipath = Path.GetFullPath(InfoPath);</span></span>
<span class="line"><span>            if (File.Exists(ipath) == false)</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                _search = CreateIllegalWordsSearch();</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            else</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                var texts = File.ReadAllText(ipath).Split(&#39;|&#39;);</span></span>
<span class="line"><span>                if (new FileInfo(Path.GetFullPath(KeywordsPath)).LastWriteTime.ToString(&quot;yyyy-MM-dd HH:mm:ss&quot;) !=</span></span>
<span class="line"><span>                    texts[0] ||</span></span>
<span class="line"><span>                    new FileInfo(Path.GetFullPath(UrlsPath)).LastWriteTime.ToString(&quot;yyyy-MM-dd HH:mm:ss&quot;) !=</span></span>
<span class="line"><span>                    texts[1]</span></span>
<span class="line"><span>                )</span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                    _search = CreateIllegalWordsSearch();</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                else</span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                    var s = new IllegalWordsSearch();</span></span>
<span class="line"><span>                    s.Load(Path.GetFullPath(BitPath));</span></span>
<span class="line"><span>                    _search = s;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return _search;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private static IllegalWordsSearch CreateIllegalWordsSearch()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        string[] words1 = File.ReadAllLines(Path.GetFullPath(KeywordsPath), Encoding.UTF8);</span></span>
<span class="line"><span>        string[] words2 = File.ReadAllLines(Path.GetFullPath(UrlsPath), Encoding.UTF8);</span></span>
<span class="line"><span>        var words = new List&lt;string&gt;();</span></span>
<span class="line"><span>        foreach (var item in words1)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            words.Add(item.Trim());</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        foreach (var item in words2)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            words.Add(item.Trim());</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        var search = new IllegalWordsSearch();</span></span>
<span class="line"><span>        search.SetKeywords(words);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        search.Save(Path.GetFullPath(BitPath));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        var text = new FileInfo(Path.GetFullPath(KeywordsPath)).LastWriteTime.ToString(&quot;yyyy-MM-dd HH:mm:ss&quot;) + &quot;|&quot;+ new FileInfo(Path.GetFullPath(UrlsPath)).LastWriteTime.ToString(&quot;yyyy-MM-dd HH:mm:ss&quot;);</span></span>
<span class="line"><span>        File.WriteAllText(Path.GetFullPath(InfoPath), text);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return search;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-循环使用replace" tabindex="-1"><a class="header-anchor" href="#_2-循环使用replace"><span>2. 循环使用Replace</span></a></h2><p>方案：通过维护敏感库，循环replace<br> 大佬分享给我的，稍微改成了从文件中获取敏感字。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>public static class StopWords</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    static readonly ConcurrentDictionary&lt;string, bool&gt; FunNlpDataSensitive = new ConcurrentDictionary&lt;string, bool&gt;();</span></span>
<span class="line"><span>    static readonly ConcurrentDictionary&lt;int, string&gt; ReplaceNewValue = new ConcurrentDictionary&lt;int, string&gt;();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private const string KeywordsPath = &quot;wwwroot/_Illegal/IllegalKeywords.txt&quot;;</span></span>
<span class="line"><span>    private const string UrlsPath = &quot;wwwroot/_Illegal/IllegalUrls.txt&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    static StopWords()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        LoadDataFromFile();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void LoadDataFromFile()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        string words1 = File.ReadAllText(Path.GetFullPath(KeywordsPath), Encoding.UTF8);</span></span>
<span class="line"><span>        string words2 = File.ReadAllText(Path.GetFullPath(UrlsPath), Encoding.UTF8);</span></span>
<span class="line"><span>        LoadDataFromText(words1);</span></span>
<span class="line"><span>        LoadDataFromText(words2);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void LoadDataFromText(string text)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        int oldcount = FunNlpDataSensitive.Count;</span></span>
<span class="line"><span>        foreach (string wd in text.Split(&#39;\\n&#39;))</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            string keykey = wd.Trim().Trim(&#39;\\r&#39;, &#39;\\n&#39;).Trim();</span></span>
<span class="line"><span>            if (string.IsNullOrEmpty(keykey)) continue;</span></span>
<span class="line"><span>            FunNlpDataSensitive.TryAdd(keykey, true);</span></span>
<span class="line"><span>            if (ReplaceNewValue.ContainsKey(keykey.Length) == false)</span></span>
<span class="line"><span>                ReplaceNewValue.TryAdd(keykey.Length, &quot;&quot;.PadRight(keykey.Length, &#39;*&#39;));</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        Console.WriteLine($&quot;敏感词加载完毕，增加数量：{FunNlpDataSensitive.Count - oldcount}&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /// &lt;summary&gt;</span></span>
<span class="line"><span>    /// 替换所有敏感词为 *</span></span>
<span class="line"><span>    /// &lt;/summary&gt;</span></span>
<span class="line"><span>    /// &lt;param name=&quot;that&quot;&gt;&lt;/param&gt;</span></span>
<span class="line"><span>    /// &lt;returns&gt;&lt;/returns&gt;</span></span>
<span class="line"><span>    public static string ReplaceStopWords(this string that)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        foreach (var wd in FunNlpDataSensitive.Keys)</span></span>
<span class="line"><span>            that = that.Replace(wd, ReplaceNewValue.TryGetValue(wd.Length, out var tryval) ? tryval : &quot;&quot;.PadRight(wd.Length, &#39;*&#39;));</span></span>
<span class="line"><span>        return that;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="freesql全局处理敏感词" tabindex="-1"><a class="header-anchor" href="#freesql全局处理敏感词"><span>FreeSql全局处理敏感词</span></a></h2><p>使用FreeSql这个ORM时，全局处理string类型的值，进行敏感词处理。代码在StartUp.cs的构造函数中。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>//敏感词处理</span></span>
<span class="line"><span>IllegalWordsSearch illegalWords = ToolGoodUtils.GetIllegalWordsSearch();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Fsql.Aop.AuditValue += (s, e) =&gt;</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    if (e.Column.CsType == typeof(string) &amp;&amp; e.Value != null)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        string oldVal = (string)e.Value;</span></span>
<span class="line"><span>        string newVal = illegalWords.Replace(oldVal);</span></span>
<span class="line"><span>        //第二种处理敏感词的方式</span></span>
<span class="line"><span>        //string newVal = oldVal.ReplaceStopWords();</span></span>
<span class="line"><span>        if (newVal != oldVal)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            e.Value = newVal;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19)]))}const c=n(i,[["render",p],["__file","stopwords.html.vue"]]),o=JSON.parse('{"path":"/dotnetcore/lin-cms/stopwords.html","title":"全局敏感词处理","lang":"zh-CN","frontmatter":{"description":"全局敏感词处理 基于ToolGood.Words类库，配合敏感字的文本文件，写的API接口。 https://github.com/luoyunchong/dotnetcore-examples/tree/master/aspnetcore-stopwords 一共二种方式 1.ToolGood.Words 类库配合敏感库 ToolGood.Words...","head":[["meta",{"property":"og:url","content":"https://igeekfan.cn/igeekfan-docs/dotnetcore/lin-cms/stopwords.html"}],["meta",{"property":"og:site_name","content":".NET 开发者指北"}],["meta",{"property":"og:title","content":"全局敏感词处理"}],["meta",{"property":"og:description","content":"全局敏感词处理 基于ToolGood.Words类库，配合敏感字的文本文件，写的API接口。 https://github.com/luoyunchong/dotnetcore-examples/tree/master/aspnetcore-stopwords 一共二种方式 1.ToolGood.Words 类库配合敏感库 ToolGood.Words..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-06-02T11:44:24.000Z"}],["meta",{"property":"article:modified_time","content":"2022-06-02T11:44:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"全局敏感词处理\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-06-02T11:44:24.000Z\\",\\"author\\":[]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://igeekfan.cn/igeekfan-docs/atom.xml","title":".NET 开发者指北 Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://igeekfan.cn/igeekfan-docs/feed.json","title":".NET 开发者指北 JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://igeekfan.cn/igeekfan-docs/rss.xml","title":".NET 开发者指北 RSS Feed"}]]},"headers":[{"level":2,"title":"1.ToolGood.Words","slug":"_1-toolgood-words","link":"#_1-toolgood-words","children":[]},{"level":2,"title":"2. 循环使用Replace","slug":"_2-循环使用replace","link":"#_2-循环使用replace","children":[]},{"level":2,"title":"FreeSql全局处理敏感词","slug":"freesql全局处理敏感词","link":"#freesql全局处理敏感词","children":[]}],"git":{"createdTime":1582888231000,"updatedTime":1654170264000,"contributors":[{"name":"luoyunchong","email":"luoyunchong@foxmail.com","commits":3},{"name":"igeekfan","email":"luoyunchong@foxmail.com","commits":2}]},"readingTime":{"minutes":2.25,"words":676},"filePathRelative":"dotnetcore/lin-cms/stopwords.md","localizedDate":"2020年2月28日","autoDesc":true}');export{c as comp,o as data};
