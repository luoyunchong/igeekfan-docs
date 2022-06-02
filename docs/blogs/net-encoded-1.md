# .NET 编码的基础知识

.NET 编码的一些基本概念和分析

### 简单的类型概念

- Hex （16 进制）
- byte 字节 范围是：`0~255`，二进制下的范围就是`00000000~11111111`，相当于 1 字节。
- byte[] 字节数组
- bit 比特，只有 2 种状态：0，1

**1 字节 等于 8 比特** 即**1byte=8bit**

在 c#中。Byte 即 byte，他是一个 struct 结构体，

b1 等于 b2.

```cs
byte b = 1;
byte b1 = 0xf;//以0x开头 即16进制的写法
byte b2 = 15;
Assert.Equal(b1, b2);
```

错误的语法

```cs
byte b3 = b1 + b2;
```

正确的语法

```
byte b3 = (byte)(b1 + b2);
//或
int b4 = b1 + b2;
```

因为 byte 的相互运算太容易发生溢出，+ 加的重载 是 int 类型相加，所以结果是 int 类型

### Encoding.UTF8.GetBytes

UTF8 是统一的编码方式，它是一种变长的编码方式.它可以使用 1~4 个字节表示一个符号，根据不同的符号而变化字节长度

```
byte[] plaintext = Encoding.UTF8.GetBytes("0123456789");
```

能得到什么样的数据，**48,49,50,51,52,53,54,55,56,57**。为什么？

搜 ASCII 码，我们就知道 `0`的 ASCII 码是 `48`

如果是字母呢。

```
byte[] plaintext = Encoding.UTF8.GetBytes("ABCDabcd");
```

能得到什么样的数据，**65,66,67,68,97,98,99,100**。为什么？还是因为 ASCII 码。UTF8 当然是兼容 ASCII 码。

因为一个 ASCII 码，1 个字节就能表示 256 个状态，所以英文字母，阿拉伯数字，标点符号都不在话，哪如果是中文呢。这里我们就拿 UTF8 编码来分析。

```
byte[]   plaintext = Encoding.UTF8.GetBytes("中国");
```

如下内容，长度为 6，228，184，173 都是十进制。如果转成 16 进制呢。**e4，b8，ad**，如果分不清十六进制，建议学一下，计算机系统基础。当然，说明一下，`a`代表`10`，`e`即代表`14`.即`14*16+4=228`.表示时不区分大小写，即用大写`A`，和小写`a`都能表示`10`

| 列  | 十进制 | 十六进制 |
| --- | ------ | -------- |
| 0   | 228    | e4       |
| 1   | 184    | b8       |
| 2   | 173    | ad       |
| 3   | 229    | e5       |
| 4   | 155    | 9b       |
| 5   | 189    | bd       |

我们从网上搜下，可以发现 中国 的 UTF-8 编码： **E4B8AD E59BBD**.说明通过`Encoding.UTF8.GetBytes`的结果肯定是对的。中文是用 3 或 4 个 Bytes 存储的。

### 1.byte[] 转换 hex(16 进制字符串)

1. `Encoding.UTF8.GetBytes`能得到数据的十进制的字节数组。
2. `BitConverter.ToString`支持将十进制的数据转换成 16 进制，中间以`-`分隔，所以需要将中间的`-` `Replace`掉

```
public string ByteToHex(string str)
{
    byte[] bytes = Encoding.UTF8.GetBytes(str);
    string hex = BitConverter.ToString(bytes, 0).Replace("-", string.Empty);
    return hex;
}
```

`hex`得到 的数据就是 `E4B8ADE59BBD`

```cs
 string hex= ByteToHex("中国");
```

### 2.byte[] 转换 hex:StringBuilder 方式

如下内容为什么能将数据转成 16 进制.

1. `Encoding.UTF8.GetBytes`能得到数据的十进制的字节数组。
2. 利用 c#中的 **[复合格式化特性](https://docs.microsoft.com/zh-cn/dotnet/standard/base-types/composite-formatting)** {0:X2}自动转换成 16 进制。同样内容支持 Console.WriteLine 等

```cs
public string ByteToHex2(string str)
{
    byte[] bytes = Encoding.UTF8.GetBytes(str);
    StringBuilder ret = new StringBuilder();
    foreach (byte b in bytes)
    {
        //{0:x2} 小写
        ret.AppendFormat("{0:X2}", b);
    }
    return ret.ToString();
}
```

### hex(16 进制字符串)转换 byte[]

1. 一个循环将 16 进制转换成 10 进制。

```cs
public byte[] HexToByte(string hex)
{
    byte[] inputByteArray = new byte[hex.Length / 2];
    for (var x = 0; x < inputByteArray.Length; x++)
    {
        var i = Convert.ToInt32(hex.Substring(x * 2, 2), 16);
        inputByteArray[x] = (byte)i;
    }
    return inputByteArray;
}
```

调用如下内容，bytes[]中的长度为 6，数据是 228，184，173、229，155，189。即上文中的中国的十进制 byte 数组

```cs
string hexChinese = "E4B8ADE59BBD";//中国的UTF8编码。十六进制。
byte[] bytes = HexToByte(hexChinese);
string text = Encoding.UTF8.GetString(bytes);// `中国`
```
