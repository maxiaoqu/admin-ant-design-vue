/**
 * 基础页面路由配置
 * **/
import {RouteConfig} from 'vue-router'

// 基础页面路由
const baseRoutes: RouteConfig[] = [
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

export default baseRoutes
