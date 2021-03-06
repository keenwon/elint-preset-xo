"use strict"

module.exports = {
  extends: ["xo/esnext", "xo/browser", "xo-react"],
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
    mocha: true,
    jest: true
  }
}
