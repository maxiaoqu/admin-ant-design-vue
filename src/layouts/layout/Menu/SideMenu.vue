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

<script>
import SMenu from './menu'
import Logo from '../Logo'

export default {
  name: 'SideMenu',
  components: {Logo, SMenu},
  props: {
    isDesktop: {
      type: Boolean,
      required: false
    },
    fixSiderbar: {
      type: Boolean,
      required: false,
      default: false
    },
    mode: {
      type: String,
      required: false,
      default: 'inline'
    },
    theme: {
      type: String,
      required: false,
      default: 'dark'
    },
    collapsible: {
      type: Boolean,
      required: false,
      default: false
    },
    collapsed: {
      type: Boolean,
      required: false,
      default: false
    },
    menus: {
      type: Array,
      required: true
    }
  },
  methods: {
    onSelect(obj) {
      this.$emit('menuSelect', obj)
    }
  }
}
</script>
