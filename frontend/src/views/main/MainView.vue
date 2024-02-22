<script>
export default {
  name: "MainView"
}
</script>

<template>
  <div class="main-view">
    <router-view/>
  </div>
</template>

<style scoped lang="less">
.main-view {
  width: 100%;
  height: 100%;
  box-shadow: 2px 0 6px rgba(0, 21, 41, .15);
  overflow: hidden;
}
</style>