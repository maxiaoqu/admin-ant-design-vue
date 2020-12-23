import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'

export interface RouterState {
  mainMenu: any[] // 菜单路由
}

/*
@Module()
  参数一：module名称，开启命名空间后会以name为命名空间
  参数二：是否使用动态加载，简而言之只有在用到当前的module才会加载，详细可以看vuex官网
  参数三：是否开启命名空间，如果你的模块很多，强烈建议开启
  参数四：挂载的store目标
*/
@Module({ name: 'router', dynamic: true, namespaced: true, store })

class Router extends VuexModule implements RouterState {
  // state
  public mainMenu

  // get
  get getMainMenu() {
    return this.mainMenu
  }

  // mutations
  @Mutation
  private SET_MAINMENU(mainMenu: any[]) {
    this.mainMenu = mainMenu
  }

  // actions
  @Action
  public setMainMenu(mainMenu: any[]) {
    this.SET_MAINMENU(mainMenu)
  }
}

export const RouterModule = getModule(Router)
