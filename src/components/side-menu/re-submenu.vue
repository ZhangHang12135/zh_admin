<template>
  <Submenu :name="parent.name">
    <template slot="title">
      <icon-svg :size="20" :icon="parent.meta.icon"></icon-svg>
      {{ parent.meta.title }}
    </template>
    <template v-for="item in parent.children">
      <re-submenu
      v-if="item.children"
      :key="`menu_${item.name}`"
      :name="item.name"
      :parent="item">
      </re-submenu>
      <menu-item
      v-else
      :key="`menu_${item.name}`"
      :name="item.name"
      :parent="item">
      <icon-svg :size="20" :icon="parent.meta.icon"></icon-svg>
      {{ item.meta.title }}
      </menu-item>
    </template>
  </Submenu>
</template>
<script>
export default {
  name: 'ReSubmenu',
  props: {
    parent: {
      type: Object,
      default: () => ({})
    }
  },
  mounted () {
  }
}
</script>
<style lang="less">

</style>

