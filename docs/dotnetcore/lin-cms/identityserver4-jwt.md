## 认证鉴权状态
认证分为以下情况：当前角色为管理员，该分组配置了权限，该分组未分配某一方法的权限.

状态码（StatusCode):401 UnAuthorized

| StatusCode                | 含义                   |
| ------------------------- | ---------------------- |
| 401 UnAuthorized          | 未授权、无权限、未登录 |
| 422  UNPROCESSABLE ENTITY | 令牌失效               |
| 200                       | 访问正常               |


1. 未登录，不带access_token，直接请求需要登录的接口、管理员接口结果一样。

返回结果应为：状态码：401 UNAUTHORIZED

```
{
    "error_code": 10000,
    "msg": "认证失败，请检查请求头或者重新登陆",
    "request": "GET  /cms/admin/authority"
}
```

2. 携带access_token，但非超级管理员(admin字段为2),访问的方法为角色为超管才有权限的方法。
```
[LinCmsAuthorize(Roles = LinGroup.Administrator)]
```

返回结果应为：：状态码：401 UNAUTHORIZED

```
{
    "error_code": 10000,
    "msg": "只有超级管理员可操作",
    "request": "GET  /cms/admin/authority"
}
```

3. 携带access_token ，访问只需要登录的接口（/cms/user/auths）

控制器或方法上指定 **[Authorize]** 或 **[LinCmsAuthorize]** 特性标签时，必须登录才能访问，否则返回第一种结果。

返回结果应为：状态码：200
```
{
    "active": 1,
    "admin": 1,
    "auths": [
        {
            "信息": [
                {
                    "auth": "查看lin的信息",
                    "module": "信息"
                }
            ]
        }
    ],
    "avatar": null,
    "create_time": 1564372600000,
    "email": "acs@acs.com",
    "group_id": 54,
    "id": 112,
    "nickname": "alan",
    "update_time": 1564487059000
}
```
4. 携带access_token，但此用户无访问此方法的权限（即该用户的组别未配置此权限）。

返回结果应为：状态码：401 UNAUTHORIZED
```
{
    "error_code": 10000,
    "msg": "权限不够，请联系超级管理员获得权限",
    "request": "GET  /cms/log/search"
}
```


5. 携带过期的access_token值 
返回结果应为：状态码：401 UNAUTHORIZED
```
{
    "error_code": 10050,
    "msg": "令牌过期",
    "request": "GET  /cms/admin/users"
}
```

6. 携带不正常的access_token值，后台无法下正常解析出用户信息
返回结果应为：状态码：422 UNPROCESSABLE ENTITY
```
{
    "error_code": 10040,
    "msg": "令牌失效",
    "request": "GET  /cms/admin/users"
}
```

