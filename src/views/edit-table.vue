<template>
  <div class="edit-table-style">
    <Table :columns="columns" :data="pageTableData">
      <template v-slot:name="{ row, index }">
        <Input type="text" v-model="editName" v-if="editIndex === index" />
        <span v-else>{{ row.name }}</span>
      </template>

      <template v-slot:age="{ row, index }">
        <Input type="text" v-model="editAge" v-if="editIndex === index" />
        <span v-else>{{ row.age }}</span>
      </template>

      <template v-slot:email="{ row, index }">
        <Input type="text" v-model="editEmail" v-if="editIndex === index" />
        <span v-else>{{ row.email }}</span>
      </template>
      <template v-slot:action="{ row, index }">
        <div v-if="editIndex === index">
          <Button @click="handleSave(index)">保存</Button>
          <Button @click="editIndex = -1">取消</Button>
        </div>
        <div v-else>
          <Button @click="handleEdit(row, index)">编辑</Button>
          <Button @click="handleDelete(row, index)">删除</Button>
        </div>
      </template>
    </Table>
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
import { getTableData } from '@/api/data'
export default {
  data() {
    return {
      tableData: [],
      columns: [
        { key: 'name', title: '姓名', align: 'center', slot: 'name'},
        { key: 'age', title: '年龄', align: 'center', sortable: true, slot: 'age' },
        { key: 'email', title: '邮箱', align: 'center', slot: 'email'},
        { key: 'action', title: '操作', width: 150, align: 'center', slot: 'action'}
      ],
      current: 1, // 当前页码
      pageSize: 10, // 当前页面大小
      editIndex: -1, // 当前聚焦的输入框的行数
      editName: '',
      editAge: '',
      editEmail: '',
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
    },
    handleEdit (row, index) {
      this.editName = row.name
      this.editAge = row.age
      this.editEmail = row.email
      this.editIndex = index
    },
    handleSave (index) {
      // 这里应该调用api接口更新后台数据
      this.value[index].name = this.editName
      this.value[index].age = this.editAge
      this.value[index].email = this.editEmail
      this.editIndex = -1
    },
    handleDelete (row, index) {
      this.tableData.splice(index, 1)
      // 调接口
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

