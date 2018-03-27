import Vue from "vue"
import VueRouter from "vue-router"
import about from './components/about.vue'
import home from './components/home.vue'
import asd from './components/asd.vue'
import user from './components/user.vue'
import phone from './components/phone.vue'
import tablet from './components/tablet.vue'
import computer from './components/computer.vue'
import App from './App.vue'

Vue.use(VueRouter);

const routes = [
  {path:'/about',component:about},
  {
    path:'/home',
    component:home,
    children:[
      {
      path:"phone",
      component:phone
      },
      {
        path:"tablet",
        component:tablet
      },
      {
        path:"computer",
        component:computer
      },
      {
        path:"",
        component:phone
      }
    ]
  },
  {path:'/asd',component:asd},
  // 新增user路径,配置了动态的id
  {path:'/user/:id',component:user},
]

let router = new VueRouter({routes})

export default router


