import about from './components/about.vue'
import App from './App.vue'



export default {
  routes:[
    {path:'/',component:App},
    {path:'*',component:App},
    {path:'/about',component:about}
  ]
}


