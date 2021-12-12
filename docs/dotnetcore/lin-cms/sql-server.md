## 如何换成sql server
LinCms.Web中的appsetting.json配置
### 数据库配置

DefaultDB：改成1
SqlServer：改成自己的数据库配置
 
```diff
  "ConnectionStrings": {
-    "DefaultDB": "0",
+    "DefaultDB": "1",
    "DataType": {
      "MySql": 0,
      "SqlServer": 1,
      "PostgreSQL": 2,
      "Oracle": 3,
      "Sqlite": 4
    },
    "MySql": "Data Source=localhost;Port=3306;User ID=root;Password=rCsRedisoot;Initial Catalog=lincms;Charset=utf8mb4;SslMode=none;Max pool size=1;Connection LifeTime=20"
+   "SqlServer": "Data Source=.;User ID=sa;Password=123456;Integrated Security=True;Initial Catalog=LinCMS;Pooling=true;Min Pool Size=1"
  },
```

### Serilog配置
Using引用  `"Serilog.Sinks.MSSqlServer"`,去掉` "Serilog.Sinks.MariaDB"`

把 `"Name"`为 `"MariaDB"`的json注释掉。

把`"Name"`为 `"MSSqlServer"`的json注释去掉。

并改掉`Args:connectionString`的连接串。

```diff
    "Serilog": {
    "Using": [
      "Serilog.Sinks.Console",
      "Serilog.Sinks.File",
-      "Serilog.Sinks.MariaDB"
+      "Serilog.Sinks.MSSqlServer"
    ],
    "MinimumLevel": {
      "Default": "Information",
      "Override": {
        "Microsoft": "Information",
        "System": "Warning"
      }
    },
    "WriteTo": [
      {
        "Name": "File",
        "Args": {
          "path": "Logs/log.txt",
          "rollingInterval": "Day"
        }
      },
      {
        "Name": "Console",
        "Args": {
          "theme": "Serilog.Sinks.SystemConsole.Themes.AnsiConsoleTheme::Code, Serilog.Sinks.Console",
          "outputTemplate": "[{Timestamp:HH:mm:ss} {Level:u3}] {Message:lj} <s:{SourceContext}>{NewLine}{Exception}"
        }
      },
-      {
        "Name": "MariaDB",
        "Args": {
          "connectionString": "Data Source=localhost;Port=3308;User ID=root;Password=root;Initial Catalog=lincms;Charset=utf8mb4;SslMode=none;Max pool size=1;Connection LifeTime=20",
          "autoCreateTable": true,
          "tableName": "app_serilog",
          "restrictedToMinimumLevel": "Information",
          "batchPostingLimit": 4, //1000
          "period": "0.00:00:03",
          "options": {
            "PropertiesToColumnsMapping": {
              "Exception": "exception",
              "Level": "level",
              "Message": "message",
              "MessageTemplate": "message_template",
              "Properties": "properties",
              "Timestamp": "timestamp"
            },
            "TimestampInUtc": false,
            "ExcludePropertiesWithDedicatedColumn": true,
            "EnumsAsInts": true,
            "LogRecordsCleanupFrequency": "0.02:00:00",
            "LogRecordsExpiration": "31.00:00:00"
          }
        }
-      }
+      //{
      //  "Name": "MSSqlServer",
      //  "Args": {
      //    "connectionString": "Data Source=.;User ID=sa;Password=123456;Integrated Security=True;Initial Catalog=LinCMS;Pooling=true;Min Pool Size=1",
      //    "restrictedToMinimumLevel": "Information",
      //    "sinkOptionsSection": {
      //      "tableName": "app_serilog",
      //      "schemaName": "dbo",
      //      "autoCreateSqlTable": true,
      //      "batchPostingLimit": 1000,
      //      "period": "0.00:00:15"
      //    },
      //    "columnOptionsSection": {
      //      "disableTriggers": true,
      //      "clusteredColumnstoreIndex": false,
      //      "primaryKeyColumnName": "id",
      //      "addStandardColumns": [ "LogEvent" ],
      //      "removeStandardColumns": [ "Properties" ],
      //      "additionalColumns": [
      //        {
      //          "ColumnName": "event_type",
      //          "DataType": "int",
      //          "AllowNull": true
      //        },
      //        {
      //          "ColumnName": "release",
      //          "DataType": "varchar",
      //          "DataLength": 32
      //        },
      //        {
      //          "ColumnName": "environment_user_name",
      //          "PropertyName": "UserName",
      //          "DataType": "varchar",
      //          "DataLength": 50
      //        },
      //        {
      //          "ColumnName": "all_sqlcolumn_defaults",
      //          "DataType": "varchar",
      //          "AllowNull": true,
      //          "DataLength": -1,
      //          "NonClusteredIndex": false
      //        }
      //      ],
      //      "id": {
      //        "columnName": "id",
      //        "nonClusteredIndex": true
      //      },
      //      "level": {
      //        "columnName": "level",
      //        "storeAsEnum": true
      //      },
      //      //"Properties": {
      //      //  "columnName": "properties",
      //      //  "excludeAdditionalProperties": true,
      //      //  "dictionaryElementName": "dict",
      //      //  "itemElementName": "item",
      //      //  "omitDictionaryContainerElement": false,
      //      //  "omitSequenceContainerElement": false,
      //      //  "omitStructureContainerElement": false,
      //      //  "omitElementIfEmpty": true,
      //      //  "propertyElementName": "prop",
      //      //  "rootElementName": "root",
      //      //  "sequenceElementName": "seq",
      //      //  "structureElementName": "struct",
      //      //  "usePropertyKeyAsElementName": false
      //      //},
      //      "TimeStamp": {
      //        "columnName": "timestamp",
      //        "convertToUtc": true,
      //        "DataType": "tinyint"
      //      },
      //      "MessageTemplate": {
      //        "columnName": "message_template",
      //        "convertToUtc": true
      //      },
      //      "Timestamp": "timestamp",
      //      "Exception": {
      //        "columnName": "exception"
      //      },
      //      "Message": {
      //        "columnName": "message"
      //      },
      //      "logEvent": {
      //        "columnName": "properties",
      //        "excludeAdditionalProperties": true,
      //        "excludeStandardColumns": true
      //      }
      //    }
      //  }
+      //}
    ]
  }
```


