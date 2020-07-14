module.exports = {
  '*.md': ['prettier --write', 'git add'],
  'pages/**/*.js': [
    'prettier --config ./.prettierrc.js --write "pages/**/*.js"',
    'git add',
  ],
  'components/**/*.js': [
    'prettier --config ./.prettierrc.js --write "components/**/*.js"',
    'git add',
  ],
}
