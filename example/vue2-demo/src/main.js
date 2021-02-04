import Vue from 'vue'
import App from './App.vue'

import * as ElementUI from '@/utils/index'
Vue.use(ElementUI)
console.log(ElementUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
