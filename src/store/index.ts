import Vue from 'vue'
import Vuex from 'vuex'
import { AppState } from './modules/app'
import { UserState } from './modules/user'
import { RouterState } from './modules/router'
import { ThemeState } from './modules/theme'

Vue.use(Vuex)

export interface RootState {
  app: AppState
  user: UserState
  router: RouterState
  theme: ThemeState
}

export default new Vuex.Store<RootState>({})
