# 数据库表设计

LinCMS.NET Core 使用 FreeSql 的 CodeFirst 模式来定义和管理数据库表结构。实体类 (Entity) 定义在 `src/LinCms.Core/Entities` 目录下，按模块划分。

以下是核心模块的部分表结构说明：

## FreeSql.Repository 仓储层

FreeSql 提供了强大的仓储层实现，简化了数据库操作。

- **IBaseRepository\<TEntity, TKey\>**: 基础仓储接口，提供了常用的 CRUD 操作。
- **GuidRepository\<TEntity\>**: 针对主键为 Guid 的实体提供的便捷仓储。
- **LongRepository\<TEntity\>**: 针对主键为 long 的实体提供的便捷仓储。

开发者可以通过依赖注入获取特定实体的仓储实例，例如：

```csharp
private readonly IBaseRepository<LinUser> _userRepository;

public UserService(IBaseRepository<LinUser> userRepository)
{
    _userRepository = userRepository;
}

public async Task<LinUser> GetUserAsync(Guid userId)
{
    return await _userRepository.Select.Where(u => u.Id == userId).ToOneAsync();
}
```

## 核心表 (部分)

### `lin_user` (用户信息表)

存储系统用户的基础信息。

| 字段名        | 类型         | 说明                 |
| ------------- | ------------ | -------------------- |
| `id`          | `Guid`       | 主键，用户唯一标识   |
| `username`    | `string(24)` | 用户名，唯一，非空   |
| `nickname`    | `string(24)` | 用户昵称             |
| `password`    | `string(100)`| 加密后的密码         |
| `avatar`      | `string(500)`| 头像 URL             |
| `email`       | `string(100)`| 邮箱，唯一           |
| `is_active`   | `bool`       | 是否激活             |
| `is_admin`    | `bool`       | 是否超级管理员       |
| `group_ids`   | `string`     | 用户所属权限组 ID 列表 (逗号分隔) |
| `create_time` | `DateTime`   | 创建时间             |
| ...           | ...          | 其他审计字段         |

### `lin_group` (权限组表)

定义用户权限组。

| 字段名        | 类型         | 说明               |
| ------------- | ------------ | ------------------ |
| `id`          | `long`       | 主键，自增         |
| `name`        | `string(60)` | 权限组名称，唯一   |
| `info`        | `string(255)`| 权限组描述         |
| `is_static`   | `bool`       | 是否为静态分组     |
| `level`       | `byte`       | 级别 (暂未使用)    |
| `create_time` | `DateTime`   | 创建时间           |
| ...           | ...          | 其他审计字段       |

### `lin_permission` (权限表)

定义系统中的具体权限点。

| 字段名        | 类型          | 说明             |
| ------------- | ------------- | ---------------- |
| `id`          | `long`        | 主键，自增       |
| `name`        | `string(60)`  | 权限名称，唯一   |
| `module`      | `string(50)`  | 权限所属模块     |
| `mount`       | `bool`        | 是否挂载到菜单   |
| `create_time` | `DateTime`    | 创建时间         |
| ...           | ...           | 其他审计字段     |

### `lin_group_permission` (分组权限关系表)

存储权限组与权限之间的多对多关系。

| 字段名          | 类型       | 说明         |
| --------------- | ---------- | ------------ |
| `id`            | `long`     | 主键，自增   |
| `group_id`      | `long`     | 权限组 ID    |
| `permission_id` | `long`     | 权限 ID      |
| `create_time`   | `DateTime` | 创建时间     |

### `lin_log` (日志表)

记录系统操作日志。

| 字段名        | 类型          | 说明             |
| ------------- | ------------- | ---------------- |
| `id`          | `long`        | 主键，自增       |
| `message`     | `string(450)` | 日志信息         |
| `user_id`     | `Guid`        | 操作用户 ID      |
| `username`    | `string(24)`  | 操作用户名       |
| `status_code` | `int`         | HTTP 状态码      |
| `method`      | `string(20)`  | 请求方法         |
| `path`        | `string(500)` | 请求路径         |
| `permission`  | `string(100)` | 访问的权限       |
| `authority`   | `string(100)` | 用户权限         |
| `create_time` | `DateTime`    | 创建时间         |
| ...           | ...           | 其他审计字段     |

### `lin_file` (文件表)

记录上传的文件信息。

| 字段名        | 类型          | 说明             |
| ------------- | ------------- | ---------------- |
| `id`          | `long`        | 主键，自增       |
| `path`        | `string(500)` | 文件路径         |
| `name`        | `string(100)` | 文件显示名称     |
| `extension`   | `string(50)`  | 文件扩展名       |
| `size`        | `long`        | 文件大小 (字节)  |
| `md5`         | `string(40)`  | 文件 MD5 值      |
| `type`        | `short`       | 文件类型 (1 本地, 2 ...) |
| `create_time` | `DateTime`    | 创建时间         |
| ...           | ...           | 其他审计字段     |


更详细的表结构和关系请直接查阅 `src/LinCms.Core/Entities` 下的实体类定义。
