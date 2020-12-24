<template>
  <div class="admin">
    382
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'

@Component<Admin>({
  name: 'Admin',
  components: {}
})

export default class Admin extends Vue {
  get isRouteTitle() {
    return this.$route.meta.title
  }
}
</script>

<style lang="less">
.admin {
  width: 100%;
  height: 100%;
}
</style>
