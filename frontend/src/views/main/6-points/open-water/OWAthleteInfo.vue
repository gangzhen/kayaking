<script>
export default {
  name: "OWAthleteInfo",
  data() {
    return {
      tableData: [{
        competitionTime: '1',
        competitionName: '王小虎',
        competitionItem: '上海市普陀区金沙江路 1518 弄',
        competitionPoints: 10000
      }, {
        competitionTime: '1',
        competitionName: '王小虎',
        competitionItem: '上海市普陀区金沙江路 1518 弄',
        competitionPoints: 10000
      }, {
        competitionTime: '1',
        competitionName: '王小虎',
        competitionItem: '上海市普陀区金沙江路 1518 弄',
        competitionPoints: 10000
      }, {
        competitionTime: '1',
        competitionName: '王小虎',
        competitionItem: '上海市普陀区金沙江路 1518 弄',
        competitionPoints: 10000
      }, {
        competitionTime: '1',
        competitionName: '王小虎',
        competitionItem: '上海市普陀区金沙江路 1518 弄',
        competitionPoints: 10000
      }, {
        competitionTime: '1',
        competitionName: '王小虎',
        competitionItem: '上海市普陀区金沙江路 1518 弄',
        competitionPoints: 10000
      }, {
        competitionTime: '1',
        competitionName: '王小虎',
        competitionItem: '上海市普陀区金沙江路 1518 弄',
        competitionPoints: 10000
      }, {
        competitionTime: '1',
        competitionName: '王小虎',
        competitionItem: '上海市普陀区金沙江路 1518 弄',
        competitionPoints: 10000
      }],
      athleteInfo: {
        name: '张栋梁',
        ranking: 1,
        photoUrl: 'https://image.959696.xyz/server/2024/03/03/65e49b8950d0c.webp',
        birthAddress: '上海',
        height: '190',
        weight: '80',
        firstYear: '2020',
        level: '1.0'
      },
      pageNum: 1,
      pageSize: 8,
      total: 50,
    }
  },
  methods: {
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
    <div class="main-athleteInfo-ranking-area">
      <div class="ranking-front">
        <div class="athlete-ranking">
          <span>NO.{{ athleteInfo.ranking }}</span>
        </div>
        <div class="athlete-name">
          <span>{{ athleteInfo.name }}</span>
        </div>
      </div>

      <div class="athlete-photo">
        <img :src="athleteInfo.photoUrl" alt="" class="photo">
      </div>
    </div>
    <div class="main-athleteInfo-detail-area">
      <div class="info-column">
        <span class="info-column-title">出生地</span>
        <span class="info-column-value">{{ athleteInfo.birthAddress }}</span>
      </div>
      <div class="info-column">
        <div class="info-column-title">身高</div>
        <div class="info-column-value">{{ athleteInfo.height }}</div>
      </div>
      <div class="info-column">
        <div class="info-column-title">体重</div>
        <div class="info-column-value">{{ athleteInfo.weight }}</div>
      </div>
      <div class="info-column">
        <div class="info-column-title">从事起始年</div>
        <div class="info-column-value">{{ athleteInfo.firstYear }}</div>
      </div>
      <div class="info-column">
        <div class="info-column-title">技术等级</div>
        <div class="info-column-value">{{ athleteInfo.level }}</div>
      </div>
    </div>
    <div class="main-table-title-area">
      <span>积分明细</span>
    </div>
    <div class="main-table-area">
      <el-table
          height="46vh"
          max-height="46vh"
          :data="tableData"
          stripe
          style="width: 100%">
        <el-table-column prop="competitionTime" label="比赛时间" align="center" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="competitionName" label="比赛名称" align="center" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="competitionItem" label="项目" align="center" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="competitionPoints" label="获得积分" align="center" show-overflow-tooltip>
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
.main-athleteInfo-ranking-area {
  display: flex;
  flex: 4;
  justify-content: center;
  align-items: center;
  padding: 1vh 3vh 0.5vh 3vh;
  background-color: #017f94;
}

.ranking-front {
  display: flex;
  flex-direction: column;
  flex: 3;
  width: 100%;
  height: 100%;
}

.athlete-ranking {
  display: flex;
  align-items: flex-start;
  flex: 3;
  color: #EEF1F6;
  font-size: 45px;
  font-weight: bolder;
  font-style: italic;
  letter-spacing: 2px;
}

.athlete-name {
  display: flex;
  align-items: center;
  flex: 1;
  color: #EEF1F6;
  font-size: 25px;
  font-weight: bolder;
  letter-spacing: 2px;
}

.athlete-photo {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
}

.photo {
  width: 125px;
  height: 150px;
}

.main-athleteInfo-detail-area {
  display: flex;
  flex: 2;
}

.info-column {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.info-column-title {
  display: flex;
  flex: 1;
  align-items: flex-end;
  color: #606266;
  font-size: 16px;
  font-weight: bold;
}

.info-column-value {
  display: flex;
  flex: 1;
  align-items: center;
  color: #CE111A;
  font-size: 18px;
}

.main-table-title-area {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
}

.main-table-area {
  display: flex;
  flex: 10;
  justify-content: center;
  align-items: flex-start;
  padding: 0 3vh 0.5vh 3vh;
}

.el-table {
  /deep/ th {
    height: 6vh;
    font-size: 16px;
    font-weight: bolder;
    color: #000000;
    background-color: #EEF1F6 !important;
  }
  /deep/ tr {
    height: 5vh;
    font-size: 14px;
    font-weight: normal;
    color: #606266;
    background-color: #FAFAFA !important;
  }
}

.main-page-area {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0.5vh 3vh 1vh 3vh;
}
</style>