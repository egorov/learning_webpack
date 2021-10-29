#!/bin/sh

rm -rf egorov.github.io

git clone https://github.com/egorov/egorov.github.io.git

npm run build

cp -r dist/. egorov.github.io/

MESSAGE=`git log -1 --pretty=%B`

cd egorov.github.io

git add .

git commit -m "${MESSAGE}"

git push

cd ..