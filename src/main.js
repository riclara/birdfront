// eslint-disable-next-line
import jquery from 'jquery'
// eslint-disable-next-line
import PopperJs from 'popper.js'
// eslint-disable-next-line
import bootstrap from 'bootstrap'
import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import store from '@/store'
import 'es6-promise/auto'

Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
