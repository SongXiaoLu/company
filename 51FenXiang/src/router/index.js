import Vue from 'vue'
import Router from 'vue-router'
// import appDetails from '@/views/appDetails/appDetails'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'appDetails',
    //   component: resolve => require(['@/views/appDetails/appDetails'], resolve)
    // },
    {
      path: '/articleDetails.share',
      name: 'articleDetails',
      component: resolve => require(['@/views/articleDetails'], resolve)
    },
    {
      path: '/question.share',
      name: 'question',
      component: resolve => require(['@/components/common/question'], resolve)
    },
    {
      path: '/privacyPolicy.share',
      name: 'privacyPolicy',
      component: resolve => require(['@/components/common/privacyPolicy'], resolve)
    },
    {
      path: '/appletDetails.share',
      name: 'appletDetails',
      component: resolve => require(['@/views/appletDetails'], resolve)
    },
    {
      path: '/newGuidance.share',
      name: 'newGuidance',
      component: resolve => require(['@/views/newGuidance'], resolve)
    },
    // {
    //   path: '/em',
    //   name: 'exa',
    //   component: resolve => require(['@/example'], resolve)
    // },
    {
      path: '/appDetails.share',
      name: 'appDetails',
      component: resolve => require(['@/views/newAppDetails'], resolve)
    },
    {
      path: '*',
      component: (resolve) => require(['@/views/error404'], resolve)
    }
  ]
})
