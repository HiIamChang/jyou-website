import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Header from '../components/page/Head.vue'
import SideBar from '../components/page/SideBar.vue'
import Page from '../components/page/Page.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: Header
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // },
  {
    path:'/head',
    name:'head',
    component:Header
  },
  {
    path:'/sidebar',
    name:'sidebar',
    component:SideBar
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
