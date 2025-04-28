# 基于 RBAC 实现权限设计

## 系统概述

LinCMS基于RBAC（基于角色的访问控制）实现了灵活的权限管理系统。用户可以设置多个分组，分组可以配置多个权限，权限与后台API方法一一对应。前端菜单和按钮都绑定权限编码，实现了完整的权限控制链路。

## 数据库设计

### 用户与权限相关表

#### 1. 用户表 (lin_user)

存储系统用户的基本信息。

| 字段         | 类型    | 备注                                | 是否必填 |
| ------------ | ------- | ----------------------------------- | -------- |
| id           | bigint  | 主键ID                              | 是       |
| username     | varchar | 用户名（唯一）                      | 是       |
| nickname     | varchar | 用户昵称                            | 是       |
| avatar       | varchar | 头像URL                             | 否       |
| email        | varchar | 电子邮箱                            | 否       |
| phone_number | varchar | 手机号                              | 否       |
| active       | int     | 用户状态：1=激活，2=非激活         | 是       |

> 其他可选字段：个人介绍(introduction)、最后登录时间(last_login_time)、个人主页(blog_address)

#### 2. 分组表 (lin_group)

管理权限分组信息，类似于"角色"的概念。

| 字段      | 类型    | 备注                               | 是否必填 |
| --------- | ------- | ---------------------------------- | -------- |
| id        | bigint  | 主键ID                             | 是       |
| name      | varchar | 权限组名称                         | 是       |
| info      | varchar | 权限组描述                         | 否       |
| is_static | bit     | 是否是静态分组（不可删改分组编码） | 是       |

> 系统默认分组：Admin(系统管理员)、CmsAdmin(内容管理员)、User(普通用户)

#### 3. 用户分组表 (lin_user_group)

用户和分组的多对多关联表，一个用户可以属于多个分组。

| 字段      | 类型   | 备注    | 是否必填 |
| --------- | ------ | ------- | -------- |
| id        | bigint | 主键ID  | 是       |
| user_id   | bigint | 用户ID  | 是       |
| group_id  | bigint | 分组ID  | 是       |

#### 4. 权限表 (lin_permission)

系统通过反射自动识别并记录所有API权限。

| 字段   | 类型    | 备注                           | 是否必填 |
| ------ | ------- | ------------------------------ | -------- |
| id     | bigint  | 主键ID                         | 是       |
| module | varchar | 权限所属模块，如：人员管理     | 是       |
| name   | varchar | 权限名称，如：访问首页         | 是       |

#### 5. 分组权限表 (lin_group_permission)

分组与权限的多对多关联表。

| 字段          | 类型   | 备注    | 是否必填 |
| ------------- | ------ | ------- | -------- |
| id            | bigint | 主键ID  | 是       |
| group_id      | bigint | 分组ID  | 是       |
| permission_id | bigint | 权限ID  | 是       |

#### 6. 用户身份认证表 (lin_user_identity)

支持多种登录方式，如用户名密码、第三方OAuth等。

| 字段           | 类型     | 备注                                                   | 是否必填 |
| -------------- | -------- | ------------------------------------------------------ | -------- |
| id             | char     | 主键ID                                                 | 是       |
| identity_type  | varchar  | 认证类型：Password/GitHub/QQ/WeiXin等                  | 是       |
| identifier     | varchar  | 认证标识：用户名/手机号/邮箱                           | 是       |
| credential     | varchar  | 凭证：密码/OpenID/AccessToken                          | 是       |
| create_user_id | bigint   | 关联的用户ID                                           | 是       |
| create_time    | datetime | 创建时间                                               | 是       |

### 系统功能表

#### 文件存储 (lin_file)

管理系统中的所有上传文件。

| 字段           | 类型     | 备注                                            | 是否必填 |
| -------------- | -------- | ----------------------------------------------- | -------- |
| id             | bigint   | 主键ID                                          | 是       |
| extension      | varchar  | 文件扩展名                                      | 是       |
| md5            | varchar  | 文件MD5值，用于去重                             | 是       |
| name           | varchar  | 文件名称                                        | 是       |
| path           | varchar  | 存储路径                                        | 是       |
| size           | bigint   | 文件大小(字节)                                  | 是       |
| type           | smallint | 存储类型：1=本地，2=七牛云，3=其他              | 是       |
| create_user_id | bigint   | 上传用户ID                                      | 是       |

