#!/usr/bin/env sh

# 当发生错误时中止脚本
set -e

# 构建
npm run generate

# cd 到构建输出的目录下
cd dist

git init
git add -A
git commit -m 'deploy'

# 部署到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:falstack/vue-hybird-best-practices.git master:gh-pages

cd -
git add -A
git commit -m 'update'
git push origin master
