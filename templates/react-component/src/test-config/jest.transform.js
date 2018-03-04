/* eslint-disable no-undef */
module.exports = require('babel-jest').createTransformer({
  plugins: ['transform-object-rest-spread'],
  presets: ['env', 'react'],
})
