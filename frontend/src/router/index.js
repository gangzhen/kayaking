import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {title: '首页'},
    component: () => import('@/views/LayoutView.vue'),
    children: [
      {
        path: 'web',
        name: 'web',
        component: () => import('@/views/main/MainView.vue'),
        children: [
          {
            path: 'system',
            name: 'system',
            meta: { title: '中国皮划艇协会竞赛管理系统' },
            component: () => import('@/views/main/0-home/System.vue'),
          },
          {
            path: 'coaches',
            name: 'coaches',
            meta: { title: '教练员' },
            component: () => import('@/views/main/0-home/System.vue'),
          },
          {
            path: 'referees',
            name: 'referees',
            meta: { title: '裁判员' },
            component: () => import('@/views/main/0-home/System.vue'),
          },
          {
            path: 'athletes',
            name: 'athletes',
            meta: { title: '运动员' },
            component: () => import('@/views/main/0-home/System.vue'),
          },
          {
            path: 'competitions',
            name: 'competitions',
            meta: { title: '赛事信息' },
            component: () => import('@/views/main/0-home/System.vue'),
          },
          {
            path: 'results',
            name: 'results',
            meta: { title: '竞赛成绩公告' },
            component: () => import('@/views/main/0-home/System.vue'),
          },
          {
            path: 'points',
            name: 'points',
            meta: { title: '积分赛信息' },
            component: () => import('@/views/main/0-home/System.vue'),
          },
          {
            path: 'announcements',
            name: 'announcements',
            meta: { title: '积分赛信息' },
            component: () => import('@/views/main/0-home/System.vue'),
          },
        ],
      },
    ],
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

export default router
