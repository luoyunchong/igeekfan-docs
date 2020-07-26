### LinCms.Scaffolding代码生成器 出场

目前在Dev分支

[https://github.com/luoyunchong/lin-cms-dotnetcore/tree/dev](https://github.com/luoyunchong/lin-cms-dotnetcore/tree/dev)

打开项目LinCms.Scaffolding.sln。

看到appsettings.json配置如下

```
{
  "SettingOptions": {
    "ProjectName": "LinCms",
    "BaseDirectory": "D:/code/github/lin-cms-dotnetcore/src/LinCms.Core/"
    "EntityFilePath": "Entities/Base/Doc.cs", 
    "Areas": "Base",
    "TemplatePath": "./Templates",
    "OutputDirectory": "D:/code/github/lin-cms-dotnetcore/code-scaffolding"
  }
}
```

完成一个简单的表的CRUD，只需要，创建一个实体类，修改一下上面的配置项，即可生成代码。

- BaseDirectory:BaseDirectory请配置成LinCms.Core的项目路径。后缀要加/

由于项目使用**Microsoft.CodeAnalysis.CSharp**解析出类的属性，需要知道项目的在哪个位置。

另外，本项目，会根据LinCms.Core.xml中的内容解析出类和属性的注释。

- EntityFilePath 实体类所在文件位置
- Areas 区域模块名,eg:(Base)
- TemplatePath 相对路径，当前项目下的Templates目录,不需要修改
- OutputDirectory 生成的代码路径。可以是相对路径，也可以是绝对路径

我们在LinCms.Core中的Entities中Base目录，新建一个类Doc.cs，并写上注释信息，以便生成列表和表单。

```
using FreeSql.DataAnnotations;
using System;
using System.Collections.Generic;
using System.Text;

namespace LinCms.Entities.Base
{
    /// <summary>
    /// 文档
    /// </summary>
    public class Doc : FullAduitEntity
    {
        /// <summary>
        /// 文档名
        /// </summary>
        [Column(StringLength = 50)]
        public string Name { get; set; }

        /// <summary>
        /// 显示名
        /// </summary>
        [Column(StringLength = 50)]
        public string DisplayName { get; set; }

    }
}
```

我们可以根据需要，修改上面的配置信息。

我们可以打开Lincms的项目。删除所有的Docs相关的代码。

然后运行此代码生成器。即可生成所有CRUD代码。然后。代码会输出到此目录 **"D:/code/github/lin-cms-dotnetcore/code-scaffolding"**,

![](https://pic.downk.cc/item/5f1da73014195aa594ee9888.jpg)

然后。我们将前五个代码，依次复制到项目中，因为可能覆盖现有的代码，所以不推荐将此代码的输出目录写成**D:/code/github/lin-cms-dotnetcore/src**。

然后将最后一个lin-cms-vue。按模块复制到自己项目中即可。
