// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import echarts from 'echarts'
import jquery from 'jquery'
import 'element-ui/lib/theme-chalk/index.css'
import Vuex from 'vuex'
import axios from 'axios'
// 配置请求的根路径
axios.defaults.baseURL = 'http://123.56.150.204:8008/api/private/v1/'
Vue.prototype.$http = axios
axios.interceptors.request.use(config => {
  // console.log(config)
  config.headers.Authorization = window.sessionStorage.getItem('token')
  // 必须return config
  return config
})

Vue.use(Vuex)
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$echarts = echarts
/* eslint-disable no-new */

Vue.config.productionTip = false

var store = new Vuex.Store({
  state: {
    num: 0
  },
  mutations: {
    changeNum (state, num) {
      state.num += num
      console.log(num)
    }
  }
})

new Vue({
  el: '#app',
  store,
  router,
  jquery,
  components: { App },
  render: h => h(App),
  template: '<App/>'
})
