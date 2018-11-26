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
      name: 'appDetail',
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
      path: '/appletDetails',
      name: 'appletDetails',
      component: resolve => require(['@/views/appletDetails'], resolve)
    },
    {
      path: '/newGuidance',
      name: 'newGuidance',
      component: resolve => require(['@/views/newGuidance'], resolve)
    },
    // {
    //   path: '/em',
    //   name: 'exa',
    //   component: resolve => require(['@/example'], resolve)
    // },
    {
      path: '/exe',
      name: 'exe',
      component: resolve => require(['@/views/exe'], resolve)
    },
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
