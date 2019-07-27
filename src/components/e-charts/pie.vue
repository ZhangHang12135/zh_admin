<template>
  <div ref="dom"></div>
</template>
<script>
import echarts from 'echarts'
import { handleOn, handleOff } from '@/lib/tools'
export default {
  name: 'ChartPie',
  data() {
    return {
      dom: null
    }
  },
  props: {
    value: Array,
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
    this.$nextTick(() =>{
      // 从value中提取出name
      let lengend = this.value.map(item => item.name)
      let option = {
        title : {
            text: this.text,
            subtext: this.subtext,
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: lengend
        },
        series : [
            {
                name: this.text,
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:this.value,
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
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

