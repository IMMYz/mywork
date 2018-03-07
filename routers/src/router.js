import Vue from "vue"
import VueRouter from "vue-router"

// 引入组件
import home from "./home.vue"
import about from "./about.vue"

// 告诉vue使用vueRouter
Vue.use(VueRouter);

const routes = [
  {path:'/home',component:home},
  {path:'/about',component:about}
]

let router = new VueRouter({
  routes
})

export default router;
