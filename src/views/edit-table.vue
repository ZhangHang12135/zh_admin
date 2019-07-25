<template>
  <div class="edit-table-style">
    <edit-table-mul :columns="columns" v-model="pageTableData"></edit-table-mul>
    <Page
    :total="tableDataCount"
    @on-change="changePage"
    @on-page-size-change="changePageSize"
    show-total
    show-sizer
    placement="top"
    class-name="page-style"/>
  </div>
</template>
<script>
import EditTableMul from '_c/edit-table-mul'
import { getTableData } from '@/api/data'
export default {
  components: {
    EditTableMul
  },
  data() {
    return {
      tableData: [],
      columns: [
        { key: 'name', title: '姓名'},
        { key: 'age', title: '年龄', sortable: true, editable: true },
        { key: 'email', title: '邮箱', editable: true}
      ],
      current: 1,
      pageSize: 10
    }
  },
  computed: {
    tableDataCount () {
      return this.tableData.length
    },
    pageBeginNum () {
      return (this.current - 1) * this.pageSize
    },
    pageTableData () {
      return this.tableData.slice(this.pageBeginNum, this.pageBeginNum + this.pageSize)
    }
  },
  methods: {
    changePage (pageId){
      this.current = pageId
    },
    changePageSize (pageSize) {
      this.pageSize = pageSize
    }
  },
  mounted () {
    getTableData().then(res => {
      this.tableData = res
    })
  }
}
</script>
<style lang="less">
.edit-table-style{
  .ivu-table-wrapper{
    border-radius: 6px;
  }
  .page-style{
    margin: 10px;
  }
}

</style>

