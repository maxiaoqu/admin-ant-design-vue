/**
 * 项目路由文件配置
 * **/
import {RouteConfig} from 'vue-router'

import Index from '@/layouts/layout/index.vue'

// XX模块页面路由
export const appNo1Routes: RouteConfig[] = [
  {
    path: '/index',
    name: 'index',
    meta: {
      icon: "form",
      title: '大屏端风格'
    },
    redirect: '/index/Admin1',
    component: Index,
    children: [{
      path: 'Admin1',
      name: 'Admin1',
      meta: {
        icon: "form",
        title: '大屏端1'
      },
      component: () => import('@/views/Admin.vue')
    }, {
      path: 'Home1',
      name: 'Home1',
      meta: {
        icon: "form",
        title: '大屏端2'
      },
      component: () => import('@/views/Home.vue')
    }, {
      path: 'Admin11',
      name: 'Admin11',
      meta: {
        icon: "form",
        title: '大屏端11'
      },
      component: () => import('@/views/Admin.vue')
    }, {
      path: 'Home11',
      name: 'Home11',
      meta: {
        icon: "form",
        title: '大屏端21'
      },
      component: () => import('@/views/Home.vue')
    }]
  }
]

// XX模块页面路由
export const appNo2Routes: RouteConfig[] = [
  {
    path: '/index222',
    name: 'index222',
    meta: {
      icon: "form",
      title: '大屏端风格'
    },
    redirect: '/index222/Admin1222',
    component: Index,
    children: [{
      path: 'Admin1222',
      name: 'Admin1222',
      meta: {
        icon: "form",
        title: '大屏端1'
      },
      component: () => import('@/views/Admin.vue')
    }, {
      path: 'Home1222',
      name: 'Home1222',
      meta: {
        icon: "form",
        title: '大屏端2'
      },
      component: () => import('@/views/Home.vue')
    }, {
      path: 'Admin11222',
      name: 'Admin11222',
      meta: {
        icon: "form",
        title: '大屏端11'
      },
      component: () => import('@/views/Admin.vue')
    }, {
      path: 'Home11222',
      name: 'Home11222',
      meta: {
        icon: "form",
        title: '大屏端21'
      },
      component: () => import('@/views/Home.vue')
    }]
  }
]
