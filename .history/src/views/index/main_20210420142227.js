import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import '@/styles/index.scss'
import '@/icons'
import axios from 'axios'
import Tinymce from '@/components/tinymce/index.vue'
import httpRequest from '@/request/httpRequest.js'

Vue.component('tinymce', Tinymce)
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$http = httpRequest
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
