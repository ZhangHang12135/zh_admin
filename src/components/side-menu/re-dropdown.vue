<template>
  <Dropdown @on-click="handleClick" transfer placement="right-start">
    <span class="drop-menu-span" :style="titleStyle">
      <icon-svg :size="20" :icon="parent.meta.icon"></icon-svg>
      <span v-if="showTitle">
        {{ parent.meta.title }}
        <Icon type="ios-arrow-forward" :size="16" />
      </span>

    </span>
    <DropdownMenu slot="list">
      <template v-for="item in parent.children">
          <re-dropdown
          v-if="item.children"
          :key="`drop_${item.name}`"
          :parent="item">
          </re-dropdown>
          <DropdownItem
          v-else
          :key="`drop_${item.name}`"
          :name="item.name">
          <icon-svg :size="20" :icon="item.meta.icon"></icon-svg>
          {{ item.meta.title }}
          </DropdownItem>
      </template>
    </DropdownMenu>
  </Dropdown>
</template>
<script>
export default {
  name: 'ReDropdown',
  props: {
    parent: {
      type: Object,
      default: () => ({})
    },
    showTitle: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    titleStyle () {
      return {
        textAlign: this.showTitle ? 'left':'center',
        paddingLeft: this.showTitle ? '16px' : ''
      }
    }
  },
  methods: {
    handleClick (name) {
      if (!this.showTitle) this.$emit('on-select', name)
    }
  }
}
</script>