#### 系统日志 (lin_log)

记录系统操作日志。

| 字段          | 类型     | 备注                 | 是否必填 |
| ------------- | -------- | -------------------- | -------- |
| id            | bigint   | 主键ID               | 是       |
| authority     | varchar  | 访问的权限标识       | 是       |
| message       | varchar  | 日志信息             | 是       |
| method        | varchar  | HTTP请求方法         | 是       |
| path          | varchar  | 请求路径             | 是       |
| status_code   | int      | HTTP状态码           | 是       |
| time          | datetime | 日志创建时间         | 是       |
| user_id       | bigint   | 用户ID               | 是       |
| user_name     | varchar  | 用户昵称             | 是       |
| other_message | longtext | 其他扩展信息         | 否       |

### 字典管理表

#### 字典类别 (base_type)

| 字段      | 类型        | 备注     | 是否必填 |
| --------- | ----------- | -------- | -------- |
| id        | int         | 主键ID   | 是       |
| type_code | varchar(50) | 类别编码 | 是       |
| full_name | varchar(50) | 类别名称 | 是       |
| sort_code | int         | 排序码   | 是       |

#### 字典项 (base_item)

| 字段         | 类型        | 备注                          | 是否必填 |
| ------------ | ----------- | ----------------------------- | -------- |
| id           | int         | 主键ID                        | 是       |
| base_type_id | int         | 关联的字典类别ID              | 是       |
| item_code    | varchar(50) | 字典项编码                    | 是       |
| item_name    | varchar(50) | 字典项名称                    | 是       |
| sort_code    | int         | 排序码                        | 是       |

## 审计功能

大多数表继承自`FullAuditEntity`基类，自动包含以下审计字段：

| 字段           | 类型     | 备注           |
| -------------- | -------- | -------------- |
| id             | bigint   | 主键ID         |
| create_user_id | bigint   | 创建用户ID     |
| create_time    | datetime | 创建时间       |
| is_deleted     | bit      | 是否删除(软删) |
| delete_user_id | bigint   | 删除用户ID     |
| delete_time    | datetime | 删除时间       |
| update_user_id | bigint   | 更新用户ID     |
| update_time    | datetime | 更新时间       |

> FreeSql全局过滤器自动处理软删除：`fsql.GlobalFilter.Apply<IDeleteAuditEntity>("IsDeleted", a => a.IsDeleted == false);`

## 权限自动生成机制

系统在启动时会扫描所有带有`LinCmsAuthorize`特性的控制器方法，并将权限信息同步到数据库：

```csharp
public async Task SeedAsync()
{
    // 获取所有权限特性
    List<PermissionDefinition> linCmsAttributes = ReflexHelper.GeAssemblyLinCmsAttributes();

    // 查找数据库中不存在的权限并插入
    List<LinPermission> insertPermissions = new List<LinPermission>();
    List<LinPermission> allPermissions = await _permissionRepository.Select.ToListAsync();
    
    linCmsAttributes.ForEach(r =>
    {
        bool exist = allPermissions.Any(u => u.Module == r.Module && u.Name == r.Permission);
        if (!exist)
        {
            insertPermissions.Add(new LinPermission(r.Permission, r.Module));
        }
    });
    await _permissionRepository.InsertAsync(insertPermissions);
}
```

## 字典管理应用示例

字典管理主要用于统一配置下拉列表等常用选项，例如：

- 文章类型：原创、转载、翻译
- 性别：男、女
- 其他各类枚举值

具体应用示例：

1. 创建文章类型的字典类别：
   - `type_code`: "category"
   - `full_name`: "文章类别"

2. 添加多个字典项：
   - Java: `item_code`: "java", `item_name`: "Java编程"
   - Python: `item_code`: "python", `item_name`: "Python开发"
   - C#: `item_code`: "csharp", `item_name`: "C#开发"

> **使用局限性**：如果需要为分类添加特定字段（如图片），单纯的字典表可能无法满足要求，此时建议创建专用的实体表。
