<script>
import MenuView from "@/components/MenuView.vue";

export default {
  name: "AsideView",
  components: {MenuView},
  data() {
    return {
      activeIndex: this.$route.path,
      menuArr: [
        {
          name: "首页",
          path: "/",
          icon: "home",
          children: [
            {
              name: "中国皮划艇协会竞赛管理系统",
              path: "/web/system",
              icon: "system",
              children: []
            },
          ],
        },
        {
          name: "教练员",
          path: "教练员",
          icon: "coach",
          children: [
            {
              name: "大众青少年皮划艇静水",
              path: "大众青少年皮划艇静水",
              icon: "mass_youth",
              children: [
                {
                  name: "年度注册",
                  path: "/web/404",
                  icon: "register",
                  children: []
                },
                {
                  name: "培训信息与报名",
                  path: "/web/404",
                  icon: "training",
                  children: []
                },
                {
                  name: "教练员信息",
                  path: "/web/404",
                  icon: "information",
                  children: []
                },
              ],
            },
            {
              name: "公开水域皮划艇",
              path: "公开水域皮划艇",
              icon: "open_water",
              children: [
                {
                  name: "年度注册",
                  path: "/web/404",
                  icon: "register",
                  children: []
                },
                {
                  name: "培训信息与报名",
                  path: "/web/404",
                  icon: "training",
                  children: []
                },
                {
                  name: "教练员信息",
                  path: "/web/404",
                  icon: "information",
                  children: []
                },
              ],
            },
          ],
        },
        {
          name: "裁判员",
          path: "裁判员",
          icon: "referee",
          children: [
            {
              name: "大众青少年皮划艇静水",
              path: "大众青少年皮划艇静水",
              icon: "mass_youth",
              children: [
                {
                  name: "年度注册",
                  path: "/web/404",
                  icon: "register",
                  children: []
                },
                {
                  name: "培训信息与报名",
                  path: "/web/404",
                  icon: "training",
                  children: []
                },
                {
                  name: "比赛派遣",
                  path: "/web/404",
                  icon: "dispatch",
                  children: []
                },
              ],
            },
            {
              name: "公开水域皮划艇",
              path: "公开水域皮划艇",
              icon: "open_water",
              children: [
                {
                  name: "年度注册",
                  path: "/web/404",
                  icon: "register",
                  children: []
                },
                {
                  name: "培训信息",
                  path: "/web/404",
                  icon: "training",
                  children: []
                },
                {
                  name: "比赛派遣",
                  path: "/web/404",
                  icon: "dispatch",
                  children: []
                },
              ],
            },
          ],
        },
        {
          name: "运动员",
          path: "运动员",
          icon: "athlete",
          children: [
            {
              name: "大众青少年皮划艇静水",
              path: "大众青少年皮划艇静水",
              icon: "mass_youth",
              children: [
                {
                  name: "年度注册",
                  path: "/web/404",
                  icon: "register",
                  children: []
                },
              ],
            },
            {
              name: "公开水域皮划艇",
              path: "公开水域皮划艇",
              icon: "open_water",
              children: [
                {
                  name: "年度注册",
                  path: "/web/404",
                  icon: "register",
                  children: []
                },
              ],
            },
          ],
        },
        {
          name: "赛事信息",
          path: "赛事信息",
          icon: "competition",
          children: [
            {
              name: "大众青少年皮划艇静水",
              path: "大众青少年皮划艇静水",
              icon: "mass_youth",
              children: [
                {
                  name: "年度赛事日历公告",
                  path: "/web/404",
                  icon: "calendar",
                  children: []
                },
                {
                  name: "赛事信息与报名",
                  path: "/web/404",
                  icon: "sign_up",
                  children: []
                },
              ],
            },
            {
              name: "公开水域皮划艇",
              path: "公开水域皮划艇",
              icon: "open_water",
              children: [
                {
                  name: "年度赛事日历公告",
                  path: "/web/404",
                  icon: "calendar",
                  children: []
                },
                {
                  name: "赛事信息与报名",
                  path: "/web/404",
                  icon: "sign_up",
                  children: []
                },
              ],
            },
          ],
        },
        {
          name: "竞赛成绩公告",
          path: "竞赛成绩公告",
          icon: "results_notice",
          children: [
            {
              name: "大众青少年皮划艇静水",
              path: "/web/404",
              icon: "mass_youth",
              children: [],
            },
            {
              name: "公开水域皮划艇",
              path: "/web/404",
              icon: "open_water",
              children: [],
            },
          ],
        },
        {
          name: "积分赛事信息",
          path: "积分赛事信息",
          icon: "points",
          children: [
            {
              name: "大众青少年皮划艇静水",
              path: "大众青少年皮划艇静水",
              icon: "mass_youth",
              children: [
                {
                  name: "积分排行榜",
                  path: "/web/404",
                  icon: "ranking",
                  children: []
                },
                {
                  name: "运动员信息",
                  path: "/web/404",
                  icon: "athlete_information",
                  children: []
                },
                {
                  name: "运动员参赛人数统计（年）",
                  path: "运动员参赛人数统计（年）",
                  icon: "statistic",
                  children: [
                    {
                      name: "留榜运动员相关信息",
                      path: "留榜运动员相关信息",
                      icon: "retention",
                      children: [
                        {
                          name: "留榜运动员名单",
                          path: "/web/404",
                          icon: "nameList",
                          children: []
                        },
                        {
                          name: "留榜人数统计",
                          path: "/web/404",
                          icon: "number",
                          children: []
                        },
                        {
                          name: "留榜率",
                          path: "/web/404",
                          icon: "rate",
                          children: []
                        },
                      ]
                    },
                    {
                      name: "新入榜运动员相关信息",
                      path: "新入榜运动员相关信息",
                      icon: "entry",
                      children: [
                        {
                          name: "新入榜运动员名单",
                          path: "/web/404",
                          icon: "nameList",
                          children: []
                        },
                        {
                          name: "新入榜人数统计",
                          path: "/web/404",
                          icon: "number",
                          children: []
                        },
                        {
                          name: "新入榜率",
                          path: "/web/404",
                          icon: "rate",
                          children: []
                        },
                      ]
                    }
                  ]
                },
              ],
            },
            {
              name: "公开水域皮划艇",
              path: "公开水域皮划艇",
              icon: "open_water",
              children: [
                {
                  name: "积分排行榜",
                  path: "/web/404",
                  icon: "ranking",
                  children: []
                },
                {
                  name: "运动员信息",
                  path: "/web/404",
                  icon: "athlete_information",
                  children: []
                },
              ]
            },
          ],
        },
        {
          name: "中国皮划艇协会管理相关公告",
          path: "中国皮划艇协会管理相关公告",
          icon: "manage_notice",
          children: [
            {
              name: "大众青少年皮划艇静水",
              path: "大众青少年皮划艇静水",
              icon: "mass_youth",
              children: [
                {
                  name: "裁判员相关公告",
                  path: "/web/404",
                  icon: "referee",
                  children: []
                },
                {
                  name: "教练员相关公告",
                  path: "/web/404",
                  icon: "coach",
                  children: []
                },
                {
                  name: "运动员相关公告",
                  path: "/web/404",
                  icon: "athlete",
                  children: []
                },
                {
                  name: "管理制度与政策相关公告",
                  path: "/web/404",
                  icon: "policy",
                  children: []
                },
              ],
            },
            {
              name: "公开水域皮划艇",
              path: "公开水域皮划艇",
              icon: "open_water",
              children: [
                {
                  name: "裁判员相关公告",
                  path: "/web/404",
                  icon: "referee",
                  children: []
                },
                {
                  name: "教练员相关公告",
                  path: "/web/404",
                  icon: "coach",
                  children: []
                },
                {
                  name: "运动员相关公告",
                  path: "/web/404",
                  icon: "athlete",
                  children: []
                },
                {
                  name: "管理制度与政策相关公告",
                  path: "/web/404",
                  icon: "policy",
                  children: []
                },
              ],
            },
          ],
        },
      ],
    }
  },
  watch: {
    $route() {
      this.activeIndex = this.$route.path;
    }
  },
  methods: {
    goHome() {
      this.$router.push('/')
    },
    menuSelect(index) {
      this.activeIndex = index;
    },
  }
}
</script>

