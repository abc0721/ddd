#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

git init
git add -A
git commit -m 'commit'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:abc0721/learn-book.git main

cd -
