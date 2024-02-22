<script>
import '../assets/icons'
export default {
  name: "SvgIconView",
  props: {
    iconFileName: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: '#FFFFFF'
    }
  },
  computed: {
    style() {
      return { "--color": this.color };
    }
  }
}
</script>

<template>
  <i v-if="iconFileName.indexOf('el-icon-') === 0" :class="iconFileName" />
  <svg v-else class="svg-icon" aria-hidden="true" v-on="$listeners" :style="style">
    <use :xlink:href="`#icon-${iconFileName}`" rel="external nofollow"  />
  </svg>
</template>

<style lang="less" scoped>
.svg-icon {
  width: 1.1em;
  height: 1.1em;
  overflow: hidden;
  vertical-align: -0.15em;
  fill: currentColor;
  color: var(--color);
}
</style>