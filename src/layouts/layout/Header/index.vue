<template>
  <transition name="showHeader">
    <div v-if="visible"
         class="header-animat">
      <a-layout-header v-if="visible"
                       :class="[fixedHeader && 'ant-header-fixedHeader', sidebarOpened ? 'ant-header-side-opened' : 'ant-header-side-closed']"
                       :style="{padding: '0'}">
        <div v-if="mode === 'sidemenu'"
             class="header">
          <a-icon v-if="device==='mobile'"
                  class="trigger"
                  :type="collapsed ? 'menu-fold' : 'menu-unfold'"
                  @click="toggle"/>
          <a-icon v-else
                  class="trigger"
                  :type="collapsed ? 'menu-unfold' : 'menu-fold'"
                  @click="toggle"/>
          <UserMenu :avatar="avatar"/>
        </div>
        <div v-else :class="['top-nav-header-index', theme]">
          <div class="header-index-wide">
            <div class="header-index-left">
              <Logo class="top-nav-header"
                    :show-title="device !== 'mobile'"/>
              <SMenu v-if="device !== 'mobile'"
                     mode="horizontal"
                     :menu="menus"
                     :theme="theme"/>
              <a-icon v-else
                      class="trigger"
                      :type="collapsed ? 'menu-fold' : 'menu-unfold'"
                      @click="toggle"/>
            </div>
            <UserMenu class="header-index-right"/>
          </div>
        </div>
      </a-layout-header>
    </div>
  </transition>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'
import UserMenu from '../UserMenu/index.vue'
import SMenu from '../Menu/menu.js'
import Logo from '../Logo/index.vue'

@Component<LayerHeader>({
  name: 'LayerHeader',
  components: {UserMenu, SMenu, Logo}
})

export default class LayerHeader extends Vue {
  private visible: boolean = true
  private oldScrollTop: number = 0
  private ticking: boolean = true


  @Prop({default: null}) public avatar!: any
  @Prop({default: false}) public fixedHeader!: boolean
  @Prop({default: true}) public sidebarOpened!: boolean
  @Prop({default: 'sidemenu'}) public mode!: string
  @Prop({default: () => []}) public menus!: any[]
  @Prop({default: 'dark'}) public theme!: string
  @Prop({default: false}) public collapsed!: boolean
  @Prop({default: 'desktop'}) public device!: string
  @Prop({default: false}) public autoHideHeader!: boolean

  mounted() {
    (document as any).addEventListener('scroll', this.handleScroll, {passive: true})
  }

  beforeDestroy() {
    document.body.removeEventListener('scroll', this.handleScroll, true)
  }

  private handleScroll() {
    if (!this.autoHideHeader) {
      return
    }
    const scrollTop = document.body.scrollTop + document.documentElement.scrollTop

    if (!this.ticking) {
      this.ticking = true
      requestAnimationFrame(() => {
        if (this.oldScrollTop > scrollTop) {
          this.visible = true
        } else if (scrollTop > 300 && this.visible) {
          this.visible = false
        } else if (scrollTop < 300 && !this.visible) {
          this.visible = true
        }
        this.oldScrollTop = scrollTop
        this.ticking = false
      })
    }
  }

  private toggle() {
    this.$emit('toggle')
  }
}
</script>

<style lang="less">
.header-animat {
  position: relative;
  z-index: 106;
}

.showHeader-enter-active {
  transition: all 0.25s ease;
}

.showHeader-leave-active {
  transition: all 0.5s ease;
}

.showHeader-enter, .showHeader-leave-to {
  opacity: 0;
}
</style>
