import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
//页面主体部分
import Page from '../components/page/Page.vue'
import Readme from '../../views/page/Readme.vue'



Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect:'/page'
  },
  {
    path:'/page',//页面主体
    component:Page,
    redirect:'/page/readme',
    children:[
      {
        path:'readme',
        component:Readme
      },
      {
        path:'personalCenter',
        component:Readme
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
