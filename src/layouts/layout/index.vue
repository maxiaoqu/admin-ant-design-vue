<template>
  <a-layout
    :class="['layout', device]"
    class="aaaa"
  >
    <!-- SideMenu -->
    <a-drawer
      v-if="isMobile()"
      placement="left"
      :wrap-class-name="`drawer-sider ${navTheme}`"
      :closable="false"
      :visible="collapsed"
      @close="drawerClose"
    >
      <side-menu
        mode="inline"
        :isDesktop="isDesktop()"
        :fix-siderbar="fixSiderbar"
        :menus="menus"
        :theme="navTheme"
        :collapsed="false"
        :collapsible="true"
        @menuSelect="menuSelect"
      />
    </a-drawer>

    <side-menu
      v-else-if="isSideMenu()"
      mode="inline"
      :isDesktop="isDesktop()"
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
      <global-header
        :mode="layoutMode"
        :menus="menus"
        :theme="navTheme"
        :collapsed="collapsed"
        :fixed-header="fixedHeader"
        :sidebar-opened="sidebarOpened"
        :device="device"
        @toggle="toggle"
      />

      <!-- layout content -->
      <a-layout-content :style="{height: '100%', margin: '24px 24px 0', paddingTop: fixedHeader ? '64px' : '0'}">
        <!--        <multi-tab v-if='multiTab'></multi-tab>-->
        <transition name="page-transition">
          <keep-alive>
            <router-view/>
          </keep-alive>
        </transition>
      </a-layout-content>

      <!-- layout footer -->
      <a-layout-footer>
        <global-footer/>
      </a-layout-footer>

      <setting-drawer
        :primary-color="primaryColor"
        :nav-theme="navTheme"
        :layout-mode="layoutMode"
        :content-width="contentWidth"
        :fixed-header="fixedHeader"
        :fix-siderbar="fixSiderbar"
        :auto-hide-header="autoHideHeader"
        :color-weak="colorWeak"
        :multi-tab="multiTab"
      />
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import {Component, Vue, Watch} from 'vue-property-decorator'
import {RouterModule} from '@/store/modules/router'
import {ThemeModule} from '@/store/modules/theme'

import SideMenu from './Menu/SideMenu.vue'
import GlobalHeader from './Header/index.vue'
import GlobalFooter from './Footer/index.vue'
import SettingDrawer from './Setting/SettingDrawer.vue'
import {DEVICE_TYPE} from "@utils/device";

@Component<Index>({
  name: 'Index',
  components: {SideMenu, GlobalHeader, GlobalFooter, SettingDrawer}
})

export default class Index extends Vue {
  private menus: any[] = []
  private contentPaddingLeft: string = '0'
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

  get mainMenuArr() {
    return RouterModule.getMainMenu
  }

  @Watch('sidebarOpened')
  sidebarOpenedChange(val) {
    this.collapsed = !val
  }

  mounted() {
    this.menus = this.mainMenuArr
    const userAgent = navigator.userAgent
    if (userAgent.indexOf('Edge') > -1) {
      this.$nextTick(() => {
        this.collapsed = !this.collapsed
        setTimeout(() => {
          this.collapsed = !this.collapsed
        }, 16)
      })
    }
  }

  private getContentPaddingLeft() {
    let PaddingLeft = '0px'
    if (!this.fixSidebar || this.isMobile()) {
      PaddingLeft = '0px'
    }
    if (this.sidebarOpened) {
      PaddingLeft = '256px'
    } else {
      PaddingLeft = '80px'
    }
    this.contentPaddingLeft = PaddingLeft
  }

  private isDesktop = () => {
    let device = ThemeModule.device
    return device === DEVICE_TYPE.DESKTOP
  }

  private isSideMenu = () => {
    let layoutMode = ThemeModule.layout
    return !(layoutMode === 'topmenu')
  }

  private isMobile = () => {
    let device = ThemeModule.device
    return device === DEVICE_TYPE.MOBILE
  }

  private menuSelect() {
  }

  private toggle() {
    this.collapsed = !this.collapsed
    ThemeModule.setSidebar(!this.collapsed)
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
