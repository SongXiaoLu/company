import Vue from 'vue'
import Router from 'vue-router'
// import appDetails from '@/views/appDetails/appDetails'

Vue.use(Router)

export default new Router({
  mode:'history',
  base:'/appAPI/',
  routes: [
    {
      path: '/',
      name: 'appDetails',
      component: resolve => require(['@/views/appDetails/appDetails'], resolve)
    },
    {
      path: '/articleDetails',
      name: 'articleDetails',
      component: resolve => require(['@/views/articleDetails'], resolve)
    },
    {
      path: '/question',
      name: 'question',
      component: resolve => require(['@/components/common/question'], resolve)
    },
    {
      path: '/playVideo',
      name: 'playVideo',
      component: resolve => require(['@/views/wx/playVideo'], resolve)
    },
    // {
    //   path: '/em',
    //   name: 'exa',
    //   component: resolve => require(['@/example'], resolve)
    // },
    {
      path: '/appDetails',
      name: 'appDetails',
      component: resolve => require(['@/views/appDetails/appDetails'], resolve)
    },
    // {
    //   path: '/report',
    //   name: 'report',
    //   component: resolve => require(['@/views/report/report'], resolve)
    // },
    // {
    //   path: '/reportDetails',
    //   name: '/reportDetails',
    //   component: resolve => require(['@/views/report/reportDetails'], resolve)
    // },
  ]
})
