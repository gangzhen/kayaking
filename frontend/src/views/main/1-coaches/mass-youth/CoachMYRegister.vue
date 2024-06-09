<script>
export default {
  name: "CoachMYRegister",
  data() {
    return {
      searchForm: {},
      tableData: [
        {
          ranking: '1',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          points: 10000
        }
      ],
      dialogData: {},
      dialogVisible: false,
      pageNum: 1,
      pageSize: 8,
      total: 100,
    }
  },
  methods: {
    handleAdding() {
      this.dialogVisible = true;
    },
    handleCancel() {
      this.dialogVisible = false;
    },
    handleRegistration() {
      this.dialogVisible = false;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
}
</script>

<template>
  <div class="main-area">
    <div class="main-search-area">
      <el-form :model="searchForm" label-width="80px" :inline="true">
        <el-form-item label="角色">
          <el-input v-model="searchForm.role" placeholder="角色"></el-input>
        </el-form-item>
        <el-form-item style="width: 90px">
          <el-button type="primary" @click="handleAdding">新增</el-button>
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
        <el-table-column prop="number" label="序号" width="80" align="center" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="250" align="center" show-overflow-tooltip>
          <template slot-scope="scope">
            <div class="ranking-name-cell">
<!--              <div class="photo-area">-->
<!--                <img src="https://image.959696.xyz/server/2024/03/03/65e49b8950d0c.webp" class="photo" alt="">-->
<!--              </div>-->
              <span class="text">{{ scope.row.name }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="age" label="年龄" align="center" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="photo" label="照片" align="center" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="level" label="技术等级" align="center" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="address" label="主要任教地点" align="center" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="phone" label="电话号码" align="center" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="email" label="电子邮箱" align="center" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="progress" label="审核进度" align="center" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="operation" label="操作" align="center" show-overflow-tooltip>
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

    <el-dialog
        title="新 增"
        :visible.sync="dialogVisible"
        width="25%"
        :close-on-click-modal="false"
        :show-close="false"
        center>

      <el-form label-width="90px" :model="dialogData">
        <el-form-item label="姓名:" prop="athleteName">
          <!--     不是管理员且没有提交报名     -->
          <el-input v-model="dialogData.athleteName">
          </el-input>
        </el-form-item>
        <el-form-item label="年龄:" prop="athleteIdNumber">
          <el-input v-model="dialogData.athleteIdNumber">
          </el-input>
        </el-form-item>
        <el-form-item label="照片:" prop="competitionId">
          <el-select v-model="dialogData.competitionId" placeholder="请选择赛事" @change="handleCompetitionInfo">
            <el-option v-for="option in dialogData.competitionOptions"
                       :key="option.id"
                       :label="option.competition"
                       :value="option.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="技术等级:" prop="level">
          <el-select v-model="dialogData.level" placeholder="请选择赛事级别">
            <el-option v-for="option in $levelOptions"
                       :key="option.value"
                       :label="option.label"
                       :value="option.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="主要任教地点:" prop="region">
          <el-select v-model="dialogData.region" placeholder="请选择赛事地区">
            <el-option v-for="option in $regionOptions"
                       :key="option.value"
                       :label="option.label"
                       :value="option.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="电话号码:" prop="reason" v-if="dialogReasonVisible">
          <el-input type="textarea" v-model="dialogData.reason"></el-input>
        </el-form-item>
        <el-form-item label="电子邮箱:" prop="reason" v-if="dialogReasonVisible">
          <el-input type="textarea" v-model="dialogData.reason"></el-input>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click.native="handleCancel">关 闭</el-button>
        <el-button type="primary" @click.native="handleRegistration">报 名</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<style scoped lang="less">
.main-search-area {
  display: flex;
  flex: 2;
  align-items: center;
  justify-content: flex-end;
  padding: 1vh 3vh 0.5vh 3vh;
}

.main-table-area {
  display: flex;
  flex: 15;
  justify-content: center;
  align-items: flex-start;
  padding: 0.5vh 3vh 0.5vh 3vh;
}

.main-page-area {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0.5vh 3vh 1vh 3vh;
}
</style>