<template>
  <Tooltip placement="top" theme="light">
    <Card>
      <icon-svg :icon="icon" :size="50"></icon-svg>
    </Card>
    <div slot="content">
      <p>{{ title }}</p>
      <p>{{ icon }}</p>
    </div>
  </Tooltip>
</template>
<script>
export default {
  name: 'CardIcon',
  props:{
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
