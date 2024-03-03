<script>
export default {
  name: "OWAthleteRanking",
  data() {
    return {
      searchForm: {
        item: '',
        name: '',
        age: '',
        address: '',
        sort: '',
        rankingRange: ''
      },
      tableData: [{
        ranking: '1',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        points: 10000
      }, {
        ranking: '2',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        points: 10000
      }, {
        ranking: '3',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        points: 10000
      }, {
        ranking: '4',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        points: 10000
      }, {
        ranking: '5',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        points: 10000
      }, {
        ranking: '6',
        name: '王小虎王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        points: 10000
      }, {
        ranking: '7',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        points: 10000
      }, {
        ranking: '8',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        points: 10000
      }],
      pageNum: 1,
      pageSize: 8,
      total: 100,
    }
  },
  methods: {
    onSubmit() {
      console.log(1)
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
}
</script>

<template>
  <div class="main-area">
    <div class="main-search-area">
      <el-form :model="searchForm" label-width="80px" :inline="true">
        <el-form-item label="比赛项目">
          <el-input v-model="searchForm.item" placeholder="比赛项目"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="searchForm.name" placeholder="姓名"></el-input>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input v-model="searchForm.age" placeholder="年龄"></el-input>
        </el-form-item>
        <el-form-item label="地区">
          <el-input v-model="searchForm.address" placeholder="地区"></el-input>
        </el-form-item>
        <el-form-item label="排序">
          <el-input v-model="searchForm.sort" placeholder="排序"></el-input>
        </el-form-item>
        <el-form-item label="排名范围">
          <el-input v-model="searchForm.rankingRange" placeholder="排名范围"></el-input>
        </el-form-item>
        <el-form-item style="width: 90px">
          <el-button type="primary" icon="el-icon-search" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="main-table-area">
      <el-table
          height="68vh"
          max-height="68vh"
          :data="tableData"
          stripe
          style="width: 100%">
        <el-table-column prop="ranking" label="排名" width="80" align="center" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="250" align="center" show-overflow-tooltip>
          <template slot-scope="scope">
            <div class="ranking-name-cell">
              <div class="photo-area">
                <img src="https://image.959696.xyz/server/2024/03/03/65e49b8950d0c.webp" alt="" class="photo">
              </div>
              <span class="text">{{ scope.row.name }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="地区" align="center" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="points" label="等级积分" align="center" show-overflow-tooltip>
        </el-table-column>
      </el-table>
    </div>
    <div class="main-page-area">
      <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pageNum"
          :page-size="pageSize"
          :page-sizes="[10, 20, 50, 100]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<style scoped lang="less">
.main-search-area {
  display: flex;
  flex: 2;
  align-items: center;
  padding: 1vh 3vh 0.5vh 3vh;
}

.el-form {
  width: 100%;
  .el-form-item--small {
    margin: 0;
    padding: 0.5vh 0;
    width: 300px;
    font-weight: bold;
    text-align: center;
  }
}

.main-table-area {
  display: flex;
  flex: 15;
  justify-content: center;
  align-items: flex-start;
  padding: 0.5vh 3vh 0.5vh 3vh;
}

.el-table {
  /deep/ th {
    height: 8vh;
    font-size: 16px;
    font-weight: bolder;
    color: #000000;
    background-color: #EEF1F6 !important;
  }
  /deep/ tr {
    height: 7.5vh;
    font-size: 14px;
    font-weight: normal;
    color: #606266;
    background-color: #FAFAFA !important;
  }
}

.ranking-name-cell {
  display: flex;
  align-items: center; /* 垂直居中对齐 */
}

.photo-area {
  display: flex;
  flex: 1;
  justify-content: flex-end;
  margin-right: 10px; /* 调整图片和文字之间的间距 */
}

.photo {
  border-radius: 50%;
  width: 40px;
  height: 40px;
}

.text {
  flex: 1; /* 让文字自动占据剩余空间 */
  text-align: left;
}

.main-page-area {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0.5vh 3vh 1vh 3vh;
}
</style>