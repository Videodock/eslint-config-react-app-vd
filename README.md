# eslint-config-react-app-vd

This is an opinionated eslint configuration that is being used in our React applications.

## Install

Install this module with the [required plugins](https://github.com/eslint/rfcs/pull/5) using NPM or Yarn.

```
$ npm install eslint eslint-config-react-app eslint-config-react-app-vd eslint-plugin-flowtype eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-var-spacing --save-dev

$ yarn add eslint eslint-config-react-app eslint-config-react-app-vd eslint-plugin-flowtype eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-var-spacing --save
```

## Usage

This configuration can be used just like any [Shareable Config](https://eslint.org/docs/developer-guide/shareable-configs#using-a-shareable-config) from ESLint. Just add the `extends` property to your existing eslint configuration like below or add a `.eslintrc` file with the following contents:

```
{
  "extends": "react-app-vd"
}
```
