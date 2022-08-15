# FreeKit 基础包

## 安装 IGeekFan.FreeKit

该项目无任何依赖

```bash
dotnet add package IGeekFan.FreeKit
```

### 实体审计类

仅包含一些基础的审计类

- IEntity 主键Id
- IEntityDto
- ICreateAuditEntity 使用此接口可存储创建者信息（创建者id，创建人，创建时间）
- IUpdateAuditEntity 使用此接口可存储删除信息（删除人id，删除人，删除时间）
- IDeleteAuditEntity 使用此接口可存储最后更新信息（最后修改人Id，修改人，修改时间）
- ISoftDelete 软删除标志
- `IFullAuditEntity<TKey,UKey>`继承`IEntity<TKey>`, `ICreateAuditEntity<UKey>`, `IUpdateAuditEntity<UKey>`, `IDeleteAuditEntity<UKey>`
- ITenant 多租户Id

### 依赖注入接口

只是空接口

- ITransientDependency（瞬时）
- IScopedDependency（请求范围）
- ISingletonDependency（单例）

### Attribute

- DisableConventionalRegistrationAttribute 禁用默认的注册机制
