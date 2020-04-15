## GitHub Actions 

### Gitee与GitHub自动同步
当github上的项目代码master分支提交后，gitee自动同步。如何实现呢。主要通过github action实现


我们想将luoyunchong/lin-cms-dotnetcore同步到igeekfan/lin-cms-dotnetcore上面，需要做的非常简单，只需要2步：

1.将Gitee的私钥，上传到项目的setting的Secrets中。
[![](https://pic.downk.cc/item/5e9725f5c2a9a83be5dcdec3.png)](https://pic.downk.cc/item/5e9725f5c2a9a83be5dcdec3.png)

前提，该私钥对应的公钥在gitee上，windows(C:\Users\Computer\.ssh)，其中id_rsa是私钥，id_rsa.pub内容是公钥，具体在gitee上增加ssh公钥的过程，请参考[SSH 公钥设置](https://gitee.com/help/articles/4191)


2. 改source-repo、destination-repo的值

### lin-cms-dotnetcore gitee同步脚本
```
name: Publish 
on:
    push:
        branches:
            - master

jobs:
    build:
        runs-on: ubuntu-latest
        steps:
            - name: Sync to Gitee 💕
              uses: wearerequired/git-mirror-action@master
              env:
                  SSH_PRIVATE_KEY: ${{ secrets.SSH_PRIVATE_KEY }}
              with:
                  source-repo: "git@github.com:luoyunchong/lin-cms-dotnetcore.git"
                  destination-repo: "git@gitee.com:igeekfan/lin-cms-dotnetcore.git"
```
每一个steps就是在jobs里执行命令，一个jobs可以有多个steps,
steps字段指定每个 Job 的运行步骤的介绍
```
jobs.<job_id>.steps.name 步骤名称
jobs.<job_id>.steps.env 该步骤所需的环境变量。
jobs.<job_id>.steps.uses  使用的组件
jobs.<job_id>.steps.with 多个值(这个参数其实是提交给容器的CMD) 

```


## 参考
-  [https://github.com/marketplace/actions/mirror-a-repository-using-ssh](https://github.com/marketplace/actions/mirror-a-repository-using-ssh)
- [https://help.github.com/en/actions](https://help.github.com/en/actions)