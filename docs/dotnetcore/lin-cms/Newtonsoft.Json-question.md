# Newtonsoft.Json基础问题
它是.NET下的一个序列化、反序化的基础类库，更基础的用法还是看别人的吧，这里只说一些遇到的问题。

## 设置下划线

ContractResolver  默认是小驼峰，我想改成下划线方式，遇到了一些问题，dictionary的键未格式化

in controller 创建一个控制器
```csharp
[HttpGet("getDictionary")]
public IDictionary<string, string> GetDictionary()
{
    IDictionary<string, string> dics = new Dictionary<string, string>();

    dics.Add("Key", "Value");
    dics.Add("KeyTest", "Value_Test");
    return dics;
}
```
In Startup.cs
```csharp
services
.AddMvc()
.SetCompatibilityVersion(CompatibilityVersion.Version_2_2)
.AddJsonOptions(opt =>
{
    
    // 设置下划线方式，首字母是小写
    opt.SerializerSettings.ContractResolver = new DefaultContractResolver()
    {
        NamingStrategy = new SnakeCaseNamingStrategy()
    };
});
```


此时运行后，得到的是Key,而不是key，我想他的键都变成下划线方式的小写
```json
{
  "Key": "Value",
  "KeyTest": "Value_Test"
}
```

其他测试，增加多级，测试正常
```csharp
[HttpGet("get")]
public dynamic Get()
{
 return new {
            Content = new {
                Url=Request.Path.Value,
                NewUrlTest="test in new url test"
            }
        };
}
```
此时运行后，满足要求，多层结构也不会影响
```json
{
  "content": {
    "url": "/test/get",
    "new_url_test": "test in new url test"
  }
}

```

看了Newtonsoft.Json的github，并在in this repository 搜索Dictionary，看issues中的配置项如下即可满足dictionary的键也转小写,
ProcessDictionaryKeys 功能：A flag indicating whether dictionary keys should be processed. Defaults to false.
```csharp
services
.AddMvc()
.SetCompatibilityVersion(CompatibilityVersion.Version_2_2)
.AddJsonOptions(opt =>
{
    
    // 设置下划线方式，首字母是小写
    opt.SerializerSettings.ContractResolver = new DefaultContractResolver()
    {
        NamingStrategy = new SnakeCaseNamingStrategy
        {
            ProcessDictionaryKeys = true
        }
    };
});
```
```json
{
  "key": "Value",
  "key_test": "Value_Test"
}
```

## 实现时间戳
前台要的格式为  **1562904163734**,只有一个数字，我搜索了一下，也没找到相关的文档，本身这个类库有一些时间戳，不过他们都包含特殊字符，如/Date(1562904163734)/,好像类似这样，他好像在逗我，为啥他要加Date，怕是有毒吧。看到
他有Converters属性可配置，即配置自己的序列化返回格式。
```csharp
services.AddMvc()
.SetCompatibilityVersion(CompatibilityVersion.Version_2_2)
.AddJsonOptions(opt =>
{
    //opt.SerializerSettings.DateFormatString = "yyyy-MM-dd HH:MM:ss";
    //设置时间戳格式
    opt.SerializerSettings.Converters = new List<JsonConverter>()
    {
        new LinCmsTimeConverter()
    };
});
```

这里的时间戳是毫秒级别
```csharp
/// <summary>
/// 配合LinCMS中的时间戳 后台只返回 1562904163734
/// </summary>
public class LinCmsTimeConverter : DateTimeConverterBase
{
    public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)
    {
        double javaScriptTicks = 0;
        if (value is DateTime dateTime)
        {
            javaScriptTicks = ConvertDateTimeInt(dateTime);
        }
        else
        {
            if (!(value is DateTimeOffset dateTimeOffset))
                throw new JsonSerializationException("Expected date object value.");
            javaScriptTicks = ConvertDateTimeInt(dateTimeOffset.ToUniversalTime().UtcDateTime);

        }
        writer.WriteValue(javaScriptTicks);
    }

    public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)
    {
        return ConvertIntDateTime(double.Parse(reader.Value.ToString()));
    }
    
    /// <summary>
    /// 日期转换为时间戳（时间戳单位毫秒）
    /// </summary>
    /// <param name="TimeStamp"></param>
    /// <returns></returns> 
    public static DateTime ConvertIntDateTime(double milliseconds)
    {
        return new DateTime(1970, 1, 1).AddMilliseconds(milliseconds);
    }


    public static double ConvertDateTimeInt(DateTime aDt)
    {
        return (aDt - new DateTime(1970, 1, 1)).TotalMilliseconds;
    }
}
```

## 参考 

- [https://github.com/JamesNK/Newtonsoft.Json/issues/2088](https://github.com/JamesNK/Newtonsoft.Json/issues/2088)
- [https://www.newtonsoft.com/json/help/html/P_Newtonsoft_Json_Serialization_NamingStrategy_ProcessDictionaryKeys.htm](https://www.newtonsoft.com/json/help/html/P_Newtonsoft_Json_Serialization_NamingStrategy_ProcessDictionaryKeys.htm)
- [https://blog.csdn.net/yw1688/article/details/38492583](https://blog.csdn.net/yw1688/article/details/38492583)
- [https://www.jianshu.com/p/c53b1a2a121d](https://www.jianshu.com/p/c53b1a2a121d)


