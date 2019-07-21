<template>
  <div class="side-menu-wrapper">
    <slot></slot>
    <Menu></Menu>
  </div>
</template>
<script>
import ReSubmenu from './re-submenu.vue'
import ReDropdown from './re-dropdown.vue'
export default {
  name: 'SideMenu',
  components: {
    ReSubmenu,
    ReDropdown
  }
}
</script>
<style lang="less">
.side-menu-wrapper{
  width: 100%;
}
</style>

