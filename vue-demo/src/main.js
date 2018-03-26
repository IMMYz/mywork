import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
// 使用VueRouter文件
Vue.use(VueRouter)
// 引入index.vue文件
import index from './components/index.vue'
import about from './components/about.vue'

const routes = [
  {path:'/',component:App},
  {path:'/index',component:index},
  {path:'/about',component:about}
]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  // render: h => h(App)
})
