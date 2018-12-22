"use strict"

module.exports = {
  extends: ["xo/esnext", "xo/browser"],
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
    mocha: true,
    jest: true
  }
}
