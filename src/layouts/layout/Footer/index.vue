<template>
  <div class="footer">
    <div class="links">
      <a href="https://github.com/maxiaoqu/admin-ant-design-vue"
         target="_blank">
        <a-icon type="github"/>
      </a>
      <a href="https://timi.design/">Timi Design</a>
      <a href="https://maxiaoqu.com/">Maxiaoqu</a>
    </div>
    <div class="copyright">
      Copyright
      <a-icon type="copyright"/>
      2018-2020 <span>码小趣工作室</span>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'

@Component<LayerFooter>({
  name: 'LayerFooter'
})

export default class LayerFooter extends Vue {

}
</script>

<style lang="less" scoped>
.footer {
  padding: 0 16px;
  margin: 48px 0 24px;
  text-align: center;

  .links {
    margin-bottom: 8px;

    a {
      color: rgba(0, 0, 0, 0.45);

      &:hover {
        color: rgba(0, 0, 0, 0.65);
      }

      &:not(:last-child) {
        margin-right: 40px;
      }
    }
  }

  .copyright {
    color: rgba(0, 0, 0, 0.45);
    font-size: 14px;
  }
}
</style>
