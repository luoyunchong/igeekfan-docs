
# yarn install
# 生成静态文件
yarn build

# 进入生成的文件夹
Set-Location docs/.vuepress/dist
git config --global user.email "luoyunchong@foxmail.com"
git config --global user.name "luoyunchong"

git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:luoyunchong/vovo-docs.git master:gh-pages
Set-Location ../../../ 