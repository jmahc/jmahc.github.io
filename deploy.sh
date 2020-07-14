rm -rf node_modules/.cache
rm -rf out
./node_modules/.bin/next build
./node_modules/.bin/next export
touch out/.nojekyll
#touch out/CNAME
#echo \"mcardle.tech\" >> out/CNAME
cp ./CNAME ./out
./node_modules/.bin/gh-pages -d out