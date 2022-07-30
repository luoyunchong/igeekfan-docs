---
title: 功能模块的设计
date: 2019-11-24 12:44:22
tag:
 - 开源
 - .NET Core
 - lin-cms
category:
 - lin-cms-dotnetcore
---

# 功能模块的设计

## 基础权限模块
- 用户信息：邮件、用户名（唯一）、昵称、头像、分组、是否激活、手机号、是否是Admin、个性签名
    - [x] 注册/登录
    - [x] 上传头像
    - [x] 修改密码
    - [x] 用户基本信息修改
    - [x] 用户增删改，配置分组
- 绑定第三方账号
    - [x] GitHub登录
    - [ ] QQ 登录
-  分组信息：是否静态分组（无法删除，无法修改分组编码）、名称可以修改
    - [x] 分组增删改
    - [x] 组别配置权限
- 文件管理
    - [x] 本地文件上传
    - [x] 七牛云存储
    - [ ] 文件去重，秒传
- 系统日志：请求方法、路径、http返回码、时间、用户昵称、用户id、访问哪个权限、 日志信息
    - [x] 记录系统请求的日志
    - [ ] 异常日志
- 设置管理：name(键）,value(值),provider_name(提供名),provider_key（提供者值）
    - [x] 设置新增修改删除
    - [x] 所有设置
    
比如存某用户选择的是markdown还是富文本。
```
name="Article.Editor",
value="markdown" 或 "富文本"，
provider_name为"User",
provider_key为用户Id
```
或存储七牛云的某一个配置
```
name="Qiniu.AK",
value="asfadsfadf23rft66S4XM2GIK7FGmj7czuYkcAyNGDAc" ，
provider_name为"Qiniu"或自己定义的字符串
provider_key为空
```
 

## cms 管理员维护模块

- 标签管理：名称、图片，是否启用/禁用，排序、文章数量、用户关注数量。
    - [x] 标签增删改
    - [x] 标签列表，禁用
- 技术频道：封面图、名称、是否启用/禁用、排序、编码、备注描述、下属标签.一个技术频道对应多个标签
    - [x] 技术频道增删改
    - [x] 列表、禁用
-  随笔管理：
   - [x] 审核随笔/拉黑
-  评论管理
   - [x] 后台审核通过/拉黑
   - [x] 管理员删除评论
- 字典管理
   - [x] 字典类别管理
   - [x] 字典管理：如随笔类型（原创、转载、翻译）

## cms 用户端模块 
- 技术频道
    - [x] 首页展示技术频道
    - [x] 选择技术频道后，可再根据标签查询文章
- 分类专栏管理:发布随笔时可选择单个分类。
    - [x] 分类增删改(随笔数量、图片、名称、排序)
    - [x] 分类列表，仅查看、编辑自己创建的分类专栏
- 标签：统计每个标签下多少个文章、多少人关注
    - [x] 标签列表
    - [x] 无限加载
    - [x] 最新/最热 根据标签名称模糊查询
    - [x] 已关注的标签
    - [x] 热门标签
- 随笔
   - [x] 支持markdown，增删改（仅自己的随笔）,修正分类专栏中的随笔数量
   - [x] 列表无限加载，按标签查询随笔
   - [x] 点赞随笔
   - 随笔详情页
        - [x] 支持目录导航（滚动时，固定至顶部位置），展示字数统计、预计阅读时长；
        - [x] 作者介绍：头像，昵称，签名，随笔数；
        - [x] 展示文章类型：原创、转载、翻译
        - [ ]  相关文章
        - [ ]  推荐文章
- 评论
   - [ ] 用户关闭评论时，无法对随笔进行评论
   - [ ] 评论随笔(内容支持超链接、emoji)
   - [x] 删除自己的评论
   - [x] 点赞评论
   - [x] 回复评论
-  关注
   - [x] 关注/取消关注用户
   - [x] 关注/取消关注标签
   
- 个人主页
    - 随笔
        - [x] 用户专栏分类展示
        - [x] 最新发布的随笔
    - 关注
        - [x] 关注的人
        - [x] 粉丝
        - [x] 关注的标签
- 设置
    - 个人主页设置
        - [x] 个人资料更新
    - 安全设置
        - [x] 密码修改
    - 博客设置
        - [x] 默认编辑器设置(markdown/富文本)
- 消息
    - [x] 点赞随笔、点赞评论
    - [x] 评论随笔、回复评论
    - [x] 用户关注


## 评论模块

### 主题式
将评论分为二级，第一级采用时间倒序，二级按照时间正序，有助于理解上下文关系。

用户操作：
- 评论随笔(内容支持超链接、emoji)
- 点赞评论/取消点赞
- 回复评论
- 删除自己的评论

运营操作：
- 审核通过/拉黑评论
- 删除任何评论
- 拉黑后的显示逻辑。（保留当前区块、显示内容为：该评论因违规被拉黑）
- 删除：（如果是二级评论，直接软删除，如果是一级评论，软删除子评论和当前评论-需要提前提醒用户）
交互设计
- 评论的字数长度（500）、emoji。
- 点赞交互-动画、消息通知/推送
- 评论区域元素，需要有明确可点击的区域，会跳转到哪个地方。

### 优化
- 精选评论

### 脑图分享

[http://naotu.baidu.com/file/6532431a2e1f0c37c93c5ffd1dd5b49c?token=87690a9bc64fbae1](http://naotu.baidu.com/file/6532431a2e1f0c37c93c5ffd1dd5b49c?token=87690a9bc64fbae1)

### 分组
 分为三种
 
 ```
id  name        info
1	Admin	    系统管理员
2	CmsAdmin	内容管理员
3	User	    普通用户
 ```
 
### 审计日志
大多数表存在如下8个字段，用于记录行的变化状态，is_deleted为软删除，执行删除操作时，将其状态置为true，默认实体类继承 **FullAuditEntity**  即可拥有以下8个字段。该设计参考ABP中的实现。FullAuditEntity为泛型，默认id为long类型，FullAuditEntity\<Guid\>,即可改变主键类型，默认LinUser表主键long，保持**create_user_id**,**delete_user_id**,**update_user_id**都与LinUser的主键相同
```

id	                bigint
create_user_id  	bigint
create_time	        datetime
is_deleted	        bit
delete_user_id  	bigint
delete_time	        datetime
update_user_id	    bigint
update_time	        datetime


```

## 0.3.0版本权限功能升级
为支持一个用户多个分组，一个分组多个权限，一个用户可分多种授权登录方式，根据lin-cms-springboot项目功能模块升级，介绍如下：

1. lin_permission  权限表，本系统通过反射在系统初次启动时，启动异步任务，将不存在的权限新增到此表中。
2. lin_group_permission  分组权限表，用于分组与权限表的关联
3. lin_user_group  用户分组表。用于用户和分组表的关联。可配置一个用户属于多个分组。
4. lin_user_identity 用户授权信息表，用于存储不同登录类型的用户信息，如手机号、邮件、用户名、第三方应用（微信、QQ、GitHub）的登录


## lin-cms 开源地址分享

- 后端接口 [https://github.com/luoyunchong/lin-cms-dotnetcore](https://github.com/luoyunchong/lin-cms-dotnetcore)
- 管理后台UI [https://github.com/luoyunchong/lin-cms-vue](https://github.com/luoyunchong/lin-cms-vue)
- 前端UI[https://github.com/luoyunchong/lin-cms-vvlog](https://github.com/luoyunchong/lin-cms-vvlog)

