# jmahc.github.io
[![Build Status]](https://travis-ci.org/jmahc/jmahc.github.io.svg?branch=master)
[![Dependencies]](https://david-dm.org/jmahc/jmahc.github.io)
[![devDependencies Status]](https://david-dm.org/jmahc/jmahc.github.io?type=dev)

[![license]](http://opensource.org/licenses/MIT)
[![semantic-release]](https://github.com/semantic-release/semantic-release)

---



## About
This is a [portfolio site] for Jordan McArdle. **Enjoy!**

*Last updated*: **October 7, 2017** 👻 🎃 👻 🎃 👻 🎃

---

## To-Do's
1. Use [remarkable] for text content.
1. Google Drive/Docs API to grab updated résumé content.

---

## How to use

### Using `create-next-app`

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example gh-pages gh-pages-app
# or
yarn create next-app --example gh-pages gh-pages-app
```

### Download manually

Download the example:

```bash
curl https://codeload.github.com/vercel/next.js/tar.gz/master | tar -xz --strip=2 next.js-master/examples/gh-pages
cd gh-pages
```

Install it and run:

```bash
npm install
npm run dev
# or
yarn
yarn dev
```

### Deploy it to github

Edit `env-config.js` and replace `'Next-gh-page-example'` by your project name.

Edit `next.config.js` and replace `'Next-gh-page-example'` by your project name.

1.  Create repository.
2.  Link it to your github account.
3.  Publish your master branch.

```bash
npm run deploy
```

Test it:

Replace `<github-user-name>` and `<github-project-name>`

```bash
https://<github-user-name>.github.io/<github-project-name>/
```

Example:

```bash
https://github.com/thierryc/Next-gh-page-example/

https://thierryc.github.io/Next-gh-page-example/
```

---

  [Build Status]: <https://travis-ci.org/jmahc/jmahc.github.io.svg?branch=master/>
  [Dependencies]: <https://david-dm.org/jmahc/jmahc.github.io.svg>
  [devDependencies Status]: <https://david-dm.org/jmahc/jmahc.github.io/dev-status.svg>
  [license]: <https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square>
  [portfolio site]: <http://mcardle.tech/>
  [remarkable]: <https://github.com/jonschlinkert/remarkable>
  [semantic-release]: <https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square>