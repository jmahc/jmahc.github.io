# Clean node_modules cache
echo 'Clean node_modules cache'
rm -rf node_modules/.cache
# Clean recent output directory
echo 'Clean recent output directory'
rm -rf out
# Build the project
echo 'Build the project'
./node_modules/.bin/next build
# Export the project to the output directory
echo 'Export the project to the output directory'
./node_modules/.bin/next export
# Use the `gh-pages` module to push the output directory
# to the `master` branch, as this is a project that uses
# my Github name
echo 'Pushing the output directory to the master branch'
# ./node_modules/.bin/gh-pages -b master -d out
