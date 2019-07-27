<template>
  <div class="home-wrapper">
    <Row :gutter="20">
      <i-col :xs="24" :md="8" :lg="8" :xl="4"
        v-for="(info, i) in infoCardData" :key="`info-${i}`"
        style="height: 120px;padding-bottom: 10px;">
          <info-card :color="info.color" :icon="info.icon" :icon-size="50">
            <count-to :end-val="info.count"  usegroup count-class="count-class" :font-color="info.color"></count-to>
            <p>{{info.title}}</p>
          </info-card>
        </i-col>
    </Row>
    <Row :gutter="20">
      <i-col :lg="8" :md="24">
        <Card>
          <chart-pie style="height: 300px" :value="pieData" text="输出占比"></chart-pie>
        </Card>
      </i-col>
      <i-col :lg="16" :md="24">
        <Card>
          <chart-bar style="height: 300px" :value="barData" text="战斗力"></chart-bar>
        </Card>
      </i-col>
    </Row>
    <Row :gutter="20" type="flex">
      <i-col :lg="12">
        <Card class="card-img">
           <img src="../assets/img/marvel.jpg">
        </Card>
      </i-col>
      <i-col :lg="12">
        <Card class="card-img">
           <img src="../assets/img/bg_fulian3.jpg">
        </Card>
      </i-col>
    </Row>
  </div>
</template>
<script>
import CountTo from '_c/count-to'
import InfoCard from '_c/info-card'
import { ChartPie, ChartBar } from '_c/e-charts'
export default {
  name: 'home',
  components:{
    CountTo,
    InfoCard,
    ChartPie,
    ChartBar
  },
  data() {
    return {
      infoCardData: [
        { title: '所有英雄', icon: 'meiguoduichang3', count: 1526, color: '#2d8cf0' },
        { title: '种族划分', icon: 'lvjuren3', count: 162, color: '#19be6b' },
        { title: '地球英雄', icon: 'leishen2', count: 272, color: '#ff9900' },
        { title: '动漫剧集', icon: 'gangtiexia5', count: 657, color: '#ed3f14' },
        { title: '上映电影', icon: 'fuchouzhelianmeng-heiguafu', count: 22, color: '#E46CBB' },
        { title: '新增英雄', icon: 'fuchouzhelianmeng-yingyan', count: 14, color: '#9A66E4' }
      ],
      pieData: [
        { value: 32, name: '美国队长', itemStyle:{ color: '#2d8cf0'} },
        { value: 27, name: '雷神', itemStyle:{ color: '#ff9900'}  },
        { value: 30, name: '绿巨人', itemStyle:{ color: '#19be6b'}  },
        { value: 40, name: '钢铁侠', itemStyle:{ color: '#ed3f14'}  },
        { value: 21, name: '黑寡妇', itemStyle:{ color: '#E46CBB'}  },
        { value: 22, name: '鹰眼', itemStyle:{ color: '#9A66E4'} }
      ],
      barData: {
        '美国队长': '6642',
        '雷神': '8642',
        '绿巨人': '9642',
        '钢铁侠': '7726',
        '黑寡妇': '4982',
        '鹰眼': '5827',
      }
    }
  },
}
</script>
<style lang="less">
.home-wrapper{
  .ivu-row{
    margin-bottom: 10px;
  }
  .count-class{
  font-size: 3vw;
  }
  .card-img{
    height: 100%;
    .ivu-card-body{
      height: 100%;
      overflow: hidden;
      img{
        width: 100%;
        height: 100%
      }
    }
  }
}

</style>

