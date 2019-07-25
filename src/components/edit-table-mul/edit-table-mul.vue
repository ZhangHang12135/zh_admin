<template>
  <Table :columns="insideColuments" :data="value"></Table>
</template>
<script>
export default {
  name: 'EditTableMul',
  data() {
    return {
      insideColuments: []
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
  mounted () {
    this.insideColuments = this.columns
  }
}
</script>
