# 安装依赖
pnpm install
# 生成静态文件
pnpm build:vite

# 进入生成的文件夹
Set-Location docs/.vuepress/dist
git config --global user.email "igeekfan@foxmail.com"
git config --global user.name "igeekfan"

git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:luoyunchong/igeekfan-docs.git master:gh-pages
Set-Location ../../../ 