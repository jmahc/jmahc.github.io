module.exports = {
  '*.md': ['prettier --write', 'git add'],
  'src/**/*.js': [
    'prettier --config ./.prettierrc.js --write "src/**/*.js"',
    'git add',
  ],
}
