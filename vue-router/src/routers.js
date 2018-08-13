import Vue from "vue"
import VueRouter from "vue-router"
import about from './components/about.vue'
import home from './components/home.vue'
import asd from './components/asd.vue'
import user from './components/user.vue'
import phone from './components/phone.vue'
import tablet from './components/tablet.vue'
import computer from './components/computer.vue'
import a from './components/a.vue'
import b from './components/b.vue'
import App from './App.vue'
import first from './components/tabs/first.vue'
import second from './components/tabs/second.vue'
import third from './components/tabs/third.vue'
import fourth from './components/tabs/fourth.vue'

Vue.use(VueRouter);

const routes = [
  { path: '/about', component: about },
  {
    path: '/home',
    component: home,
    children: [
      {
        path: "phone",
        component: phone,
        children: [
          {
            path: 'named',
            components: {
              a: a,
              b: b
            }
          }
        ]
      },
      {
        path: "first",
        name:"first",
        component: first
      },
      {
        path: 'second',
        name:"second",
        component: second
      },
      {
        path: "third",
        name:"third",
        component: third
      },
      {
        path:"fourth",
        name:"fourth",
        component:fourth
      },
      {
        path: "tablet",
        component: tablet
      },
      {
        path: "computer",
        component: computer
      },
    ]
  },
  { path: '/asd', component: asd },
]

let router = new VueRouter({ mode: 'history', routes })


export default router


