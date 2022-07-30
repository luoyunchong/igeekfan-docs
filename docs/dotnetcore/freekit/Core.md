# 基础包

## 安装 IGeekFan.FreeKit

该项目无任何依赖

```bash
dotnet add package IGeekFan.FreeKit
```

### 实体审计类

仅包含一些基础的审计类

- Entity
- IEntity
- IEntityDto
- ICreateAuditEntity
- IUpdateAuditEntity
- IDeleteAuditEntity
- ISoftDelete
- IFullAuditEntity

### 依赖注入接口

只是空接口

- ITransientDependency
- IScopedDependency
- ISingletonDependency