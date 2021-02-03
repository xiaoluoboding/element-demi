var ElementUI = require('element-ui')
require('element-ui/lib/theme-chalk/index.css')

Object.keys(ElementUI).forEach(function(key) {
  exports[key] = ElementUI[key]
})

exports.ElementUI = ElementUI
