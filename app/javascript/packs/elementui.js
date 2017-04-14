import Vue from 'vue/dist/vue.esm'
import 'sanitize.css/sanitize.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './components/elementui/app.vue'

Vue.use(ElementUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
