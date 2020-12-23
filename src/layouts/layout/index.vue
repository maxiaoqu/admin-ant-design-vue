<template>
  <a-layout
    :class="['layout', device]"
    class="aaaa"
  >
    <!-- SideMenu -->
    <a-drawer
      placement="left"
      :wrap-class-name="`drawer-sider ${navTheme}`"
      :closable="false"
      :visible="collapsed"
      @close="drawerClose"
    >
      <side-menu
        mode="inline"
        :fix-siderbar="fixSiderbar"
        :menus="menus"
        :theme="navTheme"
        :collapsed="false"
        :collapsible="true"
        @menuSelect="menuSelect"
      />
    </a-drawer>

    <side-menu
      mode="inline"
      :fix-siderbar="fixSiderbar"
      :menus="menus"
      :theme="navTheme"
      :collapsed="collapsed"
      :collapsible="true"
    />

    <a-layout
      :class="[layoutMode, `content-width-${contentWidth}`]"
      :style="{paddingLeft: contentPaddingLeft, minHeight: '100vh'}"
    >
      <!-- layout header -->
      <!--      <global-header-->
      <!--        :mode='layoutMode'-->
      <!--        :menus='menus'-->
      <!--        :theme='navTheme'-->
      <!--        :collapsed='collapsed'-->
      <!--        :device='device'-->
      <!--        @toggle='toggle'-->
      <!--      />-->

      <!-- layout content -->
      <a-layout-content :style="{height: '100%', margin: '24px 24px 0', paddingTop: fixedHeader ? '64px' : '0'}">
        <!--        <multi-tab v-if='multiTab'></multi-tab>-->
        <transition name="page-transition">
          <keep-alive>
            <router-view />
          </keep-alive>
        </transition>
      </a-layout-content>

      <!-- layout footer -->
      <a-layout-footer>
        <global-footer />
      </a-layout-footer>

      <!-- <setting-drawer v-if='!production'></setting-drawer>-->
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { RouterModule } from '@/store/modules/router'
import { ThemeModule } from '@/store/modules/theme'
import config from '@/dictionary/defaultTheme'

import SideMenu from './Menu/SideMenu'
// import GlobalHeader from './Header'
import GlobalFooter from './Footer'
// import SettingDrawer from './Setting/SettingDrawer'

@Component<Index>({
  name: 'Index',
  components: { SideMenu, GlobalFooter }
  // components: {SideMenu, GlobalHeader, GlobalFooter, SettingDrawer}
})

export default class Index extends Vue {
  private collapsed: boolean = false
  private menus: any[] = []
  private contentPaddingLeft: string = '80px'
  private collapsed: boolean = false

  // 对应的主题
  private device = ThemeModule.device
  private layoutMode = ThemeModule.layout
  private navTheme = ThemeModule.theme
  private primaryColor = ThemeModule.color
  private colorWeak = ThemeModule.weak
  private fixedHeader = ThemeModule.fixedHeader
  private fixSiderbar = ThemeModule.fixSiderbar
  private fixSidebar = ThemeModule.fixSiderbar
  private contentWidth = ThemeModule.contentWidth
  private autoHideHeader = ThemeModule.autoHideHeader
  private sidebarOpened = ThemeModule.sidebar
  private multiTab = ThemeModule.multiTab

  // 默认主题
  private production: boolean = config.production

  get mainMenuArr() {
    return RouterModule.getMainMenu
  }

  created() {
  }

  mounted() {
    this.menus = this.mainMenuArr
  }

  private menuSelect() {
  }

  private drawerClose() {
    this.collapsed = false
  }
}
</script>

<style lang="less" scoped>
.layout {
  width: 100%;
  height: 100%;
  display: flex;

  &-left {
    width: 320px;
    height: 100%;
  }

  &-right {
    flex: 1;
    height: 100%;
    min-width: 0;

    h4 {
      font-size: 20px;
      line-height: 60px;
      color: aqua;
      border-bottom: 1px solid aqua;
    }
  }
}
</style>
