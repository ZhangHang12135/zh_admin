<template>
  <Card :shadow="shadow" class="info-card-wrapper" :padding="0">
    <div class="info-content-con">
      <div class="left-area" :style="{background: color,width: leftWidth}">
        <icon-svg :icon="icon" :size="iconSize" class="icon-svg"></icon-svg>
      </div>
      <div class="right-area" :style="{width: rightWidth}">
        <div>
          <slot></slot>
        </div>
      </div>
    </div>
  </Card>
</template>
<script>
export default {
  name: 'InfoCard',
  props:{
    left: {
      type: Number,
      default: 36
    },
    color: {
      type: String,
      default: '#2d8cf0'
    },
    icon:{
      type: String,
      default: ''
    },
    iconSize: {
      type: Number,
      default: 20
    },
    shadow: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    leftWidth () {
      return `${this.left}%`
    },
    rightWidth () {
      return `${100 - this.left}%`
    }
  }
}
</script>
<style lang="less">
.common{
  float: left;
  height: 100%;
  display: table;
  text-align: center;
}
.size{
  width: 100%;
  height: 100%;
}
.middle-center{
  display: table-cell;
  vertical-align: middle;
}
.info-card-wrapper{
  .size;
  overflow: hidden;
  .ivu-card-body{
    .size;
  }
  .info-content-con{
    .size;
    position: relative;
    .left-area{
      .common;
      & > .icon-svg{
        .middle-center;
        height: 100%;
        margin: auto auto;
      }
    }
    .right-area{
      .common;
      & > div{
        .middle-center;
      }
    }
  }
}
</style>
