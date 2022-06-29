# Docker部署CMS命令

## 部署docker

```bash
#判断是否存在webnotebook容器
docker ps | grep lincms-web-1 &> /dev/null
#如果不存在，则Remove
if [ $? -ne 0 ]
then
    echo "lincms-web container not exist continue.. "
else
    echo "remove lincms-web-1 container"
    docker rm lincms-web-1 -f
fi

docker images | grep registry.cn-hangzhou.aliyuncs.com/igeekfan/lincms-web &> /dev/null

if [ $? -ne 0 ]
then
    echo "image does not exist , continue..."
else
    echo "image exists !!! remove it"
    docker rmi --force registry.cn-hangzhou.aliyuncs.com/igeekfan/lincms-web
fi
#从阿里云拉取刚刚push的镜像
docker pull registry.cn-hangzhou.aliyuncs.com/igeekfan/lincms-web

docker run --restart unless-stopped -p 5011:80 --name lincms-web-1 -d registry.cn-hangzhou.aliyuncs.com/igeekfan/lincms-web

docker rm lincms-web-2 -f
docker rm lincms-web-3 -f
docker rm lincms-web-4 -f

docker run --restart unless-stopped -p 5012:80 --name lincms-web-2 -d registry.cn-hangzhou.aliyuncs.com/igeekfan/lincms-web
docker run --restart unless-stopped -p 5020:80 --name lincms-web-3 -d registry.cn-hangzhou.aliyuncs.com/igeekfan/lincms-web
docker run --restart unless-stopped -p 5021:80 --name lincms-web-4 -d registry.cn-hangzhou.aliyuncs.com/igeekfan/lincms-web


```

## nuget api key

```bash
Your-API-Key
```

```bash
nuget SetApiKey Your-API-Key
dotnet nuget push IGeekFan.AspNetCore.Knife4jUI.0.0.11.nupkg --api-key Your-API-Key --source https://api.nuget.org/v3/index.json

```

```json
{
  //"DefaultConnection": "Data Source=|DataDirectory|\\SampleApp.db;",
  "Sqlite1": "Data Source=d:\\SampleApp1.db",
  "Sqlite2": "Data Source=d:\\SampleApp2.db",
  "Oracle": "user id=test;password=123qwe; data source=//127.0.0.1:1521/ORCL;Pooling=true;Min Pool Size=1",
  "MySql": "Data Source=127.0.0.1;Port=3306;User ID=root;Password=root; Initial Catalog=cccddd;Charset=utf8; SslMode=none;Min pool size=1",
  "SqlServer": "Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=cccddd;Pooling=true;Min Pool Size=1",
  "PostgreSQL": "Host=127.0.0.1;Port=5432;Username=postgres;Password=postgresql; Database=postgres;Pooling=true;Minimum Pool Size=1"
}
```