<template>
  <div class="aside-area">
    <div class="aside-logo">
      <img class="aside-logo-img" src="@/assets/img/logo.png" alt="" @click="goHome()">
    </div>
    <div class="aside-title">
      <span @click="goHome()">中国皮划艇协会竞赛管理系统</span>
    </div>
    <div class="aside-menu">
      <el-menu
          background-color="#CE111A"
          text-color="#FFFFFF"
          active-text-color="#F1D792"
          :default-active="activeIndex"
          :unique-opened="true"
          router
          ref="elMenu"
          @select="menuSelect"
      >
        <MenuView :data="menuArr"/>
      </el-menu>
    </div>
  </div>
</template>

<style lang="less" scoped>
.aside-area {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: scroll;
}

.aside-logo {
  display: flex;
  flex: none;
  justify-content: center;
  align-items: center;
  height: 120px;
  cursor: pointer;
}

.aside-logo-img {
  width: 70px;
  height: 70px;
  border-radius: 8px;
  box-shadow: 2px 0 6px rgba(0, 21, 41, .35);
}

.aside-title {
  display: flex;
  flex: none;
  justify-content: center;
  align-items: center;
  height: 60px;
  color: #FFFFFF;
  font-size: 18px;
  font-weight: bolder;
  cursor: pointer;
}

.aside-menu {
  display: flex;
  flex: 1;
  overflow-y: scroll;
}

::-webkit-scrollbar {
  display: none;
}

/deep/ .el-menu {
  border: none;
  width: 100%;
}
</style>