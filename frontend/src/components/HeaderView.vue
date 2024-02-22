<script>
export default {
  name: "HeaderView",
  data() {
    return {
      breadcrumbList: []
    }
  },
  mounted() {
    this.breadcrumbList = this.$route.matched;
  },
  watch: {
    $route() {
      this.breadcrumbList = this.$route.matched;
    }
  },
}
</script>

<template>
  <div class="header-area">
    <div class="header-breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item v-for="item in breadcrumbList" v-if="item.meta.title && item.meta.title === '首页'"
                            :to="{ path: '/' }" :key="item.path">
          {{ item.meta.title }}
        </el-breadcrumb-item>
        <el-breadcrumb-item v-for="item in breadcrumbList" v-if="item.meta.title && item.meta.title !== '首页'"
                            :key="item.path">
          {{ item.meta.title }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="header-user">
      <el-dropdown placement="bottom" trigger="click">
        <div class="header-user-area">
          <svg-icon-view class="header-user-icon" icon-file-name="user"/>
          <span>admin</span>
        </div>
        <el-dropdown-menu v-slot="dropdown" style="color: #000000">
          <el-dropdown-item>个人信息</el-dropdown-item>
          <el-dropdown-item>修改密码</el-dropdown-item>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<style lang="less" scoped>
.header-area {
  display: flex;
  height: 100%;
}

.header-breadcrumb {
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
}

/deep/ .el-breadcrumb__inner.is-link:hover {
  color: #F1D792;
}

.header-user {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;

  .header-user-icon {
    color: #000000;
    margin-right: 5px;
  }

  span {
    color: #000000;
    font-size: 14px;
    font-weight: bold;
  }
}

.header-user-area:hover {
  .header-user-icon,
  span {
    color: #F1D792;
  }
}

/deep/ .el-dropdown-menu__item:hover {
  color: #F1D792;
}
</style>