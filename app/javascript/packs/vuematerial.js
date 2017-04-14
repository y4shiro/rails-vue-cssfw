import Vue from 'vue/dist/vue.esm'
import 'sanitize.css/sanitize.css'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import App from './components/vuematerial/app.vue'

Vue.use(VueMaterial)

new Vue({
  el: '#app',
  render: h => h(App)
})
