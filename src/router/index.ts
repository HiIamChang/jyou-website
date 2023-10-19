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
//alert
import Notices from '../../views/notices/Notices.vue'
import Alert from '../../views/notices/Alert.vue'
import MessageNotice from '../../views/notices/Message.vue'
import Notification1 from '../../views/notices/Notification.vue'
import Loading1 from '../../views/notices/Loading.vue'
import Dialog from '../../views/notices/Dialog.vue'
import Tip from '../../views/notices/Tip.vue'
import Popover from '../../views/notices/Popover.vue'
//tag
import Tag from '../../views/tag/Tag.vue'
//badge
import Badge1 from '../../views/badge/badge.vue'
//progress
import Progress from '../../views/progress/Progress.vue'

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
        path:'chart',
        component:Empty,
        children:[
          {
            path:'schart',
            component:Empty
          }
        ]
      },
      {
        path:'form',//表单组件
        component:Empty,
        children:[
          {
            path:'baseform',
            component:BaseForm
          }
      ]},
      {
        path:'notice',//通知组件
        component:Notices,
        // children:[
        //   {
        //     path:'notices',
        //     component:Notices
        //   },
        //   {
        //     path:'alert',
        //     component:Alert
        //   },
        //   {
        //     path:'message',
        //     component:MessageNotice
        //   },
        //   {
        //     path:'notification',
        //     component:Notification1
        //   },
        //   {
        //     path:'loading',
        //     component:Loading1
        //   },
        //   {
        //     path:'dialog',
        //     component:Dialog
        //   },
        //   {
        //     path:'tip',
        //     component:Tip
        //   },
        //   {
        //     path:'popover',
        //     component:Popover
        //   }
        // ]
      },
      {
        path:'tag',
        component:Tag
      },
      {
        path:'badge',
        component:Badge1
      },{
        path:'progress',
        component:Progress
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
