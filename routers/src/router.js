import Vue from "vue"
import VueRouter from "vue-router"

// 引入组件
import home from "./home.vue"
import about from "./about.vue"
import user from "./user.vue"

// 告诉vue使用vueRouter
Vue.use(VueRouter);

const routes = [
  {path:'/home',component:home},
  {path:'/about',component:about},
  //重定向
  {path:'/',redirect:'/home'},
  // 新增user路径，配置动态id
  {path:"/user/:id",component:user},
]

let router = new VueRouter({
  routes
})

export default router;
