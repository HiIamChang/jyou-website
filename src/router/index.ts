import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
//页面主体部分
import Page from '../components/page/Page.vue'
import Readme from '../../views/page/Readme.vue'
import PersonalCenter from '../../views/page/PersonalCenter.vue'
import Empty from '../../views/page/empty.vue'
//table
import FirstTable from '../../views/table/firsttable.vue'
//form
import BaseForm from '../../views/form/baseform.vue'


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
        component:PersonalCenter
      },
      {
        path:'table',//表格组件
        component:Empty,
        children:[
          {
            path:'ele',
            component:FirstTable
          }
      ]},
      {
        path:'form',//表格组件
        component:Empty,
        children:[
          {
            path:'baseform',
            component:BaseForm
          }
      ]}
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
