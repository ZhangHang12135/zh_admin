<template>
  <div ref="dom"></div>
</template>
<script>
import echarts from 'echarts'
import { handleOn, handleOff } from '@/lib/tools'
export default {
  name: 'ChartBar',
  data() {
    return {
      dom: null
    }
  },
  props: {
    value: Object,
    text: String,
    subText: {
      type: String,
      default: ''
    }
  },
  methods: {
    resize () {
      if (this.dom) this.dom.resize()
      else console.log('undefind dom')
    }
  },
  mounted () {
    console.log(this.barColor)
    this.$nextTick(() =>{
      // 横坐标
      let xAxisData = Object.keys(this.value)
      // 对应值
      let seriesData = Object.values(this.value)
      let option = {
        title : {
            text: this.text,
            subtext: this.subtext,
            x:'center'
        },
        tooltip : {
            trigger: 'axis',
            formatter: "{b} : {c}"
        },
        xAxis: {
          type: 'category',
          data: xAxisData
        },
        yAxis: {
          type: 'value'
        },
        series : [{
          data: seriesData,
          type: 'bar',
          itemStyle: {
            normal: {
              color: function (params) {
                let colorList = ['#2d8cf0', '#ff9900','#19be6b','#ed3f14','#E46CBB','#9A66E4']
                return colorList[params.dataIndex]
              }
            }
          }
      }]
      }
      this.dom = echarts.init(this.$refs.dom)
      this.dom.setOption(option)
      handleOn(window, 'resize', this.resize)
    })
  },
  beforeDestroy () {
    handleOff(window, 'resize', this.resize)
  }
}
</script>
<style lang="less">
.chart{
  width: 100%;
  height: 100%;
}
</style>

