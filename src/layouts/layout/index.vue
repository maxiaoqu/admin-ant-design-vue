<template>
  <div class="layout index">
    <div class="layout-left">
      <router-list />
    </div>
    <div class="layout-right">
      <h4>
        【大屏端】这里是公用的头部
      </h4>
      <main class="layout-box">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import RouterList from '@/layouts/layout/components/routerList.vue'

  @Component<Index>({
    name: 'Index',
    components: { RouterList }
  })
export default class Index extends Vue {

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