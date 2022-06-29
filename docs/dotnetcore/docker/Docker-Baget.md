# Docker 配置 Baget

## Docker

在baget.env同目录创建一个`baget-data` 的目录

```c#
mkdir baget-data
```

拉取baget最新的镜像

```c#
docker pull loicsharma/baget
```

运行BaGet

```c#
cd /var/baget
docker run --name nuget-server --restart=always -d -p 5555:80 --env-file baget.env -v "$(pwd)/baget-data:/var/baget" loicsharma/baget:latest 
```

## 发布包

发布第一个nuget包

```bash
dotnet nuget push -s http://localhost:5555/v3/index.json -k HnoR4Sgntd8V7caqEY
package.1.0.0.nupkg
```

发布第一个symbol  package&#x20;

```bash
dotnet nuget push -s http://localhost:5555/v3/index.json -k HnoR4Sgntd8V7caqEY package.1.0.0.snupkg
```

示例

```c#
dotnet nuget push -s http://124.70.130.97:5555/v3/index.json src/IGeekFan.Localization.FreeSql/bin/Debug/IGeekFan.Localization.FreeSql.0.0.3.nupkg -k HnoR4Sgntd8V7caqEY

dotnet nuget push -s http://124.70.130.97:5555/v3/index.json src/IGeekFan.Localization.FreeSql/bin/Debug/IGeekFan.Localization.FreeSql.0.0.3.snupkg -k HnoR4Sgntd8V7caqEY

```

## 还原包

你可以通过以下源还原包

```c#
http://localhost:5555/v3/index.json
```

可以通过打开URL来浏览包<http://localhost:5555/在浏览器中。>

## Symbol server

‎可以使用以下符号位置加载符号：

```c#
http://localhost:5555/api/download/symbols
```

### <https://loic-sharma.github.io/BaGet/installation/docker/>
