<template>
  <div class="logo">
    <router-link :to="{name: 'dashboard'}">
      <h1 v-if="showTitle">
        {{ title }}
      </h1>
    </router-link>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'

@Component<Logo>({
  name: 'Logo'
})

export default class Logo extends Vue {
  @Prop({default: 'XXX平台'}) public title!: string
  @Prop({default: true}) public showTitle!: boolean
}
</script>
