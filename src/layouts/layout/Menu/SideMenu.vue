<template>
  <a-layout-sider
    v-model="collapsed"
    :class="['sider', isDesktop ? null : 'shadow', theme, fixSiderbar ? 'ant-fixed-sidemenu' : null]"
    width="256px"
    :collapsible="collapsible"
    :trigger="null"
  >
    <Logo/>
    <SMenu
      :collapsed="collapsed"
      :menu="menus"
      :theme="theme"
      :mode="mode"
      style="padding: 16px 0px;"
      @select="onSelect"
    />
  </a-layout-sider>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'
import SMenu from './menu'
import Logo from '../Logo/index.vue'

@Component<SideMenu>({
  name: 'SideMenu',
  components: {Logo, SMenu}
})

export default class SideMenu extends Vue {
  @Prop({default: false}) public isDesktop!: boolean
  @Prop({default: false}) public fixSiderbar!: boolean
  @Prop({default: 'inline'}) public mode!: string
  @Prop({default: 'dark'}) public theme!: string
  @Prop({default: false}) public collapsible!: boolean
  @Prop({default: false}) public collapsed!: boolean
  @Prop({default: () => []}) public menus!: any[]

  private onSelect(obj) {
    this.$emit('menuSelect', obj)
  }
}
</script>
