<script>
import SvgIconView from "@/components/SvgIconView.vue";

export default {
  name: "MenuView",
  components: {SvgIconView},
  props: {
    data: {
      type: Array,
      default: [],
    },
  }
}
</script>

<template>
  <div class="menu-area">
    <template v-for="(item, index) in data">
      <!-- 因为有子集和无子集渲染html标签不一样，所以要分为两种情况 -->
      <!-- 情况一：有子集的情况： -->
      <el-submenu :key="index" :index="item.path" v-if="item.children.length > 0">
        <template slot="title">
          <svg-icon-view class="menu-icon" :icon-file-name="item.icon"/>
          <span>{{ item.name }}</span>
        </template>
        <MenuView :data="item.children"/>
      </el-submenu>
      <!-- 情况二：没子集的情况： -->
      <el-menu-item :key="index" v-else :index="item.path">
        <template slot="title">
          <svg-icon-view class="menu-icon" :icon-file-name="item.icon"/>
          <span>{{ item.name }}</span>
        </template>
      </el-menu-item>
    </template>
  </div>
</template>

<style scoped lang="less">
.menu-area {
  width: 100%;
  height: 100%;
  font-weight: bold;
}

.menu-icon {
  margin-right: 8px;
  color: #FFFFFF;
}

/deep/ .el-submenu__title {
  i {
    color: #FFFFFF;
  }
}

/deep/ .el-submenu__title:hover,
/deep/ .el-menu-item:hover {
  color: #F1D792 !important;

  .menu-icon {
    color: #F1D792;
  }

  i {
    color: #F1D792;
  }
}

.el-menu-item.is-active {
  background-color: #114F9E !important;
  font-weight: bolder;
  border-radius: 6px;
  margin: 4px;

  .menu-icon {
    margin-left: -4px;
    color: #F1D792;
  }
}
</style>