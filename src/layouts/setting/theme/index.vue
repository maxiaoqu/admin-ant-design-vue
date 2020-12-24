<template>
  <div
    ref="settingDrawer"
    class="setting-drawer"
  >
    <div class="setting-drawer-index-content">
      <div :style="{marginBottom: '24px'}">
        <h3 class="setting-drawer-index-title">
          整体风格设置
        </h3>
        <div class="setting-drawer-index-blockChecbox">
          <a-tooltip>
            <template slot="title">
              暗色菜单风格
            </template>
            <div
              class="setting-drawer-index-item"
              @click="handleMenuTheme('dark')"
            >
              <img
                src="https://gw.alipayobjects.com/zos/rmsportal/LCkqqYNmvBEbokSDscrm.svg"
                alt="dark"
              >
              <div
                v-if="navTheme === 'dark'"
                class="setting-drawer-index-selectIcon"
              >
                <a-icon type="check"/>
              </div>
            </div>
          </a-tooltip>

          <a-tooltip>
            <template slot="title">
              亮色菜单风格
            </template>
            <div
              class="setting-drawer-index-item"
              @click="handleMenuTheme('light')"
            >
              <img
                src="https://gw.alipayobjects.com/zos/rmsportal/jpRkZQMyYRryryPNtyIC.svg"
                alt="light"
              >
              <div
                v-if="navTheme !== 'dark'"
                class="setting-drawer-index-selectIcon"
              >
                <a-icon type="check"/>
              </div>
            </div>
          </a-tooltip>
        </div>
      </div>

      <div :style="{marginBottom: '24px'}">
        <h3 class="setting-drawer-index-title">
          主题色
        </h3>

        <div style="height: 20px">
          <a-tooltip
            v-for="(item, index) in colorList"
            :key="index"
            class="setting-drawer-theme-color-colorBlock"
          >
            <template slot="title">
              {{ item.key }}
            </template>
            <a-tag
              :color="item.color"
              @click="changeColor(item.color)"
            >
              <a-icon
                v-if="item.color === primaryColor"
                type="check"
              />
            </a-tag>
          </a-tooltip>
        </div>
      </div>
      <a-divider/>

      <div :style="{marginBottom: '24px'}">
        <h3 class="setting-drawer-index-title">
          导航模式
        </h3>

        <div class="setting-drawer-index-blockChecbox">
          <a-tooltip>
            <template slot="title">
              侧边栏导航
            </template>
            <div
              class="setting-drawer-index-item"
              @click="handleLayout('sidemenu')"
            >
              <img
                src="https://gw.alipayobjects.com/zos/rmsportal/JopDzEhOqwOjeNTXkoje.svg"
                alt="sidemenu"
              >
              <div
                v-if="layoutMode === 'sidemenu'"
                class="setting-drawer-index-selectIcon"
              >
                <a-icon type="check"/>
              </div>
            </div>
          </a-tooltip>

          <a-tooltip>
            <template slot="title">
              顶部栏导航
            </template>
            <div
              class="setting-drawer-index-item"
              @click="handleLayout('topmenu')"
            >
              <img
                src="https://gw.alipayobjects.com/zos/rmsportal/KDNDBbriJhLwuqMoxcAr.svg"
                alt="topmenu"
              >
              <div
                v-if="layoutMode !== 'sidemenu'"
                class="setting-drawer-index-selectIcon"
              >
                <a-icon type="check"/>
              </div>
            </div>
          </a-tooltip>
        </div>
        <div :style="{marginTop: '24px'}">
          <a-list :split="false">
            <a-list-item>
              <a-tooltip slot="actions">
                <template slot="title">
                  该设定仅 [顶部栏导航] 时有效
                </template>
                <a-select
                  size="small"
                  style="width: 80px;"
                  :default-value="contentWidth"
                  @change="handleContentWidthChange"
                >
                  <a-select-option value="Fixed">
                    固定
                  </a-select-option>
                  <a-select-option
                    v-if="layoutMode !== 'sidemenu'"
                    value="Fluid"
                  >
                    流式
                  </a-select-option>
                </a-select>
              </a-tooltip>
              <a-list-item-meta>
                <div slot="title">
                  内容区域宽度
                </div>
              </a-list-item-meta>
            </a-list-item>
            <a-list-item>
              <a-switch
                slot="actions"
                size="small"
                :default-checked="fixedHeader"
                @change="handleFixedHeader"
              />
              <a-list-item-meta>
                <div slot="title">
                  固定 Header
                </div>
              </a-list-item-meta>
            </a-list-item>
            <a-list-item>
              <a-switch
                slot="actions"
                size="small"
                :disabled="!fixedHeader"
                :default-checked="autoHideHeader"
                @change="handleFixedHeaderHidden"
              />
              <a-list-item-meta>
                <a-tooltip
                  slot="title"
                  placement="left"
                >
                  <template slot="title">
                    固定 Header 时可配置
                  </template>
                  <div :style="{opacity: !fixedHeader ? '0.5' : '1'}">
                    下滑时隐藏 Header
                  </div>
                </a-tooltip>
              </a-list-item-meta>
            </a-list-item>
            <a-list-item>
              <a-switch
                slot="actions"
                size="small"
                :disabled="(layoutMode === 'topmenu')"
                :default-checked="fixSiderbar"
                @change="handleFixSiderbar"
              />
              <a-list-item-meta>
                <div
                  slot="title"
                  :style="{textDecoration: layoutMode === 'topmenu' ? 'line-through' : 'unset'}"
                >
                  固定侧边菜单
                </div>
              </a-list-item-meta>
            </a-list-item>
          </a-list>
        </div>
      </div>
      <a-divider/>

      <div :style="{marginBottom: '24px'}">
        <h3 class="setting-drawer-index-title">
          其他设置
        </h3>
        <div>
          <a-list :split="false">
            <a-list-item>
              <a-switch
                slot="actions"
                size="small"
                :default-checked="colorWeak"
                @change="onColorWeak"
              />
              <a-list-item-meta>
                <div slot="title">
                  色弱模式
                </div>
              </a-list-item-meta>
            </a-list-item>
            <a-list-item>
              <a-switch
                slot="actions"
                size="small"
                :default-checked="multiTab"
                @change="onMultiTab"
              />
              <a-list-item-meta>
                <div slot="title">
                  多页签模式
                </div>
              </a-list-item-meta>
            </a-list-item>
          </a-list>
        </div>
      </div>
      <a-divider/>
      <div :style="{marginBottom: '24px'}">
        <a-button
          icon="copy"
          block
          @click="doCopy"
        >
          拷贝设置
        </a-button>
        <a-alert
          type="warning"
          :style="{marginTop: '24px'}"
        >
            <span slot="message">
              配置栏只在开发环境用于预览，生产环境不会展现，请手动修改配置文件
              <a
                href="https://github.com/sendya/ant-design-pro-vue/blob/master/src/config/defaultSettings.js"
                target="_blank"
              >src/config/defaultSettings.js</a>
            </span>
        </a-alert>
      </div>
    </div>
  </div>
