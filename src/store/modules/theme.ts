import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'

export interface ThemeState {
  sidebar: boolean,
  device: string,
  theme: string,
  layout: string,
  contentWidth: string,
  fixedHeader: boolean,
  fixSiderbar: boolean,
  autoHideHeader: boolean,
  color: string
  weak: boolean,
  multiTab: boolean
}

/*
@Module()
  参数一：module名称，开启命名空间后会以name为命名空间
  参数二：是否使用动态加载，简而言之只有在用到当前的module才会加载，详细可以看vuex官网
  参数三：是否开启命名空间，如果你的模块很多，强烈建议开启
  参数四：挂载的store目标
*/
@Module({ name: 'theme', dynamic: true, namespaced: true, store })

class Theme extends VuexModule implements ThemeState {
  // state
  public sidebar = true
  public device = 'desktop'
  public theme = 'dark'
  public layout = ''
  public contentWidth = ''
  public fixedHeader = false
  public fixSiderbar = false
  public autoHideHeader = false
  public color = '#52C41A'
  public weak = false
  public multiTab: true

  // get
  get getMainMenu() {
    return this.sidebar
  }

  // mutations
  @Mutation
  SET_SIDEBAR_TYPE(type) {
    this.sidebar = type
  }

  @Mutation
  CLOSE_SIDEBAR() {
    this.sidebar = false
  }

  @Mutation
  TOGGLE_DEVICE(device) {
    this.device = device
  }

  @Mutation
  TOGGLE_THEME(theme) {
    this.theme = theme
  }

  @Mutation
  TOGGLE_LAYOUT_MODE(layout) {
    this.layout = layout
  }

  @Mutation
  TOGGLE_FIXED_HEADER(fixed) {
    this.fixedHeader = fixed
  }

  @Mutation
  TOGGLE_FIXED_SIDERBAR(fixed) {
    this.fixSiderbar = fixed
  }

  @Mutation
  TOGGLE_FIXED_HEADER_HIDDEN(show) {
    this.autoHideHeader = show
  }

  @Mutation
  TOGGLE_CONTENT_WIDTH(type) {
    this.contentWidth = type
  }

  @Mutation
  TOGGLE_COLOR(color) {
    this.color = color
  }

  @Mutation
  TOGGLE_WEAK(flag) {
    this.weak = flag
  }

  @Mutation
  TOGGLE_MULTI_TAB(bool) {
    this.multiTab = bool
  }

  // actions
  @Action
  setSidebar(type) {
    this.SET_SIDEBAR_TYPE(type)
  }

  @Action
  CloseSidebar() {
    this.CLOSE_SIDEBAR()
  }

  @Action
  ToggleDevice(device) {
    this.TOGGLE_DEVICE(device)
  }

  @Action
  ToggleTheme(theme) {
    this.TOGGLE_THEME(theme)
  }

  @Action
  ToggleLayoutMode(mode) {
    this.TOGGLE_LAYOUT_MODE(mode)
  }

  @Action
  ToggleFixedHeader(fixedHeader) {
    if (!fixedHeader) {
      this.TOGGLE_FIXED_HEADER_HIDDEN(false)
    }
    this.TOGGLE_FIXED_HEADER(fixedHeader)
  }

  @Action
  ToggleFixSiderbar(fixSiderbar) {
    this.TOGGLE_FIXED_SIDERBAR(fixSiderbar)
  }

  @Action
  ToggleFixedHeaderHidden(show) {
    this.TOGGLE_FIXED_HEADER_HIDDEN(show)
  }

  @Action
  ToggleContentWidth(type) {
    this.TOGGLE_CONTENT_WIDTH(type)
  }

  @Action
  ToggleColor(color) {
    this.TOGGLE_COLOR(color)
  }

  @Action
  ToggleWeak(weakFlag) {
    this.TOGGLE_WEAK(weakFlag)
  }

  @Action
  ToggleMultiTab(bool) {
    this.TOGGLE_MULTI_TAB(bool)
  }
}

export const ThemeModule = getModule(Theme)
