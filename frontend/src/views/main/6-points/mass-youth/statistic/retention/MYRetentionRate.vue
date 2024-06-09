<script>
export default {
  name: "MYRetentionRate",
  data() {
    return {
      chartXData: ['2013', '2014', '2015', '2016', '2017', '2018', '2019'],
      chartYData: [7.3998, 7.3816, 7.3786, 7.4081, 9.3325, 7.3741, 7.4517],
    }
  },
  mounted() {
    this.handleSearch();
  },
  methods: {
    handleSearch() {
      this.drawChart();
    },
    drawChart() {
      var chartDom = document.getElementById('chartsRetentionRate');
      var myChart = this.$echarts.init(chartDom);
      var option = {
        xAxis: {
          type: 'category',
          data: this.chartXData
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: this.chartYData,
            type: 'line'
          }
        ]
      };
      myChart.setOption(option);
    },
  }
}
</script>

<template>
  <div class="main-area">
    <div class="main-search-area" v-if="false"></div>
    <div class="main-charts-area" id="chartsRetentionRate"></div>
  </div>
</template>

<style scoped lang="less">
.main-search-area {
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  padding: 0 20px;
}

.main-charts-area {
  display: flex;
  flex: 7;
  justify-content: center;
  align-items: center;
}
</style>