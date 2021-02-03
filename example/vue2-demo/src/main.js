import Vue from 'vue'
import App from './App.vue'

import ElementUI from '../../../lib/v2/index.esm'
console.log(ElementUI)
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
