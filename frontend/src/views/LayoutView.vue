<script>
import AsideView from "@/components/AsideView.vue";
import HeaderView from "@/components/HeaderView.vue";
import MainView from "@/views/main/MainView.vue";

export default {
  name: 'LayoutView',
  components: {MainView, HeaderView, AsideView}
}
</script>

<template>
  <div class="b-layout">
    <el-container>
      <el-aside width="280px">
        <AsideView/>
      </el-aside>
      <el-container>
        <el-header>
          <HeaderView/>
        </el-header>
        <el-main>
          <MainView/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


