import Vue from "vue"
import VueRouter from "vue-router"
import about from './components/about.vue'
import home from './components/home.vue'
import asd from './components/asd.vue'
import user from './components/user.vue'
import phone from './components/phone.vue'
import tablet from './components/tablet.vue'
import computer from './components/computer.vue'
import routers2 from './routers2'
import router2 from './components/router2.vue'
import a from './components/a.vue'
import b from './components/b.vue'
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
      component:phone,
        children:[{
        path:'user',
          component:router2,
          children:[
            {
              path:'params/:userId',
              component:router2
            }
          ]
        },
          {
            path:'named',
            components:{
              a:a,
              b:b
            }
          }
        ]
      },
      {
        path:"tablet",
        component:tablet
      },
      {
        path:"computer",
        component:computer
      },
    ]
  },
    ...routers2,
  {path:'/asd',component:asd},
]

let router = new VueRouter({mode:'history',routes})

export default router


