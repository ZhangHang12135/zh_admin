<template>
  <div class="count-to-wrapper">
    <slot name="left"></slot>
    <p class="content-outer">
      <span ref="number" :class="['count-to-unit-text', countClass]" :id="counterId" :style="{color: fontColor}">{{ init }}</span>
      <i :class="['count-to-unit-text', unitClass]">{{ unitText }}</i>
    </p>
    <slot name="right"></slot>
  </div>
</template>
<script>
import CountUp from 'countup'
export default {
  name: 'CountTo',
  data() {
    return {
      counter: null,
      unitText: ''
    }
  },
  props:{
    init: {
      type:Number,
      default: 0
    },
    /**
     * @description 起始值
     */
    startVal: {
      type: Number,
      default: 0
    },
    /**
     * @description 结束值,必须值
     */
    endVal:{
      type: Number,
      required: true
    },
    /**
     * @description 保留几位小数
     */
    decimals: {
      type: Number,
      default: 0
    },
    /**
     * @description 整数和小数之间的符号，默认小数点
     */
    decimal: {
      type: String,
      default: '.'
    },
    /**
     * @description 动画持续时间，单位秒
     */
    duration: {
      type: Number,
      default: 2
    },
    /**
     * @description 动画延迟开始的时间，单位是秒
     */
    delay: {
      type: Number,
      default: 0
    },
    /**
     * @description 是否禁用easing动画效果
     */
    uneasing: {
      type: Boolean,
      default: false
    },
    /**
     * @description 是否使用分组，分组后每三位会用一个符号分隔
     */
    usegroup: {
      type: Boolean,
      default: false
    },
    /**
     * @description 用于分组(usegroup)的符号
     */
    separator: {
      type: String,
      default: ','
    },
    /**
     * @description 是否简化显示，设为true后会使用unit单位来做相关省略
     */
    simplify: {
      type: Boolean,
      default: false
    },
    /**
     * @description 自定义单位，如[3, 'K+'], [6, 'M+']即大于3位数小于6位数的用k+来做省略
     *              1000即显示为1K+
     */
    unit: {
      type: Array,
      default () {
        return [[3, 'K+'], [6, 'M+'], [9, 'B+']]
      }
    },
    fontColor:{
      type: String,
      default: '#fff'
    },
    countClass: {
      type: String,
      default: ''
    },
    unitClass: {
      type: String,
      default: ''
    }
  },
  computed: {
    counterId () {
      return `count_to_${this._uid}`
    }
  },
  watch: {
    endVal (newVal) {
      let endVal = this.getValue(newVal)
      this.counter.update(endVal)
    }
  },
  methods:{
    getValue (val) {
      let res = 0
      if (this.simplify) {
        let { endVal, unitText } = this.transformValue(val)
        this.unitText = unitText
        res = endVal
      } else {
        res = val
      }
      return res
    },
    transformValue (val) {
      let len = this.unit.length
      let res = {
        endVal: 0,
        unitText: ''
      }
      // 小于3位数
      if (val < Math.pow(10, this.unit[0][0])) res.endVal = val
      else {
        for (let i = 1; i < len; i++){
          if (val >= Math.pow(10, this.unit[i - 1][0]) && val < Math.pow(10, this.unit[i][0])) res = this.getHandleVal(val, i)
        }
      }
      if (val > Math.pow(10, this.unit[len - 1][0])) res = this.getHandleVal(val, len)
      return res
    },
    getHandleVal (val, index) {
      return {
        endVal: parseInt(val / Math.pow(10, this.unit[index - 1][0])),
        unitText: this.unit[index - 1][1]
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      let endVal = this.getValue(this.endVal)
      this.counter = new CountUp(this.counterId, this.startVal, endVal, this.decimals, this.duration, {
        useEasing: !this.useasing,
        useGrouping: this.usegroup,
        separator: this.separator,
        decimal: this.decimal
      })
      setTimeout(() => {
        if (!this.counter.error) this.counter.start()
      }, this.delay)
    })
  }
}
</script>
