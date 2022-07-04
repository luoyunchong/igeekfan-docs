import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";import{r as t,c as p,a as n,b as e,F as o,e as s,d as l,o as i}from"./app.9d31e028.js";const b={},c=n("h1",{id:"\u5168\u5C40\u654F\u611F\u8BCD\u5904\u7406",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5168\u5C40\u654F\u611F\u8BCD\u5904\u7406","aria-hidden":"true"},"#"),s(" \u5168\u5C40\u654F\u611F\u8BCD\u5904\u7406")],-1),u=n("p",null,"\u57FA\u4E8EToolGood.Words\u7C7B\u5E93\uFF0C\u914D\u5408\u654F\u611F\u5B57\u7684\u6587\u672C\u6587\u4EF6\uFF0C\u5199\u7684API\u63A5\u53E3\u3002",-1),m={href:"https://github.com/luoyunchong/dotnetcore-examples/tree/master/aspnetcore-stopwords",target:"_blank",rel:"noopener noreferrer"},d=s("https://github.com/luoyunchong/dotnetcore-examples/tree/master/aspnetcore-stopwords"),h=n("p",null,"\u4E00\u5171\u4E8C\u79CD\u65B9\u5F0F",-1),g=n("h2",{id:"_1-toolgood-words",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-toolgood-words","aria-hidden":"true"},"#"),s(" 1.ToolGood.Words")],-1),w=n("p",null,"\u7C7B\u5E93\u914D\u5408\u654F\u611F\u5E93",-1),_={href:"https://github.com/toolgood/ToolGood.Words",target:"_blank",rel:"noopener noreferrer"},y=s("ToolGood.Words"),x=l(`<p>\u7B80\u5355\u7528\u6CD5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[Fact]
public void IssuesTest_17()
{
    var illegalWordsSearch = new IllegalWordsSearch();
    string s = &quot;\u4E2D\u56FD|zg\u4EBA|abc&quot;;
    illegalWordsSearch.SetKeywords(s.Split(&#39;|&#39;));
    var str = illegalWordsSearch.Replace(&quot;\u6211\u662F\u4E2D\u7F8E\u56FD\u4EBA\u5389\u5BB3\u4E2D\u56FD\u5B8C\u7F8E\uFF41\uFF42\uFF43ddb\u597D\u7684&quot;, &#39;*&#39;);

    Assert.Equal(&quot;\u6211\u662F\u4E2D\u7F8E\u56FD\u4EBA\u5389\u5BB3**\u5B8C\u7F8E***ddb\u597D\u7684&quot;, str);
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u914D\u5408\u654F\u611F\u5E93\u6587\u672C\u6587\u4EF6\uFF0C\u5199\u7684\u5DE5\u5177\u7C7B</p><p>\u4E8C\u4E2A\u6587\u4EF6\u653E\u5230wwwroot/_Illegal\u76EE\u5F55\u4E0B\uFF0C\u901A\u8FC7ReplaceStopWords\u65B9\u6CD5\u8C03\u7528\u5373\u53EF\u5BF9</p>`,4),T={href:"https://github.com/toolgood/ToolGood.Words/blob/master/csharp/ToolGood.Words.Test/_Illegal/IllegalKeywords.txt",target:"_blank",rel:"noopener noreferrer"},v=s("https://github.com/toolgood/ToolGood.Words/blob/master/csharp/ToolGood.Words.Test/_Illegal/IllegalKeywords.txt"),I={href:"https://github.com/toolgood/ToolGood.Words/blob/master/csharp/ToolGood.Words.Test/_Illegal/IllegalUrls.txt",target:"_blank",rel:"noopener noreferrer"},F=s("https://github.com/toolgood/ToolGood.Words/blob/master/csharp/ToolGood.Words.Test/_Illegal/IllegalUrls.txt"),P=l(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class ToolGoodUtils
{
    //\u654F\u611F\u5E93\u53EA\u8981\u8FD9\u4E8C\u4E2A\u6587\u4EF6\u5B58\u5728\u5373\u53EF
    //\u672C\u5730\u654F\u611F\u5E93\u7F13\u5B58-https://github.com/toolgood/ToolGood.Words/tree/master/csharp/ToolGood.Words.Test/_Illegal
    //\u56E0\u4E3A\u9700\u8981\u4E0A\u4F20\u81F3github\u5E76\u540C\u6B65gitee,\u5B89\u5168\u8D77\u89C1\uFF0C\u6240\u4EE5\u672A\u4E0A\u4F20\u81F3git\uFF0C\u9700\u8981\u81EA\u884C\u4E0B\u8F7D\u5E76\u590D\u5236
    private const string KeywordsPath = &quot;wwwroot/_Illegal/IllegalKeywords.txt&quot;;
    private const string UrlsPath = &quot;wwwroot/_Illegal/IllegalUrls.txt&quot;;

    private const string InfoPath = &quot;wwwroot/_Illegal/IllegalInfo.txt&quot;;
    private const string BitPath = &quot;wwwroot/_Illegal/IllegalBit.iws&quot;;

    private static IllegalWordsSearch _search;
    /// &lt;summary&gt;
    /// \u672C\u5730\u654F\u611F\u5E93,\u6587\u4EF6\u4FEE\u6539\u540E\uFF0C\u91CD\u65B0\u521B\u5EFA\u7F13\u5B58Bit
    /// &lt;/summary&gt;
    /// &lt;returns&gt;&lt;/returns&gt;
    public static IllegalWordsSearch GetIllegalWordsSearch()
    {
        if (_search == null)
        {
            string ipath = Path.GetFullPath(InfoPath);
            if (File.Exists(ipath) == false)
            {
                _search = CreateIllegalWordsSearch();
            }
            else
            {
                var texts = File.ReadAllText(ipath).Split(&#39;|&#39;);
                if (new FileInfo(Path.GetFullPath(KeywordsPath)).LastWriteTime.ToString(&quot;yyyy-MM-dd HH:mm:ss&quot;) !=
                    texts[0] ||
                    new FileInfo(Path.GetFullPath(UrlsPath)).LastWriteTime.ToString(&quot;yyyy-MM-dd HH:mm:ss&quot;) !=
                    texts[1]
                )
                {
                    _search = CreateIllegalWordsSearch();
                }
                else
                {
                    var s = new IllegalWordsSearch();
                    s.Load(Path.GetFullPath(BitPath));
                    _search = s;
                }
            }
        }
        return _search;
    }

    private static IllegalWordsSearch CreateIllegalWordsSearch()
    {
        string[] words1 = File.ReadAllLines(Path.GetFullPath(KeywordsPath), Encoding.UTF8);
        string[] words2 = File.ReadAllLines(Path.GetFullPath(UrlsPath), Encoding.UTF8);
        var words = new List&lt;string&gt;();
        foreach (var item in words1)
        {
            words.Add(item.Trim());
        }
        foreach (var item in words2)
        {
            words.Add(item.Trim());
        }

        var search = new IllegalWordsSearch();
        search.SetKeywords(words);

        search.Save(Path.GetFullPath(BitPath));

        var text = new FileInfo(Path.GetFullPath(KeywordsPath)).LastWriteTime.ToString(&quot;yyyy-MM-dd HH:mm:ss&quot;) + &quot;|&quot;+ new FileInfo(Path.GetFullPath(UrlsPath)).LastWriteTime.ToString(&quot;yyyy-MM-dd HH:mm:ss&quot;);
        File.WriteAllText(Path.GetFullPath(InfoPath), text);

        return search;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br></div></div><h2 id="_2-\u5FAA\u73AF\u4F7F\u7528replace" tabindex="-1"><a class="header-anchor" href="#_2-\u5FAA\u73AF\u4F7F\u7528replace" aria-hidden="true">#</a> 2. \u5FAA\u73AF\u4F7F\u7528Replace</h2><p>\u65B9\u6848\uFF1A\u901A\u8FC7\u7EF4\u62A4\u654F\u611F\u5E93\uFF0C\u5FAA\u73AFreplace \u5927\u4F6C\u5206\u4EAB\u7ED9\u6211\u7684\uFF0C\u7A0D\u5FAE\u6539\u6210\u4E86\u4ECE\u6587\u4EF6\u4E2D\u83B7\u53D6\u654F\u611F\u5B57\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public static class StopWords
{

    static readonly ConcurrentDictionary&lt;string, bool&gt; FunNlpDataSensitive = new ConcurrentDictionary&lt;string, bool&gt;();
    static readonly ConcurrentDictionary&lt;int, string&gt; ReplaceNewValue = new ConcurrentDictionary&lt;int, string&gt;();

    private const string KeywordsPath = &quot;wwwroot/_Illegal/IllegalKeywords.txt&quot;;
    private const string UrlsPath = &quot;wwwroot/_Illegal/IllegalUrls.txt&quot;;


    static StopWords()
    {
        LoadDataFromFile();
    }

    public static void LoadDataFromFile()
    {
        string words1 = File.ReadAllText(Path.GetFullPath(KeywordsPath), Encoding.UTF8);
        string words2 = File.ReadAllText(Path.GetFullPath(UrlsPath), Encoding.UTF8);
        LoadDataFromText(words1);
        LoadDataFromText(words2);
    }


    public static void LoadDataFromText(string text)
    {
        int oldcount = FunNlpDataSensitive.Count;
        foreach (string wd in text.Split(&#39;\\n&#39;))
        {
            string keykey = wd.Trim().Trim(&#39;\\r&#39;, &#39;\\n&#39;).Trim();
            if (string.IsNullOrEmpty(keykey)) continue;
            FunNlpDataSensitive.TryAdd(keykey, true);
            if (ReplaceNewValue.ContainsKey(keykey.Length) == false)
                ReplaceNewValue.TryAdd(keykey.Length, &quot;&quot;.PadRight(keykey.Length, &#39;*&#39;));
        }
        Console.WriteLine($&quot;\u654F\u611F\u8BCD\u52A0\u8F7D\u5B8C\u6BD5\uFF0C\u589E\u52A0\u6570\u91CF\uFF1A{FunNlpDataSensitive.Count - oldcount}&quot;);
    }


    /// &lt;summary&gt;
    /// \u66FF\u6362\u6240\u6709\u654F\u611F\u8BCD\u4E3A *
    /// &lt;/summary&gt;
    /// &lt;param name=&quot;that&quot;&gt;&lt;/param&gt;
    /// &lt;returns&gt;&lt;/returns&gt;
    public static string ReplaceStopWords(this string that)
    {
        foreach (var wd in FunNlpDataSensitive.Keys)
            that = that.Replace(wd, ReplaceNewValue.TryGetValue(wd.Length, out var tryval) ? tryval : &quot;&quot;.PadRight(wd.Length, &#39;*&#39;));
        return that;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br></div></div><h2 id="freesql\u5168\u5C40\u5904\u7406\u654F\u611F\u8BCD" tabindex="-1"><a class="header-anchor" href="#freesql\u5168\u5C40\u5904\u7406\u654F\u611F\u8BCD" aria-hidden="true">#</a> FreeSql\u5168\u5C40\u5904\u7406\u654F\u611F\u8BCD</h2><p>\u4F7F\u7528FreeSql\u8FD9\u4E2AORM\u65F6\uFF0C\u5168\u5C40\u5904\u7406string\u7C7B\u578B\u7684\u503C\uFF0C\u8FDB\u884C\u654F\u611F\u8BCD\u5904\u7406\u3002\u4EE3\u7801\u5728StartUp.cs\u7684\u6784\u9020\u51FD\u6570\u4E2D\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u654F\u611F\u8BCD\u5904\u7406
IllegalWordsSearch illegalWords = ToolGoodUtils.GetIllegalWordsSearch();

Fsql.Aop.AuditValue += (s, e) =&gt;
{
    if (e.Column.CsType == typeof(string) &amp;&amp; e.Value != null)
    {
        string oldVal = (string)e.Value;
        string newVal = illegalWords.Replace(oldVal);
        //\u7B2C\u4E8C\u79CD\u5904\u7406\u654F\u611F\u8BCD\u7684\u65B9\u5F0F
        //string newVal = oldVal.ReplaceStopWords();
        if (newVal != oldVal)
        {
            e.Value = newVal;
        }
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>`,7);function f(W,q){const a=t("ExternalLinkIcon");return i(),p(o,null,[c,u,n("ul",null,[n("li",null,[n("a",m,[d,e(a)])])]),h,g,w,n("ul",null,[n("li",null,[n("a",_,[y,e(a)])])]),x,n("ul",null,[n("li",null,[n("a",T,[v,e(a)])]),n("li",null,[n("a",I,[F,e(a)])])]),P],64)}var L=r(b,[["render",f],["__file","StopWords.html.vue"]]);export{L as default};
