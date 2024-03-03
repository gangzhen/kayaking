<script>
export default {
  name: "MYRetentionNumber",
  data() {
    return {
      chartXData: ['2013', '2014', '2015', '2016', '2017', '2018', '2019'],
      chartYData: [10, 52, 200, 334, 390, 330, 220],
    }
  },
  mounted() {
    this.onSearch();
  },
  methods: {
    onSearch() {
      this.drawChart();
    },
    drawChart() {
      var chartDom = document.getElementById('chartsRetention');
      var myChart = this.$echarts.init(chartDom);
      var option =  {
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
            type: 'bar'
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
    <div class="main-charts-area" id="chartsRetention"></div>
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