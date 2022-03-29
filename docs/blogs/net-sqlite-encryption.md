# .NET+Sqlite如何支持加密

## 相关文章
- [FreeSql.Provider.SqliteCore如何加密](https://www.cnblogs.com/igeekfan/p/freesql-sqlitecore-SQLCipher.html)
## Sqlite
`SQLite` 来源于公共领域 `SQLite Is Public Domain`、
确保代码不会受到任何专有或许可内容的污染，没有任何来自互联网上的未知来源复制。即全是原创的。

虽然是免费的，无需许可证，可用于任何目的，但如果你的公司必须要一个许可证，你也能申请授权[https://sqlite.org/purchase/license](https://sqlite.org/purchase/license).

但不支持**加密**。如果想支持登录加密，需要另外的扩展**SQLite 加密扩展(SQLite Encryption Extension,)**，具有读取/写入 AES 加密数据库的附加功能。具体授权可参考 [https://www.sqlite.org/prosupport.html](https://www.sqlite.org/prosupport.html)


## Sqlite加密
一直以来，`FreeSql`开发群中，总会有一些开发者来询问`Sqlite`加密的问题，事实上，官方提供的Sqlite加密功能是收费的。当连接串上使用`Password`时，会提示授权问题。
如果底层依赖于`System.Data.SQLite.Core`，


```
Could not load file or assembly 'System.Data.SQLite.SEE.License,
Version=1.0.115.5, Culture=neutral, PublicKeyToken=433d9874d0bb98c5,
processorArchitecture=MSIL
```

如果底层依赖于`Microsoft.Data.Sqlite` 也会提示

```
You specified a password in the connection string, but the native SQLite
library 'e_sqlite3' doesn't support encryption.
```

## System.Data.SQLite.Core
创建一个控制台项目,起名 `OvOv.SqliteSystemCore`
```bash
dotnet new console -n OvOv.SqliteSystemCore
cd OvOv.SqliteSystemCore
```
安装包
```bash
dotnet add package System.Data.SQLite.Core
```
使用`SQLiteConnection`创建一个连接，使用Password指定密码
```cs
using System.Data.SQLite;

static void Open()
{
    string baseConnectionString = "Data Source=local.db";
    var connectionString = new SQLiteConnectionStringBuilder(baseConnectionString)
    {
        Password = "123qwe"
    }.ToString();

    using SQLiteConnection? connection = new SQLiteConnection(connectionString);
    connection.Open();
}
Open();
```

运行项目 
```bash
dotnet run
```
就会出现如下错误。
```
System.IO.FileNotFoundException:“Could not load file or assembly
'System.Data.SQLite.SEE.License, Version=1.0.115.5, Culture=neutral, PublicKeyToken=433d9874d0bb98c5, processorArchitecture=MSIL'.
系统找不到指定的文件。”
```


## Microsoft.Data.Sqlite
创建一个控制台项目,起名 `OvOv.SqliteMicrosoft`
```bash
dotnet new console -n OvOv.SqliteMicrosoft
cd OvOv.SqliteMicrosoft
```
安装包
```bash
dotnet add package Microsoft.Data.Sqlite
```

使用`SqliteConnection`创建一个连接，使用Password指定密码
```cs
using Microsoft.Data.Sqlite;

static void Open()
{
    string baseConnectionString = "Data Source=local.db";
    var connectionString = new SqliteConnectionStringBuilder(baseConnectionString)
    {
        Mode = SqliteOpenMode.ReadWriteCreate,
        Password = "123qwe"
    }.ToString();

    using SqliteConnection? connection = new SqliteConnection(connectionString);
    connection.Open();
}

Open();
```

运行项目 
```bash
dotnet run
```
就会出现如下错误。
```
Unhandled exception. System.InvalidOperationException: You specified a password in the connection string, 
but the native SQLite library
'e_sqlite3' doesn't support encryption. at Microsoft.Data.Sqlite.SqliteConnection.Open()
```

其实微软已经提供了加密的方案。
- [https://docs.microsoft.com/zh-cn/dotnet/standard/data/sqlite/encryption?tabs=netcore-cli](https://docs.microsoft.com/zh-cn/dotnet/standard/data/sqlite/encryption?tabs=netcore-cli)


```bash
dotnet remove package Microsoft.Data.Sqlite
dotnet add package Microsoft.Data.Sqlite.Core
dotnet add package SQLitePCLRaw.bundle_e_sqlcipher
```

重新运行项目 ，就会发现，他正常执行。没有任何报错。


有关使用不同的本机库进行加密的详细信息，请参阅[自定义 SQLite 版本](https://docs.microsoft.com/zh-cn/dotnet/standard/data/sqlite/custom-versions?tabs=netcore-cli)。


我们从 自定义 SQLite 版本上可以看到。


默认情况下，主 `Microsoft.Data.Sqlite` 包引入 `SQLitePCLRaw.bundle_e_sqlite3`。 若要使用不同的捆绑，请改为安装 `Microsoft.Data.Sqlite.Core` 包以及要使用的捆绑包。


#### `SQLitePCLRaw.bundle_e_sqlcipher`	

提供 SQLCipher 的**非官方开放源代码内部版本**。此版本支持**加密**。


### ADO.NET 修改Sqlite密码

```cs
static int UpdatePassword(string oldPassword, string newPassword)
{
    string baseConnectionString = "Data Source=local.db";
    var connectionString = new SqliteConnectionStringBuilder(baseConnectionString)
    {
        Mode = SqliteOpenMode.ReadWriteCreate,
        Password = oldPassword
    }.ToString();

    using (var connection = new SqliteConnection(connectionString))
    {
        connection.Open();
        using (var command = connection.CreateCommand())
        {
            command.CommandText = "SELECT quote($newPassword);";
            command.Parameters.AddWithValue("$newPassword", newPassword);
            var quotedNewPassword = command.ExecuteScalar() as string;

            command.CommandText = "PRAGMA rekey = " + quotedNewPassword;
            command.Parameters.Clear();
            int x = command.ExecuteNonQuery();
            return x;
        }
    }
}

string oldPassword = "123qwe";
string newPassword = "abcd";
UpdatePassword(oldPassword, newPassword);
```



#### 完整代码 

- [https://github.com/luoyunchong/dotnetcore-examples/blob/master/Database-Drivers/OvOv.SqliteMicrosoftCore/Program.cs](https://github.com/luoyunchong/dotnetcore-examples/blob/master/Database-Drivers/OvOv.SqliteMicrosoftCore/Program.cs)
