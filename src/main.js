import Vue from 'vue'
import App from './App.vue'

import router from './routes'

import './assets/scss/main.scss'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
