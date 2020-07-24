
## 基于RBAC实现权限设计

功能：实现一个用户设置多个分组，分组可以设置多个权限，权限与后台API方法对应，前端菜单绑定权限编码，前端按钮绑定权限编码，从而实现用户可配置权限，从而控制界面上的元素等。

### 1. 用户表 lin_user

| 字段         | 备注                              | 类型    |
| ------------ | --------------------------------- | ------- |
| id           | 主键Id                            | bigint  |
| username     | 用户名                            | varchar |
| nickname     | 昵称                              | varchar |
| phone_number | 手机号                            | varchar |
| avatar       | 用户默认生成图像，为null、头像url | varchar |
| email        | 电子邮箱                          | varchar |
| active       | 1激活 2  非激活                   | int     |

<!--
introduction|	个人介绍|	varchar
last_login_time	|最后一次登录的时间|	datetime
blog_address|	个人主页|	varchar
-->

### 2. 分组表 lin_group
| 字段      | 备注           | 类型    |
| --------- | -------------- | ------- |
| id        | 主键Id         | bigint  |
| name      | 权限组名称     | varchar |
| info      | 权限组描述     | varchar |
| is_static | 是否是静态分组 | bit     |

### 3. 用户分组表 lin_user_group

用户分组表。用于用户和分组表的关联。可配置一个用户属于多个分组。

| 字段     | 备注   | 类型   |
| -------- | ------ | ------ |
| id       | 主键Id | bigint |
| user_id  | 用户ID | bigint |
| group_id | 分组ID | bigint |


### 4. 权限表 lin_permission

 权限表，本系统通过反射在系统初次启动时，启动异步任务，将不存在的权限新增到此表中。
| 字段   | 备注                               | 类型    |
| ------ | ---------------------------------- | ------- |
| id     | 主键Id                             | bigint  |
| module | 权限所属模块，例如：人员管理       | varchar |
| name   | 所属权限、权限名称，例如：访问首页 | varchar |


### 5. 分组权限表 lin_group_permission

分组权限表，用于分组与权限表的关联

| 字段          | 备注   | 类型   |
| ------------- | ------ | ------ |
| id            | 主键Id | bigint |
| group_id      | 分组Id | bigint |
| permission_id | 权限Id | bigint |

### 6. 用户身份认证登录表 lin_user_identity

用户授权信息表，用于存储不同登录类型的用户信息，如手机号、邮件、用户名、第三方应用（微信、QQ、GitHub）的登录

| 字段           | 备注     | 类型                                                               |
| -------------- | -------- | ------------------------------------------------------------------ |
| id             | char     | 主键Id                                                             |
| identity_type  | varchar  | 认证类型Password，GitHub、QQ、WeiXin等                             |
| identifier     | varchar  | 认证者，例如 用户名,手机号，邮件等，                               |
| credential     | varchar  | 凭证，例如 密码,存OpenId、Id，同一IdentityType的OpenId的值是唯一的 |
| create_user_id | bigint   | 绑定的用户Id                                                       |
| create_time    | datetime |




## 字典管理

主要功能：仅限于通用的下拉列表选择，有变化的可能性。抽象成统一的配置项。

比如：文章是（原创，转载，翻译),性别是（男，女）。当然更多，在下文会有介绍。

### 1.base_type （字典类别管理）
| 字段      | 类型        | 备注     |
| --------- | ----------- | -------- |
| id        | int         |
| type_code | varchar(50) | 类别编码 |
| full_name | varchar(50) | 全称     |
| sort_code | int         | 排序码   |

### 2.base_item （字典管理）
| 字段         | 类型        | 备注                      |
| ------------ | ----------- | ------------------------- |
| id           | int         |
| base_type_id | int         | 类别id(关联base_type的id) |
| item_code    | varchar(50) | 字典编码                  |
| item_name    | varchar(50) | 字典全称                  |
| sort_code    | int         | 排序码                    |


BaseType 1 对BaseItem多。

如：标签管理，一个文章下可以设置多个标签，原本需要设计表Tag,字段也大抵为Id,Name,Sort及关联表。
我们使用BaseType、BaseItem实现。
BaseType中TypeCode为tag,FullName为标签，id为1时。
BaseItem中BaseTypeId为1，ItemCode为编码,ItemName为标签。ItemCode为不重复的字符串即可。

另Tag与Article的关联表，需要另设计一个表。

当我们要实现文章类别的下拉，原本需要设计一个表ArticleType，有字段,id,name,sort等。
我们可以通过BaseType、BaseItem来实现，从而简化这些基础数据。
BaseType有一条数据，TypeCode为 字符串category、FullName文章类别，BaseItem存多个文章类别(Java、大数据、Python、C#等)，编码不同即可。


**但现实总是事与愿违**,后台取文章列表时，想要取出文章对应的分类，手动join时，总觉得join的表会有些奇怪。

当然还有其他原因，**局限性**：
1. 比如使用了这个字典，分类需要增加一个图片字段，就不能满足要求，那怎么办呢，做不了。
2. 比如标签需要实现这个标签下有多少个文章，通过统计也能实现，

使用FreeSql实现时，如果二个表之间没有导航属性，是更复杂的。

## 
### lin_file文件存储

| 字段           | 类型     | 备注                                     |
| -------------- | -------- | ---------------------------------------- |
| id             |          | bigint                                   | 主键Id |
| extension      | varchar  | 后缀                                     |
| md5            | varchar  | 图片md5值，防止上传重复图片              |
| name           | varchar  | 名称                                     |
| path           | varchar  | 路径                                     |
| size           | bigint   | 大小                                     |
| type           | smallint | 1 local，2 代表七牛云 3 其他表示其他地方 |
| create_user_id | bigint   | 创建者ID                                 |


### lin_log 日志记录

| 字段          | 类型     | 备注             |
| ------------- | -------- | ---------------- |
| id            | bigint   | 主键Id           |
| authority     | varchar  | 访问哪个权限     |
| message       | varchar  | 日志信息         |
| method        | varchar  | 请求方法         |
| path          | varchar  | 请求路径         |
| status_code   | int      | 请求的http返回码 |
| time          | datetime | 日志创建时间     |
| user_id       | bigint   | 用户id           |
| user_name     | varchar  | 用户当时的昵称   |
| other_message | longtext |



