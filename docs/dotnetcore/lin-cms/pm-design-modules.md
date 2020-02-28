# 功能模块的设计

## 基础权限模块
- 用户信息：邮件、用户名（唯一）、昵称、头像、分组、是否激活、手机号、是否是Admin、个性签名
    - [x] 注册/登录
    - [x] 上传头像
    - [x] 修改密码
    - 用户基本信息修改
    - [x] 配置分组
    - 第三方账号绑定/登录
- 绑定信息：功能(QQ快速登录，GitHub快速登录)。
- 分组信息：是否静态分组（无法删除，无法修改分组编码）、名称可以修改
    - [x] 分组增删改
    - [x] 组别配置权限
- 文件管理
    - [x] 本地文件上传
    - 七牛云存储
    - 文件去重，秒传
- [x] 系统日志：请求方法、路径、http返回码、时间、用户昵称、用户id、访问哪个权限、 日志信息
    - 记录系统请求的日志

## cms 管理员维护模块
- [x] 标签管理：名称、图片，是否启用/禁用，排序、文章数量、用户关注数量。
    - [x] 标签增删改
    - [x] 标签列表，禁用
- 随笔管理：
   - 审核随笔/拉黑
- 评论管理
   - 后台审核通过/拉黑
   - 管理员删除评论
- 字典管理
   - [x] 字典类别管理
   - [x] 字典管理：如随笔类型（原创、转载、翻译）

## cms 用户端模块 
- 分类专栏管理:发布随笔时可选择单个分类。
    - [x] 分类增删改(随笔数量、图片、名称、排序)
    - [x] 分类列表，仅查看、编辑自己创建的分类专栏
- 标签：统计每个标签下多少个文章、多少人关注
    - [x] 标签列表
    - [x] 无限加载
    - [x] 最新/最热 根据名称模糊查询
    - 我关注的标签
- 随笔
   - [x] 支持markdown，增删改（仅自己的随笔）,修正分类专栏中的随笔数量
   - [x] 列表无限加载，按标签查询随笔
   - [x] 点赞随笔
   - 随笔详情页
        - [x] 支持目录导航（滚动时，固定至顶部位置），展示字数统计、预计阅读时长；
        - [x] 作者介绍：头像，昵称，签名，随笔数；
        - [x] 展示文章类型：原创、转载、翻译
        - 相关文章
        - 推荐文章
- 评论
   -  评论随笔(内容支持超链接、emoji)
   - [x] 删除自己的评论
   - [x] 点赞评论
   - [x] 回复评论
- 关注
   - 关注/取消关注用户
   - 关注/取消关注标签
   - 
   
### 个人主页
- 用户专栏分类展示
- 最新发布、最热的随笔
- 关注的人/标签
- 粉丝
- 个人主页详细页：设置个人资料，绑定邮件，

## 更多
- 消息通知：如点赞随笔，评论随笔、点赞评论、回复评论后的消息通知。

### 脑图分享

![image](https://camo.githubusercontent.com/49d4fca8ccfef50fb7a2f3106e6be05c4a82b887/68747470733a2f2f706963322e73757065726265642e636e2f6974656d2f3564643366363838386530653265336565393330663435382e706e67)

### 分组
 分为三种
 
 ```
id  name        info
1	Admin	    系统管理员
2	CmsAdmin	内容管理员
3	User	    普通用户
 ```
 
### 审计日志
大多数表存在如下8个字段，用于记录行的变化状态，is_deleted为软删除，执行删除操作时，将其状态置为true，默认实体类继承 **FullAduitEntity**  即可拥有以下8个字段。该设计参考ABP中的实现。FullAduitEntity为泛型，默认id为long类型，FullAduitEntity\<Guid\>,即可改变主键类型，默认LinUser表主键long，保持**create_user_id**,**delete_user_id**,**update_user_id**都与LinUser的主键相同
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



## lin-cms 开源地址分享

- 后端接口 [https://github.com/luoyunchong/lin-cms-dotnetcore](https://github.com/luoyunchong/lin-cms-dotnetcore)
- 管理后台UI [https://github.com/luoyunchong/lin-cms-vue](https://github.com/luoyunchong/lin-cms-vue)
- 前端UI[https://github.com/luoyunchong/lin-cms-vvlog](https://github.com/luoyunchong/lin-cms-vvlog)


