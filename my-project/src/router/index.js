import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home'
// import List from '@/components/List'
// import Shop from '@/components/Shop'
// import Comand from '@/components/Comand'
// import Head from '@/components/Head'
import Write from '@/components/Write'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)
//路由懒加载
const  Home = ()=>import('@/components/Home')
const  List = ()=>import('@/components/List')
const  Shop = ()=>import('@/components/Shop')
const  Comand = ()=>import('@/components/comand/Comand')
const  One = ()=>import('@/components/comand/One')
const  Two = ()=>import('@/components/comand/Two')
const  Three = ()=>import('@/components/comand/Three')
const  Four = ()=>import('@/components/comand/Four')
const  Single = ()=>import('@/components/Single')
const  Login = ()=>import('@/components/Login')

Vue.use(Router)
export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta:{
        keepAlive:true
      }
    },
    {
      path: '/list',
      name: 'List',
      component: List,
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop,
      meta:{
        keepAlive:true
      }
    },
    {
      path: '/comand',
      name: 'Comand',
      component: Comand,

      children:[
        {path:'/comand',component:One,},
        {path:'one',component:One,meta: { keepAlive:true}},
        {path:'two',component:Two,meta: { keepAlive:true}},
        {path:'three',component:Three,meta: { keepAlive:true}},
        {path:'four',component:Four,meta: { keepAlive:true}},
      ],
    },
    {
      path: '/single/:id',
      name: 'Single',
      component: Single
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,

    },
    {
      path: '*',
      name: 'Write',
      component: Write
    }
  ]
});
