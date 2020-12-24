/**
 * 其他路由配置(不需要展示出来的)
 * **/
import {RouteConfig} from 'vue-router'

import Index from '@/layouts/layout/index.vue'

// 基础页面路由
const codeRouters: RouteConfig[] = [
  {
    path: '/setting',
    name: 'setting',
    meta: {
      title: '大屏端风格'
    },
    redirect: '/setting/personal',
    component: Index,
    children: [{
      path: 'personal',
      name: 'personal',
      meta: {
        title: '个人中心'
      },
      component: () => import('@/layouts/setting/personal/index.vue')
    }, {
      path: 'account',
      name: 'account',
      meta: {
        title: '账户设置'
      },
      component: () => import('@/layouts/setting/account/index.vue')
    }, {
      path: 'theme',
      name: 'theme',
      meta: {
        title: '主题设置'
      },
      component: () => import('@/layouts/setting/theme/index.vue')
    }]
  }
]

export default codeRouters
