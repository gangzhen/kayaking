<script>
export default {
  name: "Error404"
}
</script>

<template>
  <div class="main-area">
    <div class="main-area-error">
      <h1>404 - 页面未找到</h1>
      <p>抱歉，您访问的页面不存在。</p>
    </div>
  </div>
</template>

<style scoped>
.main-area-error {
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: #114F9E;
  color: #CE111A;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>