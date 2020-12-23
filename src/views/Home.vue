<template>
  <div class="home">
    <div>Home - {{ isRouteTitle }}</div>
    <a-button
      type="primary"
      @click="gotoHome('defaults')"
    >
      defaults
    </a-button>
    <a-button
      type="primary"
      @click="gotoHome('dark')"
    >
      dark
    </a-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component<Home>({
  name: 'Home'
})
export default class Home extends Vue {
  get isRouteTitle() {
    return this.$route.meta.title
  }

  private gotoHome(command) {
    console.log(command)
    document.getElementById('app').className = command
  }
}
</script>

<style lang="less">
.home {
  text-align: center;
}
</style>
