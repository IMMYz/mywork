import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import asd from './components/asd.vue'

// import store from "./store.js" //引入store对象
import store from "./store/index"

// 引入路由文件
import router from './routers'
//引入路由2
import router2 from './routers2'


new Vue({
  el: '#app',
  store,
  router:router,
  render: h => h(App)
})
