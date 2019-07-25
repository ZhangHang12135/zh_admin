<template>
  <Table :columns="columns" :data="value">
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
        <Button @click="handleEdit(row, index)">操作</Button>
      </div>
      <Button @click="handleDelete(row, index)">删除</Button>
    </template>
  </Table>
</template>
<script>
export default {
  name: 'EditTableMul',
  data() {
    return {
      // insideColuments: [],
      // 这里的可编辑应该放到 单页上的，这里这样写的话其实没有剥离table组件
      editIndex: -1, // 当前聚焦的输入框的行数
      editName: '',
      editAge: '',
      editEmail: '',
    }
  },
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    value: {
      type: Array,
      default: () => []
    }
  },
  methods: {
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
      this.value.splice(index, 1)
    }
  }
  // mounted () {
  //   this.insideColuments = this.columns
  // }
}
</script>
