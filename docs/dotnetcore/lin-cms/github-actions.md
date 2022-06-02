# GitHub Actions

## Gitee 与 GitHub 自动同步

当 github 上的项目代码 master 分支提交后，gitee 自动同步。如何实现呢。主要通过 github action 实现

我们想将 luoyunchong/lin-cms-dotnetcore 同步到 igeekfan/lin-cms-dotnetcore 上面，需要做的非常简单，只需要 2 步：

1.将 Gitee 的私钥，上传到项目的 setting 的 Secrets 中。
[![](https://pic.downk.cc/item/5e9725f5c2a9a83be5dcdec3.png)](https://pic.downk.cc/item/5e9725f5c2a9a83be5dcdec3.png)

前提，该私钥对应的公钥在 gitee 上，windows(C:\Users\Computer\.ssh)，其中 id_rsa 是私钥，id_rsa.pub 内容是公钥，具体在 gitee 上增加 ssh 公钥的过程，请参考[SSH 公钥设置](https://gitee.com/help/articles/4191)

2. 改 source-repo、destination-repo 的值

## lin-cms-dotnetcore gitee 同步脚本

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

每一个 steps 就是在 jobs 里执行命令，一个 jobs 可以有多个 steps,
steps 字段指定每个 Job 的运行步骤的介绍

```
jobs.<job_id>.steps.name 步骤名称
jobs.<job_id>.steps.env 该步骤所需的环境变量。
jobs.<job_id>.steps.uses  使用的组件
jobs.<job_id>.steps.with 多个值(这个参数其实是提交给容器的CMD)

```

## CI/CD 部署

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

### ssh-deploy 插件

- https://github.com/easingthemes/ssh-deploy

可查看 README 了解具体参数

以上共有四个参数需要配置

```
REMOTE_HOST: ${{ secrets.HOST }}
REMOTE_USER: ${{ secrets.USER }}
SSH_PRIVATE_KEY: ${{ secrets.SERVER_SSH_KEY }}
TARGET: ${{ secrets.REMOTE_TARGET }}
```

打开 Settings->Secrets->New secret 配置如下内容。

- HOST eg: mydomain.com 这里我们配置了服务器的 ip 111.231.197.142
- USER centos 服务器的用户名
- REMOTE_TARGET 目标服务器的文件夹位置， eg: /var/www/lin-cms-vvlog
- SERVER_SSH_KEY：SSH 密钥对的私钥部分，公钥应该添加到服务器上的 authorized_keys 文件中。。eg /root/.ssh/authorized_keys

最后一个参数说明：这个相当于把私钥给 github，让他能远程上传文件到 centos 中，公钥放到服务器上。公钥生成的过程不 BB 了，

### .ssh 生成

- [https://help.github.com/en/articles/connecting-to-github-with-ssh](https://help.github.com/en/articles/connecting-to-github-with-ssh)
- https://www.ssh.com/ssh/public-key-authentication

本地 windows .ssh 默认生成目录

```
C:\Users\计算机名\.ssh
```

我的.ssh 目录位置

```
C:\Users\Computer\.ssh
```

dir 查看文件

```
C:\Users\Computer\.ssh>dir
2020/02/22  19:45             3,243 id_rsa
2020/02/22  19:45               750 id_rsa.pub
```

id_rsa 是私钥，用 vscode 等记事本编辑器打开，并复制配置到 github 上。New secret,id_rsa.pub 是公钥，把他复制到 linux 文件夹`/root/.ssh/`目录中，这时把他的名字由`id_rsa.pub`改成`authorized_keys`即可。

`/用户名/.ssh` 没有.ssh 文件夹就创建一个。

### XSheel ssh 登录

可通过 xshell 工具验证，Public Key 登录。

新建会话属性->输入主机（H）即 IP 地址。

选择用户身份验证->方法选择 public Key,输入用户名，比如 root

- 选择私钥登录
  在用户密钥右侧点击浏览->用户密钥->导入->选择 id_rsa.pub 私钥，导入成功后，选择此密钥，确定。再在 SSH 用户身份验证界面确定,即可登录成功。表明私钥，公钥配置成功

## 参考

- [https://github.com/marketplace/actions/mirror-a-repository-using-ssh](https://github.com/marketplace/actions/mirror-a-repository-using-ssh)
- [https://help.github.com/en/actions](https://help.github.com/en/actions)
