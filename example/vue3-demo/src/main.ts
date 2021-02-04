import { createApp } from 'vue'
import App from './App.vue'

import * as ElementUI from './utils'

console.log(ElementUI)

const app = createApp(App)

app.use(ElementUI)
app.mount('#app')
