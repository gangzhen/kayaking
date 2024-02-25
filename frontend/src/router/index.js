import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {title: '首页'},
    redirect: '/web/system',
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
            component: () => import('@/views/main/MainView.vue'),
            children: [
              {
                path: 'mass-youth',
                name: 'coaches/mass-youth',
                meta: { title: '大众青少年皮划艇静水' },
                component: () => import('@/views/main/MainView.vue'),
                children: [
                  {
                    path: 'register',
                    name: 'coaches/mass-youth/register',
                    meta: { title: '年度注册' },
                    component: () => import('@/views/main/0-home/Empty.vue')
                  },
                  {
                    path: 'train',
                    name: 'coaches/mass-youth/train',
                    meta: { title: '培训信息与报名' },
                    component: () => import('@/views/main/0-home/Empty.vue')
                  },
                  {
                    path: 'info',
                    name: 'coaches/mass-youth/info',
                    meta: { title: '教练员信息' },
                    component: () => import('@/views/main/0-home/Empty.vue')
                  }
                ]
              },
              {
                path: 'open-water',
                name: 'coaches/open-water',
                meta: { title: '公开水域皮划艇' },
                component: () => import('@/views/main/MainView.vue'),
                children: [
                  {
                    path: 'register',
                    name: 'coaches/open-water/register',
                    meta: { title: '年度注册' },
                    component: () => import('@/views/main/0-home/Empty.vue')
                  },
                  {
                    path: 'train',
                    name: 'coaches/open-water/train',
                    meta: { title: '培训信息与报名' },
                    component: () => import('@/views/main/0-home/Empty.vue')
                  },
                  {
                    path: 'info',
                    name: 'coaches/open-water/info',
                    meta: { title: '教练员信息' },
                    component: () => import('@/views/main/0-home/Empty.vue')
                  }
                ]
              },
            ]
          },
          {
            path: 'referees',
            name: 'referees',
            meta: { title: '裁判员' },
            component: () => import('@/views/main/MainView.vue'),
            children: [
              {
                path: 'mass-youth',
                name: 'referees/mass-youth',
                meta: { title: '大众青少年皮划艇静水' },
                component: () => import('@/views/main/MainView.vue'),
                children: [
                  {
                    path: 'register',
                    name: 'referees/mass-youth/register',
                    meta: { title: '年度注册' },
                    component: () => import('@/views/main/0-home/Empty.vue')
                  },
                  {
                    path: 'train',
                    name: 'referees/mass-youth/train',
                    meta: { title: '培训信息与报名' },
                    component: () => import('@/views/main/0-home/Empty.vue')
                  },
                  {
                    path: 'dispatch',
                    name: 'referees/mass-youth/dispatch',
                    meta: { title: '比赛派遣' },
                    component: () => import('@/views/main/0-home/Empty.vue')
                  }
                ]
              },
              {
                path: 'open-water',
                name: 'referees/open-water',
                meta: { title: '公开水域皮划艇' },
                component: () => import('@/views/main/MainView.vue'),
                children: [
                  {
                    path: 'register',
                    name: 'referees/open-water/register',
                    meta: { title: '年度注册' },
                    component: () => import('@/views/main/0-home/Empty.vue')
                  },
                  {
                    path: 'train',
                    name: 'referees/open-water/train',
                    meta: { title: '培训信息与报名' },
                    component: () => import('@/views/main/0-home/Empty.vue')
                  },
                  {
                    path: 'dispatch',
                    name: 'referees/open-water/dispatch',
                    meta: { title: '比赛派遣' },
                    component: () => import('@/views/main/0-home/Empty.vue')
                  }
                ]
              },
            ]
          },
          {
            path: 'athletes',
            name: 'athletes',
            meta: { title: '运动员' },
            component: () => import('@/views/main/MainView.vue'),
            children: [
              {
                path: 'mass-youth',
                name: 'athletes/mass-youth',
                meta: { title: '大众青少年皮划艇静水' },
                component: () => import('@/views/main/MainView.vue'),
                children: [
                  {
                    path: 'register',
                    name: 'athletes/mass-youth/register',
                    meta: { title: '年度注册' },
                    component: () => import('@/views/main/0-home/Empty.vue')
                  },
                ]
              },
              {
                path: 'open-water',
                name: 'athletes/open-water',
                meta: { title: '公开水域皮划艇' },
                component: () => import('@/views/main/MainView.vue'),
                children: [
                  {
                    path: 'register',
                    name: 'athletes/open-water/register',
                    meta: { title: '年度注册' },
                    component: () => import('@/views/main/0-home/Empty.vue')
                  },
                ]
              },
            ]
          },
          {
            path: 'competitions',
            name: 'competitions',
            meta: { title: '赛事信息' },
            component: () => import('@/views/main/MainView.vue'),
            children: [
              {
                path: 'mass-youth',
                name: 'competitions/mass-youth',
                meta: { title: '大众青少年皮划艇静水' },
                component: () => import('@/views/main/MainView.vue'),
                children: [
                  {
                    path: 'calendar',
                    name: 'competitions/mass-youth/calendar',
                    meta: { title: '年度赛事日历公告' },
                    component: () => import('@/views/main/0-home/Empty.vue')
                  },
                  {
                    path: 'sign-up',
                    name: 'competitions/mass-youth/sign-up',
                    meta: { title: '赛事信息与报名' },
                    component: () => import('@/views/main/0-home/Empty.vue')
                  },
                ]
              },
              {
                path: 'open-water',
                name: 'competitions/open-water',
                meta: { title: '公开水域皮划艇' },
                component: () => import('@/views/main/MainView.vue'),
                children: [
                  {
                    path: 'calendar',
                    name: 'competitions/open-water/calendar',
                    meta: { title: '年度赛事日历公告' },
                    component: () => import('@/views/main/0-home/Empty.vue')
                  },
                  {
                    path: 'sign-up',
                    name: 'competitions/open-water/sign-up',
                    meta: { title: '赛事信息与报名' },
                    component: () => import('@/views/main/0-home/Empty.vue')
                  },
                ]
              },
            ]
          },
          {
            path: 'results',
            name: 'results',
            meta: { title: '竞赛成绩公告' },
            component: () => import('@/views/main/MainView.vue'),
            children: [
              {
                path: 'mass-youth',
                name: 'results/mass-youth',
                meta: { title: '大众青少年皮划艇静水' },
                component: () => import('@/views/main/0-home/Empty.vue')
              },
              {
                path: 'open-water',
                name: 'results/open-water',
                meta: { title: '公开水域皮划艇' },
                component: () => import('@/views/main/0-home/Empty.vue')
              },
            ]
          },
          {
            path: 'points',
            name: 'points',
            meta: { title: '积分赛信息' },
            component: () => import('@/views/main/MainView.vue'),
            children: [
              {
                path: 'mass-youth',
                name: 'points/mass-youth',
                meta: { title: '大众青少年皮划艇静水' },
                component: () => import('@/views/main/MainView.vue'),
                children: [
                  {
                    path: 'ranking',
                    name: 'points/mass-youth/ranking',
                    meta: { title: '积分排名榜' },
                    component: () => import('@/views/main/0-home/Empty.vue'),
                  },
                  {
                    path: 'athletes-info',
                    name: 'points/mass-youth/athletes-info',
                    meta: { title: '运动员信息' },
                    component: () => import('@/views/main/0-home/Empty.vue'),
                  },
                  {
                    path: 'statistic/retention/name-list',
                    name: 'points/mass-youth/statistic/retention/name-list',
                    meta: { title: '留榜运动员名单' },
                    component: () => import('@/views/main/7-points/mass-youth/statistic/retention/MYRetentionNameList.vue'),
                  },
                  {
                    path: 'statistic/retention/number',
                    name: 'points/mass-youth/statistic/retention/number',
                    meta: { title: '留榜人数统计' },
                    component: () => import('@/views/main/0-home/Empty.vue'),
                  },
                  {
                    path: 'statistic/retention/rate',
                    name: 'points/mass-youth/statistic/retention/rate',
                    meta: { title: '留榜率' },
                    component: () => import('@/views/main/0-home/Empty.vue'),
                  },
                  {
                    path: 'statistic/entry/name-list',
                    name: 'points/mass-youth/statistic/entry/name-list',
                    meta: { title: '新入榜运动员名单' },
                    component: () => import('@/views/main/7-points/mass-youth/statistic/entry/MYEntryNameList.vue'),
                  },
                  {
                    path: 'statistic/entry/number',
                    name: 'points/mass-youth/statistic/entry/number',
                    meta: { title: '新入榜人数统计' },
                    component: () => import('@/views/main/0-home/Empty.vue'),
                  },
                  {
                    path: 'statistic/entry/rate',
                    name: 'points/mass-youth/statistic/entry/rate',
                    meta: { title: '新入榜率' },
                    component: () => import('@/views/main/0-home/Empty.vue'),
                  },
                ]
              },
              {
                path: 'open-water',
                name: 'points/open-water',
                meta: { title: '公开水域皮划艇' },
                component: () => import('@/views/main/MainView.vue'),
                children: [
                  {
                    path: 'ranking',
                    name: 'points/open-water/ranking',
                    meta: { title: '积分排名榜' },
                    component: () => import('@/views/main/0-home/Empty.vue'),
                  },
                  {
                    path: 'athletes-info',
                    name: 'points/open-water/athletes-info',
                    meta: { title: '运动员信息' },
                    component: () => import('@/views/main/0-home/Empty.vue'),
                  }
                ]
              },
            ]
          },
          {
            path: 'announcements',
            name: 'announcements',
            meta: { title: '中国皮划艇协会管理相关公告' },
            component: () => import('@/views/main/MainView.vue'),
            children: [
              {
                path: 'mass-youth',
                name: 'announcements/mass-youth',
                meta: { title: '大众青少年皮划艇静水' },
                component: () => import('@/views/main/MainView.vue'),
                children: [
                  {
                    path: 'referee',
                    name: 'announcements/mass-youth/referee',
                    meta: { title: '裁判员相关公告' },
                    component: () => import('@/views/main/0-home/Empty.vue'),
                  },
                  {
                    path: 'coach',
                    name: 'announcements/mass-youth/coach',
                    meta: { title: '教练员相关公告' },
                    component: () => import('@/views/main/0-home/Empty.vue'),
                  },
                  {
                    path: 'athlete',
                    name: 'announcements/mass-youth/athlete',
                    meta: { title: '运动员相关公告' },
                    component: () => import('@/views/main/0-home/Empty.vue'),
                  },
                  {
                    path: 'policy',
                    name: 'announcements/mass-youth/policy',
                    meta: { title: '管理制度与政策相关公告' },
                    component: () => import('@/views/main/0-home/Empty.vue'),
                  }
                ]
              },
              {
                path: 'open-water',
                name: 'announcements/open-water',
                meta: { title: '公开水域皮划艇' },
                component: () => import('@/views/main/0-home/Empty.vue'),
                children: [
                  {
                    path: 'referee',
                    name: 'announcements/open-water/referee',
                    meta: { title: '裁判员相关公告' },
                    component: () => import('@/views/main/0-home/Empty.vue'),
                  },
                  {
                    path: 'coach',
                    name: 'announcements/open-water/coach',
                    meta: { title: '教练员相关公告' },
                    component: () => import('@/views/main/0-home/Empty.vue'),
                  },
                  {
                    path: 'athlete',
                    name: 'announcements/open-water/athlete',
                    meta: { title: '运动员相关公告' },
                    component: () => import('@/views/main/0-home/Empty.vue'),
                  },
                  {
                    path: 'policy',
                    name: 'announcements/open-water/policy',
                    meta: { title: '管理制度与政策相关公告' },
                    component: () => import('@/views/main/0-home/Empty.vue'),
                  }
                ]
              },
            ]
          },
          {
            path: 'empty',
            name: 'empty',
            meta: { title: '功能暂未开发' },
            component: () => import('@/views/main/0-home/Empty.vue'),
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