</template>

<script>
import SettingItem from './SettingItem'
import config from '@/dictionary/defaultTheme'
import {ThemeModule} from '@/store/modules/theme'
import {updateTheme, updateColorWeak, colorList} from './settingConfig'

export default {
  components: {
    SettingItem
  },
  data() {
    return {
      colorList,
      handle: <div/>,
      primaryColor: ThemeModule.color,
      navTheme: ThemeModule.theme,
      layoutMode: ThemeModule.layout,
      contentWidth: ThemeModule.contentWidth,
      fixedHeader: ThemeModule.fixedHeader,
      fixSiderbar: ThemeModule.fixSiderbar,
      autoHideHeader: ThemeModule.autoHideHeader,
      colorWeak: ThemeModule.weak,
      multiTab: ThemeModule.multiTab
    }
  },
  mounted() {
    updateTheme(this.primaryColor)
    if (this.colorWeak !== config.colorWeak) {
      updateColorWeak(this.colorWeak)
    }
  },
  methods: {
    onColorWeak(checked) {
      ThemeModule.ToggleWeak(checked)
      updateColorWeak(checked)
    },
    onMultiTab(checked) {
      ThemeModule.ToggleMultiTab(checked)
    },
    handleMenuTheme(theme) {
      ThemeModule.ToggleTheme(theme)
    },
    doCopy() {
      // get current settings from mixin or this.$store.state.app, pay attention to the property name
      const text = `export default {
        primaryColor: '${this.primaryColor}', // primary color of ant design
        navTheme: '${this.navTheme}', // theme for nav menu
        layout: '${this.layoutMode}', // nav menu position: sidemenu or topmenu
        contentWidth: '${this.contentWidth}', // layout of content: Fluid or Fixed, only works when layout is topmenu
        fixedHeader: ${this.fixedHeader}, // sticky header
        fixSiderbar: ${this.fixSiderbar}, // sticky siderbar
        autoHideHeader: ${this.autoHideHeader}, //  auto hide header
        colorWeak: ${this.colorWeak},
        multiTab: ${this.multiTab},
        production: process.env.NODE_ENV === 'production' && process.env.VUE_APP_PREVIEW !== 'true',
        // vue-ls options
        storageOptions: {
          namespace: 'pro__',
          name: 'ls',
          storage: 'local',
        }
      }`
      this.$copyText(text).then(message => {
        console.log('copy', message)
        this.$message.success('复制完毕')
      }).catch(err => {
        console.log('copy.err', err)
        this.$message.error('复制失败')
      })
    },
    handleLayout(mode) {
      ThemeModule.ToggleLayoutMode(mode)
      // 因为顶部菜单不能固定左侧菜单栏，所以强制关闭
      this.handleFixSiderbar(false)
    },
    handleContentWidthChange(type) {
      ThemeModule.ToggleContentWidth(type)
    },
    changeColor(color) {
      if (this.primaryColor !== color) {
        ThemeModule.ToggleColor(color)
        updateTheme(color)
      }
    },
    handleFixedHeader(fixed) {
      ThemeModule.ToggleFixedHeader(fixed)
    },
    handleFixedHeaderHidden(autoHidden) {
      ThemeModule.ToggleFixedHeaderHidden(autoHidden)
    },
    handleFixSiderbar(fixed) {
      if (this.layoutMode === 'topmenu') {
        ThemeModule.ToggleFixSiderbar(false)
        return
      }
      ThemeModule.ToggleFixSiderbar(fixed)
    }
  }
}
</script>

<style lang="less" scoped>
.setting-drawer {
  width: 100%;
  height: 100%;
}

.setting-drawer-index-content {
  .setting-drawer-index-blockChecbox {
    display: flex;

    .setting-drawer-index-item {
      margin-right: 16px;
      position: relative;
      border-radius: 4px;
      cursor: pointer;

      img {
        width: 48px;
      }

      .setting-drawer-index-selectIcon {
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        padding-top: 15px;
        padding-left: 24px;
        height: 100%;
        color: #1890ff;
        font-size: 14px;
        font-weight: 700;
      }
    }
  }

  .setting-drawer-theme-color-colorBlock {
    width: 20px;
    height: 20px;
    border-radius: 2px;
    float: left;
    cursor: pointer;
    margin-right: 8px;
    padding-left: 0px;
    padding-right: 0px;
    text-align: center;
    color: #fff;
    font-weight: 700;

    i {
      font-size: 14px;
    }
  }
}
</style>
