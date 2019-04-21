import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import i18n from '@/lang'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.config.productionTip = false

export const app = new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
