import page1 from '@/page1'
import page2 from '@/page2'
import page3 from '@/page3'
import homepage from '@/components/homepage'
import homepage2 from '@/components/homepage2'
import homepage3 from '@/components/homepage3'
import menu from '@/components/menu'
import system from '@/components/system'
import tableeg from '@/components/tableeg'
import ordinarytable from '@/components/ordinarytable'
import distributionform from '@/components/distributionform'
import login from '@/components/login'
import login2 from '@/components/login2'
import login3 from '@/components/login3'
import e404 from '@/components/e404'
import buttoneg from '@/components/buttoneg'
import popup from '@/components/popup'
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/homepage'
    },
    {
      path: '/page1',
      name: 'page1',
      component: page1,
      children: [
        {
          path: '/homepage',
          name: 'homepage',
          component: homepage
        },
        {
          path: '/homepage2',
          name: 'homepage2',
          component: homepage2
        },
        {
          path: '/homepage3',
          name: 'homepage3',
          component: homepage3
        },
        {
          path: '/menu',
          name: 'menu',
          component: menu
        },
        {
          path: '/system',
          name: 'system',
          component: system
        },
        {
          path: '/tableeg',
          name: 'tableeg',
          component: tableeg
        },
        {
          path: '/ordinarytable',
          name: 'ordinarytable',
          component: ordinarytable
        },
        {
          path: '/distributionform',
          name: 'distributionform',
          component: distributionform
        },
        {
          path: '/login',
          name: 'login',
          component: login
        },
        {
          path: '/login2',
          name: 'login2',
          component: login2
        },
        {
          path: '/login3',
          name: 'login3',
          component: login3
        },
        {
          path: '/e404',
          name: 'e404',
          component: e404
        },
        {
          path: '/buttoneg',
          name: 'buttoneg',
          component: buttoneg
        },
        {
          path: '/popup',
          name: 'popup',
          component: popup
        }
      ]
    },
    {
      path: '/page2',
      name: 'page2',
      component: page2
    },
    {
      path: '/page3',
      name: 'page3',
      component: page3
    }
  ]
})
