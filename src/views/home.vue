<template>
  <div class="home-wrapper">
    <count-to :end-val="10200"  usegroup count-class="count-class"></count-to>
  </div>
</template>
<script>
import CountTo from '_c/count-to'
export default {
  name: 'home',
  components:{
    CountTo
  }
}
</script>
<style lang="less">
.home-wrapper{
  .count-class{
  font-size: 25px;
  color: red;
  }
}

</style>

