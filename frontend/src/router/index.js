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
            component: () => import('@/views/main/9-error/Error404.vue'),
          },
          {
            path: 'referees',
            name: 'referees',
            meta: { title: '裁判员' },
            component: () => import('@/views/main/9-error/Error404.vue'),
          },
          {
            path: 'athletes',
            name: 'athletes',
            meta: { title: '运动员' },
            component: () => import('@/views/main/9-error/Error404.vue'),
          },
          {
            path: 'competitions',
            name: 'competitions',
            meta: { title: '赛事信息' },
            component: () => import('@/views/main/9-error/Error404.vue'),
          },
          {
            path: 'results',
            name: 'results',
            meta: { title: '竞赛成绩公告' },
            component: () => import('@/views/main/9-error/Error404.vue'),
          },
          {
            path: 'points',
            name: 'points',
            meta: { title: '积分赛信息' },
            component: () => import('@/views/main/MainView.vue'),
            children: [
              {
                path: 'mass-youth',
                name: 'mass-youth',
                meta: { title: '大众青少年皮划艇静水' },
                component: () => import('@/views/main/MainView.vue'),
                children: [
                  {
                    path: 'ranking',
                    name: 'ranking',
                    meta: { title: '积分排名榜' },
                    component: () => import('@/views/main/9-error/Error404.vue'),
                  },
                  {
                    path: 'athletes-info',
                    name: 'athletes-info',
                    meta: { title: '运动员信息' },
                    component: () => import('@/views/main/9-error/Error404.vue'),
                  },
                  {
                    path: 'statistic/retention/name-list',
                    name: 'retention/name-list',
                    meta: { title: '留榜运动员名单' },
                    component: () => import('@/views/main/9-error/Error404.vue'),
                  },
                  {
                    path: 'statistic/retention/number',
                    name: 'retention/number',
                    meta: { title: '留榜人数统计' },
                    component: () => import('@/views/main/9-error/Error404.vue'),
                  },
                  {
                    path: 'statistic/retention/rate',
                    name: 'retention/rate',
                    meta: { title: '留榜率' },
                    component: () => import('@/views/main/9-error/Error404.vue'),
                  },
                  {
                    path: 'statistic/entry/name-list',
                    name: 'entry/name-list',
                    meta: { title: '新入榜运动员名单' },
                    component: () => import('@/views/main/9-error/Error404.vue'),
                  },
                  {
                    path: 'statistic/entry/number',
                    name: 'entry/name-list',
                    meta: { title: '新入榜人数统计' },
                    component: () => import('@/views/main/9-error/Error404.vue'),
                  },
                  {
                    path: 'statistic/entry/rate',
                    name: 'entry/name-list',
                    meta: { title: '新入榜率' },
                    component: () => import('@/views/main/9-error/Error404.vue'),
                  },
                ]
              },
              {
                path: 'open-water',
                name: 'open-water',
                meta: { title: '公开水域皮划艇' },
                component: () => import('@/views/main/MainView.vue'),
                children: [
                  {
                    path: 'ranking',
                    name: 'ranking',
                    meta: { title: '积分排名榜' },
                    component: () => import('@/views/main/9-error/Error404.vue'),
                  },
                  {
                    path: 'athletes-info',
                    name: 'athletes-info',
                    meta: { title: '运动员信息' },
                    component: () => import('@/views/main/9-error/Error404.vue'),
                  }
                ]
              },
            ]
          },
          {
            path: 'announcements',
            name: 'announcements',
            meta: { title: '积分赛信息' },
            component: () => import('@/views/main/9-error/Error404.vue'),
          },
          {
            path: '403',
            name: '403',
            meta: { title: '403' },
            component: () => import('@/views/main/9-error/Error403.vue'),
          },
          {
            path: '404',
            name: '404',
            meta: { title: '404' },
            component: () => import('@/views/main/9-error/Error404.vue'),
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
