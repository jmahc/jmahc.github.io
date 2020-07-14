module.exports = {
  '*.md': ['prettier --write', 'git add'],
  'pages/**/*.js': [
    'prettier --config ./.prettierrc.js --write "src/**/*.js"',
    'git add',
  ],
}
