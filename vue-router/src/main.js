import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

// 引入路由文件
import routerConfig from './routers'


Vue.use(VueRouter)

const router = new VueRouter(routerConfig)

new Vue({
  el: '#app',
  router:router,
  render: h => h(App)
})
