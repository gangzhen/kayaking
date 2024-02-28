<script>
export default {
  name: "MYEntryNameList",
  data() {
    return {
      tableData: [{
        ranking: '1',
        name: '王小虎',
        gender: '男',
        birthday: '2016-07-01',
        address: '上海市',
        unit: '皮划艇协会',
        points: 10000
      },{
        ranking: '1',
        name: '王小虎',
        gender: '男',
        birthday: '2016-07-01',
        address: '上海市',
        unit: '皮划艇协会',
        points: 10000
      },{
        ranking: '1',
        name: '王小虎',
        gender: '男',
        birthday: '2016-07-01',
        address: '上海市',
        unit: '皮划艇协会',
        points: 10000
      },{
        ranking: '1',
        name: '王小虎',
        gender: '男',
        birthday: '2016-07-01',
        address: '上海市',
        unit: '皮划艇协会',
        points: 10000
      },{
        ranking: '1',
        name: '王小虎',
        gender: '男',
        birthday: '2016-07-01',
        address: '上海市',
        unit: '皮划艇协会',
        points: 10000
      },{
        ranking: '1',
        name: '王小虎',
        gender: '男',
        birthday: '2016-07-01',
        address: '上海市',
        unit: '皮划艇协会',
        points: 10000
      },{
        ranking: '1',
        name: '王小虎',
        gender: '男',
        birthday: '2016-07-01',
        address: '上海市',
        unit: '皮划艇协会',
        points: 10000
      },{
        ranking: '1',
        name: '王小虎',
        gender: '男',
        birthday: '2016-07-01',
        address: '上海市',
        unit: '皮划艇协会',
        points: 10000
      },{
        ranking: '1',
        name: '王小虎',
        gender: '男',
        birthday: '2016-07-01',
        address: '上海市',
        unit: '皮划艇协会',
        points: 10000
      },{
        ranking: '1',
        name: '王小虎',
        gender: '男',
        birthday: '2016-07-01',
        address: '上海市',
        unit: '皮划艇协会',
        points: 10000
      },],
      searchForm: {
        year: '2019',
        name: '',
        age: '',
        competition: '',
        address: '',
        level: '',
        group: ''
      },
      pageNum: 1,
      pageSize: 10,
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
  }
}
</script>

<template>
<div class="main-area">
  <div class="main-search-area">
    <el-form :model="searchForm" :inline="true">
      <el-form-item>
        <el-date-picker
            v-model="searchForm.year"
            type="year"
            placeholder="选择年份">
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-input v-model="searchForm.name" placeholder="选手姓名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="searchForm.age" placeholder="年龄"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="searchForm.competition" placeholder="赛事名称"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="searchForm.address" placeholder="选手所在地"></el-input>
      </el-form-item>
      <el-form-item>
        <el-select v-model="searchForm.level"
                   placeholder="赛事级别"
                   clearable>
          <el-option v-for="option in $groupOptions"
                     :key="option.value"
                     :label="option.label"
                     :value="option.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-input v-model="searchForm.group" placeholder="赛事组别"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" @click="onSubmit"></el-button>
        <el-button type="danger" @click="onSubmit">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
  <div class="main-table-area">
    <el-table
        height="66vh"
        max-height="66vh"
        :data="tableData"
        stripe
        style="width: 100%">
      <el-table-column prop="ranking" label="排名" align="center" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="name" label="姓名" align="center" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="gender" label="性别" align="center" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="birthday" label="出生日期" align="center" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="address" label="省市" align="center" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="unit" label="代表单位" align="center" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="points" label="积分" align="center" show-overflow-tooltip>
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
  justify-content: flex-start;
  align-items: center;
  padding: 5px 20px;
}

.el-input,
.el-date-editor.el-input,
/deep/ .el-select.el-select--small{
  width: 200px;
}

.main-table-area {
  display: flex;
  flex: 8;
  justify-content: center;
  align-items: flex-start;
  padding: 0 20px;
}

.main-page-area {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
}
</style>