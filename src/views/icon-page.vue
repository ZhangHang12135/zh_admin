<template>
  <Row type="flex" :gutter="20">
    <i-col v-for="(item, index ) in iconlist" :key="`icon_${index}`">
      <card-icon :title="item.title" :icon="item.icon" style="margin: 10px"></card-icon>
    </i-col>
  </Row>
</template>
<script>
import CardIcon from '_c/card-icon'
export default {
  components: {
    CardIcon
  },
  data() {
    return {
      iconlist: [
        { title: '蜘蛛侠', icon: 'zhizhuxia6'},
        { title: '宇宙队长蜘蛛侠', icon: 'yuzhouduichangzhizhuxia'},
        { title: '终极蜘蛛侠', icon: 'zhongjizhizhuxia'},
        { title: '猩红蜘蛛侠', icon: 'xinghongzhizhuxia'},
        { title: '钢铁蜘蛛侠', icon: 'gangtiezhizhuxia'},
        { title: '蜘蛛侠2099', icon: 'zhizhuxia4'},
        { title: '蜘蛛格温', icon: 'zhizhugewen'},
        { title: '暗影蜘蛛侠', icon: 'anyingzhizhuxia'},
        { title: '毒液', icon: 'duye'},
        { title: '蚁人', icon: 'yiren'},
        { title: '钢铁侠', icon: 'gangtiexia5'},
        { title: '金刚狼', icon: 'jinganglang1'},
        { title: '美国队长', icon: 'meiguoduichang2'},
        { title: '雷神', icon: 'leishen2'},
        { title: '绿巨人', icon: 'lvjuren4'},
        { title: '神秘客', icon: 'shenmike'},
        { title: '屠杀', icon: 'tusha'},
        { title: '死侍', icon: 'sishi4'},
        { title: '快银', icon: 'kuaiyin'},
        { title: '金刚狼', icon: 'jinganglang3'},
        { title: '复联-美队', icon: 'fuchouzhelianmeng-meiguoduichang1'},
        { title: '红浩克', icon: 'honghaoke'},
        { title: '复联-蚁人', icon: 'fuchouzhelianmeng-yiren'},
        { title: '复联-美队1', icon: 'fuchouzhelianmeng-meiguoduichang'},
        { title: '复联-鹰眼', icon: 'fuchouzhelianmeng-yingyan'},
        { title: '复联-猎鹰', icon: 'fuchouzhelianmeng-lieying'},
        { title: '复联-雷神', icon: 'fuchouzhelianmeng-leishen'},
        { title: '奇异博士', icon: 'qiyiboshi'},
        { title: '复联-幻视', icon: 'fuchouzhelianmeng-huanshi'},
        { title: '复联-钢铁侠', icon: 'fuchouzhelianmeng-gangtiexia'},
        { title: '复联-浩克', icon: 'fuchouzhelianmeng-haoke'},
        { title: '复联-黑寡妇', icon: 'fuchouzhelianmeng-heiguafu'},
        { title: '复仇者联盟', icon: 'A'},
        { title: '美国队长', icon: 'meiguoduichang4'},
        { title: '美队盾牌-黑白', icon: 'meiguoduichang_zuoyetiaodu1'},
        { title: '雷神锤子', icon: 'leishen'},
        { title: '美队盾牌', icon: 'meiguoduichang'},
        { title: '死侍', icon: 'sishi'},
        { title: '复仇者联盟', icon: 'fuchouzhelianmeng'},
        { title: '钢铁侠', icon: 'gangtiexia3'},
        { title: '绿巨人', icon: 'lvjuren'},
        { title: 'zhizhuxia', icon: 'zhizhuxia'},
        { title: '金刚狼', icon: 'jinganglang'},
        { title: '钢铁侠-01', icon: 'gangtiexia-'},
        { title: '钢铁侠1', icon: 'gangtiexia2'},
        { title: '钢铁侠2', icon: 'gangtiexia1'},
        { title: '钢铁侠3', icon: 'gangtiexia'}
      ]
    }
  },
}
</script>
