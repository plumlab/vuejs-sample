import Vue from 'vue'
import VeeValidate from 'vee-validate';
import BootstrapVue from 'bootstrap-vue'
import router from '@/router'
import { store } from '@/store'
import i18n from '@/lang'
import App from '@/app/App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VeeValidate)
Vue.use(BootstrapVue)
Vue.config.productionTip = false

export const app = new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
