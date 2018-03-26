import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import asd from './components/asd.vue'

// 引入路由文件
import router from './routers'


new Vue({
  el: '#app',
  router:router,
  render: h => h(asd)
})
