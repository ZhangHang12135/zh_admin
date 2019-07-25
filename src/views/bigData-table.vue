<template>
  <div class="bigdata-wrapper">
    <bigdata-table
      ref="bigtable"
      v-model="tableDataHandled"
      :columns="columns"
      fixed
      stripe
      start-edit-type="dblclick"
      :can-edit="true"
      >
    </bigdata-table>
  </div>
</template>
<script>
import bigdataTable from '_c/vue-bigdata-table'
import { getBigData } from '@/api/data'
export default {
  components:{
    bigdataTable
  },
  data() {
    return {
      tableData: [],
      columns: [
        {title: '姓名', align: 'center'},
        {title: '年龄', align: 'center'},
        {title: '出生年月', align: 'center'},
        {title: '身份证号', align: 'center'},
        {title: '家庭住址', align: 'center'},
        {title: '邮政编码', align: 'center'}
      ],
      tableDataHandled: []
    }
  },
  mounted() {
    getBigData().then(data => {
      // 因为这里并不是真的调用接口，而是mock模拟的，所以很大部分事件是用来生成数据了
      this.tableDataHandled = data
    })
  },
}
</script>
<style lang="less">
.bigdata-wrapper{
  margin: 0px auto;
  padding: 40px;
  width: 100%;
  height: 500px;
  overflow: auto;
  .edit-btn{
    margin: 12px 2px 0 0 !important;
    .icon{
      position: static;
    }
  }
}

</style>


