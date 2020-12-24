import router from './setRouter'
import {RouterModule} from '@/store/modules/router'
import {appNo1Routes, appNo2Routes} from './appRouter'
import baseRoutes from './baseRouter'
import codeRouters from './codeRouter'

// 添加参数，避免多次循环导致的错误
var getRouters

// 合并当前所有的路由
const newRouters = (to: any, next: any) => {
  const routerConfig = appNo1Routes.concat(appNo2Routes)
  RouterModule.setMainMenu(routerConfig)
  // 因'*'的路由存在baseRoutes里，所以放在最后不会影响其他
  const routerArr = routerConfig.concat(codeRouters).concat(baseRoutes)
  router.addRoutes(routerArr)
  next({...to, replace: true})
}

// 路由跳转之前
router.beforeEach((to, from, next) => {
  if (!getRouters) {
    getRouters = true
    newRouters(to, next)
  }

  if (to.path === '' || to.path === '/') {
    next({
      path: '/index'
    })
  } else {
    next()
  }
})
// 路由跳转之后
router.afterEach((to, from) => {

})

export default router