### CAP配置

因为用了`CAP`。cap换`sql server`。这里改成 `DefaultStorage`改成2。

如果Messqueue换rabbitmq的话，`DefaultMessageQueue`就改成1.然后配置 RabbitMQ



```diff
  "CAP": {
-    "DefaultStorage": "1",
+    "DefaultStorage": "2",
    "DefaultMessageQueue": "0",
    "Storage": {
      "InMemoryStorage": 0,
      "MySql": 1,
      "SqlServer": 2
    },
    "MessageQueue": {
      "InMemoryQueue": 0,
      "RabbitMQ": 1
    },
    "RabbitMQ": {
      "HostName": "localhost",
      "UserName": "admin",
      "Password": "123456",
      "Port": 5672,
      "VirtualHost": "/admin"
    }
  },
```

双击`LinCms.Application`项目,注释掉`DotNetCore.CAP.MySql`的引用，引用 SqlServer的包
```diff
	<ItemGroup>
		<PackageReference Include="AspNet.Security.OAuth.Gitee" Version="5.0.11" />
		<PackageReference Include="AspNet.Security.OAuth.GitHub" Version="5.0.11" />
		<PackageReference Include="AspNet.Security.OAuth.QQ" Version="5.0.11" />
		<PackageReference Include="AutoMapper" Version="10.1.1" />
		<PackageReference Include="Autofac.Extensions.DependencyInjection" Version="7.1.0" />
-		<PackageReference Include="DotNetCore.CAP.MySql" Version="5.1.3" />
+		<PackageReference Include="DotNetCore.CAP.SqlServer" Version="5.1.3" />
		<PackageReference Include="IdentityServer4" Version="4.1.2" />
		<PackageReference Include="DotNetCore.CAP" Version="5.1.3" />
		<PackageReference Include="IdentityModel" Version="5.1.0" />
		<PackageReference Include="MQiniu.Core" Version="1.0.1" />
		<PackageReference Include="Caching.CSRedis" Version="3.6.60" />
		<PackageReference Include="CSRedisCore" Version="3.6.6" />
	</ItemGroup>

```

打开`LinCms.Application`项目中的`CapUnitOfWorkExtensions.cs`文件

修改方法`BeginTransaction`
 
```diff
public static ICapTransaction BeginTransaction(this IUnitOfWork unitOfWork, ICapPublisher publisher, bool autoCommit = false)
{
    //看了源码，换了新的写法，换不同的数据库，就需要手动修改这段代码了（MySqlCapTransaction）
    //publisher.Transaction.Value = (ICapTransaction)publisher.ServiceProvider.GetService(typeof(ICapTransaction));新版本只能得到nul
-   publisher.Transaction.Value = ActivatorUtilities.CreateInstance<MySqlCapTransaction>(publisher.ServiceProvider);
+   publisher.Transaction.Value = ActivatorUtilities.CreateInstance<SqlServerCapTransaction>(publisher.ServiceProvider);
}
```
