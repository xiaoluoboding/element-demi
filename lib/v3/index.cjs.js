var ElementUI = require('element-plus')
require('element-plus/lib/theme-chalk/index.css')

Object.keys(ElementUI).forEach(function(key) {
  exports[key] = ElementUI[key]
})

exports.ElementUI = ElementUI
