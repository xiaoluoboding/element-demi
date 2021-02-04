# Element Demi

An adapter for using Element UI with Vue 2 / 3.

## Just a toy

This lib aim to testing the `postinstall` npm hook. After all packages get installed. the script will start to check
the installed Vue version and redirect the exports to based on the local Vue version.

## Install

```bash
// vue2.x + element-ui
npm i element-demi element-ui
# or
yarn add element-demi element-ui

// vue3.x + element-plus
npm i element-demi element-plus
# or
yarn add element-demi element-plus
```

## 💡 Usage

### Vue2

```js
import Vue from 'vue'
import ElementUI from 'element-demi'

Vue.use(ElementUI)
```

### Vue3

```js
import { createApp } from 'vue'
import App from './App.vue'
import ElementUI from 'element-demi'

const app = createApp(App)

app.use(ElementUI)
```

## 🦄️ Demos

Vue 2 Demo: [Vue CLI 2.x](./examples/vue2-demo/README.md)  |  Vue 3 Demo: [Vue CLI 3.x](./examples/vue3-demo/README.md)

## Inspiration

This libary is inspired by [@vueuse/core](https://github.com/antfu/vueuse)

## 📄 License

MIT [@xiaoluoboding](https://github.com/xiaoluoboding)