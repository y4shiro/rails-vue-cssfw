import Vue from 'vue/dist/vue.esm'
import 'sanitize.css/sanitize.css'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import App from './components/vuetify/app.vue'

Vue.use(Vuetify)

new Vue({
  el: '#app',
  render: h => h(App)
})
