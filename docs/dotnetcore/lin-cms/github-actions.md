
# GitHub Actions

## Gitee与GitHub自动同步
当github上的项目代码master分支提交后，gitee自动同步。如何实现呢。主要通过github action实现


我们想将luoyunchong/lin-cms-dotnetcore同步到igeekfan/lin-cms-dotnetcore上面，需要做的非常简单，只需要2步：

1.将Gitee的私钥，上传到项目的setting的Secrets中。
[![](https://pic.downk.cc/item/5e9725f5c2a9a83be5dcdec3.png)](https://pic.downk.cc/item/5e9725f5c2a9a83be5dcdec3.png)

前提，该私钥对应的公钥在gitee上，windows(C:\Users\Computer\.ssh)，其中id_rsa是私钥，id_rsa.pub内容是公钥，具体在gitee上增加ssh公钥的过程，请参考[SSH 公钥设置](https://gitee.com/help/articles/4191)


2. 改source-repo、destination-repo的值

## lin-cms-dotnetcore gitee同步脚本
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



## CI/CD部署

- 完整的配置项

```
# This workflow will do a clean install of node dependencies, build the source code and run tests across different versions of node
# For more information see: https://help.github.com/actions/language-and-framework-guides/using-nodejs-with-github-actions

name: Node.js CI

on:
  push:
    branches:
      - master

jobs:
  build:
    name: 编译
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: ['8','10','12']
    steps:
    - uses: actions/checkout@v2
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v1
      with:
        node-version: ${{ matrix.node-version }}
    - name: 安装依赖
      run: npm i
    - name: 编译文件
      run: |
        npm run lint
        npm run build
  deploy:
    name: 部署
    runs-on: ubuntu-latest
    steps:
      - name: 拉取代码
        uses: actions/checkout@v2
      - name: 安装 Node.js 12
        uses: actions/setup-node@v1
        with:
          node-version: 12
      - name: 安装依赖
        run: npm i
      - name: 编译文件
        run: |
          npm run lint
          npm run build
      - name: 上传文件
        uses: easingthemes/ssh-deploy@v2.1.4
        env:
          ARGS: "-rltgoDzvO --delete"
          SOURCE: "dist/"
          REMOTE_HOST: ${{ secrets.HOST }}
          REMOTE_USER: ${{ secrets.USER }}
          SSH_PRIVATE_KEY: ${{ secrets.SERVER_SSH_KEY }}
          TARGET: ${{ secrets.REMOTE_TARGET }}
  
```

### ssh-deploy插件
- https://github.com/easingthemes/ssh-deploy

可查看README了解具体参数

以上共有四个参数需要配置
```
REMOTE_HOST: ${{ secrets.HOST }}
REMOTE_USER: ${{ secrets.USER }}
SSH_PRIVATE_KEY: ${{ secrets.SERVER_SSH_KEY }}
TARGET: ${{ secrets.REMOTE_TARGET }}
```

打开Settings->Secrets->New secret 配置如下内容。

- HOST eg: mydomain.com   这里我们配置了服务器的ip  111.231.197.142
- USER centos服务器的用户名
- REMOTE_TARGET  目标服务器的文件夹位置， eg:  /var/www/lin-cms-vvlog
- SERVER_SSH_KEY：SSH密钥对的私钥部分，公钥应该添加到服务器上的 authorized_keys文件中。。eg   /root/.ssh/authorized_keys  

最后一个参数说明：这个相当于把私钥给github，让他能远程上传文件到centos中，公钥放到服务器上。公钥生成的过程不BB了，

### .ssh 生成
- [https://help.github.com/en/articles/connecting-to-github-with-ssh](https://help.github.com/en/articles/connecting-to-github-with-ssh)
- https://www.ssh.com/ssh/public-key-authentication


本地windows .ssh 默认生成目录
```
C:\Users\计算机名\.ssh
```

我的.ssh目录位置
```
C:\Users\Computer\.ssh
```
dir查看文件
```
C:\Users\Computer\.ssh>dir
2020/02/22  19:45             3,243 id_rsa
2020/02/22  19:45               750 id_rsa.pub
```

id_rsa是私钥，用vscode等记事本编辑器打开，并复制配置到github上。New secret,id_rsa.pub是公钥，把他复制到linux文件夹`/root/.ssh/`目录中，这时把他的名字由`id_rsa.pub`改成`authorized_keys`即可。

`/用户名/.ssh`  没有.ssh文件夹就创建一个。


### XSheel ssh 登录

可通过xshell工具验证，Public Key登录。

新建会话属性->输入主机（H）即IP地址。

选择用户身份验证->方法选择public Key,输入用户名，比如root

- 选择私钥登录
在用户密钥右侧点击浏览->用户密钥->导入->选择id_rsa.pub私钥，导入成功后，选择此密钥，确定。再在SSH用户身份验证界面确定,即可登录成功。表明私钥，公钥配置成功



## 参考
-  [https://github.com/marketplace/actions/mirror-a-repository-using-ssh](https://github.com/marketplace/actions/mirror-a-repository-using-ssh)
- [https://help.github.com/en/actions](https://help.github.com/en/actions)