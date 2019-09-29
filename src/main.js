/**
 * 入口js
 */
import Vue from 'vue'
import App from './App'
import router from './router'

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'

})
