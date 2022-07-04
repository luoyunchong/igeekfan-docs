# Docker配置Baget

创建一个名为baget.env存储BaGet的配置：

```bash
cd /var
mkdir baget
cd /var/baget
vim baget.env
```

- baget.env

```text
# 以下配置是用于发布包的API密钥,您应该将其更改ApiKey的值以保护服务器。
ApiKey=Your-API-Key

Storage__Type=FileSystem
Storage__Path=/var/baget/packages
Database__Type=Sqlite
Database__ConnectionString=Data Source=/var/baget/baget.db
Search__Type=Database
Mirror__Enabled=true

```

有关配置的完整列表，请参阅[Configuration - BaGet (loic-sharma.github.io)](https://loic-sharma.github.io/BaGet/configuration/)的配置指南。

## Docker

在baget.env同目录创建一个`baget-data` 的目录

```bash
mkdir baget-data
```

拉取baget最新的镜像

```bash
docker pull loicsharma/baget
```

运行BaGet

```bash
cd /var/baget
docker run --name nuget-server --restart=always -d -p 5555:80 --env-file baget.env -v "$(pwd)/baget-data:/var/baget" loicsharma/baget:latest 
```

## 发布包

发布第一个nuget包

```bash
dotnet nuget push -s http://localhost:5555/v3/index.json -k Your-API-Key
package.1.0.0.nupkg
```

发布第一个symbol  package

```bash
dotnet nuget push -s http://localhost:5555/v3/index.json -k Your-API-Key package.1.0.0.snupkg
```

示例

```bash
dotnet nuget push -s http://124.70.130.97:5555/v3/index.json src/IGeekFan.Localization.FreeSql/bin/Debug/IGeekFan.Localization.FreeSql.0.0.3.nupkg -k Your-API-Key

dotnet nuget push -s http://124.70.130.97:5555/v3/index.json src/IGeekFan.Localization.FreeSql/bin/Debug/IGeekFan.Localization.FreeSql.0.0.3.snupkg -k Your-API-Key

```

## 还原包

你可以通过以下源还原包

```text
http://localhost:5555/v3/index.json
```

可以通过打开URL来浏览包<http://localhost:5555/>在浏览器中。

## Symbol server

可以使用以下符号位置加载符号：

```text
http://localhost:5555/api/download/symbols
```

### [https://loic-sharma.github.io/BaGet/installation/docker/](https://loic-sharma.github.io/BaGet/installation/docker/)

