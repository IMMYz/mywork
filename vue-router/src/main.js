import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import asd from './components/asd.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import store from "./store.js" //引入store对象
import store from "./store/index"

// 引入路由文件
import router from './routers'
//引入路由2

Vue.use(ElementUI)

new Vue({
  el: '#app',
  store,
  router:router,
  render: h => h(App)
})
