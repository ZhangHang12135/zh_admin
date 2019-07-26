<template>
  <div class="home-wrapper">
    <Row :gutter="20">
      <i-col :xs="12" :md="8" :lg="4"
        v-for="(info, i) in infoCardData" :key="`info-${i}`"
        style="height: 120px;padding-bottom: 10px;">
          <info-card :color="info.color" :icon="info.icon" :icon-size="50">
            <count-to :end-val="info.count"  usegroup count-class="count-class"></count-to>
            <p>{{info.title}}</p>
          </info-card>
        </i-col>
    </Row>
    <Row>
    </Row>
  </div>
</template>
<script>
import CountTo from '_c/count-to'
import InfoCard from '_c/info-card'
export default {
  name: 'home',
  components:{
    CountTo,
    InfoCard
  },
  data() {
    return {
      infoCardData: [
        { title: '新增用户', icon: 'meiguoduichang3', count: 803, color: '#2d8cf0' },
        { title: '累计点击', icon: 'lvjuren3', count: 232, color: '#19be6b' },
        { title: '新增问答', icon: 'leishen2', count: 142, color: '#ff9900' },
        { title: '分享统计', icon: 'gangtiexia5', count: 657, color: '#ed3f14' },
        { title: '新增互动', icon: 'fuchouzhelianmeng-heiguafu', count: 12, color: '#E46CBB' },
        { title: '新增页面', icon: 'fuchouzhelianmeng-yingyan', count: 14, color: '#9A66E4' }
      ],
    }
  },
}
</script>
<style lang="less">
.home-wrapper{
  .count-class{
  font-size: 45px;
  color: red;
  }
}

</style>

