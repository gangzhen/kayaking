<script>
export default {
  name: "Error403"
}
</script>

<template>
  <div class="main-area">
    <div class="main-area-error">
      <h1>403 - 无权访问</h1>
      <p>抱歉，您无权访问该页面。</p>
    </div>
  </div>
</template>

<style lang="less" scoped>
.main-area-error {
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: #CE111A;
  color: #F1D792;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>