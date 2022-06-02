# 全局敏感词处理

基于 ToolGood.Words 类库，配合敏感字的文本文件，写的 API 接口。

- [https://github.com/luoyunchong/dotnetcore-examples/tree/master/aspnetcore-stopwords](https://github.com/luoyunchong/dotnetcore-examples/tree/master/aspnetcore-stopwords)

一共二种方式

## 1.ToolGood.Words

类库配合敏感库

- [ToolGood.Words](https://github.com/toolgood/ToolGood.Words)

简单用法

```
[Fact]
public void IssuesTest_17()
{
    var illegalWordsSearch = new IllegalWordsSearch();
    string s = "中国|zg人|abc";
    illegalWordsSearch.SetKeywords(s.Split('|'));
    var str = illegalWordsSearch.Replace("我是中美国人厉害中国完美ａｂｃddb好的", '*');

    Assert.Equal("我是中美国人厉害**完美***ddb好的", str);
}
```

配合敏感库文本文件，写的工具类

二个文件放到 wwwroot/\_Illegal 目录下，通过 ReplaceStopWords 方法调用即可对

- [https://github.com/toolgood/ToolGood.Words/blob/master/csharp/ToolGood.Words.Test/\_Illegal/IllegalKeywords.txt](https://github.com/toolgood/ToolGood.Words/blob/master/csharp/ToolGood.Words.Test/_Illegal/IllegalKeywords.txt)
- [https://github.com/toolgood/ToolGood.Words/blob/master/csharp/ToolGood.Words.Test/\_Illegal/IllegalUrls.txt](https://github.com/toolgood/ToolGood.Words/blob/master/csharp/ToolGood.Words.Test/_Illegal/IllegalUrls.txt)

```
public class ToolGoodUtils
{
    //敏感库只要这二个文件存在即可
    //本地敏感库缓存-https://github.com/toolgood/ToolGood.Words/tree/master/csharp/ToolGood.Words.Test/_Illegal
    //因为需要上传至github并同步gitee,安全起见，所以未上传至git，需要自行下载并复制
    private const string KeywordsPath = "wwwroot/_Illegal/IllegalKeywords.txt";
    private const string UrlsPath = "wwwroot/_Illegal/IllegalUrls.txt";

    private const string InfoPath = "wwwroot/_Illegal/IllegalInfo.txt";
    private const string BitPath = "wwwroot/_Illegal/IllegalBit.iws";

    private static IllegalWordsSearch _search;
    /// <summary>
    /// 本地敏感库,文件修改后，重新创建缓存Bit
    /// </summary>
    /// <returns></returns>
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
                var texts = File.ReadAllText(ipath).Split('|');
                if (new FileInfo(Path.GetFullPath(KeywordsPath)).LastWriteTime.ToString("yyyy-MM-dd HH:mm:ss") !=
                    texts[0] ||
                    new FileInfo(Path.GetFullPath(UrlsPath)).LastWriteTime.ToString("yyyy-MM-dd HH:mm:ss") !=
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
        var words = new List<string>();
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

        var text = new FileInfo(Path.GetFullPath(KeywordsPath)).LastWriteTime.ToString("yyyy-MM-dd HH:mm:ss") + "|"+ new FileInfo(Path.GetFullPath(UrlsPath)).LastWriteTime.ToString("yyyy-MM-dd HH:mm:ss");
        File.WriteAllText(Path.GetFullPath(InfoPath), text);

        return search;
    }
}
```

## 2. 循环使用 Replace

方案：通过维护敏感库，循环 replace
大佬分享给我的，稍微改成了从文件中获取敏感字。

```
public static class StopWords
{

    static readonly ConcurrentDictionary<string, bool> FunNlpDataSensitive = new ConcurrentDictionary<string, bool>();
    static readonly ConcurrentDictionary<int, string> ReplaceNewValue = new ConcurrentDictionary<int, string>();

    private const string KeywordsPath = "wwwroot/_Illegal/IllegalKeywords.txt";
    private const string UrlsPath = "wwwroot/_Illegal/IllegalUrls.txt";


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
        foreach (string wd in text.Split('\n'))
        {
            string keykey = wd.Trim().Trim('\r', '\n').Trim();
            if (string.IsNullOrEmpty(keykey)) continue;
            FunNlpDataSensitive.TryAdd(keykey, true);
            if (ReplaceNewValue.ContainsKey(keykey.Length) == false)
                ReplaceNewValue.TryAdd(keykey.Length, "".PadRight(keykey.Length, '*'));
        }
        Console.WriteLine($"敏感词加载完毕，增加数量：{FunNlpDataSensitive.Count - oldcount}");
    }


    /// <summary>
    /// 替换所有敏感词为 *
    /// </summary>
    /// <param name="that"></param>
    /// <returns></returns>
    public static string ReplaceStopWords(this string that)
    {
        foreach (var wd in FunNlpDataSensitive.Keys)
            that = that.Replace(wd, ReplaceNewValue.TryGetValue(wd.Length, out var tryval) ? tryval : "".PadRight(wd.Length, '*'));
        return that;
    }
}
```

## FreeSql 全局处理敏感词

使用 FreeSql 这个 ORM 时，全局处理 string 类型的值，进行敏感词处理。代码在 StartUp.cs 的构造函数中。

```
//敏感词处理
IllegalWordsSearch illegalWords = ToolGoodUtils.GetIllegalWordsSearch();

Fsql.Aop.AuditValue += (s, e) =>
{
    if (e.Column.CsType == typeof(string) && e.Value != null)
    {
        string oldVal = (string)e.Value;
        string newVal = illegalWords.Replace(oldVal);
        //第二种处理敏感词的方式
        //string newVal = oldVal.ReplaceStopWords();
        if (newVal != oldVal)
        {
            e.Value = newVal;
        }
    }
};
```
