import { RouteConfig } from 'vue-router'

import Index from '@/layouts/layout/index.vue'

// 基础页面路由
export const baseRoutes: RouteConfig[] = [
  {
    path: '/',
    name: '_index',
    redirect: '/index',
    meta: {
      title: '首页'
    }
  }, {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录页'
    },
    component: () => import('@/layouts/login/index.vue')
  }, {
    path: '/401',
    name: '401',
    meta: {
      title: 'error401'
    },
    component: () => import('@/layouts/error/error401.vue')
  }, {
    path: '/403',
    name: '403',
    meta: {
      title: 'error403'
    },
    component: () => import('@/layouts/error/error403.vue')
  }, {
    path: '*',
    name: '404',
    meta: {
      title: 'error404'
    },
    component: () => import('@/layouts/error/error404.vue')
  }
]

// 大屏端页面路由
export const indexRoutes: RouteConfig[] = [
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
    }]
  }
]

// 后台管理系统页面路由
export const homeRoutes: RouteConfig[] = [
  {
    path: '/homeRoutes',
    name: 'homeRoutes',
    meta: {
      icon: "form",
      title: '后台管理风格'
    },
    redirect: '/homeRoutes/Admin2',
    component: Index,
    children: [{
      path: 'Admin2',
      name: 'Admin2',
      meta: {
        icon: "form",
        title: '后台管理系统1'
      },
      component: () => import('@/views/Admin.vue')
    }, {
      path: 'Home2',
      name: 'Home2',
      meta: {
        icon: "form",
        title: '后台管理系统2'
      },
      component: () => import('@/views/Home.vue')
    }]
  }
]

// 其他系统页面路由
export const childRoutes: RouteConfig[] = [
  {
    path: '/childRoutes',
    name: 'childRoutes',
    meta: {
      icon: "form",
      title: '其他风格'
    },
    redirect: '/childRoutes/Admin3',
    component: Index,
    children: [{
      path: 'Admin3',
      name: 'Admin3',
      meta: {
        icon: "form",
        title: '其他系统1'
      },
      component: () => import('@/views/Admin.vue')
    }, {
      path: 'Home3',
      name: 'Home3',
      meta: {
        icon: "form",
        title: '其他系统2'
      },
      component: () => import('@/views/Home.vue')
    }]
  }
]
